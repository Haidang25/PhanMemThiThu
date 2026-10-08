/* Tự biên soạn; xem tools/chapter*.txt và README.md. */
globalThis.EXAMS ||= {};
globalThis.EXAMS["09"] = [
  {
    "chapter": "Chương 1",
    "topic": "Repeater",
    "difficulty": "Thông hiểu",
    "question": "Vì sao repeater không lọc frame theo MAC đích?",
    "options": [
      "Không phân tích địa chỉ tầng liên kết",
      "Không nhận được bit",
      "Chỉ hiểu địa chỉ IPv6",
      "Chỉ dùng với TCP"
    ],
    "answer": 0,
    "explanation": "Tầng vật lý không xử lý cấu trúc MAC của frame như bridge hoặc switch tầng 2.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E09Q01"
  },
  {
    "chapter": "Chương 1",
    "topic": "Topology",
    "difficulty": "Thông hiểu",
    "question": "Vì sao full mesh khó mở rộng khi số nút lớn?",
    "options": [
      "Không có đường dự phòng",
      "Số liên kết tăng theo n(n−1)/2",
      "Mọi nút phải dùng chung một cáp",
      "Không thể truyền hai chiều"
    ],
    "answer": 1,
    "explanation": "Chi phí cổng và cáp tăng gần bậc hai theo số nút, làm quản lý và triển khai phức tạp.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E09Q02"
  },
  {
    "chapter": "Chương 1",
    "topic": "OSI",
    "difficulty": "Vận dụng cao",
    "question": "Ứng dụng gửi 2000 byte; TCP chia thành hai segment 1000 byte dữ liệu. Mỗi segment có TCP 20 và IPv4 20 byte. Tổng byte IP của hai packet?",
    "options": [
      "2000 byte",
      "2040 byte",
      "2080 byte",
      "2120 byte"
    ],
    "answer": 2,
    "explanation": "Mỗi packet có 1000+20+20=1040 byte. Hai packet tổng 2080 byte, chưa tính tầng liên kết.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E09Q03"
  },
  {
    "chapter": "Chương 1",
    "topic": "OSI",
    "difficulty": "Nhận biết",
    "question": "Tầng Transport cung cấp giao tiếp chủ yếu giữa những thực thể nào?",
    "options": [
      "Hai đầu nối cáp",
      "Hai VLAN native",
      "Hai bộ khuếch đại",
      "Các tiến trình ứng dụng ở hai đầu"
    ],
    "answer": 3,
    "explanation": "Transport dùng port và các dịch vụ vận chuyển để hỗ trợ liên lạc giữa tiến trình trên các host.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E09Q04"
  },
  {
    "chapter": "Chương 1",
    "topic": "OSI",
    "difficulty": "Nhận biết",
    "question": "Thứ tự đóng gói TCP qua IP và Ethernet nào đúng?",
    "options": [
      "Data → Segment → Packet → Frame → Bit",
      "Bit → Packet → Frame → Data → Segment",
      "Data → Packet → Bit → Frame → Segment",
      "Data → Frame → Packet → Segment → Bit"
    ],
    "answer": 0,
    "explanation": "TCP tạo segment, IP đóng vào packet, Ethernet đóng vào frame và tầng vật lý truyền bit.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E09Q05"
  },
  {
    "chapter": "Chương 1",
    "topic": "Topology",
    "difficulty": "Thông hiểu",
    "question": "Partial mesh khác full mesh ở điểm nào?",
    "options": [
      "Luôn có đúng một cáp chung",
      "Chỉ một số cặp nút có liên kết trực tiếp",
      "Mọi nút chỉ có đúng hai láng giềng",
      "Không có liên kết trực tiếp nào"
    ],
    "answer": 1,
    "explanation": "Partial mesh chỉ bổ sung các liên kết cần thiết, cân bằng chi phí với mức dự phòng mong muốn.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E09Q06"
  },
  {
    "chapter": "Chương 2",
    "topic": "Mã hóa đường truyền",
    "difficulty": "Vận dụng",
    "question": "NRZ-L quy ước 1=H, 0=L. Chuỗi 10110 có dãy mức nào?",
    "options": [
      "L H L L H",
      "L L H H H",
      "H L H H L",
      "H H L H L"
    ],
    "answer": 2,
    "explanation": "Áp dụng trực tiếp quy ước cho từng bit: 1 cao, 0 thấp; không xét đảo mức như NRZ-I.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E09Q07"
  },
  {
    "chapter": "Chương 2",
    "topic": "Go-Back-N",
    "difficulty": "Vận dụng cao",
    "question": "GBN ACK k xác nhận đến hết k. Gửi 0–5, nhận ACK 2 rồi timeout khi 3–5 chưa ACK. Gửi lại gì?",
    "options": [
      "Chỉ 3",
      "2, 3, 4, 5",
      "0, 1, 2",
      "3, 4, 5"
    ],
    "answer": 3,
    "explanation": "ACK 2 đã bao phủ 0–2. Dãy chưa xác nhận bắt đầu ở 3, nên chỉ dãy 3–5 cần truyền lại.",
    "source": "Kurose & Ross — Transport Layer, public teaching materials (UMass)",
    "sourceUrl": "https://gaia.cs.umass.edu/kurose_ross/videos/3/",
    "id": "E09Q08"
  },
  {
    "chapter": "Chương 2",
    "topic": "DNS",
    "difficulty": "Nhận biết",
    "question": "DNS truyền thống sử dụng cổng dịch vụ nào trên UDP và TCP?",
    "options": [
      "53",
      "80",
      "25",
      "67"
    ],
    "answer": 0,
    "explanation": "DNS dùng cổng 53 cho cả UDP và TCP; lựa chọn vận chuyển tùy loại trao đổi và điều kiện.",
    "source": "IETF RFC 1035 — Domain Names: Implementation and Specification",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc1035.html",
    "id": "E09Q09"
  },
  {
    "chapter": "Chương 2",
    "topic": "HTTP",
    "difficulty": "Thông hiểu",
    "question": "POST thường được dùng khi nào?",
    "options": [
      "Chỉ thay đổi IP nguồn",
      "Gửi dữ liệu để tài nguyên xử lý theo ngữ nghĩa riêng",
      "Chỉ xóa cache DNS",
      "Chỉ yêu cầu header"
    ],
    "answer": 1,
    "explanation": "POST yêu cầu xử lý nội dung gửi lên, ví dụ tạo bản ghi hay thực hiện nghiệp vụ; ngữ nghĩa phụ thuộc tài nguyên.",
    "source": "MDN — HTTP reference",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference",
    "id": "E09Q10"
  },
  {
    "chapter": "Chương 2",
    "topic": "IPv4",
    "difficulty": "Vận dụng",
    "question": "Packet IPv4 TTL=3 qua hai router, mỗi router giảm 1. TTL khi rời router thứ hai là bao nhiêu?",
    "options": [
      "3",
      "2",
      "1",
      "0"
    ],
    "answer": 2,
    "explanation": "TTL lần lượt giảm 3→2→1. Router tiếp theo sẽ không chuyển tiếp nếu giảm TTL về 0.",
    "source": "IETF RFC 791 — Internet Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc791.html",
    "id": "E09Q11"
  },
  {
    "chapter": "Chương 2",
    "topic": "IPv4",
    "difficulty": "Vận dụng",
    "question": "IPv4 IHL=7. Độ dài header bằng bao nhiêu?",
    "options": [
      "20 byte",
      "7 byte",
      "56 byte",
      "28 byte"
    ],
    "answer": 3,
    "explanation": "Mỗi đơn vị IHL là 4 byte, nên 7×4=28 byte; phần vượt 20 byte là options và padding.",
    "source": "IETF RFC 791 — Internet Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc791.html",
    "id": "E09Q12"
  },
  {
    "chapter": "Chương 2",
    "topic": "Mã hóa đường truyền",
    "difficulty": "Thông hiểu",
    "question": "Chuỗi dài các bit giữ nguyên mức trong NRZ có thể gây khó khăn gì?",
    "options": [
      "Khôi phục clock do ít chuyển mức",
      "Đánh số port",
      "Chọn VLAN native",
      "Đọc DNS response"
    ],
    "answer": 0,
    "explanation": "Ít cạnh tín hiệu làm bên nhận khó xác định ranh giới thời gian bit nếu không có cơ chế đồng bộ bổ sung.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E09Q13"
  },
  {
    "chapter": "Chương 2",
    "topic": "TCP",
    "difficulty": "Thông hiểu",
    "question": "Sau khi server gửi SYN-ACK và chờ ACK cuối, trạng thái điển hình là gì?",
    "options": [
      "CLOSED",
      "SYN-RECEIVED",
      "TIME-WAIT",
      "FIN-WAIT-1"
    ],
    "answer": 1,
    "explanation": "SYN-RECEIVED biểu thị đã nhận SYN và đang chờ xác nhận SYN của chính mình.",
    "source": "IETF RFC 9293 — Transmission Control Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc9293.html",
    "id": "E09Q14"
  },
  {
    "chapter": "Chương 2",
    "topic": "HTTP",
    "difficulty": "Nhận biết",
    "question": "GET chủ yếu biểu đạt yêu cầu gì?",
    "options": [
      "Đóng kết nối TCP",
      "Cấp IP động",
      "Lấy biểu diễn của tài nguyên",
      "Xóa tài nguyên"
    ],
    "answer": 2,
    "explanation": "GET yêu cầu biểu diễn hiện tại của tài nguyên; không có ngữ nghĩa yêu cầu thay đổi trạng thái máy chủ.",
    "source": "MDN — HTTP reference",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference",
    "id": "E09Q15"
  },
  {
    "chapter": "Chương 2",
    "topic": "Selective Repeat",
    "difficulty": "Nhận biết",
    "question": "Receiver SR thường cần buffer để làm gì?",
    "options": [
      "Lưu bảng DNS",
      "Lưu mật khẩu router",
      "Đổi cổng TCP",
      "Giữ gói hợp lệ đến ngoài thứ tự"
    ],
    "answer": 3,
    "explanation": "Gói đến sớm được giữ cho đến khi lấp khoảng trống, rồi dữ liệu liên tục mới được giao theo thứ tự.",
    "source": "Kurose & Ross — Transport Layer, public teaching materials (UMass)",
    "sourceUrl": "https://gaia.cs.umass.edu/kurose_ross/videos/3/",
    "id": "E09Q16"
  },
  {
    "chapter": "Chương 2",
    "topic": "Go-Back-N",
    "difficulty": "Vận dụng",
    "question": "GBN đánh số 1–4, cả bốn đã gửi, gói 2 mất, receiver bỏ gói ngoài thứ tự. Khi timeout gói 2, gửi lại gì?",
    "options": [
      "2, 3, 4",
      "Chỉ 2",
      "Chỉ 4",
      "1, 2, 3, 4 luôn luôn"
    ],
    "answer": 0,
    "explanation": "GBN truyền lại từ gói chưa ACK sớm nhất đến các gói đã gửi còn chờ; 3 và 4 đã bị receiver loại.",
    "source": "Kurose & Ross — Transport Layer, public teaching materials (UMass)",
    "sourceUrl": "https://gaia.cs.umass.edu/kurose_ross/videos/3/",
    "id": "E09Q17"
  },
  {
    "chapter": "Chương 2",
    "topic": "Nén dữ liệu",
    "difficulty": "Thông hiểu",
    "question": "Huffman thường gán mã ngắn hơn cho ký hiệu nào?",
    "options": [
      "Ký hiệu xuất hiện ít nhất luôn luôn",
      "Ký hiệu xuất hiện thường xuyên hơn",
      "Ký hiệu ở cuối file",
      "Ký hiệu có mã ASCII lớn hơn luôn luôn"
    ],
    "answer": 1,
    "explanation": "Huffman tận dụng tần suất để giảm độ dài mã trung bình, không dựa đơn thuần vào giá trị ký tự.",
    "source": "Carnegie Mellon University — Algorithms in the Real World: Compression",
    "sourceUrl": "https://www.cs.cmu.edu/afs/cs/project/pscico-guyb/realworld/www/slidesF15.html",
    "id": "E09Q18"
  },
  {
    "chapter": "Chương 2",
    "topic": "UDP",
    "difficulty": "Nhận biết",
    "question": "UDP header có độ dài bao nhiêu byte?",
    "options": [
      "20",
      "12",
      "8",
      "40"
    ],
    "answer": 2,
    "explanation": "UDP có bốn trường 16 bit: Source Port, Destination Port, Length và Checksum, tổng cộng 8 byte.",
    "source": "IETF RFC 768 — User Datagram Protocol; RFC 8200 §8.1 for IPv6",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc768",
    "id": "E09Q19"
  },
  {
    "chapter": "Chương 2",
    "topic": "TCP",
    "difficulty": "Vận dụng cao",
    "question": "Segment SEQ=700 mang 20 byte và FIN, không SYN. ACK cho toàn bộ segment là bao nhiêu?",
    "options": [
      "740",
      "701",
      "720",
      "721"
    ],
    "answer": 3,
    "explanation": "20 byte chiếm số 700–719, FIN chiếm thêm một vị trí 720; ACK kế tiếp là 721.",
    "source": "IETF RFC 9293 — Transmission Control Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc9293.html",
    "id": "E09Q20"
  },
  {
    "chapter": "Chương 2",
    "topic": "RDT",
    "difficulty": "Nhận biết",
    "question": "RDT 3.0 xử lý thêm sự cố nào so với các mô hình chỉ lỗi bit?",
    "options": [
      "Mất gói dữ liệu hoặc phản hồi",
      "Mất mật khẩu",
      "Sai HTTP URI",
      "Sai tên VLAN"
    ],
    "answer": 0,
    "explanation": "RDT 3.0 thêm timer để phục hồi khi dữ liệu hoặc ACK bị mất trên kênh không tin cậy.",
    "source": "Kurose & Ross — Transport Layer, public teaching materials (UMass)",
    "sourceUrl": "https://gaia.cs.umass.edu/kurose_ross/videos/3/",
    "id": "E09Q21"
  },
  {
    "chapter": "Chương 2",
    "topic": "FTP",
    "difficulty": "Thông hiểu",
    "question": "Cổng TCP 20 thường gắn với vai trò nào trong FTP active truyền thống?",
    "options": [
      "Cổng DNS của server",
      "Cổng nguồn dữ liệu phía server",
      "Cổng dữ liệu passive cố định",
      "Cổng điều khiển client bắt buộc"
    ],
    "answer": 1,
    "explanation": "Mô hình active truyền thống dùng cổng dữ liệu server 20; passive dùng cổng được thương lượng.",
    "source": "IETF RFC 959 — File Transfer Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc959.html",
    "id": "E09Q22"
  },
  {
    "chapter": "Chương 2",
    "topic": "IPv6",
    "difficulty": "Thông hiểu",
    "question": "Khác biệt về checksum header giữa IPv4 và IPv6 là gì?",
    "options": [
      "IPv4 không có checksum header",
      "IPv6 dùng checksum header 128 bit",
      "IPv6 không có checksum trong header cơ bản",
      "Cả hai chỉ checksum MAC"
    ],
    "answer": 2,
    "explanation": "IPv6 bỏ checksum header cơ bản, giảm xử lý tại router; tầng liên kết và tầng trên có cơ chế kiểm tra riêng.",
    "source": "IETF RFC 8200 — IPv6 Specification",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc8200.html",
    "id": "E09Q23"
  },
  {
    "chapter": "Chương 2",
    "topic": "RDT",
    "difficulty": "Thông hiểu",
    "question": "Stop-and-wait giới hạn số gói chưa được xác nhận như thế nào?",
    "options": [
      "Luôn bằng 8",
      "Không giới hạn",
      "Bằng số router",
      "Một gói dữ liệu đang chờ ACK"
    ],
    "answer": 3,
    "explanation": "Bên gửi chờ xác nhận cho gói hiện tại trước khi gửi gói mới, đơn giản nhưng kém hiệu quả khi RTT lớn.",
    "source": "Kurose & Ross — Transport Layer, public teaching materials (UMass)",
    "sourceUrl": "https://gaia.cs.umass.edu/kurose_ross/videos/3/",
    "id": "E09Q24"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "STP",
    "difficulty": "Vận dụng cao",
    "question": "Hai đường về root cùng cost, qua neighbor A Bridge ID thấp hơn neighbor B; các yếu tố trước đó bằng nhau. Ưu tiên đường nào?",
    "options": [
      "Qua A",
      "Cổng có tên dài hơn",
      "Đường có IP gateway lớn hơn",
      "Qua B"
    ],
    "answer": 0,
    "explanation": "Khi root cost hòa, thông tin Bridge ID của bên gửi BPDU là một tiêu chí phá hòa; giá trị nhỏ hơn được ưu tiên.",
    "source": "Cisco — Spanning Tree Protocol Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/stp/stp-configuration-guide/m-stp.html",
    "id": "E09Q25"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "VLAN",
    "difficulty": "Vận dụng",
    "question": "VLAN 30 hoạt động ở hai switch nhưng không nằm trong allowed list của trunk nối chúng. Hiện tượng hợp lý?",
    "options": [
      "Mọi VLAN khác bị xóa",
      "Lưu lượng VLAN 30 không qua trunk đó",
      "Cổng access tự chuyển thành router",
      "VLAN 30 tự đổi thành native"
    ],
    "answer": 1,
    "explanation": "Allowed list giới hạn VLAN được vận chuyển trên trunk, độc lập với việc VLAN tồn tại ở từng switch.",
    "source": "Cisco — VLAN Trunk Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vlan-trunks.html",
    "id": "E09Q26"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "ACL",
    "difficulty": "Thông hiểu",
    "question": "ACL inbound trên interface được hiểu theo hướng nào?",
    "options": [
      "Lưu lượng đi ra router ở mọi cổng",
      "Chỉ lưu lượng do router tự tạo",
      "Lưu lượng đi vào router qua interface đó",
      "Lưu lượng luôn đi từ Internet"
    ],
    "answer": 2,
    "explanation": "In/out được xác định so với interface trên thiết bị, không đồng nghĩa cố định với phía trong hay phía ngoài mạng.",
    "source": "Cisco IOS — IP Access List Overview",
    "sourceUrl": "https://www.cisco.com/en/US/docs/ios-xml/ios/sec_data_acl/configuration/15-1mt/IP_Access_List_Overview.html",
    "id": "E09Q27"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "STP",
    "difficulty": "Nhận biết",
    "question": "Root bridge được bầu theo tiêu chí nào trong một instance STP?",
    "options": [
      "Switch nhiều cổng nhất",
      "IP nhỏ nhất",
      "MAC lớn nhất bất kể priority",
      "Bridge ID nhỏ nhất"
    ],
    "answer": 3,
    "explanation": "Bridge ID gồm thông tin priority và định danh MAC; giá trị nhỏ nhất được ưu tiên làm root.",
    "source": "Cisco — Spanning Tree Protocol Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/stp/stp-configuration-guide/m-stp.html",
    "id": "E09Q28"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "VLAN",
    "difficulty": "Thông hiểu",
    "question": "Native VLAN trên trunk 802.1Q mặc định liên quan loại frame nào?",
    "options": [
      "Frame không gắn tag trên trunk",
      "Chỉ DNS response",
      "Chỉ IPv6 packet",
      "Mọi frame luôn bị drop"
    ],
    "answer": 0,
    "explanation": "Với cấu hình native VLAN không gắn tag, các frame untagged được gán vào native VLAN; có thiết bị hỗ trợ cấu hình tag native.",
    "source": "Cisco — VLAN Trunk Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vlan-trunks.html",
    "id": "E09Q29"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Switch",
    "difficulty": "Thông hiểu",
    "question": "Known unicast có MAC đích nằm ở cổng khác cùng VLAN thường được xử lý thế nào?",
    "options": [
      "Gửi đến DNS",
      "Chuyển đến cổng đích đã học",
      "Bỏ trong mọi trường hợp",
      "Flood mọi cổng mọi VLAN"
    ],
    "answer": 1,
    "explanation": "Khi biết cổng đích, switch chuyển frame có chọn lọc trong VLAN tương ứng.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E09Q30"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Cisco CLI",
    "difficulty": "Nhận biết",
    "question": "Dấu nhắc Router(config-line)# thuộc chế độ nào?",
    "options": [
      "VLAN database",
      "User EXEC",
      "Line Configuration",
      "Interface Configuration"
    ],
    "answer": 2,
    "explanation": "Line Configuration dùng để cấu hình các line như console hoặc VTY, không phải địa chỉ interface.",
    "source": "Cisco IOS — Configuration Fundamentals",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/fundamentals/configuration/xe-16/fundamentals-xe-16-book/cf-cli-basics.html",
    "id": "E09Q31"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "DTP",
    "difficulty": "Vận dụng cao",
    "question": "DTP đã tạo trunk nhưng VLAN20 không truyền được vì allowed list chỉ có VLAN10. Điều nào đúng?",
    "options": [
      "Cần đổi DNS client",
      "DTP phải tự thêm VLAN20 vào allowed list",
      "VTP chắc chắn bị tắt",
      "Trunk thành công không có nghĩa mọi VLAN đều được cho qua"
    ],
    "answer": 3,
    "explanation": "Chế độ trunk và danh sách VLAN cho phép là hai điều kiện riêng; cần kiểm tra allowed list cho VLAN cần dùng.",
    "source": "Cisco — VLAN Trunk Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vlan-trunks.html",
    "id": "E09Q32"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "STP",
    "difficulty": "Nhận biết",
    "question": "Cổng Blocking của STP cổ điển có chuyển tiếp frame dữ liệu người dùng không?",
    "options": [
      "Không",
      "Chỉ có IPv6",
      "Có tất cả unicast",
      "Có tất cả broadcast"
    ],
    "answer": 0,
    "explanation": "Blocking ngăn lưu lượng dữ liệu đi qua, nhưng vẫn có thể nhận BPDU để theo dõi thay đổi topology.",
    "source": "Cisco — Spanning Tree Protocol Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/stp/stp-configuration-guide/m-stp.html",
    "id": "E09Q33"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "NAT",
    "difficulty": "Thông hiểu",
    "question": "192.168.1.8 được biểu diễn ra mạng ngoài bằng 198.51.100.8. Địa chỉ sau dịch là gì?",
    "options": [
      "MAC nguồn",
      "Inside global",
      "Inside local",
      "Outside local"
    ],
    "answer": 1,
    "explanation": "Inside global đại diện cho host nội bộ ở phía ngoài, không phải địa chỉ của một host ngoài.",
    "source": "Cisco — Configuring NAT for IP Address Conservation",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipaddr_nat/configuration/15-sy/nat-15-sy-book/iadnat-addr-consv.html",
    "id": "E09Q34"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "ACL",
    "difficulty": "Vận dụng",
    "question": "access-list 10 permit 192.168.1.0 0.0.0.255 cho phép nguồn nào?",
    "options": [
      "192.169.1.37",
      "192.168.2.37",
      "192.168.1.37",
      "10.168.1.37"
    ],
    "answer": 2,
    "explanation": "Ba octet đầu phải là 192.168.1; wildcard ở octet cuối cho phép mọi giá trị trong octet này.",
    "source": "Cisco IOS — IP Access List Overview",
    "sourceUrl": "https://www.cisco.com/en/US/docs/ios-xml/ios/sec_data_acl/configuration/15-1mt/IP_Access_List_Overview.html",
    "id": "E09Q35"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "NAT",
    "difficulty": "Nhận biết",
    "question": "PAT cho phép nhiều host chia sẻ một IPv4 toàn cục nhờ phân biệt thêm gì?",
    "options": [
      "Chỉ tên hostname",
      "Chỉ VLAN name",
      "Chỉ độ dài cáp",
      "Port hoặc định danh phiên tương ứng"
    ],
    "answer": 3,
    "explanation": "Với TCP/UDP, PAT dịch địa chỉ và port để phân biệt các phiên cùng dùng một địa chỉ ngoài.",
    "source": "Cisco — Configuring NAT for IP Address Conservation",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipaddr_nat/configuration/15-sy/nat-15-sy-book/iadnat-addr-consv.html",
    "id": "E09Q36"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Router",
    "difficulty": "Thông hiểu",
    "question": "Interface trên router là gì?",
    "options": [
      "Điểm kết nối vật lý hoặc logic vào mạng",
      "Một HTTP method",
      "Một DNS record",
      "Một mã nén"
    ],
    "answer": 0,
    "explanation": "Interface có thể là cổng vật lý, subinterface hoặc loopback, phục vụ kết nối và xử lý lưu lượng.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E09Q37"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "VTP",
    "difficulty": "Nhận biết",
    "question": "VTP được dùng chủ yếu để đồng bộ thông tin gì trong miền quản trị?",
    "options": [
      "Mật khẩu TCP",
      "Cơ sở dữ liệu VLAN",
      "Bảng định tuyến Internet",
      "DNS records"
    ],
    "answer": 1,
    "explanation": "VTP phân phối cấu hình VLAN giữa các switch tham gia; nó không đồng bộ mọi cấu hình cổng hay routing.",
    "source": "Cisco — Configure VTP (version-specific behavior)",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vtp.html",
    "id": "E09Q38"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "DHCP",
    "difficulty": "Thông hiểu",
    "question": "Ngoài IP, DHCP có thể cung cấp thông tin nào trong các lựa chọn?",
    "options": [
      "Mật khẩu của mọi AP",
      "TCP sequence ban đầu của mọi phiên",
      "Subnet mask, default gateway và DNS server",
      "Bảng MAC đầy đủ của switch"
    ],
    "answer": 2,
    "explanation": "DHCP options cho phép chuyển nhiều tham số mạng cần thiết, không chỉ một địa chỉ IP.",
    "source": "IETF RFC 2131 — Dynamic Host Configuration Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc2131.html",
    "id": "E09Q39"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Cisco CLI",
    "difficulty": "Thông hiểu",
    "question": "Đang ở Router(config)#, muốn gán IP cho g0/0. Bước trước lệnh ip address là gì?",
    "options": [
      "line vty 0 4",
      "show startup-config",
      "disable",
      "interface g0/0"
    ],
    "answer": 3,
    "explanation": "Cần chọn interface để lệnh ip address tác động đúng cổng trong ngữ cảnh config-if.",
    "source": "Cisco IOS — Configuration Fundamentals",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/fundamentals/configuration/xe-16/fundamentals-xe-16-book/cf-cli-basics.html",
    "id": "E09Q40"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Switch",
    "difficulty": "Nhận biết",
    "question": "Switch Ethernet tầng 2 học bảng MAC chủ yếu từ trường nào?",
    "options": [
      "MAC nguồn của frame nhận vào",
      "TCP destination port",
      "IP đích của DNS",
      "MAC đích của frame bị loại"
    ],
    "answer": 0,
    "explanation": "Switch ghi nhận MAC nguồn và cổng nhận để biết hướng đi đến thiết bị gửi.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E09Q41"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Routing",
    "difficulty": "Nhận biết",
    "question": "Static route được thiết lập chủ yếu bằng cách nào?",
    "options": [
      "Switch học MAC nguồn",
      "Quản trị viên cấu hình",
      "Tự học qua mọi DNS query",
      "DHCP client tự quảng bá route Internet"
    ],
    "answer": 1,
    "explanation": "Static route được nhập thủ công, phù hợp mạng nhỏ hoặc đường đi cần kiểm soát cụ thể.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E09Q42"
  },
  {
    "chapter": "Chương 5",
    "topic": "Windows",
    "difficulty": "Thông hiểu",
    "question": "Muốn biết máy đang dùng DNS server nào, lệnh phù hợp nhất trong các lựa chọn?",
    "options": [
      "tracert -d 127.0.0.1",
      "netsh wlan show profiles",
      "ipconfig /all",
      "ping 127.0.0.1"
    ],
    "answer": 2,
    "explanation": "ipconfig /all liệt kê cấu hình DNS của adapter; các lệnh kia không trực tiếp cho danh sách DNS đang cấu hình.",
    "source": "Microsoft Learn — Windows networking commands",
    "sourceUrl": "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands",
    "id": "E09Q43"
  },
  {
    "chapter": "Chương 5",
    "topic": "An toàn WLAN",
    "difficulty": "Nhận biết",
    "question": "Trong mô hình man-in-the-middle, kẻ trung gian nằm ở đâu về mặt luồng trao đổi?",
    "options": [
      "Ngoài mọi đường truyền",
      "Chỉ trong DNS header",
      "Chỉ ở cuối file tải về",
      "Giữa hai bên giao tiếp"
    ],
    "answer": 3,
    "explanation": "Kẻ trung gian có vị trí cho phép chuyển tiếp, quan sát hoặc sửa trao đổi, tùy bảo vệ của giao thức.",
    "source": "NIST SP 800-153 — Guidelines for Securing WLANs",
    "sourceUrl": "https://csrc.nist.gov/pubs/sp/800/153/final",
    "id": "E09Q44"
  },
  {
    "chapter": "Chương 5",
    "topic": "An toàn WLAN",
    "difficulty": "Vận dụng",
    "question": "Mã hóa Wi-Fi đã bật nhưng người dùng vẫn bị dụ vào website giả có tên miền khác. Bài học nào đúng?",
    "options": [
      "Bảo vệ liên kết không thay thế xác minh danh tính dịch vụ và nhận biết lừa đảo",
      "Đổi VLAN ID sẽ bảo đảm đúng website",
      "Mã hóa Wi-Fi tự xác thực mọi website",
      "Tắt mã hóa sẽ sửa lỗi"
    ],
    "answer": 0,
    "explanation": "Bảo mật từng lớp giải quyết phạm vi khác nhau; mã hóa đường radio không chứng minh website là dịch vụ mong muốn.",
    "source": "NIST SP 800-153 — Guidelines for Securing WLANs",
    "sourceUrl": "https://csrc.nist.gov/pubs/sp/800/153/final",
    "id": "E09Q45"
  },
  {
    "chapter": "Chương 5",
    "topic": "GSM",
    "difficulty": "Thông hiểu",
    "question": "Phân biệt HLR và VLR đúng nhất ở mức cơ bản?",
    "options": [
      "Hai thành phần luôn có dữ liệu hoàn toàn giống nhau",
      "HLR giữ hồ sơ thường trú; VLR giữ thông tin phục vụ theo vùng hiện tại",
      "HLR là AP; VLR là switch",
      "HLR chỉ giữ MAC; VLR chỉ giữ VLAN"
    ],
    "answer": 1,
    "explanation": "HLR gắn với đăng ký thuê bao, VLR hỗ trợ vùng đang phục vụ và có thể lưu bản sao thông tin cần thiết.",
    "source": "ETSI GSM 03.02 — Network Architecture",
    "sourceUrl": "https://www.etsi.org/deliver/etsi_gts/03/0302/05.01.00_60/gsmts_0302v050100p.pdf",
    "id": "E09Q46"
  },
  {
    "chapter": "Chương 5",
    "topic": "Windows",
    "difficulty": "Vận dụng",
    "question": "arp -a có mục MAC cho gateway. Có thể kết luận chắc chắn Internet hoạt động không?",
    "options": [
      "Có, gateway tự xác thực website",
      "Không, ARP chỉ dành IPv6",
      "Không, chỉ có ánh xạ ARP trong cache",
      "Có, ARP kiểm tra toàn đường Internet"
    ],
    "answer": 2,
    "explanation": "Cache ARP cho biết thông tin tầng liên kết cục bộ, không xác nhận định tuyến và dịch vụ ngoài mạng.",
    "source": "Microsoft Learn — Windows networking commands",
    "sourceUrl": "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands",
    "id": "E09Q47"
  },
  {
    "chapter": "Chương 5",
    "topic": "WLAN",
    "difficulty": "Thông hiểu",
    "question": "Roaming giữa hai AP của một ESS mô tả việc gì?",
    "options": [
      "Mọi client phải khởi động lại",
      "Client đổi TCP thành UDP",
      "AP đổi thành DNS server",
      "Client chuyển liên kết phục vụ từ BSS này sang BSS khác"
    ],
    "answer": 3,
    "explanation": "Roaming cho phép client di chuyển vùng phủ; độ gián đoạn cụ thể phụ thuộc cơ chế xác thực và thiết kế mạng.",
    "source": "Cisco — WLAN Architecture: BSS, IBSS and ESS",
    "sourceUrl": "https://www.cisco.com/E-Learning/bulk/guest/celc/fwl/ch2/2_1_5/content.html",
    "id": "E09Q48"
  },
  {
    "chapter": "Chương 5",
    "topic": "WLAN",
    "difficulty": "Vận dụng",
    "question": "Tòa nhà nhiều tầng muốn một WLAN phủ rộng, dùng nhiều AP kết nối mạng phân phối. Mô hình nào phù hợp?",
    "options": [
      "ESS",
      "Bus đồng trục",
      "IBSS đơn",
      "Một liên kết điểm-điểm duy nhất"
    ],
    "answer": 0,
    "explanation": "ESS mở rộng dịch vụ bằng nhiều BSS liên kết, phù hợp vùng phủ không thể đáp ứng bởi một AP.",
    "source": "Cisco — WLAN Architecture: BSS, IBSS and ESS",
    "sourceUrl": "https://www.cisco.com/E-Learning/bulk/guest/celc/fwl/ch2/2_1_5/content.html",
    "id": "E09Q49"
  },
  {
    "chapter": "Chương 5",
    "topic": "GSM",
    "difficulty": "Vận dụng",
    "question": "Muốn xác định thành phần lưu hồ sơ đăng ký gốc của thuê bao, nên xem đâu?",
    "options": [
      "BTS",
      "HLR",
      "AP Wi-Fi",
      "Repeater Ethernet"
    ],
    "answer": 1,
    "explanation": "HLR là nơi quản lý thông tin thường trú của thuê bao; BTS cung cấp truy nhập radio chứ không thay vai trò cơ sở dữ liệu này.",
    "source": "ETSI GSM 03.02 — Network Architecture",
    "sourceUrl": "https://www.etsi.org/deliver/etsi_gts/03/0302/05.01.00_60/gsmts_0302v050100p.pdf",
    "id": "E09Q50"
  }
];
