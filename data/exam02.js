/* Tự biên soạn; xem tools/chapter*.txt và README.md. */
globalThis.EXAMS ||= {};
globalThis.EXAMS["02"] = [
  {
    "chapter": "Chương 1",
    "topic": "OSI",
    "difficulty": "Thông hiểu",
    "question": "Khi nhận frame có FCS sai, switch store-and-forward thường làm gì?",
    "options": [
      "Loại bỏ frame lỗi",
      "Sửa bằng DNS",
      "Cập nhật IP nguồn",
      "Chuyển thành SYN"
    ],
    "answer": 0,
    "explanation": "Store-and-forward nhận đủ frame và kiểm tra FCS trước khi chuyển tiếp; frame không hợp lệ bị loại.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E02Q01"
  },
  {
    "chapter": "Chương 1",
    "topic": "OSI",
    "difficulty": "Nhận biết",
    "question": "Trong mô hình OSI, chuyển đổi biểu diễn và nén dữ liệu gắn với tầng nào?",
    "options": [
      "Data Link",
      "Presentation",
      "Network",
      "Physical"
    ],
    "answer": 1,
    "explanation": "Presentation mô tả biểu diễn dữ liệu, gồm chuyển đổi định dạng, nén và mã hóa trong mô hình tham chiếu.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E02Q02"
  },
  {
    "chapter": "Chương 1",
    "topic": "Topology",
    "difficulty": "Thông hiểu",
    "question": "Trong star, đứt riêng cáp nối một máy thường gây hậu quả nào?",
    "options": [
      "Mạng tự chuyển thành bus",
      "Mọi máy đều mất kết nối",
      "Máy đó mất kết nối với trung tâm",
      "Switch mất bảng định tuyến"
    ],
    "answer": 2,
    "explanation": "Mỗi nhánh star độc lập; đứt một nhánh không cắt các nhánh còn lại nếu trung tâm vẫn hoạt động.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E02Q03"
  },
  {
    "chapter": "Chương 1",
    "topic": "Topology",
    "difficulty": "Vận dụng cao",
    "question": "Cần mạng 4 nút chịu được bất kỳ một liên kết bị đứt, cho phép chọn đường thay thế. Phương án nào đáp ứng với ít cạnh nhất trong các lựa chọn?",
    "options": [
      "Chuỗi 3 cạnh",
      "Star 3 cạnh",
      "Cây 3 cạnh",
      "Vòng 4 cạnh"
    ],
    "answer": 3,
    "explanation": "Vòng còn đường đi sau khi mất một cạnh. Các cấu trúc cây chỉ có một đường giữa hai nút nên mất cạnh sẽ chia mạng.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E02Q04"
  },
  {
    "chapter": "Chương 1",
    "topic": "Repeater",
    "difficulty": "Nhận biết",
    "question": "Repeater cơ bản hoạt động ở tầng OSI nào?",
    "options": [
      "Physical",
      "Transport",
      "Data Link",
      "Network"
    ],
    "answer": 0,
    "explanation": "Repeater xử lý tín hiệu ở tầng vật lý, không quyết định chuyển tiếp theo địa chỉ IP hay MAC.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E02Q05"
  },
  {
    "chapter": "Chương 1",
    "topic": "OSI",
    "difficulty": "Vận dụng",
    "question": "Không NAT, một TCP segment đi qua 3 router. Cặp địa chỉ nào định danh IP đầu cuối vẫn giữ nguyên?",
    "options": [
      "VLAN ID và FCS",
      "IP nguồn và IP đích",
      "MAC router đầu và MAC router cuối",
      "MAC nguồn và MAC đích"
    ],
    "answer": 1,
    "explanation": "Địa chỉ IP biểu diễn hai đầu cuối; các header liên kết thay đổi theo từng chặng.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E02Q06"
  },
  {
    "chapter": "Chương 2",
    "topic": "IPv4",
    "difficulty": "Nhận biết",
    "question": "Giá trị trường Version của IPv4 là bao nhiêu?",
    "options": [
      "6",
      "32",
      "4",
      "20"
    ],
    "answer": 2,
    "explanation": "Version có giá trị 4 để nhận diện IPv4; 20 là số byte header tối thiểu, không phải phiên bản.",
    "source": "IETF RFC 791 — Internet Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc791.html",
    "id": "E02Q07"
  },
  {
    "chapter": "Chương 2",
    "topic": "RDT",
    "difficulty": "Vận dụng",
    "question": "ACK bị trễ đến sau timeout nhưng dữ liệu gốc đã nhận đúng. Vì sao sequence number vẫn cần thiết?",
    "options": [
      "Thay thế checksum hoàn toàn",
      "Tự tăng tốc đường truyền",
      "Tự giảm RTT vật lý",
      "Tránh giao bản truyền lại như dữ liệu mới"
    ],
    "answer": 3,
    "explanation": "Timeout không chứng minh dữ liệu đã mất; số thứ tự cho phép receiver loại bản lặp khi truyền lại do ACK trễ.",
    "source": "Kurose & Ross — Transport Layer, public teaching materials (UMass)",
    "sourceUrl": "https://gaia.cs.umass.edu/kurose_ross/videos/3/",
    "id": "E02Q08"
  },
  {
    "chapter": "Chương 2",
    "topic": "HTTP",
    "difficulty": "Thông hiểu",
    "question": "Nhận 404 từ tên miền đang truy cập cho phép kết luận gì?",
    "options": [
      "Đã có trao đổi HTTP với một máy chủ phản hồi",
      "Mọi dịch vụ trên host đều chết",
      "DNS chắc chắn đang lỗi",
      "Cáp mạng chắc chắn đứt"
    ],
    "answer": 0,
    "explanation": "Mã trạng thái HTTP chứng tỏ client nhận được response; vấn đề có thể nằm ở đường dẫn hay quyền che giấu tài nguyên.",
    "source": "MDN — HTTP reference",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference",
    "id": "E02Q09"
  },
  {
    "chapter": "Chương 2",
    "topic": "TCP",
    "difficulty": "Nhận biết",
    "question": "Cờ SYN chủ yếu dùng để làm gì?",
    "options": [
      "Kết thúc truyền một chiều",
      "Đồng bộ số thứ tự khi thiết lập kết nối",
      "Định tuyến packet",
      "Báo lỗi checksum IP"
    ],
    "answer": 1,
    "explanation": "SYN mở quá trình đồng bộ sequence number; FIN dành cho kết thúc gửi dữ liệu.",
    "source": "IETF RFC 9293 — Transmission Control Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc9293.html",
    "id": "E02Q10"
  },
  {
    "chapter": "Chương 2",
    "topic": "Selective Repeat",
    "difficulty": "Vận dụng",
    "question": "SR base=10, đã nhận 11 và 12, đang thiếu 10. Khi 10 đến đúng, có thể giao liên tục đến gói nào?",
    "options": [
      "Chỉ 10",
      "9",
      "12",
      "Chỉ 11"
    ],
    "answer": 2,
    "explanation": "Các gói 11 và 12 đã nằm trong buffer; khi khoảng trống 10 được lấp, cả dãy 10–12 được giao theo thứ tự.",
    "source": "Kurose & Ross — Transport Layer, public teaching materials (UMass)",
    "sourceUrl": "https://gaia.cs.umass.edu/kurose_ross/videos/3/",
    "id": "E02Q11"
  },
  {
    "chapter": "Chương 2",
    "topic": "UDP",
    "difficulty": "Thông hiểu",
    "question": "Ứng dụng UDP cần truyền tin cậy phải làm gì?",
    "options": [
      "Bật cờ SYN của UDP",
      "Chỉ đặt port nguồn bằng 0",
      "Chỉ tăng UDP Length",
      "Bổ sung cơ chế ở ứng dụng hoặc dùng giao thức phù hợp"
    ],
    "answer": 3,
    "explanation": "UDP tự nó không có ACK, timeout hay truyền lại; độ tin cậy phải do tầng trên bổ sung.",
    "source": "IETF RFC 768 — User Datagram Protocol; RFC 8200 §8.1 for IPv6",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc768",
    "id": "E02Q12"
  },
  {
    "chapter": "Chương 2",
    "topic": "Nén dữ liệu",
    "difficulty": "Thông hiểu",
    "question": "Thuộc tính prefix-free của mã Huffman hỗ trợ điều gì?",
    "options": [
      "Giải mã không mơ hồ từng chuỗi ký hiệu",
      "Định tuyến dựa trên tiền tố IP",
      "Mã hóa bí mật dữ liệu",
      "Loại bỏ mọi header"
    ],
    "answer": 0,
    "explanation": "Không từ mã nào là tiền tố của từ mã khác, giúp xác định ranh giới mã khi đọc bit.",
    "source": "Carnegie Mellon University — Algorithms in the Real World: Compression",
    "sourceUrl": "https://www.cs.cmu.edu/afs/cs/project/pscico-guyb/realworld/www/slidesF15.html",
    "id": "E02Q13"
  },
  {
    "chapter": "Chương 2",
    "topic": "Go-Back-N",
    "difficulty": "Vận dụng cao",
    "question": "GBN: ACK k xác nhận đến k. ACK 1 bị mất nhưng ACK 3 đến hợp lệ trước timeout. Có cần gửi lại riêng gói 1 không?",
    "options": [
      "Không, vì gói 1 bị bỏ vĩnh viễn",
      "Không, ACK 3 đã bao phủ gói 1",
      "Có, receiver không có checksum",
      "Có, mọi ACK mất đều buộc truyền lại"
    ],
    "answer": 1,
    "explanation": "Tính tích lũy cho phép ACK sau xác nhận cả các gói trước; mất một ACK chưa chắc gây truyền lại.",
    "source": "Kurose & Ross — Transport Layer, public teaching materials (UMass)",
    "sourceUrl": "https://gaia.cs.umass.edu/kurose_ross/videos/3/",
    "id": "E02Q14"
  },
  {
    "chapter": "Chương 2",
    "topic": "Selective Repeat",
    "difficulty": "Vận dụng",
    "question": "SR: gói 2 nhận đúng, ACK 2 mất, receiver đã trượt cửa sổ. Gói 2 cũ được truyền lại trong vùng cửa sổ trước. Nên làm gì?",
    "options": [
      "Xóa toàn bộ buffer mới",
      "Đổi thành gói 3",
      "ACK lại nhưng không giao trùng",
      "Luôn coi là dữ liệu mới"
    ],
    "answer": 2,
    "explanation": "ACK lại gói cũ hợp lệ giúp sender dừng truyền lại; receiver không giao lại dữ liệu đã giao.",
    "source": "Kurose & Ross — Transport Layer, public teaching materials (UMass)",
    "sourceUrl": "https://gaia.cs.umass.edu/kurose_ross/videos/3/",
    "id": "E02Q15"
  },
  {
    "chapter": "Chương 2",
    "topic": "DNS",
    "difficulty": "Thông hiểu",
    "question": "Phần Answers thường chứa gì khi phân giải thành công?",
    "options": [
      "Toàn bộ router đã đi qua",
      "Chỉ số TCP ACK",
      "Các địa chỉ MAC nguồn",
      "Các resource record trả lời câu hỏi"
    ],
    "answer": 3,
    "explanation": "Answers mang các bản ghi phù hợp với yêu cầu, có thể gồm chuỗi CNAME và địa chỉ liên quan.",
    "source": "IETF RFC 1035 — Domain Names: Implementation and Specification",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc1035.html",
    "id": "E02Q16"
  },
  {
    "chapter": "Chương 2",
    "topic": "IPv4",
    "difficulty": "Vận dụng cao",
    "question": "IPv4 payload 3000 byte, header 20 byte, MTU 1500, cho phép phân mảnh. Bộ kích thước payload nào đúng?",
    "options": [
      "1480, 1480, 40",
      "1500, 1500",
      "1480, 1520",
      "1460, 1460, 80"
    ],
    "answer": 0,
    "explanation": "Mỗi mảnh có tối đa 1500−20=1480 byte, chia hết cho 8. Hai mảnh đầu dùng 2960 byte, còn 40 byte.",
    "source": "IETF RFC 791 — Internet Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc791.html",
    "id": "E02Q17"
  },
  {
    "chapter": "Chương 2",
    "topic": "IPv6",
    "difficulty": "Vận dụng",
    "question": "IPv6 Payload Length=1200, không jumbogram. Tổng độ dài packet IPv6 là bao nhiêu?",
    "options": [
      "1160 byte",
      "1240 byte",
      "1220 byte",
      "1200 byte"
    ],
    "answer": 1,
    "explanation": "Tổng packet bằng header cơ bản 40 byte cộng payload 1200 byte. Do đó kết quả là 1240 byte, chưa tính header và trailer của tầng liên kết.",
    "source": "IETF RFC 8200 — IPv6 Specification",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc8200.html",
    "id": "E02Q18"
  },
  {
    "chapter": "Chương 2",
    "topic": "FTP",
    "difficulty": "Thông hiểu",
    "question": "Lệnh PASV yêu cầu server làm gì?",
    "options": [
      "Đóng kênh điều khiển",
      "Gửi SYN đến cổng 20 của client",
      "Lắng nghe kết nối dữ liệu thụ động và báo địa chỉ/cổng",
      "Xóa mọi file"
    ],
    "answer": 2,
    "explanation": "PASV chuyển sang cơ chế server chờ kết nối dữ liệu từ client và cung cấp thông tin endpoint.",
    "source": "IETF RFC 959 — File Transfer Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc959.html",
    "id": "E02Q19"
  },
  {
    "chapter": "Chương 2",
    "topic": "RDT",
    "difficulty": "Vận dụng cao",
    "question": "Stop-and-wait: thời gian phát gói 1 ms, RTT 19 ms, bỏ qua thời gian ACK. Hiệu suất lý tưởng là bao nhiêu?",
    "options": [
      "50%",
      "95%",
      "20%",
      "5%"
    ],
    "answer": 3,
    "explanation": "Chu kỳ phát và đợi ACK dài 1+19=20 ms, chỉ có 1 ms phát dữ liệu: 1/20=5%.",
    "source": "Kurose & Ross — Transport Layer, public teaching materials (UMass)",
    "sourceUrl": "https://gaia.cs.umass.edu/kurose_ross/videos/3/",
    "id": "E02Q20"
  },
  {
    "chapter": "Chương 2",
    "topic": "TCP",
    "difficulty": "Nhận biết",
    "question": "Cặp Source Port và Destination Port nằm ở đâu?",
    "options": [
      "TCP header",
      "Ethernet FCS",
      "DNS Authority",
      "IPv4 trailer"
    ],
    "answer": 0,
    "explanation": "Các port trong TCP header xác định điểm cuối vận chuyển; IP header mang địa chỉ host.",
    "source": "IETF RFC 9293 — Transmission Control Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc9293.html",
    "id": "E02Q21"
  },
  {
    "chapter": "Chương 2",
    "topic": "HTTP",
    "difficulty": "Nhận biết",
    "question": "Dòng “HTTP/1.1 200 OK” thuộc phần nào?",
    "options": [
      "DNS question",
      "Status line của response",
      "Request line của client",
      "TCP trailer"
    ],
    "answer": 1,
    "explanation": "Response HTTP/1.1 mở đầu bằng phiên bản, mã trạng thái và reason phrase.",
    "source": "MDN — HTTP reference",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference",
    "id": "E02Q22"
  },
  {
    "chapter": "Chương 2",
    "topic": "Mã hóa đường truyền",
    "difficulty": "Thông hiểu",
    "question": "Vì sao bài tập Manchester cần nêu quy ước hướng chuyển mức?",
    "options": [
      "Vì Manchester không truyền được 0",
      "Vì chỉ có một mức điện",
      "Các tài liệu có thể dùng quy ước 0/1 ngược nhau",
      "Vì hướng chuyển mức luôn ngẫu nhiên"
    ],
    "answer": 2,
    "explanation": "Cả hai quy ước đều có chuyển mức giữa bit; nêu rõ ánh xạ tránh suy luận đảo bit.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E02Q23"
  },
  {
    "chapter": "Chương 2",
    "topic": "IPv6",
    "difficulty": "Vận dụng",
    "question": "Router IPv6 thấy packet lớn hơn MTU ra. Ai có thể tạo fragment IPv6?",
    "options": [
      "DNS resolver",
      "Switch tầng 2",
      "Mọi router trung gian",
      "Nguồn gửi, sau khi điều chỉnh theo thông tin MTU"
    ],
    "answer": 3,
    "explanation": "Router IPv6 không phân mảnh, thường báo ICMPv6 Packet Too Big; nguồn có thể dùng Fragment header.",
    "source": "IETF RFC 8200 — IPv6 Specification",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc8200.html",
    "id": "E02Q24"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "NAT",
    "difficulty": "Nhận biết",
    "question": "Static NAT cơ bản tạo kiểu ánh xạ nào?",
    "options": [
      "Một địa chỉ nội bộ với một địa chỉ toàn cục cố định",
      "VLAN với số thứ tự TCP",
      "Nhiều địa chỉ với một port duy nhất",
      "Tên miền với địa chỉ MAC"
    ],
    "answer": 0,
    "explanation": "Static NAT ánh xạ địa chỉ một-một ổn định theo cấu hình; không phải tự chọn từ pool cho từng phiên.",
    "source": "Cisco — Configuring NAT for IP Address Conservation",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipaddr_nat/configuration/15-sy/nat-15-sy-book/iadnat-addr-consv.html",
    "id": "E02Q25"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "VLAN",
    "difficulty": "Nhận biết",
    "question": "VLAN giúp chia một hạ tầng switch thành những miền nào?",
    "options": [
      "Các hệ thống DNS độc lập bắt buộc",
      "Các broadcast domain logic",
      "Các vùng địa lý vật lý bắt buộc",
      "Các TCP stream"
    ],
    "answer": 1,
    "explanation": "VLAN phân tách lưu lượng tầng 2 theo nhóm logic dù các thiết bị dùng chung switch vật lý.",
    "source": "Cisco — VLAN Trunk Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vlan-trunks.html",
    "id": "E02Q26"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "DHCP",
    "difficulty": "Nhận biết",
    "question": "DHCPv4 dùng cặp cổng UDP server/client nào?",
    "options": [
      "20/21",
      "68/67",
      "67/68",
      "53/53"
    ],
    "answer": 2,
    "explanation": "DHCPv4 server nghe UDP 67, client dùng UDP 68; không phải kết nối TCP.",
    "source": "IETF RFC 2131 — Dynamic Host Configuration Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc2131.html",
    "id": "E02Q27"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "ACL",
    "difficulty": "Nhận biết",
    "question": "ACL Cisco xử lý các dòng theo nguyên tắc nào?",
    "options": [
      "Từ dưới lên luôn luôn",
      "Chỉ xét dòng cuối",
      "Chọn dòng có port lớn nhất",
      "Từ trên xuống, dừng ở dòng khớp đầu tiên"
    ],
    "answer": 3,
    "explanation": "Thứ tự dòng ảnh hưởng trực tiếp kết quả vì quyết định đầu tiên khớp được áp dụng.",
    "source": "Cisco IOS — IP Access List Overview",
    "sourceUrl": "https://www.cisco.com/en/US/docs/ios-xml/ios/sec_data_acl/configuration/15-1mt/IP_Access_List_Overview.html",
    "id": "E02Q28"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Cisco CLI",
    "difficulty": "Nhận biết",
    "question": "Dấu nhắc Router(config-if)# cho biết đang ở đâu?",
    "options": [
      "Interface Configuration",
      "Privileged EXEC",
      "User EXEC",
      "Line Configuration"
    ],
    "answer": 0,
    "explanation": "Hậu tố config-if cho biết các lệnh cấu hình hiện áp dụng trong ngữ cảnh interface đã chọn.",
    "source": "Cisco IOS — Configuration Fundamentals",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/fundamentals/configuration/xe-16/fundamentals-xe-16-book/cf-cli-basics.html",
    "id": "E02Q29"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "VTP",
    "difficulty": "Vận dụng",
    "question": "VTP database mới đã tới switch, nhưng máy ở cổng access vẫn trong VLAN cũ. Giải thích nào đúng?",
    "options": [
      "Máy phải đổi MAC để đọc VTP",
      "VTP không tự thay access VLAN của cổng",
      "VTP chỉ hoạt động với IPv6",
      "Revision chưa thể là số chẵn"
    ],
    "answer": 1,
    "explanation": "Danh sách VLAN được đồng bộ không kéo theo thay đổi cấu hình membership của mỗi port.",
    "source": "Cisco — Configure VTP (version-specific behavior)",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vtp.html",
    "id": "E02Q30"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "DTP",
    "difficulty": "Thông hiểu",
    "question": "Dynamic desirable nối dynamic auto, DTP hoạt động và tương thích. Kết quả điển hình?",
    "options": [
      "Tự bật OSPF",
      "Luôn access",
      "Hình thành trunk",
      "Cả hai shutdown"
    ],
    "answer": 2,
    "explanation": "Desirable chủ động thương lượng, auto chấp thuận chế độ trunk khi các điều kiện tương thích.",
    "source": "Cisco — VLAN Trunk Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vlan-trunks.html",
    "id": "E02Q31"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "NAT",
    "difficulty": "Thông hiểu",
    "question": "NAT có tự mã hóa nội dung packet không?",
    "options": [
      "Có, NAT luôn dùng AES",
      "Có, vì IP thay đổi",
      "Có, nếu địa chỉ là private",
      "Không, NAT chủ yếu dịch địa chỉ và có thể port"
    ],
    "answer": 3,
    "explanation": "Ẩn hoặc thay địa chỉ không đồng nghĩa bảo mật nội dung. Mã hóa cần giao thức hoặc cơ chế riêng.",
    "source": "Cisco — Configuring NAT for IP Address Conservation",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipaddr_nat/configuration/15-sy/nat-15-sy-book/iadnat-addr-consv.html",
    "id": "E02Q32"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "STP",
    "difficulty": "Thông hiểu",
    "question": "Designated port trên một segment đóng vai trò gì?",
    "options": [
      "Cung cấp đường được chọn từ segment về root",
      "Chỉ nhận TCP ACK",
      "Chỉ dùng cho DNS",
      "Luôn là cổng bị tắt điện"
    ],
    "answer": 0,
    "explanation": "Mỗi segment chọn cổng designated theo thông tin đường về root, để tránh nhiều nhánh chuyển tiếp tạo vòng.",
    "source": "Cisco — Spanning Tree Protocol Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/stp/stp-configuration-guide/m-stp.html",
    "id": "E02Q33"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "ACL",
    "difficulty": "Thông hiểu",
    "question": "Wildcard mask có bit 0 yêu cầu điều gì?",
    "options": [
      "Bỏ qua bit địa chỉ tương ứng",
      "Bit địa chỉ tương ứng phải khớp",
      "Đảo địa chỉ nguồn",
      "Luôn cho phép mọi địa chỉ"
    ],
    "answer": 1,
    "explanation": "Trong wildcard ACL, 0 nghĩa so khớp, 1 nghĩa bỏ qua bit đó; khác cách diễn giải subnet mask.",
    "source": "Cisco IOS — IP Access List Overview",
    "sourceUrl": "https://www.cisco.com/en/US/docs/ios-xml/ios/sec_data_acl/configuration/15-1mt/IP_Access_List_Overview.html",
    "id": "E02Q34"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "STP",
    "difficulty": "Thông hiểu",
    "question": "Để chủ động chọn root phù hợp thiết kế, nên điều chỉnh tham số nào?",
    "options": [
      "TCP ACK number",
      "DHCP lease",
      "Bridge priority",
      "DNS TTL"
    ],
    "answer": 2,
    "explanation": "Priority cho phép quản trị ảnh hưởng việc bầu root một cách có chủ đích, thay vì để MAC quyết định ngẫu nhiên.",
    "source": "Cisco — Spanning Tree Protocol Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/stp/stp-configuration-guide/m-stp.html",
    "id": "E02Q35"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Routing",
    "difficulty": "Thông hiểu",
    "question": "Administrative distance trên Cisco dùng chủ yếu để so sánh gì?",
    "options": [
      "Số ký tự hostname",
      "Độ dài cáp vật lý",
      "Độ rộng cửa sổ TCP",
      "Độ tin cậy các nguồn route cho cùng prefix"
    ],
    "answer": 3,
    "explanation": "AD giúp chọn nguồn route khi nhiều giao thức cung cấp cùng prefix; metric so sánh tuyến trong phạm vi giao thức.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E02Q36"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Switch",
    "difficulty": "Nhận biết",
    "question": "Ethernet broadcast có MAC đích nào?",
    "options": [
      "FF:FF:FF:FF:FF:FF",
      "00:00:00:00:00:00",
      "255.255.255.0",
      "127.0.0.1"
    ],
    "answer": 0,
    "explanation": "Tất cả 48 bit của địa chỉ Ethernet broadcast đều là 1; địa chỉ IP không phải MAC.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E02Q37"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "VTP",
    "difficulty": "Thông hiểu",
    "question": "Revision number trong VTP v1/v2 chủ yếu giúp xác định gì?",
    "options": [
      "Tốc độ interface",
      "Mức cập nhật của cơ sở dữ liệu VLAN",
      "Số hop đến root bridge",
      "Số bit của VLAN ID"
    ],
    "answer": 1,
    "explanation": "Revision tăng theo thay đổi VLAN để switch nhận biết bản thông tin mới hơn trong miền phù hợp.",
    "source": "Cisco — Configure VTP (version-specific behavior)",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vtp.html",
    "id": "E02Q38"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "DTP",
    "difficulty": "Thông hiểu",
    "question": "Cổng trunk tĩnh đang gửi DTP. Lệnh switchport nonegotiate trên nền tảng hỗ trợ nhằm làm gì?",
    "options": [
      "Tự đặt access VLAN 1",
      "Xóa tất cả IP route",
      "Ngừng gửi thương lượng DTP",
      "Tắt truyền mọi VLAN"
    ],
    "answer": 2,
    "explanation": "nonegotiate tắt thương lượng DTP; chế độ trunk tĩnh đã cấu hình có thể tiếp tục hoạt động.",
    "source": "Cisco — VLAN Trunk Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vlan-trunks.html",
    "id": "E02Q39"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Router",
    "difficulty": "Thông hiểu",
    "question": "Forwarding khác routing ở trọng tâm nào?",
    "options": [
      "Cả hai đều chỉ mã hóa dữ liệu",
      "Routing chỉ xử lý bit",
      "Forwarding chỉ cấp IP",
      "Forwarding chuyển từng packet, routing xác lập đường đi"
    ],
    "answer": 3,
    "explanation": "Routing xây dựng thông tin đường đi; forwarding áp dụng thông tin đó cho lưu lượng thực tế.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E02Q40"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "VLAN",
    "difficulty": "Nhận biết",
    "question": "Lệnh vlan 10 trong global configuration dùng để làm gì?",
    "options": [
      "Tạo hoặc vào cấu hình VLAN 10",
      "Định tuyến đến mạng 10.0.0.0",
      "Gán ngay mọi cổng vào VLAN 10",
      "Tạo subnet /10"
    ],
    "answer": 0,
    "explanation": "Lệnh chọn ngữ cảnh VLAN; cần lệnh riêng để gán cổng hay cấu hình địa chỉ tầng 3.",
    "source": "Cisco — VLAN Trunk Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vlan-trunks.html",
    "id": "E02Q41"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "STP",
    "difficulty": "Nhận biết",
    "question": "Mục tiêu chính của STP trong mạng Ethernet có liên kết dư thừa là gì?",
    "options": [
      "Cấp port ứng dụng",
      "Tạo topology chuyển tiếp không vòng lặp",
      "Mã hóa mọi frame",
      "Phân giải tên miền"
    ],
    "answer": 1,
    "explanation": "STP giữ các đường dự phòng nhưng chặn một số đường ở mức chuyển tiếp để tránh loop tầng 2.",
    "source": "Cisco — Spanning Tree Protocol Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/stp/stp-configuration-guide/m-stp.html",
    "id": "E02Q42"
  },
  {
    "chapter": "Chương 5",
    "topic": "WLAN",
    "difficulty": "Vận dụng",
    "question": "Hai AP gần nhau dùng cùng kênh có thể ảnh hưởng hiệu năng thế nào?",
    "options": [
      "Tự tăng gấp đôi băng thông mỗi client",
      "Tự tạo hai tần số khác nhau",
      "Phải chia sẻ airtime và có thể gây tranh chấp",
      "Luôn mất toàn bộ IP"
    ],
    "answer": 2,
    "explanation": "Cùng kênh trong phạm vi nghe nhau thường chia sẻ môi trường; bố trí kênh và công suất ảnh hưởng hiệu năng.",
    "source": "Cisco — WLAN Architecture: BSS, IBSS and ESS",
    "sourceUrl": "https://www.cisco.com/E-Learning/bulk/guest/celc/fwl/ch2/2_1_5/content.html",
    "id": "E02Q43"
  },
  {
    "chapter": "Chương 5",
    "topic": "An toàn WLAN",
    "difficulty": "Vận dụng cao",
    "question": "Người dùng vào đúng SSID nhưng gặp portal khác thường và chứng chỉ sai. Đánh giá nào thận trọng nhất?",
    "options": [
      "Đúng SSID bảo đảm an toàn tuyệt đối",
      "Chỉ cần tăng âm lượng máy",
      "TLS sai là dấu hiệu mạng nhanh hơn",
      "SSID không chứng minh danh tính; dừng nhập dữ liệu và xác minh"
    ],
    "answer": 3,
    "explanation": "Nhiều dấu hiệu cần được kiểm tra cùng nhau; không cung cấp thông tin nhạy cảm khi chưa xác minh điểm truy nhập và máy chủ.",
    "source": "NIST SP 800-153 — Guidelines for Securing WLANs",
    "sourceUrl": "https://csrc.nist.gov/pubs/sp/800/153/final",
    "id": "E02Q44"
  },
  {
    "chapter": "Chương 5",
    "topic": "Windows",
    "difficulty": "Thông hiểu",
    "question": "Muốn xem SSID/BSSID của kết nối Wi-Fi hiện tại trên Windows khi thông tin được hệ thống cho phép, dùng lệnh nào?",
    "options": [
      "netsh wlan show interfaces",
      "netsh wlan show profiles",
      "arp -d *",
      "ipconfig /flushdns"
    ],
    "answer": 0,
    "explanation": "show interfaces tập trung trạng thái kết nối đang hoạt động; profiles chỉ liệt kê cấu hình đã lưu.",
    "source": "Microsoft Learn — Windows networking commands",
    "sourceUrl": "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands",
    "id": "E02Q45"
  },
  {
    "chapter": "Chương 5",
    "topic": "An toàn WLAN",
    "difficulty": "Nhận biết",
    "question": "Active attack khác passive ở đặc điểm nào?",
    "options": [
      "Chỉ đọc tài liệu công khai",
      "Chủ động tạo, sửa hoặc làm gián đoạn lưu lượng/hệ thống",
      "Chỉ quan sát im lặng",
      "Không gây thay đổi gì"
    ],
    "answer": 1,
    "explanation": "Tính chủ động nằm ở sự can thiệp vào hoạt động mạng, không chỉ nghe dữ liệu có sẵn.",
    "source": "NIST SP 800-153 — Guidelines for Securing WLANs",
    "sourceUrl": "https://csrc.nist.gov/pubs/sp/800/153/final",
    "id": "E02Q46"
  },
  {
    "chapter": "Chương 5",
    "topic": "WLAN",
    "difficulty": "Vận dụng",
    "question": "Cùng SSID nhưng BSSID khác nhau trong danh sách quan sát có thể cho biết gì?",
    "options": [
      "Cùng một MAC vật lý duy nhất",
      "Mạng không có AP",
      "Có nhiều BSS quảng bá cùng tên mạng",
      "Chắc chắn đã bị tấn công"
    ],
    "answer": 2,
    "explanation": "Nhiều AP/BSS trong triển khai WLAN hợp lệ có thể cùng SSID. Cần thêm dữ kiện mới kết luận giả mạo.",
    "source": "Cisco — WLAN Architecture: BSS, IBSS and ESS",
    "sourceUrl": "https://www.cisco.com/E-Learning/bulk/guest/celc/fwl/ch2/2_1_5/content.html",
    "id": "E02Q47"
  },
  {
    "chapter": "Chương 5",
    "topic": "Windows",
    "difficulty": "Thông hiểu",
    "question": "ping một IP thất bại có chứng minh host đích đã tắt không?",
    "options": [
      "Không, ping luôn thành công",
      "Có, luôn luôn",
      "Có, nếu là private IP",
      "Không, ICMP có thể bị chặn hoặc đường đi lỗi"
    ],
    "answer": 3,
    "explanation": "Không nhận Echo Reply có nhiều nguyên nhân như lọc ICMP, lỗi đường truyền hoặc host không đáp ứng.",
    "source": "Microsoft Learn — Windows networking commands",
    "sourceUrl": "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands",
    "id": "E02Q48"
  },
  {
    "chapter": "Chương 5",
    "topic": "GSM",
    "difficulty": "Thông hiểu",
    "question": "Cell trong mạng di động được hiểu là gì?",
    "options": [
      "Vùng phủ vô tuyến phục vụ bởi hệ thống trạm tương ứng",
      "Một VLAN trunk",
      "Một packet TCP",
      "Một bản ghi DNS"
    ],
    "answer": 0,
    "explanation": "Chia vùng phủ thành cell giúp tổ chức tài nguyên vô tuyến và hỗ trợ di động trên diện rộng.",
    "source": "ETSI GSM 03.02 — Network Architecture",
    "sourceUrl": "https://www.etsi.org/deliver/etsi_gts/03/0302/05.01.00_60/gsmts_0302v050100p.pdf",
    "id": "E02Q49"
  },
  {
    "chapter": "Chương 5",
    "topic": "WLAN",
    "difficulty": "Vận dụng",
    "question": "Nhóm laptop cần mạng ad hoc trực tiếp, không AP, trên thiết bị hỗ trợ chế độ này. Kiến trúc tương ứng?",
    "options": [
      "ESS nhiều BSS",
      "IBSS",
      "MSC",
      "BSS hạ tầng bắt buộc"
    ],
    "answer": 1,
    "explanation": "IBSS không dựa trên AP hạ tầng; hỗ trợ thực tế phụ thuộc hệ điều hành và thiết bị.",
    "source": "Cisco — WLAN Architecture: BSS, IBSS and ESS",
    "sourceUrl": "https://www.cisco.com/E-Learning/bulk/guest/celc/fwl/ch2/2_1_5/content.html",
    "id": "E02Q50"
  }
];
