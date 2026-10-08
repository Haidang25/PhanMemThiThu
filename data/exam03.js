/* Tự biên soạn; xem tools/chapter*.txt và README.md. */
globalThis.EXAMS ||= {};
globalThis.EXAMS["03"] = [
  {
    "chapter": "Chương 1",
    "topic": "OSI",
    "difficulty": "Nhận biết",
    "question": "PDU TCP thường được gọi là gì?",
    "options": [
      "Segment",
      "DNS record",
      "Bit đơn",
      "Frame Ethernet"
    ],
    "answer": 0,
    "explanation": "Segment là đơn vị dữ liệu của TCP; frame thuộc tầng liên kết. Một segment gồm TCP header và phần dữ liệu, trước khi được đóng gói vào IP.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E03Q01"
  },
  {
    "chapter": "Chương 1",
    "topic": "OSI",
    "difficulty": "Thông hiểu",
    "question": "Máy nhận xử lý Ethernet rồi IPv4 rồi TCP. Đây là ví dụ của gì?",
    "options": [
      "Nén dữ liệu tại router",
      "Giải đóng gói từ tầng thấp lên cao",
      "Định tuyến theo tên miền",
      "Đóng gói từ ứng dụng xuống dây"
    ],
    "answer": 1,
    "explanation": "Bên nhận lần lượt đọc và gỡ thông tin tầng liên kết, mạng, vận chuyển để đưa dữ liệu lên ứng dụng.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E03Q02"
  },
  {
    "chapter": "Chương 1",
    "topic": "Repeater",
    "difficulty": "Nhận biết",
    "question": "Thiết bị nào trong các lựa chọn có thể chọn tuyến dựa trên IP đích?",
    "options": [
      "Hub thụ động",
      "Repeater",
      "Router",
      "Đầu nối cáp"
    ],
    "answer": 2,
    "explanation": "Router xử lý tầng mạng và dùng bảng định tuyến; repeater và hub không làm việc này.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E03Q03"
  },
  {
    "chapter": "Chương 1",
    "topic": "Topology",
    "difficulty": "Vận dụng cao",
    "question": "Mạng cần mọi cặp trong 8 nút có đường trực tiếp; thiết bị hiện có tổng 40 cổng cho các liên kết này. Thiếu bao nhiêu cổng?",
    "options": [
      "8",
      "56",
      "28",
      "16"
    ],
    "answer": 3,
    "explanation": "Full mesh cần 28 liên kết, mỗi liên kết chiếm 2 cổng: 56 cổng. So với 40 cổng còn thiếu 16.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E03Q04"
  },
  {
    "chapter": "Chương 1",
    "topic": "Topology",
    "difficulty": "Thông hiểu",
    "question": "Trong bus cổ điển, terminator ở hai đầu cáp có mục đích gì?",
    "options": [
      "Hạn chế phản xạ tín hiệu",
      "Tạo kết nối TCP",
      "Cấp phát địa chỉ IP",
      "Lọc MAC nguồn"
    ],
    "answer": 0,
    "explanation": "Đầu cuối phù hợp trở kháng giúp hấp thụ tín hiệu, tránh phản xạ làm sai lệch truyền dẫn.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E03Q05"
  },
  {
    "chapter": "Chương 1",
    "topic": "OSI",
    "difficulty": "Thông hiểu",
    "question": "Chuẩn hóa giao diện giữa các tầng đem lại lợi ích nào?",
    "options": [
      "Loại bỏ nhu cầu kiểm thử",
      "Các triển khai khác nhau có thể tương tác theo quy tắc chung",
      "Mọi gói tự có cùng kích thước",
      "Biến mọi ứng dụng thành TCP"
    ],
    "answer": 1,
    "explanation": "Giao diện và giao thức chuẩn giúp các thành phần tương thích dù được triển khai khác nhau.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E03Q06"
  },
  {
    "chapter": "Chương 2",
    "topic": "IPv6",
    "difficulty": "Vận dụng",
    "question": "Công cụ đọc IPv6 luôn coi byte thứ 40 là TCP header. Vì sao có thể sai?",
    "options": [
      "Header IPv6 dài ngẫu nhiên",
      "TCP luôn nằm trước IPv6",
      "Có extension header trước TCP",
      "IPv6 luôn dùng UDP"
    ],
    "answer": 2,
    "explanation": "Header cơ bản cố định nhưng chuỗi Next Header có thể dẫn qua extension header trước khi tới TCP.",
    "source": "IETF RFC 8200 — IPv6 Specification",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc8200.html",
    "id": "E03Q07"
  },
  {
    "chapter": "Chương 2",
    "topic": "HTTP",
    "difficulty": "Thông hiểu",
    "question": "Server muốn yêu cầu client thử lại sau đợt bảo trì. Cặp nào thích hợp?",
    "options": [
      "200 và Location",
      "401 và Fragment Offset",
      "404 và SYN",
      "503 và Retry-After"
    ],
    "answer": 3,
    "explanation": "503 mô tả dịch vụ chưa sẵn sàng; Retry-After có thể chỉ thời điểm hoặc khoảng chờ trước khi thử lại.",
    "source": "MDN — HTTP reference",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference",
    "id": "E03Q08"
  },
  {
    "chapter": "Chương 2",
    "topic": "FTP",
    "difficulty": "Thông hiểu",
    "question": "Firewall client chặn SYN mới từ server. FTP active có thể bị ảnh hưởng ở đâu?",
    "options": [
      "Kết nối dữ liệu server khởi tạo",
      "Chỉ DNS query",
      "Độ dài IPv6 header",
      "Bảng MAC của switch"
    ],
    "answer": 0,
    "explanation": "Active yêu cầu server mở kết nối vào client; chính sách chặn kết nối mới đi vào có thể cản bước này.",
    "source": "IETF RFC 959 — File Transfer Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc959.html",
    "id": "E03Q09"
  },
  {
    "chapter": "Chương 2",
    "topic": "Nén dữ liệu",
    "difficulty": "Thông hiểu",
    "question": "Nén dựa trên từ điển thường thay chuỗi lặp bằng gì?",
    "options": [
      "Cờ SYN",
      "Tham chiếu đến chuỗi đã biết",
      "MAC broadcast",
      "Địa chỉ router"
    ],
    "answer": 1,
    "explanation": "Từ điển hoặc cửa sổ lịch sử lưu mẫu chuỗi để dùng tham chiếu ngắn thay cho việc chép lại toàn bộ.",
    "source": "Carnegie Mellon University — Algorithms in the Real World: Compression",
    "sourceUrl": "https://www.cs.cmu.edu/afs/cs/project/pscico-guyb/realworld/www/slidesF15.html",
    "id": "E03Q10"
  },
  {
    "chapter": "Chương 2",
    "topic": "TCP",
    "difficulty": "Nhận biết",
    "question": "Cờ ACK cho biết điều gì về TCP header?",
    "options": [
      "Kết nối chắc chắn đã đóng",
      "Checksum được bỏ qua",
      "Trường Acknowledgment Number có ý nghĩa",
      "Packet không có dữ liệu"
    ],
    "answer": 2,
    "explanation": "ACK đánh dấu trường số xác nhận có hiệu lực; segment có ACK vẫn có thể mang dữ liệu.",
    "source": "IETF RFC 9293 — Transmission Control Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc9293.html",
    "id": "E03Q11"
  },
  {
    "chapter": "Chương 2",
    "topic": "DNS",
    "difficulty": "Thông hiểu",
    "question": "Địa chỉ glue của name server trong phản hồi DNS thường nằm ở phần nào?",
    "options": [
      "Questions",
      "TCP options",
      "IP trailer",
      "Additional"
    ],
    "answer": 3,
    "explanation": "Additional có thể kèm địa chỉ name server, giảm nhu cầu truy vấn bổ sung khi đi theo referral.",
    "source": "IETF RFC 1035 — Domain Names: Implementation and Specification",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc1035.html",
    "id": "E03Q12"
  },
  {
    "chapter": "Chương 2",
    "topic": "TCP",
    "difficulty": "Thông hiểu",
    "question": "RST khác FIN ở ý nghĩa chủ yếu nào?",
    "options": [
      "RST đặt lại/hủy kết nối thay vì đóng có trật tự",
      "RST luôn gửi toàn bộ dữ liệu còn lại",
      "RST chỉ dùng trong UDP",
      "FIN không chiếm sequence number"
    ],
    "answer": 0,
    "explanation": "Reset báo hủy hoặc từ chối kết nối; FIN hỗ trợ kết thúc có thứ tự và được xác nhận.",
    "source": "IETF RFC 9293 — Transmission Control Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc9293.html",
    "id": "E03Q13"
  },
  {
    "chapter": "Chương 2",
    "topic": "Nén dữ liệu",
    "difficulty": "Vận dụng",
    "question": "Quy ước RLE ghi (ký tự,số lần). Chuỗi AAAABB được biểu diễn thế nào?",
    "options": [
      "(AB,3)",
      "(A,4)(B,2)",
      "(A,6)",
      "(A,2)(B,4)"
    ],
    "answer": 1,
    "explanation": "Bốn A liên tiếp tạo một run, sau đó hai B tạo run thứ hai; không gom các ký tự khác nhau thành một run.",
    "source": "Carnegie Mellon University — Algorithms in the Real World: Compression",
    "sourceUrl": "https://www.cs.cmu.edu/afs/cs/project/pscico-guyb/realworld/www/slidesF15.html",
    "id": "E03Q14"
  },
  {
    "chapter": "Chương 2",
    "topic": "TCP",
    "difficulty": "Vận dụng",
    "question": "Bên nhận TCP đã có liên tục byte 0–999; nhận byte 1500–1999 khi thiếu 1000–1499. ACK tích lũy vẫn là gì?",
    "options": [
      "1500",
      "2000",
      "1000",
      "999"
    ],
    "answer": 2,
    "explanation": "ACK tích lũy dừng ở khoảng trống đầu tiên. Dữ liệu đến sau không làm tăng ACK liên tục qua byte còn thiếu.",
    "source": "IETF RFC 9293 — Transmission Control Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc9293.html",
    "id": "E03Q15"
  },
  {
    "chapter": "Chương 2",
    "topic": "RDT",
    "difficulty": "Nhận biết",
    "question": "RDT 2.0 bổ sung cơ chế chính nào để xử lý lỗi bit?",
    "options": [
      "DNS caching",
      "NAT overload",
      "VLAN và trunk",
      "Checksum cùng ACK/NAK"
    ],
    "answer": 3,
    "explanation": "Checksum phát hiện lỗi, ACK xác nhận đúng và NAK yêu cầu truyền lại trong mô hình có lỗi bit.",
    "source": "Kurose & Ross — Transport Layer, public teaching materials (UMass)",
    "sourceUrl": "https://gaia.cs.umass.edu/kurose_ross/videos/3/",
    "id": "E03Q16"
  },
  {
    "chapter": "Chương 2",
    "topic": "DNS",
    "difficulty": "Nhận biết",
    "question": "Bản ghi DNS loại A ánh xạ tên miền tới loại dữ liệu nào?",
    "options": [
      "Địa chỉ IPv4",
      "Địa chỉ MAC",
      "Địa chỉ IPv6",
      "Port TCP"
    ],
    "answer": 0,
    "explanation": "A chứa địa chỉ IPv4; AAAA dùng cho IPv6. DNS không dùng A để lưu địa chỉ MAC.",
    "source": "IETF RFC 1035 — Domain Names: Implementation and Specification",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc1035.html",
    "id": "E03Q17"
  },
  {
    "chapter": "Chương 2",
    "topic": "IPv4",
    "difficulty": "Nhận biết",
    "question": "IHL của IPv4 đo theo đơn vị nào?",
    "options": [
      "Byte đơn",
      "Từ 32 bit",
      "Bit đơn",
      "Khối 8 byte"
    ],
    "answer": 1,
    "explanation": "IHL đếm các từ 32 bit, tức mỗi đơn vị là 4 byte; giá trị tối thiểu 5 tương ứng 20 byte.",
    "source": "IETF RFC 791 — Internet Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc791.html",
    "id": "E03Q18"
  },
  {
    "chapter": "Chương 2",
    "topic": "UDP",
    "difficulty": "Vận dụng cao",
    "question": "IPv4 packet dài 100 byte, IHL=5, chứa một UDP datagram đầy đủ. UDP Length và dữ liệu ứng dụng là bao nhiêu?",
    "options": [
      "72 và 64 byte",
      "100 và 92 byte",
      "80 và 72 byte",
      "80 và 80 byte"
    ],
    "answer": 2,
    "explanation": "Bỏ 20 byte IP còn 80 byte UDP; bỏ tiếp 8 byte UDP header còn 72 byte ứng dụng.",
    "source": "IETF RFC 768 — User Datagram Protocol; RFC 8200 §8.1 for IPv6",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc768",
    "id": "E03Q19"
  },
  {
    "chapter": "Chương 2",
    "topic": "Mã hóa đường truyền",
    "difficulty": "Thông hiểu",
    "question": "So với NRZ cùng tốc độ bit, Manchester thường đòi hỏi gì?",
    "options": [
      "Không cần môi trường vật lý",
      "Ít chuyển mức hơn luôn luôn",
      "Không cần clock",
      "Băng thông tín hiệu lớn hơn"
    ],
    "answer": 3,
    "explanation": "Manchester có chuyển mức giữa mỗi bit nên tốc độ thay đổi tín hiệu cao hơn, đánh đổi băng thông lấy khả năng đồng bộ.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E03Q20"
  },
  {
    "chapter": "Chương 2",
    "topic": "HTTP",
    "difficulty": "Nhận biết",
    "question": "HTTP 404 có nghĩa trực tiếp nào?",
    "options": [
      "Không tìm thấy biểu diễn hiện tại của tài nguyên đích",
      "Gateway bị tắt",
      "Không tồn tại kết nối TCP",
      "DNS không phân giải được"
    ],
    "answer": 0,
    "explanation": "404 là phản hồi HTTP từ máy chủ; không đồng nghĩa DNS hoặc kết nối mạng bị lỗi.",
    "source": "MDN — HTTP reference",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference",
    "id": "E03Q21"
  },
  {
    "chapter": "Chương 2",
    "topic": "Selective Repeat",
    "difficulty": "Vận dụng cao",
    "question": "Cùng dùng sequence 4 bit: cửa sổ tối đa GBN và SR (hai phía bằng nhau) lần lượt là gì?",
    "options": [
      "16 và 16",
      "15 và 8",
      "4 và 4",
      "8 và 15"
    ],
    "answer": 1,
    "explanation": "Không gian là 16: GBN cho phép 16−1=15, còn SR mỗi phía tối đa 16/2=8.",
    "source": "Kurose & Ross — Transport Layer, public teaching materials (UMass)",
    "sourceUrl": "https://gaia.cs.umass.edu/kurose_ross/videos/3/",
    "id": "E03Q22"
  },
  {
    "chapter": "Chương 2",
    "topic": "IPv4",
    "difficulty": "Vận dụng",
    "question": "IP Total Length=620 và IHL=5. Payload IP dài bao nhiêu?",
    "options": [
      "640 byte",
      "615 byte",
      "600 byte",
      "620 byte"
    ],
    "answer": 2,
    "explanation": "Header dài 5×4=20 byte. Payload bằng 620−20=600 byte, bao gồm cả header tầng trên.",
    "source": "IETF RFC 791 — Internet Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc791.html",
    "id": "E03Q23"
  },
  {
    "chapter": "Chương 2",
    "topic": "Go-Back-N",
    "difficulty": "Nhận biết",
    "question": "Với k bit số thứ tự, sender window tối đa của GBN chuẩn là bao nhiêu?",
    "options": [
      "2^k",
      "2^(k−1)",
      "k",
      "2^k−1"
    ],
    "answer": 3,
    "explanation": "Cần chừa một giá trị để tránh nhầm giữa cửa sổ cũ và mới khi số thứ tự quay vòng.",
    "source": "Kurose & Ross — Transport Layer, public teaching materials (UMass)",
    "sourceUrl": "https://gaia.cs.umass.edu/kurose_ross/videos/3/",
    "id": "E03Q24"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "STP",
    "difficulty": "Vận dụng",
    "question": "Đường qua A có cost đến A là 4, A báo root cost 19. Tổng cost qua A là bao nhiêu?",
    "options": [
      "23",
      "4",
      "19",
      "15"
    ],
    "answer": 0,
    "explanation": "Cost đường qua láng giềng bằng cost liên kết cục bộ cộng cost láng giềng đã báo tới root.",
    "source": "Cisco — Spanning Tree Protocol Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/stp/stp-configuration-guide/m-stp.html",
    "id": "E03Q25"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "VTP",
    "difficulty": "Nhận biết",
    "question": "VTP domain dùng để xác định điều gì?",
    "options": [
      "Một TCP connection",
      "Nhóm switch chia sẻ thông tin VLAN theo VTP",
      "Tên miền DNS của mọi client",
      "Một dải DHCP lease"
    ],
    "answer": 1,
    "explanation": "Tên VTP domain giới hạn phạm vi quản lý VLAN; không liên quan trực tiếp DNS domain của ứng dụng.",
    "source": "Cisco — Configure VTP (version-specific behavior)",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vtp.html",
    "id": "E03Q26"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Switch",
    "difficulty": "Vận dụng",
    "question": "Trong VLAN 10 có cổng 1,2,3 forwarding; frame broadcast vào cổng 2. Switch chuyển ra đâu?",
    "options": [
      "Chỉ cổng 2",
      "Mọi cổng thuộc VLAN 20",
      "Cổng 1 và 3",
      "Cả 1,2,3"
    ],
    "answer": 2,
    "explanation": "Flood trong VLAN trừ chính cổng vào, nên chỉ các cổng 1 và 3 đáp ứng điều kiện.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E03Q27"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "VLAN",
    "difficulty": "Nhận biết",
    "question": "Trunk port được dùng chủ yếu để làm gì?",
    "options": [
      "Mã hóa tất cả frame",
      "Chỉ nối một máy không IP",
      "Thay DHCP server",
      "Mang lưu lượng nhiều VLAN trên cùng liên kết"
    ],
    "answer": 3,
    "explanation": "Trunk dùng cơ chế nhận diện VLAN như 802.1Q để chia sẻ liên kết vật lý giữa nhiều VLAN.",
    "source": "Cisco — VLAN Trunk Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vlan-trunks.html",
    "id": "E03Q28"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Cisco CLI",
    "difficulty": "Nhận biết",
    "question": "Từ Router>, lệnh nào vào Privileged EXEC?",
    "options": [
      "enable",
      "interface g0/0",
      "configure terminal",
      "no shutdown"
    ],
    "answer": 0,
    "explanation": "enable chuyển từ User EXEC sang Privileged EXEC, thường có dấu nhắc Router# và có thể yêu cầu xác thực.",
    "source": "Cisco IOS — Configuration Fundamentals",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/fundamentals/configuration/xe-16/fundamentals-xe-16-book/cf-cli-basics.html",
    "id": "E03Q29"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "DTP",
    "difficulty": "Vận dụng",
    "question": "Hai cổng auto không thành trunk; đổi một đầu sang desirable thì thành trunk. Lời giải thích phù hợp?",
    "options": [
      "MAC nguồn đã được mã hóa",
      "Đã có phía chủ động thương lượng DTP",
      "DHCP đã cấp VLAN",
      "Số port đã đổi thành 21"
    ],
    "answer": 1,
    "explanation": "Auto/auto đều thụ động; thêm desirable tạo phía chủ động để phía auto có thể chấp nhận trunk.",
    "source": "Cisco — VLAN Trunk Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vlan-trunks.html",
    "id": "E03Q30"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "NAT",
    "difficulty": "Thông hiểu",
    "question": "Hai client cùng dùng địa chỉ công cộng 203.0.113.10 với các port nguồn dịch khác nhau. Đây là gì?",
    "options": [
      "DNS round-robin",
      "VLAN trunking",
      "PAT",
      "Static NAT một-một thuần"
    ],
    "answer": 2,
    "explanation": "Dịch nhiều phiên lên cùng địa chỉ và tách bằng port là Port Address Translation, còn gọi NAT overload.",
    "source": "Cisco — Configuring NAT for IP Address Conservation",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipaddr_nat/configuration/15-sy/nat-15-sy-book/iadnat-addr-consv.html",
    "id": "E03Q31"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "NAT",
    "difficulty": "Thông hiểu",
    "question": "Inside local trong thuật ngữ Cisco NAT là gì?",
    "options": [
      "Địa chỉ DNS root",
      "MAC của gateway",
      "Địa chỉ host ngoài như thấy ngoài Internet",
      "Địa chỉ host nội bộ như thấy ở phía trong"
    ],
    "answer": 3,
    "explanation": "Inside local là địa chỉ của host bên trong trước khi được biểu diễn bằng địa chỉ inside global ở phía ngoài.",
    "source": "Cisco — Configuring NAT for IP Address Conservation",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipaddr_nat/configuration/15-sy/nat-15-sy-book/iadnat-addr-consv.html",
    "id": "E03Q32"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Routing",
    "difficulty": "Nhận biết",
    "question": "Default route IPv4 được biểu diễn bằng prefix nào?",
    "options": [
      "0.0.0.0/0",
      "127.0.0.0/8",
      "224.0.0.0/4",
      "255.255.255.255/32"
    ],
    "answer": 0,
    "explanation": "Prefix /0 khớp mọi địa chỉ và được dùng khi không có tuyến cụ thể hơn phù hợp.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E03Q33"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "ACL",
    "difficulty": "Vận dụng",
    "question": "“permit tcp any host 192.0.2.10 eq 443” cho phép loại gói nào?",
    "options": [
      "ICMP tới 192.0.2.10",
      "TCP tới 192.0.2.10 port đích 443",
      "TCP từ 192.0.2.10 port nguồn 443 tới mọi host",
      "UDP tới mọi host port 443"
    ],
    "answer": 1,
    "explanation": "Trong cú pháp này, eq 443 đứng sau địa chỉ đích nên chỉ port đích TCP.",
    "source": "Cisco IOS — IP Access List Overview",
    "sourceUrl": "https://www.cisco.com/en/US/docs/ios-xml/ios/sec_data_acl/configuration/15-1mt/IP_Access_List_Overview.html",
    "id": "E03Q34"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "ACL",
    "difficulty": "Thông hiểu",
    "question": "Chỉ tạo ACL mà chưa áp vào interface hay tính năng liên quan thì có tự lọc mọi lưu lượng không?",
    "options": [
      "Có, nhưng chỉ VLAN1",
      "Có, mọi DNS packet",
      "Không",
      "Có, mọi interface ngay lập tức"
    ],
    "answer": 2,
    "explanation": "Danh sách điều kiện phải được tham chiếu bởi tính năng như ip access-group để tác động đến lưu lượng.",
    "source": "Cisco IOS — IP Access List Overview",
    "sourceUrl": "https://www.cisco.com/en/US/docs/ios-xml/ios/sec_data_acl/configuration/15-1mt/IP_Access_List_Overview.html",
    "id": "E03Q35"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Switch",
    "difficulty": "Vận dụng cao",
    "question": "Ba switch tạo tam giác cùng VLAN, STP bị tắt, không có cơ chế chống loop khác. Nguy cơ nổi bật?",
    "options": [
      "TTL Ethernet giảm rồi tự dừng",
      "TCP luôn ngăn mọi loop tầng 2",
      "DNS tự tắt liên kết thừa",
      "Broadcast lặp và MAC flapping"
    ],
    "answer": 3,
    "explanation": "Ethernet không có TTL để chặn vòng lặp; frame có thể quay vòng, nhân bản và làm bảng MAC dao động.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E03Q36"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Cisco CLI",
    "difficulty": "Thông hiểu",
    "question": "show ip interface brief hiển thị “administratively down”. Cần kiểm tra trước hết điều gì?",
    "options": [
      "Cấu hình shutdown của interface",
      "HTTP status",
      "MAC của root bridge",
      "DNS cache"
    ],
    "answer": 0,
    "explanation": "Administratively down cho biết interface bị tắt do cấu hình quản trị; no shutdown là bước bật lại phù hợp.",
    "source": "Cisco IOS — Configuration Fundamentals",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/fundamentals/configuration/xe-16/fundamentals-xe-16-book/cf-cli-basics.html",
    "id": "E03Q37"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Routing",
    "difficulty": "Vận dụng cao",
    "question": "Có route /24 AD=110 và route /16 AD=1 cùng khớp một đích trong FIB. Chọn route nào?",
    "options": [
      "Luôn default route",
      "/24 vì prefix dài hơn",
      "Không route nào",
      "/16 vì AD nhỏ hơn"
    ],
    "answer": 1,
    "explanation": "AD không thay thế longest prefix match giữa các prefix khác nhau; route cụ thể /24 được dùng để chuyển tiếp.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E03Q38"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "STP",
    "difficulty": "Thông hiểu",
    "question": "Một cổng blocking vẫn thấy BPDU. Có phải bất thường không?",
    "options": [
      "Có, switch đã mất VLAN",
      "Có, BPDU chỉ dùng trên router",
      "Không, nhận BPDU là cần thiết để duy trì STP",
      "Có, blocking phải ngắt vật lý"
    ],
    "answer": 2,
    "explanation": "Blocking chỉ chặn chuyển tiếp dữ liệu, không đồng nghĩa cổng ngừng mọi chức năng điều khiển.",
    "source": "Cisco — Spanning Tree Protocol Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/stp/stp-configuration-guide/m-stp.html",
    "id": "E03Q39"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "VTP",
    "difficulty": "Vận dụng",
    "question": "Switch cũ có revision cao được đưa vào miền VTP v1/v2 tương thích. Rủi ro nổi bật là gì?",
    "options": [
      "Mọi port luôn tăng tốc",
      "Tất cả IP tự đổi sang IPv6",
      "DNS server bị đổi bởi VTP",
      "Cơ sở dữ liệu VLAN không mong muốn có thể được lan truyền"
    ],
    "answer": 3,
    "explanation": "Revision cao có thể khiến thông tin cũ trên switch mới nối được coi là mới hơn, nên cần kiểm tra trạng thái trước khi ghép miền.",
    "source": "Cisco — Configure VTP (version-specific behavior)",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vtp.html",
    "id": "E03Q40"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Router",
    "difficulty": "Thông hiểu",
    "question": "Host 192.168.1.10/24 gửi đến 192.168.2.10. Gateway hợp lý phải thỏa điều kiện gì?",
    "options": [
      "Có thể tiếp cận trên mạng cục bộ của host",
      "Bắt buộc ở 192.168.2.0/24",
      "Luôn chính là IP đích",
      "Bắt buộc bằng DNS server"
    ],
    "answer": 0,
    "explanation": "Host cần gửi frame tới gateway ở liên kết cục bộ; cấu hình gateway không thể tùy ý là máy xa không tiếp cận được.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E03Q41"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "DHCP",
    "difficulty": "Nhận biết",
    "question": "Lease time mô tả điều gì?",
    "options": [
      "Thời gian DNS query bắt buộc",
      "Thời gian client được sử dụng địa chỉ đã cấp",
      "Thời gian giữ MAC của switch",
      "Tuổi tối đa IP packet"
    ],
    "answer": 1,
    "explanation": "Địa chỉ được cho thuê trong khoảng thời gian xác định; client cần gia hạn theo thủ tục DHCP để tiếp tục dùng.",
    "source": "IETF RFC 2131 — Dynamic Host Configuration Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc2131.html",
    "id": "E03Q42"
  },
  {
    "chapter": "Chương 5",
    "topic": "Windows",
    "difficulty": "Thông hiểu",
    "question": "Một dòng dấu * trong tracert có nghĩa trực tiếp gì?",
    "options": [
      "Chắc chắn router đã bị phá hỏng",
      "Toàn bộ Internet ngừng hoạt động",
      "Không nhận phản hồi trong thời gian chờ cho lần thăm dò đó",
      "Đích không có DNS"
    ],
    "answer": 2,
    "explanation": "Router có thể lọc hoặc hạn chế phản hồi; một hop im lặng không nhất thiết làm lưu lượng đi qua thất bại.",
    "source": "Microsoft Learn — Windows networking commands",
    "sourceUrl": "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands",
    "id": "E03Q43"
  },
  {
    "chapter": "Chương 5",
    "topic": "GSM",
    "difficulty": "Thông hiểu",
    "question": "Handover có mục đích chính nào?",
    "options": [
      "Thay SIM sau mỗi packet",
      "Xóa hồ sơ HLR",
      "Đổi GSM thành Ethernet",
      "Duy trì dịch vụ khi chuyển kênh hoặc vùng phục vụ"
    ],
    "answer": 3,
    "explanation": "Handover chuyển kết nối radio đang phục vụ sang tài nguyên hoặc cell phù hợp để tiếp tục liên lạc.",
    "source": "ETSI GSM 03.02 — Network Architecture",
    "sourceUrl": "https://www.etsi.org/deliver/etsi_gts/03/0302/05.01.00_60/gsmts_0302v050100p.pdf",
    "id": "E03Q44"
  },
  {
    "chapter": "Chương 5",
    "topic": "WLAN",
    "difficulty": "Thông hiểu",
    "question": "AP trong mô hình WLAN hạ tầng thường nối những miền nào?",
    "options": [
      "Miền truy nhập không dây với hệ phân phối",
      "IPv4 header với UDP checksum",
      "GSM HLR với VLR bắt buộc",
      "DNS zone với TCP header"
    ],
    "answer": 0,
    "explanation": "AP cung cấp điểm vào hệ phân phối cho station; chức năng router có thể được tích hợp trong thiết bị nhưng không đồng nhất với AP.",
    "source": "Cisco — WLAN Architecture: BSS, IBSS and ESS",
    "sourceUrl": "https://www.cisco.com/E-Learning/bulk/guest/celc/fwl/ch2/2_1_5/content.html",
    "id": "E03Q45"
  },
  {
    "chapter": "Chương 5",
    "topic": "GSM",
    "difficulty": "Nhận biết",
    "question": "MSC trong GSM gắn với vai trò nào?",
    "options": [
      "Cấp VLAN native",
      "Chuyển mạch và điều khiển cuộc gọi, hỗ trợ di động",
      "Đặt tên SSID",
      "Học MAC trên Ethernet"
    ],
    "answer": 1,
    "explanation": "Mobile Switching Centre thực hiện chuyển mạch dịch vụ và các chức năng liên quan quản lý di động trong mạng lõi.",
    "source": "ETSI GSM 03.02 — Network Architecture",
    "sourceUrl": "https://www.etsi.org/deliver/etsi_gts/03/0302/05.01.00_60/gsmts_0302v050100p.pdf",
    "id": "E03Q46"
  },
  {
    "chapter": "Chương 5",
    "topic": "An toàn WLAN",
    "difficulty": "Thông hiểu",
    "question": "Packet sniffing phục vụ chẩn đoán có luôn là tấn công không?",
    "options": [
      "Không bao giờ có thể bị lạm dụng",
      "Có, mọi quan sát đều trái phép",
      "Không, phụ thuộc quyền và mục đích sử dụng",
      "Chỉ khi dùng IPv6"
    ],
    "answer": 2,
    "explanation": "Thu lưu lượng có thể là công việc quản trị được phép hoặc nghe lén trái phép; bối cảnh và sự cho phép là yếu tố phân biệt.",
    "source": "NIST SP 800-153 — Guidelines for Securing WLANs",
    "sourceUrl": "https://csrc.nist.gov/pubs/sp/800/153/final",
    "id": "E03Q47"
  },
  {
    "chapter": "Chương 5",
    "topic": "Windows",
    "difficulty": "Thông hiểu",
    "question": "Một profile xuất hiện trong show profiles có chứng minh máy đang kết nối mạng đó không?",
    "options": [
      "Có, nếu tên ngắn",
      "Có, mọi profile đều đang kết nối",
      "Không, Windows không lưu profile",
      "Không, đó có thể chỉ là cấu hình đã lưu"
    ],
    "answer": 3,
    "explanation": "Máy có thể lưu nhiều mạng từng dùng nhưng chỉ kết nối một số interface; cần xem trạng thái interface để xác nhận.",
    "source": "Microsoft Learn — Windows networking commands",
    "sourceUrl": "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands",
    "id": "E03Q48"
  },
  {
    "chapter": "Chương 5",
    "topic": "WLAN",
    "difficulty": "Nhận biết",
    "question": "Một infrastructure BSS cơ bản bao gồm gì?",
    "options": [
      "Một AP và các station kết nối với AP đó",
      "Chỉ hai router chạy OSPF",
      "Một DNS root và các resolver",
      "Một switch không có radio"
    ],
    "answer": 0,
    "explanation": "Trong BSS hạ tầng, AP đóng vai trò điểm truy nhập để các station tham gia mạng.",
    "source": "Cisco — WLAN Architecture: BSS, IBSS and ESS",
    "sourceUrl": "https://www.cisco.com/E-Learning/bulk/guest/celc/fwl/ch2/2_1_5/content.html",
    "id": "E03Q49"
  },
  {
    "chapter": "Chương 5",
    "topic": "An toàn WLAN",
    "difficulty": "Vận dụng",
    "question": "Trên Wi-Fi công cộng, trình duyệt cảnh báo chứng chỉ HTTPS không hợp lệ. Hành động phù hợp?",
    "options": [
      "Chuyển mọi tài khoản sang HTTP",
      "Không bỏ qua cảnh báo, kiểm tra mạng và chứng chỉ",
      "Tắt kiểm tra chứng chỉ để nhanh hơn",
      "Gửi mật khẩu để thử"
    ],
    "answer": 1,
    "explanation": "Cảnh báo có thể báo sai cấu hình hoặc can thiệp; bỏ qua làm mất khả năng xác thực máy chủ của TLS.",
    "source": "NIST SP 800-153 — Guidelines for Securing WLANs",
    "sourceUrl": "https://csrc.nist.gov/pubs/sp/800/153/final",
    "id": "E03Q50"
  }
];
