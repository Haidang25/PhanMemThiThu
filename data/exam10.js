/* Tự biên soạn; xem tools/chapter*.txt và README.md. */
globalThis.EXAMS ||= {};
globalThis.EXAMS["10"] = [
  {
    "chapter": "Chương 1",
    "topic": "OSI",
    "difficulty": "Nhận biết",
    "question": "Vai trò khái niệm của tầng Session là gì?",
    "options": [
      "Quản lý phiên đối thoại giữa ứng dụng",
      "Truyền xung điện",
      "Học địa chỉ MAC",
      "Định tuyến IP"
    ],
    "answer": 0,
    "explanation": "Session quản lý phiên và đồng bộ hội thoại; Internet thực tế có thể gộp các chức năng này vào ứng dụng.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E10Q01"
  },
  {
    "chapter": "Chương 1",
    "topic": "OSI",
    "difficulty": "Nhận biết",
    "question": "Địa chỉ MAC Ethernet thuộc tầng nào?",
    "options": [
      "Transport",
      "Data Link",
      "Session",
      "Presentation"
    ],
    "answer": 1,
    "explanation": "MAC định danh giao diện tại tầng liên kết; địa chỉ IP được xử lý ở tầng mạng.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E10Q02"
  },
  {
    "chapter": "Chương 1",
    "topic": "Repeater",
    "difficulty": "Thông hiểu",
    "question": "Bộ khuếch đại đơn thuần khác repeater số ở điểm nào?",
    "options": [
      "Luôn loại mọi lỗi dữ liệu",
      "Luôn đọc bảng MAC",
      "Có thể khuếch đại cả nhiễu, thay vì tái tạo dạng bit",
      "Luôn định tuyến IP"
    ],
    "answer": 2,
    "explanation": "Khuếch đại tăng biên độ cả tín hiệu lẫn nhiễu; tái tạo số còn phục hồi dạng và thời điểm tín hiệu.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E10Q03"
  },
  {
    "chapter": "Chương 1",
    "topic": "OSI",
    "difficulty": "Vận dụng",
    "question": "Một switch tầng 2 chuyển frame giữa hai cổng cùng VLAN. Trường IPv4 TTL thông thường thay đổi thế nào?",
    "options": [
      "Tăng 1",
      "Giảm 1",
      "Luôn thành 64",
      "Không bị giảm bởi thao tác chuyển mạch tầng 2"
    ],
    "answer": 3,
    "explanation": "TTL giảm khi router thực hiện chuyển tiếp IP; chuyển mạch Ethernet thuần túy không thực hiện bước này.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E10Q04"
  },
  {
    "chapter": "Chương 1",
    "topic": "Topology",
    "difficulty": "Nhận biết",
    "question": "Trong topology ring đơn giản, một nút thường nối trực tiếp với bao nhiêu nút lân cận?",
    "options": [
      "2",
      "1",
      "Tất cả các nút",
      "3"
    ],
    "answer": 0,
    "explanation": "Các liên kết tạo một vòng, nên mỗi nút có hai láng giềng trực tiếp.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E10Q05"
  },
  {
    "chapter": "Chương 1",
    "topic": "Topology",
    "difficulty": "Thông hiểu",
    "question": "Điểm yếu của star chỉ có một switch trung tâm là gì?",
    "options": [
      "Luôn cần token",
      "Switch trung tâm là điểm lỗi đơn",
      "Mỗi máy phải có nhiều NIC",
      "Không thể thêm máy"
    ],
    "answer": 1,
    "explanation": "Trung tâm hỏng có thể làm toàn bộ các nhánh mất liên lạc; dự phòng giúp giảm rủi ro này.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E10Q06"
  },
  {
    "chapter": "Chương 2",
    "topic": "FTP",
    "difficulty": "Nhận biết",
    "question": "Kết nối điều khiển FTP truyền thống sử dụng cổng server nào?",
    "options": [
      "TCP 53",
      "UDP 21",
      "TCP 21",
      "UDP 20"
    ],
    "answer": 2,
    "explanation": "FTP trao đổi lệnh và phản hồi trên kết nối điều khiển TCP tới cổng 21 của server.",
    "source": "IETF RFC 959 — File Transfer Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc959.html",
    "id": "E10Q07"
  },
  {
    "chapter": "Chương 2",
    "topic": "Selective Repeat",
    "difficulty": "Vận dụng",
    "question": "Sender SR base=4, gói 5 được ACK nhưng gói 4 chưa ACK. Base thay đổi thế nào?",
    "options": [
      "Thành 5",
      "Về 0",
      "Thành 6",
      "Vẫn là 4"
    ],
    "answer": 3,
    "explanation": "Cửa sổ chỉ trượt qua phần đã được xác nhận liên tục bắt đầu từ base; ACK riêng gói 5 chưa lấp chỗ thiếu 4.",
    "source": "Kurose & Ross — Transport Layer, public teaching materials (UMass)",
    "sourceUrl": "https://gaia.cs.umass.edu/kurose_ross/videos/3/",
    "id": "E10Q08"
  },
  {
    "chapter": "Chương 2",
    "topic": "IPv4",
    "difficulty": "Vận dụng",
    "question": "Router nhận packet dài 1600 byte, DF=1, MTU ra 1500. Hành động phù hợp?",
    "options": [
      "Loại packet và có thể gửi ICMP cần phân mảnh",
      "Đổi sang UDP",
      "Tự xóa DF rồi chia mảnh",
      "Tăng MTU vật lý lên 1600"
    ],
    "answer": 0,
    "explanation": "DF ngăn phân mảnh. ICMP thông báo nhu cầu giảm kích thước hỗ trợ Path MTU Discovery nếu không bị chặn.",
    "source": "IETF RFC 791 — Internet Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc791.html",
    "id": "E10Q09"
  },
  {
    "chapter": "Chương 2",
    "topic": "FTP",
    "difficulty": "Nhận biết",
    "question": "Vì sao FTP sử dụng kết nối dữ liệu riêng?",
    "options": [
      "Để không cần xác thực",
      "Tách truyền nội dung file/danh sách khỏi kênh điều khiển",
      "Để thay DNS",
      "Để bỏ hoàn toàn TCP"
    ],
    "answer": 1,
    "explanation": "FTP có kênh điều khiển duy trì lệnh và các kết nối dữ liệu phục vụ truyền file hoặc danh sách thư mục.",
    "source": "IETF RFC 959 — File Transfer Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc959.html",
    "id": "E10Q10"
  },
  {
    "chapter": "Chương 2",
    "topic": "Mã hóa đường truyền",
    "difficulty": "Nhận biết",
    "question": "Với NRZ-I quy ước bit 1 gây đảo mức, bit 0 được biểu diễn thế nào?",
    "options": [
      "Hai xung cao liên tiếp",
      "Xóa khoảng bit",
      "Không đảo mức tại đầu khoảng bit",
      "Đảo mức giữa bit luôn luôn"
    ],
    "answer": 2,
    "explanation": "NRZ-I mã hóa theo sự thay đổi mức; với quy ước này, 0 giữ mức và 1 đảo mức ở biên đầu bit.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E10Q11"
  },
  {
    "chapter": "Chương 2",
    "topic": "Mã hóa đường truyền",
    "difficulty": "Thông hiểu",
    "question": "Đặc tính đồng bộ nổi bật của Manchester là gì?",
    "options": [
      "Dùng một điện áp cho mọi bit",
      "Không có chuyển mức nào",
      "Tăng TTL mỗi bit",
      "Có chuyển mức ở giữa mỗi bit"
    ],
    "answer": 3,
    "explanation": "Chuyển mức giữa bit cung cấp mốc thời gian cho phục hồi clock, dù các bit liên tiếp giống nhau.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E10Q12"
  },
  {
    "chapter": "Chương 2",
    "topic": "DNS",
    "difficulty": "Thông hiểu",
    "question": "Recursive query yêu cầu resolver thực hiện việc gì?",
    "options": [
      "Tìm câu trả lời cuối cùng hoặc trả lỗi",
      "Chỉ trả tên root server trong mọi trường hợp",
      "Tự đổi IP của client",
      "Gửi câu hỏi cho mọi host LAN"
    ],
    "answer": 0,
    "explanation": "Resolver nhận yêu cầu đệ quy chịu trách nhiệm tiếp tục quá trình phân giải thay cho client.",
    "source": "IETF RFC 1035 — Domain Names: Implementation and Specification",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc1035.html",
    "id": "E10Q13"
  },
  {
    "chapter": "Chương 2",
    "topic": "HTTP",
    "difficulty": "Thông hiểu",
    "question": "PUT thường biểu đạt điều gì đối với tài nguyên tại URI đã biết?",
    "options": [
      "Xóa mọi tài nguyên máy chủ",
      "Tạo hoặc thay thế trạng thái bằng biểu diễn gửi lên",
      "Chỉ nối thêm một byte luôn luôn",
      "Chỉ xem header"
    ],
    "answer": 1,
    "explanation": "PUT xác định trạng thái mong muốn tại URI đích; gọi lại cùng nội dung có tính idempotent về tác động dự kiến.",
    "source": "MDN — HTTP reference",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference",
    "id": "E10Q14"
  },
  {
    "chapter": "Chương 2",
    "topic": "TCP",
    "difficulty": "Thông hiểu",
    "question": "PSH yêu cầu phía nhận xử lý dữ liệu thế nào về nguyên tắc?",
    "options": [
      "Tăng TTL lên tối đa",
      "Đóng kết nối ngay",
      "Chuyển dữ liệu lên ứng dụng kịp thời, không chờ thêm chỉ để gom",
      "Bỏ mọi checksum"
    ],
    "answer": 2,
    "explanation": "Push liên quan việc giao dữ liệu cho ứng dụng; không tạo ranh giới thông điệp đáng tin cậy cho ứng dụng TCP.",
    "source": "IETF RFC 9293 — Transmission Control Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc9293.html",
    "id": "E10Q15"
  },
  {
    "chapter": "Chương 2",
    "topic": "Go-Back-N",
    "difficulty": "Thông hiểu",
    "question": "Trong mô hình GBN chuẩn, receiver window có kích thước bao nhiêu?",
    "options": [
      "Không giới hạn",
      "Bằng 2 mũ số bit sequence",
      "Bằng sender window luôn luôn",
      "1"
    ],
    "answer": 3,
    "explanation": "Receiver GBN chuẩn chỉ chấp nhận gói kế tiếp đúng thứ tự, không giữ gói ngoài thứ tự cho việc giao sau.",
    "source": "Kurose & Ross — Transport Layer, public teaching materials (UMass)",
    "sourceUrl": "https://gaia.cs.umass.edu/kurose_ross/videos/3/",
    "id": "E10Q16"
  },
  {
    "chapter": "Chương 2",
    "topic": "Selective Repeat",
    "difficulty": "Thông hiểu",
    "question": "ACK của SR chuẩn mang đặc tính nào?",
    "options": [
      "Xác nhận riêng từng gói",
      "Không chứa số thứ tự",
      "Chỉ xác nhận toàn bộ file",
      "Luôn là NAK"
    ],
    "answer": 0,
    "explanation": "Receiver xác nhận các gói hợp lệ độc lập, giúp sender tránh truyền lại gói đã được nhận ngoài thứ tự.",
    "source": "Kurose & Ross — Transport Layer, public teaching materials (UMass)",
    "sourceUrl": "https://gaia.cs.umass.edu/kurose_ross/videos/3/",
    "id": "E10Q17"
  },
  {
    "chapter": "Chương 2",
    "topic": "Nén dữ liệu",
    "difficulty": "Thông hiểu",
    "question": "Cần gửi ảnh y tế và giữ nguyên từng giá trị pixel. Tiêu chí nén quan trọng nhất?",
    "options": [
      "Chỉ giảm độ phân giải",
      "Chọn nén lossless",
      "Xóa phần ảnh ít tương phản",
      "Chọn mức lossy lớn nhất"
    ],
    "answer": 1,
    "explanation": "Yêu cầu bảo toàn từng pixel không cho phép mất thông tin; lossless đáp ứng điều kiện phục hồi chính xác.",
    "source": "Carnegie Mellon University — Algorithms in the Real World: Compression",
    "sourceUrl": "https://www.cs.cmu.edu/afs/cs/project/pscico-guyb/realworld/www/slidesF15.html",
    "id": "E10Q18"
  },
  {
    "chapter": "Chương 2",
    "topic": "UDP",
    "difficulty": "Thông hiểu",
    "question": "Với UDP qua IPv6 thông thường, checksum có thể tùy ý bỏ như IPv4 không?",
    "options": [
      "Có, mọi datagram đều bỏ",
      "Có, chỉ cần port 53",
      "Không, mặc định phải có checksum hợp lệ",
      "Không, vì IPv6 không hỗ trợ UDP"
    ],
    "answer": 2,
    "explanation": "UDP checksum là bắt buộc trong trường hợp IPv6 thông thường; các ngoại lệ đường hầm rất hạn chế không thuộc trường hợp này.",
    "source": "IETF RFC 768 — User Datagram Protocol; RFC 8200 §8.1 for IPv6",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc768",
    "id": "E10Q19"
  },
  {
    "chapter": "Chương 2",
    "topic": "RDT",
    "difficulty": "Thông hiểu",
    "question": "RDT 2.2 thay NAK bằng cơ chế nào?",
    "options": [
      "Chỉ tăng checksum",
      "Xóa mọi ACK",
      "Đổi IP nguồn",
      "ACK lặp cho gói đúng gần nhất"
    ],
    "answer": 3,
    "explanation": "ACK cho số thứ tự trước đó cho bên gửi biết gói hiện tại chưa được chấp nhận, hỗ trợ giao thức không NAK.",
    "source": "Kurose & Ross — Transport Layer, public teaching materials (UMass)",
    "sourceUrl": "https://gaia.cs.umass.edu/kurose_ross/videos/3/",
    "id": "E10Q20"
  },
  {
    "chapter": "Chương 2",
    "topic": "IPv6",
    "difficulty": "Nhận biết",
    "question": "Trường IPv6 nào tương đương vai trò giới hạn số chặng của TTL?",
    "options": [
      "Hop Limit",
      "Traffic Class",
      "Payload Length",
      "Flow Label"
    ],
    "answer": 0,
    "explanation": "Hop Limit giảm tại router chuyển tiếp và packet bị loại khi hết giới hạn.",
    "source": "IETF RFC 8200 — IPv6 Specification",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc8200.html",
    "id": "E10Q21"
  },
  {
    "chapter": "Chương 2",
    "topic": "TCP",
    "difficulty": "Vận dụng",
    "question": "TCP segment SEQ=200 mang 100 byte dữ liệu, không SYN/FIN. Nếu nhận đủ theo thứ tự, ACK kế tiếp là bao nhiêu?",
    "options": [
      "299",
      "300",
      "201",
      "100"
    ],
    "answer": 1,
    "explanation": "Các byte dữ liệu mang số 200 đến 299; bên nhận mong đợi byte 300.",
    "source": "IETF RFC 9293 — Transmission Control Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc9293.html",
    "id": "E10Q22"
  },
  {
    "chapter": "Chương 2",
    "topic": "HTTP",
    "difficulty": "Nhận biết",
    "question": "Request line của HTTP/1.1 gồm những thành phần cơ bản nào?",
    "options": [
      "Status code, reason, checksum",
      "SEQ, ACK, Window",
      "Method, request-target, version",
      "MAC nguồn, MAC đích, FCS"
    ],
    "answer": 2,
    "explanation": "HTTP/1.1 request line xác định thao tác, tài nguyên đích và phiên bản giao thức.",
    "source": "MDN — HTTP reference",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference",
    "id": "E10Q23"
  },
  {
    "chapter": "Chương 2",
    "topic": "Go-Back-N",
    "difficulty": "Vận dụng cao",
    "question": "GBN N=4, base=6, số thứ tự modulo 8. Cửa sổ gửi là tập nào?",
    "options": [
      "4, 5, 6, 7",
      "0, 1, 2, 3",
      "6, 7, 8, 9",
      "6, 7, 0, 1"
    ],
    "answer": 3,
    "explanation": "Sau số 7, bộ đếm quay về 0. Bốn vị trí liên tiếp modulo 8 từ 6 là 6,7,0,1.",
    "source": "Kurose & Ross — Transport Layer, public teaching materials (UMass)",
    "sourceUrl": "https://gaia.cs.umass.edu/kurose_ross/videos/3/",
    "id": "E10Q24"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "VLAN",
    "difficulty": "Thông hiểu",
    "question": "Lệnh name STUDENT trong ngữ cảnh VLAN dùng để làm gì?",
    "options": [
      "Đặt tên mô tả VLAN",
      "Đổi VLAN ID thành chữ",
      "Cấp hostname mọi client",
      "Đặt SSID mọi AP"
    ],
    "answer": 0,
    "explanation": "Tên VLAN hỗ trợ quản trị; VLAN ID vẫn là số nhận diện được dùng khi chuyển mạch.",
    "source": "Cisco — VLAN Trunk Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vlan-trunks.html",
    "id": "E10Q25"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "NAT",
    "difficulty": "Thông hiểu",
    "question": "Máy chủ trong LAN cần địa chỉ dịch cố định để phía ngoài truy cập. Giải pháp phù hợp trong các lựa chọn?",
    "options": [
      "Chỉ dynamic NAT pool hết hạn",
      "Static NAT một-một với chính sách cho phép phù hợp",
      "Đổi tên SSID",
      "Bật DTP auto"
    ],
    "answer": 1,
    "explanation": "Ánh xạ tĩnh cung cấp địa chỉ ổn định; vẫn cần định tuyến và chính sách firewall cho lưu lượng được phép.",
    "source": "Cisco — Configuring NAT for IP Address Conservation",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipaddr_nat/configuration/15-sy/nat-15-sy-book/iadnat-addr-consv.html",
    "id": "E10Q26"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "STP",
    "difficulty": "Thông hiểu",
    "question": "Nếu các switch có cùng priority và cùng extended system ID, root là switch nào?",
    "options": [
      "Có uptime nhỏ nhất",
      "Có nhiều VLAN nhất",
      "Có MAC nhỏ nhất",
      "Có MAC lớn nhất"
    ],
    "answer": 2,
    "explanation": "Khi phần priority bằng nhau, so sánh MAC để phá hòa; MAC nhỏ hơn tạo Bridge ID nhỏ hơn.",
    "source": "Cisco — Spanning Tree Protocol Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/stp/stp-configuration-guide/m-stp.html",
    "id": "E10Q27"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Routing",
    "difficulty": "Vận dụng cao",
    "question": "R1 có default route sang R2, R2 có default route quay lại R1, không có route cụ thể tới đích. Điều gì có thể xảy ra?",
    "options": [
      "Mọi packet được chia thành VLAN",
      "Packet tự tìm DNS để thoát",
      "R1 tự học route chỉ từ MAC đích",
      "Loop định tuyến đến khi TTL hết"
    ],
    "answer": 3,
    "explanation": "Hai default route có thể đưa packet qua lại; TTL giới hạn thời gian tồn tại nhưng không sửa cấu hình sai.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E10Q28"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "ACL",
    "difficulty": "Nhận biết",
    "question": "Extended IPv4 ACL có thể xét thêm các tiêu chí nào?",
    "options": [
      "Nguồn, đích, giao thức và port",
      "Chỉ điện áp dây",
      "Chỉ MAC nguồn",
      "Chỉ tên switch"
    ],
    "answer": 0,
    "explanation": "Extended ACL hỗ trợ lọc chi tiết ở tầng mạng và vận chuyển, như TCP tới một port đích cụ thể.",
    "source": "Cisco IOS — IP Access List Overview",
    "sourceUrl": "https://www.cisco.com/en/US/docs/ios-xml/ios/sec_data_acl/configuration/15-1mt/IP_Access_List_Overview.html",
    "id": "E10Q29"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "ACL",
    "difficulty": "Vận dụng",
    "question": "ACL có “permit any” trước “deny host 10.0.0.5”. Gói nguồn 10.0.0.5 có kết quả gì?",
    "options": [
      "Được NAT",
      "Được permit bởi dòng đầu",
      "Luôn drop vì hai dòng xung đột",
      "Bị deny bởi dòng sau"
    ],
    "answer": 1,
    "explanation": "permit any khớp trước tất cả; dòng deny phía sau không có cơ hội tác động đến gói này.",
    "source": "Cisco IOS — IP Access List Overview",
    "sourceUrl": "https://www.cisco.com/en/US/docs/ios-xml/ios/sec_data_acl/configuration/15-1mt/IP_Access_List_Overview.html",
    "id": "E10Q30"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Router",
    "difficulty": "Thông hiểu",
    "question": "Mạng directly connected xuất hiện thông thường khi nào?",
    "options": [
      "Cáp chưa cắm nhưng có tên interface",
      "Router nhận bất kỳ DNS query",
      "Interface có địa chỉ phù hợp và trạng thái hoạt động",
      "Switch học MAC đầu tiên"
    ],
    "answer": 2,
    "explanation": "Tuyến kết nối trực tiếp phụ thuộc cấu hình IP và trạng thái interface phù hợp, không cần giao thức định tuyến học từ xa.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E10Q31"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Routing",
    "difficulty": "Vận dụng",
    "question": "Mạng xa 172.16.20.0/24 qua next hop 10.0.0.2. Static route nào đúng?",
    "options": [
      "ip route 172.16.20.0 0.0.0.255 10.0.0.2",
      "ip address 172.16.20.0 255.255.255.0",
      "ip route 10.0.0.2 255.255.255.0 172.16.20.0",
      "ip route 172.16.20.0 255.255.255.0 10.0.0.2"
    ],
    "answer": 3,
    "explanation": "Lệnh định tuyến dùng subnet mask 255.255.255.0, không dùng wildcard ACL; next hop đứng sau mask.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E10Q32"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Cisco CLI",
    "difficulty": "Vận dụng cao",
    "question": "Đã cấu hình IP, no shutdown, ping được; reboot xong mất cấu hình vừa nhập. Nguyên nhân phù hợp nhất?",
    "options": [
      "Chưa copy running-config startup-config",
      "Chưa dùng show ip interface brief",
      "Chưa bật DNS query",
      "TTL của IP đã hết"
    ],
    "answer": 0,
    "explanation": "Cấu hình chạy có thể chỉ ở bộ nhớ vận hành; lưu sang startup giúp giữ lại qua khởi động.",
    "source": "Cisco IOS — Configuration Fundamentals",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/fundamentals/configuration/xe-16/fundamentals-xe-16-book/cf-cli-basics.html",
    "id": "E10Q33"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "DHCP",
    "difficulty": "Thông hiểu",
    "question": "Address pool của DHCP là gì?",
    "options": [
      "Danh sách mọi MAC Internet",
      "Tập địa chỉ server có thể cấp",
      "Danh sách port bị cấm",
      "Bảng OSPF cost"
    ],
    "answer": 1,
    "explanation": "Pool xác định phạm vi địa chỉ cho client; quản trị viên có thể loại trừ những địa chỉ dành cho hạ tầng.",
    "source": "IETF RFC 2131 — Dynamic Host Configuration Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc2131.html",
    "id": "E10Q34"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "NAT",
    "difficulty": "Thông hiểu",
    "question": "Static NAT và PAT khác nhau cơ bản thế nào?",
    "options": [
      "Hai khái niệm luôn giống hệt",
      "Static NAT chỉ UDP; PAT chỉ TCP",
      "Static NAT cơ bản một-một; PAT có thể nhiều-một theo port",
      "Static NAT dùng MAC; PAT dùng DNS"
    ],
    "answer": 2,
    "explanation": "Static NAT cố định quan hệ địa chỉ, còn PAT chia sẻ địa chỉ bằng dịch port; thực tế có cả static port mapping.",
    "source": "Cisco — Configuring NAT for IP Address Conservation",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipaddr_nat/configuration/15-sy/nat-15-sy-book/iadnat-addr-consv.html",
    "id": "E10Q35"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "DHCP",
    "difficulty": "Vận dụng cao",
    "question": "Client có IP và mask đúng, ping máy cùng LAN được nhưng không ra subnet khác. DHCP option nào nên kiểm tra trước?",
    "options": [
      "Hostname hiển thị",
      "Thời gian hệ thống",
      "Tên VLAN mô tả",
      "Default gateway"
    ],
    "answer": 3,
    "explanation": "Giao tiếp cùng LAN không cần gateway; truy cập subnet khác phụ thuộc tuyến qua gateway đúng.",
    "source": "IETF RFC 2131 — Dynamic Host Configuration Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc2131.html",
    "id": "E10Q36"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "STP",
    "difficulty": "Vận dụng",
    "question": "Switch có đường P1 về root cost 19 và P2 cost 38, không yếu tố khác. Root port là gì?",
    "options": [
      "P1",
      "P2",
      "Không cổng nào",
      "Cả hai trong STP đơn cây"
    ],
    "answer": 0,
    "explanation": "Root port ưu tiên đường có tổng root path cost thấp nhất, nên P1 được chọn.",
    "source": "Cisco — Spanning Tree Protocol Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/stp/stp-configuration-guide/m-stp.html",
    "id": "E10Q37"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Cisco CLI",
    "difficulty": "Nhận biết",
    "question": "Lệnh no shutdown trong interface configuration làm gì?",
    "options": [
      "Đóng toàn bộ router",
      "Bỏ trạng thái tắt do quản trị",
      "Xóa IP của interface",
      "Bảo đảm cáp luôn tốt"
    ],
    "answer": 1,
    "explanation": "no shutdown cho phép interface hoạt động về mặt quản trị, nhưng đường vật lý hoặc phía đối diện vẫn có thể lỗi.",
    "source": "Cisco IOS — Configuration Fundamentals",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/fundamentals/configuration/xe-16/fundamentals-xe-16-book/cf-cli-basics.html",
    "id": "E10Q38"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Switch",
    "difficulty": "Thông hiểu",
    "question": "Unknown unicast trong một VLAN thường được xử lý thế nào?",
    "options": [
      "Flood tất cả VLAN",
      "Luôn gửi đến default gateway",
      "Flood các cổng forwarding cùng VLAN trừ cổng vào",
      "Gửi ngược chỉ cổng vào"
    ],
    "answer": 2,
    "explanation": "Chưa biết vị trí MAC đích, switch flood trong miền VLAN để có khả năng tới đích; không vượt VLAN thuần tầng 2.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E10Q39"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "DTP",
    "difficulty": "Thông hiểu",
    "question": "Hai cổng hỗ trợ DTP đều dynamic auto, các điều kiện khác mặc định tương thích. Có tự hình thành trunk không?",
    "options": [
      "Chỉ nếu IP giống nhau",
      "Có luôn luôn",
      "Chỉ nếu port TCP là 53",
      "Không"
    ],
    "answer": 3,
    "explanation": "Cả hai phía thụ động nên không chủ động thúc đẩy thương lượng trunk.",
    "source": "Cisco — VLAN Trunk Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vlan-trunks.html",
    "id": "E10Q40"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "VTP",
    "difficulty": "Nhận biết",
    "question": "Trong VTP v1/v2, mode server có thể thực hiện thao tác nào?",
    "options": [
      "Tạo, sửa, xóa VLAN và quảng bá thay đổi",
      "Chỉ định tuyến OSPF",
      "Chỉ nhận VLAN, không sửa",
      "Chỉ lọc ACL"
    ],
    "answer": 0,
    "explanation": "Server trong mô hình VTP v1/v2 có thể quản lý cơ sở dữ liệu VLAN và phân phối thay đổi cho miền.",
    "source": "Cisco — Configure VTP (version-specific behavior)",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vtp.html",
    "id": "E10Q41"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "DTP",
    "difficulty": "Nhận biết",
    "question": "Dynamic auto thể hiện hành vi nào?",
    "options": [
      "Luôn ép access bất kể đối diện",
      "Sẵn sàng trunk khi bên kia chủ động phù hợp",
      "Luôn tạo VLAN mới",
      "Luôn chủ động tạo trunk với auto khác"
    ],
    "answer": 1,
    "explanation": "Auto là phía thụ động; cần phía đối diện trunk hoặc desirable trong điều kiện DTP tương thích.",
    "source": "Cisco — VLAN Trunk Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vlan-trunks.html",
    "id": "E10Q42"
  },
  {
    "chapter": "Chương 5",
    "topic": "Windows",
    "difficulty": "Nhận biết",
    "question": "tracert trên Windows giúp khảo sát điều gì?",
    "options": [
      "VLAN ID của mọi host",
      "Mật khẩu WLAN",
      "Các chặng trên đường đến đích",
      "Từ điển nén dữ liệu"
    ],
    "answer": 2,
    "explanation": "tracert tăng dần TTL hoặc Hop Limit và dùng phản hồi để suy ra các router trên đường đi.",
    "source": "Microsoft Learn — Windows networking commands",
    "sourceUrl": "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands",
    "id": "E10Q43"
  },
  {
    "chapter": "Chương 5",
    "topic": "WLAN",
    "difficulty": "Thông hiểu",
    "question": "BSSID thường dùng để nhận diện điều gì?",
    "options": [
      "Mật khẩu Wi-Fi",
      "Tên chung của mọi mạng Internet",
      "Địa chỉ IP công cộng của ISP",
      "Một BSS cụ thể"
    ],
    "answer": 3,
    "explanation": "BSSID là định danh tầng liên kết của BSS; trong hạ tầng thường gắn với địa chỉ MAC của AP radio hoặc BSS logic.",
    "source": "Cisco — WLAN Architecture: BSS, IBSS and ESS",
    "sourceUrl": "https://www.cisco.com/E-Learning/bulk/guest/celc/fwl/ch2/2_1_5/content.html",
    "id": "E10Q44"
  },
  {
    "chapter": "Chương 5",
    "topic": "GSM",
    "difficulty": "Nhận biết",
    "question": "Mobile Station trong GSM gồm thiết bị di động và thành phần nhận dạng thuê bao nào?",
    "options": [
      "SIM",
      "TCP trailer",
      "DNS zone",
      "VLAN tag"
    ],
    "answer": 0,
    "explanation": "MS thường được hiểu là thiết bị di động cùng SIM, hỗ trợ nhận dạng và sử dụng dịch vụ thuê bao.",
    "source": "ETSI GSM 03.02 — Network Architecture",
    "sourceUrl": "https://www.etsi.org/deliver/etsi_gts/03/0302/05.01.00_60/gsmts_0302v050100p.pdf",
    "id": "E10Q45"
  },
  {
    "chapter": "Chương 5",
    "topic": "GSM",
    "difficulty": "Vận dụng cao",
    "question": "Một tài liệu nói “BSS gồm BSC và BTS”, tài liệu khác nói “BSS gồm AP và station”. Kết luận nào đúng?",
    "options": [
      "AP là tên khác của MSC",
      "Hai tài liệu dùng chữ viết tắt BSS trong GSM và WLAN khác nhau",
      "BTS và station luôn là cùng thiết bị",
      "Một tài liệu chắc chắn sai"
    ],
    "answer": 1,
    "explanation": "BSS có hai nghĩa theo ngữ cảnh: Base Station Subsystem của GSM và Basic Service Set của 802.11.",
    "source": "ETSI GSM 03.02 — Network Architecture",
    "sourceUrl": "https://www.etsi.org/deliver/etsi_gts/03/0302/05.01.00_60/gsmts_0302v050100p.pdf",
    "id": "E10Q46"
  },
  {
    "chapter": "Chương 5",
    "topic": "WLAN",
    "difficulty": "Vận dụng",
    "question": "A và C không nghe được nhau nhưng đều tới AP B. Vấn đề tiềm ẩn là gì?",
    "options": [
      "TCP half-close",
      "DNS recursion",
      "Hidden node gây va chạm tại B",
      "MAC aging chỉ ở router"
    ],
    "answer": 2,
    "explanation": "Hai station có thể cùng cho rằng kênh rỗi và phát tới AP, khiến tín hiệu va chạm ở bên nhận.",
    "source": "Cisco — WLAN Architecture: BSS, IBSS and ESS",
    "sourceUrl": "https://www.cisco.com/E-Learning/bulk/guest/celc/fwl/ch2/2_1_5/content.html",
    "id": "E10Q47"
  },
  {
    "chapter": "Chương 5",
    "topic": "An toàn WLAN",
    "difficulty": "Vận dụng",
    "question": "Mục tiêu phòng chống nghe lén nội dung ứng dụng phù hợp nhất?",
    "options": [
      "Chỉ đổi tên SSID",
      "Chỉ giảm TTL",
      "Chỉ tăng DHCP lease",
      "Dùng mã hóa WLAN và giao thức đầu cuối được xác thực"
    ],
    "answer": 3,
    "explanation": "Mã hóa tầng truy nhập bảo vệ liên kết radio; TLS hợp lệ bổ sung bảo vệ nội dung và xác thực đầu cuối ứng dụng.",
    "source": "NIST SP 800-153 — Guidelines for Securing WLANs",
    "sourceUrl": "https://csrc.nist.gov/pubs/sp/800/153/final",
    "id": "E10Q48"
  },
  {
    "chapter": "Chương 5",
    "topic": "Windows",
    "difficulty": "Nhận biết",
    "question": "arp -a trên Windows hiển thị gì?",
    "options": [
      "Các mục cache ARP IPv4 theo interface",
      "Danh sách TCP flags",
      "Mọi IPv6 route",
      "Các Wi-Fi profile"
    ],
    "answer": 0,
    "explanation": "ARP cache ánh xạ địa chỉ IPv4 trong liên kết với địa chỉ tầng liên kết; không phải danh bạ toàn Internet.",
    "source": "Microsoft Learn — Windows networking commands",
    "sourceUrl": "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands",
    "id": "E10Q49"
  },
  {
    "chapter": "Chương 5",
    "topic": "An toàn WLAN",
    "difficulty": "Vận dụng",
    "question": "Phát hiện AP lạ dùng cùng tên mạng công ty. Hành động quản trị phù hợp nhất?",
    "options": [
      "Tắt mã hóa toàn mạng",
      "Đối chiếu danh mục AP được phép và điều tra log/cảnh báo",
      "Công bố mật khẩu nội bộ",
      "Tấn công trả đũa AP ngay"
    ],
    "answer": 1,
    "explanation": "Cần xác minh bằng quản lý tài sản và giám sát có thẩm quyền, tránh suy đoán chỉ từ tên mạng hoặc thực hiện hành vi trả đũa.",
    "source": "NIST SP 800-153 — Guidelines for Securing WLANs",
    "sourceUrl": "https://csrc.nist.gov/pubs/sp/800/153/final",
    "id": "E10Q50"
  }
];
