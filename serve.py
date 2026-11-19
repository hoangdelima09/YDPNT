#!/usr/bin/env python3
"""Server chạy local cho website: phục vụ file tĩnh (tắt cache) + API chatbot dùng Google Gemini.

Chạy:  python3 serve.py [cổng]      (mặc định 8000)

Khóa API đọc từ file .env (GEMINI_API_KEY=...) hoặc biến môi trường – KHÔNG đặt trong JavaScript của trang.
Kiến thức của bot lấy từ functions/_lib/knowledge.json (tạo bằng: python3 tools/build_kb.py).
"""
import json
import math
import os
import re
import sys
import threading
import time
import unicodedata
import urllib.error
import urllib.request
from collections import Counter, defaultdict
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

ROOT = os.path.dirname(os.path.abspath(__file__))
os.chdir(ROOT)

MODELS = ["gemini-3.8-flash", "gemini-3.7-flash", "gemini-3.1-flash-lite", "gemini-flash-lite-latest", "gemini-3.5-flash"]
GEMINI_URL = "https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent"
MAX_MESSAGE = 1200
TOP_K = 10
RATE_LIMIT = (20, 60)          # tối đa 20 yêu cầu / 60 giây cho mỗi địa chỉ IP


def load_env():
    path = os.path.join(ROOT, ".env")
    if os.path.exists(path):
        for line in open(path, encoding="utf8"):
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                k, v = line.split("=", 1)
                os.environ.setdefault(k.strip(), v.strip().strip('"').strip("'"))


load_env()
API_KEY = os.environ.get("GEMINI_API_KEY", "")


# ---------------------------------------------------------------------------
# Truy xuất kiến thức (BM25 đơn giản, không dấu để gõ không dấu vẫn tìm được)
# ---------------------------------------------------------------------------
def fold(s):
    s = unicodedata.normalize("NFD", s.lower().replace("đ", "d"))
    return "".join(c for c in s if unicodedata.category(c) != "Mn")


def tokens(s):
    w = re.findall(r"[a-z0-9]+", fold(s))
    return w + [a + "_" + b for a, b in zip(w, w[1:])]


class KnowledgeBase:
    def __init__(self, path):
        self.chunks = json.load(open(path, encoding="utf8")) if os.path.exists(path) else []
        self.docs = [Counter(tokens(c["title"] + " " + c["title"] + " " + c["text"])) for c in self.chunks]
        self.len = [sum(d.values()) or 1 for d in self.docs]
        self.avg = (sum(self.len) / len(self.len)) if self.len else 1
        df = defaultdict(int)
        for d in self.docs:
            for t in d:
                df[t] += 1
        n = len(self.docs)
        self.idf = {t: math.log(1 + (n - f + 0.5) / (f + 0.5)) for t, f in df.items()}

    def search(self, query, k=TOP_K):
        q = tokens(query)
        scores = []
        for i, d in enumerate(self.docs):
            s = 0.0
            for t in q:
                f = d.get(t)
                if f:
                    s += self.idf.get(t, 0) * f * 2.2 / (f + 1.2 * (0.25 + 0.75 * self.len[i] / self.avg))
            if s > 0:
                scores.append((s, i))
        scores.sort(reverse=True)
        return [self.chunks[i] for _, i in scores[:k]]


KB = KnowledgeBase(os.path.join(ROOT, "functions", "_lib", "knowledge.json"))

# Lời nhắc (prompt) dùng chung với bản Cloudflare Functions để hai nơi không lệch nhau
_P = json.load(open(os.path.join(ROOT, "functions", "_lib", "prompts.json"), encoding="utf8"))
SYSTEM, TOPIC_HINT, VERIFY_SYSTEM = _P["system"], _P["topics"], _P["verify"]


def build_context(question, history):
    # dùng cả câu hỏi trước đó để tìm kiếm khi câu hỏi hiện tại ngắn (ví dụ "còn trẻ em thì sao?")
    q = question
    if len(question.split()) < 6 and history:
        prev = [m["text"] for m in history if m["role"] == "user"][-1:]
        q = " ".join(prev + [question])
    hits = KB.search(q)
    return "\n\n".join(f"[{i + 1}] {h['title']} (nguồn: {h['source']})\n{h['text']}" for i, h in enumerate(hits)), hits


_cooldown = {}          # model -> thời điểm được thử lại (khi hết hạn mức / quá tải)


def gemini(system, contents, gen=None):
    """Gọi Gemini, tự chuyển sang model dự phòng khi model chính hết hạn mức hoặc quá tải."""
    body = json.dumps({
        "systemInstruction": {"parts": [{"text": system}]},
        "contents": contents,
        "generationConfig": {"temperature": 0.3, "maxOutputTokens": 1200, **(gen or {})},
        "safetySettings": [{"category": c, "threshold": "BLOCK_ONLY_HIGH"} for c in
                           ("HARM_CATEGORY_HARASSMENT", "HARM_CATEGORY_HATE_SPEECH",
                            "HARM_CATEGORY_SEXUALLY_EXPLICIT", "HARM_CATEGORY_DANGEROUS_CONTENT")],
    }).encode()
    deadline = time.time() + 60
    last = "unknown"
    for model in MODELS:
        if time.time() > deadline:
            break
        if _cooldown.get(model, 0) > time.time():
            continue
        req = urllib.request.Request(GEMINI_URL.format(model=model), data=body,
                                     headers={"Content-Type": "application/json", "x-goog-api-key": API_KEY})
        try:
            r = json.load(urllib.request.urlopen(req, timeout=max(5, min(30, deadline - time.time()))))
            cand = (r.get("candidates") or [{}])[0]
            text = "".join(p.get("text", "") for p in cand.get("content", {}).get("parts", []) if not p.get("thought"))
            if text.strip():
                return text.strip()
            last = f"{model} empty:{cand.get('finishReason')}"
        except urllib.error.HTTPError as e:
            last = f"{model} HTTP {e.code}"
            if e.code in (401, 403):                # khóa sai/bị chặn: model khác cũng vô ích
                raise RuntimeError(last)
            if e.code in (429, 500, 502, 503, 504):  # hết hạn mức/quá tải: nghỉ model này 60 giây
                _cooldown[model] = time.time() + 60
            elif e.code == 404:                      # model không còn: bỏ qua lâu hơn
                _cooldown[model] = time.time() + 3600
        except Exception as e:                       # noqa: BLE001 – mạng/timeout
            last = f"{model} {type(e).__name__}"
            _cooldown[model] = time.time() + 30
    raise RuntimeError(last)


_hits = defaultdict(list)
_lock = threading.Lock()


def rate_ok(ip):
    now = time.time()
    with _lock:
        _hits[ip] = [t for t in _hits[ip] if now - t < RATE_LIMIT[1]]
        if len(_hits[ip]) >= RATE_LIMIT[0]:
            return False
        _hits[ip].append(now)
        return True


def answer(payload):
    message = str(payload.get("message", "")).strip()[:MAX_MESSAGE]
    if not message:
        raise ValueError("empty")
    history = [{"role": "user" if m.get("role") == "user" else "model", "text": str(m.get("text", ""))[:2000]}
               for m in (payload.get("history") or [])[-8:] if isinstance(m, dict)]
    ctx, hits = build_context(message, [{"role": "user" if h["role"] == "user" else "bot", "text": h["text"]} for h in history])
    topic = TOPIC_HINT.get(str(payload.get("topic", "")), "")
    system = f"{SYSTEM}\n\n{topic}\nNgôn ngữ giao diện hiện tại: {'English' if payload.get('lang') == 'en' else 'Tiếng Việt'}.\n\nKIẾN THỨC CỦA WEBSITE\n{ctx}"
    contents = []
    for h in history:
        if not contents and h["role"] == "model":
            continue                                  # Gemini yêu cầu lượt đầu là của người dùng
        if contents and contents[-1]["role"] == h["role"]:
            contents[-1]["parts"][0]["text"] += "\n" + h["text"]
        else:
            contents.append({"role": h["role"], "parts": [{"text": h["text"]}]})
    if contents and contents[-1]["role"] == "user":
        contents.pop()                                # tránh hai lượt user liên tiếp
    contents.append({"role": "user", "parts": [{"text": message}]})
    seen, sources = set(), []
    for h in hits[:6]:                               # gợi ý bài đọc thêm: bỏ trùng, rút gọn tiêu đề
        link = h.get("link", "")
        if link and link not in seen and len(sources) < 3:
            seen.add(link)
            title = re.split(r" – | \[", h["title"])[0]
            sources.append({"title": title if len(title) <= 70 else title[:67] + "…", "link": link})
    return gemini(system, contents), sources


VERDICTS = ("accurate", "partial", "inaccurate", "insufficient")


def verify(payload):
    claim = str(payload.get("claim", "")).strip()[:1500]
    if len(claim) < 8:
        raise ValueError("short")
    hits = KB.search(claim, 8)
    ctx = "\n\n".join(f"[{i + 1}] {h['title']} (nguồn: {h['source']})\n{h['text']}" for i, h in enumerate(hits))
    system = f"{VERIFY_SYSTEM}\n\nNgôn ngữ giao diện hiện tại: {'English' if payload.get('lang') == 'en' else 'Tiếng Việt'}.\n\nKIẾN THỨC CỦA WEBSITE\n{ctx}"
    raw = gemini(system, [{"role": "user", "parts": [{"text": "THÔNG TIN CẦN KIỂM CHỨNG:\n" + claim}]}],
                 {"responseMimeType": "application/json", "temperature": 0.2, "maxOutputTokens": 1500})
    try:
        data = json.loads(raw)
    except ValueError:
        m = re.search(r"\{.*\}", raw, re.S)
        data = json.loads(m.group(0)) if m else {}
    if isinstance(data, list) and data:
        data = data[0]
    verdict = data.get("verdict") if data.get("verdict") in VERDICTS else "insufficient"
    used = [i - 1 for i in data.get("used", []) if isinstance(i, int) and 1 <= i <= len(hits)]
    seen, sources = set(), []
    for h in [hits[i] for i in used] + hits[:3]:      # ưu tiên đoạn mô hình đã dùng, bổ sung đoạn gần nhất
        link = h.get("link", "")
        if link and link not in seen and len(sources) < 4:
            seen.add(link)
            title = re.split(r" – | \[", h["title"])[0]
            sources.append({"title": title if len(title) <= 80 else title[:77] + "…", "link": link, "source": h["source"]})
    return {"verdict": verdict, "headline": str(data.get("headline", ""))[:300], "explanation": str(data.get("explanation", ""))[:2500],
            "recommendation": str(data.get("recommendation", ""))[:1200], "urgent": bool(data.get("urgent")), "sources": sources}


# ---------------------------------------------------------------------------
class Handler(SimpleHTTPRequestHandler):
    BLOCKED = (".env", ".dev.vars", "/tools", "/functions", "/kb", "/dist", "/.git", "/serve.py", "/wrangler.toml", "/node_modules")

    def end_headers(self):
        self.send_header("Cache-Control", "no-store, must-revalidate")
        super().end_headers()

    def _blocked(self):
        p = self.path.split("?")[0].lower()
        return p.endswith(".py") or any(b in p for b in self.BLOCKED)

    def do_GET(self):
        if self._blocked():
            return self.send_error(404)
        super().do_GET()

    def do_HEAD(self):
        if self._blocked():
            return self.send_error(404)
        super().do_HEAD()

    def _json(self, code, obj):
        data = json.dumps(obj, ensure_ascii=False).encode()
        self.send_response(code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        self.wfile.write(data)

    def do_POST(self):
        route = self.path.split("?")[0]
        if route not in ("/api/chat", "/api/verify"):
            return self._json(404, {"error": "not_found"})
        if not API_KEY:
            return self._json(503, {"error": "no_key"})
        if not rate_ok(self.client_address[0]):
            return self._json(429, {"error": "rate_limited"})
        try:
            n = int(self.headers.get("Content-Length", "0"))
            if n > 20000:
                return self._json(413, {"error": "too_large"})
            payload = json.loads(self.rfile.read(n) or b"{}")
            if route == "/api/verify":
                return self._json(200, verify(payload))
            text, sources = answer(payload)
            self._json(200, {"reply": text, "sources": sources})
        except ValueError:
            self._json(400, {"error": "bad_request"})
        except Exception as e:                     # noqa: BLE001
            print("chat error:", e, file=sys.stderr)
            self._json(502, {"error": "upstream"})

    def log_message(self, fmt, *args):
        if "/api/" in self.path or (args and isinstance(args[0], int) and args[0] >= 400):
            super().log_message(fmt, *args)


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    print(f"Đang chạy tại http://127.0.0.1:{port}  (Ctrl+C để dừng)")
    print(f"  Chatbot: {'sẵn sàng' if API_KEY else 'CHƯA có GEMINI_API_KEY trong .env'} · kiến thức: {len(KB.chunks)} đoạn")
    ThreadingHTTPServer(("127.0.0.1", port), Handler).serve_forever()
