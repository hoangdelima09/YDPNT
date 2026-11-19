// Logic chatbot MAI AI + MAI Verify chạy trên Cloudflare Pages Functions.
// Là bản JavaScript của phần API trong serve.py (chạy local) – hai nơi dùng chung
// prompts.json và knowledge.json. Khóa API lấy từ biến môi trường GEMINI_API_KEY.
import KB_DATA from "./knowledge.json" with { type: "json" };
import PROMPTS from "./prompts.json" with { type: "json" };

const MODELS = ["gemini-3.8-flash", "gemini-3.7-flash", "gemini-3.1-flash-lite", "gemini-flash-lite-latest", "gemini-3.5-flash"];
const GEMINI_URL = (m) => `https://generativelanguage.googleapis.com/v1beta/models/${m}:generateContent`;
const MAX_MESSAGE = 1200;
const VERDICTS = ["accurate", "partial", "inaccurate", "insufficient"];

/* ---------- Truy xuất kiến thức (BM25, không dấu) – dựng một lần khi isolate khởi động ---------- */
const fold = (s) => s.toLowerCase().replace(/đ/g, "d").normalize("NFD").replace(/[̀-ͯ]/g, "");
function tokens(s) {
  const w = fold(s).match(/[a-z0-9]+/g) || [];
  const out = w.slice();
  for (let i = 0; i < w.length - 1; i++) out.push(w[i] + "_" + w[i + 1]);
  return out;
}
const docs = KB_DATA.map((c) => {
  const m = new Map();
  for (const t of tokens(c.title + " " + c.title + " " + c.text)) m.set(t, (m.get(t) || 0) + 1);
  return m;
});
const lens = docs.map((d) => { let n = 0; for (const v of d.values()) n += v; return n || 1; });
const avgLen = lens.reduce((a, b) => a + b, 0) / (lens.length || 1);
const idf = new Map();
{
  const df = new Map();
  for (const d of docs) for (const t of d.keys()) df.set(t, (df.get(t) || 0) + 1);
  const n = docs.length;
  for (const [t, f] of df) idf.set(t, Math.log(1 + (n - f + 0.5) / (f + 0.5)));
}
function search(query, k = 10) {
  const q = tokens(query), scored = [];
  docs.forEach((d, i) => {
    let s = 0;
    for (const t of q) {
      const f = d.get(t);
      if (f) s += (idf.get(t) || 0) * f * 2.2 / (f + 1.2 * (0.25 + 0.75 * lens[i] / avgLen));
    }
    if (s > 0) scored.push([s, i]);
  });
  scored.sort((a, b) => b[0] - a[0]);
  return scored.slice(0, k).map(([, i]) => KB_DATA[i]);
}
const contextOf = (hits) => hits.map((h, i) => `[${i + 1}] ${h.title} (nguồn: ${h.source})\n${h.text}`).join("\n\n");
function sourceChips(hits, preferred = []) {
  const seen = new Set(), out = [];
  for (const h of [...preferred, ...hits.slice(0, 6)]) {
    if (h.link && !seen.has(h.link) && out.length < (preferred.length ? 4 : 3)) {
      seen.add(h.link);
      const title = h.title.split(/ – | \[/)[0];
      out.push({ title: title.length <= 70 ? title : title.slice(0, 67) + "…", link: h.link, source: h.source });
    }
  }
  return out;
}

/* ---------- Gọi Gemini, tự chuyển model dự phòng khi hết hạn mức / quá tải ---------- */
const cooldown = new Map(); // model -> thời điểm được thử lại (chỉ có hiệu lực trong isolate hiện tại)
async function gemini(env, system, contents, gen = {}) {
  const body = JSON.stringify({
    systemInstruction: { parts: [{ text: system }] },
    contents,
    generationConfig: { temperature: 0.3, maxOutputTokens: 1200, ...gen },
    safetySettings: ["HARASSMENT", "HATE_SPEECH", "SEXUALLY_EXPLICIT", "DANGEROUS_CONTENT"].map((c) => ({ category: "HARM_CATEGORY_" + c, threshold: "BLOCK_ONLY_HIGH" })),
  });
  const deadline = Date.now() + 25000; // Cloudflare ngắt request quá lâu; 25 giây là đủ cho 1–2 model
  let last = "unknown";
  for (const model of MODELS) {
    const left = deadline - Date.now();
    if (left < 3000) break;
    if ((cooldown.get(model) || 0) > Date.now()) continue;
    try {
      const res = await fetch(GEMINI_URL(model), {
        method: "POST", body, signal: AbortSignal.timeout(Math.min(14000, left)),
        headers: { "Content-Type": "application/json", "x-goog-api-key": env.GEMINI_API_KEY },
      });
      if (res.ok) {
        const r = await res.json();
        const parts = r.candidates?.[0]?.content?.parts || [];
        const text = parts.filter((p) => !p.thought).map((p) => p.text || "").join("").trim();
        if (text) return text;
        last = `${model} empty`;
      } else {
        last = `${model} HTTP ${res.status}`;
        if (res.status === 401 || res.status === 403) throw new Error(last);
        if ([429, 500, 502, 503, 504].includes(res.status)) cooldown.set(model, Date.now() + 60000);
        else if (res.status === 404) cooldown.set(model, Date.now() + 3600000);
      }
    } catch (e) {
      if (String(e.message).includes("HTTP 40")) throw e;
      last = `${model} ${e.name}`;
      cooldown.set(model, Date.now() + 30000);
    }
  }
  throw new Error(last);
}

/* ---------- Giới hạn tần suất (chỉ trong isolate – thêm Rate limiting rule trên Cloudflare để chặn thật sự) ---------- */
const hits = new Map();
function rateOk(ip) {
  const now = Date.now(), arr = (hits.get(ip) || []).filter((t) => now - t < 60000);
  if (arr.length >= 20) { hits.set(ip, arr); return false; }
  arr.push(now); hits.set(ip, arr);
  if (hits.size > 5000) hits.clear();
  return true;
}

const json = (obj, status = 200) => new Response(JSON.stringify(obj), { status, headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" } });

async function readPayload(request, env) {
  if (!env.GEMINI_API_KEY) return { err: json({ error: "no_key" }, 503) };
  if (!rateOk(request.headers.get("CF-Connecting-IP") || "local")) return { err: json({ error: "rate_limited" }, 429) };
  if (Number(request.headers.get("Content-Length") || 0) > 20000) return { err: json({ error: "too_large" }, 413) };
  try { return { payload: await request.json() }; } catch { return { err: json({ error: "bad_request" }, 400) }; }
}

/* ---------- /api/chat ---------- */
export async function handleChat(request, env) {
  const { payload, err } = await readPayload(request, env);
  if (err) return err;
  const message = String(payload.message || "").trim().slice(0, MAX_MESSAGE);
  if (!message) return json({ error: "bad_request" }, 400);
  const history = (Array.isArray(payload.history) ? payload.history : []).slice(-8)
    .filter((m) => m && typeof m === "object")
    .map((m) => ({ role: m.role === "user" ? "user" : "model", text: String(m.text || "").slice(0, 2000) }));
  let q = message;
  if (message.split(/\s+/).length < 6) {                       // câu ngắn: ghép với câu hỏi trước để tìm kiếm
    const prev = history.filter((m) => m.role === "user").slice(-1).map((m) => m.text);
    q = [...prev, message].join(" ");
  }
  const found = search(q);
  const topic = PROMPTS.topics[String(payload.topic)] || "";
  const system = `${PROMPTS.system}\n\n${topic}\nNgôn ngữ giao diện hiện tại: ${payload.lang === "en" ? "English" : "Tiếng Việt"}.\n\nKIẾN THỨC CỦA WEBSITE\n${contextOf(found)}`;
  const contents = [];
  for (const h of history) {
    if (!contents.length && h.role === "model") continue;      // Gemini yêu cầu lượt đầu là của người dùng
    if (contents.length && contents.at(-1).role === h.role) contents.at(-1).parts[0].text += "\n" + h.text;
    else contents.push({ role: h.role, parts: [{ text: h.text }] });
  }
  if (contents.length && contents.at(-1).role === "user") contents.pop();
  contents.push({ role: "user", parts: [{ text: message }] });
  try {
    return json({ reply: await gemini(env, system, contents), sources: sourceChips(found) });
  } catch (e) {
    console.log("chat error:", e.message);
    return json({ error: "upstream" }, 502);
  }
}

/* ---------- /api/verify ---------- */
export async function handleVerify(request, env) {
  const { payload, err } = await readPayload(request, env);
  if (err) return err;
  const claim = String(payload.claim || "").trim().slice(0, 1500);
  if (claim.length < 8) return json({ error: "bad_request" }, 400);
  const found = search(claim, 8);
  const system = `${PROMPTS.verify}\n\nNgôn ngữ giao diện hiện tại: ${payload.lang === "en" ? "English" : "Tiếng Việt"}.\n\nKIẾN THỨC CỦA WEBSITE\n${contextOf(found)}`;
  try {
    const raw = await gemini(env, system, [{ role: "user", parts: [{ text: "THÔNG TIN CẦN KIỂM CHỨNG:\n" + claim }] }],
      { responseMimeType: "application/json", temperature: 0.2, maxOutputTokens: 1500 });
    let data;
    try { data = JSON.parse(raw); } catch { const m = raw.match(/\{[\s\S]*\}/); data = m ? JSON.parse(m[0]) : {}; }
    if (Array.isArray(data)) data = data[0] || {};
    const used = (Array.isArray(data.used) ? data.used : []).filter((i) => Number.isInteger(i) && i >= 1 && i <= found.length).map((i) => found[i - 1]);
    return json({
      verdict: VERDICTS.includes(data.verdict) ? data.verdict : "insufficient",
      headline: String(data.headline || "").slice(0, 300),
      explanation: String(data.explanation || "").slice(0, 2500),
      recommendation: String(data.recommendation || "").slice(0, 1200),
      urgent: Boolean(data.urgent),
      sources: sourceChips(found, used),
    });
  } catch (e) {
    console.log("verify error:", e.message);
    return json({ error: "upstream" }, 502);
  }
}
