# Báo cáo kiểm thử — 07/10/2026

## Dữ liệu và logic

Chạy node tests/validate.cjs: đạt 10/10 nhóm kiểm tra, 500 câu, 10 đề, 50 câu/đề. Mỗi đề đạt đúng ma trận chương 6/18/18/8 và mức độ 15/20/10/5. Không trùng ID hoặc nguyên văn câu hỏi; mỗi câu có 4 phương án khác nhau, đáp án hợp lệ, lời giải và nguồn.

250 lượt thử hoán vị giữ đúng đáp án và phân phối vị trí cân bằng. Kiểm tra chấm 41 đúng/7 sai/2 bỏ trống = 8,2; bài trống và bài tuyệt đối; mốc xếp loại; deadline qua tuần tự hóa và giới hạn thời gian khi nộp muộn; luyện không thời hạn; chuỗi đúng/xóa câu sai; làm lại; lưu/khôi phục và bộ nhớ tạm khi localStorage bị chặn.

## Các cặp gần giống đã đọc lại

Bộ dò dùng trigram chuẩn hóa chữ số, ngưỡng 0,55. Giữ 3 cặp vì kiểm tra hai điều kiện khác nhau, không chỉ đảo đáp án:

- E10Q30 / E01Q42: permit any trước deny host và thứ tự ngược lại; nguyên tắc first-match làm thay đổi kết quả ACL.
- E05Q23 / E07Q22: Protocol 17 và 6 của IPv4 lần lượt xác định UDP và TCP.
- E05Q18 / E06Q17: FTP active và passive khác bên khởi tạo kết nối dữ liệu.

Đã rà soát các quy ước dễ gây mơ hồ: ACK/sequence trong GBN/SR; SYN/FIN chiếm số thứ tự; ánh xạ NRZ-I/Manchester; DTP với thiết bị hỗ trợ; VTP v1/v2. Nguồn chính thức được gắn theo chủ đề. Ma trận độ khó là nhãn biên soạn, chưa được hiệu chuẩn bằng dữ liệu sinh viên thực tế.

## Kiểm thử trình duyệt

Thực hiện trên trình duyệt Chromium tích hợp qua localhost:

- Trang chủ đủ 10 đề, đúng thứ tự 01–10.
- Chọn đề 01, chọn đáp án, đánh dấu, chuyển câu và bỏ chọn.
- Tải lại giữ lựa chọn, cờ, vị trí câu và đồng hồ tiếp tục giảm.
- Hộp nộp bài báo 48 câu bỏ trống; hủy quay lại bài; xác nhận cho kết quả 1 đúng, 1 sai, 48 bỏ trống, 0,2 điểm.
- Review hiện lựa chọn sai, đáp án đúng, lời giải và nguồn; bộ lọc sai, đánh dấu và bỏ trống đúng dữ liệu.
- Làm lại đặt lại 50 phút, lựa chọn và cờ; hoán vị đáp án mới vẫn đúng.
- Chọn FTP và yêu cầu 50 câu: tạo đúng 12 câu hiện có, không nhân bản, không giới hạn thời gian.
- Ôn câu sai tạo đúng 1 câu đã sai; trả lời đúng và nộp lưu kết quả 10/10, 1/1 vào lịch sử.
- Fixture timeout có hạn 3 giây: tự nộp, hiện 50 bỏ trống, 0 điểm, thời gian 3 giây.
- Fixture perfect: nộp 50 đúng, 10 điểm, Xuất sắc và 6/6, 18/18, 18/18, 8/8 theo chương.
- Màn hình thi và kết quả ở viewport 390 × 844: bố cục một cột, đồng hồ trước câu hỏi, không tràn ngang (scrollWidth = clientWidth = 375).
- Trang chủ desktop 1440 × 1080: bố cục hai vùng, thẻ đề và thanh bên rõ ràng; ảnh home-preview.jpg.
- Không có lỗi/cảnh báo JavaScript trong nhật ký trình duyệt của các lượt thử trên.

Fixture dùng kho dữ liệu riêng trong bộ nhớ. Dữ liệu thử localhost không được đóng gói trong mã nguồn.

## Giới hạn kiểm chứng

Trình duyệt tự động chỉ cho phép http/https nên đã chặn việc điều hướng file://; chưa kiểm thử trực tiếp thao tác mở index.html bằng tệp cục bộ. Mã đã được thiết kế và kiểm tra để không cần máy chủ: classic script với đường dẫn tương đối, không fetch, ES module, CDN hoặc phụ thuộc mạng lúc chạy. Có xử lý bộ nhớ tạm khi trình duyệt chặn localStorage. Người dùng có thể mở index.html hoặc dùng Live Server như README.

Chưa chạy trên thiết bị vật lý iOS/Android hoặc các trình duyệt Firefox/Safari; kiểm thử điện thoại ở đây là giả lập kích thước viewport.

## Bổ sung ôn tự luận — 08/10/2026

Đã kiểm tra đủ 5 chương với lần lượt 3/8/5/4/4 chủ đề (24 chủ đề, 24 câu tự luận). Đã kiểm tra mở/ẩn toàn bộ dàn ý, chuyển chương, nhãn chương đang chọn, mục lục chuyển focus tới đúng tiêu đề và nguồn đối chiếu từng chương.

Giao diện desktop đã kiểm tra trực quan. Viewport 390 × 844: trang không tràn ngang (clientWidth = scrollWidth = 375); bảng và khối mã cuộn nội bộ. Nhật ký trình duyệt không có lỗi/cảnh báo trong lượt thử. Ảnh: study-preview.jpg. Nội dung học được tách khỏi kho bài thi và localStorage.
