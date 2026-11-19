/* Dữ liệu nội dung website – tổng hợp, dịch và biên soạn lại từ các nguồn trong noidung.md.
   Chỉ chứa thông tin đã đối chiếu với nguồn; phần chưa truy xuất được toàn văn được ghi rõ "đang cập nhật". */

window.SITE = {};

/* ---------- Nguồn tham khảo ---------- */
const SRC = {
  who: { label: "WHO – Hepatitis B (Fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/hepatitis-b" },
  byt: { label: "Bộ Y tế – QĐ 1740/QĐ-BYT (16/6/2026): Hướng dẫn chẩn đoán, điều trị viêm gan vi rút B", url: "https://kcb.vn/upload/2005611/20260617/BYT__QD_ban_hanh_HDCDT_viem_gan_vi_rut_B_-_final_2_signed_8c1b5.pdf" },
  qd678: { label: "Bộ Y tế – QĐ 678/QĐ-BYT (26/02/2025): Hướng dẫn kỹ thuật các can thiệp dự phòng lây truyền HIV, viêm gan B và giang mai từ mẹ sang con", url: "https://thuvienphapluat.vn/van-ban/The-thao-Y-te/Quyet-dinh-678-QD-BYT-2025-huong-dan-ky-thuat-can-thiep-du-phong-lay-truyen-HIV-tu-me-sang-con-694318.aspx" },
  bank: { label: "MAI – Ngân hàng 200 câu hỏi trắc nghiệm giáo dục sức khỏe viêm gan vi rút B (căn cứ QĐ 1740/QĐ-BYT năm 2026 và QĐ 678/QĐ-BYT năm 2025)", url: "#/hoc-tap" },
  nhep: { label: "Coalition for Global Hepatitis Elimination – Vietnam National Hepatitis Elimination Profile (cập nhật 03/06/2025)", url: "https://www.globalhep.org/sites/default/files/content/national_profiles/files/2025-06/2025-05-Vietnam_National%20Hepatitis%20Elimination%20Profile.pdf" }
};

/* ---------- Nhóm chủ đề (menu Đào tạo) ---------- */
SITE.groups = [
  { id: "btn",  code: "BTN",   name: "Bệnh truyền nhiễm",       desc: "Các bệnh do vi rút, vi khuẩn lây từ người sang người: viêm gan B, HIV… cùng cách chẩn đoán, điều trị và phòng bệnh." },
  { id: "bkln", code: "BKLN",  name: "Bệnh không lây nhiễm",    desc: "Các bệnh và biến chứng mạn tính không lây: xơ gan, ung thư gan và cách theo dõi, phát hiện sớm." },
  { id: "bnho", code: "B Nhỏ", name: "Bệnh ở trẻ nhỏ và mẹ – con", desc: "Phòng lây truyền từ mẹ sang con, tiêm chủng sơ sinh và điều trị cho trẻ em." },
  { id: "sk",   code: "SK",    name: "Sống khỏe và cộng đồng",  desc: "Phòng lây trong gia đình, dinh dưỡng – lối sống, hiểu đúng và chống kỳ thị, cách tiếp cận dịch vụ y tế và bảo hiểm y tế." }
];

/* ---------- Bài viết kiến thức ---------- */
SITE.articles = [

/* 1 ------------------------------------------------------------------ */
{
  id: "viem-gan-b-tong-quan", group: "btn", icon: "liver", date: "06/2026",
  title: "Viêm gan vi rút B: tổng quan",
  summary: "Bệnh gan do vi rút HBV gây ra: đường lây, diễn tiến và gánh nặng bệnh trên thế giới và tại Việt Nam.",
  sources: [SRC.who, SRC.byt, SRC.nhep],
  related: ["duong-lay-khong-lay", "xet-nghiem-viem-gan-b", "phong-benh-viem-gan-b", "viet-nam-loai-tru-viem-gan"],
  body: `
<div class="callout"><p><strong>Nhớ nhanh:</strong> viêm gan B là bệnh do vi rút, lây qua máu, tình dục không an toàn và từ mẹ sang con. Phần lớn người nhiễm mạn <strong>không có triệu chứng</strong>, nên ai cũng nên xét nghiệm HBsAg ít nhất một lần. Bệnh <strong>chưa thể chữa khỏi hoàn toàn</strong> nhưng kiểm soát tốt bằng thuốc kháng vi rút và theo dõi định kỳ; <strong>tiêm vắc xin</strong> là cách phòng bệnh hiệu quả nhất.</p></div>
<div class="stats">
  <div><b>254 triệu</b><span>người nhiễm HBV mạn trên toàn cầu (ước tính 2022)</span></div>
  <div><b>1,1 triệu</b><span>ca tử vong do viêm gan B mỗi năm, chủ yếu do xơ gan và ung thư gan</span></div>
  <div><b>9,4%</b><span>người từ 18 tuổi trở lên tại Việt Nam có HBsAg dương tính (điều tra 2018–2019)</span></div>
  <div><b>4,3%</b><span>người sống chung với viêm gan B mạn đang được điều trị thuốc kháng vi rút (2024)</span></div>
</div>

<h2>Viêm gan B là gì?</h2>
<p>Viêm gan vi rút B (viêm gan B) là bệnh truyền nhiễm phổ biến trên toàn cầu do <strong>vi rút viêm gan B (HBV)</strong> gây ra. Vi rút này thuộc họ <em>Hepadnaviridae</em>, vật liệu di truyền là DNA và được chia thành 10 kiểu gen, ký hiệu từ A đến J.</p>
<p>HBV có 3 kháng nguyên chính là <strong>HBsAg</strong> (bề mặt), <strong>HBeAg</strong> và <strong>HBcAg</strong> (lõi), tương ứng với 3 loại kháng thể: anti-HBs, anti-HBe và anti-HBc. Xét nghiệm các kháng nguyên, kháng thể này giúp xác định bệnh, thể bệnh và diễn biến bệnh.</p>

<h2>Viêm gan cấp và viêm gan mạn khác nhau thế nào?</h2>
<p><strong>Viêm gan B cấp</strong> là giai đoạn trong khoảng 6 tháng đầu sau khi nhiễm; phần lớn người lớn có miễn dịch bình thường tự loại bỏ vi rút và hồi phục. Nếu HBsAg vẫn dương tính sau 6 tháng, đó là <strong>nhiễm HBV mạn</strong>. Xem thêm bài <a href="#/bai/viem-gan-b-cap">Viêm gan B cấp</a> và <a href="#/bai/giai-doan-nhiem-hbv-man">Các giai đoạn của nhiễm HBV mạn</a>.</p>

<h2>Bệnh diễn tiến như thế nào?</h2>
<p>HBV có thể gây <strong>viêm gan cấp</strong>, hiếm hơn là viêm gan tối cấp, nhưng chủ yếu gây <strong>viêm gan mạn</strong>. Viêm gan mạn có thể tiến triển thành <strong>xơ gan</strong> và <strong>ung thư biểu mô tế bào gan</strong>. Phần lớn người nhiễm mạn không có triệu chứng cho đến khi bệnh gan đã tiến triển, vì vậy xét nghiệm sớm rất quan trọng.</p>

<h2>Đường lây truyền</h2>
<ul>
  <li><strong>Đường máu</strong> (truyền máu, dùng chung kim tiêm, dụng cụ xăm trổ hoặc thủ thuật y tế chưa được khử khuẩn tốt).</li>
  <li><strong>Quan hệ tình dục</strong> không an toàn.</li>
  <li><strong>Từ mẹ sang con</strong> – đây là đường lây chủ yếu tại Việt Nam.</li>
</ul>

<h2>Gánh nặng bệnh</h2>
<p>Theo ước tính của WHO được Bộ Y tế Việt Nam trích dẫn, năm 2022 toàn cầu có khoảng 254 triệu người nhiễm HBV mạn, 1,2 triệu ca nhiễm mới mỗi năm và 1,1 triệu ca tử vong. Bản tin cập nhật của WHO (tháng 6/2026) ghi nhận 1,1 triệu ca tử vong trong năm 2024, trong khi chỉ khoảng 10 triệu người đang dùng thuốc kháng vi rút.</p>
<p>Tại Việt Nam, viêm gan B là <strong>nguyên nhân hàng đầu gây xơ gan và ung thư gan</strong>. Tỷ lệ người nhiễm được phát hiện và điều trị còn thấp, số tử vong liên quan vẫn cao.</p>

<h2>Phòng bệnh hiệu quả nhất</h2>
<p>Tiêm vắc xin viêm gan B và phòng lây truyền HBV từ mẹ sang con là hai biện pháp dự phòng chính, hiệu quả. Xem thêm các bài <a href="#/bai/phong-benh-viem-gan-b">Phòng bệnh viêm gan B</a> và <a href="#/bai/me-con-viem-gan-b">Phòng lây truyền viêm gan B từ mẹ sang con</a>.</p>`
},

/* 2 ------------------------------------------------------------------ */
{
  id: "xet-nghiem-viem-gan-b", group: "btn", icon: "flask", date: "06/2026",
  title: "Xét nghiệm và cách đọc kết quả viêm gan B",
  summary: "Ai nên xét nghiệm, cần làm những xét nghiệm nào và ý nghĩa của HBsAg, anti-HBc, anti-HBs.",
  sources: [SRC.byt],
  related: ["viem-gan-b-cap", "viem-gan-b-man", "giai-doan-nhiem-hbv-man", "phong-benh-viem-gan-b"],
  body: `
<p>Hướng dẫn của Bộ Y tế khuyến cáo <strong>mọi người dân đang sinh sống tại Việt Nam</strong> nên xét nghiệm phát hiện sớm nhiễm HBV, đặc biệt là các nhóm dưới đây.</p>

<h2>Nhóm đối tượng nên xét nghiệm</h2>
<ul>
  <li>Người sinh trước năm 2003 – năm triển khai tiêm vắc xin viêm gan B cho trẻ dưới 1 tuổi trên toàn quốc.</li>
  <li>Phụ nữ mang thai.</li>
  <li>Người đến tư vấn, xét nghiệm HIV, lao.</li>
  <li>Người có hành vi nguy cơ: người nhiễm HIV, tiêm chích ma túy, nam quan hệ tình dục đồng giới, phụ nữ bán dâm, phạm nhân, người quan hệ tình dục không an toàn.</li>
  <li>Người có triệu chứng viêm gan hoặc men gan tăng; người có biểu hiện xơ hóa gan, xơ gan.</li>
  <li>Người chạy thận chu kỳ, lọc máu, truyền máu và chế phẩm máu.</li>
  <li>Người sắp điều trị ức chế miễn dịch, hóa trị liệu; người mắc khối u, ung thư.</li>
  <li>Nhân viên y tế chưa tiêm vắc xin viêm gan B.</li>
  <li>Người hiến máu, hiến tạng, cho trứng, tinh trùng.</li>
  <li>Bạn tình, thành viên gia đình của người nhiễm HBV.</li>
  <li>Người có tiền sử tiêm, làm thủ thuật không an toàn; người cần dự phòng sau phơi nhiễm HBV.</li>
</ul>

<h2>Xét nghiệm cần làm</h2>
<p>Gồm <strong>HBsAg, anti-HBs, anti-HBc</strong> (nếu có điều kiện). Tối thiểu phải thực hiện <strong>HBsAg</strong>.</p>

<h2>Phiên giải kết quả</h2>
<div class="table-wrap"><table>
  <thead><tr><th>HBsAg</th><th>Anti-HBc</th><th>Anti-HBs</th><th>Ý nghĩa</th><th>Xử trí</th></tr></thead>
  <tbody>
    <tr><td>Dương tính</td><td>Dương tính</td><td>Bất kỳ</td><td>Viêm gan B mạn</td><td>Kết nối cơ sở điều trị để quản lý theo hướng dẫn. Không cần tiêm vắc xin.</td></tr>
    <tr><td>Âm tính</td><td>Dương tính</td><td>≥ 10 IU/L</td><td>Đã hồi phục sau nhiễm HBV trong quá khứ</td><td>Không cần quản lý, trừ khi suy giảm miễn dịch hoặc đang hóa trị/ức chế miễn dịch. Không cần tiêm.</td></tr>
    <tr><td>Âm tính</td><td>Dương tính</td><td>&lt; 10 IU/L</td><td>Đã hồi phục sau nhiễm HBV trong quá khứ, hoặc viêm gan B thể ẩn, hoặc dương tính giả</td><td>Xét nghiệm HBV DNA nếu suy giảm miễn dịch hoặc nghi ngờ viêm gan B thể ẩn. Không cần tiêm.</td></tr>
    <tr><td>Âm tính</td><td>Âm tính</td><td>≥ 10 IU/L</td><td>Không nhiễm HBV, có miễn dịch bảo vệ nhờ tiêm phòng</td><td>Không cần xét nghiệm thêm. Tiếp tục các mũi tiêm theo lịch nếu chưa hoàn thành.</td></tr>
    <tr><td>Âm tính</td><td>Âm tính</td><td>&lt; 10 IU/L</td><td>Không nhiễm HBV, chưa có miễn dịch bảo vệ</td><td><strong>Cần tiêm vắc xin</strong> đủ liệu trình; xét nghiệm lại anti-HBs sau 1–2 tháng kể từ khi hoàn thành.</td></tr>
  </tbody>
</table></div>
<div class="callout">
  <p><strong>Lưu ý:</strong> người có HBsAg dương tính cần được tư vấn và kết nối đến cơ sở quản lý, điều trị. Người có HBsAg âm tính nên làm thêm anti-HBc và anti-HBs (nếu trước đó chưa làm) để được tư vấn biện pháp phòng bệnh.</p>
</div>

<h2>Ý nghĩa các chỉ số thường gặp</h2>
<ul>
  <li><strong>HBsAg</strong> (kháng nguyên bề mặt): dương tính = đang mang HBV; âm tính = hiện không nhiễm. Dương tính kéo dài trên 6 tháng là nhiễm HBV mạn.</li>
  <li><strong>Anti-HBs</strong> (kháng thể bề mặt): từ <strong>10 IU/L trở lên</strong> là đã có kháng thể bảo vệ (do tiêm vắc xin hoặc đã khỏi bệnh); dưới 10 IU/L là chưa có hoặc không còn đủ bảo vệ – cần tiêm vắc xin nếu không nhiễm.</li>
  <li><strong>Anti-HBc</strong>: dương tính cho biết cơ thể đã từng tiếp xúc với HBV; anti-HBc IgM dương tính gợi ý viêm gan B cấp.</li>
  <li><strong>HBeAg</strong> dương tính: thường gợi ý vi rút đang nhân lên mạnh, khả năng lây cao hơn.</li>
  <li><strong>HBV DNA</strong> (tải lượng vi rút): cho biết lượng vi rút trong máu; bác sĩ dùng để quyết định điều trị và theo dõi đáp ứng thuốc.</li>
  <li><strong>ALT/AST</strong> (men gan): tăng khi tế bào gan bị tổn thương. <strong>Men gan bình thường chưa loại trừ nhiễm HBV</strong>, vì nhiều người nhiễm mạn có men gan bình thường.</li>
  <li><strong>Siêu âm bụng, AFP (± AFP-L3, PIVKA II):</strong> dùng để tầm soát sớm ung thư gan; <strong>FibroScan/APRI/FIB-4:</strong> đánh giá xơ hóa gan.</li>
</ul>
<p>Xét nghiệm HBsAg và anti-HBs <strong>không cần nhịn ăn</strong>. Khi nhận phiếu có nhiều chỉ số bất thường, hãy mang kết quả đến bác sĩ để được giải thích – không tự đoán bệnh hay tự mua thuốc.</p>`
},

/* 3 ------------------------------------------------------------------ */
{
  id: "viem-gan-b-cap", group: "btn", icon: "virus", date: "06/2026",
  title: "Viêm gan B cấp: dấu hiệu, điều trị và theo dõi",
  summary: "Thời gian ủ bệnh, các giai đoạn lâm sàng, khi nào cần dùng thuốc kháng vi rút và cách xác định khỏi hay chuyển mạn.",
  sources: [SRC.byt],
  related: ["viem-gan-b-man", "xet-nghiem-viem-gan-b"],
  body: `
<h2>Chẩn đoán</h2>
<p><strong>Tiền sử:</strong> người bệnh từng có nguy cơ tiếp xúc với HBV (truyền máu, tiêm chích ma túy, quan hệ tình dục không an toàn, xăm trổ, thủ thuật y tế với dụng cụ chưa khử khuẩn tốt) trong khoảng <strong>4–24 tuần</strong> (thời gian ủ bệnh) trước khi khởi phát triệu chứng.</p>
<h3>Thể điển hình – 3 giai đoạn</h3>
<ol>
  <li><strong>Tiền vàng da:</strong> mệt mỏi, chán ăn, buồn nôn, nôn, sốt nhẹ, đau tức nhẹ vùng hạ sườn phải.</li>
  <li><strong>Vàng da:</strong> sau khi hết sốt có thể ngứa, vàng da, vàng mắt, tiểu sẫm màu (như nước chè đặc), đôi khi phân bạc màu.</li>
  <li><strong>Hồi phục:</strong> triệu chứng cải thiện và lui dần.</li>
</ol>
<h3>Các thể khác</h3>
<ul>
  <li><strong>Không triệu chứng:</strong> gặp ở đa số người bệnh, nhất là người lớn.</li>
  <li><strong>Tối cấp</strong> (dưới 1% ở người lớn): suy gan cấp, bệnh não gan, rối loạn đông máu nặng; tỷ lệ tử vong thường trên 70% nếu không được điều trị kịp thời.</li>
</ul>
<h3>Xét nghiệm</h3>
<ul>
  <li>AST, ALT tăng, thường trên 5 lần giới hạn trên bình thường (ULN của ALT: 30 U/L với nam, 19 U/L với nữ).</li>
  <li>Anti-HBc IgM dương tính; HBsAg dương tính (hoặc âm tính trong giai đoạn "cửa sổ").</li>
</ul>
<p><strong>Chẩn đoán phân biệt:</strong> viêm gan cấp do vi rút khác (HAV, HCV, HDV, HEV…), đợt cấp của viêm gan B mạn và viêm gan do nguyên nhân khác.</p>

<h2>Điều trị</h2>
<p>Điều trị viêm gan B cấp chủ yếu là <strong>điều trị triệu chứng</strong>:</p>
<ul>
  <li>Nghỉ ngơi, tránh làm việc nặng hoặc gắng sức khi còn triệu chứng.</li>
  <li>Giảm chất béo, kiêng rượu bia; chỉ nuôi dưỡng tĩnh mạch tạm thời khi nôn nhiều hoặc không ăn uống được.</li>
  <li>Tránh các thuốc chuyển hóa qua gan.</li>
  <li>Hồi sức nội khoa tích cực với các trường hợp diễn tiến nặng.</li>
</ul>
<h3>Khi nào dùng thuốc kháng vi rút?</h3>
<p>Dùng tenofovir disoproxil fumarate (TDF), entecavir (ETV) hoặc tenofovir alafenamide (TAF) cho đến khi mất HBsAg sau 3 tháng trong các trường hợp:</p>
<ul>
  <li>Viêm gan B cấp diễn biến nặng – có ít nhất 2 tiêu chí: bệnh não gan; bilirubin toàn phần &gt; 3 mg/dL (51 µmol/L); INR &gt; 1,5.</li>
  <li>Bệnh kéo dài trên 4 tuần với bilirubin có xu hướng tăng.</li>
  <li>Người suy giảm miễn dịch hoặc có bệnh đồng mắc nghiêm trọng.</li>
</ul>
<p>Với thể tối cấp cần hội chẩn chuyên khoa để xem xét chỉ định ghép gan.</p>

<h2>Theo dõi</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Xét nghiệm</th><th>Tần suất</th><th>Mục đích</th></tr></thead>
  <tbody>
    <tr><td>AST/ALT</td><td>1–2 tuần/lần đến khi ALT về bình thường; sau đó 4–12 tuần/lần trong ít nhất 6 tháng (hoặc đến khi HBsAg âm tính)</td><td>Đánh giá mức độ tổn thương và hồi phục tế bào gan</td></tr>
    <tr><td>INR (hoặc PT), bilirubin</td><td>1–2 tuần/lần đến khi về bình thường</td><td>Đánh giá chức năng đông máu, thải bilirubin; loại trừ suy gan cấp</td></tr>
    <tr><td>HBsAg, anti-HBs</td><td>Tuần 12 và tuần 24 (3 và 6 tháng sau khởi phát)</td><td>Xác định quá trình thanh thải vi rút và đáp ứng miễn dịch</td></tr>
    <tr><td>Tải lượng HBV DNA</td><td>Có thể 24 tuần/lần nếu nghi tiến triển thành mạn</td><td>Đánh giá mức độ nhân lên của vi rút</td></tr>
  </tbody>
</table></div>

<h2>Hồi phục hay chuyển mạn?</h2>
<ul>
  <li><strong>Hồi phục:</strong> mất HBsAg (có hoặc không xuất hiện anti-HBs) sau 6 tháng kể từ khi khởi phát. Sau đó nên kiểm tra sinh hóa gan hằng năm; người suy giảm miễn dịch, hóa trị hoặc dùng thuốc ức chế miễn dịch cần theo dõi nguy cơ tái hoạt.</li>
  <li><strong>Chuyển mạn:</strong> HBsAg vẫn dương tính sau 6 tháng. Người bệnh được theo dõi và quản lý như viêm gan B mạn.</li>
</ul>`
},

/* 4 ------------------------------------------------------------------ */
{
  id: "viem-gan-b-man", group: "btn", icon: "liver", date: "06/2026",
  title: "Viêm gan B mạn: chẩn đoán, điều trị và theo dõi",
  summary: "Tiêu chuẩn chỉ định điều trị, các thuốc kháng vi rút, khi nào có thể ngừng thuốc và lịch theo dõi theo hướng dẫn mới của Bộ Y tế.",
  sources: [SRC.byt],
  related: ["giai-doan-nhiem-hbv-man", "that-bai-dieu-tri-theo-doi", "viem-gan-b-dac-biet", "xo-gan-ung-thu-gan"],
  body: `
<div class="callout warn"><p>Nội dung dưới đây tóm tắt hướng dẫn chuyên môn để người học tham khảo. Việc chỉ định và dùng thuốc phải do bác sĩ quyết định – không tự ý dùng hoặc ngừng thuốc.</p></div>

<h2>Chẩn đoán nhiễm HBV mạn</h2>
<p>Nhiễm HBV mạn được xác định khi <strong>HBsAg dương tính</strong> ở người lớn, hoặc HBsAg tồn tại từ 6 tháng trở lên ở vị thành niên và trẻ em. Mọi người nhiễm mạn cần được kết nối với cơ sở điều trị để quản lý lâu dài.</p>
<p>Phần lớn người nhiễm không có triệu chứng cho đến khi có bệnh gan tiến triển. Khi đó có thể gặp gan to, lách to, ngứa, mệt mỏi, đau khớp, ban đỏ lòng bàn tay, sao mạch, phù; xơ gan mất bù có cổ trướng, giãn vỡ tĩnh mạch thực quản, bệnh não gan, vàng da. Một số người có biểu hiện ngoài gan như viêm cầu thận, viêm đa khớp hoặc viêm mạch.</p>

<h2>Đánh giá giai đoạn bệnh</h2>
<ul>
  <li><strong>Chức năng gan:</strong> công thức máu (tiểu cầu), PT/INR, ALT, AST, bilirubin, albumin.</li>
  <li><strong>Tình trạng vi rút:</strong> tải lượng HBV DNA, HBeAg/anti-HBe; nếu có điều kiện: qHBsAg, HBcrAg.</li>
  <li><strong>Xơ hóa gan:</strong> chỉ số APRI, FIB-4, M2BPGi, FibroTest hoặc đo độ đàn hồi gan (FibroScan…).
    <ul>
      <li>Xơ hóa đáng kể (≥ F2): APRI &gt; 0,5 hoặc FibroScan &gt; 7 kPa.</li>
      <li>Xơ gan (F4): APRI &gt; 1 hoặc FibroScan &gt; 12,5 kPa.</li>
    </ul>
  </li>
  <li><strong>Phát hiện sớm biến chứng:</strong> siêu âm, AFP, PIVKA II, AFP-L3, chụp cắt lớp/cộng hưởng từ; nội soi thực quản – dạ dày nếu xơ gan.</li>
  <li><strong>Bệnh đồng nhiễm, đồng mắc:</strong> HIV, HCV, HDV, HEV, bệnh thận, đái tháo đường, gan nhiễm mỡ liên quan rối loạn chuyển hóa.</li>
</ul>

<h2>Mục tiêu và nguyên tắc điều trị</h2>
<ul>
  <li>Ức chế lâu dài sự sao chép của HBV; cải thiện chất lượng sống, ngăn xơ gan và ung thư gan.</li>
  <li>Dự phòng lây truyền (kể cả mẹ sang con) và dự phòng đợt bùng phát, tái hoạt.</li>
  <li>Lựa chọn ban đầu là thuốc uống nhóm <strong>nucleos(t)ide analogues (NAs)</strong> dùng đơn trị; Peg-IFN chỉ dùng cho một số trường hợp đặc biệt.</li>
  <li>Điều trị với NAs là <strong>lâu dài, có thể suốt đời</strong>; cần tuân thủ điều trị và tái khám.</li>
</ul>

<h2>Khi nào cần điều trị?</h2>
<p>Khuyến cáo điều trị cho người lớn và thanh thiếu niên (≥ 12 tuổi) nhiễm HBV mạn có <strong>một trong các điều kiện</strong>:</p>
<ol>
  <li>Xơ hóa gan đáng kể (≥ F2) hoặc xơ gan – <em>không phụ thuộc</em> tải lượng HBV DNA hay ALT.</li>
  <li>HBV DNA &gt; 2.000 IU/mL <strong>và</strong> ALT vượt giới hạn trên bình thường (vị thành niên: ALT tăng ít nhất 2 lần trong 6–12 tháng).</li>
  <li>HBV DNA trên ngưỡng phát hiện kèm một trong các yếu tố: đồng nhiễm (HIV, HDV, HCV); đồng mắc (đái tháo đường, gan nhiễm mỡ…); suy giảm miễn dịch; biểu hiện ngoài gan; tiền sử gia đình có ung thư gan hoặc xơ gan; tái phát sau khi ngừng thuốc.</li>
  <li>Nếu không đo được HBV DNA: ALT cao hơn giới hạn trên bình thường kéo dài 6–12 tháng.</li>
</ol>

<h2>Chuẩn bị điều trị và tư vấn</h2>
<ul>
  <li>Hỏi tiền sử: thời điểm phát hiện nhiễm HBV, đã/chưa từng dùng thuốc kháng vi rút, gia đình có người xơ gan hoặc ung thư gan; tìm biểu hiện ngoài gan (viêm mạch, viêm khớp, viêm cầu thận, viêm tuyến giáp).</li>
  <li>Đánh giá <strong>chức năng thận</strong> (creatinin, mức lọc cầu thận) và các yếu tố nguy cơ suy thận (tăng huyết áp, đái tháo đường, thuốc độc thận, tuổi cao, cân nặng &lt; 50 kg); đánh giá bệnh đi kèm (HCV, HIV, HDV, đái tháo đường, gan nhiễm mỡ) và thuốc đang dùng.</li>
  <li>Tư vấn ngay từ khi chẩn đoán và trong suốt quá trình điều trị: hiểu bệnh và tiên lượng, mục tiêu và thời gian điều trị, tác dụng không mong muốn, <strong>tầm quan trọng của tuân thủ</strong>, lịch tái khám; sống khỏe (dinh dưỡng, tránh rượu bia, thận trọng thuốc độc gan); phòng lây cho người thân (xét nghiệm, tiêm vắc xin, dùng bao cao su, không dùng chung dao cạo/bàn chải).</li>
</ul>

<h2>Các thuốc kháng vi rút (người ≥ 12 tuổi)</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Thuốc</th><th>Liều người lớn và lưu ý</th><th>Tác dụng không mong muốn</th></tr></thead>
  <tbody>
    <tr><td><strong>Tenofovir disoproxil fumarate (TDF)</strong> 300 mg</td><td>300 mg/ngày; chỉnh liều theo mức lọc cầu thận. Tránh dùng khi mức lọc cầu thận &lt; 50 mL/phút, loãng xương hoặc có nhiều yếu tố nguy cơ rối loạn chức năng thận (tăng huyết áp, đái tháo đường, tuổi cao, cân nặng &lt; 50 kg…).</td><td>Bệnh thận, hội chứng Fanconi, loãng xương, nhiễm toan lactic</td></tr>
    <tr><td><strong>Entecavir (ETV)</strong> 0,5 mg; 1 mg</td><td>0,5 mg/ngày (1 mg/ngày nếu từng dùng lamivudine hoặc xơ gan mất bù). Chỉnh liều theo mức lọc cầu thận. <strong>Không dùng cho phụ nữ mang thai.</strong></td><td>Nhiễm toan lactic</td></tr>
    <tr><td><strong>Tenofovir alafenamide (TAF)</strong> 25 mg</td><td>25 mg/ngày. Có thể dùng cho xơ gan mất bù; không cần giảm liều khi suy thận nhẹ, vừa, nặng hoặc chạy thận nhân tạo.</td><td>Tăng cân, tăng cholesterol, nhiễm toan lactic</td></tr>
    <tr><td><strong>Peg-IFN-α-2a</strong></td><td>180 µg/tuần, 48 tuần. Cân nhắc cho người muốn điều trị ngắn hạn, đồng nhiễm HDV, hoặc tải lượng vi rút thấp và ALT tăng cao. Cần tư vấn kỹ về hiệu quả và tác dụng phụ.</td><td>Triệu chứng giả cúm, mệt mỏi, rối loạn tâm thần, giảm bạch cầu, rối loạn tuyến giáp, chán ăn, sụt cân</td></tr>
  </tbody>
</table></div>

<p>Phác đồ thay thế khi <strong>không có TDF đơn</strong>: TDF 300 mg/lamivudine 100 mg (TDF/3TC) hoặc TDF 300 mg/emtricitabine 200 mg (TDF/FTC), 1 viên mỗi ngày. Ưu tiên entecavir hoặc TAF cho người có bệnh thận hoặc loãng xương, trẻ em (ETV từ 2 tuổi) và vị thành niên (TAF từ 12 tuổi).</p>

<h2>Thời gian điều trị và ngừng thuốc</h2>
<ul>
  <li><strong>Xơ gan, ung thư gan:</strong> điều trị NAs suốt đời.</li>
  <li><strong>Chưa xơ gan:</strong> điều trị lâu dài; chỉ cân nhắc ngừng khi đạt tiêu chuẩn và có điều kiện theo dõi dài hạn sau ngừng thuốc.</li>
  <li>Ví dụ tiêu chuẩn ngừng: HBeAg dương tính – có thể ngừng sau khi điều trị thêm 12 tháng kể từ khi chuyển đổi huyết thanh HBeAg; HBeAg âm tính – HBV DNA dưới ngưỡng phát hiện ít nhất 3–4 năm và HBsAg định lượng thấp (&lt; 100 IU/mL); hoặc mất HBsAg tại 2 thời điểm cách nhau 6 tháng. Nếu có điều kiện đo HBcrAg: có thể ngừng khi HBcrAg &lt; 2 logU/mL và HBV DNA dưới ngưỡng phát hiện. Điều kiện chung: không có xơ hóa tiến triển (F3) hoặc xơ gan (F4) và có điều kiện theo dõi lâu dài sau ngừng thuốc.</li>
  <li>Người suy giảm miễn dịch không khuyến cáo ngừng thuốc do nguy cơ tái hoạt cao.</li>
  <li>Sau ngừng thuốc: theo dõi hằng tháng trong 6 tháng đầu, sau đó 12 tuần/lần trong 1–2 năm bằng ALT và HBV DNA. Tái hoạt khi HBV DNA ≥ 2.000 IU/mL; điều trị lại khi &gt; 10.000 IU/mL.</li>
</ul>

<h2>Theo dõi trong quá trình điều trị</h2>
<ul>
  <li><strong>Tái khám:</strong> 12 tuần/lần với nhóm có nguy cơ (xơ gan, năm đầu điều trị, tuân thủ kém); 12–24 tuần/lần với nhóm ổn định (đã điều trị &gt; 1 năm, không xơ gan, tuân thủ tốt, HBV DNA dưới ngưỡng phát hiện).</li>
  <li>Đánh giá tuân thủ ở mọi lần khám.</li>
  <li>ALT/AST, công thức máu: 12–24 tuần/lần. HBV DNA: tuần 12, 24, 48 rồi 24–48 tuần/lần.</li>
  <li>Xơ hóa gan (APRI, FIB-4, FibroScan): 24–48 tuần/lần.</li>
  <li>Phát hiện sớm ung thư gan: siêu âm 12–24 tuần/lần; chỉ dấu AFP, AFP-L3, PIVKA II 24 tuần/lần.</li>
  <li>Chức năng thận (creatinin, nước tiểu): tháng đầu rồi 24–48 tuần/lần.</li>
</ul>

<h2>Khi điều trị thất bại</h2>
<p>Trước khi kết luận thất bại cần đánh giá lại tuân thủ điều trị. <strong>Thất bại ban đầu:</strong> HBV DNA giảm dưới 1 log10 IU/mL sau 3 tháng. <strong>Thất bại thứ cấp:</strong> HBV DNA tăng trên 1 log10 IU/mL so với mức thấp nhất đã đạt. Chỉ đổi thuốc sau khi đã hỗ trợ tuân thủ; ưu tiên chuyển sang TDF, TAF hoặc ETV, không có kháng chéo với thuốc trước đó.</p>`
},

/* 5 ------------------------------------------------------------------ */
{
  id: "viem-gan-b-dac-biet", group: "btn", icon: "shield", date: "06/2026",
  title: "Viêm gan B ở các nhóm đặc biệt",
  summary: "Đồng nhiễm HCV, HIV, HDV; người dùng thuốc ức chế miễn dịch, hóa trị; ung thư gan và đợt bùng phát viêm gan B mạn.",
  sources: [SRC.byt],
  related: ["du-phong-tai-hoat-hbv", "viem-gan-b-man", "me-con-viem-gan-b", "viem-gan-b-tre-em"],
  body: `
<h2>Đồng nhiễm HBV/HCV</h2>
<p>Xét nghiệm anti-HCV cho mọi người nhiễm HBV; nếu dương tính, làm tiếp HCV RNA hoặc kháng nguyên HCVcAg để chẩn đoán viêm gan C. Người đồng nhiễm HBV/HCV cần điều trị viêm gan B bằng NAs <em>không phụ thuộc</em> HBV DNA, ALT và độ xơ hóa gan. Người HBsAg âm tính, anti-HBs âm tính nhưng anti-HBc dương tính có nguy cơ tái hoạt rất thấp khi dùng thuốc DAA: không cần điều trị dự phòng nhưng nên theo dõi ALT/AST 4–8 tuần/lần trong khi điều trị và 12 tuần sau đó.</p>

<h2>Đồng nhiễm HBV/HIV</h2>
<p>Nên điều trị thuốc kháng HIV (ARV) với phác đồ có <strong>TDF hoặc TAF</strong>, và vẫn tiếp tục TDF/TAF khi phải đổi phác đồ do kháng thuốc. Nếu chống chỉ định TDF (suy thận, loãng xương) thì thay bằng TAF hoặc dùng ETV để điều trị viêm gan B.</p>

<h2>Đồng nhiễm HBV/HDV</h2>
<p>Xét nghiệm anti-HDV total cho mọi người HBsAg dương tính (nếu có điều kiện); nếu dương tính, làm HDV RNA. Viêm gan D có tải lượng HDV RNA cao và ALT tăng: Peg-IFN-α 180 µg/tuần × 48 tuần (hoặc thuốc thay thế được cấp phép). Viêm gan B vẫn được điều trị kháng vi rút không phụ thuộc HBV DNA, ALT, độ xơ hóa.</p>

<h2>Người dùng thuốc ức chế miễn dịch, hóa trị, ghép tạng</h2>
<p>Xem chi tiết các mức nguy cơ trong bài <a href="#/bai/du-phong-tai-hoat-hbv">Dự phòng viêm gan B tái hoạt</a>.</p>
<ul>
  <li>Trước khi bắt đầu phải xét nghiệm HBsAg, anti-HBc và HBV DNA.</li>
  <li>Điều trị dự phòng bằng TDF, TAF hoặc ETV nên bắt đầu sớm – trước 2 tuần hoặc muộn nhất là cùng lúc với thuốc ức chế miễn dịch/hóa trị, và duy trì 6–12 tháng (tùy trường hợp) sau khi ngừng các thuốc này.</li>
</ul>

<h2>Ung thư biểu mô tế bào gan</h2>
<p>Điều trị lâu dài bằng ETV, TDF hoặc TAF ngay trước, trong và sau khi điều trị ung thư gan.</p>

<h2>Đợt bùng phát viêm gan B mạn</h2>
<ul>
  <li>Chẩn đoán khi ALT tăng đột ngột &gt; 3 lần mức ban đầu hoặc &gt; 5 lần giới hạn trên bình thường, không do rượu, thuốc… ở người HBsAg dương tính. HBV DNA có thể không tăng, thậm chí giảm.</li>
  <li>Biểu hiện từ không triệu chứng đến giống viêm gan cấp. Thường xảy ra khi dùng thuốc ức chế miễn dịch/hóa trị, ngừng thuốc kháng HBV, hoặc có bệnh kèm theo làm tổn thương gan.</li>
  <li>Cần điều trị thuốc kháng vi rút ngay để tránh bệnh gan mất bù và tử vong; tư vấn ghép gan nếu có chỉ định.</li>
</ul>`
},

/* 6 ------------------------------------------------------------------ */
{
  id: "phong-benh-viem-gan-b", group: "btn", icon: "shield", date: "06/2026",
  title: "Phòng bệnh viêm gan B: vắc xin và dự phòng sau phơi nhiễm",
  summary: "Lịch tiêm vắc xin theo WHO, các bước xử trí trong 24 giờ sau phơi nhiễm và những biện pháp phòng bệnh không đặc hiệu.",
  sources: [SRC.who, SRC.byt, SRC.nhep],
  related: ["song-chung-an-toan-gia-dinh", "me-con-viem-gan-b", "xet-nghiem-viem-gan-b", "viet-nam-loai-tru-viem-gan"],
  body: `
<h2>Vắc xin viêm gan B</h2>
<p>Vắc xin viêm gan B là biện pháp phòng bệnh chủ động chính. Theo WHO, vắc xin thường được tiêm ngay sau sinh, nhắc lại sau vài tuần và đem lại khả năng bảo vệ gần như 100%.</p>
<div class="stats">
  <div><b>≤ 24 giờ</b><span>tiêm mũi sơ sinh càng sớm càng tốt sau khi sinh</span></div>
  <div><b>2–3 mũi</b><span>tiếp theo, mỗi mũi cách nhau ít nhất 4 tuần (WHO)</span></div>
  <div><b>≈ 100%</b><span>khả năng bảo vệ khi tiêm đầy đủ</span></div>
</div>
<ul>
  <li>Tại Việt Nam, vắc xin viêm gan B cho trẻ dưới 1 tuổi được triển khai từ năm 1997 và mở rộng toàn quốc từ năm 2002; vì vậy người sinh trước năm 2003 được khuyến cáo xét nghiệm sàng lọc.</li>
  <li>Phác đồ dự phòng lây truyền mẹ – con tại Việt Nam: mũi sơ sinh trong vòng 24 giờ, sau đó tiêm 3 mũi khi trẻ 2, 3 và 4 tháng tuổi.</li>
  <li>Người lớn chưa có miễn dịch (anti-HBs &lt; 10 IU/L) nên tiêm đủ liệu trình, rồi kiểm tra lại anti-HBs sau 1–2 tháng.</li>
</ul>

<h2>Hỏi đáp nhanh về vắc xin</h2>
<ul>
  <li><strong>Vắc xin có an toàn không?</strong> Rất an toàn – là vắc xin tái tổ hợp đã được kiểm định nghiêm ngặt trên toàn cầu; không ảnh hưởng đến khả năng sinh sản. Phản ứng thường gặp là sốt nhẹ, sưng đau nhẹ tại chỗ tiêm, tự hết sau 1–2 ngày; đưa trẻ đi khám nếu sốt cao trên 39 °C hoặc lừ đừ.</li>
  <li><strong>Lịch tiêm cho người lớn chưa có miễn dịch:</strong> phác đồ 3 mũi (thường theo lịch 0–1–6 tháng). Sau khi hoàn thành nên xét nghiệm anti-HBs sau 1–2 tháng để xác định đã đạt ≥ 10 IU/L.</li>
  <li><strong>Lỡ trễ lịch hoặc bỏ một mũi:</strong> tiêm bổ sung mũi còn thiếu càng sớm càng tốt, không cần tiêm lại từ đầu.</li>
  <li><strong>Người đã có anti-HBs cao</strong> (ví dụ &gt; 100 IU/L) chưa cần tiêm nhắc ngay.</li>
  <li><strong>Người đã nhiễm (HBsAg dương tính) có cần tiêm?</strong> Không – vắc xin không chữa bệnh; cần khám và điều trị theo chỉ định.</li>
  <li><strong>Người suy giảm miễn dịch, lọc máu chu kỳ</strong> có thể cần lịch hoặc liều riêng theo chỉ định của bác sĩ.</li>
  <li><strong>Phụ nữ dự định mang thai</strong> nên kiểm tra miễn dịch và tiêm trước khi có thai nếu chưa có kháng thể.</li>
  <li><strong>Trẻ em:</strong> được tiêm miễn phí trong Chương trình Tiêm chủng mở rộng: mũi sơ sinh trong 24 giờ đầu, sau đó vắc xin 5 trong 1 (hoặc 6 trong 1) lúc 2, 3, 4 tháng tuổi.</li>
  <li><strong>Vắc xin viêm gan B không phòng được viêm gan A hay C</strong> – mỗi bệnh có vắc xin/biện pháp riêng.</li>
</ul>

<h2>Dự phòng sau phơi nhiễm HBV</h2>
<p>Cần thực hiện <strong>ngay, trong vòng 24 giờ</strong> sau phơi nhiễm:</p>
<ol>
  <li><strong>Rửa</strong> vết thương/nơi tiếp xúc dưới vòi nước chảy bằng xà phòng; nếu là niêm mạc mắt thì rửa bằng NaCl 0,9%.</li>
  <li><strong>Xét nghiệm</strong> HBsAg, anti-HBs, anti-HBc cho người bị phơi nhiễm.</li>
  <li><strong>Dự phòng</strong> khi người phơi nhiễm có HBsAg âm tính, anti-HBs &lt; 10 IU/mL và anti-HBc âm tính (các trường hợp khác không cần can thiệp):
    <ul>
      <li>Globulin miễn dịch viêm gan B (HBIG) 0,06 mL/kg tiêm bắp;</li>
      <li>Tiêm đủ 3 mũi vắc xin viêm gan B;</li>
      <li>Xét nghiệm lại HBsAg, anti-HBs sau 1–2 tháng kể từ mũi cuối.</li>
    </ul>
  </li>
</ol>

<h2>Phòng bệnh không đặc hiệu</h2>
<ul>
  <li>Bảo đảm an toàn truyền máu và chế phẩm máu; sàng lọc viêm gan B mọi đơn vị máu.</li>
  <li>Không dùng chung kim tiêm và dụng cụ xuyên da; không dùng chung dao cạo, bàn chải đánh răng.</li>
  <li>Thực hiện an toàn tình dục.</li>
  <li>Tránh tiếp xúc trực tiếp với máu và dịch tiết của người nhiễm HBV.</li>
  <li>Cơ sở y tế thực hiện các biện pháp phòng ngừa chuẩn.</li>
</ul>

<h2>Còn khoảng trống nào?</h2>
<p>Trên toàn cầu, WHO ghi nhận chỉ khoảng 45% trẻ sơ sinh được tiêm mũi vắc xin trong 24 giờ đầu đời (năm 2022). Tại Việt Nam, tỷ lệ tiêm mũi sơ sinh và đủ 3 mũi cho trẻ nhỏ được báo cáo ở mức cao nhưng khác nhau giữa các năm và nguồn số liệu; tiêm phòng cho người lớn hiện theo hình thức tự chi trả.</p>`
},

/* 7 ------------------------------------------------------------------ */
{
  id: "me-con-viem-gan-b", group: "bnho", icon: "baby", date: "02/2025",
  title: "Phòng lây truyền viêm gan B từ mẹ sang con",
  summary: "Sàng lọc HBsAg thai phụ, khi nào dùng tenofovir (từ thai kỳ thứ 2), vắc xin và HBIG cho trẻ trong 24 giờ đầu, cho con bú và theo dõi trẻ.",
  sources: [SRC.qd678, SRC.byt, SRC.nhep],
  related: ["hiv-me-con", "viem-gan-b-tre-em", "phong-benh-viem-gan-b", "duong-lay-khong-lay"],
  body: `
<p>Tại Việt Nam, lây truyền từ mẹ sang con là đường lây HBV chủ yếu, thường xảy ra trong lúc chuyển dạ và sinh con. Việc dự phòng được hướng dẫn trong <strong>Quyết định 678/QĐ-BYT ngày 26/02/2025</strong> của Bộ Y tế (Sơ đồ 2, Phụ lục 1) và tóm tắt trong Phụ lục 6 của hướng dẫn điều trị viêm gan B năm 2026 (QĐ 1740/QĐ-BYT). Làm đúng các bước, trẻ có thể lớn lên không nhiễm vi rút.</p>

<div class="stats">
  <div><b>1</b><span>Xét nghiệm HBsAg cho mọi thai phụ ngay từ lần khám thai đầu</span></div>
  <div><b>≤ 24 giờ</b><span>tiêm vắc xin cho mọi trẻ sơ sinh (và HBIG nếu mẹ HBsAg dương tính)</span></div>
  <div><b>2, 3, 4 tháng</b><span>tiêm tiếp 3 mũi vắc xin viêm gan B</span></div>
  <div><b>7–12 tháng</b><span>xét nghiệm HBsAg cho trẻ sinh ra từ mẹ nhiễm</span></div>
</div>

<h2>Bước 1 – Xét nghiệm HBsAg cho mọi phụ nữ mang thai</h2>
<ul>
  <li>Làm trong <strong>lần khám thai đầu tiên</strong> hoặc càng sớm càng tốt (xét nghiệm nhanh hoặc xét nghiệm miễn dịch tại phòng xét nghiệm).</li>
  <li>Không cần làm lại nếu đã biết tình trạng nhiễm. Chỉ xét nghiệm lại khi kết quả âm tính nhưng trong 3 tháng cuối trước sinh có nguy cơ cao tiếp xúc với HBV.</li>
  <li>Kết quả âm tính vẫn cần tiêm vắc xin liều sơ sinh cho trẻ trong 24 giờ sau sinh.</li>
</ul>

<h2>Bước 2 – Thai phụ HBsAg dương tính: xét nghiệm HBV DNA hoặc HBeAg</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Kết quả</th><th>Dự phòng bằng tenofovir cho mẹ</th></tr></thead>
  <tbody>
    <tr><td><strong>HBV DNA ≥ 200.000 IU/mL</strong> hoặc <strong>HBeAg dương tính</strong></td><td><strong>Bắt đầu tenofovir</strong> từ thai kỳ thứ 2 (từ tuần thai thứ 14) càng sớm càng tốt, cho đến <strong>ít nhất 3 tháng sau sinh</strong> hoặc khi trẻ hoàn thành các mũi vắc xin theo lịch.</td></tr>
    <tr><td>HBV DNA &lt; 200.000 IU/mL hoặc HBeAg âm tính</td><td>Không cần dùng tenofovir dự phòng cho bà mẹ.</td></tr>
    <tr><td><strong>Không làm được</strong> xét nghiệm HBV DNA và HBeAg</td><td>Dự phòng bằng tenofovir cho <strong>tất cả</strong> thai phụ có HBsAg dương tính.</td></tr>
  </tbody>
</table></div>
<ul>
  <li>Thai phụ bị bệnh thận hoặc loãng xương ưu tiên dùng TAF thay cho TDF.</li>
  <li><strong>Không dùng entecavir</strong> cho phụ nữ mang thai. Người đang dùng entecavir mà có thai hoặc dự định có thai cần chuyển sang phác đồ tenofovir (với người dự định có thai: chuyển trước ít nhất 2 tháng).</li>
  <li>Song song, bác sĩ <strong>đánh giá tiêu chuẩn điều trị lâu dài</strong> như người lớn (xơ hóa đáng kể hoặc xơ gan; HBV DNA &gt; 2.000 IU/mL kèm ALT tăng; đồng nhiễm, bệnh đồng mắc, suy giảm miễn dịch, tiền sử gia đình ung thư gan/xơ gan; ALT tăng kéo dài khi không đo được HBV DNA). Đủ tiêu chuẩn thì điều trị tiếp lâu dài.</li>
  <li>Sau sinh, người mẹ được <strong>chuyển đến cơ sở điều trị bệnh truyền nhiễm/gan</strong> để theo dõi lâu dài: kiểm tra chức năng gan và HBV DNA sau sinh 3 tháng, sau đó đánh giá lại tiêu chuẩn điều trị mỗi 3 tháng. <strong>Việc ngừng thuốc cần bác sĩ chỉ định</strong>; nếu chưa đủ tiêu chuẩn điều trị lâu dài thì vẫn theo dõi men gan và HBV DNA sau ngừng thuốc để phát hiện sớm viêm gan bùng phát.</li>
</ul>

<h2>Bước 3 – Can thiệp cho trẻ</h2>
<ul>
  <li><strong>Mọi trẻ sơ sinh</strong> (kể cả mẹ HBsAg âm tính hoặc chưa rõ tình trạng) tiêm <strong>vắc xin viêm gan B liều sơ sinh trong vòng 24 giờ</strong> sau sinh, rồi tiêm đủ 3 mũi tiếp theo theo lịch tiêm chủng (2, 3, 4 tháng tuổi).</li>
  <li>Trẻ sinh ra từ <strong>mẹ HBsAg dương tính</strong> được tiêm thêm <strong>huyết thanh kháng viêm gan B (HBIG)</strong> nếu có điều kiện – tốt nhất trong 12 giờ đầu, không muộn hơn 24 giờ sau sinh, tiêm ở vị trí khác với vị trí tiêm vắc xin.</li>
  <li>Mẹ và con được chuyển đến cơ sở điều trị viêm gan để theo dõi, chăm sóc lâu dài.</li>
</ul>

<h2>Cho con bú và chăm sóc hằng ngày</h2>
<ul>
  <li>Hướng dẫn của Bộ Y tế: <strong>tất cả trẻ được nuôi bằng sữa mẹ</strong>, không phụ thuộc việc người mẹ có điều trị viêm gan B hay không.</li>
  <li>Biện pháp thận trọng: nếu đầu vú nứt chảy máu, tạm ngừng cho bú bên đó, vắt bỏ sữa cho đến khi lành rồi cho bú lại.</li>
  <li>Mẹ nhiễm HBV vẫn ôm, hôn và chăm sóc con bình thường. Mổ lấy thai <strong>không bắt buộc</strong> – cách sinh tùy chỉ định sản khoa; điều cốt lõi là tiêm phòng cho trẻ.</li>
</ul>

<h2>Theo dõi trẻ sinh ra từ mẹ nhiễm HBV</h2>
<ul>
  <li><strong>Xét nghiệm HBsAg khi trẻ 7–12 tháng tuổi</strong> để xác định tình trạng nhiễm HBV. Nếu trẻ tiêm vắc xin muộn so với lịch, xét nghiệm 1–2 tháng sau khi hoàn thành mũi cuối.</li>
  <li>Nếu HBsAg dương tính, trẻ được theo dõi định kỳ tại cơ sở điều trị viêm gan.</li>
</ul>

<h2>Chuẩn bị đi sinh</h2>
<ul>
  <li>Mang theo hồ sơ khám thai có kết quả HBsAg/HBV DNA và <strong>báo ngay cho nhân viên y tế</strong> để kíp sinh chuẩn bị vắc xin và HBIG cho bé.</li>
  <li>Sinh tại cơ sở có dịch vụ đỡ đẻ và tiêm chủng sơ sinh; nếu cơ sở không có HBIG, được chuyển đến đơn vị có dịch vụ.</li>
  <li>Những trường hợp đặc biệt (thai phụ có tải lượng sát ngưỡng chỉ định, trẻ sơ sinh nhẹ cân dưới 2.000 g…) cần bác sĩ sản/truyền nhiễm/nhi đánh giá và quyết định.</li>
</ul>

<div class="callout warn">
  <p>Đây là bản tóm tắt để tham khảo. Phác đồ chính thức, thời điểm dùng và ngừng thuốc phải căn cứ văn bản gốc (QĐ 678/QĐ-BYT, QĐ 1740/QĐ-BYT) và chỉ định của bác sĩ sản khoa/truyền nhiễm. Không tự ý dùng hoặc ngừng thuốc.</p>
</div>

<h2>Vai trò của trạm y tế phường/xã</h2>
<p>Tư vấn và thực hiện (hoặc lấy mẫu chuyển) xét nghiệm cho thai phụ; tư vấn sau xét nghiệm và chuyển gửi các trường hợp dương tính; theo dõi cặp mẹ – con sau sinh, nhắc đưa trẻ đi xét nghiệm đúng mốc; ghi chép sổ sách, báo cáo.</p>

<h2>Thực trạng tại Việt Nam</h2>
<ul>
  <li>Hồ sơ quốc gia ghi nhận khuyến cáo xét nghiệm HBV cho thai phụ đã được ban hành, nhưng thai phụ chưa được sàng lọc viêm gan B, C thường quy trên thực tế.</li>
  <li>HBIG có sẵn cho trẻ phơi nhiễm HBV nhưng bảo hiểm y tế chưa chi trả nên còn rào cản chi phí.</li>
  <li>Hiểu biết về phòng lây truyền HBV ở thai phụ và nhân viên y tế còn hạn chế.</li>
  <li>Năm 2019, tỷ lệ HBsAg ở trẻ dưới 5 tuổi là 0,64% (khoảng tin cậy 0,53–0,76%) – thấp hơn mục tiêu 1% của Mục tiêu phát triển bền vững.</li>
</ul>`
},

/* 8 ------------------------------------------------------------------ */
{
  id: "viem-gan-b-tre-em", group: "bnho", icon: "baby", date: "06/2026",
  title: "Viêm gan B ở trẻ em",
  summary: "Khi nào trẻ 2–11 tuổi cần điều trị, thuốc và liều dùng theo cân nặng; vì sao không điều trị trẻ dưới 2 tuổi.",
  sources: [SRC.byt],
  related: ["me-con-viem-gan-b", "phong-benh-viem-gan-b"],
  body: `
<p>Hiện chưa đủ bằng chứng để áp dụng tiêu chuẩn điều trị của người lớn cho trẻ dưới 12 tuổi. Vì vậy chỉ định điều trị viêm gan B mạn ở trẻ em phải được cân nhắc cẩn thận và cần loại trừ các nguyên nhân khác gây tổn thương gan, trong đó có bệnh gan di truyền (ví dụ bệnh Wilson).</p>

<h2>Trẻ dưới 2 tuổi</h2>
<p><strong>Không chỉ định điều trị</strong> thuốc kháng vi rút.</p>

<h2>Trẻ 2–11 tuổi: chỉ điều trị khi có một trong các biểu hiện</h2>
<ul>
  <li>Viêm gan bùng phát dai dẳng (ít nhất 2 lần đánh giá trong vòng 6 tháng) và HBV DNA &gt; 2.000 IU/mL;</li>
  <li>Xơ gan hoặc xơ hóa gan tiến triển (≥ F2);</li>
  <li>Có bệnh đồng nhiễm, đồng mắc làm tăng nguy cơ tiến triển bệnh gan;</li>
  <li>Có chỉ định dùng thuốc ức chế miễn dịch hoặc hóa trị liệu.</li>
</ul>

<h2>Thuốc dùng cho trẻ 2–11 tuổi</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Thuốc</th><th>Liều trẻ em</th><th>Lưu ý / tác dụng phụ</th></tr></thead>
  <tbody>
    <tr><td>Entecavir (ETV)</td><td>Trẻ ≥ 2 tuổi: 0,015 mg/kg/ngày (tối đa 0,5 mg/ngày)</td><td>Nhiễm toan lactic</td></tr>
    <tr><td>Tenofovir disoproxil fumarate (TDF)</td><td>Trẻ ≥ 2 tuổi: 8 mg/kg/ngày (tối đa 300 mg/ngày)</td><td>Bệnh thận, hội chứng Fanconi, loãng xương, nhiễm toan lactic. Không dùng khi mức lọc cầu thận &lt; 50 mL/phút hoặc loãng xương.</td></tr>
    <tr><td>Tenofovir alafenamide (TAF)</td><td>25 mg/ngày, cho trẻ ≥ 6 tuổi và cân nặng ≥ 25 kg</td><td>Tăng cân, tăng cholesterol, nhiễm toan lactic. Không dùng khi mức lọc cầu thận &lt; 15 mL/phút mà không lọc máu.</td></tr>
    <tr><td>Interferon IFN-α-2b</td><td>Trẻ ≥ 2 tuổi: 6 triệu đơn vị/m² × 3 lần/tuần</td><td>Triệu chứng giả cúm, mệt mỏi, rối loạn tâm thần, giảm bạch cầu, chán ăn, sụt cân</td></tr>
  </tbody>
</table></div>
<div class="callout"><p>Phòng bệnh cho trẻ vẫn là ưu tiên số một: tiêm mũi vắc xin sơ sinh trong 24 giờ đầu và đủ các mũi theo lịch. Xem bài <a href="#/bai/phong-benh-viem-gan-b">Phòng bệnh viêm gan B</a>.</p></div>`
},

/* 9 ------------------------------------------------------------------ */
{
  id: "xo-gan-ung-thu-gan", group: "bkln", icon: "chart", date: "06/2026",
  title: "Xơ gan và ung thư gan: đánh giá và phát hiện sớm",
  summary: "Cách đánh giá mức độ xơ hóa gan, phân loại Child-Pugh và lịch tầm soát ung thư gan ở người nhiễm viêm gan B.",
  sources: [SRC.byt, SRC.nhep],
  related: ["viem-gan-b-man", "viem-gan-b-dac-biet", "that-bai-dieu-tri-theo-doi", "dinh-duong-loi-song-gan"],
  body: `
<div class="stats">
  <div><b>23.333</b><span>ca tử vong do ung thư gan, viêm gan B và C tại Việt Nam năm 2022</span></div>
  <div><b>26.725</b><span>ca tử vong liên quan viêm gan B năm 2022 (ước tính mô hình hóa)</span></div>
</div>

<h2>Xơ hóa gan và xơ gan</h2>
<p>Viêm gan B mạn kéo dài có thể dẫn đến xơ hóa gan, xơ gan rồi ung thư biểu mô tế bào gan. Đánh giá không xâm lấn gồm chỉ số huyết thanh (APRI, FIB-4, M2BPGi, FibroTest) hoặc đo độ đàn hồi gan (FibroScan, siêu âm đàn hồi, cộng hưởng từ đàn hồi).</p>
<div class="table-wrap"><table>
  <thead><tr><th>Mức độ</th><th>Gợi ý ngưỡng</th></tr></thead>
  <tbody>
    <tr><td>Xơ hóa gan đáng kể (≥ F2)</td><td>APRI &gt; 0,5 hoặc FibroScan &gt; 7 kPa</td></tr>
    <tr><td>Xơ gan (F4)</td><td>APRI &gt; 1 hoặc FibroScan &gt; 12,5 kPa, hoặc có triệu chứng lâm sàng của xơ gan</td></tr>
  </tbody>
</table></div>
<p>Phân loại <strong>Child-Pugh</strong>: Child-Pugh A là xơ gan còn bù; Child-Pugh B, C là xơ gan mất bù (có cổ trướng, xuất huyết do vỡ giãn tĩnh mạch thực quản, bệnh não gan, vàng da). Đo độ đàn hồi gan chỉ nên làm khi bệnh nhân không ở giai đoạn viêm gan cấp hoặc đợt bùng phát (ALT &lt; 5 lần giới hạn trên bình thường).</p>

<h3>Phân độ xơ hóa gan theo Metavir (Phụ lục 2 – QĐ 1740/QĐ-BYT)</h3>
<p>Xơ hóa gan chia 4 giai đoạn F0–F4: <strong>F0–F1</strong> không hoặc rất nhẹ; <strong>F ≥ 2</strong> xơ hóa đáng kể; <strong>F ≥ 3</strong> xơ hóa tiến triển; <strong>F4</strong> là xơ gan.</p>
<div class="table-wrap"><table>
  <thead><tr><th>Phương pháp</th><th>F0–F1</th><th>F2</th><th>F3</th><th>F4</th></tr></thead>
  <tbody>
    <tr><td>Đo độ đàn hồi gan (FibroScan)</td><td>≤ 7,0 kPa</td><td>&gt; 7,0 và ≤ 9,5 kPa</td><td>&gt; 9,5 và ≤ 12,5 kPa</td><td>&gt; 12,5 kPa</td></tr>
    <tr><td>Chỉ số APRI</td><td>≤ 0,5</td><td colspan="2">&gt; 0,5 và ≤ 1 (F2–F3)</td><td>&gt; 1</td></tr>
    <tr><td>M2BPGi (C.O.I)</td><td>&lt; 0,79</td><td>0,79 – &lt; 1,14</td><td>1,14 – &lt; 1,3</td><td>≥ 1,3</td></tr>
  </tbody>
</table></div>
<p><strong>APRI</strong> = (AST ÷ giới hạn trên bình thường của AST) × 100 ÷ số lượng tiểu cầu (10<sup>9</sup>/L); quy ước giới hạn trên của AST là 40 U/L hoặc theo phòng xét nghiệm.</p>

<h3>Thang điểm Child-Turcotte-Pugh</h3>
<div class="table-wrap"><table>
  <thead><tr><th>Tiêu chuẩn</th><th>1 điểm</th><th>2 điểm</th><th>3 điểm</th></tr></thead>
  <tbody>
    <tr><td>Bệnh não gan</td><td>Không</td><td>Giai đoạn 1–2</td><td>Giai đoạn 3–4</td></tr>
    <tr><td>Cổ trướng</td><td>Không</td><td>Ít</td><td>Nhiều</td></tr>
    <tr><td>Bilirubin huyết thanh</td><td>&lt; 2 mg/dL (&lt; 35 µmol/L)</td><td>2–3 mg/dL (35–50)</td><td>&gt; 3 mg/dL (&gt; 50)</td></tr>
    <tr><td>Albumin huyết thanh</td><td>&gt; 3,5 g/dL (&gt; 35 g/L)</td><td>2,8–3,5 g/dL (28–35)</td><td>&lt; 2,8 g/dL (&lt; 28)</td></tr>
    <tr><td>Tỷ lệ prothrombin / INR</td><td>&gt; 64% / &lt; 1,7</td><td>44–64% / 1,7–2,3</td><td>&lt; 44% / &gt; 2,3</td></tr>
  </tbody>
</table></div>
<p><strong>Child A:</strong> 5–6 điểm (xơ gan còn bù). <strong>Child B:</strong> 7–9 điểm và <strong>Child C:</strong> ≥ 10 điểm (xơ gan mất bù).</p>

<h2>Dấu hiệu cần đi khám/cấp cứu</h2>
<ul>
  <li><strong>Xơ gan tiến triển</strong> thường diễn ra âm thầm nhiều năm; khi muộn có thể có phù chân (do giảm albumin), bụng trướng to do <strong>cổ trướng</strong>, vàng da, ngứa kéo dài (ứ muối mật), mệt mỏi và chán ăn.</li>
  <li><strong>Cấp cứu ngay</strong> khi nôn ra máu tươi hoặc đi cầu phân đen như bã cà phê (vỡ giãn tĩnh mạch thực quản), vàng da tăng nhanh, rối loạn đông máu, lơ mơ hoặc hôn mê (suy gan cấp/bệnh não gan).</li>
  <li>Nhiễm HBV mạn làm tăng nguy cơ ung thư gan nhiều lần so với người không nhiễm nếu không được theo dõi; <strong>tầm soát siêu âm và AFP định kỳ</strong> giúp phát hiện khối u khi còn nhỏ.</li>
</ul>

<h2>Phát hiện sớm ung thư gan</h2>
<ul>
  <li><strong>Siêu âm ổ bụng:</strong> 12–24 tuần/lần; nếu nghi ngờ, chụp cộng hưởng từ hoặc cắt lớp vi tính có tiêm cản quang.</li>
  <li><strong>Chỉ dấu ung thư gan:</strong> AFP, AFP-L3, PIVKA II – 24 tuần/lần (có thể làm 1–3 chỉ dấu tùy điều kiện cơ sở).</li>
  <li><strong>Nội soi thực quản – dạ dày</strong> khi nghi ngờ xơ gan, để phát hiện giãn tĩnh mạch thực quản.</li>
</ul>

<h2>Sống khỏe khi nhiễm HBV</h2>
<ul>
  <li>Duy trì chế độ dinh dưỡng hợp lý và cân nặng phù hợp.</li>
  <li>Tránh hoặc hạn chế tối đa rượu, bia.</li>
  <li>Thận trọng với thuốc có nguy cơ gây độc cho gan (một số thuốc giảm đau/hạ sốt như acetaminophen, thuốc chống lao, thuốc chống co giật, thuốc thảo dược hoặc thực phẩm chức năng không rõ nguồn gốc).</li>
  <li>Thông báo tình trạng nhiễm HBV cho nhân viên y tế khi điều trị các bệnh khác, nhất là khi cần ức chế miễn dịch hoặc hóa trị.</li>
</ul>`
},

/* 10 ----------------------------------------------------------------- */
{
  id: "hiv-me-con", group: "bnho", icon: "hiv", date: "02/2025",
  title: "Phòng lây truyền HIV, viêm gan B và giang mai từ mẹ sang con",
  summary: "Nội dung chính của Quyết định 678/QĐ-BYT (2025): xét nghiệm và tư vấn cho thai phụ, dự phòng HIV, giang mai, theo dõi trẻ và vai trò của các cơ sở y tế.",
  sources: [SRC.qd678, SRC.byt],
  related: ["me-con-viem-gan-b", "viem-gan-b-dac-biet", "phong-benh-viem-gan-b"],
  body: `
<h2>Văn bản hướng dẫn</h2>
<p>Ngày <strong>26/02/2025</strong>, Bộ Y tế ban hành <strong>Quyết định 678/QĐ-BYT</strong> về “Hướng dẫn kỹ thuật các can thiệp dự phòng lây truyền HIV, viêm gan B và giang mai từ mẹ sang con”, cập nhật nội dung của Quyết định 2834/QĐ-BYT (2019). Văn bản thực hiện Kế hoạch hành động quốc gia loại trừ ba bệnh lây từ mẹ sang con giai đoạn 2018–2030 (QĐ 7130/QĐ-BYT), dựa trên Khung kế hoạch của WHO khu vực Tây Thái Bình Dương; mục tiêu tiến tới loại trừ cả ba bệnh vào năm 2030. Hướng dẫn áp dụng tại các cơ sở y tế chăm sóc sức khỏe bà mẹ, trẻ em và điều trị dự phòng lây truyền từ mẹ sang con.</p>

<h2>Bốn nguyên tắc</h2>
<ul>
  <li><strong>Tất cả</strong> phụ nữ mang thai được xét nghiệm HIV, HBsAg và giang mai trong lần khám thai đầu tiên hoặc càng sớm càng tốt.</li>
  <li>Phụ nữ mang thai được chẩn đoán nhiễm HIV, HBV hoặc giang mai cần được can thiệp dự phòng lây truyền cho con.</li>
  <li><strong>Tất cả</strong> trẻ sơ sinh cần được tiêm vắc xin viêm gan B trong 24 giờ đầu, kể cả khi mẹ không nhiễm hoặc chưa rõ tình trạng.</li>
  <li>Tất cả trẻ sinh ra từ mẹ nhiễm HIV, HBV, giang mai được quản lý, theo dõi sau sinh; các cơ sở y tế phối hợp và báo cáo.</li>
</ul>

<h2>Tư vấn và xét nghiệm cho thai phụ</h2>
<ul>
  <li><strong>Trước xét nghiệm:</strong> giải thích nguy cơ lây từ mẹ sang con, lợi ích của xét nghiệm sớm (các can thiệp hiệu quả bảo vệ cả mẹ và con) và quy trình lấy máu, thời gian trả kết quả.</li>
  <li><strong>Xét nghiệm:</strong> dùng test nhanh hoặc kỹ thuật phù hợp, ưu tiên sinh phẩm được Bộ Y tế cấp phép; khuyến khích dùng test đôi (HIV và giang mai) để giảm chi phí và số lần lấy máu.</li>
  <li>Không xét nghiệm lại nếu đã biết tình trạng; chỉ làm lại khi kết quả âm tính trong vòng 3 tháng trước sinh và có nguy cơ cao. Thai phụ nguy cơ cao nên được tư vấn xét nghiệm lại vào 3 tháng cuối thai kỳ.</li>
  <li><strong>Kết quả sàng lọc dương tính</strong> chưa có nghĩa là đã mắc bệnh – cần xét nghiệm khẳng định. Thai phụ được tư vấn, chuyển gửi điều trị và <strong>giới thiệu bạn tình/chồng</strong> đi tư vấn, xét nghiệm.</li>
</ul>

<h2>Dự phòng lây truyền HIV</h2>
<ul>
  <li><strong>Thai phụ nhiễm HIV</strong> điều trị thuốc kháng vi rút (ARV) <strong>càng sớm càng tốt</strong>; được chuyển đến cơ sở chăm sóc, điều trị HIV. Nếu phản ứng với xét nghiệm HIV khi chuyển dạ thì điều trị ARV ngay và ngừng nếu xét nghiệm khẳng định âm tính.</li>
  <li><strong>Nguy cơ lây truyền cao</strong> khi mẹ không điều trị ARV hoặc mới bắt đầu ≤ 4 tuần trước sinh; tải lượng HIV ≥ 1.000 copies/mL; hoặc phát hiện nhiễm HIV trong vòng 72 giờ trước hoặc ngay khi sinh.</li>
  <li><strong>Trẻ sinh ra từ mẹ nhiễm HIV</strong> được dùng thuốc ARV dự phòng ngay sau sinh, mức độ (1 hay 2 thuốc) tùy nguy cơ; có tư vấn nuôi dưỡng trẻ (sữa mẹ, sữa thanh trùng từ ngân hàng sữa hoặc sữa công thức) trước và ngay sau sinh, kèm hướng dẫn tuân thủ.</li>
  <li><strong>Chẩn đoán sớm cho trẻ:</strong> xét nghiệm axit nucleic (NAT) lúc 0–2 ngày tuổi với trẻ phơi nhiễm khi mới sinh và/hoặc ở 4–6 tuần tuổi; nếu âm tính, theo dõi lâm sàng và xét nghiệm NAT lại lúc 9 tháng; xét nghiệm kháng thể lúc 18 tháng hoặc 3 tháng sau khi ngừng bú mẹ. Trẻ phơi nhiễm được dự phòng nhiễm trùng cơ hội bằng co-trimoxazole và điều trị ARV ngay nếu xác định nhiễm HIV.</li>
</ul>

<h2>Dự phòng lây truyền viêm gan B</h2>
<p>Xem bài chi tiết <a href="#/bai/me-con-viem-gan-b">Phòng lây truyền viêm gan B từ mẹ sang con</a>: xét nghiệm HBsAg; HBV DNA ≥ 200.000 IU/mL hoặc HBeAg dương thì dùng tenofovir từ thai kỳ thứ 2; trẻ tiêm vắc xin và HBIG trong 24 giờ; trẻ được bú mẹ; xét nghiệm HBsAg cho trẻ lúc 7–12 tháng. Người đồng nhiễm HBV/HIV xem bài <a href="#/bai/viem-gan-b-dac-biet">Viêm gan B ở các nhóm đặc biệt</a>.</p>

<h2>Dự phòng lây truyền giang mai</h2>
<ul>
  <li>Thai phụ có xét nghiệm nhanh giang mai dương tính được <strong>chỉ định điều trị ngay</strong> để dự phòng hiệu quả; điều trị có thể thực hiện tại cơ sở sản phụ khoa. Nơi có RPR/VDRL thì điều trị sau khi có kết quả dương tính cả hai loại.</li>
  <li>Phác đồ dùng penicillin (benzathine penicillin), tùy giai đoạn bệnh (mắc sớm dưới 2 năm hay muộn/không rõ thời gian). Có phác đồ thay thế khi không có hoặc dị ứng penicillin. <strong>Không dùng doxycycline</strong> cho thai phụ. Erythromycin không qua hàng rào rau thai nên không điều trị được cho thai nhi – trẻ sinh ra cần được điều trị giang mai sớm.</li>
  <li>Điều trị giang mai chủ yếu là ngoại trú; nội trú khi có biến chứng (tim mạch, thần kinh) và giang mai bẩm sinh. Cần tư vấn và xét nghiệm cho bạn tình.</li>
  <li><strong>Trẻ sinh ra từ mẹ bị giang mai:</strong> khám tìm dấu hiệu giang mai bẩm sinh (bọng nước, viêm mũi, gan lách to, tổn thương xương, viêm màng não…). Nếu mẹ đã điều trị sớm, đủ và trẻ không có dấu hiệu: theo dõi sát tại tuần thứ 6, 10, 14 và 9 tháng sau sinh. Nếu mẹ không điều trị, điều trị muộn (trong vòng 30 ngày trước sinh) hoặc không đầy đủ, hoặc trẻ có triệu chứng: trẻ được xét nghiệm và điều trị theo phác đồ giang mai bẩm sinh. Trẻ được nuôi dưỡng và chăm sóc như bình thường.</li>
</ul>

<h2>Trách nhiệm của các cơ sở</h2>
<ul>
  <li><strong>Cơ sở sản phụ khoa:</strong> tư vấn, xét nghiệm, điều trị dự phòng; tiêm vắc xin viêm gan B liều sơ sinh trong 24 giờ cho mọi trẻ và HBIG cho trẻ sinh ra từ mẹ HBsAg dương tính nếu đủ điều kiện hoặc chuyển đến đơn vị có dịch vụ tiêm chủng.</li>
  <li><strong>Cơ sở chăm sóc HIV, bệnh truyền nhiễm/gan mật, da liễu, nhi khoa:</strong> tiếp nhận điều trị mẹ và con theo từng bệnh; chuyển gửi cặp mẹ – con đến cơ sở phù hợp.</li>
  <li><strong>Trạm y tế xã/phường/thị trấn:</strong> tư vấn và xét nghiệm (hoặc lấy mẫu chuyển), chuyển gửi các trường hợp dương tính, theo dõi cặp mẹ – con sau sinh, nhắc đi xét nghiệm cho trẻ, ghi chép sổ sách và báo cáo.</li>
  <li><strong>Trung tâm Kiểm soát bệnh tật tỉnh/thành phố:</strong> đầu mối lồng ghép hoạt động vào kế hoạch chăm sóc sức khỏe sinh sản và phòng chống HIV/AIDS, giám sát và báo cáo.</li>
</ul>

<div class="callout warn">
  <p>Đây là bản tóm tắt nội dung giáo dục. Phác đồ thuốc, liều lượng và lịch cụ thể cho từng người phải do bác sĩ sản khoa, truyền nhiễm hoặc nhi khoa quyết định theo văn bản gốc (QĐ 678/QĐ-BYT) và các hướng dẫn chuyên ngành của Bộ Y tế.</p>
</div>`
},

/* 11 ----------------------------------------------------------------- */
{
  id: "viet-nam-loai-tru-viem-gan", group: "btn", icon: "chart", date: "06/2025",
  title: "Việt Nam trên con đường loại trừ viêm gan B, C vào năm 2030",
  summary: "Số liệu dịch tễ, tiến độ so với mục tiêu WHO, chính sách và những rào cản chính theo Hồ sơ loại trừ viêm gan quốc gia (cập nhật 06/2025).",
  sources: [SRC.nhep],
  related: ["viem-gan-b-tong-quan", "phong-benh-viem-gan-b", "me-con-viem-gan-b"],
  body: `
<p>Việt Nam đặt mục tiêu <strong>loại trừ viêm gan B và C vào năm 2030</strong> (kể cả mục tiêu loại trừ lây truyền HBV từ mẹ sang con). Kế hoạch phòng, chống viêm gan vi rút giai đoạn 2021–2025 (QĐ 4531/QĐ-BYT, 2021) hướng tới phân cấp dịch vụ và lồng ghép với chăm sóc ban đầu.</p>

<h2>Gánh nặng bệnh</h2>
<div class="stats">
  <div><b>9,4%</b><span>người lớn có HBsAg+ (điều tra 32 tỉnh, 25.649 người, 2018)</span></div>
  <div><b>≈ 7%</b><span>tỷ lệ HBsAg+ ước tính theo mô hình năm 2022</span></div>
  <div><b>12.605</b><span>ca nhiễm HBV mới (2022, mô hình hóa)</span></div>
  <div><b>26.725</b><span>ca tử vong liên quan HBV (2022, mô hình hóa)</span></div>
</div>
<p>Với viêm gan C, tỷ lệ nhiễm mạn khoảng 0,92% (2022), có 17.944 ca nhiễm mới và 3.894 ca tử vong liên quan (2022).</p>

<h2>Tiến độ so với mục tiêu của WHO</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Chỉ số</th><th>Việt Nam</th><th>Mục tiêu</th></tr></thead>
  <tbody>
    <tr><td>Trẻ sơ sinh được tiêm vắc xin viêm gan B (2023)</td><td>82%</td><td>WHO 2020: 50%</td></tr>
    <tr><td>Trẻ nhỏ tiêm đủ 3 mũi vắc xin (2023)</td><td>65%</td><td>WHO 2020: 90%</td></tr>
    <tr><td>Người nhiễm HBV được chẩn đoán (2022)</td><td>41,67%</td><td>WHO 2020: 30%</td></tr>
    <tr><td>Người nhiễm HCV được chẩn đoán (2022)</td><td>12,83%</td><td>WHO 2020: 30%</td></tr>
    <tr><td>Người nhiễm HBV đã chẩn đoán được điều trị phù hợp (2022)</td><td>3%</td><td>–</td></tr>
    <tr><td>HBsAg ở trẻ dưới 5 tuổi (2019)</td><td>0,64%</td><td>SDG: 1%</td></tr>
    <tr><td>Tử vong do HBV trên 100.000 dân (2021)</td><td>14,5</td><td>WHO 2030: 4</td></tr>
  </tbody>
</table></div>
<p class="muted">Một số số liệu về tiêm chủng khác nhau giữa các trang của hồ sơ do năm báo cáo và nguồn khác nhau; bảng trên lấy theo biểu đồ tiến độ của hồ sơ.</p>

<h2>Điểm sáng trong chính sách</h2>
<ul>
  <li>Xét nghiệm HBV, HCV là bắt buộc trong sàng lọc máu từ năm 1992.</li>
  <li>Khuyến cáo sàng lọc HBV theo nhóm nguy cơ và theo năm sinh (trước 2003).</li>
  <li>Thông tư 35/2021 và Thông tư 20/2022 giúp chuyển mẫu xét nghiệm giữa các cơ sở và mở rộng cơ sở được cung cấp dịch vụ viêm gan có bảo hiểm y tế chi trả.</li>
  <li>Thí điểm xét nghiệm tại điểm chăm sóc bằng GeneXpert với sự hỗ trợ của WHO.</li>
  <li>Điều trị viêm gan B được bảo hiểm y tế chi trả theo mức thông thường (80–100%); điều trị viêm gan C chỉ được chi trả tối đa 50%.</li>
</ul>

<h2>Thách thức chính</h2>
<ul>
  <li>Lộ trình chăm sóc viêm gan B còn phức tạp; xét nghiệm HBV DNA, HBeAg thường chưa có ở tuyến dưới.</li>
  <li>Hiểu biết về viêm gan B, C của nhân viên y tế tuyến cơ sở và cộng đồng còn hạn chế.</li>
  <li>Hệ thống giám sát mới ghi nhận ca bệnh nhập viện; dữ liệu về người được điều trị còn ít.</li>
  <li>Thai phụ chưa được sàng lọc thường quy; HBIG chưa được bảo hiểm chi trả.</li>
  <li>Tiêm vắc xin viêm gan B cho người lớn theo hình thức tự chi trả.</li>
</ul>

<h2>Bước tiếp theo</h2>
<p>Thực hiện Kế hoạch phòng, chống viêm gan vi rút 2021–2025, phân cấp dịch vụ viêm gan B, C về tuyến cơ sở, nâng cao kiến thức cho nhân viên y tế tuyến đầu và thúc đẩy sàng lọc, quản lý bệnh tại cơ sở y tế ban đầu.</p>`
},

/* 12 ----------------------------------------------------------------- */
{
  id: "giai-doan-nhiem-hbv-man", group: "btn", icon: "liver", date: "06/2026",
  title: "Các giai đoạn của nhiễm HBV mạn",
  summary: "Bảng phân biệt thể dung nạp miễn dịch, thể hoạt động, thể không hoạt động, thể tái hoạt, vùng xám và viêm gan B thể ẩn (Phụ lục 1 – QĐ 1740/QĐ-BYT).",
  sources: [SRC.byt],
  related: ["viem-gan-b-man", "xet-nghiem-viem-gan-b", "xo-gan-ung-thu-gan"],
  body: `
<p>Nhiễm HBV mạn không phải lúc nào cũng ở một trạng thái. Theo thời gian, vi rút và hệ miễn dịch của người bệnh tương tác, khiến bệnh chuyển qua nhiều giai đoạn. Việc xác định giai đoạn dựa trên HBsAg, HBeAg, tải lượng HBV DNA, ALT và mức độ tổn thương gan – <strong>do bác sĩ đánh giá</strong>, người bệnh không tự phiên giải.</p>
<div class="callout"><p><strong>Điều người dân cần nhớ:</strong> “không hoạt động” <em>không có nghĩa là đã khỏi</em>. Vi rút vẫn còn trong gan và có thể hoạt động trở lại, vì vậy vẫn phải tái khám định kỳ (thường 3–6 tháng/lần khi chưa có chỉ định dùng thuốc).</p></div>

<h2>Bảng chẩn đoán các giai đoạn</h2>
<div class="table-wrap"><table>
  <thead><tr><th></th><th>Nhiễm HBV mạn HBeAg dương</th><th>Viêm gan B mạn HBeAg dương</th><th>Nhiễm HBV mạn HBeAg âm</th><th>Viêm gan B mạn HBeAg âm</th><th>Vùng xám</th><th>Viêm gan B thể ẩn</th></tr></thead>
  <tbody>
    <tr><td><strong>Cách gọi khác</strong></td><td>Thể dung nạp miễn dịch</td><td>Thể hoạt động</td><td>Thể không hoạt động</td><td>Thể tái hoạt động</td><td>Không xác định</td><td>Không xác định</td></tr>
    <tr><td><strong>HBsAg</strong></td><td>Dương</td><td>Dương</td><td>Dương</td><td>Dương</td><td>Dương</td><td>Âm</td></tr>
    <tr><td><strong>qHBsAg</strong> (log10 IU/mL)</td><td>3,5–4,5</td><td>3,5–4,5</td><td>2,5–3,5</td><td>2–3</td><td>2–3</td><td>Âm</td></tr>
    <tr><td><strong>HBeAg</strong></td><td>Dương</td><td>Dương</td><td>Âm</td><td>Âm</td><td>Âm</td><td>Âm</td></tr>
    <tr><td><strong>Anti-HBe</strong></td><td>Âm</td><td>Âm</td><td>Dương</td><td>Dương</td><td>Dương</td><td>Có thể dương</td></tr>
    <tr><td><strong>HBV DNA</strong> (IU/mL)</td><td>Thường &gt; 10<sup>7</sup></td><td>Thường 10<sup>5</sup>–10<sup>7</sup></td><td>&lt; 10<sup>3</sup></td><td>Thường 10<sup>3</sup>–10<sup>5</sup></td><td>2.000–20.000</td><td>Thấp ở giới hạn phát hiện</td></tr>
    <tr><td><strong>ALT</strong></td><td>Bình thường</td><td>Tăng</td><td>Bình thường</td><td>Tăng</td><td>Dao động</td><td>Bình thường</td></tr>
    <tr><td><strong>Mô học</strong> (sinh thiết gan)</td><td>Viêm hoại tử tối thiểu hoặc xơ hóa</td><td>Viêm hoại tử trung bình hoặc nặng, có các mức độ xơ hóa</td><td>Viêm hoại tử tối thiểu và xơ hóa</td><td>Viêm hoại tử trung bình đến nặng hoặc xơ hóa</td><td>Viêm hoại tử tối thiểu hoặc thấp</td><td>Viêm hoại tử tối thiểu hoặc thấp, có thể xơ hóa</td></tr>
    <tr><td><strong>HBcrAg</strong></td><td>Mức cao</td><td>Mức cao</td><td>Thấp hoặc không phát hiện</td><td>Thấp</td><td>Có thể phát hiện</td><td>Không đủ dữ liệu</td></tr>
    <tr><td><strong>HBV RNA</strong></td><td>Mức cao</td><td>Mức cao</td><td>Thấp hoặc không phát hiện</td><td>Thấp</td><td>Có thể phát hiện</td><td>Không đủ dữ liệu</td></tr>
  </tbody>
</table></div>

<h2>Hiểu đơn giản</h2>
<ul>
  <li><strong>HBeAg dương</strong> thường gắn với vi rút nhân lên mạnh, tải lượng cao và khả năng lây cao hơn.</li>
  <li><strong>Thể dung nạp miễn dịch:</strong> vi rút nhiều nhưng ALT bình thường, gan ít viêm. Vẫn cần theo dõi vì bệnh có thể chuyển sang thể hoạt động.</li>
  <li><strong>Thể không hoạt động:</strong> tải lượng thấp, ALT bình thường – vi rút “nằm yên”, nhưng có thể tái hoạt động nên phải theo dõi suốt đời.</li>
  <li><strong>Vùng xám:</strong> kết quả nằm giữa các thể, chưa xếp rõ – cần theo dõi sát và đánh giá thêm xơ hóa gan.</li>
  <li><strong>Thể ẩn:</strong> HBsAg âm tính nhưng vẫn có HBV DNA ở mức rất thấp; cần chú ý nhất ở người suy giảm miễn dịch.</li>
</ul>
<p>Quyết định dùng thuốc không chỉ dựa vào “thể bệnh” mà theo tiêu chuẩn điều trị: mức độ xơ hóa gan, HBV DNA, ALT và các yếu tố nguy cơ – xem bài <a href="#/bai/viem-gan-b-man">Viêm gan B mạn</a>.</p>`
},

/* 13 ----------------------------------------------------------------- */
{
  id: "duong-lay-khong-lay", group: "btn", icon: "virus", date: "11/2026",
  title: "Đường lây của viêm gan B và những tiếp xúc KHÔNG lây",
  summary: "3 đường lây chính, đặc điểm của vi rút và danh sách các sinh hoạt thường ngày không làm lây HBV.",
  sources: [SRC.byt, SRC.who, SRC.bank],
  related: ["song-chung-an-toan-gia-dinh", "hieu-lam-ky-thi-hbv", "viem-gan-b-tong-quan"],
  body: `
<div class="callout"><p><strong>Thông điệp chính:</strong> HBV lây qua <strong>máu</strong>, <strong>quan hệ tình dục không an toàn</strong> và <strong>từ mẹ sang con</strong>. HBV <strong>không lây</strong> qua ăn uống, ôm hôn, bắt tay, ho hắt hơi hay muỗi đốt.</p></div>

<h2>Ba đường lây truyền</h2>
<ul>
  <li><strong>Đường máu:</strong> truyền máu hoặc chế phẩm máu không được sàng lọc, dùng chung kim tiêm, dụng cụ xuyên da (xăm, xỏ khuyên, làm móng, nha khoa) chưa được tiệt khuẩn, dùng chung vật dụng dính máu (dao cạo, bàn chải đánh răng, bấm móng tay, kim thử đường huyết).</li>
  <li><strong>Quan hệ tình dục</strong> không an toàn với người nhiễm HBV mà bạn tình chưa có kháng thể bảo vệ.</li>
  <li><strong>Từ mẹ sang con</strong> – là đường lây chủ yếu tại Việt Nam, thường xảy ra <strong>trong lúc chuyển dạ và sinh con</strong>. Việc này có thể phòng ngừa hiệu quả (xem bài <a href="#/bai/me-con-viem-gan-b">Phòng lây truyền từ mẹ sang con</a>).</li>
</ul>

<h2>Đặc điểm của vi rút giúp hiểu vì sao lây</h2>
<ul>
  <li>HBV là <strong>vi rút</strong> (họ <em>Hepadnaviridae</em>, vật liệu di truyền DNA), có 10 kiểu gen A–J; chủ yếu xâm nhập và nhân lên trong <strong>tế bào gan</strong>.</li>
  <li>Nồng độ vi rút trong <strong>máu</strong> rất cao, và vi rút có thể <strong>sống ngoài môi trường ít nhất 7 ngày</strong> trên vết máu khô, vì vậy các vật sắc nhọn hoặc dụng cụ dính máu vẫn có nguy cơ.</li>
  <li>Vi rút bị bất hoạt bằng tiệt khuẩn đúng quy trình (hấp áp suất cao/đun sôi đủ thời gian) và dung dịch khử khuẩn thích hợp như cồn 70° hoặc dung dịch chứa clo.</li>
  <li>Kháng thể <strong>anti-HBs ≥ 10 IU/L</strong> giúp cơ thể ngăn vi rút xâm nhập tế bào gan – đây là “lá chắn” do tiêm vắc xin hoặc đã khỏi bệnh.</li>
</ul>

<h2>Những tiếp xúc KHÔNG làm lây HBV</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Tình huống</th><th>Có lây không?</th></tr></thead>
  <tbody>
    <tr><td>Ăn chung mâm, dùng chung bát đũa, chấm chung nước mắm, dùng chung ly/chai nước</td><td>Không lây</td></tr>
    <tr><td>Ôm, bắt tay, hôn xã giao, ngồi cùng phòng, làm việc cùng văn phòng, ở chung ký túc xá</td><td>Không lây</td></tr>
    <tr><td>Ho, hắt hơi, nói chuyện (HBV không lây qua đường hô hấp)</td><td>Không lây</td></tr>
    <tr><td>Dùng chung nhà vệ sinh, bồn tắm, bơi chung hồ bơi</td><td>Không lây</td></tr>
    <tr><td>Muỗi hoặc côn trùng đốt</td><td>Không lây</td></tr>
    <tr><td>Máu khô dính trên quần áo chạm vào <em>da lành</em></td><td>Không lây (da lành là hàng rào bảo vệ)</td></tr>
    <tr><td>Hiến máu tại cơ sở được cấp phép (kim vô khuẩn, dùng một lần)</td><td>Không làm tăng nguy cơ nhiễm cho người hiến</td></tr>
  </tbody>
</table></div>

<h2>Những tiếp xúc CÓ nguy cơ</h2>
<ul>
  <li>Máu của người nhiễm tiếp xúc trực tiếp với vết thương hở, trầy xước.</li>
  <li>Dùng chung dao cạo râu, bàn chải đánh răng, bấm móng tay, kim chích máu/thử đường huyết.</li>
  <li>Làm móng, xăm, xỏ khuyên, nhổ răng bằng dụng cụ chưa tiệt khuẩn đúng cách.</li>
  <li>Vết cắn gây rách da và chảy máu.</li>
  <li>Quan hệ tình dục không dùng bao cao su khi bạn tình chưa có kháng thể bảo vệ.</li>
</ul>
<p>Xem cách phòng ngừa cụ thể trong bài <a href="#/bai/song-chung-an-toan-gia-dinh">Phòng lây nhiễm trong gia đình và đời sống</a>.</p>`
},

/* 14 ----------------------------------------------------------------- */
{
  id: "song-chung-an-toan-gia-dinh", group: "sk", icon: "shield", date: "11/2026",
  title: "Phòng lây nhiễm viêm gan B trong gia đình và đời sống",
  summary: "Xử trí khi bị kim tiêm đâm, an toàn khi làm móng, cắt tóc, xăm; chăm sóc vết thương, vệ sinh vết máu và những điều gia đình cần làm.",
  sources: [SRC.byt, SRC.bank],
  related: ["duong-lay-khong-lay", "phong-benh-viem-gan-b", "hieu-lam-ky-thi-hbv"],
  body: `
<h2>Khi có người nhiễm HBV trong gia đình</h2>
<ul>
  <li>Mọi thành viên cùng sống nên <strong>xét nghiệm HBsAg, anti-HBs</strong>. Người chưa nhiễm và chưa có kháng thể (anti-HBs &lt; 10 IU/L) cần <strong>tiêm vắc xin</strong> đủ liệu trình.</li>
  <li><strong>Vẫn ăn chung mâm, dùng chung bát đũa</strong> – không cần ăn riêng hay luộc riêng dụng cụ ăn uống.</li>
  <li>Mỗi người dùng <strong>riêng</strong> bàn chải đánh răng, dao cạo râu, bấm móng tay, kim thử đường huyết.</li>
  <li>Vợ/chồng: dùng bao cao su cho đến khi người bạn đời tiêm đủ vắc xin và có <strong>anti-HBs ≥ 10 IU/L</strong>.</li>
  <li>Người nhiễm nên chia sẻ tình trạng với người thân và bạn đời để cùng xét nghiệm, tiêm phòng.</li>
</ul>

<h2>Khi bị kim tiêm hoặc vật sắc nhọn dính máu đâm vào</h2>
<ol>
  <li><strong>Rửa ngay</strong> vết thương dưới vòi nước chảy bằng xà phòng. <strong>Không nặn, bóp</strong> vết thương.</li>
  <li>Nếu máu bắn vào <strong>mắt hoặc niêm mạc</strong>: rửa liên tục bằng nước muối sinh lý NaCl 0,9% hoặc nước sạch.</li>
  <li>Đến <strong>cơ sở y tế trong vòng 24 giờ</strong> để xét nghiệm và được tư vấn dự phòng sau phơi nhiễm (xem bài <a href="#/bai/phong-benh-viem-gan-b">Phòng bệnh viêm gan B</a>).</li>
  <li>Trẻ em bị kim tiêm đâm khi chơi ở nơi công cộng: xử trí như trên và đưa trẻ đến cơ sở y tế <strong>ngay trong 24 giờ</strong>.</li>
</ol>

<h2>Làm đẹp và thủ thuật xâm lấn da</h2>
<ul>
  <li><strong>Làm móng:</strong> chọn tiệm uy tín; dùng dụng cụ đã tiệt khuẩn hoặc mang bộ kềm cá nhân.</li>
  <li><strong>Cạo râu, cắt tóc:</strong> yêu cầu thay lưỡi dao cạo mới ngay trước mặt mình.</li>
  <li><strong>Xăm, xỏ khuyên:</strong> chỉ chọn cơ sở có thiết bị tiệt khuẩn, dùng kim mới bóc từ túi niêm phong.</li>
  <li><strong>Nha khoa, thủ thuật y tế:</strong> chỉ thực hiện tại cơ sở bảo đảm vô khuẩn.</li>
</ul>

<h2>Chăm sóc vết thương và xử lý vết máu</h2>
<ul>
  <li>Đeo <strong>găng tay</strong> khi chạm vào vết thương chảy máu của người khác.</li>
  <li>Vết máu trên sàn: đeo găng, phủ dung dịch khử khuẩn chứa clo hoặc cồn 70° rồi lau, theo hướng dẫn của sản phẩm.</li>
  <li>Quần áo dính máu: giặt sạch bằng xà phòng giặt thông thường.</li>
  <li>Kim, vật sắc nhọn và rác dính máu: <strong>gói kín</strong> trong túi/hộp riêng, ghi rõ “rác dính máu” trước khi bỏ để bảo vệ nhân viên vệ sinh.</li>
</ul>

<div class="callout warn"><p>Một số hướng dẫn chi tiết (thời gian rửa, nồng độ dung dịch khử khuẩn) lấy từ bộ câu hỏi giáo dục sức khỏe của MAI và cần tham khảo thêm nhân viên y tế khi áp dụng trong tình huống cụ thể.</p></div>`
},

/* 15 ----------------------------------------------------------------- */
{
  id: "dinh-duong-loi-song-gan", group: "sk", icon: "liver", date: "11/2026",
  title: "Dinh dưỡng, lối sống và bảo vệ gan khi nhiễm viêm gan B",
  summary: "Kiêng rượu bia, ăn uống cân đối, dùng thuốc giảm đau/hạ sốt và thực phẩm chức năng thận trọng, vận động, giấc ngủ và các việc nên tránh.",
  sources: [SRC.byt, SRC.bank],
  related: ["viem-gan-b-man", "xo-gan-ung-thu-gan", "hieu-lam-ky-thi-hbv"],
  body: `
<p>Hướng dẫn của Bộ Y tế khuyến cáo người nhiễm HBV: duy trì <strong>dinh dưỡng hợp lý và cân nặng phù hợp</strong>, <strong>tránh hoặc hạn chế tối đa rượu bia</strong>, thận trọng với thuốc/thảo dược có thể độc cho gan và thông báo tình trạng nhiễm HBV cho nhân viên y tế khi điều trị bệnh khác.</p>

<h2>Ăn uống</h2>
<ul>
  <li>Ăn <strong>cân đối đủ 4 nhóm chất</strong> (tinh bột, đạm, chất béo tốt, vitamin và khoáng chất); đa dạng thực phẩm tươi sạch.</li>
  <li><strong>Không cần kiêng khem quá mức</strong> khi chưa có chỉ định đặc biệt – kể cả thịt đỏ và trứng. Gan cần đạm vừa đủ để tái tạo tế bào.</li>
  <li><strong>Rượu, bia, đồ uống có cồn:</strong> tránh hoặc hạn chế tối đa vì làm tổn thương gan, đẩy nhanh xơ gan và ung thư gan.</li>
  <li><strong>Thực phẩm mốc</strong> (lạc, đậu, ngô mốc) chứa <strong>aflatoxin</strong> – chất gây ung thư gan mạnh, cộng hưởng với HBV. Bỏ hẳn thực phẩm mốc.</li>
  <li><strong>Ăn chín, uống sôi</strong>; hạn chế đồ sống/tái để tránh ký sinh trùng và vi khuẩn gây hại gan, đường mật.</li>
  <li>Người <strong>xơ gan có phù hoặc cổ trướng</strong>: ăn giảm muối theo hướng dẫn của bác sĩ.</li>
  <li>Thừa cân, béo phì, gan nhiễm mỡ làm bệnh gan tiến triển nhanh hơn – kiểm soát cân nặng, giảm đồ ngọt và nhiều mỡ; kiểm tra đường huyết, mỡ máu định kỳ.</li>
</ul>

<h2>Thuốc, vitamin và thảo dược</h2>
<ul>
  <li><strong>Không dùng nước lá, thảo dược</strong> (như cà gai leo, chó đẻ…) để thay thế thuốc kháng vi rút: chúng không diệt được vi rút và lạm dụng có thể gây hại cho gan.</li>
  <li>Thận trọng với thuốc/thực phẩm chức năng không rõ nguồn gốc, một số thuốc giảm đau/hạ sốt như acetaminophen (paracetamol), thuốc chống lao, thuốc chống co giật.</li>
  <li><strong>Paracetamol:</strong> chỉ dùng đúng liều hướng dẫn, không dùng kéo dài, <strong>không uống cùng rượu bia</strong>; hỏi dược sĩ/bác sĩ về mức liều tối đa phù hợp với bạn.</li>
  <li>Không tự dùng vitamin liều cao (đặc biệt vitamin A tan trong dầu có thể tích lũy, gây độc gan).</li>
  <li>Khi khám hoặc mua thuốc cho bệnh khác, <strong>luôn báo</strong> mình đang nhiễm HBV và đang dùng thuốc viêm gan B.</li>
</ul>

<h2>Lối sống</h2>
<ul>
  <li><strong>Không hút thuốc lá</strong>, kể cả thuốc lá điện tử – làm tăng độc tính trên gan và nguy cơ ung thư gan.</li>
  <li><strong>Vận động</strong> vừa sức (đi bộ, đạp xe, yoga), khoảng 30 phút mỗi ngày.</li>
  <li><strong>Ngủ đủ</strong> 7–8 giờ, tránh thức khuya kéo dài.</li>
  <li>Hạn chế căng thẳng kéo dài; tìm hỗ trợ tâm lý khi cần.</li>
  <li>Uống đủ nước (khoảng 1,5–2 lít/ngày nếu không có bệnh cần hạn chế nước, như cổ trướng).</li>
</ul>

<div class="callout"><p>Người nhiễm HBV hoàn toàn có thể học tập, làm việc, tập thể thao và sinh hoạt bình thường nếu được theo dõi và điều trị đúng chỉ định. Thuốc kháng vi rút thế hệ mới (nhóm NAs) thường dung nạp tốt, ít ảnh hưởng đến lái xe hay công việc – hãy báo bác sĩ nếu có tác dụng phụ bất thường.</p></div>`
},

/* 16 ----------------------------------------------------------------- */
{
  id: "hieu-lam-ky-thi-hbv", group: "sk", icon: "doc", date: "11/2026",
  title: "Hiểu lầm thường gặp về viêm gan B và vì sao cần chấm dứt kỳ thị",
  summary: "Kiểm chứng nhanh các thông tin sai lệch hay lan truyền: lây qua ăn uống, muỗi, án tử, tự bỏ thuốc, nước lá, cho con bú, kết hôn, đi làm…",
  sources: [SRC.byt, SRC.who, SRC.bank],
  related: ["duong-lay-khong-lay", "dinh-duong-loi-song-gan", "viem-gan-b-man"],
  body: `
<p>Mỗi mục dưới đây theo cấu trúc của MAI Verify: <strong>thông tin đang lan truyền → kết luận → giải thích → khuyến nghị</strong>.</p>

<div class="table-wrap"><table>
  <thead><tr><th>Thông tin đang lan truyền</th><th>Kết luận</th><th>Giải thích và khuyến nghị</th></tr></thead>
  <tbody>
    <tr><td>“Ăn chung mâm, dùng chung chén đũa sẽ lây viêm gan B.”</td><td><strong>Sai</strong></td><td>HBV không lây qua ăn uống, nước bọt hay tiếp xúc xã giao. Không cần ăn riêng; chỉ tránh dùng chung đồ dính máu (dao cạo, bàn chải đánh răng).</td></tr>
    <tr><td>“Muỗi đốt có thể truyền viêm gan B.”</td><td><strong>Sai</strong></td><td>Vi rút không nhân lên hay tồn tại dạng lây nhiễm trong muỗi. Vẫn cần phòng muỗi vì các bệnh khác như sốt xuất huyết.</td></tr>
    <tr><td>“Ôm, bắt tay, ho, hắt hơi, dùng chung nhà vệ sinh hay hồ bơi cũng lây.”</td><td><strong>Sai</strong></td><td>Chỉ lây qua máu, tình dục và mẹ sang con. Có thể giao tiếp, học tập, làm việc bình thường.</td></tr>
    <tr><td>“Viêm gan B là án tử.”</td><td><strong>Sai</strong></td><td>Đa số người nhiễm nếu được theo dõi và điều trị đúng chỉ định đều sống khỏe, tuổi thọ bình thường. Hãy tái khám định kỳ.</td></tr>
    <tr><td>“Hiện nay viêm gan B mạn đã có thuốc chữa khỏi hoàn toàn.”</td><td><strong>Chưa đúng</strong></td><td>Chưa có thuốc tiêu diệt hoàn toàn vi rút nhưng thuốc kháng vi rút kiểm soát bệnh hiệu quả, bảo vệ gan lâu dài.</td></tr>
    <tr><td>“Men gan bình thường nghĩa là không nhiễm viêm gan B.”</td><td><strong>Sai</strong></td><td>Nhiều người nhiễm mạn có men gan bình thường. Chỉ xét nghiệm HBsAg mới biết có nhiễm hay không.</td></tr>
    <tr><td>“Thấy khỏe, men gan bình thường thì tự ngừng thuốc được.”</td><td><strong>Sai – nguy hiểm</strong></td><td>Thuốc đang giữ vi rút “nằm yên”. Tự ngừng thuốc có thể gây viêm gan bùng phát, suy gan. Chỉ bác sĩ quyết định ngừng thuốc khi đạt tiêu chuẩn.</td></tr>
    <tr><td>“Uống nước lá (cà gai leo, chó đẻ…) thay được thuốc kháng vi rút.”</td><td><strong>Sai</strong></td><td>Nước lá không diệt được vi rút và có thể gây độc cho gan. Dùng thuốc theo đơn bác sĩ; hỏi bác sĩ trước khi dùng thực phẩm chức năng.</td></tr>
    <tr><td>“Tiêm vắc xin viêm gan B sẽ chữa được cho người đã nhiễm.”</td><td><strong>Sai</strong></td><td>Vắc xin chỉ để phòng bệnh cho người chưa nhiễm. Người HBsAg dương tính cần khám và điều trị theo chỉ định.</td></tr>
    <tr><td>“Vắc xin viêm gan B cũng phòng được viêm gan A, C.”</td><td><strong>Sai</strong></td><td>Mỗi loại vắc xin chỉ phòng đúng loại vi rút của nó.</td></tr>
    <tr><td>“Vắc xin viêm gan B ảnh hưởng đến khả năng sinh sản.”</td><td><strong>Sai</strong></td><td>Không có bằng chứng ảnh hưởng sinh sản; phụ nữ dự định mang thai nên kiểm tra và tiêm trước khi có thai nếu chưa có miễn dịch.</td></tr>
    <tr><td>“Mẹ nhiễm viêm gan B không được cho con bú.”</td><td><strong>Sai</strong> (khi trẻ đã được dự phòng)</td><td>Trẻ đã tiêm vắc xin và HBIG theo khuyến cáo vẫn bú mẹ bình thường. Nếu đầu vú nứt chảy máu, tạm ngừng bú bên đó và vắt bỏ sữa đến khi lành.</td></tr>
    <tr><td>“Mẹ nhiễm viêm gan B bắt buộc phải mổ lấy thai.”</td><td><strong>Không bắt buộc</strong></td><td>Cách sinh phụ thuộc chỉ định sản khoa; điều cốt lõi là tiêm vắc xin và HBIG cho trẻ trong 24 giờ đầu.</td></tr>
    <tr><td>“Người nhiễm viêm gan B phải kiêng thịt đỏ, trứng, ăn kiêng khắt khe.”</td><td><strong>Sai</strong></td><td>Ăn cân đối đủ 4 nhóm chất; kiêng khem cực đoan gây suy dinh dưỡng. Kiêng rượu bia mới là điều quan trọng.</td></tr>
    <tr><td>“Người nhiễm không được kết hôn, đi học, đi làm hay chơi thể thao.”</td><td><strong>Sai</strong></td><td>Người nhiễm có quyền kết hôn, sinh con an toàn khi được tư vấn; trẻ được đi học hòa nhập; từ chối tuyển dụng hay sa thải chỉ vì nhiễm HBV là kỳ thị, không phù hợp quy định (một số nghề đặc thù có tiêu chuẩn sức khỏe riêng do pháp luật quy định).</td></tr>
    <tr><td>“Viêm gan B liên quan đến tệ nạn hay đạo đức của người bệnh.”</td><td><strong>Sai</strong></td><td>Đây là bệnh truyền nhiễm do vi rút, không liên quan đến nhân cách hay đạo đức.</td></tr>
  </tbody>
</table></div>

<h2>Vì sao kỳ thị gây hại?</h2>
<ul>
  <li>Khiến người nhiễm <strong>giấu bệnh</strong>, ngại đi khám, không báo người thân đi xét nghiệm và tiêm phòng – làm bệnh lây âm thầm nhiều hơn.</li>
  <li>Gây tổn thương tinh thần nhưng <strong>không có tác dụng phòng bệnh</strong>.</li>
  <li>Cộng đồng văn minh, không kỳ thị giúp mọi người tự giác xét nghiệm, tiêm phòng và tuân thủ điều trị tốt hơn.</li>
</ul>
<div class="callout"><p><strong>Thái độ nên có:</strong> tôn trọng, thấu hiểu, đồng hành; khuyến khích người thân xét nghiệm và tiêm phòng; chia sẻ thông tin từ nguồn chính thống (Bộ Y tế, Sở Y tế TP.HCM, HCDC, bệnh viện uy tín).</p></div>`
},

/* 17 ----------------------------------------------------------------- */
{
  id: "tiep-can-y-te-bhyt", group: "sk", icon: "chart", date: "11/2026",
  title: "Khám, xét nghiệm và điều trị viêm gan B: tuyến cơ sở và bảo hiểm y tế",
  summary: "Đi đâu để xét nghiệm, tiêm phòng, nhận thuốc; khi nào cần chuyển tuyến; cách tận dụng bảo hiểm y tế và các kênh thông tin chính thống tại TP. Hồ Chí Minh.",
  sources: [SRC.byt, SRC.nhep, SRC.bank],
  related: ["viem-gan-b-man", "xet-nghiem-viem-gan-b", "viet-nam-loai-tru-viem-gan"],
  body: `
<h2>Phân cấp chăm sóc theo hướng dẫn của Bộ Y tế</h2>
<ul>
  <li>Chẩn đoán và điều trị viêm gan B được <strong>phân cấp đến cơ sở khám chữa bệnh cấp ban đầu và cấp cơ bản</strong> (trạm y tế, trung tâm y tế…) theo phạm vi chuyên môn và được bảo hiểm y tế chi trả.</li>
  <li>Cấp ban đầu và cơ bản quản lý, cấp thuốc cho người bệnh <strong>giai đoạn ổn định</strong> (chưa xơ gan hoặc xơ gan còn bù). Khi bệnh ổn định, người bệnh <strong>không nhất thiết</strong> phải lên bệnh viện tuyến trên mỗi lần tái khám.</li>
  <li><strong>Chuyển cấp chuyên sâu</strong> khi có xơ gan mất bù (Child-Pugh B, C), nghi ngờ thất bại điều trị (kháng thuốc) hoặc bệnh nặng, phức tạp; có chuyển tuyến hai chiều.</li>
  <li>Hướng dẫn cũng khuyến khích: lồng ghép xét nghiệm HBV vào khám chữa bệnh thường quy; dùng xét nghiệm nhanh HBsAg khi phù hợp; xét nghiệm HBV DNA sớm sau khi phát hiện HBsAg dương tính; nhắc lịch tái khám; lồng ghép với các chương trình HIV, sức khỏe sinh sản, giảm hại.</li>
</ul>

<h2>Người dân tại TP. Hồ Chí Minh có thể làm gì?</h2>
<ul>
  <li><strong>Xét nghiệm sàng lọc HBsAg:</strong> tại trạm y tế phường/xã, trung tâm y tế quận/huyện và các bệnh viện. Có thể đăng ký thêm HBsAg khi khám sức khỏe định kỳ ở cơ quan nếu chưa từng xét nghiệm. Không cần nhịn ăn trước khi làm xét nghiệm HBsAg, anti-HBs.</li>
  <li><strong>Tiêm vắc xin:</strong> trẻ sơ sinh được tiêm miễn phí trong Chương trình Tiêm chủng mở rộng (mũi sơ sinh trong 24 giờ đầu, vắc xin 5 trong 1 hoặc 6 trong 1 lúc 2, 3, 4 tháng). Người lớn tiêm tại trạm y tế hoặc trung tâm tiêm chủng (hiện theo hình thức tự chi trả).</li>
  <li><strong>Bảo hiểm y tế:</strong> điều trị viêm gan B được BHYT chi trả ở mức thông thường (80–100%). Hãy mang <strong>thẻ BHYT, CCCD, sổ khám bệnh</strong> và các kết quả xét nghiệm, đơn thuốc cũ khi đi khám đúng tuyến. Người chưa có thẻ nên tham gia BHYT hộ gia đình; người có hoàn cảnh khó khăn liên hệ UBND/trạm y tế phường để được hướng dẫn hỗ trợ.</li>
  <li><strong>Cơ sở chuyên khoa:</strong> khi có chỉ định hoặc cần khám chuyên sâu, có thể đến các bệnh viện như Bệnh viện Bệnh Nhiệt đới TP.HCM, Bệnh viện Đại học Y Dược, Bệnh viện Chợ Rẫy; với thai phụ có Bệnh viện Từ Dũ, Bệnh viện Hùng Vương và các bệnh viện chuyên khoa/đa khoa khác có khám Tiêu hóa – Gan mật hoặc Truyền nhiễm.</li>
  <li><strong>Hồ sơ sức khỏe điện tử</strong> tại trạm y tế giúp lưu lịch sử xét nghiệm, quá trình dùng thuốc và nhắc lịch tái khám.</li>
  <li><strong>Hỏi thông tin:</strong> nhân viên y tế tại trạm y tế, Trung tâm Kiểm soát bệnh tật TP.HCM (HCDC), đường dây nóng/kênh tư vấn của trạm y tế; tìm thông tin từ trang chính thức của Bộ Y tế, Sở Y tế TP.HCM, HCDC và bệnh viện uy tín.</li>
</ul>

<div class="callout warn"><p>Mức chi trả BHYT, danh sách cơ sở và số điện thoại có thể thay đổi. Hãy xác nhận với trạm y tế hoặc cơ sở khám chữa bệnh trước khi đi.</p></div>`
},

/* 18 ----------------------------------------------------------------- */
{
  id: "du-phong-tai-hoat-hbv", group: "btn", icon: "shield", date: "06/2026",
  title: "Dự phòng viêm gan B tái hoạt khi dùng thuốc ức chế miễn dịch, hóa trị",
  summary: "Ba mức nguy cơ tái hoạt HBV, thời điểm bắt đầu và thời gian duy trì thuốc dự phòng theo Phụ lục 3 – QĐ 1740/QĐ-BYT.",
  sources: [SRC.byt],
  related: ["viem-gan-b-dac-biet", "viem-gan-b-man", "xet-nghiem-viem-gan-b"],
  body: `
<p>Khi cơ thể bị suy yếu miễn dịch do dùng một số thuốc (hóa trị ung thư, thuốc ức chế miễn dịch, corticoid kéo dài, ghép tạng…), HBV đang “ngủ” trong gan có thể <strong>hoạt động trở lại (tái hoạt)</strong>, gây viêm gan nặng, thậm chí đe dọa tính mạng. Điều này có thể xảy ra ở cả người HBsAg dương tính và người HBsAg âm tính nhưng anti-HBc dương tính (đã từng nhiễm).</p>

<h2>Việc cần làm trước khi dùng thuốc</h2>
<ul>
  <li>Xét nghiệm <strong>HBsAg, anti-HBc và HBV DNA</strong> cho mọi người sắp hóa trị, dùng thuốc ức chế miễn dịch hoặc ghép tạng.</li>
  <li><strong>Báo cho bác sĩ</strong> điều trị bệnh chính biết mình từng nhiễm hoặc đang nhiễm HBV.</li>
</ul>

<h2>Ba mức nguy cơ tái hoạt</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Mức nguy cơ</th><th>Tỷ lệ tái hoạt</th><th>Xử trí theo hướng dẫn</th></tr></thead>
  <tbody>
    <tr><td><strong>Cao</strong></td><td>&gt; 10%</td><td>Dùng thuốc kháng vi rút dự phòng <strong>trước 2 tuần hoặc muộn nhất là cùng lúc</strong> với thuốc nguy cơ; duy trì <strong>ít nhất 6 tháng</strong> sau khi ngừng thuốc ức chế miễn dịch/hóa trị (<strong>ít nhất 12 tháng</strong> với các chất làm suy yếu tế bào B).</td></tr>
    <tr><td><strong>Trung bình</strong></td><td>1–10%</td><td>Dùng thuốc kháng vi rút dự phòng trước 2 tuần hoặc muộn nhất cùng lúc; duy trì ít nhất 6 tháng sau khi ngừng.</td></tr>
    <tr><td><strong>Thấp</strong></td><td>&lt; 1%</td><td>Không cần dự phòng bằng thuốc kháng vi rút nhưng <strong>phải theo dõi</strong> trong suốt thời gian dùng thuốc.</td></tr>
  </tbody>
</table></div>
<p>Mức nguy cơ phụ thuộc vào <strong>loại thuốc/liệu pháp</strong> (ví dụ liều và thời gian dùng corticoid, các chất làm suy yếu tế bào B, liệu pháp chống TNF, hóa trị anthracycline…) và vào tình trạng huyết thanh của người bệnh (HBsAg dương hay chỉ anti-HBc dương). Việc xếp nhóm do bác sĩ chuyên khoa thực hiện.</p>

<h2>Thuốc dự phòng</h2>
<p>Dùng TDF, TAF hoặc entecavir (ETV). Trường hợp ghép tạng: dự phòng theo chỉ định của chương trình ghép. Những người đồng nhiễm HBV/HCV điều trị thuốc DAA cũng cần theo dõi men gan – xem bài <a href="#/bai/viem-gan-b-dac-biet">Viêm gan B ở các nhóm đặc biệt</a>.</p>
<div class="callout warn"><p>Không tự ý dùng hoặc ngừng thuốc dự phòng. Thời điểm bắt đầu và kết thúc do bác sĩ chuyên khoa (Truyền nhiễm/Gan mật, Ung bướu, Khớp…) quyết định.</p></div>`
},

/* 19 ----------------------------------------------------------------- */
{
  id: "that-bai-dieu-tri-theo-doi", group: "btn", icon: "chart", date: "06/2026",
  title: "Thất bại điều trị, kháng thuốc và theo dõi sau ngừng thuốc kháng vi rút",
  summary: "Cách nhận biết thất bại điều trị, nguyên tắc đổi/phối hợp thuốc, lịch theo dõi sau khi ngừng thuốc và vì sao ai cũng cần tầm soát ung thư gan.",
  sources: [SRC.byt],
  related: ["viem-gan-b-man", "xo-gan-ung-thu-gan", "du-phong-tai-hoat-hbv"],
  body: `
<h2>Phòng thất bại điều trị: tuân thủ là quan trọng nhất</h2>
<ul>
  <li>Uống thuốc <strong>đều đặn mỗi ngày, đúng giờ, đúng liều</strong>. Uống chập chờn, bỏ thuốc hoặc tự đổi thuốc tạo điều kiện cho vi rút đột biến kháng thuốc.</li>
  <li>Nếu quên một liều: uống ngay khi nhớ trong ngày; gần giờ liều kế tiếp thì uống liều kế tiếp, <strong>không uống gấp đôi</strong>. Quên thuốc nhiều ngày liên tiếp cần đến cơ sở y tế.</li>
  <li>Bác sĩ đánh giá tuân thủ ở <strong>mọi lần tái khám</strong> và hỗ trợ thêm cho người tuân thủ chưa tốt.</li>
</ul>

<h2>Thế nào là thất bại điều trị?</h2>
<ul>
  <li><strong>Thất bại ban đầu:</strong> tải lượng HBV DNA giảm dưới 1 log10 IU/mL trong vòng 3 tháng kể từ khi bắt đầu thuốc.</li>
  <li><strong>Thất bại thứ cấp:</strong> HBV DNA tăng hơn 1 log10 IU/mL so với mức thấp nhất đã đạt được, sau khi từng đáp ứng.</li>
  <li>Nơi không đo được HBV DNA: nghi ngờ khi dùng thuốc có hàng rào kháng thấp, tuân thủ kém kèm tăng ALT và/hoặc có bằng chứng bệnh gan tiến triển.</li>
</ul>
<div class="callout"><p><strong>Trước khi kết luận thất bại</strong> phải đánh giá và tăng cường hỗ trợ tuân thủ, cân nhắc đo lại tải lượng; việc đánh giá để đổi hay phối hợp thuốc không nên kéo dài quá 4 tuần. Nếu có điều kiện nên giải trình tự gen tìm đột biến kháng thuốc.</p></div>

<h2>Xử trí</h2>
<ul>
  <li>Chỉ đổi thuốc sau khi đã hỗ trợ tuân thủ và xác định thật sự thất bại.</li>
  <li>Nguyên tắc: chuyển sang thuốc <strong>hiệu lực mạnh, hàng rào kháng cao, không kháng chéo</strong> với phác đồ trước (ưu tiên tenofovir TDF/TAF hoặc entecavir). Phối hợp nhiều thuốc nucleos(t)ide <strong>không khuyến cáo thường quy</strong>, chỉ xét trong kháng thuốc phức tạp.</li>
</ul>
<div class="table-wrap"><table>
  <thead><tr><th>Thất bại với thuốc đang dùng</th><th>Đổi thuốc</th><th>Phối hợp thuốc</th></tr></thead>
  <tbody>
    <tr><td>Entecavir</td><td>Tenofovir (TDF hoặc TAF)</td><td>Entecavir + tenofovir (TDF hoặc TAF), hoặc TDF + FTC</td></tr>
    <tr><td>TDF</td><td>Entecavir hoặc TAF</td><td>Tenofovir (TDF hoặc TAF) + entecavir</td></tr>
    <tr><td>Đa kháng</td><td>Tenofovir (TDF hoặc TAF)</td><td>Tenofovir (TDF hoặc TAF) + entecavir</td></tr>
  </tbody>
</table></div>
<p>Người có bệnh thận cần điều chỉnh liều hoặc đổi thuốc theo mức lọc cầu thận (ví dụ tránh TDF khi mức lọc cầu thận &lt; 50 mL/phút; TAF không cần giảm liều). Việc này do bác sĩ quyết định. Nghi ngờ thất bại điều trị cần chuyển cơ sở chuyên sâu.</p>

<h2>Theo dõi sau khi ngừng thuốc kháng vi rút</h2>
<ul>
  <li><strong>Năm đầu:</strong> công thức máu, AST/ALT, bilirubin 4–12 tuần/lần; siêu âm bụng và HBV DNA 12–24 tuần/lần.</li>
  <li><strong>Các năm sau:</strong> AST, ALT 12–24 tuần/lần; HBV DNA 24–48 tuần/lần.</li>
  <li><strong>Sau ngừng Peg-IFN:</strong> theo dõi HBeAg (nếu trước đó dương), HBsAg và HBV DNA 12 tuần/lần trong ít nhất 1 năm, sau đó 12–24 tuần/lần trong 5 năm tiếp theo.</li>
  <li>Tái hoạt khi HBV DNA ≥ 2.000 IU/mL; cân nhắc điều trị lại khi &gt; 10.000 IU/mL không phụ thuộc ALT.</li>
</ul>
<div class="callout warn"><p><strong>Mọi người nhiễm HBV</strong> – dù chưa điều trị, đang điều trị hay đã ngừng thuốc – đều cần <strong>tầm soát ung thư gan 12–24 tuần/lần</strong> bằng siêu âm bụng và chỉ dấu ung thư gan (AFP và/hoặc AFP-L3 và/hoặc PIVKA II). Nghi ngờ u gan thì chụp cắt lớp hoặc cộng hưởng từ có thuốc cản quang.</p></div>`
}
];

/* ---------- Tin tức (trang chủ + trang Tin tức) ---------- */
SITE.news = [
  { id: "n1", date: "06/2026", icon: "doc",   title: "Bộ Y tế ban hành Hướng dẫn chẩn đoán, điều trị viêm gan vi rút B mới",
    summary: "QĐ 1740/QĐ-BYT ngày 16/6/2026 thay thế QĐ 3310/QĐ-BYT năm 2019, áp dụng tại các cơ sở khám chữa bệnh trong cả nước.", article: "viem-gan-b-man" },
  { id: "n2", date: "06/2026", icon: "virus", title: "WHO cập nhật bản tin về viêm gan B: 1,1 triệu ca tử vong năm 2024",
    summary: "Chỉ khoảng 10 triệu người được điều trị thuốc kháng vi rút – tương đương 4,3% số người nhiễm mạn.", article: "viem-gan-b-tong-quan" },
  { id: "n3", date: "06/2025", icon: "chart", title: "Hồ sơ loại trừ viêm gan quốc gia của Việt Nam (cập nhật 6/2025)",
    summary: "Tỷ lệ HBsAg+ ở người lớn 9,4%; 41,67% người nhiễm HBV được chẩn đoán; mục tiêu loại trừ vào năm 2030.", article: "viet-nam-loai-tru-viem-gan" },
  { id: "n4", date: "02/2025", icon: "baby",  title: "QĐ 678/QĐ-BYT: dự phòng lây truyền HIV, viêm gan B, giang mai từ mẹ sang con",
    summary: "Hướng dẫn kỹ thuật thống nhất cho ba bệnh lây truyền từ mẹ sang con, ban hành ngày 26/02/2025.", article: "me-con-viem-gan-b" }
];

/* ---------- Chủ đề trong khung chat (MAI AI) ---------- */
SITE.chatTopics = [
  { id: "vgb",   name: "Viêm gan B", welcome: "Xin chào! Mình là MAI 🌿. Mình có thể giúp bạn tìm hiểu các thông tin sức khỏe đáng tin cậy, dễ hiểu về viêm gan B. Hôm nay bạn muốn tìm hiểu điều gì?",
    suggestions: ["Nguyên nhân và đường lây của viêm gan B?", "Triệu chứng nào cần đi khám?", "Ai nên xét nghiệm HBsAg?", "Cách phòng ngừa viêm gan B?"] },
  { id: "mecon", name: "Mẹ – con", welcome: "Chào bạn! Mình có thể giải đáp về phòng lây truyền viêm gan B (và HIV, giang mai) từ mẹ sang con khi mang thai và sau sinh.",
    suggestions: ["Thai phụ nhiễm viêm gan B cần làm gì?", "Trẻ cần tiêm gì sau sinh?", "Mẹ nhiễm HBV có cho con bú được không?"] },
  { id: "pb",    name: "Phòng ngừa – vắc xin", welcome: "Chào bạn! Hãy hỏi mình về lịch tiêm vắc xin, xử trí khi bị kim đâm hoặc dính máu và các biện pháp phòng bệnh.",
    suggestions: ["Lịch tiêm vắc xin viêm gan B?", "Bị kim tiêm đâm thì xử trí thế nào?", "Người nhà nên làm gì khi có người nhiễm?"] },
  { id: "dt",    name: "Điều trị – theo dõi", welcome: "Xin chào! Mình có thể giải thích thông tin về điều trị, tái khám và theo dõi viêm gan B (thông tin tham khảo, không thay thế bác sĩ).",
    suggestions: ["Khi nào cần dùng thuốc kháng vi rút?", "Có được tự ngừng thuốc khi thấy khỏe không?", "Tái khám bao lâu một lần?"] },
  { id: "hl",    name: "Hiểu lầm thường gặp", welcome: "Chào bạn! Bạn đang nghe thông tin nào về viêm gan B mà chưa chắc đúng? Mình sẽ giúp kiểm chứng dựa trên tài liệu chính thống.",
    suggestions: ["Ăn chung mâm có lây viêm gan B không?", "Uống nước lá cà gai leo có thay được thuốc không?", "Người nhiễm có đi làm, kết hôn được không?"] }
];
