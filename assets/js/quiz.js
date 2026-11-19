/* Ngân hàng 200 câu hỏi trắc nghiệm giáo dục sức khỏe viêm gan vi rút B (VGB-001 … VGB-200).
   Sinh tự động bởi tools/build_quiz.py từ tài liệu 'Ngân hàng 200 câu hỏi về HBV cho người trưởng thành'. */
window.QUIZ = {
"topics": [
{
"id": 1,
"name": "Kiến thức chung & Dịch tễ học viêm gan B"
},
{
"id": 2,
"name": "Nguyên nhân & Đặc điểm của virus HBV"
},
{
"id": 3,
"name": "Đường lây truyền & Các trường hợp KHÔNG lây truyền"
},
{
"id": 4,
"name": "Triệu chứng, diễn tiến & Biến chứng nguy hiểm"
},
{
"id": 5,
"name": "Xét nghiệm, sàng lọc & Ý nghĩa các chỉ số"
},
{
"id": 6,
"name": "Tiêm chủng & Vắc-xin phòng bệnh viêm gan B"
},
{
"id": 7,
"name": "Dự phòng lây nhiễm trong gia đình & Đời sống sinh hoạt"
},
{
"id": 8,
"name": "Dự phòng lây truyền viêm gan B từ mẹ sang con (PLTMC)"
},
{
"id": 9,
"name": "Điều trị & Tuân thủ thuốc kháng virus (NAs)"
},
{
"id": 10,
"name": "Dinh dưỡng, lối sống & Bảo vệ sức khỏe gan"
},
{
"id": 11,
"name": "Bãi bỏ kỳ thị, định kiến & Xóa tan quan niệm sai lầm"
},
{
"id": 12,
"name": "Tiếp cận dịch vụ y tế BHYT & Chăm sóc ban đầu tại TP.HCM"
}
],
"questions": [
{
"id": "VGB-001",
"n": 1,
"topic": 1,
"q": "Viêm gan B là bệnh gì?",
"options": [
"Bệnh nhiễm trùng đường tiêu hóa do vi khuẩn gây nên",
"Bệnh truyền nhiễm do virus viêm gan B (HBV) gây ra tại gan",
"Bệnh di truyền từ ông bà tổ tiên",
"Bệnh ngoài da do dị ứng thời tiết"
],
"answer": 1,
"explain": "Viêm gan B do virus HBV xâm nhập và tấn công tế bào gan.",
"todo": "Chủ động làm xét nghiệm HBsAg để biết tình trạng nhiễm virus.",
"when": "Đến ngay cơ sở y tế uy tín để kiểm tra sức khỏe định kỳ.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-002",
"n": 2,
"topic": 1,
"q": "Tỷ lệ nhiễm virus viêm gan B ở người trưởng thành tại Việt Nam được ước tính khoảng bao nhiêu?",
"options": [
"Khoảng 1%",
"Khoảng 9,4%",
"Khoảng 50%",
"Trên 80%"
],
"answer": 1,
"explain": "Việt Nam là vùng lưu hành dịch tễ cao, cứ khoảng 10 người lớn có gần 1 người nhiễm virus.",
"todo": "Không chủ quan, kiểm tra sức khỏe định kỳ để được xét nghiệm sàng lọc.",
"when": "Khám tại Trạm y tế hoặc bệnh viện gần nhất.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-003",
"n": 3,
"topic": 1,
"q": "Viêm gan B có thể gây ra những biến chứng nào nếu không được theo dõi và quản lý phù hợp?",
"options": [
"Xơ gan tiến triển và Ung thư biểu mô tế bào gan",
"Viêm ruột thừa cấp",
"Suy thận mạn tính giai đoạn cuối",
"Đau khớp gối"
],
"answer": 0,
"explain": "Nhiễm virus kéo dài không theo dõi có thể biến đổi mô gan thành xơ và khối ung thư.",
"todo": "Tuân thủ lịch tái khám định kỳ theo hẹn của bác sĩ.",
"when": "Đến bệnh viện ngay khi có dấu hiệu mệt mỏi, sụt cân, vàng da.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-004",
"n": 4,
"topic": 1,
"q": "Vì sao viêm gan B mạn tính thường được ví là bệnh diễn tiến âm thầm?",
"options": [
"Vì virus chỉ gây bệnh vào ban đêm",
"Đa số người nhiễm mạn tính KHÔNG CÓ triệu chứng rõ rệt ở giai đoạn đầu",
"Vì bệnh lây qua không khí rất nhanh",
"Vì virus tự biến mất sau 1 tuần"
],
"answer": 1,
"explain": "Virus âm thầm nảy nở trong tế bào gan mà không gây đau đớn cho đến khi gan bị tổn thương nặng.",
"todo": "Không chờ có triệu chứng mới đi khám, hãy chủ động khám sức khỏe định kỳ mỗi 6-12 tháng.",
"when": "Đến cơ sở y tế làm xét nghiệm HBsAg tầm soát.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-005",
"n": 5,
"topic": 1,
"q": "Người không có triệu chứng có nên xét nghiệm sàng lọc viêm gan B không?",
"options": [
"Không cần vì khỏe là không bị bệnh",
"CÓ và NÊN đi, mọi người dân đều nên xét nghiệm HBsAg ít nhất một lần",
"Chỉ người già mới cần xét nghiệm",
"Chỉ khi sốt cao mới xét nghiệm"
],
"answer": 1,
"explain": "Xét nghiệm máu giúp phát hiện sớm virus để điều trị hoặc tiêm phòng kịp thời.",
"todo": "Thực hiện xét nghiệm HBsAg và Anti-HBs.",
"when": "Đăng ký khám tại y tế cơ sở phường/xã.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-006",
"n": 6,
"topic": 1,
"q": "Viêm gan B mạn tính hiện nay có thể được chữa khỏi hoàn toàn không?",
"options": [
"Khỏi hẳn sau 3 ngày uống thuốc",
"Hiện chưa có thuốc tiêu diệt hoàn toàn virus, nhưng đã có thuốc kháng virus giúp kiểm soát bệnh hiệu quả",
"Chắc chắn tử vong sau 1 tháng",
"Tự khỏi không cần làm gì"
],
"answer": 1,
"explain": "Thuốc hiện tại giúp đè nén virus dưới ngưỡng phát hiện, bảo vệ gan lâu dài.",
"todo": "Tuân thủ việc theo dõi và uống thuốc đúng chỉ định.",
"when": "Tái khám định kỳ theo hẹn của bác sĩ.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-007",
"n": 7,
"topic": 1,
"q": "Mục tiêu chính của việc theo dõi và điều trị viêm gan B mạn tính là gì?",
"options": [
"Tiêu diệt tất cả tế bào gan",
"Ức chế lâu dài sự nhân lên của virus, ngăn ngừa xơ gan và ung thư gan",
"Làm cho người bệnh tăng cân nhanh",
"Chữa khỏi dị ứng ngoài da"
],
"answer": 1,
"explain": "Điều trị nhằm giữ cho virus nằm yên không phá hoại gan.",
"todo": "Giữ thói quen sống lành mạnh và tuân thủ y tế.",
"when": "Đến cơ sở y tế tái khám đúng lịch.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-008",
"n": 8,
"topic": 1,
"q": "Những nhóm đối tượng nào nên được ưu tiên xét nghiệm sàng lọc viêm gan B?",
"options": [
"Phụ nữ mang thai, người sinh trước năm 2003, người sống cùng người nhiễm HBV",
"Chỉ trẻ em dưới 1 tuổi",
"Chỉ những người ăn chay",
"Những người không bao giờ ra khỏi nhà"
],
"answer": 0,
"explain": "Đây là những nhóm có nguy cơ tiếp xúc cao hoặc cần bảo vệ dự phòng.",
"todo": "Đưa người thân thuộc nhóm ưu tiên đi xét nghiệm sàng lọc.",
"when": "Đến trạm y tế phường/xã để được tư vấn.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-009",
"n": 9,
"topic": 1,
"q": "Viêm gan B cấp tính thường diễn tiến trong khoảng thời gian nào?",
"options": [
"Trong vòng 6 tháng kể từ khi nhiễm virus",
"Trên 20 năm",
"Trọn đời",
"Chỉ trong 1 giờ"
],
"answer": 0,
"explain": "Viêm gan B cấp tính là giai đoạn nhiễm virus trong 6 tháng đầu sau khi nhiễm. Phần lớn người trưởng thành có hệ miễn dịch bình thường có thể tự loại bỏ virus và hồi phục, nhưng một số trường hợp có thể chuyển sang viêm gan B mạn tính nếu virus tồn tại trong cơ thể trên 6 tháng.",
"todo": "Khi được chẩn đoán nhiễm viêm gan B cấp tính, cần đến cơ sở y tế để được đánh giá, xét nghiệm và theo dõi theo hướng dẫn của bác sĩ. Không tự ý sử dụng thuốc hoặc các sản phẩm được quảng cáo là giải độc gan.",
"when": "Cần đến cơ sở y tế ngay nếu xuất hiện vàng da tăng dần, nôn ói nhiều, đau bụng nhiều, lơ mơ hoặc rối loạn ý thức.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-010",
"n": 10,
"topic": 1,
"q": "Nhiễm HBV được xác định là viêm gan B mạn tính khi HBsAg tồn tại trong bao lâu?",
"options": [
"Kéo dài trên 6 tháng",
"Chỉ trong 2 ngày",
"Đúng 1 tuần",
"Đúng 1 tháng"
],
"answer": 0,
"explain": "Nếu sau 6 tháng cơ thể không tự đào thải được HBsAg thì chuyển sang giai đoạn mạn tính.",
"todo": "Khi được chẩn đoán nhiễm viêm gan B mạn tính, cần đến cơ sở y tế để được đánh giá, xét nghiệm và theo dõi theo hướng dẫn của bác sĩ. Không tự ý sử dụng thuốc hoặc các sản phẩm được quảng cáo là giải độc gan.",
"when": "Thăm khám bác sĩ chuyên khoa mỗi 3-6 tháng.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-011",
"n": 11,
"topic": 1,
"q": "Những con đường lây truyền nào đóng vai trò quan trọng trong lây nhiễm HBV tại Việt Nam?",
"options": [
"Lây qua đường ăn uống",
"Lây từ mẹ sang con trong quá trình sinh nở",
"Lây qua tiếp xúc da thông thường",
"Lây qua nguồn nước uống"
],
"answer": 1,
"explain": "Lây truyền từ mẹ sang con lúc chuyển dạ là con đường phổ biến nhất tại nước ta.",
"todo": "Tầm soát cho thai phụ trong quá trình mang thai theo hướng dẫn của bác sĩ sản phụ khoa và tiêm phòng cho trẻ sơ sinh ngay.",
"when": "Khám thai định kỳ tại các cơ sở y tế phụ sản.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-012",
"n": 12,
"topic": 1,
"q": "Người nhiễm HBV mạn tính có thể sống lâu dài nếu được theo dõi và quản lý phù hợp không?",
"options": [
"Không, chỉ sống được vài tháng",
"CÓ, người bệnh hoàn toàn có thể sống khỏe mạnh và có tuổi thọ bình thường",
"Phải nằm giường bệnh suốt đời",
"Không thể lao động được"
],
"answer": 1,
"explain": "Nhờ thuốc kháng virus hiện đại, người bệnh hoàn toàn kiểm soát được bệnh khi tuân theo hướng dẫn của bác sĩ chuyên khoa.",
"todo": "Giữ tinh thần lạc quan, uống thuốc đều đặn nếu được chỉ định.",
"when": "Tái khám đúng hẹn tại y tế cơ sở hoặc bệnh viện.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-013",
"n": 13,
"topic": 1,
"q": "Người nhiễm HBV nên trao đổi với người thân về tình trạng bệnh như thế nào?",
"options": [
"Nên giấu vì lo bị xa lánh",
"NÊN chia sẻ, để người nhà đi xét nghiệm và tiêm phòng bảo vệ",
"Chỉ nói với người lạ",
"Đuổi người nhà đi nơi khác"
],
"answer": 1,
"explain": "Chia sẻ giúp người thân chủ động tiêm vắc-xin và cùng chăm sóc sức khỏe.",
"todo": "Cùng người nhà đi thử máu tầm soát.",
"when": "Đến trạm y tế phường để tiêm vắc-xin cho người thân chưa nhiễm.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-014",
"n": 14,
"topic": 1,
"q": "Thuật ngữ “nhiễm HBV không hoạt động” thường được hiểu như thế nào?",
"options": [
"Virus đã chết hoàn toàn",
"Virus đang nằm yên trong gan, chưa gây tổn thương hay viêm gan tiến triển",
"Virus lây qua đường hô hấp",
"Cơ thể đã khỏi bệnh 100%"
],
"answer": 1,
"explain": "Virus tồn tại nhưng chưa nảy nở mạnh và chưa phá hủy tế bào gan. Tuy nhiên, tình trạng này có thể thay đổi theo thời gian, virus có thể hoạt động trở lại và gây viêm gan. Vì vậy, \"không hoạt động\" không đồng nghĩa với đã khỏi bệnh.",
"todo": "Cần được khám và theo dõi định kỳ theo hướng dẫn của bác sĩ chuyên khoa.",
"when": "Cần tái khám theo lịch hẹn của bác sĩ. Nếu xuất hiện vàng da, vàng mắt, bụng trướng, phù hoặc mệt mỏi bất thường, cần đến cơ sở y tế để được đánh giá.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-015",
"n": 15,
"topic": 1,
"q": "Điểm khác biệt chính giữa viêm gan A và viêm gan B là gì?",
"options": [
"Viêm gan A lây qua ăn uống, Viêm gan B lây qua máu, tình dục và mẹ sang con",
"Viêm gan B không bao giờ lây",
"Viêm gan A gây ung thư gan cao hơn",
"Hai bệnh này là một"
],
"answer": 0,
"explain": "Viêm gan A lây qua đường tiêu hóa, còn viêm gan B lây qua đường máu và dịch thể.",
"todo": "Ăn chín uống sôi phòng viêm gan A; tiêm vắc-xin và dùng bao cao su phòng viêm gan B.",
"when": "Đến cơ sở y tế để tiêm vắc-xin phòng ngừa cả hai bệnh.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-016",
"n": 16,
"topic": 1,
"q": "Viêm gan B thể tối cấp nguy hiểm ở điểm nào?",
"options": [
"Diễn tiến rất nhanh, gây suy gan cấp nặng và tỷ lệ tử vong cao",
"Nhẹ như cảm cúm tự khỏi sau 1 ngày",
"Chỉ gây rụng tóc",
"Không nguy hiểm"
],
"answer": 0,
"explain": "Thể tối cấp tuy hiếm nhưng tổn thương gan ồ ạt, cần cấp cứu ngay.",
"todo": "Cần đưa người bệnh đến ngay bệnh viện lớn khi có dấu hiệu hôn mê, vàng da đậm.",
"when": "Cấp cứu tại bệnh viện chuyên khoa Truyền nhiễm cấp tốc.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-017",
"n": 17,
"topic": 1,
"q": "Truyền thông giáo dục sức khỏe về viêm gan B hướng đến những mục tiêu nào?",
"options": [
"Bắt buộc người bệnh phải nghỉ việc",
"Nâng cao nhận thức, khuyến khích tiêm chủng, bãi bỏ kỳ thị và hướng dẫn chăm sóc đúng",
"Bán thực phẩm chức năng",
"Cách ly người bệnh khỏi cộng đồng"
],
"answer": 1,
"explain": "Truyền thông nhằm giúp cộng đồng chủ động phòng bệnh và hỗ trợ người nhiễm sống khỏe.",
"todo": "Tham gia tìm hiểu kiến thức y tế chính thống.",
"when": "Đến trạm y tế địa phương để được tư vấn trực tiếp.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-018",
"n": 18,
"topic": 2,
"q": "Bệnh viêm gan B (HBV) do tác nhân nào gây ra?",
"options": [
"Vi-rút",
"Vi khuẩn",
"Kí sinh trùng",
"Nguyên sinh bào"
],
"answer": 0,
"explain": "Virus HBV có cấu trúc di truyền DNA thuộc họ Hepadnaviridae.",
"todo": "Hiểu đúng bản chất virus để không nhầm với vi khuẩn.",
"when": "Đến cơ sở y tế khi cần thử máu.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-019",
"n": 19,
"topic": 2,
"q": "HBV có khả năng tồn tại ngoài môi trường trong những điều kiện như thế nào?",
"options": [
"Chết ngay lập tức khi ra ngoài",
"Có thể sống bền vững ngoài môi trường tự nhiên ít nhất 7 ngày",
"Tồn tại 100 năm ngoài không khí",
"Tan trong nước ngay"
],
"answer": 1,
"explain": "HBV chịu nhiệt và khô ráo tốt, sống được nhiều ngày trên dụng cụ dính máu khô.",
"todo": "Cẩn thận với các vết máu khô trên đồ vật sắc nhọn.",
"when": "Đến y tế tư vấn khi nghi ngờ tiếp xúc máu khô.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-020",
"n": 20,
"topic": 2,
"q": "HBsAg là tên viết tắt của kháng nguyên nào trong xét nghiệm viêm gan B?",
"options": [
"Kháng nguyên bề mặt virus viêm gan B",
"Kháng thể bảo vệ gan",
"Men gan",
"Tải lượng virus"
],
"answer": 0,
"explain": "HBsAg là chỉ thị sự xuất hiện của virus viêm gan B trong máu.",
"todo": "Xét nghiệm HBsAg để biết mình có nhiễm hay không.",
"when": "Khám tại phòng xét nghiệm y tế.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-021",
"n": 21,
"topic": 2,
"q": "Kết quả Anti-HBs dương tính thường cho biết điều gì về khả năng miễn dịch với HBV?",
"options": [
"Cơ thể đang bị suy gan nặng",
"Cơ thể đã có sức đề kháng bảo vệ khỏi virus viêm gan B",
"Bệnh đang chuyển sang ung thư",
"Virus đang nhân lên rất mạnh"
],
"answer": 1,
"explain": "Anti-HBs dương tính nghĩa là bạn đã được bảo vệ (do tiêm vắc-xin hoặc đã khỏi bệnh).",
"todo": "Nếu Anti-HBs < 10 IU/L thì nên đi tiêm vắc-xin nhắc lại.",
"when": "Đăng ký tiêm phòng tại trạm y tế.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-022",
"n": 22,
"topic": 2,
"q": "Kết quả HBeAg dương tính thường gợi ý điều gì về hoạt động của HBV?",
"options": [
"Virus đang nhân lên mạnh và nguy cơ lây nhiễm cao",
"Virus đã chết hết",
"Căn bệnh đã khỏi hoàn toàn",
"Không có ý nghĩa gì"
],
"answer": 0,
"explain": "HBeAg dương tính gắn liền với tình trạng sao chép virus tích cực.",
"todo": "Tuân thủ hướng dẫn kiểm tra của bác sĩ.",
"when": "Thăm khám bác sĩ chuyên khoa.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-023",
"n": 23,
"topic": 2,
"q": "Xét nghiệm HBV DNA dùng để đánh giá yếu tố nào?",
"options": [
"Nồng độ virus (tải lượng virus) có trong máu",
"Số lượng hồng cầu",
"Độ đường trong máu",
"Mức độ dị ứng"
],
"answer": 0,
"explain": "Xét nghiệm HBV DNA cho biết chính xác có bao nhiêu bản sao virus trong 1 ml máu.",
"todo": "Thực hiện xét nghiệm khi bác sĩ yêu cầu.",
"when": "Tái khám tại bệnh viện chuyên khoa.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-024",
"n": 24,
"topic": 2,
"q": "Đun sôi ở 100°C có thể bất hoạt virus viêm gan B không?",
"options": [
"Chết ngay trong 1 giây",
"Bị bất hoạt nếu đun sôi liên tục trong ít nhất 1-2 phút (hoặc hấp tiệt trùng)",
"Không bao giờ chết dù đun 10 tiếng",
"Đun sôi làm virus mạnh lên"
],
"answer": 1,
"explain": "Nhiệt độ cao tiệt trùng đun sôi liên tục giúp làm biến tính hoàn toàn virus.",
"todo": "Tiệt trùng dụng cụ y tế và tiêm xỏ đúng chuẩn.",
"when": "Tham khảo tư vấn tại cơ sở y tế.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-025",
"n": 25,
"topic": 2,
"q": "Cồn 70 độ có hiệu quả trong việc bất hoạt HBV trên bề mặt hoặc dụng cụ không?",
"options": [
"Có thể bất hoạt virus nếu tiếp xúc đủ thời gian quy định",
"Cồn làm virus sinh sản nhanh hơn",
"Cồn hoàn toàn vô tác dụng",
"Phải dùng nước mắm"
],
"answer": 0,
"explain": "Cồn y tế 70 độ và dung dịch chứa Clo giúp khử trùng vết máu bẩn hiệu quả.",
"todo": "Khử trùng bề mặt dính máu bằng dung dịch sát khuẩn y tế.",
"when": "Đến trạm y tế khi bị phơi nhiễm.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-026",
"n": 26,
"topic": 2,
"q": "Hiện nay, có bao nhiêu kiểu gen chính của virus viêm gan B được ghi nhận?",
"options": [
"1 kiểu gen",
"10 kiểu gen (từ A đến J)",
"1000 kiểu gen",
"Không có kiểu gen"
],
"answer": 1,
"explain": "HBV gồm các kiểu gen A-J phân bố ở các vùng địa lý khác nhau.",
"todo": "Không cần quá lo lắng về kiểu gen, chỉ cần theo dõi chỉ định bác sĩ.",
"when": "Đến cơ sở y tế khi tái khám.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-027",
"n": 27,
"topic": 2,
"q": "Đột biến của HBV có thể ảnh hưởng như thế nào đến diễn tiến hoặc việc theo dõi bệnh?",
"options": [
"Làm virus biến thành vi khuẩn",
"Có thể ảnh hưởng đến kết quả xét nghiệm hoặc khả năng kháng thuốc",
"Giúp người bệnh khỏe hơn",
"Làm da đổi thành màu xanh"
],
"answer": 1,
"explain": "Đột biến có thể làm virus lẩn tránh kháng thể hoặc giảm nhạy cảm với thuốc.",
"todo": "Uống thuốc đúng giờ để tránh tạo ra virus đột biến kháng thuốc.",
"when": "Báo ngay bác sĩ nếu nghi ngờ thuốc giảm hiệu quả.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-028",
"n": 28,
"topic": 2,
"q": "Người đã hồi phục sau viêm gan B cấp tính và có Anti-HBs có nguy cơ nhiễm HBV trở lại không?",
"options": [
"Rất hiếm khi bị tái nhiễm vì đã có kháng thể bảo vệ",
"Chắc chắn bị lại sau 1 tuần",
"Bị nặng hơn gấp 10 lần",
"Phải uống thuốc suốt đời"
],
"answer": 0,
"explain": "Kháng thể Anti-HBs tạo ra lá chắn miễn dịch bảo vệ cơ thể lâu dài.",
"todo": "An tâm sinh hoạt bình thường.",
"when": "Kiểm tra lại nồng độ kháng thể sau nhiều năm nếu cần.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-029",
"n": 29,
"topic": 2,
"q": "Kết quả Anti-HBc dương tính có thể mang ý nghĩa gì?",
"options": [
"Cho biết cơ thể đã từng tiếp xúc với virus viêm gan B trong đời",
"Báo hiệu bị ung thư máu",
"Cho biết chưa bao giờ bị nhiễm",
"Báo hiệu bị dị ứng hải sản"
],
"answer": 0,
"explain": "Anti-HBc là chỉ thị chứng minh bạn từng gặp virus HBV trong quá khứ.",
"todo": "Khám tư vấn cùng bác sĩ để biết rõ giai đoạn.",
"when": "Đến phòng khám chuyên khoa.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-030",
"n": 30,
"topic": 2,
"q": "HBV chủ yếu xâm nhập và nhân lên trong loại tế bào nào của cơ thể?",
"options": [
"Tế bào thần kinh",
"Tế bào gan (hepatocytes)",
"Tế bào xương",
"Tế bào răng"
],
"answer": 1,
"explain": "Gan là cơ quan đích duy nhất mà virus HBV định cư và nhân lên.",
"todo": "Bảo vệ lá gan bằng lối sống lành mạnh.",
"when": "Tái khám theo dõi chức năng gan định kỳ.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-031",
"n": 31,
"topic": 2,
"q": "Yếu tố nào của cơ thể có vai trò giúp ngăn HBV xâm nhập vào tế bào gan?",
"options": [
"Uống nước ngọt",
"Kháng thể Anti-HBs nồng độ đầy đủ (≥ 10 IU/L)",
"Ăn nhiều đồ chiên xào",
"Thức khuya"
],
"answer": 1,
"explain": "Kháng thể Anti-HBs trung hòa virus trước khi nó kịp chui vào tế bào gan.",
"todo": "Tiêm vắc-xin đủ mũi để đạt nồng độ kháng thể an toàn.",
"when": "Tiêm chủng tại Trạm Y tế phường/xã.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-032",
"n": 32,
"topic": 2,
"q": "HBV có lây qua đường hô hấp khi nói chuyện thông thường không?",
"options": [
"Có lây rất mạnh",
"KHÔNG LÂY qua không khí hay nói chuyện giao tiếp",
"Chỉ lây vào mùa mưa",
"Lây qua ánh mắt"
],
"answer": 1,
"explain": "HBV không sống trong giọt bắn hô hấp thông thường khi ho hay nói chuyện.",
"todo": "Tự tin giao tiếp không lo lây nhiễm.",
"when": "Tư vấn tại trạm y tế khi cần thông tin.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-033",
"n": 33,
"topic": 2,
"q": "Biện pháp nào được sử dụng để khử khuẩn hoặc tiệt khuẩn dụng cụ y tế nhằm phòng lây truyền HBV?",
"options": [
"Rửa bằng nước lạnh",
"Hấp tiệt trùng áp suất cao (Autoclave) hoặc luộc sôi đúng quy trình y tế",
"Phơi nắng 5 phút",
"Lau bằng khăn giấy khô"
],
"answer": 1,
"explain": "Tiệt trùng nhiệt độ áp suất cao đảm bảo hủy diệt hoàn toàn mầm bệnh.",
"todo": "Sử dụng dịch vụ y tế và làm đẹp uy tín tiệt trùng đúng quy chuẩn.",
"when": "Khám tại các cơ sở y tế đạt chuẩn.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-034",
"n": 34,
"topic": 3,
"q": "HBV có thể lây truyền qua những con đường nào?",
"options": [
"Đường máu, Quan hệ tình dục không an toàn, Truyền từ mẹ sang con",
"Đường ăn uống, Ho hắt hơi, Muỗi đốt",
"Dùng chung nhà vệ sinh, Ôm bắt tay",
"Ăn chung mâm, Dùng chung bát đũa"
],
"answer": 0,
"explain": "Ba đường lây chính của HBV là máu, tình dục và mẹ truyền sang con.",
"todo": "Phòng tránh tiếp xúc máu và dùng bao cao su an toàn.",
"when": "Đến cơ sở y tế xét nghiệm khi có nguy cơ phơi nhiễm.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-035",
"n": 35,
"topic": 3,
"q": "Ăn chung mâm, dùng chung bát đũa hoặc chấm chung nước mắm có làm lây HBV không?",
"options": [
"Có lây rất nhanh",
"KHÔNG LÂY TRUYỀN qua đường ăn uống sinh hoạt chung",
"Chỉ lây đồ ăn cay",
"Chỉ lây đũa gỗ"
],
"answer": 1,
"explain": "Virus không lây qua nước bọt hay thức ăn sinh hoạt mâm cỗ gia đình.",
"todo": "Yên tâm ăn uống cùng gia đình, không cách ly bát đũa.",
"when": "Đưa người nhà đi tiêm vắc-xin phòng bệnh.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-036",
"n": 36,
"topic": 3,
"q": "Muỗi hút máu người nhiễm HBV rồi đốt người khác có truyền HBV không?",
"options": [
"Có lây truyền",
"KHÔNG LÂY TRUYỀN qua muỗi hay côn trùng đốt",
"Chỉ lây muỗi vằn",
"Lây 100%"
],
"answer": 1,
"explain": "Virus HBV không nhân lên hay tồn tại dạng lây nhiễm trong tuyến nước bọt của muỗi.",
"todo": "Không lo lây viêm gan B từ muỗi (dù vẫn cần phòng sốt xuất huyết).",
"when": "Tư vấn thêm tại y tế cơ sở.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-037",
"n": 37,
"topic": 3,
"q": "Những vật dụng cá nhân nào dùng chung trong gia đình có thể làm tăng nguy cơ lây HBV?",
"options": [
"Bàn chải đánh răng, Dao cạo râu, Bấm móng tay",
"Bát đũa, Tách uống nước",
"Quyền sách, Khăn lau bàn",
"Ghế ngồi, Tivi"
],
"answer": 0,
"explain": "Các vật dụng sắc nhọn cá nhân dễ dính vệt máu vi thể gây lây nhiễm.",
"todo": "Không dùng chung đồ vật có nguy cơ dính máu.",
"when": "Thử máu cho thành viên gia đình.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-038",
"n": 38,
"topic": 3,
"q": "Quan hệ tình dục không sử dụng bao cao su với người nhiễm HBV có làm tăng nguy cơ lây nhiễm không?",
"options": [
"Không có nguy cơ",
"CÓ NGUY CƠ LÂY NHIỄM CAO nếu bạn tình chưa có kháng thể bảo vệ",
"Chỉ lây người lớn tuổi",
"Chỉ lây ban ngày"
],
"answer": 1,
"explain": "Virus HBV có nồng độ cao trong dịch sinh dục làm lây qua quan hệ không an toàn.",
"todo": "Sử dụng bao cao su hoặc tiêm vắc-xin tạo kháng thể trước.",
"when": "Đến phòng khám chuyên khoa tư vấn.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-039",
"n": 39,
"topic": 3,
"q": "Ôm, bắt tay hoặc hôn xã giao có phải là những cách lây truyền HBV thông thường không?",
"options": [
"Có lây",
"KHÔNG LÂY qua tiếp xúc xã giao thông thường",
"Lây qua mồ hôi tay",
"Lây qua ánh mắt"
],
"answer": 1,
"explain": "Tiếp xúc da lành không làm lây truyền virus.",
"todo": "Thoải mái ôm bắt tay giao tiếp xã hội.",
"when": "Tham khảo kiến thức tại trạm y tế.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-040",
"n": 40,
"topic": 3,
"q": "Dùng chung nhà vệ sinh hoặc bồn tắm với người nhiễm HBV có làm lây bệnh không?",
"options": [
"Có lây",
"KHÔNG LÂY qua nhà vệ sinh hay môi trường nước bồn tắm",
"Lây qua xà phòng",
"Lây qua vòi nước"
],
"answer": 1,
"explain": "Virus không lây qua tiếp xúc da với thiết bị vệ sinh.",
"todo": "Vệ sinh nhà cửa sạch sẽ bình thường.",
"when": "Tư vấn sức khỏe tại y tế cơ sở.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-041",
"n": 41,
"topic": 3,
"q": "Máu của người nhiễm HBV tiếp xúc trực tiếp với vết thương hở có thể gây lây nhiễm không?",
"options": [
"CÓ NGUY CƠ LÂY NHIỄM CAO",
"Không sao cả",
"Chỉ lây khi lặn dưới nước",
"Chỉ lây nếu bị sốt"
],
"answer": 0,
"explain": "Máu chứa nồng độ virus HBV rất cao, xâm nhập trực tiếp qua da trầy xước.",
"todo": "Rửa ngay bằng nước sạch xà phòng và đi khám y tế.",
"when": "Đến ngay cơ sở y tế trong 24 giờ để xử trí phơi nhiễm.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-042",
"n": 42,
"topic": 3,
"q": "Làm móng, xăm hình hoặc xỏ khuyên bằng dụng cụ không được tiệt khuẩn đúng cách có thể làm lây HBV không?",
"options": [
"CÓ NGUY CƠ LÂY NHIỄM",
"Tuyệt đối an toàn",
"Chỉ lây màu đỏ",
"Không nguy hiểm"
],
"answer": 0,
"explain": "Dụng cụ xỏ xăm dính máu người nhiễm chưa tiệt trùng sẽ làm lây truyền virus.",
"todo": "Chọn cơ sở làm đẹp uy tín, dùng kim và lưỡi dao mới tiệt trùng.",
"when": "Đến cơ sở y tế khi có nguy cơ phơi nhiễm.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-043",
"n": 43,
"topic": 3,
"q": "HBV thường lây truyền từ mẹ sang con vào thời điểm nào?",
"options": [
"Trong lúc chuyển dạ và sinh con",
"Khi mới thụ thai 1 ngày",
"Khi con 10 tuổi",
"Qua sữa chua"
],
"answer": 0,
"explain": "Sự co bóp tử cung và tiếp xúc máu dịch lúc sinh là thời điểm lây truyền chính.",
"todo": "Tiêm vắc-xin và huyết thanh cho bé ngay trong 24h sau sinh.",
"when": "Sinh con tại bệnh viện có chuyên khoa.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-044",
"n": 44,
"topic": 3,
"q": "Ho, hắt hơi hoặc hỉ mũi có thể làm lây HBV cho người xung quanh không?",
"options": [
"Có lây",
"KHÔNG LÂY truyền qua ho hay hắt hơi",
"Lây vào mùa đông",
"Lây qua gió"
],
"answer": 1,
"explain": "HBV không lây qua giọt bắn đường hô hấp.",
"todo": "Không cần cách ly người bệnh khi ho sốt thông thường.",
"when": "Khám tại y tế cơ sở.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-045",
"n": 45,
"topic": 3,
"q": "Dùng chung ly uống nước hoặc chai nước có làm lây HBV không?",
"options": [
"Có lây",
"KHÔNG LÂY qua đồ uống chung nếu miệng không bị lở lở chảy máu cấp",
"Lây 100%",
"Lây qua đá lạnh"
],
"answer": 1,
"explain": "Nước bọt không chứa đủ nồng độ virus để gây lây nhiễm qua đồ uống.",
"todo": "Giữ vệ sinh ăn uống cá nhân bình thường.",
"when": "Tư vấn thêm tại trạm y tế.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-046",
"n": 46,
"topic": 3,
"q": "Bơi chung hồ bơi công cộng với người nhiễm HBV có làm lây bệnh không?",
"options": [
"Có lây",
"KHÔNG LÂY qua nước hồ bơi",
"Chỉ lây nước mặn",
"Lây khi bơi ngửa"
],
"answer": 1,
"explain": "Nước hồ bơi không phải là môi trường lây truyền HBV.",
"todo": "Thoải mái tập luyện thể thao bơi lội.",
"when": "Khám sức khỏe định kỳ.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-047",
"n": 47,
"topic": 3,
"q": "Người mẹ nhiễm HBV có thể cho con bú khi trẻ đã được dự phòng bằng vắc-xin và HBIG theo khuyến cáo không?",
"options": [
"CÓ, cho con bú hoàn toàn an toàn khi trẻ đã tiêm phòng đúng",
"Lây 100%",
"Tuyệt đối cấm bú",
"Chỉ bú đêm"
],
"answer": 0,
"explain": "nếu đầu vú mẹ bị nứt và chảy máu, nên tạm ngưng cho bú cho đến khi lành, đồng thời vắt và bỏ sữa trong thời gian này. Đây là biện pháp thận trọng vì HBV có thể lây qua máu.",
"todo": "Cho trẻ bú sữa mẹ hoàn toàn.",
"when": "Khám tư vấn thai sản tại bệnh viện.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-048",
"n": 48,
"topic": 3,
"q": "Vết cắn của người khác gây chảy máu có thể làm phát sinh nguy cơ lây HBV không?",
"options": [
"Có nguy cơ nếu vết cắn gây rách da và có tiếp xúc máu",
"Hoàn toàn không sao",
"Chỉ lây ở động vật",
"Lây qua răng"
],
"answer": 0,
"explain": "Tiếp xúc máu qua vết thương rách da có nguy cơ lây nhiễm.",
"todo": "Rửa vết thương xà phòng và đi khám.",
"when": "Đến cơ sở y tế trong 24h để xử trí.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-049",
"n": 49,
"topic": 3,
"q": "Nhổ răng hoặc làm thủ thuật nha khoa tại cơ sở không bảo đảm vô khuẩn có thể làm lây HBV không?",
"options": [
"CÓ NGUY CƠ LÂY NHIỄM qua dụng cụ dính máu",
"Không bao giờ lây",
"Nhổ răng không liên quan máu",
"Chỉ lây răng sâu"
],
"answer": 0,
"explain": "Dụng cụ nha khoa xâm lấn cần được hấp tiệt trùng chuẩn để tránh lây nhiễm.",
"todo": "Khám răng tại cơ sở nha khoa uy tín đảm bảo vô trùng.",
"when": "Tư vấn y tế khi nghi ngờ phơi nhiễm.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-050",
"n": 50,
"topic": 3,
"q": "Hiến máu tại cơ sở được cấp phép, sử dụng dụng cụ vô khuẩn dùng một lần, có làm tăng nguy cơ người hiến bị nhiễm HBV không?",
"options": [
"KHÔNG, vì kim lấy máu là loại vô trùng dùng 1 lần rồi bỏ",
"Có lây rất cao",
"Lây qua túi máu",
"Lây qua bông gòn"
],
"answer": 0,
"explain": "Quy trình hiến máu an toàn dùng dụng cụ tiệt trùng riêng biệt 1 lần.",
"todo": "An tâm tham gia hiến máu nhân đạo nếu đủ sức khỏe.",
"when": "Khám sàng lọc trước hiến máu.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-051",
"n": 51,
"topic": 4,
"q": "Người nhiễm HBV mạn tính thường có biểu hiện triệu chứng như thế nào?",
"options": [
"Thường KHÔNG CÓ TRIỆU CHỨNG rõ rệt cho đến khi gan bị tổn thương nặng",
"Sốt cao liên tục 40 độ",
"Nổi mụn nhọt toàn thân",
"Đau nhức răng"
],
"answer": 0,
"explain": "Viêm gan B mạn tiến triển im lặng không gây đau đớn ở giai đoạn sớm.",
"todo": "Chủ động đi xét nghiệm thử máu.",
"when": "Đến cơ sở y tế làm xét nghiệm HBsAg.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-052",
"n": 52,
"topic": 4,
"q": "Những triệu chứng nào có thể gặp ở người mắc viêm gan B cấp tính và cần được chú ý?",
"options": [
"Mệt mỏi, chán ăn, vàng da, vàng mắt, nước tiểu sậm màu như nước trà đậm",
"Rụng răng, ho ra máu",
"Đau khớp cổ tay",
"Giảm thị lực đột ngột"
],
"answer": 0,
"explain": "Khi gan bị viêm cấp, sắc tố mật tràn vào máu gây vàng da và tiểu sậm.",
"todo": "Nghỉ ngơi và đi khám y tế ngay.",
"when": "Đến khám tại khoa Truyền nhiễm.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-053",
"n": 53,
"topic": 4,
"q": "Vàng da, vàng mắt ở người mắc viêm gan B thường liên quan đến nguyên nhân nào?",
"options": [
"Do ăn nhiều cà rốt",
"Do bilirubin (sắc tố mật) tăng cao trong máu khi tế bào gan bị tổn thương",
"Do uống nhiều nước trà",
"Do đi nắng"
],
"answer": 1,
"explain": "Tế bào gan bị viêm không chuyển hóa được bilirubin dẫn đến tích tụ gây vàng da.",
"todo": "Đi khám bác sĩ để kiểm tra chức năng gan.",
"when": "Thăm khám tại bệnh viện chuyên khoa.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-054",
"n": 54,
"topic": 4,
"q": "Vì sao người nhiễm HBV vẫn có thể bị xơ gan dù cảm thấy khỏe mạnh và không có triệu chứng rõ rệt?",
"options": [
"Vì xơ gan diễn tiến âm thầm qua nhiều năm mà không gây đau đớn",
"Vì bác sĩ đoán sai",
"Vì xơ gan tự biến mất",
"Vì ăn nhiều thịt"
],
"answer": 0,
"explain": "Mô xơ thay thế tế bào gan từ từ mà người bệnh không cảm nhận được.",
"todo": "Khám và siêu âm gan định kỳ 3-6 tháng.",
"when": "Khám chuyên khoa Gan mật.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-055",
"n": 55,
"topic": 4,
"q": "Những phương pháp nào thường được sử dụng để theo dõi và phát hiện sớm ung thư biểu mô tế bào gan ở người có nguy cơ?",
"options": [
"Nhìn mắt thường",
"Tầm soát định kỳ bằng Siêu âm bụng và xét nghiệm chỉ số AFP",
"Chờ khi đau hông mới đi khám",
"Thử nước tiểu tại nhà"
],
"answer": 1,
"explain": "Siêu âm và chỉ dấu AFP giúp phát hiện khối u nhỏ khi chưa có triệu chứng.",
"todo": "Tuân thủ lịch tầm soát 6 tháng/lần.",
"when": "Khám định kỳ tại cơ sở y tế và tuân theo hướng dẫn, chỉ định của bác sĩ.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-056",
"n": 56,
"topic": 4,
"q": "Nước tiểu sẫm màu như trà đặc có thể là dấu hiệu của tình trạng nào?",
"options": [
"Dấu hiệu cảnh báo gan đang bị viêm/tổn thương thải sắc tố mật qua nước tiểu",
"Dấu hiệu thận quá khỏe",
"Do uống quá nhiều nước",
"Do ăn nhiều đường"
],
"answer": 0,
"explain": "Sắc tố mật bị thải qua đường tiết niệu làm nước tiểu có màu sậm bất thường.",
"todo": "Đi thử máu và nước tiểu kiểm tra.",
"when": "Đến cơ sở y tế khám ngay.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-057",
"n": 57,
"topic": 4,
"q": "Những dấu hiệu nào có thể xuất hiện khi xơ gan đã tiến triển đến giai đoạn muộn?",
"options": [
"Phù chân, bụng trướng to (cổ trướng), xuất huyết tiêu hóa nôn ra máu",
"Tăng chiều cao",
"Răng mọc thêm",
"Da bớt nhăn"
],
"answer": 0,
"explain": "Gan xơ chai làm suy giảm chức năng tổng hợp đạm và gây tăng áp lực tĩnh mạch cửa.",
"todo": "Cần nhập viện điều trị theo phác đồ bác sĩ.",
"when": "Cấp cứu/Khám chuyên khoa Gan mật.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-058",
"n": 58,
"topic": 4,
"q": "Mệt mỏi ở người mắc viêm gan B có thể liên quan đến những yếu tố nào?",
"options": [
"Do khả năng dự trữ và chuyển hóa năng lượng của gan bị suy giảm",
"Do lười vận động",
"Do thời tiết nóng",
"Do suy nghĩ nhiều"
],
"answer": 0,
"explain": "Gan bị viêm làm ảnh hưởng đến quá trình chuyển hóa glycogen cung cấp năng lượng.",
"todo": "Tránh làm việc quá sức, nghỉ ngơi hợp lý.",
"when": "Tái khám theo dõi chức năng gan.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-059",
"n": 59,
"topic": 4,
"q": "Xuất huyết tiêu hóa do biến chứng xơ gan nguy hiểm như thế nào?",
"options": [
"Nôn ra máu tươi hoặc đi cầu phân đen như bã cà phê (có mùi hôi tanh, sệt), cấp cứu tử vong cao",
"Chỉ chảy máu cam tự cầm",
"Không nguy hiểm",
"Tự khỏi sau 5 phút"
],
"answer": 0,
"explain": "Vỡ giãn tĩnh mạch thực quản do xơ gan gây chảy máu ồ ạt nguy hiểm tính mạng.",
"todo": "Đưa bệnh nhân cấp cứu ngay lập tức.",
"when": "Đến ngay khoa Cấp cứu bệnh viện lớn.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-060",
"n": 60,
"topic": 4,
"q": "Nhiễm HBV mạn tính có làm tăng nguy cơ ung thư gan so với người không nhiễm không?",
"options": [
"CÓ, nguy cơ cao gấp hàng chục lần nếu không quản lý theo dõi",
"Giống nhau 100%",
"Người nhiễm HBV không bao giờ bị ung thư",
"Giảm nguy cơ ung thư"
],
"answer": 0,
"explain": "Sự tổn thương và tái tạo tế bào gan liên tục do virus làm tăng nguy cơ đột biến ung thư.",
"todo": "Tầm soát định kỳ siêu âm và AFP.",
"when": "Theo dõi tại bệnh viện chuyên khoa.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-061",
"n": 61,
"topic": 4,
"q": "Phù hai chân ở người mắc xơ gan có thể liên quan đến nguyên nhân nào?",
"options": [
"Do suy giảm nồng độ Albumin máu do gan sản xuất và giữ nước",
"Do đi bộ nhiều",
"Do mang giày chật",
"Do muỗi đốt"
],
"answer": 0,
"explain": "Gan suy không sản xuất đủ đạm albumin dẫn đến giảm áp lực keo gây thoát dịch phù chân.",
"todo": "Nằm kê cao chân, ăn giảm muối và đi khám.",
"when": "Tái khám chuyên khoa Nội tiêu hóa.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-062",
"n": 62,
"topic": 4,
"q": "Ngứa da kéo dài ở người mắc bệnh gan có thể liên quan đến yếu tố nào?",
"options": [
"Sự tích tụ muối mật dưới da do dòng chảy mật bị tắc nghẽn/trệ",
"Do sâu róm",
"Do dính nước mưa",
"Do dị ứng quần áo"
],
"answer": 0,
"explain": "Ứ mật trong gan làm muối mật ngấm vào máu và đọng dưới da gây ngứa.",
"todo": "Không gãi rách da, đi khám kiểm tra men gan.",
"when": "Đến cơ sở y tế tái khám.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-063",
"n": 63,
"topic": 4,
"q": "Chán ăn hoặc ăn không ngon miệng ở người mắc viêm gan B có thể do những nguyên nhân nào?",
"options": [
"Gan giảm tiết mật làm ảnh hưởng đến sự tiêu hóa chất béo",
"Do thức ăn không ngon",
"Do đau răng",
"Do đau dạ dày"
],
"answer": 0,
"explain": "Mật giúp nhũ hóa chất béo; khi gan tổn thương dịch mật giảm gây đầy bụng sợ mỡ.",
"todo": "Ăn thức ăn thanh nhẹ, chia nhỏ bữa ăn.",
"when": "Tư vấn bác sĩ tại kỳ tái khám.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-064",
"n": 64,
"topic": 4,
"q": "Suy gan cấp trên nền viêm gan B mạn tính có thể biểu hiện bằng những dấu hiệu nào?",
"options": [
"Vàng da tăng nhanh, rối loạn đông máu, lơ mơ hoặc hôn mê gan",
"Tăng trí nhớ",
"Da trắng ra",
"Mắt sáng hơn"
],
"answer": 0,
"explain": "Tế bào gan bị hủy hoại diện rộng cấp tính dẫn đến nhiễm độc thần kinh.",
"todo": "Đưa bệnh nhân nhập viện cấp cứu ngay.",
"when": "Cấp cứu tại bệnh viện lớn.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-065",
"n": 65,
"topic": 4,
"q": "Tình trạng tích tụ dịch làm bụng trướng to ở người xơ gan được gọi là gì?",
"options": [
"Bụng cổ trướng (tráng dịch màng bụng)",
"Bụng béo phì",
"Bụng chửa",
"Bụng hơi"
],
"answer": 0,
"explain": "Dịch thoát vào khoang màng bụng do tăng áp lực mạch máu và giảm đạm máu.",
"todo": "Hạn chế uống nhiều nước và muối, đi khám ngay.",
"when": "Nhập viện điều trị chuyên khoa.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-066",
"n": 66,
"topic": 4,
"q": "Những biện pháp nào giúp giảm nguy cơ biến chứng xơ gan và ung thư gan ở người nhiễm HBV?",
"options": [
"Uống thuốc kháng virus đúng chỉ định và tái khám kiểm tra định kỳ 3-6 tháng",
"Nhịn ăn hoàn toàn",
"Uống nước chanh hàng ngày",
"Không đi khám bác sĩ"
],
"answer": 0,
"explain": "Kiểm soát tốt virus giúp dừng quá trình tổn thương gan tiến triển.",
"todo": "Tuân thủ lịch tái khám và phác đồ điều trị.",
"when": "Khám định kỳ tại y tế cơ sở/bệnh viện.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-067",
"n": 67,
"topic": 5,
"q": "Kết quả xét nghiệm HBsAg âm tính cho biết điều gì?",
"options": [
"Hiện tại cơ thể không nhiễm virus viêm gan B",
"Đã bị ung thư gan",
"Đang bị suy gan cấp",
"Phải uống thuốc diệt virus"
],
"answer": 0,
"explain": "HBsAg âm tính cho thấy tại thời điểm thử máu bạn không mang mầm bệnh HBV.",
"todo": "Khuyên đi làm thêm Anti-HBs để xem có cần tiêm vắc-xin không.",
"when": "Tư vấn tại trạm y tế địa phương.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-068",
"n": 68,
"topic": 5,
"q": "Kết quả xét nghiệm HBsAg dương tính cho biết điều gì?",
"options": [
"Cơ thể hiện đang mang virus viêm gan B",
"Đã khỏi bệnh hoàn toàn",
"Đã có vắc-xin bảo vệ",
"Phải mổ ngay"
],
"answer": 0,
"explain": "HBsAg dương tính thể hiện có sự hiện diện của HBV trong cơ thể.",
"todo": "Bình tĩnh, đi gặp bác sĩ để được hướng dẫn đánh giá thêm.",
"when": "Khám tại phòng khám chuyên khoa.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-069",
"n": 69,
"topic": 5,
"q": "Kết quả Anti-HBs lớn hơn 10 IU/L thường được diễn giải như thế nào?",
"options": [
"Cơ thể đã có đủ lượng kháng thể bảo vệ an toàn khỏi virus HBV",
"Đang bị nhiễm bệnh nặng",
"Phải tiêm vắc-xin ngay 10 mũi",
"Bị dị ứng thuốc"
],
"answer": 0,
"explain": "Nồng độ Anti-HBs ≥ 10 IU/L tạo lá chắn miễn dịch phòng ngừa hiệu quả.",
"todo": "An tâm vì đã có kháng thể bảo vệ.",
"when": "Tư vấn tại trạm y tế phường.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-070",
"n": 70,
"topic": 5,
"q": "Kết quả Anti-HBs dưới 10 IU/L hoặc âm tính thường gợi ý điều gì?",
"options": [
"Cơ thể chưa có hoặc không còn đủ lượng kháng thể bảo vệ",
"Đã bị ung thư",
"Quá thừa kháng thể",
"Không cần làm gì"
],
"answer": 0,
"explain": "Nồng độ kháng thể dưới 10 IU/L chưa đủ sức bảo vệ khỏi lây nhiễm.",
"todo": "Đăng ký tiêm phòng vắc-xin viêm gan B.",
"when": "Tiêm chủng tại Trạm Y tế phường/xã.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-071",
"n": 71,
"topic": 5,
"q": "Có cần nhịn ăn trước khi xét nghiệm HBsAg và Anti-HBs không?",
"options": [
"KHÔNG CẦN, xét nghiệm kháng nguyên/kháng thể HBV không bị ảnh hưởng bởi thức ăn",
"Bắt buộc nhịn ăn 3 ngày",
"Phải uống 5 lít nước",
"Phải ăn thật no"
],
"answer": 0,
"explain": "Xét nghiệm HBsAg/Anti-HBs đo lường protein miễn dịch không phụ thuộc vào bữa ăn.",
"todo": "Có thể đi xét nghiệm bất kỳ lúc nào trong ngày.",
"when": "Đến phòng xét nghiệm y tế.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-072",
"n": 72,
"topic": 5,
"q": "Nồng độ men gan ALT/AST tăng có thể phản ánh tình trạng nào?",
"options": [
"Tế bào gan đang bị tổn thương/viêm",
"Thận đang quá khỏe",
"Phổi bị tổn thương",
"Răng bị sâu"
],
"answer": 0,
"explain": "Men gan giải phóng vào máu khi tế bào gan bị vỡ hoại tử.",
"todo": "Đi gặp bác sĩ để tìm nguyên nhân gây tăng men gan.",
"when": "Khám chuyên khoa Nội tiêu hóa/Gan mật.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-073",
"n": 73,
"topic": 5,
"q": "Men gan ALT/AST bình thường có đủ để loại trừ nhiễm HBV không?",
"options": [
"KHÔNG CHẮC, vì nhiều người nhiễm HBV mạn tính men gan vẫn bình thường",
"Đúng 100%, men gan bình thường là không bao giờ nhiễm",
"Men gan bình thường nghĩa là đã ung thư",
"Không liên quan"
],
"answer": 0,
"explain": "Virus có thể sống hòa hoãn mà chưa gây bùng phát men gan.",
"todo": "Cần xét nghiệm HBsAg mới biết được có nhiễm virus hay không.",
"when": "Thực hiện xét nghiệm tại y tế cơ sở.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-074",
"n": 74,
"topic": 5,
"q": "Xét nghiệm HBV DNA thường được chỉ định nhằm đánh giá điều gì?",
"options": [
"Khi HBsAg dương tính và bác sĩ cần đánh giá sự nhân lên của virus để cân nhắc điều trị",
"Cho tất cả người khỏe mạnh",
"Khi bị nhức đầu",
"Khi bị gãy chân"
],
"answer": 0,
"explain": "HBV DNA giúp đo lường mức độ hoạt động của virus để ra quyết định y khoa.",
"todo": "Tuân thủ chỉ định xét nghiệm của bác sĩ.",
"when": "Tái khám tại bệnh viện chuyên khoa.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-075",
"n": 75,
"topic": 5,
"q": "Kết quả HBeAg dương tính trong xét nghiệm máu thường gợi ý điều gì?",
"options": [
"Virus đang sao chép nhân lên mạnh mẽ, tính lây nhiễm cao",
"Virus đã bị diệt hết",
"Bệnh nhân đã hoàn toàn hồi phục",
"Không có giá trị"
],
"answer": 0,
"explain": "HBeAg là dấu ấn sinh học của sự nhân lên tích cực của HBV.",
"todo": "Cần theo dõi sát y tế theo chỉ dẫn bác sĩ.",
"when": "Khám bác sĩ chuyên khoa Truyền nhiễm.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-076",
"n": 76,
"topic": 5,
"q": "Siêu âm bụng được sử dụng với mục đích gì trong theo dõi người nhiễm HBV?",
"options": [
"Đánh giá cấu trúc gan, phát hiện sớm dấu hiệu xơ gan hoặc khối u u gan nhỏ",
"Đo chiều dài dạ dày",
"Đếm số lượng sỏi răng",
"Kiểm tra xương khớp"
],
"answer": 0,
"explain": "Siêu âm sóng âm giúp quan sát hình ảnh đại thể của nhu mô gan.",
"todo": "Thực hiện siêu âm định kỳ mỗi 6 tháng.",
"when": "Khám tại cơ sở y tế uy tín.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-077",
"n": 77,
"topic": 5,
"q": "Xét nghiệm AFP trong máu có vai trò gì khi theo dõi nguy cơ ung thư gan?",
"options": [
"Hỗ trợ tầm soát và phát hiện sớm ung thư biểu mô tế bào gan (HCC)",
"Đo độ cận thị",
"Kiểm tra đường huyết",
"Đo lượng mỡ máu"
],
"answer": 0,
"explain": "AFP là chỉ dấu sinh học nồng độ tăng cao trong đa số trường hợp u gan.",
"todo": "Làm xét nghiệm AFP định kỳ kèm siêu âm bụng.",
"when": "Tái khám tại y tế cơ sở/bệnh viện.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-078",
"n": 78,
"topic": 5,
"q": "Khi có kết quả HBsAg dương tính, Anti-HBs âm tính, HBeAg âm tính và men gan bình thường, người bệnh nên hiểu kết quả này như thế nào?",
"options": [
"Đang nhiễm HBV mạn ở thể không hoạt động/theo dõi, cần tái khám định kỳ",
"Đã khỏi bệnh 100%",
"Bệnh giai đoạn cuối tử vong ngay",
"Phải mổ gan ngay"
],
"answer": 0,
"explain": "Bệnh nhân mang virus nhưng virus chưa gây bùng phát viêm gan.",
"todo": "Bình tĩnh và đi tái khám đúng hẹn 3-6 tháng/lần.",
"when": "Tư vấn với bác sĩ chuyên khoa.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-079",
"n": 79,
"topic": 5,
"q": "Kết quả HBsAg âm tính và Anti-HBs dương tính ở mức trên 100 IU/L thường gợi ý điều gì?",
"options": [
"Bạn an toàn không nhiễm HBV và có lượng kháng thể bảo vệ rất cao",
"Đang bị viêm gan nặng",
"Phải tiêm ngay vắc-xin",
"Bị suy dinh dưỡng"
],
"answer": 0,
"explain": "Nồng độ Anti-HBs > 100 IU/L thể hiện mức độ đáp ứng miễn dịch tuyệt vời.",
"todo": "Chúc mừng! Bạn hoàn toàn an tâm sinh hoạt.",
"when": "Tư vấn tại trạm y tế phường.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-080",
"n": 80,
"topic": 5,
"q": "Người dân nên làm gì khi nhận được phiếu xét nghiệm có nhiều chỉ số bất thường?",
"options": [
"Mang kết quả đến bác sĩ chuyên khoa để được tư vấn và giải thích chính xác",
"Lên mạng tự mua thuốc uống",
"Nhịn ăn 10 ngày",
"Vứt bỏ kết quả"
],
"answer": 0,
"explain": "Bác sĩ cần tổng hợp lâm sàng và xét nghiệm để đưa ra chẩn đoán đúng.",
"todo": "Không tự ý đoán bệnh hay mua thuốc.",
"when": "Khám tại phòng khám y tế uy tín.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-081",
"n": 81,
"topic": 5,
"q": "Việc kết hợp siêu âm gan và xét nghiệm AFP có vai trò gì trong theo dõi người có nguy cơ ung thư gan?",
"options": [
"Bộ đôi tiêu chuẩn giúp tầm soát phát hiện sớm ung thư gan hiệu quả nhất",
"Giúp tăng cân",
"Chữa khỏi hoàn toàn virus",
"Kiểm tra sức khỏe mắt"
],
"answer": 0,
"explain": "Kết hợp hình ảnh và chỉ dấu sinh học giúp không bỏ sót u gan giai đoạn sớm.",
"todo": "Duy trì kiểm tra bộ đôi này 6 tháng một lần.",
"when": "Tái khám tại bệnh viện chuyên khoa.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-082",
"n": 82,
"topic": 5,
"q": "Đo độ đàn hồi gan (FibroScan) giúp đánh giá tình trạng nào của gan?",
"options": [
"Đánh giá mức độ xơ hóa gan (từ F0 đến F4)",
"Đo thể tích phổi",
"Kiểm tra nhịp tim",
"Đo chiều cao"
],
"answer": 0,
"explain": "FibroScan sử dụng sóng siêu âm đo độ cứng của mô gan để xếp loại xơ hóa.",
"todo": "Thực hiện khi bác sĩ chuyên khoa chỉ định.",
"when": "Khám tại các bệnh viện có máy FibroScan.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-083",
"n": 83,
"topic": 5,
"q": "Người nhiễm HBV mạn tính chưa điều trị cần tái khám và xét nghiệm theo dõi như thế nào?",
"options": [
"Định kỳ mỗi 3 đến 6 tháng một lần",
"20 năm mới đi 1 lần",
"Ngày nào cũng đi",
"Không bao giờ đi"
],
"answer": 0,
"explain": "Tái khám 3-6 tháng giúp kịp thời phát hiện khi virus bùng phát hoạt động.",
"todo": "Đánh dấu lịch tái khám vào sổ tay.",
"when": "Tái khám đúng hẹn tại y tế cơ sở/bệnh viện.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-084",
"n": 84,
"topic": 6,
"q": "Trẻ sơ sinh nên được tiêm vắc-xin viêm gan B vào thời điểm nào sau khi chào đời?",
"options": [
"Trong vòng 24 giờ đầu sau khi sinh",
"Khi trẻ 1 tuổi",
"Khi trẻ 18 tuổi",
"Không cần tiêm"
],
"answer": 0,
"explain": "Tiêm trong 24h đầu giúp phòng ngừa lây nhiễm từ mẹ lúc chuyển dạ tốt nhất.",
"todo": "Đồng ý cho trẻ tiêm vắc-xin sơ sinh tại nhà sinh/bệnh viện.",
"when": "Thảo luận với y bác sĩ sinh nở.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-085",
"n": 85,
"topic": 6,
"q": "Trẻ sinh từ mẹ có HBsAg dương tính cần được tiêm thêm chế phẩm nào bên cạnh vắc-xin viêm gan B trong 24 giờ đầu?",
"options": [
"Kháng huyết thanh viêm gan B (HBIG)",
"Vắc-xin phòng dại",
"Kháng sinh liều cao",
"Vitamin C"
],
"answer": 0,
"explain": "HBIG cung cấp ngay kháng thể tức thì bảo vệ bé trong khi vắc-xin đang tạo miễn dịch.",
"todo": "Chuẩn bị sẵn sàng tiêm phối hợp vắc-xin + HBIG cho bé.",
"when": "Khám quản lý thai tại bệnh viện sản.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-086",
"n": 86,
"topic": 6,
"q": "Lịch tiêm vắc-xin viêm gan B cho người lớn chưa có miễn dịch được xác định như thế nào?",
"options": [
"Phác đồ 3 mũi (thường theo lịch 0-1-6 tháng)",
"Chỉ tiêm 100 mũi",
"Tiêm 1 mũi duy nhất suốt đời",
"Tiêm mỗi ngày 1 mũi"
],
"answer": 0,
"explain": "Phác đồ 3 mũi giúp hệ miễn dịch tạo đủ nồng độ kháng thể Anti-HBs an toàn.",
"todo": "Tiêm đúng và đủ lịch hẹn các mũi tiêm.",
"when": "Đăng ký tiêm tại Trạm Y tế/Trung tâm tiêm chủng.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-087",
"n": 87,
"topic": 6,
"q": "Vì sao trẻ sơ sinh cần được tiêm vắc-xin viêm gan B càng sớm càng tốt, tốt nhất trong 24 giờ đầu sau sinh?",
"options": [
"Vì giúp tạo ngay lá chắn bảo vệ trước khi virus từ mẹ (nếu có) kịp xâm nhập",
"Để trẻ đỡ khóc",
"Để trẻ tăng cân",
"Vì quy định bắt buộc không có lý do"
],
"answer": 0,
"explain": "Trẻ tiếp xúc máu dịch mẹ lúc sinh, tiêm sớm ngăn virus tấn công tế bào gan.",
"todo": "Tiêm vắc-xin sơ sinh đúng thời gian vàng.",
"when": "Tư vấn bác sĩ sản khoa.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-088",
"n": 88,
"topic": 6,
"q": "Vắc-xin viêm gan B có mức độ an toàn như thế nào đối với trẻ sơ sinh và người lớn?",
"options": [
"RẤT AN TOÀN, vắc-xin đã được kiểm định nghiêm ngặt toàn cầu",
"Rất độc hại",
"Gây suy thận ngay",
"Làm giảm trí nhớ"
],
"answer": 0,
"explain": "Vắc-xin VGB là vắc-xin tái tổ hợp an toàn, hiệu quả phòng bệnh lên đến 95%.",
"todo": "An tâm đăng ký tiêm chủng phòng bệnh.",
"when": "Tiêm chủng tại cơ sở y tế uy tín.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-089",
"n": 89,
"topic": 6,
"q": "Sau khi hoàn thành lịch tiêm vắc-xin viêm gan B, những nhóm đối tượng nào cần xét nghiệm kiểm tra đáp ứng miễn dịch và vào thời điểm nào?",
"options": [
"Xét nghiệm chỉ số Anti-HBs sau 1-2 tháng để xác định nồng độ kháng thể",
"Nhịn ăn 3 ngày",
"Không cần làm gì",
"Đi chụp X-quang"
],
"answer": 0,
"explain": "Thử Anti-HBs giúp khẳng định cơ thể đã tạo đủ lá chắn miễn dịch (≥ 10 IU/L).",
"todo": "Làm xét nghiệm Anti-HBs kiểm tra.",
"when": "Khám tại phòng xét nghiệm y tế.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-090",
"n": 90,
"topic": 6,
"q": "Người đã tiêm vắc-xin viêm gan B và có Anti-HBs trên 100 IU/L có cần tiêm nhắc lại ngay không?",
"options": [
"KHÔNG CẦN, mức kháng thể này bảo vệ rất tốt",
"Phải tiêm thêm 5 mũi",
"Uống thuốc kháng virus ngay",
"Tiêm mỗi tháng"
],
"answer": 0,
"explain": "Nồng độ > 100 IU/L cung cấp sự bảo vệ vững chắc kéo dài nhiều năm.",
"todo": "An tâm sinh hoạt, kiểm tra lại sau 5-10 năm nếu cần.",
"when": "Tư vấn tại trạm y tế.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-091",
"n": 91,
"topic": 6,
"q": "Tiêm vắc-xin viêm gan B có điều trị khỏi tình trạng nhiễm HBV ở người có HBsAg dương tính không?",
"options": [
"KHÔNG, vắc-xin dùng để phòng bệnh cho người chưa nhiễm chứ không có tác dụng chữa bệnh",
"Có, khỏi hẳn sau 1 ngày",
"Làm virus diệt sạch 100%",
"Biến thành người khác"
],
"answer": 0,
"explain": "Vắc-xin dạy hệ miễn dịch chưa nhiễm tạo kháng thể, không diệt virus đã đọng trong gan.",
"todo": "Không đi tiêm vắc-xin khi đã HBsAg (+), cần khám điều trị theo chỉ định bác sĩ.",
"when": "Khám chuyên khoa Gan mật.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-092",
"n": 92,
"topic": 6,
"q": "Những phản ứng thường gặp nào có thể xuất hiện sau khi tiêm vắc-xin viêm gan B?",
"options": [
"Sốt nhẹ, sưng đau nhẹ tại chỗ tiêm và tự hết sau 1-2 ngày",
"Gãy chân",
"Vàng da toàn thân",
"Rụng răng"
],
"answer": 0,
"explain": "Đây là phản ứng miễn dịch bình thường của cơ thể khi đáp ứng với vắc-xin.",
"todo": "Theo dõi nhiệt độ và chăm sóc trẻ nhẹ nhàng.",
"when": "Đưa trẻ đi khám nếu sốt cao > 39 độ hoặc lừ đừ.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-093",
"n": 93,
"topic": 6,
"q": "Vắc-xin viêm gan B có giúp phòng ngừa viêm gan A hoặc viêm gan C không?",
"options": [
"KHÔNG, vắc-xin viêm gan B chỉ phòng riêng virus viêm gan B",
"Bảo vệ khỏi tất cả các bệnh trên đời",
"Phòng được viêm gan A",
"Phòng được bệnh cúm"
],
"answer": 0,
"explain": "Mỗi loại vắc-xin có tính đặc hiệu riêng đối với từng loại virus.",
"todo": "Cần tiêm riêng vắc-xin viêm gan A nếu muốn phòng thêm.",
"when": "Tư vấn tiêm chủng tại cơ sở y tế.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-094",
"n": 94,
"topic": 6,
"q": "Trẻ em được tiêm vắc-xin viêm gan B trong Chương trình Tiêm chủng mở rộng theo lịch nào?",
"options": [
"Mũi sơ sinh trong 24h + Vắc-xin 5 trong 1 (hoặc 6 trong 1) lúc 2, 3, 4 tháng tuổi",
"Chỉ tiêm 1 mũi sơ sinh là xong",
"Tiêm khi tròn 18 tuổi",
"Không tiêm cho trẻ"
],
"answer": 0,
"explain": "Lịch tiêm phối hợp giúp duy trì nồng độ kháng thể bảo vệ trẻ lâu dài đến lớn.",
"todo": "Đưa trẻ đi tiêm chủng đầy đủ theo đúng lịch tiêm chủng mở rộng.",
"when": "Đăng ký tiêm tại Trạm Y tế phường/xã.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-095",
"n": 95,
"topic": 6,
"q": "Phụ nữ dự định mang thai có nên kiểm tra tình trạng miễn dịch và cân nhắc tiêm vắc-xin viêm gan B trước khi mang thai không?",
"options": [
"CÓ NÊN, nên tiêm trước khi mang thai để tạo kháng thể bảo vệ mẹ và con",
"Tuyệt đối không tiêm",
"Chỉ tiêm khi đang sinh",
"Không cần thiết"
],
"answer": 0,
"explain": "Tiêm trước mang thai giúp mẹ có sẵn lá chắn miễn dịch an toàn cho cả thai kỳ.",
"todo": "Thử máu và tiêm vắc-xin trước khi thụ thai.",
"when": "Khám tư vấn trước sinh tại cơ sở y tế.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-096",
"n": 96,
"topic": 6,
"q": "Nếu tiêm vắc-xin viêm gan B trễ lịch hoặc bỏ lỡ một mũi, người tiêm nên xử trí như thế nào?",
"options": [
"Tiêm bổ sung mũi tiếp theo càng sớm càng tốt, không cần tiêm lại từ đầu",
"Tiêm lại từ mũi 1 đủ 100 lần",
"Bỏ luôn không tiêm nữa",
"Uống thuốc thay thế"
],
"answer": 0,
"explain": "Hệ miễn dịch có trí nhớ miễn dịch, chỉ cần tiêm tiếp mũi còn thiếu.",
"todo": "Đến cơ sở tiêm chủng để tiêm bổ sung.",
"when": "Tư vấn tại trung tâm tiêm chủng.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-097",
"n": 97,
"topic": 6,
"q": "Trẻ sơ sinh có được tiêm vắc-xin viêm gan B miễn phí trong Chương trình Tiêm chủng mở rộng không?",
"options": [
"CÓ, mũi tiêm sơ sinh 24h đầu và các mũi 5 trong 1 được miễn phí trong Tiêm chủng mở rộng",
"Phải trả 100 triệu",
"Chỉ bán cho người giàu",
"Không có ở Việt Nam"
],
"answer": 0,
"explain": "Chính phủ bảo đảm vắc-xin VGB miễn phí cho mọi trẻ sơ sinh tại Việt Nam.",
"todo": "Đưa trẻ tiêm miễn phí tại Trạm Y tế hoặc bệnh viện công.",
"when": "Liên hệ Trạm y tế phường/xã.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-098",
"n": 98,
"topic": 6,
"q": "Vắc-xin viêm gan B có ảnh hưởng đến khả năng sinh sản không?",
"options": [
"KHÔNG, vắc-xin hoàn toàn không ảnh hưởng đến khả năng sinh sản",
"Có gây vô sinh 100%",
"Làm giảm chiều cao",
"Làm đổi nhóm máu"
],
"answer": 0,
"explain": "Vắc-xin đã qua hàng ngàn nghiên cứu khẳng định tính an toàn sinh sản tuyệt đối.",
"todo": "Yên tâm tiêm phòng bảo vệ sức khỏe.",
"when": "Tư vấn tại trạm y tế địa phương.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-099",
"n": 99,
"topic": 6,
"q": "Người suy giảm miễn dịch hoặc đang lọc máu chu kỳ có cần lịch hoặc liều vắc-xin viêm gan B riêng không?",
"options": [
"CÓ, cần tuân theo chỉ định và hướng dẫn của bác sĩ",
"Giống hệt người thường",
"Không bao giờ được tiêm",
"Tiêm 1/2 liều"
],
"answer": 0,
"explain": "Đáp ứng miễn dịch ở người suy thận/suy giảm miễn dịch yếu hơn nên cần phác đồ riêng.",
"todo": "Tuân thủ phác đồ tiêm chủng của bác sĩ điều trị.",
"when": "Khám tư vấn tại bệnh viện chuyên khoa.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-100",
"n": 100,
"topic": 6,
"q": "Vắc-xin viêm gan B cần được bảo quản ở khoảng nhiệt độ nào?",
"options": [
"Từ +2 độ C đến +8 độ C (không được làm đông đá)",
"Ở 100 độ C",
"Trong ngăn đá âm 20 độ C",
"Để ngoài nắng"
],
"answer": 0,
"explain": "Dây chuyền lạnh +2 đến +8 độ C giữ nguyên hiệu lực sinh học của vắc-xin.",
"todo": "Tiêm chủng tại các cơ sở đạt chuẩn GSP dây chuyền lạnh.",
"when": "Đến cơ sở tiêm chủng uy tín.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-101",
"n": 101,
"topic": 7,
"q": "Nếu vô tình bị kim tiêm đã qua sử dụng đâm hoặc đạp phải, người bị phơi nhiễm cần làm gì ngay sau đó?",
"options": [
"Rửa ngay vết thương dưới dòng nước sạch bằng xà phòng, tuyệt đối KHÔNG nặn bóp",
"Nặn bóp thật mạnh cho máu chảy ra",
"Băng kín lại không rửa",
"Rót chanh tươi vào vết thương"
],
"answer": 0,
"explain": "Nặn bóp làm dập mô khiến virus dễ chui sâu vào máu; rửa xà phòng giúp trôi mầm bệnh.",
"todo": "Rửa vết thương bằng xà phòng dưới nước chảy và giữ nguyên hiện trạng.",
"when": "Đến ngay cơ sở y tế trong vòng 24 giờ để được xử trí phơi nhiễm.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-102",
"n": 102,
"topic": 7,
"q": "Khi trong gia đình có người nhiễm HBV mạn tính, các thành viên còn lại nên thực hiện những biện pháp nào?",
"options": [
"Đi xét nghiệm HBsAg/Anti-HBs; nếu chưa nhiễm và chưa có kháng thể thì tiêm vắc-xin ngay",
"Bắt người bệnh ăn riêng mâm cách ly hoàn toàn",
"Đuổi người bệnh ra khỏi nhà",
"Nhịn ăn 3 ngày"
],
"answer": 0,
"explain": "Thử máu và tiêm vắc-xin tạo lá chắn an toàn 100% cho các thành viên sống chung.",
"todo": "Cùng gia đình đi xét nghiệm tầm soát và tiêm phòng.",
"when": "Khám đăng ký tiêm tại Trạm Y tế phường/xã.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-103",
"n": 103,
"topic": 7,
"q": "Khi làm móng tại tiệm, cần lưu ý những gì để phòng nguy cơ lây HBV?",
"options": [
"Chọn tiệm uy tín, yêu cầu dùng kềm riêng hoặc dụng cụ đã hấp tiệt trùng",
"Làm móng thoải mái không cần lo",
"Sơn móng màu đen",
"Rửa tay bằng nước trà"
],
"answer": 0,
"explain": "Dụng cụ làm móng dễ trầy xước niêm mạc dính máu vi thể lây truyền virus.",
"todo": "Mang theo bộ kềm móng cá nhân khi đi làm đẹp.",
"when": "Đến y tế tư vấn khi có nguy cơ phơi nhiễm.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-104",
"n": 104,
"topic": 7,
"q": "Khi cạo râu hoặc cắt tóc tại tiệm, cần chú ý điều gì để phòng lây nhiễm HBV?",
"options": [
"Yêu cầu thợ thay lưỡi dao cạo mới 100% trước khi cạo",
"Cạo râu bằng nước nóng",
"Dùng lại lưỡi dao cũ",
"Thoa phấn thơm"
],
"answer": 0,
"explain": "Lưỡi dao cạo cũ dính vệt máu khô của người trước dễ gây lây nhiễm HBV.",
"todo": "Nhắc thợ thay lưỡi dao cạo mới ngay trước mặt mình.",
"when": "Tư vấn tại trạm y tế khi có tổn thương dính máu.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-105",
"n": 105,
"topic": 7,
"q": "Khi xỏ khuyên hoặc xăm hình, cần bảo đảm những yêu cầu vệ sinh và an toàn nào?",
"options": [
"Cơ sở có trang thiết bị tiệt trùng, dùng kim xăm mới 1 lần bóc từ túi niêm phong",
"Xăm bằng kim khâu áo",
"Xăm ở chợ trời",
"Không dùng cồn sát trùng"
],
"answer": 0,
"explain": "Dụng cụ xâm lấn da phải đạt chuẩn vô trùng y tế để tuyệt đối không lây bệnh máu.",
"todo": "Lựa chọn cơ sở xăm/xỏ khuyên được cấp phép an toàn.",
"when": "Đến y tế kiểm tra nếu có dấu hiệu nhiễm trùng phơi nhiễm.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-106",
"n": 106,
"topic": 7,
"q": "Cần xử lý vết máu của người nhiễm HBV đổ trên sàn nhà như thế nào để hạn chế nguy cơ lây nhiễm?",
"options": [
"Mang găng tay, đổ dung dịch sát khuẩn chứa Clo (Javel) hoặc cồn 70 độ lên vết máu 20 phút rồi lau",
"Lau bằng nước lạnh",
"Để tự khô không lau",
"Quạt cho khô"
],
"answer": 0,
"explain": "Dung dịch sát khuẩn chứa Clo khử trùng tiêu diệt triệt để HBV trên bề mặt.",
"todo": "Sử dụng găng tay và dung dịch sát khuẩn lau sạch vết máu.",
"when": "Tư vấn tại trạm y tế phường.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-107",
"n": 107,
"topic": 7,
"q": "Khi một người trong cặp vợ chồng nhiễm HBV, hai người cần lưu ý gì trong quan hệ tình dục và sinh hoạt chung?",
"options": [
"Dùng bao cao su cho đến khi người bạn đời đi tiêm đủ vắc-xin và có Anti-HBs > 10 IU/L",
"Tuyệt đối cấm quan hệ",
"Không bao giờ lây qua quan hệ",
"Phải ly hôn"
],
"answer": 0,
"explain": "Vắc-xin tạo sức đề kháng giúp hai vợ chồng sinh hoạt bình thường an toàn hoàn toàn.",
"todo": "Đưa bạn đời đi thử máu và tiêm vắc-xin đủ mũi.",
"when": "Khám tư vấn tại y tế cơ sở.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-108",
"n": 108,
"topic": 7,
"q": "Dùng chung bấm móng tay với người nhiễm HBV có thể làm lây bệnh không?",
"options": [
"CÓ NGUY CƠ nếu bấm móng gây chảy máu rách da dính máu vi thể",
"Tuyệt đối không bao giờ lây",
"Chỉ lây vào ban đêm",
"Chỉ lây móng chân"
],
"answer": 0,
"explain": "Bấm móng tay có thể làm trầy xước xước mang da dính vệt máu khó thấy.",
"todo": "Mỗi người nên có bộ bấm móng tay riêng.",
"when": "Thử máu tầm soát cho gia đình.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-109",
"n": 109,
"topic": 7,
"q": "Dùng chung dao cạo râu với người nhiễm HBV có thể gây ra nguy cơ gì?",
"options": [
"CÓ NGUY CƠ LÂY NHIỄM CAO qua các vết trầy xước nhỏ trên da",
"Giúp cạo sạch hơn",
"Không nguy hiểm",
"Làm sáng da"
],
"answer": 0,
"explain": "Dao cạo râu luôn tạo ra vết thương vi thể chứa máu lây truyền virus rất mạnh.",
"todo": "Tách riêng dao cạo râu cá nhân.",
"when": "Tiêm vắc-xin cho người thân chưa nhiễm.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-110",
"n": 110,
"topic": 7,
"q": "Dùng chung bàn chải đánh răng có thể làm lây HBV không?",
"options": [
"CÓ NGUY CƠ vì bàn chải dễ dính máu từ nướu/răng bị viêm chảy máu",
"Không bao giờ lây",
"Giúp răng trắng hơn",
"Chỉ lây trẻ em"
],
"answer": 0,
"explain": "Chảy máu chân răng rất phổ biến, bàn chải dính máu là nguồn lây truyền nguy hiểm.",
"todo": "Tuyệt đối dùng riêng bàn chải đánh răng.",
"when": "Đến trạm y tế xét nghiệm tiêm phòng.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-111",
"n": 111,
"topic": 7,
"q": "Các vật sắc nhọn và rác thải có dính máu phát sinh tại nhà nên được thu gom, xử lý như thế nào?",
"options": [
"Cho vào túi niêm phong riêng ghi rõ rác dính máu trước khi vứt",
"Vứt ra đường",
"Vứt vào hồ bơi",
"Cho trẻ em chơi"
],
"answer": 0,
"explain": "Gói kín giúp bảo vệ nhân viên vệ sinh môi trường không bị đâm phải kim dính máu.",
"todo": "Bọc kín rác thải dính máu sắc nhọn.",
"when": "Tư vấn quản lý rác y tế tại trạm.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-112",
"n": 112,
"topic": 7,
"q": "Nếu máu của người khác bắn vào mắt hoặc niêm mạc miệng, cần sơ cứu và đi đánh giá phơi nhiễm như thế nào?",
"options": [
"Rửa ngay mắt/miệng liên tục bằng nước muối sinh lý hoặc nước sạch trong 10-15 phút",
"Dùng xà phòng gội đầu nhỏ vào mắt",
"Dùng ớt chà lên",
"Không làm gì"
],
"answer": 0,
"explain": "Rửa trôi ngay bằng nước sạch làm giảm thiểu tối đa mật độ virus tiếp xúc niêm mạc.",
"todo": "Rửa ngay bằng nước muối sinh lý liên tục.",
"when": "Đến ngay cơ sở y tế trong 24h để bác sĩ xử trí phơi nhiễm.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-113",
"n": 113,
"topic": 7,
"q": "Máu khô của người nhiễm HBV dính trên quần áo có thể làm lây bệnh khi tiếp xúc với vùng da lành không?",
"options": [
"KHÔNG LÂY nếu da lành lặn không trầy xước rách da",
"Lây xuyên qua da lành",
"Lây qua lông",
"Lây 100%"
],
"answer": 0,
"explain": "Da lành là hàng rào bảo vệ tự nhiên ngăn virus xâm nhập.",
"todo": "Giặt sạch quần áo dính máu bằng xà phòng giặt.",
"when": "Tư vấn thêm tại y tế cơ sở.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-114",
"n": 114,
"topic": 7,
"q": "Khi sơ cứu hoặc chăm sóc vết thương chảy máu cho người nhiễm HBV, cần thực hiện những biện pháp bảo vệ nào?",
"options": [
"Mang găng tay y tế trước khi chạm vào vết thương chảy máu",
"Dùng tay trần lau máu",
"Dùng lưỡi liếm vết thương",
"Bôi đường vào vết thương"
],
"answer": 0,
"explain": "Găng tay bảo vệ ngăn máu nhiễm virus tiếp xúc với kẽ da tay người chăm sóc.",
"todo": "Đeo găng tay khi xử lý vết thương dính máu.",
"when": "Tư vấn tại trạm y tế phường.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-115",
"n": 115,
"topic": 7,
"q": "Dùng chung kim chích máu hoặc dụng cụ trích máu để đo đường huyết tại nhà có an toàn không?",
"options": [
"TUYỆT ĐỐI KHÔNG, mỗi kim thử chỉ dùng 1 lần cho 1 người duy nhất",
"Dùng chung thoải mái",
"Luộc sôi dùng lại được",
"Lau khăn giấy là xong"
],
"answer": 0,
"explain": "Kim thử tiểu đường đâm trực tiếp vào máu gây lây nhiễm HBV 100% nếu dùng chung.",
"todo": "Mỗi người dùng bút/kim bấm thử đường huyết riêng biệt.",
"when": "Khám tư vấn tại y tế cơ sở.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-116",
"n": 116,
"topic": 7,
"q": "Nếu trẻ bị kim tiêm đã qua sử dụng đâm phải khi chơi ngoài công viên, cha mẹ cần xử trí như thế nào?",
"options": [
"Rửa sạch vết thương nước xà phòng, KHÔNG nặn bóp và đưa trẻ đi y tế trong 24h",
"Đánh trẻ",
"Đổ cồn đậm đặc làm cháy vết thương",
"Giấu không cho ai biết"
],
"answer": 0,
"explain": "Xử trí đúng cách và tiêm kháng huyết thanh/vắc-xin kịp thời giúp bảo vệ trẻ an toàn.",
"todo": "Rửa xà phòng dưới nước chảy và đưa trẻ đi khám gấp.",
"when": "Đến ngay trung tâm y tế quận/huyện trong 24h.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-117",
"n": 117,
"topic": 8,
"q": "Phụ nữ mang thai nhiễm HBV có thể truyền virus cho con không?",
"options": [
"CÓ NGUY CƠ LÂY NHIỄM, nhưng hoàn toàn có thể dự phòng hiệu quả nếu can thiệp đúng y tế",
"Chắc chắn 100% con bị nhiễm nặng",
"Tuyệt đối không lây",
"Chỉ lây bé trai"
],
"answer": 0,
"explain": "Can thiệp y tế đúng quy trình giúp bảo vệ em bé an toàn không bị nhiễm bệnh.",
"todo": "Thai phụ cần tầm soát HBsAg ngay trong 3 tháng đầu thai kỳ.",
"when": "Khám thai định kỳ tại các bệnh viện sản khoa.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-118",
"n": 118,
"topic": 8,
"q": "Phụ nữ mang thai có nên được xét nghiệm sàng lọc HBsAg không?",
"options": [
"CÓ, nên xét nghiệm ngay trong lần khám thai đầu tiên",
"Không cần vì tốn tiền",
"Chỉ xét nghiệm khi sắp sinh 1 phút",
"Chỉ xét nghiệm người lớn tuổi"
],
"answer": 0,
"explain": "Tầm soát sớm giúp phát hiện tình trạng nhiễm virus để bác sĩ lên kịch bản bảo vệ bé.",
"todo": "Xét nghiệm HBsAg khi phát hiện có thai.",
"when": "Khám tại Trạm y tế hoặc bệnh viện sản.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-119",
"n": 119,
"topic": 8,
"q": "Trẻ sinh từ mẹ có HBsAg dương tính cần được tiêm vắc-xin viêm gan B và HBIG vào thời điểm nào?",
"options": [
"Trong vòng 24 giờ đầu sau sinh (tốt nhất trong 12 giờ đầu)",
"Khi trẻ 1 tuổi",
"Khi trẻ đi học mẫu giáo",
"Sau 6 tháng"
],
"answer": 0,
"explain": "Tiêm ngay sau sinh tạo miễn dịch thụ động và chủ động chặn đứng virus từ mẹ.",
"todo": "Chuẩn bị tinh thần tiêm mũi sơ sinh cho bé ngay tại phòng sinh.",
"when": "Sinh con tại cơ sở y tế có vắc-xin và HBIG.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-120",
"n": 120,
"topic": 8,
"q": "Trẻ sinh từ mẹ nhiễm HBV đã được dự phòng bằng vắc-xin và HBIG có thể bú mẹ không?",
"options": [
"CÓ, trẻ hoàn toàn được cho bú sữa mẹ bình thường và an toàn",
"Tuyệt đối cấm cho bú",
"Chỉ uống nước lọc",
"Bắt bú sữa bò 100%"
],
"answer": 0,
"explain": "Kháng thể và vắc-xin tiêm ngay sau sinh đã bảo vệ bé an toàn khi bú sữa mẹ.",
"todo": "Cho bé bú sữa mẹ hoàn toàn để tận dụng nguồn dinh dưỡng quý giá.",
"when": "Khám tư vấn thai sản tại bệnh viện.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-121",
"n": 121,
"topic": 8,
"q": "Trẻ sinh từ mẹ nhiễm HBV cần được xét nghiệm HBsAg và Anti-HBs sau sinh vào thời điểm nào?",
"options": [
"Khi trẻ 7 đến 12 tháng tuổi (nếu tiêm vắc xin muộn lịch thì 1–2 tháng sau mũi cuối)",
"Khi mới sinh 1 giờ",
"Khi tròn 18 tuổi",
"Không cần kiểm tra lại"
],
"answer": 0,
"explain": "QĐ 678/QĐ-BYT hướng dẫn xét nghiệm HBsAg cho trẻ sinh ra từ mẹ nhiễm khi trẻ 7–12 tháng tuổi để khẳng định bé không nhiễm HBV.",
"todo": "Đưa trẻ đi thử máu đúng mốc 7–12 tháng tuổi; nếu bé tiêm vắc xin trễ lịch thì xét nghiệm sau khi hoàn thành mũi cuối 1–2 tháng.",
"when": "Khám tại Trạm Y tế phường hoặc bệnh viện nhi.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-122",
"n": 122,
"topic": 8,
"q": "Khi thai phụ có HBsAg dương tính, bác sĩ thường cần đánh giá thêm những xét nghiệm nào để quyết định có chỉ định dùng thuốc kháng virus?",
"options": [
"Xét nghiệm tải lượng virus HBV DNA (hoặc HBeAg)",
"Xét nghiệm nhóm máu",
"Thử nước tiểu",
"Đo chiều cao"
],
"answer": 0,
"explain": "Đo tải lượng virus (hoặc HBeAg) giúp bác sĩ quyết định có cần cho mẹ uống tenofovir dự phòng từ thai kỳ thứ 2 hay không (ngưỡng HBV DNA ≥ 200.000 IU/mL hoặc HBeAg dương tính).",
"todo": "Tuân thủ chỉ định xét nghiệm của bác sĩ phụ sản.",
"when": "Khám tại bệnh viện có chuyên khoa Truyền nhiễm/Sản.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-123",
"n": 123,
"topic": 8,
"q": "Thời điểm bắt đầu dùng tenofovir (TDF) để dự phòng lây truyền HBV từ mẹ sang con được xác định dựa trên những yếu tố nào?",
"options": [
"Thường bắt đầu từ thai kỳ thứ 2 (từ tuần thai thứ 14) khi HBV DNA ≥ 200.000 IU/mL hoặc HBeAg dương tính",
"Ngay khi mới cưới",
"Sau khi sinh 5 năm",
"Uống 1 lần duy nhất"
],
"answer": 0,
"explain": "Theo QĐ 678/QĐ-BYT và QĐ 1740/QĐ-BYT, tenofovir dự phòng bắt đầu từ thai kỳ thứ 2 càng sớm càng tốt (từ tuần thai thứ 14) và kéo dài đến ít nhất 3 tháng sau sinh; nếu không xét nghiệm được HBV DNA/HBeAg thì dùng cho mọi thai phụ HBsAg dương tính.",
"todo": "Uống thuốc đúng liều đúng giờ theo đơn bác sĩ.",
"when": "Theo dõi thai kỳ tại bệnh viện chuyên khoa.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-124",
"n": 124,
"topic": 8,
"q": "Khi có chỉ định, việc sử dụng tenofovir (TDF) trong thai kỳ cần được cân nhắc về tính an toàn như thế nào?",
"options": [
"RẤT AN TOÀN, đã được WHO và Bộ Y tế chứng minh không gây dị tật thai nhi",
"Rất độc hại gây dị tật",
"Làm thai nhi không phát triển",
"Gây sẩy thai 100%"
],
"answer": 0,
"explain": "TDF là thuốc ưu tiên hàng đầu an toàn tuyệt đối cho mẹ bầu và em bé.",
"todo": "Yên tâm uống thuốc theo chỉ định của bác sĩ.",
"when": "Khám thai định kỳ tại bệnh viện sản.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-125",
"n": 125,
"topic": 8,
"q": "Mẹ nhiễm HBV có cần sinh mổ để giảm nguy cơ lây truyền virus cho con không?",
"options": [
"KHÔNG BẮT BUỘC, mẹ vẫn có thể sinh thường nếu không có chỉ định phụ khoa khác",
"Bắt buộc 100% phải mổ",
"Sinh thường lây 100%",
"Không được sinh con"
],
"answer": 0,
"explain": "Phương pháp sinh thường hay mổ phụ thuộc vào chỉ định sản khoa, tiêm phòng sơ sinh mới là cốt lõi.",
"todo": "Thảo luận phương pháp sinh cùng bác sĩ phụ sản.",
"when": "Khám tại bệnh viện phụ sản uy tín.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-126",
"n": 126,
"topic": 8,
"q": "Trẻ sơ sinh có cân nặng dưới 2.000 g sinh từ mẹ nhiễm HBV cần được dự phòng sau sinh như thế nào?",
"options": [
"Cần được thăm khám và tuân thủ theo hướng dẫn của Bác sĩ tại các cơ sở y tế uy tín",
"Không bao giờ được tiêm",
"Tiêm gấp 10 lần liều",
"Bỏ không chăm sóc"
],
"answer": 0,
"explain": "Với trẻ sơ sinh nhẹ cân, bác sĩ nhi sơ sinh sẽ đánh giá để chọn lịch tiêm vắc xin và HBIG phù hợp; mọi trẻ đều cần được dự phòng đúng chỉ định.",
"todo": "Tuân thủ chỉ định khám chuyên khoa nhi sơ sinh.",
"when": "Khám tại bệnh viện Nhi/Sản uy tín.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-127",
"n": 127,
"topic": 8,
"q": "Khi thai phụ nhiễm HBV có tải lượng virus gần ngưỡng chỉ định dự phòng, bác sĩ sẽ cân nhắc xử trí dựa trên những yếu tố nào?",
"options": [
"Cần được thăm khám và tuân thủ theo hướng dẫn của Bác sĩ tại các cơ sở y tế uy tín",
"Tự mua thuốc uống gấp đôi",
"Ngừng ăn cơm",
"Tự ngưng khám thai"
],
"answer": 0,
"explain": "Trường hợp ranh giới cần bác sĩ chuyên khoa Truyền nhiễm và Sản khoa phối hợp đánh giá.",
"todo": "Đi khám chuyên khoa để bác sĩ tư vấn kịch bản an toàn.",
"when": "Khám tại BV Bệnh Nhiệt đới hoặc BV Phụ sản.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-128",
"n": 128,
"topic": 8,
"q": "Sau khi được tiêm HBIG và vắc-xin viêm gan B trong 24 giờ đầu, trẻ sinh từ mẹ nhiễm HBV có cần tiếp tục các mũi vắc-xin theo lịch không?",
"options": [
"CÓ, cần tiêm đủ các mũi vắc-xin viêm gan B tiếp theo theo lịch tiêm chủng mở rộng",
"Không cần tiêm nữa",
"Tiêm lại HBIG mỗi tháng",
"Bỏ lịch tiêm chủng"
],
"answer": 0,
"explain": "Các mũi vắc-xin tiếp theo giúp kích thích hệ miễn dịch của trẻ tạo ra kháng thể bảo vệ lâu dài.",
"todo": "Đưa trẻ tiêm chủng đúng lịch 2, 3, 4 tháng tuổi.",
"when": "Tiêm tại Trạm Y tế phường/xã.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-129",
"n": 129,
"topic": 8,
"q": "Nếu mẹ bị nứt đầu vú và chảy máu khi cho con bú, cần xử trí như thế nào để bảo đảm an toàn cho trẻ?",
"options": [
"Tạm dừng cho bú bên vú nứt, vắt bỏ sữa cho đến khi vết nứt lành hẳn rồi cho bú lại",
"Cho bé bú trực tiếp vết máu",
"Cai sữa vĩnh viễn",
"Bôi muối vào đầu ti"
],
"answer": 0,
"explain": "Tránh để trẻ nuốt trực tiếp máu từ vết nứt đầu ti của mẹ.",
"todo": "Vắt sữa giữ vệ sinh đầu vú lành lặn.",
"when": "Tham khảo tư vấn bác sĩ sản/nhi.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-130",
"n": 130,
"topic": 8,
"q": "Sau sinh, người mẹ đã dùng Thuốc kháng vi-rút TDF trong thai kỳ để dự phòng lây truyền HBV có nên tự ngừng thuốc ngay không?",
"options": [
"Tuân thủ theo đúng chỉ định theo dõi của bác sĩ chuyên khoa (có thể tiếp tục hoặc ngừng tùy thể bệnh)",
"Tự ý vứt hết thuốc ngay",
"Uống gấp 3 liều",
"Đổi sang uống rượu"
],
"answer": 0,
"explain": "Việc tiếp tục hay ngưng thuốc TDF sau sinh phụ thuộc mẹ là người mang virus mạn tính hay chỉ uống dự phòng ngắn hạn.",
"todo": "Tái khám chuyên khoa Truyền nhiễm sau sinh.",
"when": "Tái khám với bác sĩ chuyên khoa.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-131",
"n": 131,
"topic": 8,
"q": "Mẹ nhiễm HBV có thể ôm, hôn và chăm sóc trẻ hằng ngày không?",
"options": [
"HOÀN TOÀN ĐƯỢC, ôm hôn và chăm sóc không làm lây bệnh cho bé",
"Phải cách ly bé 5 năm",
"Đeo khẩu trang 24/24",
"Không được nhìn mặt con"
],
"answer": 0,
"explain": "Tình cảm mẹ con chăm sóc hàng ngày an toàn tuyệt đối khi bé đã tiêm phòng.",
"todo": "Yêu thương chăm sóc bé bình thường.",
"when": "Theo dõi sức khỏe định kỳ cho bé.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-132",
"n": 132,
"topic": 8,
"q": "Lợi ích chính của các biện pháp dự phòng lây truyền HBV từ mẹ sang con là gì?",
"options": [
"Giúp em bé lớn lên hoàn toàn khỏe mạnh, không bị nhiễm virus mạn tính từ nhỏ",
"Giúp bé thông minh hơn",
"Giúp mẹ tăng cân",
"Giảm chi phí mua sữa"
],
"answer": 0,
"explain": "Dự phòng thành công bảo vệ thế hệ tương lai khỏi nguy cơ xơ gan ung thư gan từ bé.",
"todo": "Thực hiện nghiêm túc phác đồ dự phòng PLTMC.",
"when": "Khám quản lý thai tại cơ sở y tế.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-133",
"n": 133,
"topic": 8,
"q": "Thai phụ nhiễm HBV nên chuẩn bị những thông tin và kế hoạch gì trước khi nhập viện sinh con?",
"options": [
"Mang theo hồ sơ khám thai có kết quả xét nghiệm HBsAg/HBV DNA để báo ngay cho y bác sĩ",
"Giấu không cho bác sĩ biết",
"Tự sinh tại nhà",
"Mua lá cây mang theo"
],
"answer": 0,
"explain": "Thông báo tình trạng nhiễm HBV giúp kíp sinh chuẩn bị sẵn vắc-xin và HBIG tiêm cho bé ngay.",
"todo": "Đưa hồ sơ y tế cho nhân viên y tế tại phòng sinh.",
"when": "Sinh tại bệnh viện có chuyên khoa sản.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-134",
"n": 134,
"topic": 9,
"q": "Có phải tất cả người nhiễm HBV mạn tính đều cần bắt đầu điều trị kháng virus ngay không?",
"options": [
"KHÔNG, chỉ uống thuốc khi virus hoạt động mạnh và có dấu hiệu/nguy cơ gây tổn thương gan",
"Bắt buộc 100% người nhiễm uống ngay",
"Không ai cần uống thuốc",
"Chỉ uống khi bị sốt"
],
"answer": 0,
"explain": "Thuốc kháng virus chỉ dùng khi có chỉ định y khoa, người mang virus không hoạt động chỉ cần theo dõi.",
"todo": "Đi khám để bác sĩ đánh giá xem có cần uống thuốc chưa.",
"when": "Tái khám định kỳ tại bệnh viện chuyên khoa.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-135",
"n": 135,
"topic": 9,
"q": "Người đang điều trị kháng virus HBV, dù cảm thấy khỏe và có men gan bình thường, có được tự ngừng thuốc không?",
"options": [
"TUYỆT ĐỐI KHÔNG, tự ý ngưng thuốc sẽ khiến virus bùng phát mạnh gây viêm gan cấp nguy hiểm",
"Được ngưng ngay",
"Ngưng thuốc uống lá cây",
"Giảm nửa liều"
],
"answer": 0,
"explain": "Khỏe mạnh là nhờ thuốc đang đè nén virus. Tự bỏ thuốc giống như thả lò xo bị nén bật lại dữ dội.",
"todo": "Duy trì uống thuốc đều đặn đúng giờ hàng ngày.",
"when": "Tái khám bác sĩ đúng hẹn.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-136",
"n": 136,
"topic": 9,
"q": "Thời gian điều trị bằng thuốc kháng virus ở người mắc viêm gan B mạn tính thường được quyết định như thế nào?",
"options": [
"Thường kéo dài nhiều năm hoặc suốt đời để duy trì đè nén virus",
"Uống đúng 3 ngày",
"Uống 1 tuần rồi nghỉ",
"Uống khi nào nhớ thì uống"
],
"answer": 0,
"explain": "Thuốc uống đè nén virus chứ chưa tiêu diệt triệt để ADN virus trong nhân tế bào gan.",
"todo": "Xây dựng thói quen uống thuốc đúng giờ như đánh răng hàng ngày.",
"when": "Tái khám mỗi 3-6 tháng tại cơ sở y tế.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-137",
"n": 137,
"topic": 9,
"q": "Tự ý ngừng thuốc kháng virus HBV có thể dẫn đến những hậu quả nào?",
"options": [
"Viêm gan bùng phát cấp tính, suy gan tiến triển, tăng nguy cơ kháng thuốc và tử vong",
"Làm da đẹp hơn",
"Giúp tăng chiều cao",
"Không có ảnh hưởng gì"
],
"answer": 0,
"explain": "Bỏ thuốc khiến virus nhân lên ồ ạt hủy hoại tế bào gan cấp tính.",
"todo": "Tuyệt đối tuân thủ uống thuốc đều đặn.",
"when": "Đến ngay bệnh viện nếu lỡ quên uống thuốc nhiều ngày.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-138",
"n": 138,
"topic": 9,
"q": "Người bệnh nên uống thuốc kháng virus HBV vào thời điểm nào trong ngày?",
"options": [
"Uống đúng một khung giờ cố định hàng ngày (ví dụ đúng 8 giờ tối) theo hướng dẫn bác sĩ",
"Lúc nào rảnh thì uống",
"Uống gộp 7 viên vào chủ nhật",
"Uống cùng rượu bia"
],
"answer": 0,
"explain": "Uống đúng giờ giúp duy trì nồng độ thuốc ổn định liên tục trong máu đè nén virus.",
"todo": "Đặt báo thức điện thoại nhắc giờ uống thuốc hàng ngày.",
"when": "Tư vấn dược sĩ/bác sĩ khi tái khám.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-139",
"n": 139,
"topic": 9,
"q": "Nếu quên uống một liều thuốc kháng virus HBV, người bệnh nên xử trí như thế nào?",
"options": [
"Uống ngay viên đó khi nhớ ra trong ngày; nếu gần liều tiếp theo thì uống liều sau, KHÔNG uống gấp đôi",
"Uống bù 10 viên cùng lúc",
"Bỏ luôn không uống nữa",
"Nhịn ăn 2 ngày"
],
"answer": 0,
"explain": "Không được tự ý uống gấp đôi liều vì dễ gây quá liều độc tính.",
"todo": "Uống ngay khi nhớ và duy trì lịch cũ. Hỏi ý kiến bác sĩ/dược sĩ tư vấn.",
"when": "Quên thuốc nhiều lần liên tiếp",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-140",
"n": 140,
"topic": 9,
"q": "Các loại nước lá hoặc thảo dược như cà gai leo, chó đẻ có thể thay thế thuốc kháng virus HBV không?",
"options": [
"KHÔNG NÊN, nước lá cây không diệt được virus và lạm dụng có thể gây độc cho gan",
"Phải bỏ thuốc tây uống lá cây 100%",
"Uống lá cây chữa khỏi hẳn",
"Nước lá cây tốt hơn thuốc tây"
],
"answer": 0,
"explain": "Nước lá không rõ nguồn gốc làm tăng gánh nặng thải độc cho gan đang bị viêm.",
"todo": "Uống thuốc kháng virus theo đúng đơn bác sĩ.",
"when": "Hỏi ý kiến bác sĩ trước khi dùng thực phẩm chức năng.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-141",
"n": 141,
"topic": 9,
"q": "Tự mua thuốc kháng virus HBV trên mạng và sử dụng khi không có chỉ định của bác sĩ có thể gây ra rủi ro gì?",
"options": [
"RẤT NGUY HIỂM, dễ mua phải thuốc giả, sai liều (liều thuốc được tính toán dựa trên cân nặng, thể trạng từng người) và không được theo dõi độc tính",
"Rất tốt và tiết kiệm",
"Thuốc nào cũng giống nhau",
"Nên mua tích trữ"
],
"answer": 0,
"explain": "Điều trị viêm gan B cần được bác sĩ chuyên khoa kê đơn và theo dõi sát.",
"todo": "Khám và lấy thuốc tại cơ sở y tế chuẩn BHYT.",
"when": "Đến bệnh viện khám kê đơn.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-142",
"n": 142,
"topic": 9,
"q": "Những yếu tố nào có thể dẫn đến thất bại điều trị hoặc kháng thuốc trong điều trị HBV?",
"options": [
"Do uống thuốc không đều đặn, tự ý bỏ thuốc hoặc uống sai liều kéo dài",
"Do ăn nhiều rau xanh",
"Do tập thể dục",
"Do uống nhiều nước lọc"
],
"answer": 0,
"explain": "Uống thuốc chập chờn tạo điều kiện cho các chủng virus đột biến kháng thuốc phát triển.",
"todo": "Tuân thủ uống thuốc chính xác 100%.",
"when": "Khám bác sĩ khi nghi ngờ thuốc giảm tác dụng.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-143",
"n": 143,
"topic": 9,
"q": "Người đang điều trị kháng virus HBV cần được xét nghiệm và tái khám theo dõi như thế nào?",
"options": [
"CÓ, cần tái khám thử máu và siêu âm mỗi 3-6 tháng để đánh giá hiệu quả và độ an toàn",
"Không cần vì đã uống thuốc rồi",
"50 năm mới khám 1 lần",
"Chỉ khám khi ngất xỉu"
],
"answer": 0,
"explain": "Tái khám giúp bác sĩ kiểm tra nồng độ virus, men gan và chức năng thận.",
"todo": "Đi tái khám đúng theo lịch hẹn trên sổ khám.",
"when": "Tái khám tại y tế cơ sở/bệnh viện.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-144",
"n": 144,
"topic": 9,
"q": "Người nhiễm HBV phải hóa trị ung thư hoặc sử dụng thuốc ức chế miễn dịch có thể đối mặt với nguy cơ gì?",
"options": [
"Cần được thăm khám và tuân thủ theo hướng dẫn của Bác sĩ tại các cơ sở y tế uy tín",
"Tự ngưng tất cả các loại thuốc",
"Không cần quan tâm",
"Uống thêm nước mắm"
],
"answer": 0,
"explain": "Thuốc ức chế miễn dịch làm giảm sức đề kháng, virus HBV dễ bùng phát đe dọa tính mạng.",
"todo": "Tuân thủ chỉ định theo dõi của bác sĩ chuyên khoa Truyền nhiễm và Ung bướu.",
"when": "Khám chuyên khoa tại bệnh viện uy tín.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-145",
"n": 145,
"topic": 9,
"q": "Thuốc kháng virus điều trị HBV có thường ảnh hưởng đến khả năng lái xe hoặc làm việc không?",
"options": [
"Đa số thuốc uống NAs thế hệ mới rất lành tính, không gây buồn ngủ hay ảnh hưởng công việc",
"Gây lơ mơ không làm được gì",
"Gây mù mắt",
"Gây điếc"
],
"answer": 0,
"explain": "Các thuốc NAs dung nạp tốt giúp người bệnh sinh hoạt làm việc hoàn toàn bình thường.",
"todo": "An tâm lao động và sinh hoạt.",
"when": "Báo bác sĩ nếu có tác dụng phụ bất thường.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-146",
"n": 146,
"topic": 9,
"q": "Người đang dùng thuốc điều trị HBV cần lưu ý gì khi được kê thêm thuốc chữa các bệnh khác?",
"options": [
"Thông báo cho bác sĩ khám biết mình đang uống thuốc viêm gan B để tránh tương tác thuốc",
"Tự mua ngẫu nhiên các loại thuốc uống",
"Ngưng thuốc viêm gan B để uống thuốc cảm",
"Uống gấp 5 liều"
],
"answer": 0,
"explain": "Một số thuốc chuyển hóa qua gan có thể tương tác hoặc gây độc cho gan.",
"todo": "Đưa đơn thuốc viêm gan B cho bác sĩ khám bệnh khác xem.",
"when": "Tư vấn bác sĩ/dược sĩ khi mua thuốc.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-147",
"n": 147,
"topic": 9,
"q": "Người sử dụng một số thuốc kháng virus HBV cần theo dõi chức năng thận và sức khỏe xương như thế nào?",
"options": [
"Tái khám định kỳ thử chỉ số chức năng thận (Creatinine) và độ lọc cầu thận theo chỉ định",
"Không cần theo dõi",
"Tự mua thuốc bổ thận uống",
"Nhịn uống nước"
],
"answer": 0,
"explain": "Bác sĩ sẽ định kỳ kiểm tra thận để điều chỉnh liều hoặc đổi thuốc an toàn nếu cần.",
"todo": "Đi thử máu định kỳ theo hẹn bác sĩ.",
"when": "Tái khám tại y tế cơ sở/bệnh viện.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-148",
"n": 148,
"topic": 9,
"q": "Người bệnh có nên tự đổi sang thuốc kháng virus HBV khác theo lời khuyên của người quen không?",
"options": [
"TUYỆT ĐỐI KHÔNG, việc đổi thuốc phải do bác sĩ chuyên khoa quyết định dựa trên xét nghiệm",
"Đổi thoải mái theo thích",
"Đổi thuốc mỗi tuần",
"Uống gộp 2 loại"
],
"answer": 0,
"explain": "Tự đổi thuốc dễ gây kháng thuốc chéo và đợt bùng phát viêm gan.",
"todo": "Chỉ uống đúng loại thuốc bác sĩ kê đơn.",
"when": "Tái khám tư vấn bác sĩ chuyên khoa.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-149",
"n": 149,
"topic": 9,
"q": "Người nhiễm HBV chưa có chỉ định điều trị có cần kiêng khem ăn uống quá mức không?",
"options": [
"Không cần kiêng khem ăn uống quá mức, chỉ cần kiêng tuyệt đối rượu bia và tái khám định kỳ",
"Nhịn ăn thịt cá 100%",
"Chỉ ăn cơm trắng muối vừng",
"Uống lá cây thay cơm"
],
"answer": 0,
"explain": "Kiêng khem quá mức gây suy dinh dưỡng làm giảm sức đề kháng của cơ thể.",
"todo": "Ăn uống đủ 4 nhóm chất dinh dưỡng.",
"when": "Tái khám theo dõi 3-6 tháng/lần.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-150",
"n": 150,
"topic": 9,
"q": "Chi phí thuốc kháng virus điều trị viêm gan B có thể được Bảo hiểm y tế chi trả trong những trường hợp nào?",
"options": [
"CÓ, BHYT chi trả thuốc kháng virus theo danh mục quy định tại cả tuyến cơ sở và tuyến trên",
"BHYT không trả 1 đồng nào",
"Chỉ trả cho người giàu",
"Phải mua bằng tiền mặt 100%"
],
"answer": 0,
"explain": "BHYT giúp giảm đáng kể gánh nặng tài chính cho người bệnh điều trị lâu dài.",
"todo": "Tham gia BHYT liên tục và khám đúng tuyến BHYT.",
"when": "Đến Trạm Y tế/Trung tâm Y tế quận huyện.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-151",
"n": 151,
"topic": 10,
"q": "Người nhiễm HBV nên tránh loại đồ uống nào vì có thể làm tăng nguy cơ tổn thương gan?",
"options": [
"Rượu, bia và tất cả các đồ uống có cồn",
"Nước lọc",
"Nước dừa",
"Sữa tươi"
],
"answer": 0,
"explain": "Cồn tác động trực tiếp gây độc tế bào gan, đẩy nhanh quá trình xơ gan và ung thư gan.",
"todo": "Kiêng tuyệt đối hoặc hạn chế tối đa rượu bia.",
"when": "Tư vấn lối sống tại y tế cơ sở.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-152",
"n": 152,
"topic": 10,
"q": "Người nhiễm HBV nên duy trì chế độ ăn uống như thế nào để bảo đảm dinh dưỡng và sức khỏe?",
"options": [
"Ăn uống cân đối, đủ 4 nhóm chất (đường bột, đạm, béo tốt, vitamin & khoáng chất)",
"Chỉ ăn rau luộc nhịn đạm",
"Ăn thật nhiều mỡ động vật",
"Ăn mặn thật nhiều"
],
"answer": 0,
"explain": "Dinh dưỡng đầy đủ giúp tế bào gan có nguyên liệu tái tạo và duy trì sức đề kháng.",
"todo": "Ăn đa dạng thực phẩm tươi sạch.",
"when": "Khám tư vấn dinh dưỡng tại y tế.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-153",
"n": 153,
"topic": 10,
"q": "Người nhiễm HBV có cần kiêng hoàn toàn thịt đỏ và trứng không?",
"options": [
"KHÔNG CẦN, vẫn cần ăn lượng đạm vừa đủ từ thịt, cá, trứng, đậu để tái tạo tế bào gan",
"Cấm ăn thịt trứng 100%",
"Chỉ ăn mỡ lợn",
"Không ăn gì cả"
],
"answer": 0,
"explain": "Đạm giúp gan tổng hợp đạm albumin và duy trì cơ bắp, không nên kiêng cực đoan.",
"todo": "Ăn cân đối đạm động vật và thực vật.",
"when": "Tư vấn dinh dưỡng khi tái khám.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-154",
"n": 154,
"topic": 10,
"q": "Khi bị sốt hoặc đau đầu, người nhiễm HBV cần lưu ý gì trước khi dùng paracetamol?",
"options": [
"Không dùng quá 2g/ngày (tối đa 4 viên 500mg), không uống kéo dài và không uống cùng rượu",
"Uống 20 viên/ngày",
"Uống cùng rượu bia cho nhanh khỏi",
"Uống liên tục 1 tháng"
],
"answer": 0,
"explain": "Paracetamol chuyển hóa qua gan, dùng liều cao hoặc uống cùng rượu dễ gây ngộ độc suy gan cấp.",
"todo": "Dùng đúng liều chỉ dẫn và khoảng cách giữa các lần uống ít nhất 4-6 giờ.",
"when": "Hỏi ý kiến dược sĩ/bác sĩ khi mua thuốc.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-155",
"n": 155,
"topic": 10,
"q": "Hút thuốc lá có thể ảnh hưởng như thế nào đến sức khỏe của người nhiễm HBV?",
"options": [
"CÓ, chất độc trong thuốc lá làm tăng độc tính trên gan và tăng nguy cơ ung thư gan",
"Thuốc lá diệt được virus",
"Không ảnh hưởng gì",
"Giúp gan khỏe hơn"
],
"answer": 0,
"explain": "Khói thuốc lá chứa hàng ngàn hóa chất độc hại gây stress oxy hóa tế bào gan.",
"todo": "Nói không với thuốc lá và thuốc lá điện tử.",
"when": "Tư vấn tư vấn bỏ thuốc tại y tế.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-156",
"n": 156,
"topic": 10,
"q": "Người nhiễm HBV có nên duy trì giờ ngủ và thời gian nghỉ ngơi phù hợp không?",
"options": [
"CÓ, thức khuya làm gián đoạn thời gian nghỉ ngơi và tự phục hồi chuyển hóa của gan",
"Thức khuya giúp gan mát hơn",
"Không có ảnh hưởng",
"Giúp diệt virus"
],
"answer": 0,
"explain": "Ban đêm là lúc lưu lượng máu về gan tăng lên để thực hiện chức năng giải độc tái tạo.",
"todo": "Tập thói quen ngủ sớm trước 11 giờ đêm, ngủ đủ 7-8 tiếng.",
"when": "Duy trì lối sống lành mạnh.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-157",
"n": 157,
"topic": 10,
"q": "Người mắc viêm gan B có nên duy trì hoạt động thể lực thường xuyên không?",
"options": [
"CÓ NÊN, tập luyện nhẹ nhàng vừa sức giúp tăng cường miễn dịch và giảm mỡ gan",
"Tuyệt đối nằm yên không vận động",
"Tập tạ nặng 10 tiếng/ngày",
"Chạy marathon khi đang cấp tính"
],
"answer": 0,
"explain": "Vận động nhẹ nhàng (đi bộ, đạp xe, yoga) cải thiện tuần hoàn và sức khỏe tổng thể.",
"todo": "Tập thể dục 30 phút mỗi ngày vừa sức.",
"when": "Tham khảo bác sĩ tập luyện phù hợp.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-158",
"n": 158,
"topic": 10,
"q": "Thừa cân, béo phì và gan nhiễm mỡ có thể ảnh hưởng như thế nào đến người nhiễm HBV?",
"options": [
"Làm tổn thương gan tiến triển nhanh hơn, tăng nguy cơ xơ gan so với người không béo phì",
"Giúp bảo vệ gan tốt hơn",
"Không liên quan đến gan",
"Làm virus biến mất"
],
"answer": 0,
"explain": "Mỡ tích tụ trong tế bào gan gây viêm mỡ, cộng hưởng với virus làm chai gan nhanh hơn.",
"todo": "Kểm soát cân nặng hợp lý, giảm đồ ngọt mỡ.",
"when": "Khám theo dõi mỡ máu mỡ gan.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-159",
"n": 159,
"topic": 10,
"q": "Người nhiễm HBV nên uống nước hằng ngày như thế nào để phù hợp với tình trạng sức khỏe?",
"options": [
"CÓ, uống đủ 1.5 - 2 lít nước/ngày giúp hỗ trợ quá trình đào thải chất độc của cơ thể",
"Chỉ uống nước ngọt có ga",
"Nhịn uống nước",
"Chỉ uống rượu"
],
"answer": 0,
"explain": "Nước lọc giúp thận và gan làm việc hiệu quả, duy trì thể tích tuần hoàn tốt.",
"todo": "Uống nước lọc đều đặn trong ngày.",
"when": "Tư vấn tại y tế cơ sở.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-160",
"n": 160,
"topic": 10,
"q": "Thực phẩm bị nấm mốc như lạc, đậu hoặc ngô mốc có thể chứa độc tố nào gây hại cho gan?",
"options": [
"Chứa độc tố Aflatoxin - chất gây ung thư gan cực kỳ mạnh",
"Chứa Vitamin C",
"Không có độc tố",
"Chứa đạm tốt"
],
"answer": 0,
"explain": "Aflatoxin từ nấm mốc cộng hưởng với virus HBV làm nguy cơ ung thư gan tăng gấp bội.",
"todo": "Tuyệt đối bỏ thực phẩm mốc chớm nấm.",
"when": "Chú ý bảo quản thực phẩm khô.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-161",
"n": 161,
"topic": 10,
"q": "Ăn thực phẩm sống hoặc chưa nấu chín kỹ có thể gây ra những nguy cơ sức khỏe nào ở người mắc bệnh gan?",
"options": [
"Dễ bị nhiễm ký sinh trùng (sán lá gan) và vi khuẩn gây đợt viêm gan nhiễm trùng nặng",
"Giúp diệt virus HBV",
"Rất bổ cho gan",
"Không có hại"
],
"answer": 0,
"explain": "Sán lá gan và vi khuẩn gây tổn thương đường mật và nhu mô gan chồng chất.",
"todo": "Ăn chín uống sôi, hạn chế đồ sống tái.",
"when": "Đi khám xét nghiệm ký sinh trùng nếu có triệu chứng.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-162",
"n": 162,
"topic": 10,
"q": "Người nhiễm HBV có nên kiểm tra đường huyết và mỡ máu định kỳ không?",
"options": [
"CÓ, để phát hiện và kiểm soát sớm Đái tháo đường và Rối loạn mỡ máu kèm theo nếu có",
"Không cần thiết",
"Chỉ thử khi ngất",
"Thử đường huyết làm yếu gan"
],
"answer": 0,
"explain": "Tiểu đường và mỡ máu cao là các yếu tố nguy cơ tim mạch và độc gan đồng thời.",
"todo": "Thử đường huyết và mỡ máu định kỳ khi tái khám.",
"when": "Khám tại y tế cơ sở/bệnh viện.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-163",
"n": 163,
"topic": 10,
"q": "Căng thẳng kéo dài có thể ảnh hưởng như thế nào đến sức khỏe và việc quản lý bệnh ở người nhiễm HBV?",
"options": [
"CÓ, stress làm suy giảm hệ miễn dịch khiến cơ thể khó đè nén virus hơn",
"Stress giúp diệt virus",
"Không ảnh hưởng",
"Stress làm gan khỏe hơn"
],
"answer": 0,
"explain": "Hệ thần kinh và miễn dịch liên quan chặt chẽ; thư giãn giúp nâng cao sức đề kháng.",
"todo": "Giữ tinh thần thoải mái, thiền, nghe nhạc, tập thở.",
"when": "Tư vấn tâm lý y tế khi cần.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-164",
"n": 164,
"topic": 10,
"q": "Hạn chế muối trong chế độ ăn có vai trò gì đối với người mắc xơ gan?",
"options": [
"Giúp giảm bớt sự tích tụ nước, ngăn ngừa và giảm tình trạng phù chân, cổ trướng",
"Làm gan bị khô",
"Giúp tăng huyết áp",
"Không có tác dụng"
],
"answer": 0,
"explain": "Muối giữ nước trong cơ thể, ăn giảm muối giúp kiểm soát phù và tráng dịch ổ bụng.",
"todo": "Ăn nhạt, giảm nước mắm muối trong nêm nấu.",
"when": "Theo dõi hướng dẫn dinh dưỡng bác sĩ.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-165",
"n": 165,
"topic": 10,
"q": "Người nhiễm HBV có nên tự ý sử dụng thuốc bổ hoặc vitamin liều cao khi chưa được tư vấn y tế không?",
"options": [
"KHÔNG NÊN, một số vitamin tích lũy (như Vitamin A liều cao) có thể gây độc cho gan",
"Uống càng nhiều càng tốt",
"Vitamin không bao giờ có hại",
"Uống thay cơm"
],
"answer": 0,
"explain": "Dùng thừa vitamin tan trong dầu tích tụ tại gan gây tổn thương tế bào gan.",
"todo": "Dùng vitamin theo đúng liều lượng khuyến cáo.",
"when": "Tư vấn bác sĩ/dược sĩ.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-166",
"n": 166,
"topic": 10,
"q": "Lối sống lành mạnh có thể hỗ trợ sức khỏe người nhiễm HBV như thế nào?",
"options": [
"Giúp hệ miễn dịch giữ vững trạng thái đè nén virus, ngăn virus bùng phát hoạt động trở lại",
"Diệt sạch virus 100% sau 1 ngày",
"Không có ích gì",
"Biến HBV thành vi khuẩn"
],
"answer": 0,
"explain": "Sức đề kháng tốt là chìa khóa giữ cho virus nằm yên im lặng lâu dài.",
"todo": "Duy trì lối sống lành mạnh bền vững.",
"when": "Tái khám định kỳ 3-6 tháng.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-167",
"n": 167,
"topic": 11,
"q": "Người nhiễm HBV có thể kết hôn và xây dựng gia đình như bình thường không?",
"options": [
"HOÀN TOÀN ĐƯỢC, có quyền kết hôn và sinh con an toàn khi được tư vấn y tế đúng",
"Bị cấm kết hôn trọn đời",
"Chỉ được kết hôn với người cùng bệnh",
"Phải cách ly hoàn toàn"
],
"answer": 0,
"explain": "Viêm gan B không phải là rào cản kết hôn khi bạn tình được tiêm vắc-xin bảo vệ.",
"todo": "Đưa bạn đời đi thử máu và tiêm vắc-xin trước khi cưới.",
"when": "Tư vấn sức khỏe tiền hôn nhân tại y tế cơ sở.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-168",
"n": 168,
"topic": 11,
"q": "Việc tuyển dụng hoặc chấm dứt hợp đồng lao động với người nhiễm HBV cần tuân thủ những nguyên tắc nào?",
"options": [
"KHÔNG ĐƯỢC, việc từ chối hay sa thải chỉ vì nhiễm HBV là hành vi kỳ thị không đúng quy định",
"Được sa thải ngay",
"Được phạt tiền",
"Được công khai danh tính"
],
"answer": 0,
"explain": "HBV không lây qua giao tiếp công sở thông thường, người bệnh hoàn toàn có quyền lao động bình thường, các vị trí công việc, ngành nghề đặc thù được quy định rõ trong các văn bản hướng dẫn của pháp luật với các tiêu chuẩn sức khỏe riêng, quy trình riêng.",
"todo": "Yên tâm làm việc và cống hiến.",
"when": "Tư vấn pháp lý/y tế khi bị phân biệt đối xử.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-169",
"n": 169,
"topic": 11,
"q": "Gia đình có người nhiễm HBV có cần ăn riêng bát đũa hoặc luộc riêng dụng cụ ăn uống không?",
"options": [
"KHÔNG NÊN, đây là hành vi kỳ thị không cần thiết vì bệnh không lây qua đường ăn uống",
"Bắt buộc phải ăn riêng 100%",
"Phải nhốt vào phòng riêng",
"Đuổi ra khỏi nhà"
],
"answer": 0,
"explain": "Kỳ thị trong gia đình làm tổn thương tâm lý người bệnh mà không có tác dụng phòng bệnh.",
"todo": "Đối xử bình đẳng, ăn uống chung mâm ấm áp.",
"when": "Đưa người nhà đi tiêm vắc-xin phòng bệnh.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-170",
"n": 170,
"topic": 11,
"q": "Viêm gan B có phải là bệnh liên quan đến tệ nạn xã hội hoặc hành vi vi phạm đạo đức không?",
"options": [
"KHÔNG, viêm gan B là một bệnh truyền nhiễm y khoa thông thường do virus gây ra",
"Đúng là bệnh tệ nạn",
"Do ăn ở không tốt",
"Do bị trừng phạt"
],
"answer": 0,
"explain": "HBV là virus sinh học lây truyền y tế, không liên quan đến đạo đức hay nhân cách.",
"todo": "Nhìn nhận bệnh đúng bản chất y khoa khoa học.",
"when": "Tuyên truyền thông tin đúng cho cộng đồng.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-171",
"n": 171,
"topic": 11,
"q": "Kỳ thị và xa lánh người nhiễm HBV có thể gây ra những hậu quả nào đối với cá nhân và cộng đồng?",
"options": [
"Làm người nhiễm giấu bệnh, không đi khám và không chủ động tiêm phòng cho gia đình",
"Giúp bệnh nhân mau khỏi bệnh",
"Giúp diệt sạch virus",
"Không có ảnh hưởng gì"
],
"answer": 0,
"explain": "Sự kỳ thị tạo ra tâm lý sợ hãi, giấu bệnh khiến dịch bệnh ngầm lây lan nhiều hơn.",
"todo": "Cởi mở, thấu hiểu và hỗ trợ người nhiễm HBV.",
"when": "Tích cực lan tỏa thông điệp văn minh.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-172",
"n": 172,
"topic": 11,
"q": "Người nhiễm HBV có thể tham gia các hoạt động thể thao và sinh hoạt cộng đồng không?",
"options": [
"HOÀN TOÀN ĐƯỢC tham gia bình thường tất cả các hoạt động thể thao văn hóa",
"Bị cấm tham gia",
"Chỉ được xem tivi một mình",
"Phải đeo khẩu trang kín"
],
"answer": 0,
"explain": "Thể thao và văn nghệ cộng đồng giúp nâng cao sức khỏe và tinh thần, an toàn 100%.",
"todo": "Hăng hái tham gia phong trào cộng đồng.",
"when": "Duy trì tập luyện nâng cao thể chất.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-173",
"n": 173,
"topic": 11,
"q": "Trẻ em nhiễm HBV có thể đi học mẫu giáo và học tập cùng các bạn không?",
"options": [
"HOÀN TOÀN ĐƯỢC đi học bình thường, không được phân biệt đối xử",
"Cấm không cho đi học",
"Phải học trường riêng biệt",
"Phải ngồi bàn cuối cách ly"
],
"answer": 0,
"explain": "Trẻ em có quyền được đến trường học tập vui chơi bình thường cùng bạn bè.",
"todo": "Cho trẻ đến trường đi học hòa nhập.",
"when": "Tư vấn giáo viên hiểu đúng về đường lây.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-174",
"n": 174,
"topic": 11,
"q": "Quan niệm “nhiễm viêm gan B là đồng nghĩa với án tử hình” có chính xác không?",
"options": [
"SAI HOÀN TOÀN, đa số người nhiễm nếu được quản lý y tế tốt đều sống thọ khỏe mạnh",
"Đúng 100%",
"Chắc chắn tử vong sau 1 ngày",
"Bệnh không thể điều trị"
],
"answer": 0,
"explain": "Với sự phát triển y học hiện nay, viêm gan B hoàn toàn quản lý kiểm soát được dễ dàng.",
"todo": "Xóa bỏ tâm lý bi quan tiêu cực.",
"when": "Đến cơ sở y tế khám quản lý định kỳ.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-175",
"n": 175,
"topic": 11,
"q": "Người nhiễm HBV nên trao đổi với bạn đời về tình trạng nhiễm bệnh và biện pháp dự phòng như thế nào?",
"options": [
"NÊN CHIA SẺ cởi mở để bạn đời đi thử máu và tiêm vắc-xin tạo kháng thể bảo vệ",
"Tuyệt đối giấu kín",
"Nói dối là bệnh khác",
"Hủy hôn ngay"
],
"answer": 0,
"explain": "Chia sẻ thể hiện sự trách nhiệm và tình yêu thương để cùng bảo vệ nhau an toàn.",
"todo": "Cùng bạn đời đi khám sức khỏe tiền hôn nhân.",
"when": "Tư vấn tiêm phòng tại trạm y tế.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-176",
"n": 176,
"topic": 11,
"q": "Sinh viên nhiễm HBV có thể sinh hoạt trong ký túc xá cùng các bạn không?",
"options": [
"KHÔNG BỊ CẤM, sinh hoạt ký túc xá giao tiếp thông thường an toàn tuyệt đối",
"Bị cấm 100%",
"Phải ở phòng riêng biệt",
"Phải nghỉ học"
],
"answer": 0,
"explain": "Sinh hoạt ký túc xá không lây bệnh vì virus không lây qua không khí hay ăn uống chung.",
"todo": "Yên tâm ở ký túc xá sinh hoạt học tập.",
"when": "Không dùng chung dao cạo, bàn chải.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-177",
"n": 177,
"topic": 11,
"q": "Làm việc cùng phòng với đồng nghiệp nhiễm HBV có làm phát sinh nguy cơ lây nhiễm thông thường không?",
"options": [
"KHÔNG CẦN, ngồi cùng phòng, làm việc chung máy tính, bắt tay an toàn tuyệt đối",
"Chuyển sang công ty khác ngay",
"Đeo mặt nạ phòng độc",
"Nghỉ việc"
],
"answer": 0,
"explain": "Giao tiếp văn phòng công sở không có nguy cơ lây nhiễm virus HBV.",
"todo": "Thoải mái hợp tác làm việc cùng đồng nghiệp.",
"when": "Tuyên truyền thông tin chuẩn cho công ty.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-178",
"n": 178,
"topic": 11,
"q": "Việc dán nhãn cảnh báo hoặc phong tỏa nhà ở của người nhiễm HBV có căn cứ và phù hợp với quy định hiện hành không?",
"options": [
"SAI QUY ĐỊNH, đây là hành vi vi phạm pháp luật và gây kỳ thị trầm trọng",
"Đúng quy định",
"Nên dán ở mọi nhà",
"Khuyến khích làm"
],
"answer": 0,
"explain": "Viêm gan B không phải bệnh dịch truyền nhiễm đường hô hấp cần cách ly phong tỏa.",
"todo": "Tẩy chay các hành vi kỳ thị sai trái.",
"when": "Báo cáo cơ quan y tế địa phương.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-179",
"n": 179,
"topic": 11,
"q": "Người nhiễm HBV có nên vì mặc cảm mà trì hoãn hoặc tránh đi khám, theo dõi sức khỏe không?",
"options": [
"KHÔNG NÊN, cần tự tin đến cơ sở y tế để được theo dõi và bảo vệ sức khỏe bản thân",
"Nên trốn tránh suốt đời",
"Tự mua thuốc nam uống",
"Bỏ mặc bản thân"
],
"answer": 0,
"explain": "Khám y tế giúp chủ động kiểm soát virus, ngưng tiến triển bệnh hiệu quả.",
"todo": "Tự tin chủ động đi khám định kỳ.",
"when": "Khám tại Trạm Y tế/Bệnh viện gần nhất.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-180",
"n": 180,
"topic": 11,
"q": "Môi trường xã hội thân thiện, không kỳ thị có thể hỗ trợ công tác phòng, chống HBV như thế nào?",
"options": [
"Khuyến khích mọi người tự giác đi xét nghiệm, tiêm phòng và tuân thủ điều trị tốt hơn",
"Làm virus lây nhanh hơn",
"Không có tác dụng",
"Tốn tiền ngân sách"
],
"answer": 0,
"explain": "Xã hội văn minh cởi mở là nền tảng để đẩy lùi bệnh dịch truyền nhiễm.",
"todo": "Chung tay xây dựng cộng đồng không kỳ thị.",
"when": "Lan tỏa thông điệp y tế tích cực.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-181",
"n": 181,
"topic": 11,
"q": "Cộng đồng nên có thái độ như thế nào đối với người nhiễm HBV?",
"options": [
"Tôn trọng, thấu hiểu, đồng hành và khuyến khích tiêm phòng bảo vệ bản thân",
"Xa lánh chỉ trích",
"Ép nghỉ việc",
"Cách ly xã hội"
],
"answer": 0,
"explain": "Sự đồng cảm và kiến thức khoa học đúng đắn giúp bảo vệ cả cộng đồng an toàn.",
"todo": "Thực hiện đúng các nguyên tắc giao tiếp ứng xử văn minh.",
"when": "Tư vấn sức khỏe tại y tế cơ sở.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-182",
"n": 182,
"topic": 11,
"q": "Hoạt động truyền thông nhằm giảm kỳ thị liên quan đến HBV cần hướng đến những nhóm đối tượng nào?",
"options": [
"Toàn thể người dân, cán bộ công chức, học sinh sinh viên và cả người bệnh",
"Chỉ dành cho bác sĩ",
"Chỉ dành cho người giàu",
"Không dành cho ai"
],
"answer": 0,
"explain": "Mọi người dân đều cần nắm vững kiến thức đúng để thay đổi hành vi thái độ văn minh.",
"todo": "Cùng tìm hiểu và chia sẻ thông tin y tế chuẩn.",
"when": "Đến trạm y tế phường nhận tài liệu.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-183",
"n": 183,
"topic": 11,
"q": "Người nhiễm HBV được theo dõi và chăm sóc phù hợp có thể tiếp tục học tập, làm việc và đóng góp cho xã hội không?",
"options": [
"HOÀN TOÀN ĐÓNG GÓP TỐT, làm việc, học tập và cống hiến bình thường như mọi người",
"Không làm được gì",
"Phải nằm viện suốt đời",
"Là gánh nặng xã hội"
],
"answer": 0,
"explain": "Sức khỏe tốt nhờ quản lý y tế giúp người bệnh phát huy tối đa năng lực bản thân.",
"todo": "Tự tin cống hiến cho công việc và gia đình.",
"when": "Khám quản lý định kỳ tại y tế cơ sở.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-184",
"n": 184,
"topic": 12,
"q": "Người dân tại TP. Hồ Chí Minh có thể tìm đến những cơ sở nào để xét nghiệm sàng lọc HBV?",
"options": [
"Tại các Trạm Y tế phường/xã, Trung tâm Y tế quận/huyện và các bệnh viện trên địa bàn",
"Phải ra nước ngoài mới làm được",
"Chỉ làm được ở Hà Nội",
"Không nơi nào làm được"
],
"answer": 0,
"explain": "Mạng lưới y tế TP.HCM từ cơ sở đến tuyến trên đều trang bị xét nghiệm HBsAg.",
"todo": "Đến cơ sở y tế gần nhất để đăng ký xét nghiệm.",
"when": "Khám tại Trạm Y tế phường/xã.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-185",
"n": 185,
"topic": 12,
"q": "Những dịch vụ khám, xét nghiệm và điều trị viêm gan B nào có thể được Bảo hiểm y tế chi trả?",
"options": [
"CÓ, BHYT chi trả tiền khám, xét nghiệm và thuốc kháng virus theo danh mục BHYT",
"BHYT không chi trả",
"Chỉ chi trả cho người dưới 18 tuổi",
"Trả 1%"
],
"answer": 0,
"explain": "Chính sách BHYT hỗ trợ gánh nặng tài chính rất lớn cho người bệnh điều trị dài hạn.",
"todo": "Mang thẻ BHYT đi khám đúng tuyến.",
"when": "Đến Trạm y tế/Trung tâm y tế địa phương.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-186",
"n": 186,
"topic": 12,
"q": "Trạm Y tế phường, xã có thể hỗ trợ người dân những gì trong phòng ngừa và quản lý viêm gan B?",
"options": [
"Khám tư vấn, xét nghiệm sàng lọc, tiêm vắc-xin và phát thuốc điều trị BHYT theo phân cấp",
"Chỉ để bán thuốc cảm",
"Không có vai trò gì",
"Chỉ dọn vệ sinh"
],
"answer": 0,
"explain": "Y tế cơ sở là 'lớp lá chắn' đầu tiên quản lý theo dõi sức khỏe ban đầu cho người dân.",
"todo": "Đến Trạm y tế phường để đăng ký quản lý sức khỏe.",
"when": "Liên hệ Trạm y tế phường/xã.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-187",
"n": 187,
"topic": 12,
"q": "Khi bệnh viêm gan B ổn định, người bệnh có nhất thiết phải khám tại bệnh viện tuyến trên trong mọi lần tái khám không?",
"options": [
"KHÔNG NHẤT THIẾT, hoàn toàn có thể tái khám và nhận thuốc BHYT định kỳ tại Y tế cơ sở",
"Bắt buộc lên tuyến trung ương",
"Phải đi máy bay khám",
"Không cần khám nữa"
],
"answer": 0,
"explain": "Phân cấp điều trị giúp người bệnh tái khám gần nhà nhanh chóng, giảm quá tải tuyến trên.",
"todo": "Tái khám nhận thuốc tại Trạm Y tế/Trung tâm Y tế quận.",
"when": "Tái khám theo hẹn tại y tế cơ sở.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-188",
"n": 188,
"topic": 12,
"q": "Trong những trường hợp nào người bệnh viêm gan B có thể được Trạm Y tế hướng dẫn hoặc làm thủ tục chuyển đến cơ sở chuyên khoa?",
"options": [
"Khi bệnh tiến triển phức tạp, xơ gan mất bù, nghi ngờ biến chứng hoặc kháng thuốc",
"Chuyển ngẫu nhiên",
"Không bao giờ chuyển",
"Chuyển khi người bệnh muốn mua quà"
],
"answer": 0,
"explain": "Quy trình chuyển tuyến hai chiều minh bạch đảm bảo an toàn chuyên môn cao nhất.",
"todo": "Yên tâm theo dõi tại cơ sở và chuyển tuyến khi có chỉ định bác sĩ.",
"when": "Tái khám đúng hẹn tại trạm y tế.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-189",
"n": 189,
"topic": 12,
"q": "Người dân chưa tham gia Bảo hiểm y tế nên tìm hiểu và thực hiện những gì để chuẩn bị cho việc khám chữa bệnh?",
"options": [
"Nhanh chóng tham gia BHYT hộ gia đình tại địa phương để được hỗ trợ chi phí y tế",
"Không mua BHYT",
"Vay tiền nặng lãi",
"Chờ khi bị nặng mới mua"
],
"answer": 0,
"explain": "BHYT hộ gia đình là phao cứu sinh tài chính quan trọng cho mọi nhà.",
"todo": "Đăng ký mua BHYT hộ gia đình tại UBND/Bưu điện phường.",
"when": "Liên hệ Đại lý thu BHYT phường/xã.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-190",
"n": 190,
"topic": 12,
"q": "Người dân có thể tìm thông tin về các cơ sở chuyên khoa điều trị viêm gan B tại TP. Hồ Chí Minh từ đâu?",
"options": [
"Bệnh viện Bệnh Nhiệt đới TP.HCM, BV Đại học Y Dược, BV Chợ Rẫy, BV Từ Dũ, BV Hùng Vương, các bệnh viện chuyên khoa/đa khoa khác có chức năng khám chữa bệnh chuyên khoa Tiêu hóa – Gan mật/ Truyền nhiễm.",
"Các tiệm cắt tóc",
"Các nhà thuốc tư nhân không phép",
"Các spa làm đẹp"
],
"answer": 0,
"explain": "Các bệnh viện tuyến đầu TP.HCM trang bị máy móc hiện đại và chuyên gia gan mật giỏi.",
"todo": "Khám chuyên sâu khi có giấy chuyển tuyến hoặc nhu cầu khám kỹ.",
"when": "Đến khám tại các Bệnh viện chuyên khoa.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-191",
"n": 191,
"topic": 12,
"q": "Tổng đài tư vấn sức khỏe hoặc các ứng dụng y tế của TP. Hồ Chí Minh có thể hỗ trợ người dân những việc gì?",
"options": [
"Hướng dẫn đặt lịch khám, tư vấn kiến thức y tế chuẩn và kết nối mạng lưới y tế",
"Bán hàng đa cấp",
"Cho vay tiền",
"Chơi game"
],
"answer": 0,
"explain": "Ứng dụng y tế số giúp người dân tiếp cận thông tin chính thống minh bạch nhanh chóng.",
"todo": "Sử dụng các kênh tư vấn y tế chính thống của TP.HCM.",
"when": "Tư vấn qua ứng dụng/Trạm y tế.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-192",
"n": 192,
"topic": 12,
"q": "Hồ sơ sức khỏe điện tử tại Trạm Y tế có thể hỗ trợ việc theo dõi và quản lý người bệnh viêm gan B như thế nào?",
"options": [
"Lưu trữ liên tục lịch sử xét nghiệm, quá trình uống thuốc và nhắc lịch tái khám",
"Làm lộ thông tin",
"Tốn dung lượng máy tính",
"Không có tác dụng"
],
"answer": 0,
"explain": "Hồ sơ điện tử giúp bác sĩ theo dõi sát sao diễn tiến bệnh qua nhiều năm.",
"todo": "Đăng ký lập sổ quản lý sức khỏe tại Trạm Y tế.",
"when": "Đến Trạm y tế phường/xã.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-193",
"n": 193,
"topic": 12,
"q": "Khi cần tư vấn về tiêm vắc-xin viêm gan B cho trẻ sơ sinh, người dân nên liên hệ với nhân viên hoặc cơ sở y tế nào?",
"options": [
"Hỏi nhân viên y tế tại Trạm y tế phường/xã hoặc Trung tâm Kiểm soát Bệnh tật TP.HCM (HCDC), Bác sĩ chuyên khoa",
"Hỏi người đi đường",
"Hỏi xe ôm",
"Lên mạng chat hỏi diễn đàn không kiểm chứng"
],
"answer": 0,
"explain": "Nhân viên y tế dự phòng cung cấp thông tin tiêm chủng chính xác và tin cậy nhất.",
"todo": "Hỏi trực tiếp nhân viên y tế tại trạm.",
"when": "Đến Trạm Y tế hoặc HCDC TP.HCM.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-194",
"n": 194,
"topic": 12,
"q": "Người nhiễm HBV có hoàn cảnh khó khăn tại TP. Hồ Chí Minh có thể tìm hiểu những hình thức hỗ trợ y tế nào?",
"options": [
"CÓ, được chính quyền địa phương hỗ trợ thẻ BHYT và các chương trình y tế cộng đồng",
"Không được hỗ trợ",
"Phải tự lo 100%",
"Bị từ chối khám"
],
"answer": 0,
"explain": "Chính sách an sinh xã hội TP.HCM luôn chăm lo y tế cho người yếu thế.",
"todo": "Liên hệ UBND/Trạm Y tế phường để nhận hướng dẫn hỗ trợ BHYT.",
"when": "Đến Trạm y tế phường/xã.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-195",
"n": 195,
"topic": 12,
"q": "Khi khám sức khỏe định kỳ tại cơ quan, người trưởng thành có nên trao đổi với nhân viên y tế về nhu cầu xét nghiệm HBsAg không?",
"options": [
"NÊN ĐĂNG KÝ THÊM nếu chưa từng thử máu xét nghiệm viêm gan B",
"Không nên làm",
"Bị cấm làm",
"Chỉ thử nhóm máu"
],
"answer": 0,
"explain": "Tận dụng đợt khám sức khỏe cơ quan để tầm soát sớm virus viêm gan B.",
"todo": "Đăng ký làm thêm HBsAg trong gói khám công ty.",
"when": "Tư vấn bác sĩ đoàn khám.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-196",
"n": 196,
"topic": 12,
"q": "Người bệnh viêm gan B nên chuẩn bị những giấy tờ và kết quả xét nghiệm nào khi đi khám?",
"options": [
"Thẻ BHYT, CCCD, Sổ khám bệnh và tất cả các kết quả xét nghiệm/đơn thuốc cũ",
"Không mang giấy tờ gì",
"Chỉ mang tiền mặt",
"Mang bằng lái xe"
],
"answer": 0,
"explain": "Hồ sơ xét nghiệm cũ giúp bác sĩ so sánh diễn tiến virus và men gan qua các thời kỳ.",
"todo": "Mang đầy đủ hồ sơ khám bệnh cũ khi đi tái khám.",
"when": "Xuất trình cho y bác sĩ tại phòng khám.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-197",
"n": 197,
"topic": 12,
"q": "Trung tâm Kiểm soát Bệnh tật TP. Hồ Chí Minh (HCDC) có vai trò gì trong công tác phòng, chống HBV?",
"options": [
"Chỉ đạo truyền thông giáo dục sức khỏe, giám sát dịch tễ và tiêm chủng phòng bệnh toàn thành phố",
"Bán thuốc tây",
"Khám răng",
"Thu thuế"
],
"answer": 0,
"explain": "HCDC là cơ quan hàng đầu về y tế dự phòng và truyền thông nâng cao sức khỏe cộng đồng.",
"todo": "Theo dõi các kênh thông tin chính thức của HCDC TP.HCM.",
"when": "Tham khảo website/fanpage HCDC.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-198",
"n": 198,
"topic": 12,
"q": "Đường dây nóng y tế hoặc kênh tư vấn của Trạm Y tế có thể hỗ trợ người dân giải đáp những vấn đề nào?",
"options": [
"Giải đáp thắc mắc về lịch tiêm chủng, thủ tục BHYT và hướng dẫn khám chữa bệnh ban đầu",
"Đặt mua thức ăn",
"Đặt xe ôm",
"Mua quần áo"
],
"answer": 0,
"explain": "Kênh tư vấn trực tiếp giúp người dân xử lý nhanh các băn khoăn y tế thường gặp.",
"todo": "Lưu số điện thoại Trạm Y tế phường để gọi khi cần.",
"when": "Liên hệ Trạm Y tế địa phương.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-199",
"n": 199,
"topic": 12,
"q": "Mỗi người dân có thể thực hiện những việc gì để góp phần phòng, chống viêm gan B tại TP. Hồ Chí Minh?",
"options": [
"Chủ động đi xét nghiệm, tiêm vắc-xin phòng bệnh, tuân thủ điều trị và lan tỏa kiến thức đúng",
"Lo sợ trốn tránh",
"Kỳ thị người bệnh",
"Uống lá cây truyền miệng"
],
"answer": 0,
"explain": "Mỗi cá nhân chủ động bảo vệ bản thân và gia đình sẽ tạo nên một cộng đồng an toàn vững mạnh.",
"todo": "Thực hiện ngay việc thử máu và tiêm vắc-xin cho gia đình.",
"when": "Đến Trạm Y tế phường/xã hôm nay.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
},
{
"id": "VGB-200",
"n": 200,
"topic": 12,
"q": "Người dân nên tìm hiểu thông tin về viêm gan B từ những nguồn nào để bảo đảm độ tin cậy?",
"options": [
"Từ các trang thông tin chính thức của Bộ Y tế, Sở Y tế TP.HCM, HCDC và các bệnh viện uy tín",
"Từ các diễn đàn mạng không rõ danh tính",
"Từ lời đồn truyền miệng",
"Từ các trang quảng cáo bán thuốc trôi nổi"
],
"answer": 0,
"explain": "Thông tin y tế từ các cơ sở uy tín được thẩm định khoa học và an toàn cho người dân.",
"todo": "Lựa chọn nguồn tin chính thống để học tập.",
"when": "Đến y tế địa phương tư vấn.",
"ref": "Quyết định 1740/QĐ-BYT (16/6/2026)"
}
]
};
