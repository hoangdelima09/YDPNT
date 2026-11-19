(function () {
  "use strict";

  const { groups, articles, news, chatTopics } = window.SITE;
  const QUIZ = window.QUIZ || { topics: [], questions: [] };
  const EN = window.SITE_EN || {};
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const store = {
    get(k, d) { try { return localStorage.getItem(k) || d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* bỏ qua */ } }
  };

  /* ------------------------------------------------------------------
     Ngôn ngữ. Giao diện: từ điển I18N bên dưới.
     Nội dung (nhóm, bài, tin, chủ đề chat): bản gốc tiếng Việt trong data.js,
     bản tiếng Anh trong data.en.js (tra theo id).
  ------------------------------------------------------------------ */
  const I18N = {
    vi: {
      htmlTitle: "MAI – Nền tảng giáo dục sức khỏe viêm gan B",
      siteTitle: "MAI – GIÁO DỤC SỨC KHỎE", navAbout: "GIỚI THIỆU", navTraining: "ĐÀO TẠO", navLearn: "HỌC TẬP", navVerify: "CHẨN TIN", navContest: "CUỘC THI", navNews: "TIN TỨC",
      ddTitle: "Nhóm chủ đề", chatTitle: "MAI AI", chatTopics: "Chủ đề", chatPlaceholder: "Nhập câu hỏi về sức khỏe…", chatFab: "Hỏi MAI AI",
      menuProfile: "Hồ sơ", menuSaved: "Bài đã lưu", menuLogout: "Đăng xuất",
      footerNote: "Thông tin trên website chỉ mang tính tham khảo, không thay thế chẩn đoán, tư vấn hoặc chỉ định điều trị của bác sĩ.",
      news: "Tin tức", all: "Xem tất cả", training: "Đào tạo", articlesN: "bài viết", sources: "Nguồn tham khảo",
      related: "Bài viết liên quan", datePrefix: "ngày ",
      byline: "Tổng hợp và dịch từ các nguồn bên dưới",
      trainingLead: "Chọn một nhóm chủ đề để xem các bài viết.",
      aboutTitle: "Giới thiệu", aboutSub: "MAI – Medical Awareness Intelligence",
      aboutHtml: `
        <h2>MAI là gì?</h2>
        <p><strong>MAI – Medical Awareness Intelligence</strong> là nền tảng truyền thông giáo dục sức khỏe ứng dụng trí tuệ nhân tạo, giúp người dân tiếp cận, hiểu đúng và kiểm chứng thông tin y tế, đồng thời nâng cao kiến thức và khả năng chủ động chăm sóc sức khỏe. Giai đoạn đầu, MAI tập trung vào <strong>viêm gan vi rút B</strong> cho người dân TP. Hồ Chí Minh.</p>
        <h2>Vấn đề MAI hướng đến giải quyết</h2>
        <ul>
          <li>Thông tin sức khỏe phân tán trên nhiều nền tảng.</li>
          <li>Thông tin sai lệch, thiếu căn cứ hoặc quảng cáo trá hình.</li>
          <li>Khó xác định nguồn thông tin y tế đáng tin cậy.</li>
          <li>Nội dung giáo dục sức khỏe chưa được cá nhân hóa theo nhu cầu.</li>
          <li>Thiếu hình thức học tập tương tác giúp ghi nhớ và áp dụng kiến thức.</li>
        </ul>
        <h2>Tầm nhìn và sứ mệnh</h2>
        <p><strong>Tầm nhìn:</strong> trở thành nền tảng truyền thông giáo dục sức khỏe số đáng tin cậy, giúp cộng đồng nâng cao hiểu biết y tế và hình thành thói quen chăm sóc sức khỏe chủ động.</p>
        <p><strong>Sứ mệnh:</strong> ứng dụng công nghệ và trí tuệ nhân tạo để kết nối người dân với kiến thức y tế chính xác, dễ hiểu, có căn cứ và phù hợp với nhu cầu sức khỏe.</p>
        <h2>Giá trị cốt lõi</h2>
        <ul>
          <li><strong>Medical Evidence:</strong> dựa trên bằng chứng khoa học.</li>
          <li><strong>Accessibility:</strong> dễ tiếp cận, dễ hiểu.</li>
          <li><strong>Intelligence:</strong> ứng dụng công nghệ có trách nhiệm.</li>
          <li><strong>Personalization:</strong> cá nhân hóa trải nghiệm học tập.</li>
          <li><strong>Community:</strong> vì sức khỏe cộng đồng.</li>
        </ul>
        <h2>Bạn sẽ tìm thấy gì?</h2>
        <ul>
          <li><strong>Chẩn tin (MAI Verify):</strong> dán một thông tin y tế đang lan truyền để nhận kết luận, giải thích và nguồn đối chiếu.</li>
          <li><strong>MAI AI:</strong> trò chuyện hỏi đáp về viêm gan B, trả lời dựa trên toàn bộ kiến thức đã đăng trên website.</li>
          <li><strong>Đào tạo:</strong> các bài kiến thức theo nhóm chủ đề, biên soạn từ QĐ 1740/QĐ-BYT (2026), QĐ 678/QĐ-BYT (2025) của Bộ Y tế và tài liệu WHO.</li>
          <li><strong>Học tập (MAI Learn):</strong> ngân hàng 200 câu trắc nghiệm có giải thích, khảo sát kiến thức ban đầu, ôn tập hằng ngày, chuỗi ngày học và huy hiệu.</li>
          <li><strong>Cuộc thi:</strong> thử thách kiến thức mỗi tuần.</li>
          <li><strong>Tin tức:</strong> cập nhật hướng dẫn chuyên môn và số liệu mới.</li>
        </ul>
        <h2>Đội ngũ phát triển</h2>
        <p>MAI được xây dựng bởi nhóm sinh viên liên ngành đến từ ba trường đại học tại TP. Hồ Chí Minh: Đại học Y Dược TP.HCM, Trường Đại học Y khoa Phạm Ngọc Thạch và Trường Đại học Bách khoa – ĐHQG TP.HCM.</p>
        <div class="team">
          <div><b>Lê Huy Đắc</b><small>Trưởng nhóm</small><p>Sinh viên năm 5, Y học Dự phòng, Đại học Y Dược TP.HCM. Tác giả chính, điều phối dự án và định hướng sức khỏe cộng đồng.</p></div>
          <div><b>Nguyễn Minh Thư</b><small>Nội dung giáo dục sức khỏe và truyền thông</small><p>Sinh viên Y học cổ truyền, Đại học Y Dược TP.HCM. Xây dựng, rà soát nội dung và hoạt động truyền thông cộng đồng.</p></div>
          <div><b>Nguyễn Thị Minh Thư</b><small>Chuyên môn y khoa và học liệu</small><p>Sinh viên Y khoa, Trường Đại học Y khoa Phạm Ngọc Thạch. Hỗ trợ nội dung y khoa, thiết kế bài học và bộ câu hỏi đánh giá.</p></div>
          <div><b>Nguyễn Trần Đức Hoàng</b><small>Kỹ thuật AI và phát triển nền tảng</small><p>Sinh viên Khoa học Máy tính, Trường Đại học Bách khoa – ĐHQG TP.HCM. Xây dựng hệ thống AI (LLM, NLP, RAG), cơ sở dữ liệu và website.</p></div>
        </div>
        <h2>An toàn y tế</h2>
        <div class="callout warn"><p>MAI chỉ cung cấp kiến thức giáo dục sức khỏe dựa trên tài liệu chính thống (WHO, Bộ Y tế Việt Nam và tài liệu đã được thẩm định). MAI <strong>không thay thế bác sĩ</strong>, không chẩn đoán bệnh và không chỉ định điều trị. Khi có triệu chứng hoặc nghi ngờ mắc bệnh, hãy đến cơ sở y tế.</p></div>
        <p><a href="#/dao-tao">Bắt đầu với phần Đào tạo →</a> · <a href="#/hoc-tap">Thử sức với phần Học tập →</a></p>`,
      soon: "Sắp ra mắt", soonText: "Các cuộc thi kiến thức y khoa sẽ được cập nhật tại đây.",
      notFound: "Không tìm thấy trang", backHome: "← Về trang chủ",
      topicPrefix: "Chủ đề: ",
      pending: "MAI đang soạn câu trả lời…",
      botNoKey: "Chatbot chưa được cấu hình khóa API trên máy chủ (file .env).",
      botBusy: "Bạn gửi hơi nhanh hoặc hệ thống AI đang quá tải. Vui lòng thử lại sau ít phút.",
      botFail: "MAI AI tạm thời chưa trả lời được. Bạn có thể đọc các bài trong mục Đào tạo hoặc thử lại sau.",
      botRelated: "Xem thêm",
      netError: "Không kết nối được máy chủ chatbot. Hãy mở website bằng lệnh python3 serve.py rồi thử lại.",
      toolAttach: "Đính kèm tệp", toolImage: "Gửi hình ảnh", toolHelp: "Trợ giúp",
      toolSoon: "tính năng sẽ được bổ sung cùng chatbot.",
      aAttach: "Đính kèm tệp", aImage: "Gửi hình ảnh", aHelp: "Trợ giúp", aSend: "Gửi", aClose: "Đóng chat", aOpenChat: "Mở chat hỏi đáp",
      aInput: "Nhập câu hỏi", aNav: "Điều hướng chính", aMenu: "Mở menu", aHome: "Trang chủ", aLang: "Ngôn ngữ", aChat: "Chatbot hỏi đáp"
    },
    en: {
      htmlTitle: "MAI – Hepatitis B health education",
      siteTitle: "MAI – HEALTH EDUCATION", navAbout: "ABOUT", navTraining: "TRAINING", navLearn: "LEARN", navVerify: "FACT-CHECK", navContest: "CONTEST", navNews: "NEWS",
      ddTitle: "Topic groups", chatTitle: "MAI AI", chatTopics: "Topics", chatPlaceholder: "Ask a health question…", chatFab: "Ask MAI AI",
      menuProfile: "Profile", menuSaved: "Saved articles", menuLogout: "Sign out",
      footerNote: "Information on this website is for reference only and does not replace a doctor's diagnosis, advice or treatment.",
      news: "News", all: "View all", training: "Training", articlesN: "articles", sources: "Sources",
      related: "Related articles", datePrefix: "",
      byline: "Compiled and translated from the sources below",
      trainingLead: "Choose a topic group to see its articles.",
      aboutTitle: "About", aboutSub: "MAI – Medical Awareness Intelligence",
      aboutHtml: `
        <h2>What is MAI?</h2>
        <p><strong>MAI – Medical Awareness Intelligence</strong> is an AI-powered health communication and education platform that helps people find, understand and verify medical information and take charge of their own health. Its first focus is <strong>hepatitis B</strong> for residents of Ho Chi Minh City.</p>
        <h2>Vision and mission</h2>
        <p><strong>Vision:</strong> a trusted digital health education platform that raises health literacy and builds proactive health habits.</p>
        <p><strong>Mission:</strong> use technology and AI to connect people with accurate, understandable, evidence-based medical knowledge.</p>
        <h2>Core values</h2>
        <ul>
          <li><strong>Medical Evidence</strong>, <strong>Accessibility</strong>, <strong>Intelligence</strong> (responsible technology), <strong>Personalization</strong> and <strong>Community</strong>.</li>
        </ul>
        <h2>What will you find here?</h2>
        <ul>
          <li><strong>Fact-check (MAI Verify):</strong> paste a health claim in circulation to get a verdict, explanation and sources.</li>
          <li><strong>MAI AI:</strong> a chatbot that answers from the knowledge published on this website.</li>
          <li><strong>Training:</strong> knowledge articles based on Vietnam's Ministry of Health Decisions 1740/QD-BYT (2026) and 678/QD-BYT (2025) and WHO material.</li>
          <li><strong>Learn (MAI Learn):</strong> a 200-question bank with explanations, a baseline survey, daily review, streaks and badges. Question text is in Vietnamese.</li>
          <li><strong>Contest:</strong> a weekly knowledge challenge. <strong>News:</strong> guideline updates and new figures.</li>
        </ul>
        <h2>Team</h2>
        <p>Built by an interdisciplinary student team from the University of Medicine and Pharmacy at HCMC, Pham Ngoc Thach University of Medicine and HCMC University of Technology (VNU-HCM): Le Huy Dac (team lead), Nguyen Minh Thu (health education content), Nguyen Thi Minh Thu (medical content and learning materials) and Nguyen Tran Duc Hoang (AI and platform engineering).</p>
        <div class="callout warn"><p>MAI provides health education only, based on authoritative sources. It does not replace a doctor and does not diagnose or prescribe. If you have symptoms or suspect an illness, see a health facility.</p></div>
        <p><a href="#/dao-tao">Start with the Training section →</a> · <a href="#/hoc-tap">Try the Learn section →</a></p>`,
      soon: "Coming soon", soonText: "Medical knowledge contests will be announced here.",
      notFound: "Page not found", backHome: "← Back to home",
      topicPrefix: "Topic: ",
      pending: "MAI is writing a reply…",
      botNoKey: "The chatbot has no API key configured on the server (.env file).",
      botBusy: "You are sending messages too fast or the AI service is busy. Please try again in a few minutes.",
      botFail: "MAI AI cannot answer right now. You can read the Training articles or try again later.",
      botRelated: "See also",
      netError: "Could not reach the chatbot server. Open the site with python3 serve.py and try again.",
      toolAttach: "Attach file", toolImage: "Send image", toolHelp: "Help",
      toolSoon: "this feature will be added together with the chatbot.",
      aAttach: "Attach file", aImage: "Send image", aHelp: "Help", aSend: "Send", aClose: "Close chat", aOpenChat: "Open chat",
      aInput: "Type your question", aNav: "Main navigation", aMenu: "Open menu", aHome: "Home", aLang: "Language", aChat: "Q&A chatbot"
    }
  };
  const qLang = new URLSearchParams(location.search).get("lang");   // ?lang=en mở thẳng bản tiếng Anh
  let lang = (qLang === "en" || qLang === "vi" ? qLang : store.get("lang", "vi")) === "en" ? "en" : "vi";
  const t = (k) => I18N[lang][k] ?? I18N.vi[k] ?? k;

  /* Tra bản dịch nội dung: ở EN dùng data.en.js, thiếu thì rơi về tiếng Việt */
  const loc = (kind, id, field, fallback) => (lang === "en" && EN[kind] && EN[kind][id] && EN[kind][id][field]) || fallback;
  const gCode = (g) => loc("groups", g.id, "code", g.code);
  const gName = (g) => loc("groups", g.id, "name", g.name);
  const gDesc = (g) => loc("groups", g.id, "desc", g.desc);
  const aTitle = (a) => loc("articles", a.id, "title", a.title);
  const aSummary = (a) => loc("articles", a.id, "summary", a.summary);
  const aBody = (a) => loc("articles", a.id, "body", a.body);
  const nTitle = (n) => loc("news", n.id, "title", n.title);
  const nSummary = (n) => loc("news", n.id, "summary", n.summary);
  const srcLabel = (s) => (lang === "en" && EN.sources && EN.sources[s.url]) || s.label;
  const MONTHS_EN = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const dateLabel = (d) => {
    if (lang !== "en") return t("datePrefix") + d;
    const [m, y] = d.split("/");
    return `${MONTHS_EN[+m - 1] || m} ${y}`;
  };

  function applyLang() {
    document.documentElement.lang = lang;
    document.title = t("htmlTitle");
    $$("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $$("[data-i18n-ph]").forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
    $$("[data-i18n-aria]").forEach((el) => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); if (el.hasAttribute("title")) el.title = t(el.dataset.i18nAria); });
    $$(".lang button").forEach((b) => { const on = b.dataset.lang === lang; b.classList.toggle("on", on); b.setAttribute("aria-pressed", String(on)); });
    $$("#ddTraining [data-group]").forEach((a) => { a.textContent = gCode(groups.find((g) => g.id === a.dataset.group)); });
  }

  /* ------------------------------------------------------------------
     Minh họa SVG cho thẻ bài viết (không cần ảnh ngoài)
  ------------------------------------------------------------------ */
  const C = { teal: "#2a8ea3", tealL: "#7cc4d3", navy: "#0e1c4a", soft: "#cfe5ea", paper: "#eaf4f7", coral: "#e8705a", sun: "#f2b84b" };
  function virusShape(cx, cy, r) {
    let s = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${C.teal}"/><circle cx="${cx - r / 3}" cy="${cy - r / 4}" r="${r / 5}" fill="${C.tealL}"/>`;
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2, x1 = cx + Math.cos(a) * r, y1 = cy + Math.sin(a) * r, x2 = cx + Math.cos(a) * (r + 11), y2 = cy + Math.sin(a) * (r + 11);
      s += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${C.navy}" stroke-width="3" stroke-linecap="round"/><circle cx="${x2}" cy="${y2}" r="3.6" fill="${C.coral}"/>`;
    }
    return s;
  }
  const ART = {
    liver: `<path d="M118 66c-2-22 22-34 52-31 28 3 52 14 54 30 2 17-18 30-46 29-14 0-24-8-36-7-14 1-22 8-24-21z" fill="${C.coral}"/>
            <path d="M150 42c10 4 20 12 22 26" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" opacity=".7"/>
            <circle cx="206" cy="86" r="9" fill="${C.sun}"/>`,
    virus: virusShape(160, 60, 24),
    flask: `<path d="M146 24h28v24l24 42c4 7-1 14-9 14h-58c-8 0-13-7-9-14l23-42z" fill="#fff" stroke="${C.navy}" stroke-width="4" stroke-linejoin="round"/>
            <path d="M136 82h48l12 22c2 4-1 7-5 7h-62c-4 0-7-3-5-7z" fill="${C.teal}"/>
            <circle cx="152" cy="92" r="4" fill="#fff" opacity=".8"/><circle cx="170" cy="100" r="3" fill="#fff" opacity=".8"/>
            <rect x="141" y="20" width="38" height="8" rx="4" fill="${C.navy}"/>`,
    shield: `<path d="M160 18l38 13v30c0 22-16 36-38 45-22-9-38-23-38-45V31z" fill="${C.teal}"/>
             <path d="M160 18l38 13v30c0 22-16 36-38 45z" fill="#237a8d"/>
             <path d="M142 62l12 12 24-26" stroke="#fff" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
    baby: `<circle cx="160" cy="48" r="24" fill="${C.sun}"/><circle cx="136" cy="50" r="6" fill="${C.sun}"/><circle cx="184" cy="50" r="6" fill="${C.sun}"/>
           <circle cx="152" cy="46" r="3" fill="${C.navy}"/><circle cx="168" cy="46" r="3" fill="${C.navy}"/>
           <path d="M152 57q8 7 16 0" stroke="${C.navy}" stroke-width="3" fill="none" stroke-linecap="round"/>
           <path d="M132 112c0-18 12-30 28-30s28 12 28 30z" fill="${C.teal}"/><path d="M148 28q12-12 24 0" stroke="${C.coral}" stroke-width="4" fill="none" stroke-linecap="round"/>`,
    chart: `<rect x="112" y="64" width="22" height="42" rx="4" fill="${C.tealL}"/><rect x="143" y="44" width="22" height="62" rx="4" fill="${C.teal}"/>
            <rect x="174" y="28" width="22" height="78" rx="4" fill="${C.navy}"/><path d="M110 52l34-18 30 4 28-22" stroke="${C.coral}" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="202" cy="16" r="5" fill="${C.coral}"/>`,
    doc: `<rect x="128" y="18" width="64" height="86" rx="8" fill="#fff" stroke="${C.navy}" stroke-width="4"/>
          <path d="M142 42h36M142 56h36M142 70h22" stroke="${C.tealL}" stroke-width="5" stroke-linecap="round"/>
          <circle cx="188" cy="92" r="16" fill="${C.teal}"/><path d="M181 92l5 5 9-10" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
    hiv: `<path d="M160 28c-18-22-52-6-40 22 8 18 40 38 40 38s32-20 40-38c12-28-22-44-40-22z" fill="${C.coral}"/>
          <path d="M120 60h26l8-14 12 28 8-14h26" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`
  };
  function art(kind, h = 120, fit = "slice") {
    const body = ART[kind] || ART.doc;
    return `<svg viewBox="0 0 320 ${h}" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid ${fit}">
      <rect width="320" height="${h}" fill="${C.soft}"/>
      <circle cx="46" cy="30" r="46" fill="#fff" opacity=".45"/><circle cx="292" cy="104" r="58" fill="#fff" opacity=".4"/>
      <rect x="20" y="86" width="70" height="8" rx="4" fill="${C.teal}" opacity=".25"/><rect x="236" y="22" width="52" height="8" rx="4" fill="${C.navy}" opacity=".15"/>
      ${body}</svg>`;
  }

  /* ------------------------------------------------------------------
     Thành phần giao diện
  ------------------------------------------------------------------ */
  const learn = window.createLearn({ QUIZ, lang: () => lang, t: (k) => t(k) });
  const verify = window.createVerify({ lang: () => lang });
  const groupById = (id) => groups.find((g) => g.id === id);
  const articleById = (id) => articles.find((a) => a.id === id);

  function newsCard(n) {
    return `<a class="card" href="#/bai/${n.article}">
      <div class="thumb">${art(n.icon)}</div>
      <div class="meta">${dateLabel(n.date)}</div>
      <h3>${nTitle(n)}</h3>
      <p>${nSummary(n)}</p></a>`;
  }
  function articleCard(a) {
    const g = groupById(a.group);
    return `<a class="card" href="#/bai/${a.id}">
      <div class="thumb">${art(a.icon)}</div>
      <div class="meta"><span class="tag">${gCode(g)}</span>${dateLabel(a.date)}</div>
      <h3>${aTitle(a)}</h3>
      <p>${aSummary(a)}</p></a>`;
  }

  /* ------------------------------------------------------------------
     Các trang
  ------------------------------------------------------------------ */
  const pages = {
    home() {
      return {
        route: "home", chat: "docked",
        html: `<div class="section-head"><h2 class="page-title">${t("news")}</h2><a class="more-link" href="#/tin-tuc">${t("all")} →</a></div>
               <div class="grid">${news.map(newsCard).join("")}</div>`
      };
    },
    news() {
      return {
        route: "tin-tuc", chat: "floating",
        html: `<h2 class="page-title">${t("news")}</h2><div class="grid">${news.map(newsCard).join("")}</div>`
      };
    },
    about() {
      return {
        route: "gioi-thieu", chat: "floating",
        html: `<div class="article prose"><h1>${t("aboutTitle")}</h1><p class="byline">${t("aboutSub")}</p>${t("aboutHtml")}</div>`
      };
    },
    training() {
      const cards = groups.map((g) => {
        const n = articles.filter((a) => a.group === g.id).length;
        return `<a class="group-card" href="#/dao-tao/${g.id}"><span class="badge">${gCode(g)}</span>
          <h3>${gName(g)}</h3><p>${gDesc(g)}</p><span class="count">${n} ${t("articlesN")} →</span></a>`;
      }).join("");
      return {
        route: "dao-tao", chat: "floating",
        html: `<h2 class="page-title">${t("training")}</h2><p class="lead">${t("trainingLead")}</p><div class="group-cards">${cards}</div>`
      };
    },
    group(id) {
      const g = groupById(id);
      if (!g) return pages.notFound();
      const list = articles.filter((a) => a.group === id);
      return {
        route: "dao-tao", chat: "floating",
        html: `<div class="crumbs"><a href="#/dao-tao">${t("training")}</a> / ${gCode(g)}</div>
               <h2 class="page-title">${gCode(g)} – ${gName(g)}</h2><p class="lead">${gDesc(g)}</p>
               <div class="grid">${list.map(articleCard).join("")}</div>`
      };
    },
    article(id) {
      const a = articleById(id);
      if (!a) return pages.notFound();
      const g = groupById(a.group);
      const rel = (a.related || []).map(articleById).filter(Boolean);
      return {
        route: "dao-tao", chat: "floating", title: aTitle(a),
        html: `<div class="crumbs"><a href="#/dao-tao">${t("training")}</a> / <a href="#/dao-tao/${g.id}">${gCode(g)}</a></div>
          <article class="article prose">
            <div class="hero">${art(a.icon, 150, "meet")}</div>
            <h1>${aTitle(a)}</h1>
            <div class="byline"><span class="tag">${gCode(g)}</span>${dateLabel(a.date)} · ${t("byline")}</div>
            ${aBody(a)}
            <div class="sources"><h2>${t("sources")}</h2><ul>${a.sources.map((s) => `<li><a href="${s.url}"${s.url.startsWith("#") ? "" : ' target="_blank" rel="noopener noreferrer"'}>${srcLabel(s)}</a></li>`).join("")}</ul></div>
          </article>
          ${rel.length ? `<section class="related"><h2>${t("related")}</h2><div class="grid">${rel.map(articleCard).join("")}</div></section>` : ""}`
      };
    },
    contest() {
      return { route: "cuoc-thi", chat: "floating", html: learn.contestHtml() };
    },
    verify() {
      return { route: "chan-tin", chat: "floating", html: verify.page() };
    },
    learn() {
      return { route: "hoc-tap", chat: "floating", html: learn.learnPage() };
    },
    topic(id) {
      const html = learn.topicPage(id, articleById);
      return html ? { route: "hoc-tap", chat: "floating", html } : pages.notFound();
    },
    quiz(mode, topic) {
      if (!["khao-sat", "on-tap", "chu-de", "thi-thu", "tuan"].includes(mode)) return pages.notFound();
      return { route: mode === "tuan" ? "cuoc-thi" : "hoc-tap", chat: "floating", html: learn.quizPage(mode, mode === "chu-de" ? +topic : null, `${mode}/${topic || ""}`) };
    },
    notFound() {
      return {
        route: "", chat: "floating",
        html: `<div class="empty"><h2>${t("notFound")}</h2><p><a href="#/">${t("backHome")}</a></p></div>`
      };
    }
  };

  /* ------------------------------------------------------------------
     Router (hash)
  ------------------------------------------------------------------ */
  const view = $("#view"), layout = $("#layout"), chat = $("#chat");

  function resolve(hash) {
    const parts = hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    const [a, b, c, d] = parts;
    if (!a) return pages.home();
    if (a === "chan-tin") return pages.verify();
    if (a === "hoc-tap") {
      if (b === "chu-de" && c) return pages.topic(c);
      if (b === "quiz" && c) return pages.quiz(c, d);
      return pages.learn();
    }
    if (a === "tin-tuc") return pages.news();
    if (a === "gioi-thieu") return pages.about();
    if (a === "cuoc-thi") return pages.contest();
    if (a === "dao-tao") return b ? pages.group(b) : pages.training();
    if (a === "bai" && b) return pages.article(b);
    return pages.notFound();
  }

  function setChatMode(mode) {
    const docked = mode === "docked";
    layout.classList.toggle("no-chat", !docked);
    chat.classList.toggle("floating", !docked);
    chat.classList.remove("open");
    document.body.classList.toggle("chat-floating", !docked);
    document.body.classList.remove("chat-open");
    // Mobile: trang chủ cũng chuyển sang dạng nổi để không đẩy tin tức xuống dưới
    if (docked && window.matchMedia("(max-width: 900px)").matches) {
      layout.classList.add("no-chat");
      chat.classList.add("floating");
      document.body.classList.add("chat-floating");
    }
  }

  function render(keepScroll) {
    if (!location.hash.startsWith("#/hoc-tap/quiz")) learn.reset();   // rời trang làm bài thì bỏ phiên cũ
    const page = resolve(location.hash);
    view.innerHTML = page.html;
    document.title = (page.title ? page.title + " – " : "") + "MAI";
    $$(".mainnav [data-route]").forEach((el) => el.classList.toggle("active", el.dataset.route === page.route));
    setChatMode(page.chat);
    closeMenus();
    if (!keepScroll) { window.scrollTo({ top: 0 }); view.focus({ preventScroll: true }); }
  }

  /* ------------------------------------------------------------------
     Menu: điều hướng, dropdown, avatar
  ------------------------------------------------------------------ */
  const navList = $("#navList"), navToggle = $("#navToggle"), dd = $("#ddTraining");
  const userBtn = $("#userBtn"), userMenu = $("#userMenu");

  function closeMenus() {
    navList.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    dd.classList.remove("open");
    userMenu.hidden = true;
    userBtn.setAttribute("aria-expanded", "false");
  }
  navToggle.addEventListener("click", () => {
    const open = navList.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  $("a[data-route='dao-tao']", dd).addEventListener("click", (e) => {
    if (window.matchMedia("(max-width: 900px)").matches) { // mobile: chạm 1 lần mở nhóm chủ đề
      if (!dd.classList.contains("open")) { e.preventDefault(); dd.classList.add("open"); }
    }
  });
  userBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    userMenu.hidden = !userMenu.hidden;
    userBtn.setAttribute("aria-expanded", String(!userMenu.hidden));
  });
  document.addEventListener("click", (e) => {
    if (!e.target.closest("#user")) { userMenu.hidden = true; userBtn.setAttribute("aria-expanded", "false"); }
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") { closeMenus(); chat.classList.remove("open"); document.body.classList.remove("chat-open"); } });

  $$(".lang button").forEach((b) => b.addEventListener("click", () => {
    if (b.dataset.lang === lang) return;
    lang = b.dataset.lang; store.set("lang", lang);
    applyLang();
    render(true);
    resetChat();   // lời chào và gợi ý của chatbot đổi theo ngôn ngữ
  }));

  /* ------------------------------------------------------------------
     CHAT BOT – MAI AI. Gọi POST /api/chat của serve.py; máy chủ tìm đoạn kiến thức
     liên quan trong kb/knowledge.json rồi nhờ Google Gemini soạn câu trả lời.
     (Khóa API nằm ở file .env trên máy chủ, không có trong mã chạy ở trình duyệt.)
  ------------------------------------------------------------------ */
  const chatApi = {
    async ask(topicId, message, language, history) {
      const res = await fetch("/api/chat", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: topicId, message, lang: language, history })
      });
      let data = {};
      try { data = await res.json(); } catch (e) { /* không phải JSON */ }
      if (res.ok && data.reply) return { text: data.reply, sources: data.sources || [] };
      if (res.status === 404) throw new Error("net");
      return { text: t(res.status === 503 ? "botNoKey" : res.status === 429 ? "botBusy" : "botFail"), sources: [], error: true };
    }
  };

  /* Hiển thị câu trả lời: chỉ hỗ trợ **đậm**, gạch đầu dòng và xuống dòng (đã thoát HTML) */
  function mdToHtml(text) {
    const esc = (x) => x.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
    const inline = (x) => esc(x).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    const out = []; let list = false;
    text.split(/\n/).forEach((raw) => {
      const line = raw.trim();
      const li = line.match(/^(?:[*•-]|\d+[.)])\s+(.*)$/);
      if (li) { if (!list) { out.push("<ul>"); list = true; } out.push(`<li>${inline(li[1])}</li>`); return; }
      if (list) { out.push("</ul>"); list = false; }
      if (line) out.push(`<p>${inline(line)}</p>`);
    });
    if (list) out.push("</ul>");
    return out.join("");
  }

  const msgsEl = $("#chatMsgs"), form = $("#chatForm"), input = $("#chatText");
  let histories = {};                // lịch sử hội thoại theo chủ đề (chỉ lưu trong phiên)
  let topicId = chatTopics[0].id;

  const tpName = (tp) => loc("chatTopics", tp.id, "name", tp.name);
  const tpWelcome = (tp) => loc("chatTopics", tp.id, "welcome", tp.welcome);
  const tpSuggest = (tp) => loc("chatTopics", tp.id, "suggestions", tp.suggestions);

  function renderChatTopics() {
    $("#chatTopicList").innerHTML = chatTopics.map((tp) =>
      `<li><button type="button" data-topic="${tp.id}" aria-current="${tp.id === topicId}">${tpName(tp)}</button></li>`).join("");
    $("#chatTopicTitle").textContent = t("topicPrefix") + tpName(chatTopics.find((x) => x.id === topicId));
  }
  function fillMsg(div, role, text, sources) {
    if (role === "bot" && !div.classList.contains("typing")) {
      div.innerHTML = mdToHtml(text);
      const links = (sources || []).filter((s) => s.link);
      if (links.length) {
        const wrap = document.createElement("div");
        wrap.className = "msg-src";
        wrap.append(t("botRelated") + ": ");
        links.forEach((s) => { const a = document.createElement("a"); a.href = s.link; a.textContent = s.title; wrap.append(a, " "); });
        div.appendChild(wrap);
      }
    } else div.textContent = text;
  }
  function addMsg(role, text, opts = {}) {
    const div = document.createElement("div");
    div.className = `msg ${role}` + (opts.typing ? " typing" : "");
    fillMsg(div, role, text, opts.sources);
    msgsEl.appendChild(div);
    msgsEl.scrollTop = msgsEl.scrollHeight;
    return div;
  }
  function showTopic() {
    const tp = chatTopics.find((x) => x.id === topicId);
    renderChatTopics();
    msgsEl.innerHTML = "";
    if (!histories[topicId]) histories[topicId] = [{ role: "bot", text: tpWelcome(tp) }];
    histories[topicId].forEach((m) => addMsg(m.role, m.text, { sources: m.sources }));
    const sg = document.createElement("div");
    sg.className = "suggest";
    sg.innerHTML = tpSuggest(tp).map((s) => `<button type="button">${s}</button>`).join("");
    msgsEl.appendChild(sg);
  }
  function resetChat() { histories = {}; showTopic(); }

  async function send(text) {
    text = text.trim();
    if (!text) return;
    $(".suggest", msgsEl)?.remove();
    const history = histories[topicId].slice(1).filter((m) => !m.error).slice(-8).map((m) => ({ role: m.role === "user" ? "user" : "model", text: m.text }));
    histories[topicId].push({ role: "user", text });
    addMsg("user", text);
    const pending = addMsg("bot", t("pending"), { typing: true });
    const thisTopic = topicId, thisLang = lang;
    form.classList.add("busy");
    let reply;
    try { reply = await chatApi.ask(thisTopic, text, thisLang, history); } catch (e) { reply = { text: t("netError"), sources: [], error: true }; }
    form.classList.remove("busy");
    if (thisLang !== lang) return;   // người dùng đã đổi ngôn ngữ, bỏ kết quả cũ
    histories[thisTopic].push({ role: "bot", text: reply.text, sources: reply.sources, error: reply.error });
    if (thisTopic === topicId) { pending.classList.remove("typing"); fillMsg(pending, "bot", reply.text, reply.sources); msgsEl.scrollTop = msgsEl.scrollHeight; }
  }

  $("#chatTopicList").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-topic]");
    if (b) { topicId = b.dataset.topic; showTopic(); }
  });
  msgsEl.addEventListener("click", (e) => {
    const b = e.target.closest(".suggest button");
    if (b) send(b.textContent);
  });
  form.addEventListener("submit", (e) => { e.preventDefault(); if (form.classList.contains("busy")) return; const v = input.value; input.value = ""; send(v); });
  $$(".chat-tools [data-tool]").forEach((b) => b.addEventListener("click", () => {
    const names = { attach: t("toolAttach"), image: t("toolImage"), help: t("toolHelp") };
    addMsg("bot", `${names[b.dataset.tool]}: ${t("toolSoon")}`);
  }));

  $("#chatFab").addEventListener("click", () => { chat.classList.add("open"); document.body.classList.add("chat-open"); input.focus(); });
  $("#chatClose").addEventListener("click", () => { chat.classList.remove("open"); document.body.classList.remove("chat-open"); });

  /* ------------------------------------------------------------------ */
  window.addEventListener("hashchange", () => render());
  window.addEventListener("resize", () => { if (!chat.classList.contains("open")) setChatMode(/^#?\/?$/.test(location.hash) ? "docked" : "floating"); });
  view.addEventListener("click", (e) => { if (!verify.onClick(e)) learn.onClick(e, () => render(true)); });
  view.addEventListener("submit", (e) => { verify.onSubmit(e); });
  applyLang();
  showTopic();
  render();
})();
