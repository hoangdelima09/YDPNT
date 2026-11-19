/* MAI Verify – kiểm chứng thông tin y tế. Gửi nội dung tới POST /api/verify (serve.py), nhận lại
   kết luận + giải thích + khuyến nghị + nguồn. Lịch sử kiểm chứng lưu trong localStorage của trình duyệt. */

window.createVerify = function (ctx) {
  "use strict";
  const lang = ctx.lang;
  const KEY = "mai.verify.v1";
  const T = {
    vi: {
      title: "Chẩn tin", sub: "MAI Verify – kiểm chứng thông tin y tế bằng tài liệu của Bộ Y tế và WHO",
      how: "MAI Verify hoạt động thế nào?",
      steps: ["Bạn gửi thông tin cần kiểm chứng", "MAI xác định nội dung cần kiểm tra", "Đối chiếu kho kiến thức chuyên môn (Bộ Y tế, WHO, tài liệu đã thẩm định)", "AI tổng hợp bằng chứng và đánh giá", "Trả kết quả: kết luận, giải thích, nguồn, ngày kiểm chứng"],
      label: "Thông tin bạn muốn kiểm chứng", ph: "Dán hoặc gõ một thông tin, lời đồn, quảng cáo hay câu hỏi về viêm gan B…\nVí dụ: “Viêm gan B có thể lây qua việc ăn chung mâm hoặc dùng chung chén đũa.”",
      btn: "Kiểm chứng", checking: "MAI đang đối chiếu tài liệu…", examples: "Thử nhanh",
      ex: ["Viêm gan B có thể lây qua việc ăn chung mâm hoặc dùng chung chén đũa.", "Uống nước lá cà gai leo có thể thay thế thuốc kháng vi rút viêm gan B.", "Khỏe rồi, men gan bình thường thì có thể tự ngừng thuốc viêm gan B.", "Mẹ nhiễm viêm gan B không được cho con bú.", "Trẻ sơ sinh cần được tiêm vắc xin viêm gan B trong 24 giờ đầu."],
      v: { accurate: "Chính xác", partial: "Đúng một phần", inaccurate: "Sai lệch", insufficient: "Chưa đủ bằng chứng" },
      claim: "Thông tin được kiểm chứng", explain: "Giải thích", reco: "Khuyến nghị", sources: "Nguồn tham khảo", checkedOn: "Kiểm chứng ngày",
      urgent: "Nội dung này có thể liên quan đến tình huống khẩn cấp. Nếu có dấu hiệu nguy hiểm, hãy đến cơ sở y tế hoặc gọi cấp cứu ngay.",
      disc: "Kết quả do AI đối chiếu với kho kiến thức của website, chỉ mang tính tham khảo giáo dục, không thay thế tư vấn của bác sĩ. Các trường hợp phức tạp cần nhân viên y tế xem xét.",
      short: "Hãy nhập ít nhất một câu (từ 8 ký tự).", noKey: "Máy chủ chưa cấu hình khóa API (file .env).",
      busy: "Bạn gửi hơi nhanh hoặc hệ thống AI đang quá tải. Vui lòng thử lại sau ít phút.", fail: "Chưa kiểm chứng được lúc này. Vui lòng thử lại sau.",
      net: "Không kết nối được máy chủ. Hãy mở website bằng lệnh python3 serve.py rồi thử lại.",
      history: "Lịch sử kiểm chứng", none: "Chưa có lần kiểm chứng nào.", clear: "Xóa lịch sử", clearAsk: "Xóa toàn bộ lịch sử kiểm chứng trên trình duyệt này?", reopen: "Xem lại"
    },
    en: {
      title: "Fact-check", sub: "MAI Verify – check health information against Ministry of Health and WHO documents",
      how: "How does MAI Verify work?",
      steps: ["You submit the information to check", "MAI identifies what needs checking", "It is compared with the professional knowledge base (Ministry of Health, WHO, vetted material)", "AI weighs the evidence and assesses it", "You get a verdict, explanation, sources and date"],
      label: "Information you want to verify", ph: "Paste or type a claim, rumour, advertisement or question about hepatitis B…\nExample: “Hepatitis B can spread by sharing a meal or bowls and chopsticks.”",
      btn: "Verify", checking: "MAI is checking the documents…", examples: "Quick tries",
      ex: ["Hepatitis B can spread by sharing a meal or bowls and chopsticks.", "Herbal tea can replace antiviral medicine for hepatitis B.", "If I feel well and my liver enzymes are normal I can stop my hepatitis B medicine.", "A mother with hepatitis B must not breastfeed.", "Newborns should get hepatitis B vaccine within the first 24 hours."],
      v: { accurate: "Accurate", partial: "Partly true", inaccurate: "Misleading", insufficient: "Not enough evidence" },
      claim: "Claim checked", explain: "Explanation", reco: "Recommendation", sources: "Sources", checkedOn: "Checked on",
      urgent: "This may involve an emergency. If there are danger signs, go to a health facility or call emergency services now.",
      disc: "Results are produced by AI comparing against this website's knowledge base, are for health education only and do not replace a doctor's advice. Complex cases need a health professional.",
      short: "Please enter at least one sentence (8+ characters).", noKey: "The server has no API key configured (.env file).",
      busy: "You are sending too fast or the AI service is busy. Please try again in a few minutes.", fail: "Could not verify right now. Please try again later.",
      net: "Could not reach the server. Open the site with python3 serve.py and try again.",
      history: "Verification history", none: "No checks yet.", clear: "Clear history", clearAsk: "Clear all verification history in this browser?", reopen: "View again"
    }
  };
  const L = (k) => T[lang()][k];
  const esc = (x) => String(x).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const md = (x) => esc(x).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\n/g, "<br>");

  let history = [];
  try { history = JSON.parse(localStorage.getItem(KEY) || "[]"); } catch (e) { history = []; }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(history.slice(0, 20))); } catch (e) { /* bỏ qua */ } };
  let current = null, busy = false;

  function resultHtml(r) {
    const d = new Date(r.ts).toLocaleDateString(lang() === "en" ? "en-GB" : "vi-VN");
    const src = (r.sources || []).map((s) => `<li><a href="${esc(s.link)}">${esc(s.title)}</a></li>`).join("");
    return `<article class="vr ${esc(r.verdict)}">
      <div class="vr-head"><span class="vr-badge">${esc(L("v")[r.verdict] || r.verdict)}</span><span class="muted">${L("checkedOn")} ${d}</span></div>
      <p class="vr-claim"><small>${L("claim")}</small>“${esc(r.claim)}”</p>
      <h3 class="vr-headline">${esc(r.headline)}</h3>
      ${r.urgent ? `<div class="callout warn"><p>${L("urgent")}</p></div>` : ""}
      <h4>${L("explain")}</h4><p>${md(r.explanation)}</p>
      <h4>${L("reco")}</h4><p>${md(r.recommendation)}</p>
      ${src ? `<h4>${L("sources")}</h4><ul class="vr-src">${src}</ul>` : ""}
      <p class="muted">${L("disc")}</p></article>`;
  }
  function historyHtml() {
    if (!history.length) return `<p class="muted">${L("none")}</p>`;
    return `<ul class="vh">${history.map((h, i) => `<li><button type="button" data-vact="open" data-i="${i}"><span class="dot ${esc(h.verdict)}"></span><span class="vh-t">${esc(h.claim.length > 90 ? h.claim.slice(0, 87) + "…" : h.claim)}</span><small>${esc(L("v")[h.verdict] || "")}</small></button></li>`).join("")}</ul>
      <button type="button" class="linkbtn" data-vact="clear">${L("clear")}</button>`;
  }

  function page() {
    return `<h2 class="page-title">${L("title")}</h2><p class="lead">${L("sub")}</p>
      <div class="panel verify-box">
        <form id="vForm" autocomplete="off">
          <label for="vText"><b>${L("label")}</b></label>
          <textarea id="vText" rows="4" maxlength="1500" placeholder="${esc(L("ph"))}"></textarea>
          <div class="v-row"><button type="submit" class="btn" id="vBtn">${L("btn")}</button><span class="muted" id="vMsg" aria-live="polite"></span></div>
        </form>
        <div class="v-ex"><small>${L("examples")}:</small>${L("ex").map((x, i) => `<button type="button" data-vact="ex" data-i="${i}">${esc(x.length > 58 ? x.slice(0, 55) + "…" : x)}</button>`).join("")}</div>
      </div>
      <div id="vResult" aria-live="polite">${current ? resultHtml(current) : ""}</div>
      <div class="learn-cols">
        <section class="panel"><h3>${L("how")}</h3><ol class="vsteps">${L("steps").map((s) => `<li>${esc(s)}</li>`).join("")}</ol></section>
        <section class="panel"><h3>${L("history")}</h3><div id="vHist">${historyHtml()}</div></section>
      </div>`;
  }

  async function submit(form) {
    if (busy) return;
    const text = form.querySelector("#vText").value.trim(), msg = form.querySelector("#vMsg"), btn = form.querySelector("#vBtn"), out = document.getElementById("vResult");
    if (text.length < 8) { msg.textContent = L("short"); return; }
    busy = true; btn.disabled = true; msg.textContent = L("checking"); out.innerHTML = "";
    try {
      const res = await fetch("/api/verify", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ claim: text, lang: lang() }) });
      let data = {};
      try { data = await res.json(); } catch (e) { /* không phải JSON */ }
      if (res.ok && data.verdict) {
        current = Object.assign({ claim: text, ts: Date.now() }, data);
        history.unshift(current); history = history.slice(0, 20); save();
        out.innerHTML = resultHtml(current);
        document.getElementById("vHist").innerHTML = historyHtml();
        msg.textContent = "";
        out.scrollIntoView({ behavior: "smooth", block: "nearest" });
      } else msg.textContent = res.status === 404 ? L("net") : res.status === 503 ? L("noKey") : res.status === 429 ? L("busy") : res.status === 400 ? L("short") : L("fail");
    } catch (e) { msg.textContent = L("net"); }
    busy = false; btn.disabled = false;
  }

  function onSubmit(e) { if (e.target.id === "vForm") { e.preventDefault(); submit(e.target); return true; } return false; }
  function onClick(e) {
    const b = e.target.closest("[data-vact]");
    if (!b) return false;
    const act = b.dataset.vact;
    if (act === "ex") { const t = document.getElementById("vText"); t.value = L("ex")[+b.dataset.i]; t.focus(); return true; }
    if (act === "open") { current = history[+b.dataset.i]; document.getElementById("vResult").innerHTML = resultHtml(current); document.getElementById("vResult").scrollIntoView({ behavior: "smooth", block: "nearest" }); return true; }
    if (act === "clear") { if (confirm(L("clearAsk"))) { history = []; current = null; save(); document.getElementById("vHist").innerHTML = historyHtml(); document.getElementById("vResult").innerHTML = ""; } return true; }
    return false;
  }
  return { page, onSubmit, onClick };
};
