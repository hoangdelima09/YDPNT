#!/usr/bin/env python3
"""Dựng kho kiến thức cho chatbot MAI AI: functions/_lib/knowledge.json.

Nguồn: (1) các bài viết trong assets/js/data.js, (2) ngân hàng 200 câu hỏi (assets/js/quiz.js),
(3) vài đoạn giới thiệu website. Kiến thức của bot = kiến thức đã đăng trên web.

Theo ma trận an toàn của dự án: KHÔNG đưa vào bot các bảng liều thuốc (mg, mg/kg…) –
các mục này bị loại và thay bằng đoạn mô tả không nêu liều.

Chạy:  python3 tools/build_kb.py
"""
import html
import json
import os
import re
import subprocess

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
data = json.loads(subprocess.check_output(["node", os.path.join(ROOT, "tools", "dump_site.js")]))

# Các mục có liều thuốc – loại khỏi bot (theo tiêu đề h2)
DOSE_HEADINGS = ("Các thuốc kháng vi rút (người ≥ 12 tuổi)", "Thuốc dùng cho trẻ 2–11 tuổi")
MAX_CHARS = 1500


def clean(h):
    h = re.sub(r"</(tr)>", "\n", h)
    h = re.sub(r"</(td|th)>", " | ", h)
    h = re.sub(r"</(p|li|h3|div|ul|ol)>", "\n", h)
    h = re.sub(r"<li[^>]*>", "- ", h)
    h = re.sub(r"<[^>]+>", "", h)
    h = html.unescape(h)
    h = re.sub(r"[ \t]+", " ", h)
    h = re.sub(r" \| \n", "\n", h)
    h = re.sub(r"\n\s*\n+", "\n", h)
    return h.strip()


def sanitize_dose(t):
    t = re.sub(r"\b0,06\s?mL/kg\s?", "(liều tính theo cân nặng) ", t)
    t = re.sub(r"\s?\b\d+(?:[.,]\d+)?\s?(?:mg|µg)\b(?:/(?:ngày|kg|tuần))?", "", t)
    return t


def split_long(text):
    if len(text) <= MAX_CHARS:
        return [text]
    out, cur = [], ""
    for line in text.split("\n"):
        if len(cur) + len(line) > MAX_CHARS and cur:
            out.append(cur.strip())
            cur = ""
        cur += line + "\n"
    if cur.strip():
        out.append(cur.strip())
    return out


chunks = []
for a in data["articles"]:
    src = a["sources"][0]["label"].split(":")[0] if a["sources"] else a["title"]
    names = " · ".join(sorted({s["label"].split(" – ")[0].split(":")[0][:60] for s in a["sources"]}))
    parts = re.split(r"(?=<h2>)", a["body"])
    for part in parts:
        m = re.match(r"<h2>(.*?)</h2>", part)
        heading = html.unescape(re.sub(r"<[^>]+>", "", m.group(1))) if m else "Tóm tắt"
        if any(d in heading for d in DOSE_HEADINGS):
            continue
        body = sanitize_dose(clean(part))
        if len(body) < 40:
            continue
        for i, piece in enumerate(split_long(body)):
            chunks.append({"id": f"{a['id']}#{len(chunks)}", "title": f"{a['title']} – {heading}",
                           "text": piece, "source": f"bài \"{a['title']}\" ({names})", "link": f"#/bai/{a['id']}"})

# Mô tả thuốc không nêu liều (thay cho các bảng liều bị loại)
chunks.append({"id": "extra-thuoc", "title": "Thuốc kháng vi rút điều trị viêm gan B (không nêu liều)",
               "text": "Thuốc điều trị viêm gan B mạn thường dùng là nhóm thuốc uống nucleos(t)ide analogues (NAs): tenofovir disoproxil fumarate (TDF), tenofovir alafenamide (TAF) và entecavir (ETV). Đây là điều trị lâu dài, có thể suốt đời, cần uống đều đúng giờ mỗi ngày. TDF cần thận trọng/tránh ở người có bệnh thận, loãng xương hoặc nhiều yếu tố nguy cơ suy thận; TAF và ETV được ưu tiên cho người có bệnh thận hoặc loãng xương; ETV không dùng cho phụ nữ mang thai. Peg-interferon (tiêm 48 tuần) chỉ dùng trong một số trường hợp đặc biệt và có nhiều tác dụng phụ (giả cúm, mệt mỏi, giảm bạch cầu, rối loạn tuyến giáp, tâm thần). Trẻ em dưới 2 tuổi không chỉ định điều trị; trẻ 2–11 tuổi chỉ điều trị khi có chỉ định đặc biệt. Liều lượng được bác sĩ tính theo tuổi, cân nặng và chức năng thận – người dân không tự dùng, không tự đổi hay ngừng thuốc.",
               "source": "QĐ 1740/QĐ-BYT", "link": "#/bai/viem-gan-b-man"})

# Giới thiệu website
chunks.append({"id": "extra-mai", "title": "MAI là gì? Website có những gì?",
               "text": "MAI – Medical Awareness Intelligence là nền tảng truyền thông giáo dục sức khỏe ứng dụng trí tuệ nhân tạo, giúp người dân tiếp cận, hiểu đúng và kiểm chứng thông tin y tế. Giai đoạn đầu tập trung vào viêm gan vi rút B cho người dân TP. Hồ Chí Minh. Website gồm: Chẩn tin – MAI Verify (kiểm chứng thông tin y tế: nhập thông tin, nhận kết luận chính xác/đúng một phần/sai lệch/chưa đủ bằng chứng kèm giải thích và nguồn), MAI AI (chatbot hỏi đáp), Đào tạo (các bài kiến thức), Học tập (video giáo dục sức khỏe nhúng từ YouTube), Cuộc thi – MAI Learn (thử thách tuần, ngân hàng 200 câu trắc nghiệm có giải thích, khảo sát kiến thức ban đầu, ôn tập hằng ngày, chuỗi ngày học, huy hiệu), Diễn đàn (sắp ra mắt), Tin tức. Mục Đào tạo chia bài viết theo 2 nhóm chủ đề: Bệnh lây nhiễm; Bệnh không lây nhiễm. MAI chỉ cung cấp thông tin giáo dục sức khỏe, không thay thế bác sĩ, không chẩn đoán và không chỉ định điều trị. Nhóm phát triển là sinh viên liên ngành của Đại học Y Dược TP.HCM, Đại học Y khoa Phạm Ngọc Thạch và Đại học Bách khoa – ĐHQG TP.HCM.",
               "source": "Giới thiệu website MAI", "link": "#/gioi-thieu"})
chunks.append({"id": "extra-nguon", "title": "Nguồn tài liệu của website",
               "text": "Kiến thức trên website được biên soạn từ: Quyết định 1740/QĐ-BYT ngày 16/6/2026 của Bộ Y tế (Hướng dẫn chẩn đoán, điều trị viêm gan vi rút B); Quyết định 678/QĐ-BYT ngày 26/02/2025 (Hướng dẫn kỹ thuật các can thiệp dự phòng lây truyền HIV, viêm gan B và giang mai từ mẹ sang con); tài liệu WHO về viêm gan B; Hồ sơ loại trừ viêm gan quốc gia của Việt Nam (Coalition for Global Hepatitis Elimination, 2025); và ngân hàng 200 câu hỏi giáo dục sức khỏe viêm gan B của MAI.",
               "source": "Nguồn tài liệu", "link": "#/gioi-thieu"})

# Ngân hàng câu hỏi
topic = {t["id"]: t["name"] for t in data["quiz"]["topics"]}
for q in data["quiz"]["questions"]:
    text = f"Câu hỏi: {q['q']}\nTrả lời đúng: {q['options'][q['answer']]}\n"
    for key, label in (("explain", "Giải thích"), ("todo", "Người dân nên làm gì"), ("when", "Khi nào cần đi khám")):
        if q.get(key):
            text += f"{label}: {q[key]}\n"
    chunks.append({"id": q["id"], "title": f"{q['q']} [{topic[q['topic']]}]", "text": text.strip(),
                   "source": f"ngân hàng câu hỏi MAI, {q['id']} ({q.get('ref', 'QĐ 1740/QĐ-BYT')})", "link": f"#/cuoc-thi/chu-de/{q['topic']}"})

OUT = os.path.join(ROOT, "functions", "_lib", "knowledge.json")   # dùng chung cho serve.py (local) và Cloudflare Functions
os.makedirs(os.path.dirname(OUT), exist_ok=True)
with open(OUT, "w", encoding="utf8") as f:
    json.dump(chunks, f, ensure_ascii=False, indent=0)
n_art = sum(1 for c in chunks if "#/bai/" in c["link"])
print(f"{len(chunks)} đoạn kiến thức ({n_art} từ bài viết, {len(data['quiz']['questions'])} từ ngân hàng câu hỏi) -> functions/_lib/knowledge.json,",
      os.path.getsize(OUT) // 1024, "KB")
