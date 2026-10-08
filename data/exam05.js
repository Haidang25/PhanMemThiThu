/* Tự biên soạn; xem tools/chapter*.txt và README.md. */
globalThis.EXAMS ||= {};
globalThis.EXAMS["05"] = [
  {
    "chapter": "Chương 1",
    "topic": "OSI",
    "difficulty": "Nhận biết",
    "question": "FCS ở cuối frame Ethernet có vai trò gì?",
    "options": [
      "Phát hiện lỗi frame",
      "Mã hóa mật khẩu",
      "Chọn cổng TCP",
      "Cấp địa chỉ mạng"
    ],
    "answer": 0,
    "explanation": "FCS chứa giá trị kiểm tra CRC để phát hiện lỗi; tự nó không cung cấp cơ chế truyền lại hay mã hóa.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E05Q01"
  },
  {
    "chapter": "Chương 1",
    "topic": "OSI",
    "difficulty": "Vận dụng",
    "question": "Host gửi đến máy khác subnet qua gateway. MAC đích của frame đầu tiên thường là gì?",
    "options": [
      "MAC broadcast trong mọi trường hợp",
      "MAC giao diện gateway cùng LAN",
      "MAC máy đích ở mạng xa",
      "MAC DNS server bất kỳ"
    ],
    "answer": 1,
    "explanation": "Host giao packet cho next hop tại liên kết cục bộ, nên frame dùng MAC của gateway sau khi phân giải địa chỉ.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E05Q02"
  },
  {
    "chapter": "Chương 1",
    "topic": "Topology",
    "difficulty": "Nhận biết",
    "question": "Trong bus dùng cáp đồng trục, các máy chia sẻ thành phần nào?",
    "options": [
      "Một router riêng cho mỗi máy",
      "Vòng token riêng",
      "Đường trục chung",
      "Liên kết trực tiếp đến mọi máy"
    ],
    "answer": 2,
    "explanation": "Bus sử dụng đường trục chung, nên lỗi trên đường trục có thể ảnh hưởng nhiều nút.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E05Q03"
  },
  {
    "chapter": "Chương 1",
    "topic": "OSI",
    "difficulty": "Nhận biết",
    "question": "HTTP được xếp vào tầng nào trong mô hình TCP/IP?",
    "options": [
      "Physical",
      "Internet",
      "Link",
      "Application"
    ],
    "answer": 3,
    "explanation": "HTTP là giao thức ứng dụng, sử dụng dịch vụ vận chuyển bên dưới để trao đổi thông điệp.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E05Q04"
  },
  {
    "chapter": "Chương 1",
    "topic": "Topology",
    "difficulty": "Vận dụng",
    "question": "Một full mesh tăng từ 5 lên 6 nút. Cần thêm bao nhiêu liên kết?",
    "options": [
      "5",
      "6",
      "1",
      "10"
    ],
    "answer": 0,
    "explanation": "Nút mới cần nối với từng nút trong 5 nút hiện hữu, nên phải bổ sung 5 liên kết.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E05Q05"
  },
  {
    "chapter": "Chương 1",
    "topic": "Repeater",
    "difficulty": "Thông hiểu",
    "question": "Cần nối hai mạng IP khác subnet. Chỉ thêm repeater có đáp ứng không?",
    "options": [
      "Có, repeater tự tạo default route",
      "Không, cần chức năng định tuyến tầng 3",
      "Có, repeater đổi subnet mask",
      "Có, repeater tự NAT"
    ],
    "answer": 1,
    "explanation": "Repeater chỉ xử lý tín hiệu; giao tiếp liên subnet cần thiết bị hoặc chức năng định tuyến.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E05Q06"
  },
  {
    "chapter": "Chương 2",
    "topic": "HTTP",
    "difficulty": "Thông hiểu",
    "question": "Mã nào cho biết yêu cầu thiếu thông tin xác thực hợp lệ?",
    "options": [
      "503",
      "301",
      "401",
      "200"
    ],
    "answer": 2,
    "explanation": "401 yêu cầu thông tin xác thực hợp lệ; tên lịch sử Unauthorized dễ bị nhầm với thiếu quyền của 403.",
    "source": "MDN — HTTP reference",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference",
    "id": "E05Q07"
  },
  {
    "chapter": "Chương 2",
    "topic": "Nén dữ liệu",
    "difficulty": "Vận dụng cao",
    "question": "Các ký hiệu có xác suất 1/2, 1/4, 1/8, 1/8 với độ dài mã 1,2,3,3 bit. Độ dài trung bình là bao nhiêu?",
    "options": [
      "3 bit/ký hiệu",
      "2 bit/ký hiệu",
      "2,25 bit/ký hiệu",
      "1,75 bit/ký hiệu"
    ],
    "answer": 3,
    "explanation": "Tổng có trọng số là 0,5×1+0,25×2+0,125×3+0,125×3=1,75 bit, chưa tính metadata.",
    "source": "Carnegie Mellon University — Algorithms in the Real World: Compression",
    "sourceUrl": "https://www.cs.cmu.edu/afs/cs/project/pscico-guyb/realworld/www/slidesF15.html",
    "id": "E05Q08"
  },
  {
    "chapter": "Chương 2",
    "topic": "TCP",
    "difficulty": "Vận dụng",
    "question": "Segment chỉ có ACK, không dữ liệu, SYN hay FIN. Nó tiêu thụ bao nhiêu số thứ tự?",
    "options": [
      "0",
      "40",
      "1",
      "20"
    ],
    "answer": 0,
    "explanation": "ACK thuần không chiếm sequence number; dữ liệu, SYN và FIN mới tiêu thụ không gian số thứ tự.",
    "source": "IETF RFC 9293 — Transmission Control Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc9293.html",
    "id": "E05Q09"
  },
  {
    "chapter": "Chương 2",
    "topic": "RDT",
    "difficulty": "Thông hiểu",
    "question": "RDT 2.1 thêm sequence number để giải quyết điều gì?",
    "options": [
      "Bầu root bridge",
      "Nhận diện gói lặp do truyền lại",
      "Phân giải tên miền",
      "Tăng độ dài MAC"
    ],
    "answer": 1,
    "explanation": "Sequence number giúp bên nhận phân biệt gói mới và bản truyền lại của gói đã giao lên trên.",
    "source": "Kurose & Ross — Transport Layer, public teaching materials (UMass)",
    "sourceUrl": "https://gaia.cs.umass.edu/kurose_ross/videos/3/",
    "id": "E05Q10"
  },
  {
    "chapter": "Chương 2",
    "topic": "RDT",
    "difficulty": "Thông hiểu",
    "question": "Timer đặt ngắn hơn RTT bình thường có hậu quả điển hình nào?",
    "options": [
      "Không bao giờ truyền lại",
      "Mọi gói đều hỏng checksum",
      "Truyền lại thừa dù gói không mất",
      "Dữ liệu tự nén"
    ],
    "answer": 2,
    "explanation": "ACK có thể chưa kịp đến khi timer hết, tạo truyền lại không cần thiết; sequence number vẫn giúp xử lý bản lặp.",
    "source": "Kurose & Ross — Transport Layer, public teaching materials (UMass)",
    "sourceUrl": "https://gaia.cs.umass.edu/kurose_ross/videos/3/",
    "id": "E05Q11"
  },
  {
    "chapter": "Chương 2",
    "topic": "DNS",
    "difficulty": "Nhận biết",
    "question": "Phần Questions của DNS chứa thông tin nào?",
    "options": [
      "Bảng MAC của resolver",
      "Cửa sổ nhận TCP",
      "Danh sách VLAN",
      "Tên cần hỏi, loại và lớp truy vấn"
    ],
    "answer": 3,
    "explanation": "Một câu hỏi DNS mô tả QNAME, QTYPE và QCLASS, không chứa các tham số chuyển mạch.",
    "source": "IETF RFC 1035 — Domain Names: Implementation and Specification",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc1035.html",
    "id": "E05Q12"
  },
  {
    "chapter": "Chương 2",
    "topic": "Selective Repeat",
    "difficulty": "Nhận biết",
    "question": "Với không gian số thứ tự M và hai cửa sổ SR bằng nhau, giới hạn an toàn là gì?",
    "options": [
      "W ≤ M/2",
      "W không bị giới hạn",
      "W ≥ M+1",
      "W = M luôn luôn"
    ],
    "answer": 0,
    "explanation": "Giới hạn nửa không gian số giúp phân biệt gói cũ với gói mới sau khi số thứ tự quay vòng.",
    "source": "Kurose & Ross — Transport Layer, public teaching materials (UMass)",
    "sourceUrl": "https://gaia.cs.umass.edu/kurose_ross/videos/3/",
    "id": "E05Q13"
  },
  {
    "chapter": "Chương 2",
    "topic": "DNS",
    "difficulty": "Nhận biết",
    "question": "Bit QR trong DNS header phân biệt điều gì?",
    "options": [
      "A và MX",
      "Query và response",
      "TCP và UDP",
      "IPv4 và IPv6"
    ],
    "answer": 1,
    "explanation": "QR=0 cho query và QR=1 cho response; loại bản ghi nằm trong trường khác.",
    "source": "IETF RFC 1035 — Domain Names: Implementation and Specification",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc1035.html",
    "id": "E05Q14"
  },
  {
    "chapter": "Chương 2",
    "topic": "IPv4",
    "difficulty": "Thông hiểu",
    "question": "Vì sao checksum IPv4 cần cập nhật khi router giảm TTL?",
    "options": [
      "Router đổi mọi port",
      "Router bắt buộc giải mã payload",
      "TTL nằm trong header được checksum bảo vệ",
      "TTL nằm trong body HTTP"
    ],
    "answer": 2,
    "explanation": "Thay đổi TTL làm thay đổi các bit được tính checksum header, nên checksum phải được cập nhật tương ứng.",
    "source": "IETF RFC 791 — Internet Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc791.html",
    "id": "E05Q15"
  },
  {
    "chapter": "Chương 2",
    "topic": "Selective Repeat",
    "difficulty": "Thông hiểu",
    "question": "Gói ngoài thứ tự nhưng nằm trong receive window SR và checksum đúng thường được xử lý thế nào?",
    "options": [
      "Giao ngay vượt khoảng trống cho ứng dụng có thứ tự",
      "Tự đổi thành gói còn thiếu",
      "Luôn bỏ không ACK",
      "Đệm và ACK riêng gói đó"
    ],
    "answer": 3,
    "explanation": "SR chấp nhận trong cửa sổ, lưu dữ liệu và phản hồi; việc giao theo thứ tự vẫn chờ các gói trước.",
    "source": "Kurose & Ross — Transport Layer, public teaching materials (UMass)",
    "sourceUrl": "https://gaia.cs.umass.edu/kurose_ross/videos/3/",
    "id": "E05Q16"
  },
  {
    "chapter": "Chương 2",
    "topic": "IPv6",
    "difficulty": "Thông hiểu",
    "question": "Flow Label được thiết kế để hỗ trợ nhận diện điều gì?",
    "options": [
      "Luồng packet cần xử lý nhất quán",
      "Port FTP thụ động",
      "Mật khẩu Wi-Fi",
      "Địa chỉ MAC đích"
    ],
    "answer": 0,
    "explanation": "Flow Label giúp nhận diện luồng cùng với thông tin địa chỉ; không thay thế port hoặc địa chỉ đầu cuối.",
    "source": "IETF RFC 8200 — IPv6 Specification",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc8200.html",
    "id": "E05Q17"
  },
  {
    "chapter": "Chương 2",
    "topic": "FTP",
    "difficulty": "Nhận biết",
    "question": "Trong FTP active truyền thống, bên nào chủ động mở kết nối dữ liệu?",
    "options": [
      "Switch nối đến FTP server",
      "Server nối đến client",
      "DNS nối đến router",
      "Client nối đến server"
    ],
    "answer": 1,
    "explanation": "Client công bố điểm lắng nghe, còn server chủ động kết nối dữ liệu tới client.",
    "source": "IETF RFC 959 — File Transfer Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc959.html",
    "id": "E05Q18"
  },
  {
    "chapter": "Chương 2",
    "topic": "Go-Back-N",
    "difficulty": "Thông hiểu",
    "question": "Receiver GBN đang chờ gói 3 nhưng nhận gói 4. Xử lý chuẩn là gì?",
    "options": [
      "Luôn tăng expected lên 5",
      "Đổi số gói 4 thành 3",
      "Bỏ gói 4, ACK lại mốc liên tục đã nhận",
      "Giao gói 4 ngay rồi chờ 3"
    ],
    "answer": 2,
    "explanation": "GBN chuẩn không đệm ngoài thứ tự; receiver nhắc lại ACK cho phần đã nhận liên tục.",
    "source": "Kurose & Ross — Transport Layer, public teaching materials (UMass)",
    "sourceUrl": "https://gaia.cs.umass.edu/kurose_ross/videos/3/",
    "id": "E05Q19"
  },
  {
    "chapter": "Chương 2",
    "topic": "UDP",
    "difficulty": "Thông hiểu",
    "question": "Ứng dụng gửi hai UDP datagram độc lập. Nếu cả hai đến nơi, UDP có giữ ranh giới datagram không?",
    "options": [
      "Không, luôn ghép thành luồng byte",
      "Chỉ khi bật ACK",
      "Chỉ khi dùng port 80",
      "Có, mỗi datagram là đơn vị riêng"
    ],
    "answer": 3,
    "explanation": "UDP giữ ranh giới datagram, nhưng không bảo đảm cả hai đến nơi hoặc đến đúng thứ tự.",
    "source": "IETF RFC 768 — User Datagram Protocol; RFC 8200 §8.1 for IPv6",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc768",
    "id": "E05Q20"
  },
  {
    "chapter": "Chương 2",
    "topic": "Mã hóa đường truyền",
    "difficulty": "Nhận biết",
    "question": "Trong NRZ-L, bit được biểu diễn chủ yếu bằng gì?",
    "options": [
      "Mức tín hiệu",
      "Địa chỉ MAC",
      "Tên miền",
      "Số lần truyền lại"
    ],
    "answer": 0,
    "explanation": "NRZ-L dùng các mức tín hiệu phân biệt bit; quy ước mức cao/thấp ứng với 0/1 cần được xác định.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E05Q21"
  },
  {
    "chapter": "Chương 2",
    "topic": "HTTP",
    "difficulty": "Vận dụng",
    "question": "Response cho HEAD có Content-Length: 1000 nhưng không có body. Kết luận nào đúng?",
    "options": [
      "Phải đổi status sang 404",
      "Có thể hợp lệ: độ dài mô tả body mà GET tương ứng sẽ trả",
      "TCP chắc chắn làm mất body",
      "Luôn sai vì HEAD phải mang 1000 byte"
    ],
    "answer": 1,
    "explanation": "HEAD không mang nội dung response; Content-Length có thể mô tả kích thước biểu diễn của GET tương ứng.",
    "source": "MDN — HTTP reference",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference",
    "id": "E05Q22"
  },
  {
    "chapter": "Chương 2",
    "topic": "IPv4",
    "difficulty": "Nhận biết",
    "question": "Protocol=17 trong IPv4 chỉ giao thức nào?",
    "options": [
      "TCP",
      "HTTP",
      "UDP",
      "Ethernet"
    ],
    "answer": 2,
    "explanation": "UDP được gán số giao thức IP 17. HTTP không được nhận diện trực tiếp bằng trường Protocol này.",
    "source": "IETF RFC 791 — Internet Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc791.html",
    "id": "E05Q23"
  },
  {
    "chapter": "Chương 2",
    "topic": "TCP",
    "difficulty": "Thông hiểu",
    "question": "TCP checksum được tính có sử dụng phần nào ngoài TCP segment?",
    "options": [
      "Mật khẩu DNS",
      "Toàn bộ Ethernet preamble",
      "Bảng định tuyến",
      "Pseudo-header từ thông tin IP"
    ],
    "answer": 3,
    "explanation": "Pseudo-header đưa địa chỉ IP và thông tin giao thức/độ dài vào kiểm tra, giúp phát hiện một số lỗi giao sai đầu cuối.",
    "source": "IETF RFC 9293 — Transmission Control Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc9293.html",
    "id": "E05Q24"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "DTP",
    "difficulty": "Thông hiểu",
    "question": "Cổng switchport mode access nối dynamic desirable. Có thương lượng thành trunk không?",
    "options": [
      "Không, phía access được đặt cố định",
      "Có nếu VLAN ID nhỏ",
      "Có nếu cùng DNS",
      "Có, desirable ghi đè mọi cấu hình"
    ],
    "answer": 0,
    "explanation": "Access cố định không chuyển thành trunk chỉ vì bên kia chủ động DTP.",
    "source": "Cisco — VLAN Trunk Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vlan-trunks.html",
    "id": "E05Q25"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "DTP",
    "difficulty": "Vận dụng",
    "question": "Cổng người dùng không cần trunk. Cấu hình chế độ nào giảm nguy cơ trunk ngoài ý muốn?",
    "options": [
      "switchport mode trunk",
      "switchport mode access",
      "interface loopback 0",
      "switchport mode dynamic desirable"
    ],
    "answer": 1,
    "explanation": "Đặt access tĩnh tránh việc thiết bị cắm vào thương lượng cổng thành trunk; còn cần các chính sách bảo vệ phù hợp.",
    "source": "Cisco — VLAN Trunk Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vlan-trunks.html",
    "id": "E05Q26"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "VTP",
    "difficulty": "Thông hiểu",
    "question": "VTP có tự gán mọi access port vào VLAN vừa tạo không?",
    "options": [
      "Chỉ khi DNS đúng",
      "Có, nếu revision chẵn",
      "Không, membership cổng cần cấu hình phù hợp",
      "Có, luôn gán tất cả"
    ],
    "answer": 2,
    "explanation": "Đồng bộ danh sách VLAN không đồng nghĩa sao chép cấu hình VLAN access trên từng cổng.",
    "source": "Cisco — Configure VTP (version-specific behavior)",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vtp.html",
    "id": "E05Q27"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "VLAN",
    "difficulty": "Nhận biết",
    "question": "Static VLAN membership thường được gán dựa trên gì?",
    "options": [
      "DNS transaction ID",
      "TTL của packet",
      "Kích thước TCP window",
      "Cổng switch được cấu hình"
    ],
    "answer": 3,
    "explanation": "Static VLAN gán cổng vào VLAN bằng cấu hình; máy cắm vào cổng đó dùng VLAN tương ứng trong mô hình access cơ bản.",
    "source": "Cisco — VLAN Trunk Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vlan-trunks.html",
    "id": "E05Q28"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Router",
    "difficulty": "Nhận biết",
    "question": "Next hop trong tuyến IP thường chỉ điều gì?",
    "options": [
      "Router kế tiếp trên đường đi",
      "Ứng dụng cuối nhận HTTP",
      "Switch có MAC nhỏ nhất",
      "DNS root server"
    ],
    "answer": 0,
    "explanation": "Next hop là thiết bị chuyển tiếp kế tiếp, không nhất thiết là host đích cuối cùng.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E05Q29"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Switch",
    "difficulty": "Thông hiểu",
    "question": "Máy có MAC A chuyển từ cổng 1 sang cổng 3 và gửi frame. Switch thường làm gì?",
    "options": [
      "Đổi MAC A thành broadcast",
      "Học lại MAC A ở cổng 3",
      "Xóa mọi VLAN",
      "Giữ cổng 1 mãi mãi"
    ],
    "answer": 1,
    "explanation": "MAC nguồn được quan sát ở cổng mới sẽ cập nhật vị trí trong bảng động, tùy chính sách bảo vệ cổng.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E05Q30"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "NAT",
    "difficulty": "Vận dụng cao",
    "question": "NAT đổi IPv4 nguồn trong packet TCP. Ngoài checksum IPv4, vì sao cần sửa checksum TCP?",
    "options": [
      "Vì TCP checksum chỉ tính MAC",
      "Vì HTTP luôn thêm body",
      "Pseudo-header TCP có địa chỉ IP nguồn",
      "Vì TTL nằm trong TCP header"
    ],
    "answer": 2,
    "explanation": "Địa chỉ IP tham gia pseudo-header TCP; thay địa chỉ làm kết quả checksum thay đổi dù TCP data không đổi.",
    "source": "Cisco — Configuring NAT for IP Address Conservation",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipaddr_nat/configuration/15-sy/nat-15-sy-book/iadnat-addr-consv.html",
    "id": "E05Q31"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "ACL",
    "difficulty": "Vận dụng",
    "question": "ACL “permit host 10.0.0.5” tương đương wildcard nào cho địa chỉ đó?",
    "options": [
      "255.255.255.255",
      "255.0.0.0",
      "0.0.0.255",
      "0.0.0.0"
    ],
    "answer": 3,
    "explanation": "host yêu cầu khớp chính xác mọi bit địa chỉ, tương đương wildcard toàn số 0.",
    "source": "Cisco IOS — IP Access List Overview",
    "sourceUrl": "https://www.cisco.com/en/US/docs/ios-xml/ios/sec_data_acl/configuration/15-1mt/IP_Access_List_Overview.html",
    "id": "E05Q32"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "STP",
    "difficulty": "Vận dụng cao",
    "question": "Cùng VLAN: A priority 4096 MAC cao; B priority 8192 MAC thấp; C priority 32768 MAC thấp nhất. Root là ai?",
    "options": [
      "A",
      "Cả B và C",
      "B",
      "C"
    ],
    "answer": 0,
    "explanation": "Phần priority thấp nhất quyết định trước khi xét MAC. A vẫn thắng dù MAC cao hơn các switch còn lại.",
    "source": "Cisco — Spanning Tree Protocol Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/stp/stp-configuration-guide/m-stp.html",
    "id": "E05Q33"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "DHCP",
    "difficulty": "Vận dụng",
    "question": "Pool có 20 địa chỉ khả dụng, 20 lease đang còn hiệu lực, không địa chỉ dự phòng. Client mới có thể gặp gì?",
    "options": [
      "Nhận cổng TCP thay IP",
      "Không được cấp lease mới do hết pool",
      "Tự chia sẻ IP mọi client an toàn",
      "Tự làm DHCP server bắt buộc"
    ],
    "answer": 1,
    "explanation": "Server cần địa chỉ trống phù hợp để cấp; pool cạn có thể khiến quá trình cấp phát thất bại.",
    "source": "IETF RFC 2131 — Dynamic Host Configuration Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc2131.html",
    "id": "E05Q34"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Switch",
    "difficulty": "Thông hiểu",
    "question": "Switch biết MAC nguồn và MAC đích đều ở cổng nhận frame. Nó nên làm gì?",
    "options": [
      "Gửi lại vào cùng cổng",
      "Đổi IP nguồn",
      "Lọc, không chuyển frame ra cổng khác",
      "Flood tất cả cổng"
    ],
    "answer": 2,
    "explanation": "Đích nằm trên cùng đoạn nhận nên không cần chuyển sang đoạn khác; đây là filtering.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E05Q35"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "VLAN",
    "difficulty": "Thông hiểu",
    "question": "Dynamic VLAN membership có thể dựa trên thông tin nào?",
    "options": [
      "Giá trị HTTP 404",
      "Số lần lặp tín hiệu",
      "Số giây của timer IP",
      "Danh tính hoặc MAC và chính sách máy chủ"
    ],
    "answer": 3,
    "explanation": "Cơ chế động có thể gán VLAN theo xác thực hoặc thuộc tính thiết bị; không chỉ theo cổng cố định.",
    "source": "Cisco — VLAN Trunk Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vlan-trunks.html",
    "id": "E05Q36"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "DHCP",
    "difficulty": "Thông hiểu",
    "question": "DHCP ACK ở cuối DORA xác nhận điều gì?",
    "options": [
      "Server chấp thuận cấu hình và lease",
      "TCP handshake đã xong",
      "Địa chỉ MAC đã đổi",
      "Mọi route Internet đều đúng"
    ],
    "answer": 0,
    "explanation": "ACK xác nhận cấp phát cấu hình DHCP; kết nối Internet vẫn phụ thuộc gateway, routing và các điều kiện khác.",
    "source": "IETF RFC 2131 — Dynamic Host Configuration Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc2131.html",
    "id": "E05Q37"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "STP",
    "difficulty": "Vận dụng",
    "question": "SW A priority 24576, SW B priority 32768, cùng VLAN. MAC B nhỏ hơn A. Ai được ưu tiên root?",
    "options": [
      "SW B",
      "SW A",
      "Không bầu được",
      "Switch có port nhanh hơn"
    ],
    "answer": 1,
    "explanation": "Priority được xét trước MAC; 24576 nhỏ hơn 32768 nên A có Bridge ID tốt hơn trong cùng VLAN.",
    "source": "Cisco — Spanning Tree Protocol Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/stp/stp-configuration-guide/m-stp.html",
    "id": "E05Q38"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Cisco CLI",
    "difficulty": "Thông hiểu",
    "question": "Vì sao nên xem running-config và startup-config trước khi khởi động lại?",
    "options": [
      "Để bật lại DNS root",
      "Để xóa MAC broadcast",
      "Phát hiện thay đổi đang chạy chưa được lưu",
      "Để đổi TCP port"
    ],
    "answer": 2,
    "explanation": "Nếu hai cấu hình khác nhau, thiết bị có thể mất thay đổi chưa lưu sau reboot.",
    "source": "Cisco IOS — Configuration Fundamentals",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/fundamentals/configuration/xe-16/fundamentals-xe-16-book/cf-cli-basics.html",
    "id": "E05Q39"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Routing",
    "difficulty": "Nhận biết",
    "question": "RIP sử dụng metric cơ bản nào?",
    "options": [
      "VLAN priority",
      "MAC address",
      "HTTP latency",
      "Hop count"
    ],
    "answer": 3,
    "explanation": "RIP đo đường đi bằng số hop, không trực tiếp tối ưu theo băng thông từng liên kết.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E05Q40"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "ACL",
    "difficulty": "Vận dụng cao",
    "question": "Muốn chỉ chặn HTTP TCP/80 tới server, nhưng vẫn cho HTTPS. Loại ACL nào phù hợp nhất?",
    "options": [
      "Extended ACL xét IP đích và port TCP",
      "MAC aging timer",
      "VTP transparent",
      "Standard ACL chỉ nguồn"
    ],
    "answer": 0,
    "explanation": "Phân biệt dịch vụ trên cùng địa chỉ đích cần xét port; standard ACL cơ bản không cung cấp tiêu chí này.",
    "source": "Cisco IOS — IP Access List Overview",
    "sourceUrl": "https://www.cisco.com/en/US/docs/ios-xml/ios/sec_data_acl/configuration/15-1mt/IP_Access_List_Overview.html",
    "id": "E05Q41"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "NAT",
    "difficulty": "Thông hiểu",
    "question": "Outside local là gì?",
    "options": [
      "Cổng TCP của router",
      "Địa chỉ host ngoài như được nhìn thấy từ mạng trong",
      "Địa chỉ multicast STP",
      "Địa chỉ host trong trước NAT"
    ],
    "answer": 1,
    "explanation": "Nếu dịch địa chỉ phía ngoài, host trong có thể nhìn thấy một outside local khác outside global; nhiều cấu hình chúng giống nhau.",
    "source": "Cisco — Configuring NAT for IP Address Conservation",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipaddr_nat/configuration/15-sy/nat-15-sy-book/iadnat-addr-consv.html",
    "id": "E05Q42"
  },
  {
    "chapter": "Chương 5",
    "topic": "Windows",
    "difficulty": "Nhận biết",
    "question": "ipconfig /all bổ sung loại thông tin nào?",
    "options": [
      "Tất cả HTTP body",
      "Bảng định tuyến OSPF Internet",
      "Chi tiết adapter, DHCP và DNS",
      "Mọi mật khẩu Wi-Fi mặc định"
    ],
    "answer": 2,
    "explanation": "/all cung cấp chi tiết như physical address, trạng thái DHCP, DHCP server và DNS server theo cấu hình adapter.",
    "source": "Microsoft Learn — Windows networking commands",
    "sourceUrl": "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands",
    "id": "E05Q43"
  },
  {
    "chapter": "Chương 5",
    "topic": "GSM",
    "difficulty": "Nhận biết",
    "question": "HLR lưu loại thông tin chủ yếu nào?",
    "options": [
      "Cửa sổ TCP của mỗi website",
      "Bảng MAC của AP",
      "HTTP cache của trình duyệt",
      "Thông tin thuê bao thường trú và thông tin vị trí liên quan"
    ],
    "answer": 3,
    "explanation": "Home Location Register quản lý hồ sơ thuê bao và thông tin cần để tìm vùng phục vụ hiện tại.",
    "source": "ETSI GSM 03.02 — Network Architecture",
    "sourceUrl": "https://www.etsi.org/deliver/etsi_gts/03/0302/05.01.00_60/gsmts_0302v050100p.pdf",
    "id": "E05Q44"
  },
  {
    "chapter": "Chương 5",
    "topic": "WLAN",
    "difficulty": "Nhận biết",
    "question": "BSS là viết tắt của thuật ngữ nào trong WLAN?",
    "options": [
      "Basic Service Set",
      "Binary Switching System",
      "Broadcast Server Service",
      "Bridge Security Session"
    ],
    "answer": 0,
    "explanation": "Basic Service Set là tập dịch vụ cơ bản trong kiến trúc IEEE 802.11; cần phân biệt với BSS của GSM.",
    "source": "Cisco — WLAN Architecture: BSS, IBSS and ESS",
    "sourceUrl": "https://www.cisco.com/E-Learning/bulk/guest/celc/fwl/ch2/2_1_5/content.html",
    "id": "E05Q45"
  },
  {
    "chapter": "Chương 5",
    "topic": "An toàn WLAN",
    "difficulty": "Vận dụng",
    "question": "Nhân viên tự cắm AP không được phê duyệt vào LAN. Rủi ro nào phù hợp nhất?",
    "options": [
      "Bảo đảm client không nghe lén được",
      "Tạo đường truy cập ngoài kiểm soát của chính sách",
      "Luôn cải thiện bảo mật",
      "Tự vô hiệu hóa mọi loop"
    ],
    "answer": 1,
    "explanation": "Rogue AP có thể bỏ qua quy trình cấu hình và giám sát, mở thêm điểm truy nhập không được kiểm soát.",
    "source": "NIST SP 800-153 — Guidelines for Securing WLANs",
    "sourceUrl": "https://csrc.nist.gov/pubs/sp/800/153/final",
    "id": "E05Q46"
  },
  {
    "chapter": "Chương 5",
    "topic": "GSM",
    "difficulty": "Thông hiểu",
    "question": "Trong GSM, BSS thường chỉ phân hệ gồm gì?",
    "options": [
      "Một AP Wi-Fi với station",
      "DNS và DHCP server",
      "BSC và các BTS liên quan",
      "TCP và UDP"
    ],
    "answer": 2,
    "explanation": "Base Station Subsystem của GSM khác Basic Service Set của WLAN dù cùng viết tắt BSS.",
    "source": "ETSI GSM 03.02 — Network Architecture",
    "sourceUrl": "https://www.etsi.org/deliver/etsi_gts/03/0302/05.01.00_60/gsmts_0302v050100p.pdf",
    "id": "E05Q47"
  },
  {
    "chapter": "Chương 5",
    "topic": "Windows",
    "difficulty": "Vận dụng cao",
    "question": "tracert có hop giữa hiện * nhưng đích cuối vẫn phản hồi. Giải thích nào hợp lý nhất?",
    "options": [
      "Đích cuối là giả trong mọi trường hợp",
      "TTL không được giảm ở bất kỳ router nào",
      "Đường truyền chắc chắn đứt tại hop đó",
      "Hop giữa không trả lời thăm dò nhưng vẫn có thể chuyển tiếp"
    ],
    "answer": 3,
    "explanation": "Thiết bị có thể hạn chế phản hồi ICMP riêng cho thăm dò trong khi tiếp tục chuyển packet, nên không suy ra mất đường chỉ từ dấu *.",
    "source": "Microsoft Learn — Windows networking commands",
    "sourceUrl": "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands",
    "id": "E05Q48"
  },
  {
    "chapter": "Chương 5",
    "topic": "An toàn WLAN",
    "difficulty": "Thông hiểu",
    "question": "SSID spoofing có thể đánh lừa người dùng bằng cách nào?",
    "options": [
      "Quảng bá tên mạng giống mạng quen thuộc",
      "Tự biết mọi mật khẩu",
      "Luôn bẻ được mã hóa TLS",
      "Xóa được HLR"
    ],
    "answer": 0,
    "explanation": "Tên mạng có thể được sao chép; người dùng không nên suy ra độ tin cậy chỉ từ SSID trùng tên.",
    "source": "NIST SP 800-153 — Guidelines for Securing WLANs",
    "sourceUrl": "https://csrc.nist.gov/pubs/sp/800/153/final",
    "id": "E05Q49"
  },
  {
    "chapter": "Chương 5",
    "topic": "WLAN",
    "difficulty": "Vận dụng",
    "question": "Client kết nối AP được nhưng nhận IP tự gán 169.254.x.x. Nên kiểm tra thành phần nào đầu tiên?",
    "options": [
      "Huffman code",
      "DHCP và đường đến DHCP server",
      "STP root MAC của mọi VLAN không liên quan",
      "Cổng FTP 20"
    ],
    "answer": 1,
    "explanation": "Địa chỉ link-local tự gán trên Windows thường gợi ý không nhận được cấu hình DHCP hợp lệ; cần kiểm tra theo ngữ cảnh.",
    "source": "Cisco — WLAN Architecture: BSS, IBSS and ESS",
    "sourceUrl": "https://www.cisco.com/E-Learning/bulk/guest/celc/fwl/ch2/2_1_5/content.html",
    "id": "E05Q50"
  }
];
