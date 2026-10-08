/* Tự biên soạn; xem tools/chapter*.txt và README.md. */
globalThis.EXAMS ||= {};
globalThis.EXAMS["08"] = [
  {
    "chapter": "Chương 1",
    "topic": "OSI",
    "difficulty": "Thông hiểu",
    "question": "Payload của một IP packet mang TCP thông thường chứa gì?",
    "options": [
      "TCP header và dữ liệu TCP",
      "Chỉ Ethernet header",
      "Chỉ địa chỉ MAC",
      "Chỉ IP header"
    ],
    "answer": 0,
    "explanation": "Ở tầng IP, toàn bộ TCP segment là payload, bao gồm header và dữ liệu của TCP.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E08Q01"
  },
  {
    "chapter": "Chương 1",
    "topic": "OSI",
    "difficulty": "Nhận biết",
    "question": "Port TCP/UDP chủ yếu giúp phân biệt điều gì?",
    "options": [
      "Địa chỉ vật lý của switch",
      "Ứng dụng hoặc điểm cuối vận chuyển trên host",
      "Cáp quang và cáp đồng",
      "VLAN native và VLAN trunk"
    ],
    "answer": 1,
    "explanation": "Port hỗ trợ ghép và phân kênh dữ liệu đến đúng dịch vụ hay socket trên một host.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E08Q02"
  },
  {
    "chapter": "Chương 1",
    "topic": "Topology",
    "difficulty": "Nhận biết",
    "question": "Hybrid topology được hiểu là gì?",
    "options": [
      "Mạng không có địa chỉ",
      "Mạng chỉ dùng cáp quang",
      "Kết hợp nhiều dạng topology",
      "Mạng chỉ dùng một vòng"
    ],
    "answer": 2,
    "explanation": "Hybrid kết hợp những cấu trúc như star và bus tùy nhu cầu triển khai.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E08Q03"
  },
  {
    "chapter": "Chương 1",
    "topic": "OSI",
    "difficulty": "Nhận biết",
    "question": "Header khác trailer ở vị trí nào trong PDU?",
    "options": [
      "Header chỉ xuất hiện ở máy nhận",
      "Trailer luôn ở tầng Transport",
      "Header và trailer đều luôn ở cuối",
      "Header đứng trước, trailer đứng sau phần dữ liệu"
    ],
    "answer": 3,
    "explanation": "Đóng gói có thể bổ sung thông tin trước và sau payload; không phải mọi giao thức đều dùng trailer.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E08Q04"
  },
  {
    "chapter": "Chương 1",
    "topic": "Topology",
    "difficulty": "Nhận biết",
    "question": "Topology vật lý mô tả điều gì?",
    "options": [
      "Cách thiết bị và cáp được bố trí, nối với nhau",
      "Chính sách cấp địa chỉ DHCP",
      "Số bit của port TCP",
      "Thứ tự các HTTP header"
    ],
    "answer": 0,
    "explanation": "Topology vật lý mô tả kết nối thực; topology logic mô tả cách dữ liệu đi qua mạng.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E08Q05"
  },
  {
    "chapter": "Chương 1",
    "topic": "Repeater",
    "difficulty": "Thông hiểu",
    "question": "Hub Ethernet cổ điển gần nhất với loại thiết bị nào?",
    "options": [
      "Router nhiều cổng",
      "Repeater nhiều cổng",
      "DNS server",
      "Firewall ứng dụng"
    ],
    "answer": 1,
    "explanation": "Hub lặp tín hiệu ra các cổng khác, không học MAC để chọn riêng cổng đích.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E08Q06"
  },
  {
    "chapter": "Chương 2",
    "topic": "Mã hóa đường truyền",
    "difficulty": "Vận dụng",
    "question": "NRZ-I: mức ban đầu L, bit 1 đảo ở đầu bit, 0 giữ. Với 101, mức từng bit là gì?",
    "options": [
      "L L H",
      "L H L",
      "H H L",
      "H L H"
    ],
    "answer": 2,
    "explanation": "Bit 1 đầu đảo L→H; 0 giữ H; bit 1 cuối đảo H→L. Vì vậy ba mức là H, H, L; cần theo dõi mức trước mỗi bit, không ánh xạ cố định 1 thành H.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E08Q07"
  },
  {
    "chapter": "Chương 2",
    "topic": "Go-Back-N",
    "difficulty": "Thông hiểu",
    "question": "Tăng cửa sổ GBN trên đường có RTT lớn và ít lỗi thường giúp gì?",
    "options": [
      "Bảo đảm độ trễ bằng 0",
      "Bỏ nhu cầu ACK",
      "Đổi UDP thành TCP",
      "Tăng lượng dữ liệu đang truyền, giảm thời gian rỗi"
    ],
    "answer": 3,
    "explanation": "Nhiều gói bay đồng thời giúp tận dụng đường truyền trong lúc chờ ACK, đến giới hạn của băng thông và các ràng buộc khác.",
    "source": "Kurose & Ross — Transport Layer, public teaching materials (UMass)",
    "sourceUrl": "https://gaia.cs.umass.edu/kurose_ross/videos/3/",
    "id": "E08Q08"
  },
  {
    "chapter": "Chương 2",
    "topic": "Nén dữ liệu",
    "difficulty": "Nhận biết",
    "question": "Nén lossless có đặc tính nào?",
    "options": [
      "Khôi phục chính xác dữ liệu gốc",
      "Luôn giảm kích thước mọi đầu vào",
      "Luôn bỏ chi tiết âm thanh",
      "Không cần giải nén"
    ],
    "answer": 0,
    "explanation": "Lossless bảo toàn thông tin để phục hồi bit gốc, nhưng không thể làm mọi chuỗi đầu vào đều nhỏ hơn.",
    "source": "Carnegie Mellon University — Algorithms in the Real World: Compression",
    "sourceUrl": "https://www.cs.cmu.edu/afs/cs/project/pscico-guyb/realworld/www/slidesF15.html",
    "id": "E08Q09"
  },
  {
    "chapter": "Chương 2",
    "topic": "DNS",
    "difficulty": "Thông hiểu",
    "question": "Truy vấn A cho tên alias trả CNAME. Resolver cần xác định địa chỉ của tên nào tiếp theo?",
    "options": [
      "Tên gateway mặc định",
      "Tên đích được CNAME chỉ tới",
      "MAC của alias",
      "VLAN chứa DNS"
    ],
    "answer": 1,
    "explanation": "CNAME biểu diễn bí danh trỏ đến tên chuẩn; quá trình phân giải tiếp tục đến địa chỉ của tên đích.",
    "source": "IETF RFC 1035 — Domain Names: Implementation and Specification",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc1035.html",
    "id": "E08Q10"
  },
  {
    "chapter": "Chương 2",
    "topic": "FTP",
    "difficulty": "Thông hiểu",
    "question": "Client ở sau NAT, firewall chặn kết nối mới đi vào. Chế độ FTP nào thường dễ hoạt động hơn?",
    "options": [
      "Chỉ UDP FTP",
      "Active không hỗ trợ NAT",
      "Passive",
      "Cả hai luôn bất khả thi"
    ],
    "answer": 2,
    "explanation": "Passive để client khởi tạo cả điều khiển và dữ liệu; thuận lợi hơn với NAT/firewall phía client nhưng vẫn cần cấu hình server phù hợp.",
    "source": "IETF RFC 959 — File Transfer Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc959.html",
    "id": "E08Q11"
  },
  {
    "chapter": "Chương 2",
    "topic": "UDP",
    "difficulty": "Thông hiểu",
    "question": "Trong UDP qua IPv4, checksum bằng 0 biểu thị điều gì?",
    "options": [
      "Datagram không có header",
      "Toàn bộ datagram chắc chắn hợp lệ",
      "Bên nhận phải tạo SYN-ACK",
      "Bên gửi không tạo UDP checksum"
    ],
    "answer": 3,
    "explanation": "IPv4 cho phép UDP bỏ checksum bằng giá trị 0; không được suy rộng thành quy tắc chung cho IPv6.",
    "source": "IETF RFC 768 — User Datagram Protocol; RFC 8200 §8.1 for IPv6",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc768",
    "id": "E08Q12"
  },
  {
    "chapter": "Chương 2",
    "topic": "RDT",
    "difficulty": "Nhận biết",
    "question": "Timeout trong RDT 3.0 khiến bên gửi thường làm gì?",
    "options": [
      "Truyền lại gói chưa được xác nhận",
      "Tự coi gói đã đến",
      "Chuyển thành router",
      "Tăng địa chỉ MAC"
    ],
    "answer": 0,
    "explanation": "Hết thời gian chờ là dấu hiệu chưa có xác nhận kịp thời; gửi lại giúp phục hồi mất gói hoặc ACK.",
    "source": "Kurose & Ross — Transport Layer, public teaching materials (UMass)",
    "sourceUrl": "https://gaia.cs.umass.edu/kurose_ross/videos/3/",
    "id": "E08Q13"
  },
  {
    "chapter": "Chương 2",
    "topic": "HTTP",
    "difficulty": "Nhận biết",
    "question": "HTTP 400 thường cho biết điều gì?",
    "options": [
      "Tài nguyên luôn đã bị xóa",
      "Yêu cầu không hợp lệ từ phía client",
      "Máy chủ xử lý thành công",
      "Client đã được cấp quyền"
    ],
    "answer": 1,
    "explanation": "400 biểu thị máy chủ không thể hoặc không muốn xử lý vì lỗi được quy cho request.",
    "source": "MDN — HTTP reference",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference",
    "id": "E08Q14"
  },
  {
    "chapter": "Chương 2",
    "topic": "IPv4",
    "difficulty": "Vận dụng cao",
    "question": "Một mảnh IPv4 không phải mảnh cuối có header 20 byte trên MTU 1000. Payload tối đa hợp lệ là bao nhiêu?",
    "options": [
      "1000 byte",
      "980 byte",
      "976 byte",
      "960 byte"
    ],
    "answer": 2,
    "explanation": "MTU cho 980 byte payload nhưng mảnh chưa cuối phải bội số 8: floor(980/8)×8=976.",
    "source": "IETF RFC 791 — Internet Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc791.html",
    "id": "E08Q15"
  },
  {
    "chapter": "Chương 2",
    "topic": "TCP",
    "difficulty": "Nhận biết",
    "question": "Cờ FIN biểu thị yêu cầu gì?",
    "options": [
      "Mở phiên FTP",
      "Xóa bảng định tuyến",
      "Hủy tức thời mọi kết nối máy",
      "Bên gửi không còn dữ liệu để gửi trên chiều đó"
    ],
    "answer": 3,
    "explanation": "FIN đóng chiều gửi một cách có trật tự; chiều ngược vẫn có thể tiếp tục truyền trong trạng thái half-close.",
    "source": "IETF RFC 9293 — Transmission Control Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc9293.html",
    "id": "E08Q16"
  },
  {
    "chapter": "Chương 2",
    "topic": "Go-Back-N",
    "difficulty": "Vận dụng",
    "question": "GBN N=4, base=5, chưa ACK gói 5. Các số trong cửa sổ gửi hiện tại là gì?",
    "options": [
      "5, 6, 7, 8",
      "1, 2, 3, 4",
      "4, 5, 6, 7",
      "6, 7, 8, 9"
    ],
    "answer": 0,
    "explanation": "Cửa sổ gồm N số bắt đầu tại base, là số của gói chưa xác nhận cũ nhất.",
    "source": "Kurose & Ross — Transport Layer, public teaching materials (UMass)",
    "sourceUrl": "https://gaia.cs.umass.edu/kurose_ross/videos/3/",
    "id": "E08Q17"
  },
  {
    "chapter": "Chương 2",
    "topic": "IPv4",
    "difficulty": "Vận dụng",
    "question": "Fragment Offset=185 chỉ vị trí dữ liệu bắt đầu cách đầu payload gốc bao nhiêu byte?",
    "options": [
      "1500",
      "1480",
      "185",
      "740"
    ],
    "answer": 1,
    "explanation": "Fragment Offset dùng đơn vị 8 byte: 185×8=1480 byte, tính từ đầu payload IP gốc.",
    "source": "IETF RFC 791 — Internet Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc791.html",
    "id": "E08Q18"
  },
  {
    "chapter": "Chương 2",
    "topic": "Selective Repeat",
    "difficulty": "Vận dụng",
    "question": "SR dùng sequence number 3 bit, hai cửa sổ bằng nhau. W tối đa là bao nhiêu?",
    "options": [
      "8",
      "7",
      "4",
      "3"
    ],
    "answer": 2,
    "explanation": "Có 8 số thứ tự; cửa sổ SR mỗi bên tối đa 8/2=4 trong mô hình chuẩn.",
    "source": "Kurose & Ross — Transport Layer, public teaching materials (UMass)",
    "sourceUrl": "https://gaia.cs.umass.edu/kurose_ross/videos/3/",
    "id": "E08Q19"
  },
  {
    "chapter": "Chương 2",
    "topic": "TCP",
    "difficulty": "Thông hiểu",
    "question": "Client vừa gửi SYN chủ động, chưa nhận SYN-ACK, ở trạng thái nào?",
    "options": [
      "LAST-ACK",
      "CLOSE-WAIT",
      "LISTEN",
      "SYN-SENT"
    ],
    "answer": 3,
    "explanation": "SYN-SENT là trạng thái chờ phản hồi cho SYN của một active open. LISTEN thuộc phía mở thụ động, còn CLOSE-WAIT và LAST-ACK liên quan đóng kết nối.",
    "source": "IETF RFC 9293 — Transmission Control Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc9293.html",
    "id": "E08Q20"
  },
  {
    "chapter": "Chương 2",
    "topic": "DNS",
    "difficulty": "Vận dụng",
    "question": "Ứng dụng đổi IP máy chủ nhưng một số client vẫn dùng IP cũ trước khi TTL DNS hết. Giải thích hợp lý nhất?",
    "options": [
      "Resolver còn bản ghi cũ trong cache hợp lệ",
      "TCP SYN tự sửa DNS",
      "Switch luôn khóa IP cũ",
      "DNS bắt buộc phát broadcast mỗi giây"
    ],
    "answer": 0,
    "explanation": "Các cache độc lập có thể giữ dữ liệu cho đến khi TTL hết; cập nhật authoritative không tức thời xóa mọi cache.",
    "source": "IETF RFC 1035 — Domain Names: Implementation and Specification",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc1035.html",
    "id": "E08Q21"
  },
  {
    "chapter": "Chương 2",
    "topic": "IPv6",
    "difficulty": "Thông hiểu",
    "question": "Next Header của IPv6 chỉ ra điều gì?",
    "options": [
      "MAC của router kế tiếp",
      "Loại header ngay sau header hiện tại",
      "Địa chỉ default gateway",
      "Tên DNS kế tiếp"
    ],
    "answer": 1,
    "explanation": "Next Header có thể chỉ giao thức tầng trên hoặc một extension header, tạo chuỗi header khi cần.",
    "source": "IETF RFC 8200 — IPv6 Specification",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc8200.html",
    "id": "E08Q22"
  },
  {
    "chapter": "Chương 2",
    "topic": "HTTP",
    "difficulty": "Vận dụng cao",
    "question": "Client gửi cùng một PUT hợp lệ hai lần do mất response đầu. Theo tính idempotent, kỳ vọng gì?",
    "options": [
      "Lần hai luôn trả 500",
      "Tạo hai tài nguyên mới với hai URI bắt buộc",
      "Tác động dự kiến sau hai lần như một lần",
      "Lần hai không được gửi qua TCP"
    ],
    "answer": 2,
    "explanation": "Idempotent nói về tác động dự kiến của nhiều request giống nhau, không bắt buộc status code hoặc log giống nhau.",
    "source": "MDN — HTTP reference",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference",
    "id": "E08Q23"
  },
  {
    "chapter": "Chương 2",
    "topic": "TCP",
    "difficulty": "Vận dụng",
    "question": "Mất ACK cuối của bắt tay; server truyền lại SYN-ACK. Client đã ESTABLISHED nên xử lý điển hình thế nào?",
    "options": [
      "Tạo kết nối mới với port ngẫu nhiên bắt buộc",
      "Coi SYN không bao giờ cần xác nhận",
      "Đóng ngay bằng FIN trong mọi trường hợp",
      "Gửi ACK lại cho SYN-ACK hợp lệ"
    ],
    "answer": 3,
    "explanation": "Truyền lại và xác nhận lặp giúp phục hồi mất thông điệp bắt tay; ACK cuối mất không buộc ứng dụng tạo phiên mới.",
    "source": "IETF RFC 9293 — Transmission Control Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc9293.html",
    "id": "E08Q24"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "DHCP",
    "difficulty": "Thông hiểu",
    "question": "DHCP Request sau khi nhận các Offer thường dùng để làm gì?",
    "options": [
      "Thông báo chọn đề nghị và yêu cầu cấp cấu hình",
      "Bầu lại BSC",
      "Đóng TCP port 67",
      "Xóa DNS server"
    ],
    "answer": 0,
    "explanation": "Client cho biết đề nghị được chọn; các server có thể biết quyết định và xử lý tài nguyên tương ứng.",
    "source": "IETF RFC 2131 — Dynamic Host Configuration Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc2131.html",
    "id": "E08Q25"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "NAT",
    "difficulty": "Vận dụng",
    "question": "Có ánh xạ NAT đúng nhưng không có route đi tới mạng đích. Kết luận nào đúng?",
    "options": [
      "Chắc chắn là lỗi DNS",
      "NAT không thay thế định tuyến, packet vẫn có thể không đi được",
      "Chỉ cần tăng port nguồn",
      "NAT tự tạo mọi route Internet"
    ],
    "answer": 1,
    "explanation": "Dịch địa chỉ và chọn đường đi là hai chức năng khác nhau; cần cả cấu hình định tuyến thích hợp.",
    "source": "Cisco — Configuring NAT for IP Address Conservation",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipaddr_nat/configuration/15-sy/nat-15-sy-book/iadnat-addr-consv.html",
    "id": "E08Q26"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Cisco CLI",
    "difficulty": "Nhận biết",
    "question": "Lệnh nào xem cấu hình khởi động đã lưu?",
    "options": [
      "show ip interface brief",
      "show running-config",
      "show startup-config",
      "configure terminal"
    ],
    "answer": 2,
    "explanation": "Startup-config chứa cấu hình được nạp khi khởi động; nó có thể khác running-config chưa được lưu.",
    "source": "Cisco IOS — Configuration Fundamentals",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/fundamentals/configuration/xe-16/fundamentals-xe-16-book/cf-cli-basics.html",
    "id": "E08Q27"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Router",
    "difficulty": "Vận dụng",
    "question": "Packet khớp cả 10.0.0.0/8 và 10.1.2.0/24 trong FIB. Router chọn gì?",
    "options": [
      "Tuyến /8",
      "Tuyến có địa chỉ gateway nhỏ nhất",
      "Tuyến được thêm trước luôn luôn",
      "Tuyến /24"
    ],
    "answer": 3,
    "explanation": "Prefix dài hơn khớp cụ thể hơn, nên /24 được chọn theo longest prefix match.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E08Q28"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "DHCP",
    "difficulty": "Nhận biết",
    "question": "Trình tự DORA điển hình của DHCPv4 là gì?",
    "options": [
      "Discover → Offer → Request → ACK",
      "Offer → ACK → Discover → Request",
      "Discover → Request → Offer → ACK",
      "ACK → Offer → Request → Discover"
    ],
    "answer": 0,
    "explanation": "Client tìm server, nhận đề nghị, yêu cầu cấu hình đã chọn, rồi được server xác nhận cấp phát.",
    "source": "IETF RFC 2131 — Dynamic Host Configuration Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc2131.html",
    "id": "E08Q29"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "STP",
    "difficulty": "Thông hiểu",
    "question": "Khi đường forwarding hỏng, vai trò của liên kết STP đang dự phòng là gì?",
    "options": [
      "Chỉ dùng cho DHCP",
      "Có thể chuyển sang forwarding sau hội tụ",
      "Luôn bị xóa VLAN",
      "Phải tháo cáp mới dùng được"
    ],
    "answer": 1,
    "explanation": "STP tính lại topology khi có thay đổi; cổng bị chặn có thể trở thành đường thay thế sau quá trình hội tụ.",
    "source": "Cisco — Spanning Tree Protocol Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/stp/stp-configuration-guide/m-stp.html",
    "id": "E08Q30"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Routing",
    "difficulty": "Thông hiểu",
    "question": "Convergence trong định tuyến mô tả điều gì?",
    "options": [
      "Các cổng Ethernet cùng tốc độ",
      "Toàn bộ packet có cùng TTL",
      "Các router đạt trạng thái đường đi nhất quán sau thay đổi",
      "Mọi router cùng một IP"
    ],
    "answer": 2,
    "explanation": "Hội tụ là quá trình cập nhật và ổn định thông tin đường đi sau sự kiện như hỏng liên kết.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E08Q31"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "NAT",
    "difficulty": "Thông hiểu",
    "question": "10.0.0.5 được NAT thành 203.0.113.5 khi ra ngoài. 10.0.0.5 là loại địa chỉ nào?",
    "options": [
      "Outside global",
      "Outside local",
      "Inside global",
      "Inside local"
    ],
    "answer": 3,
    "explanation": "Đó là địa chỉ host bên trong ở không gian phía trong; địa chỉ sau dịch 203.0.113.5 là inside global.",
    "source": "Cisco — Configuring NAT for IP Address Conservation",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipaddr_nat/configuration/15-sy/nat-15-sy-book/iadnat-addr-consv.html",
    "id": "E08Q32"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "DTP",
    "difficulty": "Vận dụng",
    "question": "Cần trunk tới thiết bị không hỗ trợ DTP. Cách cấu hình đáng tin cậy là gì?",
    "options": [
      "Đặt trunk tĩnh ở hai đầu với tham số tương thích",
      "Chỉ bật DNS",
      "Để cả hai dynamic auto",
      "Chỉ đổi tên VLAN"
    ],
    "answer": 0,
    "explanation": "Không có thương lượng DTP thì cần cấu hình chế độ trunk và các thông số VLAN/đóng gói rõ ràng ở hai phía.",
    "source": "Cisco — VLAN Trunk Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vlan-trunks.html",
    "id": "E08Q33"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "VLAN",
    "difficulty": "Vận dụng cao",
    "question": "A VLAN10 trên SW1, B VLAN10 trên SW2; trunk up, VLAN10 bị loại khỏi allowed list. Cần sửa gì có mục tiêu nhất?",
    "options": [
      "Tắt STP toàn mạng",
      "Cho phép VLAN10 trên trunk cần đi qua",
      "Đổi DNS thành gateway",
      "Đổi cả hai máy sang /8"
    ],
    "answer": 1,
    "explanation": "Triệu chứng đã chỉ rõ VLAN10 bị chặn tại trunk; sửa danh sách allowed giữ nguyên thiết kế VLAN.",
    "source": "Cisco — VLAN Trunk Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vlan-trunks.html",
    "id": "E08Q34"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "VTP",
    "difficulty": "Thông hiểu",
    "question": "Hai switch cùng VTP domain nhưng không có đường trunk thích hợp giữa chúng. Đồng bộ VLAN có thể bị ảnh hưởng thế nào?",
    "options": [
      "VTP tự dùng HTTP qua Internet",
      "VLAN tự biến thành IP route",
      "Quảng bá VTP có thể không truyền tới nhau",
      "MAC aging thay thế VTP"
    ],
    "answer": 2,
    "explanation": "VTP thường trao đổi qua liên kết trunk; cấu hình và kết nối trunk là điều kiện cần kiểm tra khi không đồng bộ.",
    "source": "Cisco — Configure VTP (version-specific behavior)",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vtp.html",
    "id": "E08Q35"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "STP",
    "difficulty": "Nhận biết",
    "question": "Root bridge trong một instance STP có bao nhiêu root port?",
    "options": [
      "2",
      "1",
      "Bằng số cổng access",
      "0"
    ],
    "answer": 3,
    "explanation": "Root bridge chính là gốc cây nên không cần cổng hướng về một root khác trong instance đó.",
    "source": "Cisco — Spanning Tree Protocol Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/stp/stp-configuration-guide/m-stp.html",
    "id": "E08Q36"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "VLAN",
    "difficulty": "Thông hiểu",
    "question": "Tag 802.1Q mang thông tin quan trọng nào cho chuyển mạch VLAN?",
    "options": [
      "VLAN ID",
      "DNS cache age",
      "Mật khẩu WPA",
      "TCP sequence"
    ],
    "answer": 0,
    "explanation": "VLAN ID trong tag giúp đầu nhận xác định frame thuộc miền VLAN nào.",
    "source": "Cisco — VLAN Trunk Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vlan-trunks.html",
    "id": "E08Q37"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Cisco CLI",
    "difficulty": "Nhận biết",
    "question": "Từ Router#, lệnh nào vào Global Configuration?",
    "options": [
      "show running-config",
      "configure terminal",
      "exit",
      "ping"
    ],
    "answer": 1,
    "explanation": "configure terminal mở chế độ cấu hình toàn cục với dấu nhắc (config)#.",
    "source": "Cisco IOS — Configuration Fundamentals",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/fundamentals/configuration/xe-16/fundamentals-xe-16-book/cf-cli-basics.html",
    "id": "E08Q38"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "ACL",
    "difficulty": "Thông hiểu",
    "question": "Nếu không khớp dòng nào trong IPv4 ACL, mặc định cuối danh sách là gì?",
    "options": [
      "Tự bật NAT",
      "Implicit permit",
      "Implicit deny",
      "Tự tạo route"
    ],
    "answer": 2,
    "explanation": "Cuối ACL có từ chối ngầm; cần permit phù hợp để không vô tình chặn lưu lượng mong muốn.",
    "source": "Cisco IOS — IP Access List Overview",
    "sourceUrl": "https://www.cisco.com/en/US/docs/ios-xml/ios/sec_data_acl/configuration/15-1mt/IP_Access_List_Overview.html",
    "id": "E08Q39"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "ACL",
    "difficulty": "Thông hiểu",
    "question": "Từ khóa any trong phần địa chỉ ACL tương đương mẫu nào?",
    "options": [
      "0.0.0.0 0.0.0.0",
      "127.0.0.1 0.0.0.0",
      "255.255.255.255 0.0.0.0",
      "0.0.0.0 255.255.255.255"
    ],
    "answer": 3,
    "explanation": "Wildcard toàn 1 bỏ qua tất cả bit, nên khớp mọi địa chỉ IPv4. Giá trị địa chỉ 0.0.0.0 trong mẫu không bắt buộc phải khớp vì mọi bit đều bị bỏ qua.",
    "source": "Cisco IOS — IP Access List Overview",
    "sourceUrl": "https://www.cisco.com/en/US/docs/ios-xml/ios/sec_data_acl/configuration/15-1mt/IP_Access_List_Overview.html",
    "id": "E08Q40"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Switch",
    "difficulty": "Nhận biết",
    "question": "Bộ phận switching fabric làm nhiệm vụ gì trong switch?",
    "options": [
      "Kết nối nội bộ để chuyển frame giữa các cổng",
      "Mã hóa mật khẩu WLAN",
      "Cấp lease DHCP",
      "Phân giải tên miền"
    ],
    "answer": 0,
    "explanation": "Fabric là đường chuyển dữ liệu bên trong thiết bị, nối xử lý đầu vào và đầu ra.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E08Q41"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Switch",
    "difficulty": "Vận dụng cao",
    "question": "Switch rỗng bảng MAC: A ở cổng 1 gửi đến B ở cổng 2, rồi B trả lời A. Frame trả lời thường đi đâu?",
    "options": [
      "Chỉ cổng 2",
      "Chỉ cổng 1",
      "Mọi cổng vì chưa học B trước đó",
      "Bị bỏ vì không có IP route"
    ],
    "answer": 1,
    "explanation": "Ngay frame đầu, switch đã học MAC nguồn A trên cổng 1. Vì vậy frame từ B tới A có đích đã biết.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E08Q42"
  },
  {
    "chapter": "Chương 5",
    "topic": "WLAN",
    "difficulty": "Thông hiểu",
    "question": "CSMA/CA trong WLAN cố gắng giảm va chạm bằng cách nào?",
    "options": [
      "Tăng mọi TTL",
      "Dùng DNS để đặt lượt",
      "Nghe kênh và trì hoãn/ngẫu nhiên hóa trước khi truyền",
      "Phát liên tục không nghe kênh"
    ],
    "answer": 2,
    "explanation": "Cơ chế tránh va chạm dùng cảm nhận sóng mang và backoff; không bảo đảm tuyệt đối không có va chạm.",
    "source": "Cisco — WLAN Architecture: BSS, IBSS and ESS",
    "sourceUrl": "https://www.cisco.com/E-Learning/bulk/guest/celc/fwl/ch2/2_1_5/content.html",
    "id": "E08Q43"
  },
  {
    "chapter": "Chương 5",
    "topic": "Windows",
    "difficulty": "Nhận biết",
    "question": "nslookup là công cụ cho mục đích nào?",
    "options": [
      "Nén file",
      "Chuyển switch thành trunk",
      "Bầu root bridge",
      "Truy vấn DNS"
    ],
    "answer": 3,
    "explanation": "nslookup giúp kiểm tra phân giải tên và các bản ghi DNS qua máy chủ được chọn hoặc mặc định.",
    "source": "Microsoft Learn — Windows networking commands",
    "sourceUrl": "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands",
    "id": "E08Q44"
  },
  {
    "chapter": "Chương 5",
    "topic": "WLAN",
    "difficulty": "Thông hiểu",
    "question": "Tín hiệu Wi-Fi mạnh có bảo đảm Internet hoạt động không?",
    "options": [
      "Không, còn phụ thuộc IP, gateway, DNS và đường uplink",
      "Có, vì AP luôn là ISP",
      "Không, vì Wi-Fi không truyền IP",
      "Có, RSSI đủ mạnh thay mọi giao thức"
    ],
    "answer": 0,
    "explanation": "Liên kết radio tốt chỉ là một phần của đường truyền ứng dụng; các cấu hình và kết nối phía sau AP vẫn có thể lỗi.",
    "source": "Cisco — WLAN Architecture: BSS, IBSS and ESS",
    "sourceUrl": "https://www.cisco.com/E-Learning/bulk/guest/celc/fwl/ch2/2_1_5/content.html",
    "id": "E08Q45"
  },
  {
    "chapter": "Chương 5",
    "topic": "An toàn WLAN",
    "difficulty": "Thông hiểu",
    "question": "Mục tiêu của resource exhaustion/DoS đối với AP là gì?",
    "options": [
      "Tối ưu bảng MAC",
      "Làm cạn tài nguyên, giảm khả năng phục vụ",
      "Nâng chất lượng tín hiệu",
      "Tăng dung lượng pin"
    ],
    "answer": 1,
    "explanation": "Lạm dụng tài nguyên có thể gây quá tải xử lý, bộ nhớ hoặc môi trường truyền khiến người dùng hợp lệ bị ảnh hưởng.",
    "source": "NIST SP 800-153 — Guidelines for Securing WLANs",
    "sourceUrl": "https://csrc.nist.gov/pubs/sp/800/153/final",
    "id": "E08Q46"
  },
  {
    "chapter": "Chương 5",
    "topic": "GSM",
    "difficulty": "Vận dụng",
    "question": "Nhiều BTS cần được điều khiển chung về tài nguyên radio. Thành phần nào phù hợp nhất?",
    "options": [
      "SIM",
      "DNS resolver",
      "BSC",
      "HLR"
    ],
    "answer": 2,
    "explanation": "BSC quản lý nhóm BTS và điều phối tài nguyên radio; HLR là cơ sở dữ liệu thuê bao.",
    "source": "ETSI GSM 03.02 — Network Architecture",
    "sourceUrl": "https://www.etsi.org/deliver/etsi_gts/03/0302/05.01.00_60/gsmts_0302v050100p.pdf",
    "id": "E08Q47"
  },
  {
    "chapter": "Chương 5",
    "topic": "WLAN",
    "difficulty": "Vận dụng cao",
    "question": "AP khỏe, RSSI tốt, client ping gateway được nhưng không ping IP ngoài được. Phần nên kiểm tra tiếp?",
    "options": [
      "Chỉ tên SSID",
      "Chỉ cỡ chữ profile Wi-Fi",
      "Chỉ cache ARP của máy không liên quan",
      "Routing, NAT hoặc uplink sau gateway"
    ],
    "answer": 3,
    "explanation": "Các thử nghiệm đã xác nhận liên kết WLAN và đường tới gateway; bước tiếp theo hợp lý nằm trên đường đi mạng ngoài.",
    "source": "Cisco — WLAN Architecture: BSS, IBSS and ESS",
    "sourceUrl": "https://www.cisco.com/E-Learning/bulk/guest/celc/fwl/ch2/2_1_5/content.html",
    "id": "E08Q48"
  },
  {
    "chapter": "Chương 5",
    "topic": "An toàn WLAN",
    "difficulty": "Thông hiểu",
    "question": "Ẩn SSID có bảo đảm không ai phát hiện mạng không?",
    "options": [
      "Không",
      "Có, mọi frame biến mất",
      "Có, vì địa chỉ IP được mã hóa",
      "Có, vì AP ngừng phát radio"
    ],
    "answer": 0,
    "explanation": "Ẩn tên trong quảng bá không xóa mọi dấu vết trao đổi; đây không phải thay thế cho xác thực và mã hóa.",
    "source": "NIST SP 800-153 — Guidelines for Securing WLANs",
    "sourceUrl": "https://csrc.nist.gov/pubs/sp/800/153/final",
    "id": "E08Q49"
  },
  {
    "chapter": "Chương 5",
    "topic": "Windows",
    "difficulty": "Nhận biết",
    "question": "netsh wlan show profiles liệt kê điều gì?",
    "options": [
      "Chỉ các AP đang phát gần đó",
      "Các profile Wi-Fi được lưu",
      "Các route BGP",
      "Mọi DHCP lease trên server"
    ],
    "answer": 1,
    "explanation": "Profile là cấu hình WLAN được lưu trên máy; danh sách này không đồng nghĩa danh sách mạng hiện đang ở trong vùng phủ.",
    "source": "Microsoft Learn — Windows networking commands",
    "sourceUrl": "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands",
    "id": "E08Q50"
  }
];
