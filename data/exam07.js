/* Tự biên soạn; xem tools/chapter*.txt và README.md. */
globalThis.EXAMS ||= {};
globalThis.EXAMS["07"] = [
  {
    "chapter": "Chương 1",
    "topic": "Topology",
    "difficulty": "Thông hiểu",
    "question": "Các máy cắm vào hub tạo hình sao nhưng cùng chia sẻ môi trường truyền. Phân biệt nào đúng?",
    "options": [
      "Vật lý star, logic môi trường chung",
      "Vật lý tree, mỗi cổng một VLAN",
      "Vật lý ring, logic star",
      "Vật lý mesh, logic ring"
    ],
    "answer": 0,
    "explanation": "Hub lặp tín hiệu giữa các cổng nên vẫn là môi trường chung dù sơ đồ cáp có dạng hình sao.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E07Q01"
  },
  {
    "chapter": "Chương 1",
    "topic": "OSI",
    "difficulty": "Vận dụng cao",
    "question": "Cũng với 100 byte ứng dụng, TCP 20, IPv4 20, Ethernet header 14 và FCS 4; không VLAN/padding. Frame dài bao nhiêu, không tính preamble?",
    "options": [
      "154 byte",
      "158 byte",
      "140 byte",
      "166 byte"
    ],
    "answer": 1,
    "explanation": "Frame gồm 14 + 20 + 20 + 100 + 4 = 158 byte. Preamble và khoảng cách frame không thuộc phép tính này.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E07Q02"
  },
  {
    "chapter": "Chương 1",
    "topic": "Topology",
    "difficulty": "Thông hiểu",
    "question": "Vì sao mạng full mesh thường có khả năng chịu lỗi liên kết tốt?",
    "options": [
      "Mọi gói đều được nén",
      "Không sử dụng cáp",
      "Có nhiều đường kết nối thay thế",
      "Chỉ cần một nút trung tâm"
    ],
    "answer": 2,
    "explanation": "Nhiều liên kết tạo đường thay thế; khả năng sử dụng chúng còn phụ thuộc cơ chế chuyển tiếp.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E07Q03"
  },
  {
    "chapter": "Chương 1",
    "topic": "OSI",
    "difficulty": "Nhận biết",
    "question": "Mô hình tham chiếu OSI có bao nhiêu tầng?",
    "options": [
      "5",
      "8",
      "4",
      "7"
    ],
    "answer": 3,
    "explanation": "OSI chia chức năng truyền thông thành 7 tầng, từ Physical đến Application.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E07Q04"
  },
  {
    "chapter": "Chương 1",
    "topic": "Repeater",
    "difficulty": "Thông hiểu",
    "question": "Frame đã chứa bit sai trước repeater. Repeater có bảo đảm sửa dữ liệu gốc không?",
    "options": [
      "Không, không có cơ chế sửa nội dung frame",
      "Có, vì tăng điện áp là đủ",
      "Có, nhờ DHCP",
      "Có, nhờ bảng MAC"
    ],
    "answer": 0,
    "explanation": "Tái tạo tín hiệu không đồng nghĩa khôi phục bit gốc; kiểm tra và phục hồi lỗi cần cơ chế tầng cao hơn.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E07Q05"
  },
  {
    "chapter": "Chương 1",
    "topic": "OSI",
    "difficulty": "Thông hiểu",
    "question": "Trình duyệt nhận HTTP response sau khi dữ liệu qua TCP. Phần nào xử lý ý nghĩa mã 404?",
    "options": [
      "Switch MAC",
      "Ứng dụng HTTP",
      "Repeater vật lý",
      "Bộ định tuyến IP"
    ],
    "answer": 1,
    "explanation": "Mã HTTP là ngữ nghĩa ứng dụng; các tầng dưới chỉ hỗ trợ vận chuyển dữ liệu.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E07Q06"
  },
  {
    "chapter": "Chương 2",
    "topic": "Selective Repeat",
    "difficulty": "Nhận biết",
    "question": "Selective Repeat truyền lại những gói nào khi timeout riêng lẻ?",
    "options": [
      "Chỉ gói có số lớn nhất",
      "Mọi gói từ đầu file",
      "Các gói tương ứng chưa được xác nhận",
      "Mọi gói sau base trong mọi trường hợp"
    ],
    "answer": 2,
    "explanation": "SR theo dõi từng gói, nên có thể chỉ truyền lại gói mất hoặc chưa ACK thay vì cả dãy như GBN.",
    "source": "Kurose & Ross — Transport Layer, public teaching materials (UMass)",
    "sourceUrl": "https://gaia.cs.umass.edu/kurose_ross/videos/3/",
    "id": "E07Q07"
  },
  {
    "chapter": "Chương 2",
    "topic": "IPv6",
    "difficulty": "Nhận biết",
    "question": "Header cơ bản IPv6 có độ dài cố định bao nhiêu?",
    "options": [
      "60 byte",
      "8 byte",
      "20 byte",
      "40 byte"
    ],
    "answer": 3,
    "explanation": "Header cơ bản IPv6 dài 40 byte; phần mở rộng nếu có được đặt sau header cơ bản.",
    "source": "IETF RFC 8200 — IPv6 Specification",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc8200.html",
    "id": "E07Q08"
  },
  {
    "chapter": "Chương 2",
    "topic": "DNS",
    "difficulty": "Nhận biết",
    "question": "Bản ghi AAAA dùng để lưu gì?",
    "options": [
      "Địa chỉ IPv6",
      "Khóa VLAN",
      "Tên mail server",
      "Địa chỉ IPv4"
    ],
    "answer": 0,
    "explanation": "AAAA mang địa chỉ IPv6 128 bit; A là bản ghi cho IPv4. Tên miền có thể đồng thời có bản ghi A và AAAA để hỗ trợ hai họ địa chỉ.",
    "source": "IETF RFC 1035 — Domain Names: Implementation and Specification",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc1035.html",
    "id": "E07Q09"
  },
  {
    "chapter": "Chương 2",
    "topic": "RDT",
    "difficulty": "Vận dụng",
    "question": "Receiver nhận gói 0 đúng, giao lên ứng dụng, nhưng ACK mất. Gói 0 được gửi lại. Receiver nên làm gì?",
    "options": [
      "Giao cùng dữ liệu thêm lần nữa bắt buộc",
      "ACK lại, không giao dữ liệu trùng lần nữa",
      "Đổi sang gói 1 mà không ACK",
      "Đóng mọi cổng UDP"
    ],
    "answer": 1,
    "explanation": "Số thứ tự nhận diện bản lặp; xác nhận lại giúp bên gửi tiến lên mà không tạo dữ liệu trùng ở ứng dụng.",
    "source": "Kurose & Ross — Transport Layer, public teaching materials (UMass)",
    "sourceUrl": "https://gaia.cs.umass.edu/kurose_ross/videos/3/",
    "id": "E07Q10"
  },
  {
    "chapter": "Chương 2",
    "topic": "IPv6",
    "difficulty": "Nhận biết",
    "question": "Trường nào trong IPv6 hỗ trợ phân loại lưu lượng và thông báo tắc nghẽn?",
    "options": [
      "Fragment Offset cơ bản",
      "IHL",
      "Traffic Class",
      "Header Checksum"
    ],
    "answer": 2,
    "explanation": "Traffic Class chứa các bit DSCP và ECN; IPv6 không có IHL hay checksum trong header cơ bản.",
    "source": "IETF RFC 8200 — IPv6 Specification",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc8200.html",
    "id": "E07Q11"
  },
  {
    "chapter": "Chương 2",
    "topic": "IPv4",
    "difficulty": "Thông hiểu",
    "question": "MF=0 trong một datagram IPv4 có thể nghĩa là gì?",
    "options": [
      "Luôn phải bỏ packet",
      "Luôn là fragment đầu có phần tiếp",
      "Luôn là TCP ACK",
      "Fragment cuối hoặc datagram không phân mảnh"
    ],
    "answer": 3,
    "explanation": "More Fragments bằng 0 nghĩa không còn fragment sau; cần xem thêm offset để biết đây là bản không phân mảnh hay mảnh cuối.",
    "source": "IETF RFC 791 — Internet Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc791.html",
    "id": "E07Q12"
  },
  {
    "chapter": "Chương 2",
    "topic": "DNS",
    "difficulty": "Nhận biết",
    "question": "Transaction ID trong DNS giúp client làm gì?",
    "options": [
      "Ghép response với query tương ứng",
      "Chọn root bridge",
      "Mã hóa tên miền",
      "Xác định TTL của IP"
    ],
    "answer": 0,
    "explanation": "ID được đưa vào query và phản hồi lại trong response để hỗ trợ đối chiếu yêu cầu đang chờ.",
    "source": "IETF RFC 1035 — Domain Names: Implementation and Specification",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc1035.html",
    "id": "E07Q13"
  },
  {
    "chapter": "Chương 2",
    "topic": "FTP",
    "difficulty": "Vận dụng",
    "question": "FTP passive có mã hóa tên đăng nhập và file theo mặc định không?",
    "options": [
      "Có, vì TCP mã hóa sẵn",
      "Không, passive chỉ thay đổi cách mở kênh dữ liệu",
      "Có, vì không dùng cổng 20",
      "Có, PASV tự bật TLS"
    ],
    "answer": 1,
    "explanation": "Active/passive là cơ chế kết nối, không phải mã hóa. Bảo vệ nội dung cần cơ chế như TLS trong FTPS.",
    "source": "IETF RFC 959 — File Transfer Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc959.html",
    "id": "E07Q14"
  },
  {
    "chapter": "Chương 2",
    "topic": "Go-Back-N",
    "difficulty": "Vận dụng",
    "question": "Quy ước ACK k xác nhận đến hết gói k. GBN base=3 nhận ACK 5 hợp lệ. Base mới là gì?",
    "options": [
      "3",
      "4",
      "6",
      "5"
    ],
    "answer": 2,
    "explanation": "ACK 5 tích lũy xác nhận các gói tới 5, nên gói đầu tiên chưa được xác nhận là 6.",
    "source": "Kurose & Ross — Transport Layer, public teaching materials (UMass)",
    "sourceUrl": "https://gaia.cs.umass.edu/kurose_ross/videos/3/",
    "id": "E07Q15"
  },
  {
    "chapter": "Chương 2",
    "topic": "HTTP",
    "difficulty": "Thông hiểu",
    "question": "Client đã xác thực nhưng không được phép xem tài nguyên. Mã phù hợp nhất?",
    "options": [
      "302",
      "500",
      "200",
      "403"
    ],
    "answer": 3,
    "explanation": "403 biểu thị máy chủ hiểu yêu cầu nhưng từ chối đáp ứng; khác với yêu cầu cung cấp xác thực của 401.",
    "source": "MDN — HTTP reference",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference",
    "id": "E07Q16"
  },
  {
    "chapter": "Chương 2",
    "topic": "TCP",
    "difficulty": "Thông hiểu",
    "question": "URG cho biết trường nào có ý nghĩa?",
    "options": [
      "Urgent Pointer",
      "Fragment Offset",
      "Flow Label",
      "DNS ID"
    ],
    "answer": 0,
    "explanation": "URG đánh dấu thông tin urgent pointer hợp lệ; không đồng nghĩa ưu tiên QoS cho packet trong mạng.",
    "source": "IETF RFC 9293 — Transmission Control Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc9293.html",
    "id": "E07Q17"
  },
  {
    "chapter": "Chương 2",
    "topic": "HTTP",
    "difficulty": "Nhận biết",
    "question": "Mã HTTP 200 thường biểu thị điều gì?",
    "options": [
      "Chưa xác thực",
      "Yêu cầu thành công",
      "Lỗi máy chủ",
      "Chuyển hướng vĩnh viễn"
    ],
    "answer": 1,
    "explanation": "200 thuộc nhóm 2xx thành công; ý nghĩa nội dung phản hồi cụ thể phụ thuộc method.",
    "source": "MDN — HTTP reference",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference",
    "id": "E07Q18"
  },
  {
    "chapter": "Chương 2",
    "topic": "Selective Repeat",
    "difficulty": "Thông hiểu",
    "question": "Vì sao SR phức tạp hơn GBN ở receiver?",
    "options": [
      "Không có số thứ tự",
      "Không dùng checksum",
      "Phải quản lý cửa sổ và buffer ngoài thứ tự",
      "Luôn phải định tuyến IP"
    ],
    "answer": 2,
    "explanation": "SR cần biết gói nào đã có, giữ các gói đến sớm và giao dữ liệu khi phần liên tục được hoàn thành.",
    "source": "Kurose & Ross — Transport Layer, public teaching materials (UMass)",
    "sourceUrl": "https://gaia.cs.umass.edu/kurose_ross/videos/3/",
    "id": "E07Q19"
  },
  {
    "chapter": "Chương 2",
    "topic": "Nén dữ liệu",
    "difficulty": "Vận dụng cao",
    "question": "Một file 1000 byte nén còn payload 920 byte nhưng cần header 100 byte. Hiệu quả lưu trữ thực tế thế nào?",
    "options": [
      "Giảm 80 byte",
      "Không đổi",
      "Giảm 180 byte",
      "Tăng 20 byte"
    ],
    "answer": 3,
    "explanation": "Phải cộng metadata: 920+100=1020 byte. Payload nhỏ hơn chưa bảo đảm tổng file nhỏ hơn.",
    "source": "Carnegie Mellon University — Algorithms in the Real World: Compression",
    "sourceUrl": "https://www.cs.cmu.edu/afs/cs/project/pscico-guyb/realworld/www/slidesF15.html",
    "id": "E07Q20"
  },
  {
    "chapter": "Chương 2",
    "topic": "Mã hóa đường truyền",
    "difficulty": "Vận dụng",
    "question": "NRZ-I quy ước 1 đảo mức. Chuỗi 0000 từ mức ban đầu H tạo dạng nào?",
    "options": [
      "Giữ H suốt bốn bit",
      "Đảo mức đầu mọi bit",
      "Luân phiên H L H L",
      "Chuyển H→L giữa mọi bit"
    ],
    "answer": 0,
    "explanation": "Không có bit 1 nên không xảy ra lần đảo mức nào; đây là trường hợp có thể khó tự đồng bộ.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E07Q21"
  },
  {
    "chapter": "Chương 2",
    "topic": "IPv4",
    "difficulty": "Thông hiểu",
    "question": "Protocol=6 trong IPv4 thường chỉ giao thức nào?",
    "options": [
      "UDP",
      "TCP",
      "ICMP",
      "ARP"
    ],
    "answer": 1,
    "explanation": "Trường Protocol xác định giao thức payload; TCP mang số 6, UDP là 17, ICMPv4 là 1.",
    "source": "IETF RFC 791 — Internet Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc791.html",
    "id": "E07Q22"
  },
  {
    "chapter": "Chương 2",
    "topic": "UDP",
    "difficulty": "Nhận biết",
    "question": "UDP Length bao gồm những phần nào?",
    "options": [
      "Chỉ application data",
      "IPv4 header và UDP header",
      "UDP header và UDP data",
      "Toàn bộ Ethernet frame"
    ],
    "answer": 2,
    "explanation": "Length tính từ đầu UDP header đến hết payload, không gồm header IP hoặc Ethernet.",
    "source": "IETF RFC 768 — User Datagram Protocol; RFC 8200 §8.1 for IPv6",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc768",
    "id": "E07Q23"
  },
  {
    "chapter": "Chương 2",
    "topic": "TCP",
    "difficulty": "Thông hiểu",
    "question": "Server đang chờ yêu cầu TCP thụ động thường ở trạng thái nào?",
    "options": [
      "TIME-WAIT",
      "FIN-WAIT-2",
      "SYN-SENT",
      "LISTEN"
    ],
    "answer": 3,
    "explanation": "LISTEN biểu thị đầu cuối đã mở thụ động và chờ một yêu cầu kết nối phù hợp.",
    "source": "IETF RFC 9293 — Transmission Control Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc9293.html",
    "id": "E07Q24"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Router",
    "difficulty": "Vận dụng cao",
    "question": "Packet TTL=1 đi vào router; có route /32 chính xác. Điều gì xảy ra khi định chuyển tiếp?",
    "options": [
      "Bị loại do TTL hết hạn dù có route",
      "TTL được reset thành 64",
      "Được gửi vì /32 ưu tiên",
      "Router bỏ IP header để né TTL"
    ],
    "answer": 0,
    "explanation": "Có route không vượt qua được kiểm tra TTL. Giảm TTL từ 1 xuống 0 yêu cầu loại packet.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E07Q25"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "VLAN",
    "difficulty": "Thông hiểu",
    "question": "VLAN ID trong tag 802.1Q có độ rộng bao nhiêu bit?",
    "options": [
      "16",
      "12",
      "8",
      "32"
    ],
    "answer": 1,
    "explanation": "Trường VID có 12 bit; không phải mọi giá trị đều dùng làm VLAN người dùng thông thường.",
    "source": "Cisco — VLAN Trunk Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vlan-trunks.html",
    "id": "E07Q26"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Switch",
    "difficulty": "Nhận biết",
    "question": "Mỗi mục bảng MAC thường liên hệ những thông tin nào?",
    "options": [
      "Tên miền, mật khẩu, TTL",
      "Port TCP, HTTP method, status",
      "MAC, VLAN và cổng",
      "IP, sequence, ACK"
    ],
    "answer": 2,
    "explanation": "Bảng chuyển tiếp tầng 2 ánh xạ địa chỉ MAC trong ngữ cảnh VLAN tới cổng tương ứng.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E07Q27"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "NAT",
    "difficulty": "Nhận biết",
    "question": "Dynamic NAT chọn địa chỉ dịch từ đâu?",
    "options": [
      "Danh sách DNS root",
      "TCP receive window",
      "Bảng MAC switch",
      "Một pool địa chỉ được cấu hình"
    ],
    "answer": 3,
    "explanation": "Dynamic NAT cấp ánh xạ từ tập địa chỉ khả dụng khi có nhu cầu, theo chính sách đã cấu hình.",
    "source": "Cisco — Configuring NAT for IP Address Conservation",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipaddr_nat/configuration/15-sy/nat-15-sy-book/iadnat-addr-consv.html",
    "id": "E07Q28"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "VLAN",
    "difficulty": "Thông hiểu",
    "question": "Hai máy ở VLAN 10 và VLAN 20 trên switch L2 thuần. Muốn giao tiếp IP liên VLAN cần gì?",
    "options": [
      "Router hoặc switch có chức năng tầng 3",
      "Chỉ tăng tốc độ cổng",
      "Chỉ đổi DNS server",
      "Chỉ đổi hostname"
    ],
    "answer": 0,
    "explanation": "VLAN tách miền tầng 2; giao tiếp liên VLAN cần định tuyến hoặc chức năng tầng 3 phù hợp.",
    "source": "Cisco — VLAN Trunk Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vlan-trunks.html",
    "id": "E07Q29"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "NAT",
    "difficulty": "Thông hiểu",
    "question": "Trong lệnh Cisco NAT, từ khóa overload thường bật cơ chế nào?",
    "options": [
      "VTP pruning",
      "PAT",
      "DHCP relay",
      "OSPF SPF"
    ],
    "answer": 1,
    "explanation": "overload cho phép nhiều ánh xạ chia sẻ địa chỉ toàn cục bằng các định danh như port TCP/UDP.",
    "source": "Cisco — Configuring NAT for IP Address Conservation",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipaddr_nat/configuration/15-sy/nat-15-sy-book/iadnat-addr-consv.html",
    "id": "E07Q30"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "VTP",
    "difficulty": "Vận dụng",
    "question": "Muốn VLAN cục bộ không bị thay bằng database nhận từ VTP, nhưng vẫn cần trunk. Chế độ nào phù hợp trong các lựa chọn?",
    "options": [
      "Server v2 không kiểm tra revision",
      "Client v2",
      "Transparent",
      "Dynamic auto"
    ],
    "answer": 2,
    "explanation": "Transparent tách việc quản lý VLAN cục bộ khỏi đồng bộ VTP; trunk là chức năng riêng có thể tiếp tục dùng.",
    "source": "Cisco — Configure VTP (version-specific behavior)",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vtp.html",
    "id": "E07Q31"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "DTP",
    "difficulty": "Vận dụng cao",
    "question": "Một bên trunk tĩnh + nonegotiate, bên kia dynamic auto. Vì sao không nên dựa vào auto để có trunk?",
    "options": [
      "nonegotiate mã hóa DTP quá mạnh",
      "Auto luôn hỗ trợ mọi thiết bị",
      "VTP tự bảo đảm hai đầu trunk",
      "Auto có thể không nhận thương lượng cần thiết; nên đặt trunk tĩnh cả hai"
    ],
    "answer": 3,
    "explanation": "Tắt gửi DTP làm phía auto không được kích hoạt như khi nhận thương lượng; cấu hình tĩnh hai đầu tránh phụ thuộc này.",
    "source": "Cisco — VLAN Trunk Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vlan-trunks.html",
    "id": "E07Q32"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "ACL",
    "difficulty": "Nhận biết",
    "question": "Deny trong ACL có nghĩa gì?",
    "options": [
      "Từ chối gói khớp điều kiện",
      "Đổi IP thành DNS",
      "Gửi thêm bản sao",
      "Xóa cấu hình interface"
    ],
    "answer": 0,
    "explanation": "Deny loại lưu lượng được chỉ định theo chính sách; không đồng nghĩa xóa interface hay ứng dụng.",
    "source": "Cisco IOS — IP Access List Overview",
    "sourceUrl": "https://www.cisco.com/en/US/docs/ios-xml/ios/sec_data_acl/configuration/15-1mt/IP_Access_List_Overview.html",
    "id": "E07Q33"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Routing",
    "difficulty": "Thông hiểu",
    "question": "Thuật toán SPF của OSPF thường gắn với thuật toán nào?",
    "options": [
      "RLE",
      "Dijkstra",
      "Huffman",
      "RSA"
    ],
    "answer": 1,
    "explanation": "Dijkstra tìm đường đi có tổng cost nhỏ nhất trong đồ thị trạng thái liên kết.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E07Q34"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "STP",
    "difficulty": "Vận dụng",
    "question": "A và B cùng priority; MAC A=00:00:00:00:00:10, B=00:00:00:00:00:20. Root ưu tiên ai?",
    "options": [
      "Cả hai luôn đồng thời",
      "Không đủ vì thiếu DNS",
      "A",
      "B"
    ],
    "answer": 2,
    "explanation": "Hai phần priority giống nhau nên MAC nhỏ hơn quyết định; giá trị cuối 0x10 nhỏ hơn 0x20.",
    "source": "Cisco — Spanning Tree Protocol Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/stp/stp-configuration-guide/m-stp.html",
    "id": "E07Q35"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Cisco CLI",
    "difficulty": "Vận dụng",
    "question": "Muốn cấu hình line VTY nhưng đang ở (config-if)#. Chuỗi lệnh hợp lý là gì?",
    "options": [
      "switchport mode trunk rồi ping",
      "no shutdown rồi ip address",
      "enable rồi show startup-config",
      "exit rồi line vty 0 4"
    ],
    "answer": 3,
    "explanation": "exit quay về global configuration, sau đó line vty chọn đúng ngữ cảnh quản lý truy cập từ xa.",
    "source": "Cisco IOS — Configuration Fundamentals",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/fundamentals/configuration/xe-16/fundamentals-xe-16-book/cf-cli-basics.html",
    "id": "E07Q36"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Cisco CLI",
    "difficulty": "Thông hiểu",
    "question": "Lệnh end từ một chế độ cấu hình con thường đưa đến đâu?",
    "options": [
      "Privileged EXEC",
      "Một interface khác",
      "ROMMON bắt buộc",
      "User EXEC"
    ],
    "answer": 0,
    "explanation": "end kết thúc ngữ cảnh cấu hình và đưa về dấu nhắc # ở chế độ EXEC đặc quyền.",
    "source": "Cisco IOS — Configuration Fundamentals",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/fundamentals/configuration/xe-16/fundamentals-xe-16-book/cf-cli-basics.html",
    "id": "E07Q37"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Switch",
    "difficulty": "Thông hiểu",
    "question": "Switch biết MAC B ở VLAN 20, nhưng nhận frame tìm B trong VLAN 10. Có dùng ngay mục VLAN 20 không?",
    "options": [
      "Có, vì VLAN chỉ là tên hiển thị",
      "Không, việc tra cứu phải xét VLAN",
      "Có, nếu port TCP là 80",
      "Có, MAC luôn bỏ qua VLAN"
    ],
    "answer": 1,
    "explanation": "Bảng MAC được phân biệt theo VLAN để giữ tách biệt miền chuyển mạch và broadcast.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E07Q38"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Routing",
    "difficulty": "Thông hiểu",
    "question": "Hạn chế của static route thuần khi đường đi đổi mà không có cơ chế theo dõi là gì?",
    "options": [
      "Chỉ hoạt động với IPv6",
      "Tự nhân địa chỉ MAC",
      "Có thể phải sửa cấu hình thủ công",
      "Không bao giờ chọn next hop"
    ],
    "answer": 2,
    "explanation": "Static route không tự học topology như giao thức động; trạng thái tuyến còn tùy interface và khả năng phân giải next hop.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E07Q39"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "ACL",
    "difficulty": "Vận dụng",
    "question": "Wildcard cho mạng 192.168.10.0/26 là gì nếu dùng phần bù subnet mask?",
    "options": [
      "0.0.0.26",
      "0.0.0.255",
      "0.0.0.64",
      "0.0.0.63"
    ],
    "answer": 3,
    "explanation": "Mask /26 là 255.255.255.192. Lấy phần bù từng bit cho wildcard 0.0.0.63.",
    "source": "Cisco IOS — IP Access List Overview",
    "sourceUrl": "https://www.cisco.com/en/US/docs/ios-xml/ios/sec_data_acl/configuration/15-1mt/IP_Access_List_Overview.html",
    "id": "E07Q40"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "DHCP",
    "difficulty": "Thông hiểu",
    "question": "Hai server DHCP cùng gửi Offer cho client trong DORA. Client thường làm gì?",
    "options": [
      "Chọn một đề nghị rồi gửi Request",
      "Tắt NIC vĩnh viễn",
      "Bắt buộc gộp hai IP thành một",
      "Gửi TCP RST cho cả hai"
    ],
    "answer": 0,
    "explanation": "DHCP cho phép client nhận nhiều đề nghị và chọn theo chính sách; không bắt buộc nhận tất cả địa chỉ.",
    "source": "IETF RFC 2131 — Dynamic Host Configuration Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc2131.html",
    "id": "E07Q41"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "STP",
    "difficulty": "Nhận biết",
    "question": "Cổng Forwarding có thể thực hiện chức năng nào?",
    "options": [
      "Chỉ nhận BPDU, không học MAC",
      "Chuyển dữ liệu người dùng và học MAC",
      "Chỉ đóng kết nối TCP",
      "Chỉ tăng revision VTP"
    ],
    "answer": 1,
    "explanation": "Forwarding là trạng thái hoạt động chuyển tiếp dữ liệu bình thường trong topology STP đã chọn.",
    "source": "Cisco — Spanning Tree Protocol Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/stp/stp-configuration-guide/m-stp.html",
    "id": "E07Q42"
  },
  {
    "chapter": "Chương 5",
    "topic": "WLAN",
    "difficulty": "Nhận biết",
    "question": "Chuẩn họ nào gắn với WLAN Wi-Fi?",
    "options": [
      "HTTP/1.1",
      "IEEE 802.3 chỉ có dây",
      "IEEE 802.11",
      "RIP v2"
    ],
    "answer": 2,
    "explanation": "IEEE 802.11 quy định nhiều khía cạnh MAC và vật lý WLAN; Ethernet có dây gắn với 802.3.",
    "source": "Cisco — WLAN Architecture: BSS, IBSS and ESS",
    "sourceUrl": "https://www.cisco.com/E-Learning/bulk/guest/celc/fwl/ch2/2_1_5/content.html",
    "id": "E07Q43"
  },
  {
    "chapter": "Chương 5",
    "topic": "An toàn WLAN",
    "difficulty": "Thông hiểu",
    "question": "Evil twin AP thường mô tả điều gì?",
    "options": [
      "Switch có hai nguồn điện",
      "Hai radio hợp lệ trong một AP",
      "AP dự phòng được quản trị phê duyệt",
      "AP giả mạo mạng đáng tin để thu hút client"
    ],
    "answer": 3,
    "explanation": "Điểm truy nhập giả có thể bắt chước tên mạng và tạo vị trí trung gian; cần kiểm chứng danh tính và chính sách kết nối.",
    "source": "NIST SP 800-153 — Guidelines for Securing WLANs",
    "sourceUrl": "https://csrc.nist.gov/pubs/sp/800/153/final",
    "id": "E07Q44"
  },
  {
    "chapter": "Chương 5",
    "topic": "Windows",
    "difficulty": "Vận dụng",
    "question": "Truy cập IP được, truy cập tên miền không được. Lệnh nào kiểm tra trực tiếp phần nghi ngờ?",
    "options": [
      "nslookup tên-miền",
      "netsh wlan show drivers",
      "show vlan brief",
      "arp -a chỉ một mình"
    ],
    "answer": 0,
    "explanation": "Tình huống gợi ý vấn đề phân giải tên; nslookup kiểm tra phản hồi DNS cho tên cần dùng.",
    "source": "Microsoft Learn — Windows networking commands",
    "sourceUrl": "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands",
    "id": "E07Q45"
  },
  {
    "chapter": "Chương 5",
    "topic": "An toàn WLAN",
    "difficulty": "Thông hiểu",
    "question": "Phân tách mạng khách khỏi mạng nội bộ giúp mục tiêu nào?",
    "options": [
      "Tăng độ dài khóa TCP",
      "Giới hạn phạm vi truy cập của thiết bị không tin cậy",
      "Ngăn mọi nhiễu vô tuyến",
      "Loại bỏ nhu cầu xác thực"
    ],
    "answer": 1,
    "explanation": "Phân vùng và chính sách firewall giảm khả năng truy cập tài nguyên nội bộ, nhưng không tự giải quyết mọi rủi ro radio.",
    "source": "NIST SP 800-153 — Guidelines for Securing WLANs",
    "sourceUrl": "https://csrc.nist.gov/pubs/sp/800/153/final",
    "id": "E07Q46"
  },
  {
    "chapter": "Chương 5",
    "topic": "Windows",
    "difficulty": "Vận dụng",
    "question": "Muốn kiểm tra adapter hỗ trợ các chuẩn radio nào trước khi xử lý tương thích AP, chọn lệnh nào?",
    "options": [
      "arp -a",
      "nslookup localhost",
      "netsh wlan show drivers",
      "ipconfig /release"
    ],
    "answer": 2,
    "explanation": "show drivers cung cấp khả năng mà driver báo cáo; thông tin giúp kiểm tra giới hạn thiết bị và chế độ radio.",
    "source": "Microsoft Learn — Windows networking commands",
    "sourceUrl": "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands",
    "id": "E07Q47"
  },
  {
    "chapter": "Chương 5",
    "topic": "WLAN",
    "difficulty": "Vận dụng cao",
    "question": "Client chuyển AP cùng SSID nhưng mất phiên do bị đưa sang subnet khác, không có hỗ trợ mobility tầng 3. Nguyên nhân hợp lý?",
    "options": [
      "SSID tự định tuyến mọi subnet",
      "TCP không thể chạy trên WLAN",
      "BSSID bắt buộc giống nhau",
      "Tên SSID giống nhau không bảo đảm duy trì IP và phiên"
    ],
    "answer": 3,
    "explanation": "Roaming và duy trì phiên phụ thuộc thiết kế IP/mobility; cùng tên mạng không đủ để giữ địa chỉ và kết nối đầu cuối.",
    "source": "Cisco — WLAN Architecture: BSS, IBSS and ESS",
    "sourceUrl": "https://www.cisco.com/E-Learning/bulk/guest/celc/fwl/ch2/2_1_5/content.html",
    "id": "E07Q48"
  },
  {
    "chapter": "Chương 5",
    "topic": "GSM",
    "difficulty": "Nhận biết",
    "question": "VLR lưu thông tin thuê bao theo phạm vi nào?",
    "options": [
      "Thuê bao đang ở vùng phục vụ của nó",
      "Chỉ các router OSPF",
      "Mọi DNS record công cộng",
      "Chỉ các AP Wi-Fi lân cận"
    ],
    "answer": 0,
    "explanation": "Visitor Location Register giữ thông tin tạm cần thiết để phục vụ thuê bao trong vùng MSC/VLR tương ứng.",
    "source": "ETSI GSM 03.02 — Network Architecture",
    "sourceUrl": "https://www.etsi.org/deliver/etsi_gts/03/0302/05.01.00_60/gsmts_0302v050100p.pdf",
    "id": "E07Q49"
  },
  {
    "chapter": "Chương 5",
    "topic": "WLAN",
    "difficulty": "Nhận biết",
    "question": "ESS được hình thành từ cấu trúc nào?",
    "options": [
      "Nhiều TCP segment nối nhau",
      "Nhiều BSS được liên kết qua distribution system",
      "Một DHCP lease duy nhất",
      "Một cáp bus không AP"
    ],
    "answer": 1,
    "explanation": "Extended Service Set liên kết các BSS qua hệ phân phối, mở rộng vùng dịch vụ WLAN.",
    "source": "Cisco — WLAN Architecture: BSS, IBSS and ESS",
    "sourceUrl": "https://www.cisco.com/E-Learning/bulk/guest/celc/fwl/ch2/2_1_5/content.html",
    "id": "E07Q50"
  }
];
