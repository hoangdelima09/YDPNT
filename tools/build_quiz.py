#!/usr/bin/env python3
"""Chuyển ngân hàng 200 câu hỏi (.docx đã trích ra .txt) thành assets/js/quiz.js.

Dùng:  python3 tools/build_quiz.py <q200.txt> assets/js/quiz.js
"""
import json, re, sys

src, out = sys.argv[1], sys.argv[2]
text = open(src, encoding="utf8").read()


# Các câu có nội dung lệch hoặc diễn đạt sai so với văn bản gốc – sửa ở đây để chạy lại script vẫn giữ nguyên.
#  n: số câu; opt: sửa nội dung đáp án đúng; explain/todo/when: sửa phần giải thích.
PATCHES = {
    13: {"opt": "NÊN chia sẻ, để người nhà đi xét nghiệm và tiêm phòng bảo vệ"},   # bản gốc ghi "KHÔNG NÊN, cần chia sẻ" (tự mâu thuẫn)
    121: {"opt": "Khi trẻ 7 đến 12 tháng tuổi (nếu tiêm vắc xin muộn lịch thì 1–2 tháng sau mũi cuối)",
          "explain": "QĐ 678/QĐ-BYT hướng dẫn xét nghiệm HBsAg cho trẻ sinh ra từ mẹ nhiễm khi trẻ 7–12 tháng tuổi để khẳng định bé không nhiễm HBV.",
          "todo": "Đưa trẻ đi thử máu đúng mốc 7–12 tháng tuổi; nếu bé tiêm vắc xin trễ lịch thì xét nghiệm sau khi hoàn thành mũi cuối 1–2 tháng."},
    122: {"explain": "Đo tải lượng virus (hoặc HBeAg) giúp bác sĩ quyết định có cần cho mẹ uống tenofovir dự phòng từ thai kỳ thứ 2 hay không (ngưỡng HBV DNA ≥ 200.000 IU/mL hoặc HBeAg dương tính)."},
    123: {"opt": "Thường bắt đầu từ thai kỳ thứ 2 (từ tuần thai thứ 14) khi HBV DNA ≥ 200.000 IU/mL hoặc HBeAg dương tính",
          "explain": "Theo QĐ 678/QĐ-BYT và QĐ 1740/QĐ-BYT, tenofovir dự phòng bắt đầu từ thai kỳ thứ 2 càng sớm càng tốt (từ tuần thai thứ 14) và kéo dài đến ít nhất 3 tháng sau sinh; nếu không xét nghiệm được HBV DNA/HBeAg thì dùng cho mọi thai phụ HBsAg dương tính."},
    126: {"explain": "Với trẻ sơ sinh nhẹ cân, bác sĩ nhi sơ sinh sẽ đánh giá để chọn lịch tiêm vắc xin và HBIG phù hợp; mọi trẻ đều cần được dự phòng đúng chỉ định."},
}

topics, questions = [], []
cur_topic = None
blocks = re.split(r"\n(?=Câu \d+ \[VGB-\d+\]|CHỦ ĐỀ \d+\.)", text)
for b in blocks:
    b = b.strip()
    m = re.match(r"CHỦ ĐỀ (\d+)\.\s*(.+)", b)
    if m:
        cur_topic = int(m.group(1))
        topics.append({"id": cur_topic, "name": m.group(2).strip()})
        continue
    m = re.match(r"Câu (\d+) \[(VGB-\d+)\]:\s*(.+)", b)
    if not m:
        continue
    num, qid, q = int(m.group(1)), m.group(2), m.group(3).strip()
    lines = b.split("\n")[1:]
    opts, correct, rest = {}, None, []
    for ln in lines:
        om = re.match(r"^\s*(✓\s*)?([ABCD])\.\s*(.+)$", ln)
        if om and not rest:
            opts[om.group(2)] = om.group(3).strip()
            if om.group(1):
                correct = om.group(2)
        else:
            rest.append(ln.strip())
    tail = " ".join(rest)
    parts = [p.strip() for p in tail.split("•") if p.strip()]
    info = {}
    for p in parts:
        k, _, v = p.partition(":")
        k = k.strip().lower()
        v = v.strip()
        if k.startswith("giải thích"): info["explain"] = v
        elif k.startswith("người dân nên"): info["todo"] = v
        elif k.startswith("khi nào"): info["when"] = v
        elif k.startswith("tài liệu"): info["ref"] = v
    pt = PATCHES.get(num, {})
    if "opt" in pt:
        opts["ABCD"[ "ABCD".index(correct)]] = pt["opt"]
    for k in ("explain", "todo", "when"):
        if k in pt:
            info[k] = pt[k]
    questions.append({"id": "VGB-%03d" % num, "n": num, "topic": cur_topic, "q": q,
                      "options": [opts.get(l, "") for l in "ABCD"], "answer": "ABCD".index(correct) if correct else -1, **info})

bad = [q["id"] for q in questions if q["answer"] < 0 or "" in q["options"] or "explain" not in q]
print("topics", len(topics), "questions", len(questions), "problems", bad)
with open(out, "w", encoding="utf8") as f:
    f.write("/* Ngân hàng 200 câu hỏi trắc nghiệm giáo dục sức khỏe viêm gan vi rút B (VGB-001 … VGB-200).\n"
            "   Sinh tự động bởi tools/build_quiz.py từ tài liệu 'Ngân hàng 200 câu hỏi về HBV cho người trưởng thành'. */\n")
    f.write("window.QUIZ = " + json.dumps({"topics": topics, "questions": questions}, ensure_ascii=False, indent=0) + ";\n")
