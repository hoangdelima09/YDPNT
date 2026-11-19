/* MAI Learn – học tập và trắc nghiệm dựa trên ngân hàng 200 câu hỏi (assets/js/quiz.js).
   Tiến độ lưu trong localStorage của trình duyệt (chưa có tài khoản/máy chủ):
   câu đã làm, chuỗi ngày học (streak), điểm, huy hiệu, lịch sử bài làm. */

window.createLearn = function (ctx) {
  "use strict";
  const { QUIZ, lang } = ctx;
  const Q = QUIZ.questions, TOPICS = QUIZ.topics;
  const byId = Object.fromEntries(Q.map((q) => [q.id, q]));
  const KEY = "mai.learn.v1";

  /* ---------------- Chuỗi giao diện ---------------- */
  const LT = {
    vi: {
      learn: "Học tập", sub: "MAI Learn – học viêm gan B qua câu hỏi ngắn, có giải thích sau mỗi câu",
      streak: "Chuỗi ngày học", days: "ngày", points: "Điểm", done: "Đã nắm vững", of: "trên", questions: "câu",
      progress: "Hoàn thành lộ trình", correctLast: "câu đang đúng", continueBtn: "Tiếp tục học",
      surveyBtn: "Khảo sát kiến thức ban đầu", surveyHint: "12 câu, mỗi chủ đề 1 câu – giúp MAI biết bạn cần học gì trước.",
      reviewBtn: "Ôn tập hôm nay", reviewHint: "Tối đa 10 câu: ưu tiên câu bạn từng trả lời sai và chủ đề chưa vững.",
      examBtn: "Thi thử 20 câu", examHint: "20 câu ngẫu nhiên từ cả 12 chủ đề.",
      today: "Nhiệm vụ hôm nay", recommend: "MAI đề xuất", recommendNone: "Hãy làm khảo sát kiến thức ban đầu để MAI gợi ý bài học phù hợp.",
      recommendWhy: "Bạn cần củng cố chủ đề này", recommendNew: "Chủ đề tiếp theo chưa học",
      roadmap: "Lộ trình 12 chủ đề", roadmapSub: "Học theo thứ tự hoặc chọn chủ đề bạn quan tâm",
      st0: "Chưa học", st1: "Cần củng cố", st2: "Đã nắm vững", badges: "Huy hiệu", noBadges: "Chưa có huy hiệu – hoàn thành một bài để nhận huy hiệu đầu tiên.",
      history: "Bài làm gần đây", noHistory: "Chưa có bài làm nào.",
      topic: "Chủ đề", learnPart: "Bài đọc liên quan", remember: "Cần ghi nhớ", practice: "Luyện tập", startTopic: "Làm bài chủ đề",
      back: "Quay lại", question: "Câu", correct: "Chính xác!", wrong: "Chưa đúng", rightAnswer: "Đáp án đúng",
      explain: "Giải thích dễ hiểu", todo: "Người dân nên làm gì", when: "Khi nào cần đi khám", ref: "Tài liệu tham chiếu",
      next: "Câu tiếp theo", finish: "Xem kết quả", leave: "Thoát bài",
      resultTitle: "Kết quả", score: "Điểm số", levelGood: "Tốt", levelMid: "Trung bình", levelLow: "Cần cải thiện",
      levelNote: "Thang đánh giá: Tốt ≥ 80%, Trung bình 60% đến dưới 80%, Cần cải thiện < 60%.",
      byTopic: "Theo chủ đề", reviewWrong: "Ôn lại các câu sai", again: "Làm lại", home: "Về trang Học tập", wrongList: "Các câu cần xem lại",
      newBadge: "Huy hiệu mới", pointsGained: "điểm",
      modeSurvey: "Khảo sát kiến thức", modeReview: "Ôn tập hôm nay", modeExam: "Thi thử", modeTopic: "Chủ đề", modeWeek: "Thử thách tuần",
      empty: "Không có câu hỏi phù hợp.", disclaimer: "Câu hỏi nhằm giáo dục sức khỏe, không thay thế tư vấn của bác sĩ.",
      weekTitle: "Thử thách tuần", weekBest: "Điểm cao nhất tuần này", weekBtn: "Tham gia thử thách",
      lib: "Thư viện cuộc thi", libNow: "Đang diễn ra", libSoon: "Sắp diễn ra", libNone: "Chưa có cuộc thi sắp diễn ra.",
      board: "Bảng xếp hạng", boardNote: "Bảng xếp hạng toàn hệ thống cần tài khoản và máy chủ, sẽ được bổ sung sau. Hiện điểm và huy hiệu của bạn được lưu trên trình duyệt này.",
      b_first: "Khởi động", b_first_d: "Hoàn thành bài đầu tiên", b_s3: "Chuỗi 3 ngày", b_s3_d: "Học 3 ngày liên tiếp", b_s7: "Chuỗi 7 ngày", b_s7_d: "Học 7 ngày liên tiếp",
      b_perfect: "Điểm tuyệt đối", b_perfect_d: "Đạt 100% trong bài từ 10 câu", b_master: "Vững một chủ đề", b_master_d: "Nắm vững ít nhất 1 chủ đề", b_all: "Chinh phục 200 câu", b_all_d: "Đã làm hết 200 câu",
      level: "Mức", resetBtn: "Xóa tiến độ", resetAsk: "Xóa toàn bộ tiến độ học trên trình duyệt này?"
    },
    en: {
      learn: "Learn", sub: "MAI Learn – learn about hepatitis B through short questions with explanations",
      streak: "Day streak", days: "days", points: "Points", done: "Mastered", of: "of", questions: "questions",
      progress: "Roadmap completed", correctLast: "currently correct", continueBtn: "Continue learning",
      surveyBtn: "Baseline knowledge survey", surveyHint: "12 questions, one per topic – tells MAI what to teach you first.",
      reviewBtn: "Today's review", reviewHint: "Up to 10 questions: those you missed and weaker topics first.",
      examBtn: "Practice exam (20)", examHint: "20 random questions across all 12 topics.",
      today: "Today's tasks", recommend: "Suggested by MAI", recommendNone: "Take the baseline survey so MAI can suggest lessons.",
      recommendWhy: "You should reinforce this topic", recommendNew: "Next topic you haven't studied",
      roadmap: "12-topic roadmap", roadmapSub: "Follow the order or pick a topic you care about",
      st0: "Not started", st1: "Needs review", st2: "Mastered", badges: "Badges", noBadges: "No badges yet – finish a quiz to earn your first.",
      history: "Recent quizzes", noHistory: "No quizzes yet.",
      topic: "Topic", learnPart: "Related reading", remember: "Remember", practice: "Practice", startTopic: "Take topic quiz",
      back: "Back", question: "Question", correct: "Correct!", wrong: "Not quite", rightAnswer: "Correct answer",
      explain: "Plain explanation", todo: "What to do", when: "When to see a doctor", ref: "Reference",
      next: "Next question", finish: "See results", leave: "Leave quiz",
      resultTitle: "Results", score: "Score", levelGood: "Good", levelMid: "Fair", levelLow: "Needs improvement",
      levelNote: "Scale: Good ≥ 80%, Fair 60% to under 80%, Needs improvement < 60%.",
      byTopic: "By topic", reviewWrong: "Review missed questions", again: "Try again", home: "Back to Learn", wrongList: "Questions to review",
      newBadge: "New badge", pointsGained: "points",
      modeSurvey: "Knowledge survey", modeReview: "Today's review", modeExam: "Practice exam", modeTopic: "Topic", modeWeek: "Weekly challenge",
      empty: "No suitable questions.", disclaimer: "Questions are for health education and do not replace a doctor's advice.",
      weekTitle: "Weekly challenge", weekBest: "Best score this week", weekBtn: "Join the challenge",
      lib: "Contest library", libNow: "Ongoing", libSoon: "Upcoming", libNone: "No upcoming contests.",
      board: "Leaderboard", boardNote: "A site-wide leaderboard needs accounts and a server and will be added later. For now your points and badges are saved in this browser.",
      b_first: "Getting started", b_first_d: "Finish your first quiz", b_s3: "3-day streak", b_s3_d: "Study 3 days in a row", b_s7: "7-day streak", b_s7_d: "Study 7 days in a row",
      b_perfect: "Perfect score", b_perfect_d: "100% on a quiz of 10+ questions", b_master: "Topic master", b_master_d: "Master at least 1 topic", b_all: "All 200", b_all_d: "Answered all 200 questions",
      level: "Level", resetBtn: "Reset progress", resetAsk: "Delete all learning progress in this browser?"
    }
  };
  const L = (k) => (LT[lang()] && LT[lang()][k]) || LT.vi[k] || k;

  /* Nội dung "Cần ghi nhớ" và bài đọc liên quan cho từng chủ đề */
  const REMEMBER = {
    1: ["Việt Nam có khoảng 9,4% người lớn nhiễm HBV (HBsAg dương tính).", "Phần lớn người nhiễm mạn không có triệu chứng – mọi người nên xét nghiệm HBsAg ít nhất một lần.", "Chưa chữa khỏi hoàn toàn nhưng kiểm soát tốt bằng thuốc kháng vi rút và tái khám."],
    2: ["HBV là vi rút, nhân lên trong tế bào gan; có 10 kiểu gen A–J.", "Vi rút sống ngoài môi trường ít nhất 7 ngày trên vết máu khô.", "Anti-HBs từ 10 IU/L trở lên là kháng thể bảo vệ."],
    3: ["Ba đường lây: máu, tình dục không an toàn, mẹ sang con.", "Không lây qua ăn uống, ôm hôn, ho hắt hơi, muỗi đốt, dùng chung nhà vệ sinh.", "Không dùng chung dao cạo, bàn chải đánh răng, bấm móng tay, kim chích máu."],
    4: ["Viêm gan B mạn diễn tiến âm thầm; xơ gan, ung thư gan có thể xuất hiện khi chưa đau.", "Vàng da, nước tiểu sẫm màu, mệt mỏi, chán ăn là dấu hiệu cần đi khám.", "Nôn ra máu, đi cầu phân đen, lơ mơ hoặc hôn mê cần cấp cứu ngay."],
    5: ["HBsAg dương tính là đang mang vi rút; anti-HBs từ 10 IU/L là có kháng thể bảo vệ.", "Men gan bình thường vẫn có thể đang nhiễm HBV.", "Tầm soát ung thư gan: siêu âm bụng kết hợp AFP định kỳ."],
    6: ["Trẻ sơ sinh tiêm mũi đầu trong 24 giờ; trẻ được tiêm miễn phí trong Chương trình Tiêm chủng mở rộng.", "Người lớn chưa có miễn dịch tiêm đủ 3 mũi, kiểm tra anti-HBs sau 1–2 tháng.", "Vắc xin không chữa người đã nhiễm và chỉ phòng riêng viêm gan B."],
    7: ["Bị kim đâm: rửa xà phòng dưới nước chảy, không nặn bóp, đến cơ sở y tế trong 24 giờ.", "Dùng riêng dao cạo, bàn chải, bấm móng tay; chọn nơi làm đẹp, xăm, nha khoa bảo đảm vô khuẩn.", "Người nhà nên xét nghiệm và tiêm vắc xin; vẫn ăn chung mâm bình thường."],
    8: ["Thai phụ nên xét nghiệm HBsAg ngay từ lần khám thai đầu.", "Trẻ sinh ra từ mẹ HBsAg dương tính cần vắc xin và HBIG trong 24 giờ đầu, rồi tiêm đủ các mũi.", "Mẹ nhiễm vẫn có thể cho con bú khi trẻ đã được dự phòng; mổ lấy thai không bắt buộc."],
    9: ["Không phải ai nhiễm mạn cũng cần thuốc ngay – bác sĩ quyết định theo tiêu chuẩn điều trị.", "Tuyệt đối không tự ngừng, tự đổi thuốc hay thay bằng nước lá.", "Uống thuốc đúng giờ mỗi ngày và tái khám theo hẹn."],
    10: ["Tránh rượu bia và thuốc lá.", "Ăn cân đối, không kiêng khem cực đoan; bỏ thực phẩm mốc (aflatoxin).", "Thận trọng với paracetamol, thuốc bổ, thảo dược; luôn báo bác sĩ mình nhiễm HBV."],
    11: ["HBV không lây qua giao tiếp thông thường – không cần ăn riêng hay cách ly.", "Người nhiễm có quyền kết hôn, đi học, đi làm; kỳ thị khiến người bệnh giấu bệnh.", "Tìm thông tin đúng từ Bộ Y tế, HCDC và bệnh viện uy tín."],
    12: ["Xét nghiệm, tiêm phòng, nhận thuốc có thể thực hiện tại trạm y tế phường/xã.", "Bệnh ổn định có thể tái khám nhận thuốc BHYT ở tuyến cơ sở; chuyển tuyến khi nặng hoặc phức tạp.", "Mang thẻ BHYT, CCCD, sổ khám bệnh và kết quả cũ khi đi khám."]
  };
  const TOPIC_ARTICLES = {
    1: ["viem-gan-b-tong-quan", "viet-nam-loai-tru-viem-gan"], 2: ["duong-lay-khong-lay", "viem-gan-b-tong-quan"], 3: ["duong-lay-khong-lay", "hieu-lam-ky-thi-hbv"],
    4: ["viem-gan-b-cap", "xo-gan-ung-thu-gan"], 5: ["xet-nghiem-viem-gan-b", "giai-doan-nhiem-hbv-man"], 6: ["phong-benh-viem-gan-b"],
    7: ["song-chung-an-toan-gia-dinh", "duong-lay-khong-lay"], 8: ["me-con-viem-gan-b", "hiv-me-con"], 9: ["viem-gan-b-man", "that-bai-dieu-tri-theo-doi"],
    10: ["dinh-duong-loi-song-gan"], 11: ["hieu-lam-ky-thi-hbv"], 12: ["tiep-can-y-te-bhyt"]
  };
  const BADGES = ["first", "s3", "s7", "perfect", "master", "all"];

  /* ---------------- Lưu trữ ---------------- */
  let S = load();
  function blank() { return { answers: {}, days: [], points: 0, history: [], badges: {}, survey: 0 }; }
  function load() {
    try { const v = JSON.parse(localStorage.getItem(KEY) || "null"); if (v && v.answers) return Object.assign(blank(), v); } catch (e) { /* bỏ qua */ }
    return blank();
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* bỏ qua */ } }

  const dayKey = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  function streak() {
    const set = new Set(S.days);
    let d = new Date(), n = 0;
    if (!set.has(dayKey(d))) d.setDate(d.getDate() - 1);          // chưa học hôm nay vẫn giữ chuỗi đến hết hôm nay
    while (set.has(dayKey(d))) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }
  function isoWeek(d = new Date()) {
    const t = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    const dn = t.getUTCDay() || 7; t.setUTCDate(t.getUTCDate() + 4 - dn);
    const y0 = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
    return `${t.getUTCFullYear()}-W${String(Math.ceil(((t - y0) / 86400000 + 1) / 7)).padStart(2, "0")}`;
  }

  /* ---------------- Thống kê theo chủ đề ---------------- */
  function topicStats(id) {
    const qs = Q.filter((q) => q.topic === id);
    let answered = 0, right = 0;
    qs.forEach((q) => { const a = S.answers[q.id]; if (a) { answered++; if (a.last) right++; } });
    const status = !answered ? 0 : (right / qs.length >= 0.8 ? 2 : 1);
    return { total: qs.length, answered, right, wrong: answered - right, status };
  }
  const allStats = () => TOPICS.map((t) => Object.assign({ topic: t }, topicStats(t.id)));
  function overall() {
    const answered = Object.keys(S.answers).length;
    const right = Object.values(S.answers).filter((a) => a.last).length;
    return { answered, right, pct: Math.round((right / Q.length) * 100) };
  }
  function recommendation() {
    const st = allStats();
    const weak = st.filter((s) => s.status === 1).sort((a, b) => (b.wrong / b.total) - (a.wrong / a.total))[0];
    if (weak) return { topic: weak.topic, why: "recommendWhy" };
    const fresh = st.find((s) => s.status === 0);
    if (fresh && S.history.length) return { topic: fresh.topic, why: "recommendNew" };
    return null;
  }

  /* ---------------- Chọn câu hỏi cho từng chế độ ---------------- */
  const shuffle = (arr, rnd = Math.random) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  function seeded(seed) { let h = 2166136261; for (const c of seed) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return () => { h += 0x6D2B79F5; let t = Math.imul(h ^ (h >>> 15), 1 | h); t ^= t + Math.imul(t ^ (t >>> 7), 61 | t); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }

  function pick(mode, topic) {
    if (mode === "khao-sat") return TOPICS.map((t) => shuffle(Q.filter((q) => q.topic === t.id))[0]);
    if (mode === "chu-de") return shuffle(Q.filter((q) => q.topic === topic));
    if (mode === "thi-thu") return shuffle(Q).slice(0, 20);
    if (mode === "tuan") return shuffle(Q, seeded("mai-" + isoWeek())).slice(0, 10);
    if (mode === "on-tap") {
      const wrong = shuffle(Q.filter((q) => S.answers[q.id] && !S.answers[q.id].last));
      const weakTopics = new Set(allStats().filter((s) => s.status === 1).map((s) => s.topic.id));
      const weakNew = shuffle(Q.filter((q) => !S.answers[q.id] && weakTopics.has(q.topic)));
      const rest = shuffle(Q.filter((q) => !S.answers[q.id])).concat(shuffle(Q.filter((q) => S.answers[q.id] && S.answers[q.id].last)));
      const seen = new Set(); const out = [];
      for (const q of [...wrong, ...weakNew, ...rest]) { if (!seen.has(q.id)) { seen.add(q.id); out.push(q); } if (out.length >= 10) break; }
      return out;
    }
    return [];
  }

  /* ---------------- Phiên làm bài ---------------- */
  let session = null;
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  function startSession(mode, topic, key, onlyIds) {
    const qs = onlyIds ? onlyIds.map((id) => byId[id]).filter(Boolean) : pick(mode, topic);
    session = {
      key, mode, topic, i: 0, score: 0, finished: false, gained: 0, newBadges: [],
      items: qs.map((q) => ({ id: q.id, order: shuffle([0, 1, 2, 3]), picked: -1 }))
    };
  }
  const modeLabel = (m, topic) => ({ "khao-sat": L("modeSurvey"), "on-tap": L("modeReview"), "thi-thu": L("modeExam"), tuan: L("modeWeek") }[m]
    || `${L("modeTopic")} ${topic}`);

  function quizPage(mode, topic, key) {
    if (!session || session.key !== key) startSession(mode, topic, key);
    if (!session.items.length) return `<div class="empty"><h2>${L("empty")}</h2><p><a href="#/hoc-tap">${L("home")}</a></p></div>`;
    return session.finished ? resultHtml() : questionHtml();
  }

  function questionHtml() {
    const s = session, it = s.items[s.i], q = byId[it.id], total = s.items.length;
    const answered = it.picked >= 0;
    const topicName = (TOPICS.find((t) => t.id === q.topic) || {}).name || "";
    const opts = it.order.map((orig, pos) => {
      let cls = "opt";
      if (answered) { if (orig === q.answer) cls += " right"; else if (orig === it.picked) cls += " wrong"; }
      return `<button type="button" class="${cls}" data-act="pick" data-i="${orig}" ${answered ? "disabled" : ""}><span class="ltr">${"ABCD"[pos]}</span><span>${esc(q.options[orig])}</span></button>`;
    }).join("");
    let fb = "";
    if (answered) {
      const ok = it.picked === q.answer;
      fb = `<div class="feedback ${ok ? "ok" : "no"}"><strong>${ok ? "✓ " + L("correct") : "✗ " + L("wrong")}</strong>
        ${ok ? "" : `<p>${L("rightAnswer")}: <b>${esc(q.options[q.answer])}</b></p>`}
        ${q.explain ? `<p><b>${L("explain")}:</b> ${esc(q.explain)}</p>` : ""}
        ${q.todo ? `<p><b>${L("todo")}:</b> ${esc(q.todo)}</p>` : ""}
        ${q.when ? `<p><b>${L("when")}:</b> ${esc(q.when)}</p>` : ""}
        ${q.ref ? `<p class="muted">${L("ref")}: ${esc(q.ref)}</p>` : ""}</div>
        <div class="quiz-actions"><button type="button" class="btn" data-act="next">${s.i + 1 === total ? L("finish") : L("next")} →</button></div>`;
    }
    return `<div class="crumbs"><a href="#/hoc-tap">${L("learn")}</a> / ${esc(modeLabel(s.mode, s.topic))}</div>
      <div class="quiz">
        <div class="quiz-head"><span>${L("question")} ${s.i + 1}/${total}</span><span class="tag">${esc(topicName)}</span><a class="leave" href="#/hoc-tap">${L("leave")}</a></div>
        <div class="bar"><i style="width:${Math.round((s.i + (answered ? 1 : 0)) / total * 100)}%"></i></div>
        <h2 class="qtext">${esc(q.q)}</h2>
        <div class="opts">${opts}</div>${fb}
        <p class="muted quiz-note">${L("disclaimer")}</p>
      </div>`;
  }

  function awardBadges() {
    const earned = [];
    const give = (id) => { if (!S.badges[id]) { S.badges[id] = Date.now(); earned.push(id); } };
    give("first");
    const st = streak(); if (st >= 3) give("s3"); if (st >= 7) give("s7");
    const last = S.history[S.history.length - 1];
    if (last && last.total >= 10 && last.score === last.total) give("perfect");
    if (allStats().some((s) => s.status === 2)) give("master");
    if (Object.keys(S.answers).length >= Q.length) give("all");
    return earned;
  }

  function pickAnswer(orig) {
    const s = session, it = s.items[s.i], q = byId[it.id];
    if (it.picked >= 0) return;
    it.picked = orig;
    const ok = orig === q.answer;
    const a = S.answers[q.id] || { r: 0, w: 0, last: 0, ts: 0 };
    if (ok) { a.r++; s.score++; } else a.w++;
    a.last = ok ? 1 : 0; a.ts = Date.now();
    S.answers[q.id] = a;
    save();
  }
  function nextQuestion() {
    const s = session;
    if (s.items[s.i].picked < 0) return;
    if (s.i + 1 < s.items.length) { s.i++; return; }
    s.finished = true;
    const today = dayKey();
    if (!S.days.includes(today)) S.days.push(today);
    s.gained = s.score * 10 + 5;
    S.points += s.gained;
    S.history.push({ ts: Date.now(), mode: s.mode, topic: s.topic, score: s.score, total: s.items.length });
    S.history = S.history.slice(-30);
    if (s.mode === "khao-sat") S.survey = Date.now();
    s.newBadges = awardBadges();
    save();
  }

  function levelOf(p) { return p >= 80 ? ["levelGood", "good"] : p >= 60 ? ["levelMid", "mid"] : ["levelLow", "low"]; }

  function resultHtml() {
    const s = session, total = s.items.length, pct = Math.round(s.score / total * 100);
    const [lk, lc] = levelOf(pct);
    const wrongItems = s.items.filter((it) => it.picked !== byId[it.id].answer);
    const perTopic = {};
    s.items.forEach((it) => { const q = byId[it.id]; const p = (perTopic[q.topic] = perTopic[q.topic] || { r: 0, n: 0 }); p.n++; if (it.picked === q.answer) p.r++; });
    const rows = Object.keys(perTopic).map((id) => {
      const p = perTopic[id], t = TOPICS.find((x) => x.id === +id);
      return `<li><a href="#/hoc-tap/chu-de/${id}">${esc(t.name)}</a><span>${p.r}/${p.n}</span></li>`;
    }).join("");
    const nb = s.newBadges.map((b) => `<span class="badge-chip">★ ${L("b_" + b)}</span>`).join("");
    return `<div class="crumbs"><a href="#/hoc-tap">${L("learn")}</a> / ${esc(modeLabel(s.mode, s.topic))}</div>
      <div class="quiz result">
        <h2>${L("resultTitle")}</h2>
        <div class="score ${lc}"><b>${s.score}/${total}</b><span>${pct}% · ${L(lk)}</span></div>
        <p class="muted">${L("levelNote")} · +${s.gained} ${L("pointsGained")}</p>
        ${nb ? `<p><strong>${L("newBadge")}:</strong> ${nb}</p>` : ""}
        <h3>${L("byTopic")}</h3><ul class="topic-res">${rows}</ul>
        ${wrongItems.length ? `<h3>${L("wrongList")}</h3><ol class="wrong-list">${wrongItems.map((it) => { const q = byId[it.id]; return `<li><b>${esc(q.q)}</b><br>${L("rightAnswer")}: ${esc(q.options[q.answer])}${q.explain ? `<br><span class="muted">${esc(q.explain)}</span>` : ""}</li>`; }).join("")}</ol>` : ""}
        <div class="quiz-actions">
          ${wrongItems.length ? `<button type="button" class="btn" data-act="review-wrong">${L("reviewWrong")}</button>` : ""}
          <button type="button" class="btn ghost" data-act="again">${L("again")}</button>
          <a class="btn ghost" href="#/hoc-tap">${L("home")}</a>
        </div>
      </div>`;
  }

  /* ---------------- Trang Học tập ---------------- */
  function learnPage() {
    const o = overall(), st = allStats(), rec = recommendation(), sk = streak();
    const today = S.days.includes(dayKey());
    const stLabel = (s) => L("st" + s.status);
    const cards = st.map((s) => `<a class="topic-card st${s.status}" href="#/hoc-tap/chu-de/${s.topic.id}">
        <span class="num">${s.topic.id}</span>
        <span class="tt"><b>${esc(s.topic.name)}</b><small>${s.answered}/${s.total} ${L("questions")} · ${stLabel(s)}</small></span>
        <span class="mini"><i style="width:${Math.round(s.right / s.total * 100)}%"></i></span></a>`).join("");
    const badges = BADGES.filter((b) => S.badges[b]).map((b) => `<span class="badge-chip" title="${esc(L("b_" + b + "_d"))}">★ ${L("b_" + b)}</span>`).join("");
    const hist = S.history.slice(-5).reverse().map((h) => `<li>${new Date(h.ts).toLocaleDateString(lang() === "en" ? "en-GB" : "vi-VN")} · ${esc(modeLabel(h.mode, h.topic))}<b>${h.score}/${h.total}</b></li>`).join("");
    const recHtml = rec
      ? `<a class="rec" href="#/hoc-tap/chu-de/${rec.topic.id}"><small>${L(rec.why)}</small><b>${rec.topic.id}. ${esc(rec.topic.name)}</b><span class="btn small">${L("continueBtn")} →</span></a>`
      : `<p class="muted">${L("recommendNone")}</p>`;
    return `<h2 class="page-title">${L("learn")}</h2><p class="lead">${L("sub")}</p>
      <div class="learn-top">
        <div class="stat"><b>🔥 ${sk}</b><span>${L("streak")} (${L("days")})</span></div>
        <div class="stat"><b>${o.pct}%</b><span>${L("progress")} · ${o.right}/${Q.length}</span></div>
        <div class="stat"><b>${S.points}</b><span>${L("points")}</span></div>
        <div class="stat"><b>${st.filter((s) => s.status === 2).length}/12</b><span>${L("done")}</span></div>
      </div>
      <div class="learn-cols">
        <section class="panel"><h3>${L("recommend")}</h3>${recHtml}</section>
        <section class="panel"><h3>${L("today")}</h3>
          <a class="task" href="#/hoc-tap/quiz/khao-sat"><b>${L("surveyBtn")}</b><small>${L("surveyHint")}</small></a>
          <a class="task" href="#/hoc-tap/quiz/on-tap"><b>${L("reviewBtn")}</b><small>${L("reviewHint")}</small>${today ? "<i class=\"ok\">✓</i>" : ""}</a>
          <a class="task" href="#/hoc-tap/quiz/thi-thu"><b>${L("examBtn")}</b><small>${L("examHint")}</small></a>
        </section>
      </div>
      <h3 class="sec">${L("roadmap")}</h3><p class="muted sec-sub">${L("roadmapSub")}</p>
      <div class="topic-grid">${cards}</div>
      <div class="learn-cols">
        <section class="panel"><h3>${L("badges")}</h3>${badges || `<p class="muted">${L("noBadges")}</p>`}</section>
        <section class="panel"><h3>${L("history")}</h3>${hist ? `<ul class="hist">${hist}</ul>` : `<p class="muted">${L("noHistory")}</p>`}</section>
      </div>
      <p class="muted"><button type="button" class="linkbtn" data-act="reset">${L("resetBtn")}</button></p>`;
  }

  function topicPage(id, articles) {
    const t = TOPICS.find((x) => x.id === +id);
    if (!t) return null;
    const s = topicStats(t.id);
    const arts = (TOPIC_ARTICLES[t.id] || []).map((a) => articles(a)).filter(Boolean).map((a) => `<li><a href="#/bai/${a.id}">${esc(a.title)}</a></li>`).join("");
    return `<div class="crumbs"><a href="#/hoc-tap">${L("learn")}</a> / ${L("topic")} ${t.id}</div>
      <h2 class="page-title">${t.id}. ${esc(t.name)}</h2>
      <p class="lead">${s.answered}/${s.total} ${L("questions")} · ${L("st" + s.status)}</p>
      <div class="learn-cols">
        <section class="panel"><h3>${L("remember")}</h3><ul class="remember">${(REMEMBER[t.id] || []).map((x) => `<li>${esc(x)}</li>`).join("")}</ul></section>
        <section class="panel"><h3>${L("learnPart")}</h3>${arts ? `<ul>${arts}</ul>` : ""}
          <h3 class="sec">${L("practice")}</h3><a class="btn" href="#/hoc-tap/quiz/chu-de/${t.id}">${L("startTopic")} (${s.total}) →</a></section>
      </div>`;
  }

  /* ---------------- Cuộc thi: thử thách tuần ---------------- */
  function contestHtml() {
    const wk = isoWeek();
    const best = Math.max(0, ...S.history.filter((h) => h.mode === "tuan" && h.ts >= Date.now() - 7 * 86400000).map((h) => h.score));
    const hasBest = S.history.some((h) => h.mode === "tuan" && h.ts >= Date.now() - 7 * 86400000);
    return `<h2 class="page-title">${ctx.t("navContest")}</h2>
      <h3 class="sec">${L("lib")}</h3>
      <div class="panel contest"><span class="tag">${L("libNow")}</span><h3>${L("weekTitle")} · ${wk}</h3>
        ${hasBest ? `<p class="muted">${L("weekBest")}: <b>${best}/10</b></p>` : ""}<a class="btn" href="#/hoc-tap/quiz/tuan">${L("weekBtn")} →</a></div>
      <div class="panel"><span class="tag">${L("libSoon")}</span><p class="muted">${L("libNone")}</p></div>
      <div class="panel"><h3>${L("board")}</h3><p class="muted">${L("boardNote")}</p><p><b>${L("points")}:</b> ${S.points} · <b>${L("streak")}:</b> ${streak()} ${L("days")}</p></div>`;
  }

  /* ---------------- Sự kiện (ủy quyền từ #view) ---------------- */
  function onClick(e, rerender) {
    const b = e.target.closest("[data-act]");
    if (!b) return false;
    const act = b.dataset.act;
    if (act === "pick" && session) { pickAnswer(+b.dataset.i); rerender(); return true; }
    if (act === "next" && session) { nextQuestion(); rerender(); window.scrollTo({ top: 0 }); return true; }
    if (act === "again" && session) { const k = session.key; startSession(session.mode, session.topic, k); rerender(); window.scrollTo({ top: 0 }); return true; }
    if (act === "review-wrong" && session) {
      const ids = session.items.filter((it) => it.picked !== byId[it.id].answer).map((it) => it.id);
      startSession("on-tap", null, session.key, ids); rerender(); window.scrollTo({ top: 0 }); return true;
    }
    if (act === "reset") { if (confirm(L("resetAsk"))) { S = blank(); save(); rerender(); } return true; }
    return false;
  }

  return {
    learnPage, topicPage, quizPage, contestHtml, onClick,
    reset() { session = null; },
    hasSession() { return !!session; },
    stats: { overall, streak }
  };
};
