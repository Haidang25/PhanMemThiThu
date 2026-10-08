/* Tự biên soạn; xem tools/chapter*.txt và README.md. */
globalThis.EXAMS ||= {};
globalThis.EXAMS["04"] = [
  {
    "chapter": "Chương 1",
    "topic": "OSI",
    "difficulty": "Thông hiểu",
    "question": "IP đích đúng nhưng dịch vụ trả lời từ port TCP khác mong đợi. Tầng cần kiểm tra trực tiếp là gì?",
    "options": [
      "Transport",
      "Presentation",
      "Physical",
      "Data Link"
    ],
    "answer": 0,
    "explanation": "Port nằm trong TCP/UDP header ở tầng vận chuyển, không nằm trong header Ethernet hoặc IPv4.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E04Q01"
  },
  {
    "chapter": "Chương 1",
    "topic": "Topology",
    "difficulty": "Thông hiểu",
    "question": "Tree topology phù hợp nhất với cách tổ chức nào?",
    "options": [
      "Một cáp chung không phân nhánh",
      "Phân cấp theo các nhánh",
      "Chỉ hai máy kết nối",
      "Mọi nút nối trực tiếp mọi nút"
    ],
    "answer": 1,
    "explanation": "Tree tổ chức các nhánh theo cấp, thuận lợi cho mạng có cấu trúc phân tầng.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E04Q02"
  },
  {
    "chapter": "Chương 1",
    "topic": "OSI",
    "difficulty": "Nhận biết",
    "question": "PDU của tầng Data Link thường được gọi là gì?",
    "options": [
      "Packet IP",
      "Segment",
      "Frame",
      "Message HTTP"
    ],
    "answer": 2,
    "explanation": "Tầng liên kết đóng gói dữ liệu thành frame để truyền qua một liên kết.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E04Q03"
  },
  {
    "chapter": "Chương 1",
    "topic": "OSI",
    "difficulty": "Nhận biết",
    "question": "Tầng nào chịu trách nhiệm biểu diễn bit thành tín hiệu truyền?",
    "options": [
      "Application",
      "Session",
      "Network",
      "Physical"
    ],
    "answer": 3,
    "explanation": "Physical quy định các đặc tính truyền tín hiệu điện, quang hoặc vô tuyến tương ứng với bit.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E04Q04"
  },
  {
    "chapter": "Chương 1",
    "topic": "Topology",
    "difficulty": "Vận dụng",
    "question": "Full mesh có 5 nút, mỗi cặp dùng một liên kết hai chiều. Cần bao nhiêu liên kết?",
    "options": [
      "10",
      "5",
      "20",
      "15"
    ],
    "answer": 0,
    "explanation": "Mỗi nút nối 4 nút khác nhưng mỗi cạnh được tính hai lần: 5×4/2 = 10.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E04Q05"
  },
  {
    "chapter": "Chương 1",
    "topic": "Repeater",
    "difficulty": "Thông hiểu",
    "question": "Thêm nhiều repeater có bảo đảm kéo dài Ethernet vô hạn không?",
    "options": [
      "Có, nếu địa chỉ IP khác nhau",
      "Không, vẫn chịu giới hạn thời gian và tiêu chuẩn vật lý",
      "Có, vì repeater chia VLAN",
      "Có, vì TTL được tăng"
    ],
    "answer": 1,
    "explanation": "Công nghệ truyền có giới hạn về độ trễ, khoảng cách và quy tắc nối đoạn; repeater không loại bỏ chúng.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E04Q06"
  },
  {
    "chapter": "Chương 2",
    "topic": "Selective Repeat",
    "difficulty": "Thông hiểu",
    "question": "Trên đường dễ mất gói và cửa sổ lớn, SR thường tiết kiệm gì so với GBN?",
    "options": [
      "Số địa chỉ IP",
      "Dung lượng buffer receiver luôn luôn",
      "Băng thông truyền lại",
      "Số bit tối thiểu của checksum luôn luôn"
    ],
    "answer": 2,
    "explanation": "SR giữ các gói đến ngoài thứ tự nên tránh gửi lại những gói đó; đổi lại cần nhiều trạng thái và buffer hơn.",
    "source": "Kurose & Ross — Transport Layer, public teaching materials (UMass)",
    "sourceUrl": "https://gaia.cs.umass.edu/kurose_ross/videos/3/",
    "id": "E04Q07"
  },
  {
    "chapter": "Chương 2",
    "topic": "HTTP",
    "difficulty": "Thông hiểu",
    "question": "HEAD khác GET ở điểm chính nào?",
    "options": [
      "Không cho phép header",
      "Luôn gửi qua UDP",
      "Không có status code",
      "Response không có phần nội dung body"
    ],
    "answer": 3,
    "explanation": "HEAD lấy thông tin như GET nhưng máy chủ không gửi nội dung response body, hữu ích để kiểm tra metadata.",
    "source": "MDN — HTTP reference",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference",
    "id": "E04Q08"
  },
  {
    "chapter": "Chương 2",
    "topic": "IPv6",
    "difficulty": "Thông hiểu",
    "question": "Payload Length trong header cơ bản IPv6 thông thường tính phần nào?",
    "options": [
      "Mọi byte sau header cơ bản, gồm extension header",
      "Chỉ application data, bỏ transport header",
      "Cả 40 byte header cơ bản",
      "Cả Ethernet FCS"
    ],
    "answer": 0,
    "explanation": "Payload Length không gồm 40 byte đầu; các extension header và transport header đều thuộc payload này.",
    "source": "IETF RFC 8200 — IPv6 Specification",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc8200.html",
    "id": "E04Q09"
  },
  {
    "chapter": "Chương 2",
    "topic": "IPv4",
    "difficulty": "Thông hiểu",
    "question": "IPv4 Header Checksum bảo vệ phần nào?",
    "options": [
      "Toàn bộ TCP segment",
      "Chỉ IPv4 header",
      "Chỉ dữ liệu ứng dụng",
      "Toàn bộ Ethernet frame"
    ],
    "answer": 1,
    "explanation": "Checksum IPv4 kiểm tra header; kiểm tra lỗi payload do các cơ chế khác đảm nhiệm.",
    "source": "IETF RFC 791 — Internet Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc791.html",
    "id": "E04Q10"
  },
  {
    "chapter": "Chương 2",
    "topic": "RDT",
    "difficulty": "Nhận biết",
    "question": "RDT 1.0 giả định kênh bên dưới như thế nào?",
    "options": [
      "Luôn cần timeout",
      "Chỉ làm đảo thứ tự",
      "Hoàn toàn tin cậy, không lỗi bit hay mất gói",
      "Luôn mất mọi ACK"
    ],
    "answer": 2,
    "explanation": "RDT 1.0 là mô hình cơ sở với kênh lý tưởng, nên chưa cần cơ chế phát hiện lỗi và truyền lại.",
    "source": "Kurose & Ross — Transport Layer, public teaching materials (UMass)",
    "sourceUrl": "https://gaia.cs.umass.edu/kurose_ross/videos/3/",
    "id": "E04Q11"
  },
  {
    "chapter": "Chương 2",
    "topic": "Go-Back-N",
    "difficulty": "Thông hiểu",
    "question": "Khi mất một gói trong cửa sổ lớn, nhược điểm của GBN so với SR là gì?",
    "options": [
      "Không dùng số thứ tự",
      "Luôn cần nhiều buffer receiver hơn SR",
      "Không bao giờ truyền lại",
      "Có thể truyền lại cả các gói không bị mất"
    ],
    "answer": 3,
    "explanation": "Receiver GBN loại các gói đến sau chỗ mất nên sender phải gửi lại nhiều gói, tốn băng thông.",
    "source": "Kurose & Ross — Transport Layer, public teaching materials (UMass)",
    "sourceUrl": "https://gaia.cs.umass.edu/kurose_ross/videos/3/",
    "id": "E04Q12"
  },
  {
    "chapter": "Chương 2",
    "topic": "DNS",
    "difficulty": "Thông hiểu",
    "question": "Với iterative query, máy chủ chưa biết đáp án có thể trả gì?",
    "options": [
      "Referral đến máy chủ khác",
      "Toàn bộ file zone luôn luôn",
      "Một địa chỉ MAC bắt buộc",
      "Lệnh đổi gateway"
    ],
    "answer": 0,
    "explanation": "Trong phân giải lặp, resolver nhận referral rồi tự truy vấn máy chủ tiếp theo.",
    "source": "IETF RFC 1035 — Domain Names: Implementation and Specification",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc1035.html",
    "id": "E04Q13"
  },
  {
    "chapter": "Chương 2",
    "topic": "FTP",
    "difficulty": "Thông hiểu",
    "question": "Lệnh PORT trong FTP active dùng để thông báo gì?",
    "options": [
      "Độ dài UDP header",
      "Địa chỉ và cổng client chờ dữ liệu",
      "Cổng HTTP của proxy",
      "Mật khẩu DNS"
    ],
    "answer": 1,
    "explanation": "PORT cung cấp endpoint dữ liệu ở client để server có thể kết nối tới trong active mode.",
    "source": "IETF RFC 959 — File Transfer Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc959.html",
    "id": "E04Q14"
  },
  {
    "chapter": "Chương 2",
    "topic": "Go-Back-N",
    "difficulty": "Thông hiểu",
    "question": "ACK tích lũy trong GBN xác nhận điều gì?",
    "options": [
      "Các gói có cùng kích thước",
      "Mọi gói chưa gửi",
      "Các gói đã nhận liên tục đến một mốc",
      "Chỉ duy nhất gói mới nhất không liên quan gói trước"
    ],
    "answer": 2,
    "explanation": "ACK tích lũy cho phép một phản hồi xác nhận cả dãy đã nhận theo thứ tự; quy ước số ACK phải được xác định.",
    "source": "Kurose & Ross — Transport Layer, public teaching materials (UMass)",
    "sourceUrl": "https://gaia.cs.umass.edu/kurose_ross/videos/3/",
    "id": "E04Q15"
  },
  {
    "chapter": "Chương 2",
    "topic": "HTTP",
    "difficulty": "Thông hiểu",
    "question": "Content-Type: application/json cho biết điều gì?",
    "options": [
      "Độ dài TCP header",
      "Địa chỉ IP máy chủ",
      "Phiên bản TLS bắt buộc",
      "Kiểu media của nội dung"
    ],
    "answer": 3,
    "explanation": "Content-Type mô tả cách hiểu body; không tự xác định độ dài nội dung hay bảo đảm dữ liệu hợp lệ.",
    "source": "MDN — HTTP reference",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference",
    "id": "E04Q16"
  },
  {
    "chapter": "Chương 2",
    "topic": "Mã hóa đường truyền",
    "difficulty": "Vận dụng",
    "question": "Manchester quy ước 1=L→H, 0=H→L. Mã cho 10 là gì?",
    "options": [
      "LH HL",
      "LL HH",
      "HL LH",
      "HH LL"
    ],
    "answer": 0,
    "explanation": "Mỗi bit chiếm hai nửa: bit 1 là thấp-cao, bit 0 là cao-thấp theo quy ước đã cho.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E04Q17"
  },
  {
    "chapter": "Chương 2",
    "topic": "UDP",
    "difficulty": "Vận dụng",
    "question": "Ứng dụng gửi 120 byte qua UDP. Giá trị UDP Length là bao nhiêu?",
    "options": [
      "120",
      "128",
      "140",
      "148"
    ],
    "answer": 1,
    "explanation": "UDP header cố định 8 byte, nên trường Length bằng 120+8=128 byte.",
    "source": "IETF RFC 768 — User Datagram Protocol; RFC 8200 §8.1 for IPv6",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc768",
    "id": "E04Q18"
  },
  {
    "chapter": "Chương 2",
    "topic": "Nén dữ liệu",
    "difficulty": "Vận dụng",
    "question": "Dữ liệu ABABABAB, mỗi cặp RLE tốn 2 byte, mỗi ký tự gốc 1 byte. Dùng RLE đơn ký tự cho kết quả gì?",
    "options": [
      "8 byte",
      "2 byte",
      "16 byte, lớn hơn 8 byte gốc",
      "4 byte"
    ],
    "answer": 2,
    "explanation": "Không có ký tự liên tiếp giống nhau, nên 8 run dài 1 tốn 8×2=16 byte.",
    "source": "Carnegie Mellon University — Algorithms in the Real World: Compression",
    "sourceUrl": "https://www.cs.cmu.edu/afs/cs/project/pscico-guyb/realworld/www/slidesF15.html",
    "id": "E04Q19"
  },
  {
    "chapter": "Chương 2",
    "topic": "TCP",
    "difficulty": "Nhận biết",
    "question": "TCP Window Size do bên nhận quảng bá phục vụ cơ chế nào?",
    "options": [
      "Cấp VLAN",
      "Bầu root bridge",
      "Phân giải tên miền",
      "Điều khiển luồng"
    ],
    "answer": 3,
    "explanation": "Receive window báo khả năng nhận dữ liệu của đầu nhận, tránh làm tràn bộ đệm của nó.",
    "source": "IETF RFC 9293 — Transmission Control Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc9293.html",
    "id": "E04Q20"
  },
  {
    "chapter": "Chương 2",
    "topic": "TCP",
    "difficulty": "Nhận biết",
    "question": "Thứ tự bắt tay TCP ba bước thông thường là gì?",
    "options": [
      "SYN → SYN+ACK → ACK",
      "ACK → FIN → SYN",
      "SYN → FIN → RST",
      "PSH → ACK → FIN"
    ],
    "answer": 0,
    "explanation": "Hai đầu trao đổi số thứ tự ban đầu bằng SYN và xác nhận chúng trước khi kết nối được thiết lập.",
    "source": "IETF RFC 9293 — Transmission Control Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc9293.html",
    "id": "E04Q21"
  },
  {
    "chapter": "Chương 2",
    "topic": "DNS",
    "difficulty": "Vận dụng",
    "question": "Bản ghi được cache với TTL 300 giây, đã qua 120 giây không làm mới. Còn được dùng tối đa bao lâu?",
    "options": [
      "120 giây",
      "180 giây",
      "300 giây",
      "420 giây"
    ],
    "answer": 1,
    "explanation": "TTL trong cache giảm theo thời gian: 300−120=180 giây. TTL DNS khác với TTL chuyển tiếp của IP.",
    "source": "IETF RFC 1035 — Domain Names: Implementation and Specification",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc1035.html",
    "id": "E04Q22"
  },
  {
    "chapter": "Chương 2",
    "topic": "TCP",
    "difficulty": "Vận dụng",
    "question": "Server gửi SYN-ACK có SEQ=5000, ACK=1001, không dữ liệu. ACK thứ ba từ client xác nhận bao nhiêu?",
    "options": [
      "5000",
      "1002",
      "5001",
      "6001"
    ],
    "answer": 2,
    "explanation": "Client xác nhận SYN của server bằng SEQ_server+1 = 5001; ACK=1001 trong SYN-ACK xác nhận chiều ngược lại.",
    "source": "IETF RFC 9293 — Transmission Control Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc9293.html",
    "id": "E04Q23"
  },
  {
    "chapter": "Chương 2",
    "topic": "Selective Repeat",
    "difficulty": "Vận dụng cao",
    "question": "SR có M=8 nhưng đặt W=5 cho cả hai phía. Nguy cơ chính là gì?",
    "options": [
      "Checksum luôn bằng 0",
      "Không thể biểu diễn bit 1",
      "Window tự giảm TTL",
      "Nhầm gói cũ thành gói mới khi quay vòng"
    ],
    "answer": 3,
    "explanation": "W vượt M/2 làm vùng số cũ và mới có thể chồng lấn, gây mơ hồ khi bản truyền lại cũ xuất hiện.",
    "source": "Kurose & Ross — Transport Layer, public teaching materials (UMass)",
    "sourceUrl": "https://gaia.cs.umass.edu/kurose_ross/videos/3/",
    "id": "E04Q24"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "DTP",
    "difficulty": "Nhận biết",
    "question": "DTP là viết tắt của giao thức nào?",
    "options": [
      "Dynamic Trunking Protocol",
      "Domain Timing Protocol",
      "Dynamic Transfer Port",
      "Data Transport Prefix"
    ],
    "answer": 0,
    "explanation": "DTP là cơ chế Cisco thương lượng trạng thái trunk trên các cổng hỗ trợ, khác VTP đồng bộ VLAN.",
    "source": "Cisco — VLAN Trunk Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vlan-trunks.html",
    "id": "E04Q25"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Router",
    "difficulty": "Nhận biết",
    "question": "Routing table chứa loại thông tin nào?",
    "options": [
      "Toàn bộ file người dùng",
      "Mạng đích, next hop hoặc interface ra",
      "Mật khẩu Wi-Fi của mọi client",
      "Mọi DNS record Internet"
    ],
    "answer": 1,
    "explanation": "Bảng định tuyến mô tả khả năng đi tới prefix và cách gửi packet tới next hop hoặc đường ra.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E04Q26"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "VTP",
    "difficulty": "Thông hiểu",
    "question": "VTP transparent khác client ở đặc điểm chính nào?",
    "options": [
      "Không thể có trunk",
      "Luôn xóa VLAN cục bộ",
      "Quản lý VLAN cục bộ, không đồng bộ cơ sở dữ liệu theo quảng bá nhận",
      "Trở thành DHCP server"
    ],
    "answer": 2,
    "explanation": "Transparent không dùng quảng bá nhận để thay cơ sở dữ liệu VLAN của mình; quy tắc chuyển quảng bá còn phụ thuộc phiên bản.",
    "source": "Cisco — Configure VTP (version-specific behavior)",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vtp.html",
    "id": "E04Q27"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "VLAN",
    "difficulty": "Vận dụng",
    "question": "Cặp lệnh nào cấu hình access port thuộc VLAN 10?",
    "options": [
      "vlan 10; ip route 0.0.0.0",
      "enable; show startup-config",
      "switchport mode trunk; ip address 10",
      "switchport mode access; switchport access vlan 10"
    ],
    "answer": 3,
    "explanation": "Cần xác định port là access rồi gán VLAN access. Việc tạo VLAN trên thiết bị cũng phải phù hợp cấu hình.",
    "source": "Cisco — VLAN Trunk Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vlan-trunks.html",
    "id": "E04Q28"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Cisco CLI",
    "difficulty": "Thông hiểu",
    "question": "Đã no shutdown nhưng interface vẫn down/down. Kết luận hợp lý nhất?",
    "options": [
      "Cần kiểm tra thêm cáp, thiết bị đối diện và lớp vật lý",
      "no shutdown chắc chắn chưa chạy",
      "Chỉ cần tăng DHCP lease",
      "Phải đổi DNS đầu tiên"
    ],
    "answer": 0,
    "explanation": "Bật quản trị không bảo đảm liên kết vật lý hoạt động; trạng thái còn tùy cáp, transceiver và cổng đối diện.",
    "source": "Cisco IOS — Configuration Fundamentals",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/fundamentals/configuration/xe-16/fundamentals-xe-16-book/cf-cli-basics.html",
    "id": "E04Q29"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "ACL",
    "difficulty": "Nhận biết",
    "question": "Trong ACL, permit có nghĩa gì khi một gói khớp dòng đó?",
    "options": [
      "Định tuyến bắt buộc qua DNS",
      "Cho phép theo chính sách ACL đó",
      "Mã hóa gói",
      "Tăng TTL"
    ],
    "answer": 1,
    "explanation": "permit là quyết định cho qua của ACL; gói vẫn có thể chịu các chính sách hoặc kiểm tra khác.",
    "source": "Cisco IOS — IP Access List Overview",
    "sourceUrl": "https://www.cisco.com/en/US/docs/ios-xml/ios/sec_data_acl/configuration/15-1mt/IP_Access_List_Overview.html",
    "id": "E04Q30"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "DHCP",
    "difficulty": "Nhận biết",
    "question": "DHCP Discover có mục tiêu chính nào?",
    "options": [
      "Bầu root bridge",
      "Đổi MAC cổng trunk",
      "Tìm DHCP server khi client cần cấu hình",
      "Kiểm tra TCP checksum"
    ],
    "answer": 2,
    "explanation": "Discover giúp client chưa có cấu hình địa chỉ tìm các server có thể cấp phát trong mạng.",
    "source": "IETF RFC 2131 — Dynamic Host Configuration Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc2131.html",
    "id": "E04Q31"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Switch",
    "difficulty": "Thông hiểu",
    "question": "MAC aging giải quyết nhu cầu nào?",
    "options": [
      "Tăng tuổi TTL của IP",
      "Khóa vĩnh viễn một host",
      "Xóa VLAN mỗi giây",
      "Loại mục động lâu không được sử dụng/cập nhật"
    ],
    "answer": 3,
    "explanation": "Mục MAC động hết hạn giúp bảng thích ứng khi thiết bị di chuyển hoặc rời mạng.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E04Q32"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "STP",
    "difficulty": "Nhận biết",
    "question": "BPDU mang loại thông tin nào?",
    "options": [
      "Thông tin điều khiển STP",
      "HTTP cookies",
      "DHCP lease",
      "Dữ liệu video bắt buộc"
    ],
    "answer": 0,
    "explanation": "Switch trao đổi BPDU để bầu root và xác định vai trò, trạng thái các cổng trong spanning tree.",
    "source": "Cisco — Spanning Tree Protocol Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/stp/stp-configuration-guide/m-stp.html",
    "id": "E04Q33"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "VLAN",
    "difficulty": "Nhận biết",
    "question": "Access port trong mô hình dữ liệu cơ bản thường mang bao nhiêu VLAN dữ liệu?",
    "options": [
      "4096 VLAN đồng thời",
      "Một VLAN",
      "Tất cả VLAN luôn luôn",
      "Không VLAN nào"
    ],
    "answer": 1,
    "explanation": "Access port gán dữ liệu người dùng vào một VLAN; trường hợp voice VLAN riêng là ngoại lệ được cấu hình.",
    "source": "Cisco — VLAN Trunk Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vlan-trunks.html",
    "id": "E04Q34"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Routing",
    "difficulty": "Vận dụng",
    "question": "Bảng chuyển tiếp có /0, 192.168.0.0/16 và 192.168.10.0/24. Đích 192.168.10.5 chọn gì?",
    "options": [
      "192.168.0.0/16",
      "0.0.0.0/0",
      "192.168.10.0/24",
      "Cả ba bắt buộc chia đều"
    ],
    "answer": 2,
    "explanation": "Cả ba khớp nhưng /24 cụ thể nhất nên thắng theo longest prefix match.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E04Q35"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Router",
    "difficulty": "Vận dụng cao",
    "question": "Router chuyển IP giữa hai Ethernet LAN, không NAT. Tập thay đổi điển hình nào đúng?",
    "options": [
      "Port ứng dụng luôn đổi",
      "IP nguồn, IP đích luôn thay đổi",
      "Dữ liệu ứng dụng luôn bị nén",
      "MAC frame và TTL IPv4 thay đổi"
    ],
    "answer": 3,
    "explanation": "Router tạo frame cho chặng mới và giảm TTL; địa chỉ IP và port đầu cuối được giữ khi không có biến đổi đặc biệt.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E04Q36"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Switch",
    "difficulty": "Thông hiểu",
    "question": "Switch có 8 cổng access cùng VLAN, bỏ qua VLAN khác. Có bao nhiêu broadcast domain?",
    "options": [
      "1",
      "8",
      "16",
      "0"
    ],
    "answer": 0,
    "explanation": "Một VLAN tạo một broadcast domain. Số cổng riêng không tự làm tăng số broadcast domain.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E04Q37"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Cisco CLI",
    "difficulty": "Thông hiểu",
    "question": "Lệnh exit khi ở Router(config-if)# thường đưa đến đâu?",
    "options": [
      "Router> trực tiếp",
      "Router(config)#",
      "Luôn đóng nguồn",
      "Router(config-line)#"
    ],
    "answer": 1,
    "explanation": "exit lùi một cấp cấu hình; end mới thường quay thẳng về Privileged EXEC.",
    "source": "Cisco IOS — Configuration Fundamentals",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/fundamentals/configuration/xe-16/fundamentals-xe-16-book/cf-cli-basics.html",
    "id": "E04Q38"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "STP",
    "difficulty": "Thông hiểu",
    "question": "Trong STP 802.1D cổ điển, trạng thái Learning cho phép gì?",
    "options": [
      "Chỉ phát IP route",
      "Mã hóa BPDU",
      "Học MAC nhưng chưa chuyển frame dữ liệu người dùng",
      "Chuyển mọi broadcast ngay"
    ],
    "answer": 2,
    "explanation": "Learning chuẩn bị bảng MAC trước khi cổng chuyển sang Forwarding, giúp hạn chế flood khi bắt đầu truyền.",
    "source": "Cisco — Spanning Tree Protocol Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/stp/stp-configuration-guide/m-stp.html",
    "id": "E04Q39"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "NAT",
    "difficulty": "Vận dụng",
    "question": "Dynamic NAT không overload có pool 4 địa chỉ, bốn host đã chiếm ánh xạ. Host thứ năm cần ánh xạ mới thì sao?",
    "options": [
      "Luôn mượn MAC của host đầu",
      "Tự dùng port để chia sẻ chắc chắn",
      "Tự đổi thành IPv6",
      "Có thể thất bại vì pool hết địa chỉ"
    ],
    "answer": 3,
    "explanation": "Không có PAT, mỗi ánh xạ đồng thời cần địa chỉ pool riêng; hết pool có thể ngăn tạo ánh xạ mới.",
    "source": "Cisco — Configuring NAT for IP Address Conservation",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipaddr_nat/configuration/15-sy/nat-15-sy-book/iadnat-addr-consv.html",
    "id": "E04Q40"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "ACL",
    "difficulty": "Vận dụng cao",
    "question": "Mẫu “10.1.0.0 0.0.255.255” khớp địa chỉ nào?",
    "options": [
      "10.1.200.9",
      "11.1.0.9",
      "10.2.0.9",
      "10.10.0.1"
    ],
    "answer": 0,
    "explanation": "Hai octet đầu phải là 10.1; hai octet cuối được bỏ qua. Do đó 10.1.200.9 thuộc tập khớp.",
    "source": "Cisco IOS — IP Access List Overview",
    "sourceUrl": "https://www.cisco.com/en/US/docs/ios-xml/ios/sec_data_acl/configuration/15-1mt/IP_Access_List_Overview.html",
    "id": "E04Q41"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Routing",
    "difficulty": "Nhận biết",
    "question": "OSPF thuộc nhóm giao thức định tuyến nào?",
    "options": [
      "Giao thức DNS",
      "Link-state",
      "Distance-vector thuần theo RIP",
      "Giao thức truy nhập Wi-Fi"
    ],
    "answer": 1,
    "explanation": "OSPF trao đổi trạng thái liên kết và tính đường đi ngắn nhất dựa trên cơ sở dữ liệu topology.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E04Q42"
  },
  {
    "chapter": "Chương 5",
    "topic": "An toàn WLAN",
    "difficulty": "Thông hiểu",
    "question": "Vì sao lọc MAC không đủ làm cơ chế bảo vệ WLAN duy nhất?",
    "options": [
      "MAC không truyền qua radio",
      "MAC thay thế được mã hóa",
      "MAC có thể bị quan sát và giả mạo",
      "MAC luôn dài 128 bit"
    ],
    "answer": 2,
    "explanation": "Danh sách MAC không tạo xác thực mật mã mạnh; cần kết hợp bảo mật WLAN và kiểm soát truy nhập phù hợp.",
    "source": "NIST SP 800-153 — Guidelines for Securing WLANs",
    "sourceUrl": "https://csrc.nist.gov/pubs/sp/800/153/final",
    "id": "E04Q43"
  },
  {
    "chapter": "Chương 5",
    "topic": "WLAN",
    "difficulty": "Nhận biết",
    "question": "IBSS có đặc điểm nào trong mô hình Wi-Fi ad hoc truyền thống?",
    "options": [
      "Luôn có một AP quản lý",
      "Là tập hợp các router OSPF",
      "Chỉ là VLAN trên switch",
      "Các station giao tiếp không cần AP trung tâm"
    ],
    "answer": 3,
    "explanation": "Independent BSS hỗ trợ mạng ad hoc giữa station, không dùng AP như infrastructure BSS.",
    "source": "Cisco — WLAN Architecture: BSS, IBSS and ESS",
    "sourceUrl": "https://www.cisco.com/E-Learning/bulk/guest/celc/fwl/ch2/2_1_5/content.html",
    "id": "E04Q44"
  },
  {
    "chapter": "Chương 5",
    "topic": "Windows",
    "difficulty": "Nhận biết",
    "question": "Lệnh ipconfig trên Windows thường dùng để xem gì?",
    "options": [
      "Cấu hình IP cơ bản của các adapter",
      "Các file trên FTP server",
      "Nội dung mọi DNS zone",
      "Bảng VLAN của switch"
    ],
    "answer": 0,
    "explanation": "ipconfig hiển thị địa chỉ IP, subnet mask và gateway ở mức cơ bản để kiểm tra cấu hình máy.",
    "source": "Microsoft Learn — Windows networking commands",
    "sourceUrl": "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands",
    "id": "E04Q45"
  },
  {
    "chapter": "Chương 5",
    "topic": "GSM",
    "difficulty": "Vận dụng cao",
    "question": "Tín hiệu radio vẫn tốt nhưng hệ thống không tìm đúng vùng phục vụ của thuê bao cho cuộc gọi tới. Nhóm chức năng cần kiểm tra?",
    "options": [
      "Chỉ công suất BTS",
      "Quản lý vị trí liên quan HLR/VLR và MSC",
      "Chỉ nén ảnh JPEG",
      "Chỉ bảng MAC của switch"
    ],
    "answer": 1,
    "explanation": "Vùng phủ radio tốt không bảo đảm thông tin vị trí lõi chính xác; hồ sơ vị trí cần hỗ trợ định tuyến dịch vụ đến thuê bao.",
    "source": "ETSI GSM 03.02 — Network Architecture",
    "sourceUrl": "https://www.etsi.org/deliver/etsi_gts/03/0302/05.01.00_60/gsmts_0302v050100p.pdf",
    "id": "E04Q46"
  },
  {
    "chapter": "Chương 5",
    "topic": "An toàn WLAN",
    "difficulty": "Vận dụng cao",
    "question": "AP CPU và số phiên tăng cao, airtime vẫn vừa phải; nhiều client mới không được phục vụ. Nhóm vấn đề nào nên điều tra?",
    "options": [
      "Chỉ suy hao radio",
      "Chỉ tần số CPU client",
      "Cạn tài nguyên xử lý hoặc trạng thái của AP",
      "Chỉ DNS TTL quá dài"
    ],
    "answer": 2,
    "explanation": "Tài nguyên AP có thể cạn dù radio chưa kín; cần đối chiếu log và mẫu kết nối trước khi kết luận nguồn gốc.",
    "source": "NIST SP 800-153 — Guidelines for Securing WLANs",
    "sourceUrl": "https://csrc.nist.gov/pubs/sp/800/153/final",
    "id": "E04Q47"
  },
  {
    "chapter": "Chương 5",
    "topic": "GSM",
    "difficulty": "Vận dụng",
    "question": "Máy đang gọi di chuyển từ vùng phủ BTS A sang BTS B. Quá trình quan trọng để duy trì cuộc gọi là gì?",
    "options": [
      "DNS recursion",
      "DHCP DORA",
      "VTP advertisement",
      "Handover"
    ],
    "answer": 3,
    "explanation": "Kết nối phải được chuyển sang tài nguyên phục vụ mới phù hợp; đây là chức năng handover trong mạng di động.",
    "source": "ETSI GSM 03.02 — Network Architecture",
    "sourceUrl": "https://www.etsi.org/deliver/etsi_gts/03/0302/05.01.00_60/gsmts_0302v050100p.pdf",
    "id": "E04Q48"
  },
  {
    "chapter": "Chương 5",
    "topic": "WLAN",
    "difficulty": "Thông hiểu",
    "question": "RTS/CTS có thể hỗ trợ giảm tác động của vấn đề nào?",
    "options": [
      "Hidden node",
      "Hết DHCP pool",
      "Mất VLAN database",
      "Sai HTTP URI"
    ],
    "answer": 0,
    "explanation": "Trao đổi đặt trước thời gian sử dụng kênh có thể giúp các station xung quanh tránh phát chồng, với chi phí điều khiển bổ sung.",
    "source": "Cisco — WLAN Architecture: BSS, IBSS and ESS",
    "sourceUrl": "https://www.cisco.com/E-Learning/bulk/guest/celc/fwl/ch2/2_1_5/content.html",
    "id": "E04Q49"
  },
  {
    "chapter": "Chương 5",
    "topic": "Windows",
    "difficulty": "Nhận biết",
    "question": "netsh wlan show interfaces giúp xem gì?",
    "options": [
      "Danh sách VLAN trên router",
      "Trạng thái và thông tin các giao diện WLAN",
      "TCP sequence của website",
      "Mật khẩu mọi AP"
    ],
    "answer": 1,
    "explanation": "Lệnh hiển thị thông tin giao diện không dây, gồm trạng thái kết nối và các thuộc tính khả dụng theo thiết bị.",
    "source": "Microsoft Learn — Windows networking commands",
    "sourceUrl": "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands",
    "id": "E04Q50"
  }
];
