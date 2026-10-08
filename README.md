# NETWORK QUIZ — ÔN THI MẠNG MÁY TÍNH

Website tự học tiếng Việt, dùng HTML5, CSS3 và JavaScript thuần. Không backend, database, tài khoản, framework, thư viện chạy ngoài hay tài nguyên CDN. Đủ **10 đề × 50 câu = 500 câu tự biên soạn**, mỗi câu có 4 lựa chọn, một đáp án và lời giải kèm nguồn.

## Chạy ngay

1. Giữ nguyên các thư mục đi kèm. Nếu nhận file ZIP, giải nén toàn bộ.
2. Mở **index.html** bằng Chrome, Edge hoặc Firefox hiện đại.
3. Chọn đề và bắt đầu làm bài. Không cần cài Node.js, Python hay bất kỳ gói phần mềm nào để sử dụng.

Có thể mở thư mục bằng VS Code và chọn **Open with Live Server**. Lưu ý lịch sử thuộc từng địa chỉ trình duyệt: bản mở trực tiếp, localhost và các cổng localhost khác nhau có vùng lưu riêng. Nếu trình duyệt chặn localStorage với file cục bộ, website hiện thông báo và giữ dữ liệu tạm trong tab; dùng Live Server để có origin lưu trữ ổn định. Khi dùng Google Drive, bảo đảm các tệp đã được tải xuống máy trước khi học offline.

## Tính năng

- 10 đề thi, mặc định 50 phút/đề; đếm thời gian theo thời điểm hết hạn thực.
- Chọn/bỏ đáp án, câu trước/sau, bảng điều hướng, cờ đánh dấu và thanh tiến độ.
- Hỏi xác nhận khi nộp; báo số câu chưa làm. Tự nộp khi hết giờ.
- Điểm = câu đúng / tổng câu × 10, làm tròn tối đa 2 chữ số thập phân.
- Tách rõ đúng, sai và chưa trả lời; phân tích theo chương, đề xuất chương cần ôn.
- Review với các bộ lọc tất cả, đúng, sai, bỏ trống, đánh dấu; hiện đáp án, lựa chọn của bạn và giải thích.
- Đảo đáp án mỗi lượt nhưng lưu cả hoán vị để tải lại vẫn đúng. Vị trí đáp án đúng cân bằng, lệch tối đa 1 câu trong một lượt.
- Làm lại đề xóa đáp án/cờ/thời gian của lượt mới, giữ các lượt đã nộp.
- Luyện một hoặc nhiều chủ đề, chọn 10/20/30/50 câu, không giới hạn thời gian. Nếu nguồn ít hơn số muốn luyện, lấy toàn bộ nguồn, không nhân bản câu để bù.
- Ôn lại câu từng trả lời sai. Câu ra khỏi danh sách khi đúng 2 lượt liên tiếp; sai hoặc bỏ trống một câu đang ôn sẽ đặt lại chuỗi đúng. Câu bỏ trống mới không tự thêm vào danh sách sai.
- Tự lưu bài đang làm, cờ, lựa chọn, thứ tự đáp án, deadline; lịch sử tối đa 200 lượt.
- Giao diện responsive, điều khiển bàn phím, nhãn cho trình đọc màn hình, dialog xác nhận có quản lý focus.

**Thời gian:** chuyển trang, đóng tab hoặc tắt máy không tạm dừng bài thi. Nếu deadline đã qua trong lúc đóng trang, bài được nộp khi mở lại; thời gian làm bài được giới hạn ở thời hạn thi. Đồng hồ luyện tập tính từ khi bắt đầu, kể cả lúc rời trang. Cơ chế dùng đồng hồ máy, phù hợp tự học, không chống gian lận.

## Phân bố đề

Mỗi đề có phân bố giống nhau:

| Chương | Số câu |
|---|---:|
| Chương 1 — Tổng quan | 6 |
| Chương 2 — Giao thức, truyền dữ liệu | 18 |
| Chương 3–4 — Switching, routing | 18 |
| Chương 5 — WLAN, GSM, quản trị | 8 |

| Mức độ | Số câu |
|---|---:|
| Nhận biết | 15 |
| Thông hiểu | 20 |
| Vận dụng | 10 |
| Vận dụng cao | 5 |

Các đề tương đương theo ma trận nội dung và nhãn mức độ biên soạn; chưa có dữ liệu thi thực tế để hiệu chuẩn độ khó bằng thống kê tâm trắc.

## Cấu trúc

- **index.html**: khung trang, nạp dữ liệu bằng classic script để dùng được cả file://.
- **css/style.css**: theme và các breakpoint responsive.
- **js/app.js**: trang chủ, thi, kết quả, review, luyện tập, lịch sử và nguồn; điều hướng bằng hash.
- **js/engine.js**: tạo lượt, đảo đáp án, chấm điểm, deadline, nộp và theo dõi câu sai. Không phụ thuộc DOM.
- **js/storage.js**: localStorage và bộ nhớ tạm nếu lưu trữ bị chặn/hết dung lượng.
- **data/exam01.js … exam10.js**: dữ liệu hoàn chỉnh dùng trực tiếp, không tải qua fetch.
- **tools/chapter1.txt, chapter2.txt, chapter34.txt, chapter5.txt**: bản nguồn biên soạn theo chương/chủ đề, 500 dòng câu hỏi.
- **tools/build-bank.cjs**: công cụ chia 500 câu vào 10 đề theo ma trận, dùng Node.js built-in; không sinh câu hỏi mới hoặc chỉ đổi số để nhân câu.
- **tests/validate.cjs**: kiểm tra toàn ngân hàng và logic; không cần npm install.
- **tests/bank-report.json, test-results.json, similarity-report.json**: báo cáo kiểm tra.
- **tests/browser-fixture.html/js**: bài thử cô lập cho timeout, điểm tuyệt đối và thông báo lưu trữ.
- **tests/QA.md**: kết quả rà soát và các ca kiểm thử giao diện.

Các màn hình dùng chung một tài liệu thay vì bốn tệp HTML độc lập. Điều này giảm lặp giao diện và tránh khác biệt vùng lưu file:// giữa các tệp. Các đường nội bộ: #home, #exam, #practice, #history, #sources, #result/<lượt>, #review/<lượt>.

## Chỉnh thời gian

Mở **js/engine.js**, sửa hằng:

~~~javascript
const EXAM_TIME = 50; // phút
~~~

Thay đổi áp dụng cho lượt thi mới. Lượt đang làm giữ deadline đã lưu. Chế độ luyện tập không giới hạn thời gian.

## Schema câu hỏi

~~~javascript
{
  id: "E01Q01",             // duy nhất toàn ngân hàng
  chapter: "Chương 2",      // dùng đúng tên nhóm chương
  topic: "TCP",             // tên chủ đề để lọc
  difficulty: "Thông hiểu", // một trong 4 mức
  question: "Nội dung câu hỏi...",
  options: ["A...", "B...", "C...", "D..."],
  answer: 2,                // chỉ số 0–3 trong options gốc
  explanation: "Lý do và kiến thức liên quan...",
  source: "Tên tài liệu",
  sourceUrl: "https://..."
}
~~~

Một đề là mảng trong **globalThis.EXAMS["01"]**. Lượt làm chỉ lưu ID câu, hoán vị options, đáp án đã chọn và cờ; không nhân bản toàn bộ lời giải trong localStorage.

## Sửa hoặc thêm câu hỏi

**Sửa nhanh:** chỉnh đối tượng trong data/examXX.js, giữ ID nếu vẫn là cùng nội dung và ý nghĩa. Khi đổi thứ tự options, luôn cập nhật answer. Chạy kiểm tra sau khi sửa. Không chạy lại builder nếu chỉ muốn giữ bản sửa trực tiếp này.

**Biên soạn qua nguồn:** trong tools/chapter*.txt, dòng @Tên chủ đề mở một nhóm. Mỗi câu có đúng 7 trường phân cách bằng dấu |:

~~~text
mức_1_đến_4|câu hỏi|đáp án đúng|nhiễu 1|nhiễu 2|nhiễu 3|giải thích
~~~

Không dùng dấu | bên trong nội dung một trường. Sửa trong tệp nguồn rồi chạy:

~~~shell
node tools/build-bank.cjs
node tests/validate.cjs
~~~

Builder mặc định yêu cầu 60/180/180/80 câu theo chương và tổng mức độ 150/200/100/50. Để giữ bộ chuẩn 500 câu, thay một câu trong cùng chương và mức độ thay vì thêm tùy ý. Nguồn URL được ánh xạ theo topic trong builder; thêm nguồn mới khi cần. Việc thay đổi tập câu có thể đổi cách phân đề và ID, vì vậy hãy đổi phiên bản khóa lưu trữ trong storage.js khi phát hành ngân hàng đã tái cấu trúc; không diễn giải lịch sử cũ bằng bộ ID mới. Kiểm thử không thay thế việc thẩm định nội dung chuyên môn.

## Thêm đề thủ công

1. Tạo data/exam11.js theo cấu trúc các đề hiện có, gồm mảng 50 câu và ID E11Q01 … E11Q50.
2. Khai báo globalThis.EXAMS["11"] và nạp bằng thẻ script defer trong index.html, trước engine.js.
3. Trang chủ tự thêm card theo EXAMS. Cập nhật các nhãn tổng đề nếu tùy biến ngoài bộ chuẩn, cùng các kỳ vọng 10 đề/500 câu trong validate.cjs.
4. Muốn đưa chủ đề mới vào luyện tập, thêm tên vào groupTopics trong app.js.
5. Builder hiện tạo bộ chuẩn 10 đề; không dùng nó để ghi đè một bộ mở rộng nếu chưa sửa cấu hình chia đề.

## Kiểm thử

Dùng Node.js để chạy **node tests/validate.cjs**. Kiểm tra gồm: số đề/câu, schema, trùng ID, trùng nội dung, bốn phương án khác nhau, ma trận chương/mức độ, lời giải/nguồn, cân bằng đáp án; 250 lượt thử hoán vị; điểm 41 đúng–7 sai–2 bỏ trống = 8,2; điểm 0/10; các mốc xếp loại; deadline và nộp muộn; luyện không thời hạn; chuỗi ôn câu sai; làm lại và khôi phục lưu trữ.

Bộ dò gần trùng dùng Jaccard của trigram ký tự, có chuẩn hóa chữ số. Các cặp vượt ngưỡng 0,55 được ghi ra similarity-report.json để người biên soạn đọc, không tự xóa câu. Ba cặp đã được giữ có chủ đích: thứ tự ACL đảo ngược làm đổi quyết định; Protocol 6/17 phân biệt TCP/UDP; FTP active/passive đổi bên mở kết nối dữ liệu.

Thử giao diện tự nộp: mở tests/browser-fixture.html?case=timeout qua Live Server. Fixture đặt deadline 3 giây và dùng kho dữ liệu trong bộ nhớ riêng, không sửa lịch sử học thật. Các case khác: perfect và storage-blocked. Fixture không phải màn hình sử dụng bình thường.

## Nguồn và giới hạn

Các câu hỏi được tự biên soạn, không sao chép nguyên văn ngân hàng đề thi. Liên kết tham khảo xuất hiện ở từng lời giải và trang Nguồn tham khảo.

- IETF: RFC 791 (IPv4), 8200 (IPv6), 9293 (TCP), 768 (UDP), 1035 (DNS), 959 (FTP), 2131 (DHCP).
- Cisco: cấu hình VLAN/trunk/DTP, VTP, STP, NAT, ACL và CLI IOS.
- Kurose & Ross / University of Massachusetts: tài liệu giảng dạy công khai về RDT, GBN, SR và TCP.
- Peter L. Dordal / Loyola University Chicago: An Introduction to Computer Networks.
- Carnegie Mellon University: Algorithms in the Real World — Data Compression.
- MDN: HTTP reference; Microsoft Learn: Windows networking commands.
- ETSI GSM 03.02: kiến trúc GSM; NIST SP 800-153: nguyên tắc bảo vệ WLAN.

Các ví dụ DTP giả định thiết bị hỗ trợ, điều kiện thương lượng tương thích; câu VTP v1/v2 ghi rõ phiên bản. Bài GBN/SR theo mô hình giáo trình chuẩn và ghi quy ước ACK/sequence khi cần. NRZ-I/Manchester ghi rõ ánh xạ bit. Kiến thức tấn công WLAN chỉ ở mức nhận biết và phòng chống.

Lịch sử nằm trên máy và trình duyệt hiện tại, không đồng bộ qua Google Drive dù mã nguồn nằm trong Drive. Xóa dữ liệu trình duyệt, dùng chế độ riêng tư hoặc di chuyển tệp có thể làm lịch sử không còn truy cập được. Website dành cho tự học; đáp án nằm trong mã nguồn và không có cơ chế bảo mật đề thi chính thức.

## Ôn tự luận theo chương

Chọn **Ôn tự luận** trên thanh điều hướng hoặc **Mở sổ tay ôn tập** ở trang chủ. Mục mới gồm 5 chương, 24 chủ đề và 24 câu tự luận kèm dàn ý ẩn/hiện. Chương 3–4 trong đề cương được chia thành Switching và Routing để tiện đọc. Có bảng so sánh, ví dụ tính toán, câu lệnh, lưu ý dễ nhầm và tài liệu đối chiếu.

Tự viết câu trả lời trước, sau đó mở dàn ý để so sánh; website không tự chấm bài tự luận. Trên điện thoại, vuốt ngang trong bảng hoặc khối lệnh nếu nội dung dài. Dùng mục lục để chuyển nhanh tới chủ đề.

Nội dung ở **data/study-notes.js**, giao diện ở **js/study.js**, đường dẫn **#study/1** đến **#study/5**. Nội dung này tự biên soạn theo đề cương, không phải bộ đáp án thi chính thức của trường.
