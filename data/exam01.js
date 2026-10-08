/* Tự biên soạn; xem tools/chapter*.txt và README.md. */
globalThis.EXAMS ||= {};
globalThis.EXAMS["01"] = [
  {
    "chapter": "Chương 1",
    "topic": "OSI",
    "difficulty": "Thông hiểu",
    "question": "Giao thức ngang hàng của một tầng mô tả quan hệ nào?",
    "options": [
      "Quy tắc trao đổi giữa thực thể cùng tầng ở hai đầu",
      "Dây cáp nối hai ứng dụng",
      "Cách người dùng đặt mật khẩu",
      "Chỉ quan hệ giữa hai tầng kề trên cùng máy"
    ],
    "answer": 0,
    "explanation": "Quan hệ logic ngang tầng dùng giao thức; các tầng kề nhau trên một máy tương tác qua dịch vụ.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E01Q01"
  },
  {
    "chapter": "Chương 1",
    "topic": "Topology",
    "difficulty": "Nhận biết",
    "question": "Topology nào nối các máy vào một thiết bị trung tâm?",
    "options": [
      "Bus",
      "Star",
      "Full mesh",
      "Ring"
    ],
    "answer": 1,
    "explanation": "Star tập trung các liên kết tại hub hoặc switch; mỗi máy có đường nối riêng đến trung tâm.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E01Q02"
  },
  {
    "chapter": "Chương 1",
    "topic": "Topology",
    "difficulty": "Thông hiểu",
    "question": "Một chi nhánh cần ít cáp, chấp nhận không có đường dự phòng giữa các switch. So với full mesh, cây có lợi gì?",
    "options": [
      "Không cần switch",
      "Không có điểm lỗi nào",
      "Ít liên kết hơn để kết nối mọi nút",
      "Luôn chịu mọi lỗi liên kết"
    ],
    "answer": 2,
    "explanation": "Cây n nút chỉ cần n−1 cạnh, đổi lại không có đường thay thế nếu một cạnh bị hỏng.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E01Q03"
  },
  {
    "chapter": "Chương 1",
    "topic": "Repeater",
    "difficulty": "Nhận biết",
    "question": "Chức năng chính của repeater số là gì?",
    "options": [
      "Chọn tuyến IP",
      "Cấp port cho ứng dụng",
      "Mã hóa nội dung HTTP",
      "Tái tạo tín hiệu bị suy hao"
    ],
    "answer": 3,
    "explanation": "Repeater khôi phục và phát lại tín hiệu để mở rộng đoạn truyền trong giới hạn công nghệ.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E01Q04"
  },
  {
    "chapter": "Chương 1",
    "topic": "OSI",
    "difficulty": "Thông hiểu",
    "question": "UDP PDU thường được gọi là datagram. Điều này cho thấy gì?",
    "options": [
      "Tên PDU có thể khác theo giao thức cùng tầng",
      "UDP thuộc tầng vật lý",
      "Mọi datagram đều là Ethernet",
      "UDP không có header"
    ],
    "answer": 0,
    "explanation": "TCP segment và UDP datagram đều ở tầng vận chuyển, nhưng dùng tên gọi và dịch vụ khác nhau.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E01Q05"
  },
  {
    "chapter": "Chương 1",
    "topic": "OSI",
    "difficulty": "Vận dụng",
    "question": "Qua router Ethernet, thành phần nào thường đổi ở mỗi chặng?",
    "options": [
      "Toàn bộ nội dung ứng dụng",
      "Header tầng liên kết",
      "Địa chỉ IP đích nếu không NAT",
      "Port máy chủ HTTP"
    ],
    "answer": 1,
    "explanation": "Router gỡ frame vào và tạo frame mới cho liên kết ra. IP đích được giữ khi không có dịch địa chỉ.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E01Q06"
  },
  {
    "chapter": "Chương 2",
    "topic": "IPv4",
    "difficulty": "Thông hiểu",
    "question": "DSCP trong IPv4 được dùng chủ yếu cho mục đích gì?",
    "options": [
      "Mã hóa toàn bộ payload",
      "Chọn port TCP",
      "Phân loại lưu lượng phục vụ QoS",
      "Đánh số fragment"
    ],
    "answer": 2,
    "explanation": "DSCP đánh dấu lớp dịch vụ để thiết bị áp dụng chính sách xử lý; không tự bảo đảm chất lượng tuyệt đối.",
    "source": "IETF RFC 791 — Internet Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc791.html",
    "id": "E01Q07"
  },
  {
    "chapter": "Chương 2",
    "topic": "HTTP",
    "difficulty": "Thông hiểu",
    "question": "Phân biệt 500 và 503 thế nào?",
    "options": [
      "500 thành công; 503 chuyển hướng",
      "500 lỗi DNS; 503 lỗi MAC",
      "500 chỉ cho GET; 503 chỉ cho POST",
      "500 lỗi nội bộ chung; 503 dịch vụ tạm không sẵn sàng"
    ],
    "answer": 3,
    "explanation": "503 thường liên quan quá tải hoặc bảo trì tạm thời, còn 500 là tình trạng bất ngờ phía máy chủ.",
    "source": "MDN — HTTP reference",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference",
    "id": "E01Q08"
  },
  {
    "chapter": "Chương 2",
    "topic": "DNS",
    "difficulty": "Vận dụng",
    "question": "DNS response có ID trùng nhưng question khác query đang chờ. Có nên chỉ dựa vào ID để chấp nhận?",
    "options": [
      "Không, cần đối chiếu thêm câu hỏi và ngữ cảnh giao dịch",
      "Có, mọi response cổng 53 đều đáng tin",
      "Có, vì UDP bảo đảm xác thực",
      "Có, ID luôn duy nhất toàn Internet"
    ],
    "answer": 0,
    "explanation": "ID không đủ bảo đảm tính đúng đắn hay xác thực; kiểm tra câu hỏi và thông tin đầu cuối giúp tránh ghép nhầm.",
    "source": "IETF RFC 1035 — Domain Names: Implementation and Specification",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc1035.html",
    "id": "E01Q09"
  },
  {
    "chapter": "Chương 2",
    "topic": "Nén dữ liệu",
    "difficulty": "Nhận biết",
    "question": "Nén lossy đánh đổi chủ yếu điều gì?",
    "options": [
      "Tốc độ clock để tăng TTL",
      "Một phần độ chính xác để giảm dữ liệu",
      "Địa chỉ IP để lấy port",
      "Toàn bộ khả năng giải mã"
    ],
    "answer": 1,
    "explanation": "Lossy loại bớt thông tin, thường dựa trên đặc tính cảm nhận, nên không khôi phục chính xác mọi chi tiết gốc.",
    "source": "Carnegie Mellon University — Algorithms in the Real World: Compression",
    "sourceUrl": "https://www.cs.cmu.edu/afs/cs/project/pscico-guyb/realworld/www/slidesF15.html",
    "id": "E01Q10"
  },
  {
    "chapter": "Chương 2",
    "topic": "TCP",
    "difficulty": "Vận dụng",
    "question": "Client gửi SYN với SEQ=1000, không dữ liệu. ACK của SYN-ACK tương ứng là bao nhiêu?",
    "options": [
      "1000",
      "2000",
      "1001",
      "999"
    ],
    "answer": 2,
    "explanation": "SYN chiếm một vị trí trong không gian sequence number, nên byte tiếp theo được mong đợi là 1001.",
    "source": "IETF RFC 9293 — Transmission Control Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc9293.html",
    "id": "E01Q11"
  },
  {
    "chapter": "Chương 2",
    "topic": "Go-Back-N",
    "difficulty": "Vận dụng",
    "question": "GBN dùng số thứ tự 3 bit. Cửa sổ gửi tối đa là bao nhiêu?",
    "options": [
      "4",
      "3",
      "8",
      "7"
    ],
    "answer": 3,
    "explanation": "Không gian số là 8 giá trị; GBN chuẩn cho phép cửa sổ tối đa 8−1=7.",
    "source": "Kurose & Ross — Transport Layer, public teaching materials (UMass)",
    "sourceUrl": "https://gaia.cs.umass.edu/kurose_ross/videos/3/",
    "id": "E01Q12"
  },
  {
    "chapter": "Chương 2",
    "topic": "FTP",
    "difficulty": "Thông hiểu",
    "question": "Đăng nhập FTP được nhưng passive không truyền file; firewall server chỉ mở TCP 21. Nguyên nhân hợp lý?",
    "options": [
      "Chưa mở dải cổng dữ liệu passive",
      "DNS bắt buộc chuyển sang UDP 20",
      "TCP 21 không thể đăng nhập",
      "Client thiếu cờ FIN"
    ],
    "answer": 0,
    "explanation": "Kênh điều khiển hoạt động không chứng minh kênh dữ liệu thông; passive cần cho phép các cổng dữ liệu đã cấu hình.",
    "source": "IETF RFC 959 — File Transfer Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc959.html",
    "id": "E01Q13"
  },
  {
    "chapter": "Chương 2",
    "topic": "HTTP",
    "difficulty": "Nhận biết",
    "question": "Mã 301 khác 302 chủ yếu ở đặc tính nào?",
    "options": [
      "301 chỉ DNS, 302 chỉ FTP",
      "301 là chuyển hướng vĩnh viễn, 302 là tạm thời",
      "301 lỗi client, 302 lỗi server",
      "301 không có header, 302 có header"
    ],
    "answer": 1,
    "explanation": "301 mô tả URI đã chuyển vĩnh viễn, trong khi 302 chỉ vị trí tạm thời.",
    "source": "MDN — HTTP reference",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference",
    "id": "E01Q14"
  },
  {
    "chapter": "Chương 2",
    "topic": "Nén dữ liệu",
    "difficulty": "Thông hiểu",
    "question": "Loại nén nào thích hợp cho mã nguồn cần phục hồi nguyên vẹn?",
    "options": [
      "Lossy ảnh",
      "Bỏ ngẫu nhiên ký tự",
      "Lossless",
      "Lossy âm thanh"
    ],
    "answer": 2,
    "explanation": "Một ký tự thay đổi có thể làm chương trình sai; mã nguồn cần nén không mất dữ liệu.",
    "source": "Carnegie Mellon University — Algorithms in the Real World: Compression",
    "sourceUrl": "https://www.cs.cmu.edu/afs/cs/project/pscico-guyb/realworld/www/slidesF15.html",
    "id": "E01Q15"
  },
  {
    "chapter": "Chương 2",
    "topic": "TCP",
    "difficulty": "Thông hiểu",
    "question": "Acknowledgment Number của TCP thông thường biểu thị gì?",
    "options": [
      "Độ dài header IP",
      "Số thứ tự packet cuối cùng đã gửi",
      "Tổng số segment mất",
      "Số thứ tự byte kế tiếp mong đợi"
    ],
    "answer": 3,
    "explanation": "TCP dùng ACK tích lũy theo byte; ACK=n xác nhận đã nhận liên tục các byte trước n.",
    "source": "IETF RFC 9293 — Transmission Control Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc9293.html",
    "id": "E01Q16"
  },
  {
    "chapter": "Chương 2",
    "topic": "UDP",
    "difficulty": "Nhận biết",
    "question": "Trường nào có trong UDP header?",
    "options": [
      "Length",
      "Window Size",
      "Acknowledgment Number",
      "Sequence Number"
    ],
    "answer": 0,
    "explanation": "UDP Length cho biết tổng độ dài UDP datagram; UDP không có sequence, ACK hay window như TCP.",
    "source": "IETF RFC 768 — User Datagram Protocol; RFC 8200 §8.1 for IPv6",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc768",
    "id": "E01Q17"
  },
  {
    "chapter": "Chương 2",
    "topic": "Mã hóa đường truyền",
    "difficulty": "Vận dụng cao",
    "question": "Manchester 1=LH, 0=HL; tín hiệu từng nửa bit là LH HL HL LH. Dữ liệu là gì?",
    "options": [
      "1010",
      "1001",
      "0110",
      "1100"
    ],
    "answer": 1,
    "explanation": "Chia đúng từng cặp nửa bit: LH→1, HL→0, HL→0, LH→1. Không giải mã theo từng mức riêng lẻ.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E01Q18"
  },
  {
    "chapter": "Chương 2",
    "topic": "IPv4",
    "difficulty": "Thông hiểu",
    "question": "DF=1 có ý nghĩa gì?",
    "options": [
      "Phải phân mảnh ở mọi router",
      "TTL đã bằng 0",
      "Không được phân mảnh datagram",
      "Đây là fragment cuối"
    ],
    "answer": 2,
    "explanation": "Don't Fragment cấm phân mảnh; packet quá lớn cho liên kết ra có thể bị loại và báo lỗi ICMP thích hợp.",
    "source": "IETF RFC 791 — Internet Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc791.html",
    "id": "E01Q19"
  },
  {
    "chapter": "Chương 2",
    "topic": "DNS",
    "difficulty": "Thông hiểu",
    "question": "Client nhận DNS response có TC=1 qua UDP. Cách xử lý thông thường là gì?",
    "options": [
      "Giảm IP TTL về 0",
      "Coi mọi bản ghi là sai vĩnh viễn",
      "Chuyển cổng đích sang 21",
      "Thử lại qua TCP để nhận đầy đủ"
    ],
    "answer": 3,
    "explanation": "TC báo thông điệp bị cắt ngắn; dùng TCP là cách truyền thống để lấy phản hồi đầy đủ.",
    "source": "IETF RFC 1035 — Domain Names: Implementation and Specification",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc1035.html",
    "id": "E01Q20"
  },
  {
    "chapter": "Chương 2",
    "topic": "RDT",
    "difficulty": "Thông hiểu",
    "question": "Hạn chế quan trọng của RDT 2.0 cơ bản là gì?",
    "options": [
      "Chưa xử lý thỏa đáng ACK/NAK bị lỗi",
      "Không có bên gửi",
      "Bắt buộc dùng IPv6",
      "Không phát hiện được bất kỳ lỗi dữ liệu nào"
    ],
    "answer": 0,
    "explanation": "Nếu phản hồi bị hỏng, bên gửi không biết dữ liệu trước đã được nhận đúng hay chưa.",
    "source": "Kurose & Ross — Transport Layer, public teaching materials (UMass)",
    "sourceUrl": "https://gaia.cs.umass.edu/kurose_ross/videos/3/",
    "id": "E01Q21"
  },
  {
    "chapter": "Chương 2",
    "topic": "IPv6",
    "difficulty": "Vận dụng cao",
    "question": "IPv6 có Payload Length=100, extension header 8 byte, UDP header 8 byte. Dữ liệu ứng dụng dài bao nhiêu?",
    "options": [
      "100 byte",
      "84 byte",
      "92 byte",
      "44 byte"
    ],
    "answer": 1,
    "explanation": "Payload Length gồm extension và UDP header, nên ứng dụng còn 100−8−8=84 byte; không trừ header cơ bản lần nữa.",
    "source": "IETF RFC 8200 — IPv6 Specification",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc8200.html",
    "id": "E01Q22"
  },
  {
    "chapter": "Chương 2",
    "topic": "Go-Back-N",
    "difficulty": "Nhận biết",
    "question": "GBN chuẩn thường đặt timer cho gói nào?",
    "options": [
      "Mọi gói đã nhận đúng ở receiver",
      "Chỉ gói cuối file",
      "Gói chưa ACK cũ nhất",
      "Một gói ngẫu nhiên"
    ],
    "answer": 2,
    "explanation": "Timer cho gói outstanding sớm nhất đủ để kích hoạt truyền lại dãy còn chờ khi timeout.",
    "source": "Kurose & Ross — Transport Layer, public teaching materials (UMass)",
    "sourceUrl": "https://gaia.cs.umass.edu/kurose_ross/videos/3/",
    "id": "E01Q23"
  },
  {
    "chapter": "Chương 2",
    "topic": "Selective Repeat",
    "difficulty": "Vận dụng",
    "question": "SR gửi 1–4, chỉ gói 2 mất; 1,3,4 đã ACK. Timeout gói 2 cần gửi lại gì?",
    "options": [
      "2,3,4",
      "Chỉ 4",
      "1,2,3,4",
      "Chỉ 2"
    ],
    "answer": 3,
    "explanation": "Các gói 3,4 đã được receiver lưu và xác nhận, nên chỉ gói 2 chưa ACK cần truyền lại.",
    "source": "Kurose & Ross — Transport Layer, public teaching materials (UMass)",
    "sourceUrl": "https://gaia.cs.umass.edu/kurose_ross/videos/3/",
    "id": "E01Q24"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "ACL",
    "difficulty": "Vận dụng",
    "question": "ACL chỉ có một dòng permit nguồn 10.0.0.0/8. Nguồn 192.168.1.1 đi qua ACL này thế nào?",
    "options": [
      "Bị implicit deny",
      "Được chuyển sang 10.0.0.1",
      "Chỉ bị giảm tốc",
      "Được permit vì private IP"
    ],
    "answer": 0,
    "explanation": "192.168.1.1 không khớp dòng permit và sẽ gặp deny ngầm, bất kể nó thuộc không gian địa chỉ private.",
    "source": "Cisco IOS — IP Access List Overview",
    "sourceUrl": "https://www.cisco.com/en/US/docs/ios-xml/ios/sec_data_acl/configuration/15-1mt/IP_Access_List_Overview.html",
    "id": "E01Q25"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "DTP",
    "difficulty": "Thông hiểu",
    "question": "DTP khác VTP ở nhiệm vụ nào?",
    "options": [
      "DTP cấp IP; VTP cấp MAC",
      "DTP thương lượng trunk; VTP phân phối thông tin VLAN",
      "DTP chạy OSPF; VTP chạy RIP",
      "Hai giao thức có cùng nhiệm vụ"
    ],
    "answer": 1,
    "explanation": "Tên gần giống nhưng một giao thức quyết định trạng thái liên kết trunk, giao thức kia đồng bộ cơ sở dữ liệu VLAN.",
    "source": "Cisco — VLAN Trunk Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vlan-trunks.html",
    "id": "E01Q26"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "VLAN",
    "difficulty": "Nhận biết",
    "question": "Lệnh switchport mode trunk yêu cầu trạng thái gì?",
    "options": [
      "Bật DHCP relay",
      "Cổng chỉ mang một VLAN access",
      "Cổng hoạt động ở chế độ trunk tĩnh",
      "Tắt hoàn toàn cổng"
    ],
    "answer": 2,
    "explanation": "Lệnh đặt chế độ trunk cho cổng hỗ trợ switching; danh sách VLAN và cấu hình đầu kia vẫn cần tương thích.",
    "source": "Cisco — VLAN Trunk Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vlan-trunks.html",
    "id": "E01Q27"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "STP",
    "difficulty": "Thông hiểu",
    "question": "Vì sao TTL của IPv4 không giải quyết hoàn toàn loop Ethernet giữa switch L2?",
    "options": [
      "IP TTL luôn tăng",
      "STP chỉ dành cho TCP",
      "Mọi frame Ethernet đều không chứa IP",
      "Switch L2 không giảm IP TTL khi chuyển frame"
    ],
    "answer": 3,
    "explanation": "Loop ở tầng liên kết có thể quay vòng frame mà không đi qua bước giảm TTL của router.",
    "source": "Cisco — Spanning Tree Protocol Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/stp/stp-configuration-guide/m-stp.html",
    "id": "E01Q28"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Router",
    "difficulty": "Nhận biết",
    "question": "Router chọn đường chuyển tiếp thông thường dựa chủ yếu trên gì?",
    "options": [
      "Địa chỉ IP đích",
      "Tên VLAN",
      "HTTP body",
      "MAC nguồn người dùng"
    ],
    "answer": 0,
    "explanation": "Router tra bảng định tuyến theo địa chỉ mạng đích, thường áp dụng longest prefix match.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E01Q29"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Cisco CLI",
    "difficulty": "Vận dụng",
    "question": "Trong Router(config-if)#, lệnh nào gán 192.168.1.1/24 trên interface định tuyến IPv4?",
    "options": [
      "switchport access vlan 24",
      "ip address 192.168.1.1 255.255.255.0",
      "ip address 192.168.1.1 0.0.0.255",
      "ip route 192.168.1.1 255.255.255.0"
    ],
    "answer": 1,
    "explanation": "Lệnh ip address dùng subnet mask, không dùng wildcard mask của ACL.",
    "source": "Cisco IOS — Configuration Fundamentals",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/fundamentals/configuration/xe-16/fundamentals-xe-16-book/cf-cli-basics.html",
    "id": "E01Q30"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "VTP",
    "difficulty": "Thông hiểu",
    "question": "Hai switch khác VTP domain không đồng bộ VLAN. Bước kiểm tra hợp lý?",
    "options": [
      "Tăng TCP Window",
      "Đổi TTL thành 255",
      "Đối chiếu domain, phiên bản, xác thực và trunk",
      "Xóa mọi DNS record"
    ],
    "answer": 2,
    "explanation": "Đồng bộ phụ thuộc miền và các điều kiện giao thức phù hợp; việc trùng VLAN ID đơn lẻ chưa đủ.",
    "source": "Cisco — Configure VTP (version-specific behavior)",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vtp.html",
    "id": "E01Q31"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Router",
    "difficulty": "Thông hiểu",
    "question": "Không có route khớp và không có default route. Router thường làm gì?",
    "options": [
      "Tự giảm subnet mask của host",
      "Flood tất cả cổng như switch",
      "Tự tạo route chính xác",
      "Loại packet, có thể báo ICMP unreachable"
    ],
    "answer": 3,
    "explanation": "Router không có hướng chuyển tiếp hợp lệ nên không thể giao packet; ICMP có thể báo lỗi nếu chính sách cho phép.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E01Q32"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Cisco CLI",
    "difficulty": "Nhận biết",
    "question": "Lệnh nào lưu cấu hình hiện tại để dùng sau khởi động?",
    "options": [
      "copy running-config startup-config",
      "show running-config",
      "copy startup-config running-config",
      "erase startup-config"
    ],
    "answer": 0,
    "explanation": "Sao chép running sang startup lưu các thay đổi đang chạy; chiều ngược không phải thao tác lưu hiện tại.",
    "source": "Cisco IOS — Configuration Fundamentals",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/fundamentals/configuration/xe-16/fundamentals-xe-16-book/cf-cli-basics.html",
    "id": "E01Q33"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "NAT",
    "difficulty": "Thông hiểu",
    "question": "Inside global biểu thị điều gì?",
    "options": [
      "MAC host nội bộ",
      "Địa chỉ đại diện host nội bộ ở phía ngoài",
      "Port nguồn trước NAT",
      "Địa chỉ loopback bất kỳ"
    ],
    "answer": 1,
    "explanation": "Inside global là địa chỉ dùng để biểu diễn host bên trong ra mạng ngoài trong quá trình dịch.",
    "source": "Cisco — Configuring NAT for IP Address Conservation",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipaddr_nat/configuration/15-sy/nat-15-sy-book/iadnat-addr-consv.html",
    "id": "E01Q34"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "NAT",
    "difficulty": "Vận dụng cao",
    "question": "PAT: hai phiên TCP cùng IP/port đích, cùng port nguồn nội bộ nhưng khác IP nội bộ. Router cần làm gì ở phía ngoài?",
    "options": [
      "Xóa TCP header",
      "Giữ mọi trường giống nhau rồi đoán phiên",
      "Cấp ánh xạ port nguồn khác nhau khi chung IP toàn cục",
      "Đổi IP đích thành MAC"
    ],
    "answer": 2,
    "explanation": "Để các phiên không trùng định danh phía ngoài, PAT phải tạo tổ hợp dịch phân biệt và lưu bảng ánh xạ chiều về.",
    "source": "Cisco — Configuring NAT for IP Address Conservation",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipaddr_nat/configuration/15-sy/nat-15-sy-book/iadnat-addr-consv.html",
    "id": "E01Q35"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "STP",
    "difficulty": "Vận dụng",
    "question": "Tắt một đường bị STP chặn nhưng đường chính vẫn tốt. Vì sao mạng có thể vẫn hoạt động?",
    "options": [
      "Mọi frame tự chuyển sang Internet",
      "STP tạo cáp ảo thay thế",
      "VLAN tự đổi để sửa lỗi",
      "Đường đó vốn không chuyển dữ liệu, nhưng mất một khả năng dự phòng"
    ],
    "answer": 3,
    "explanation": "Liên kết bị chặn không thuộc cây forwarding hiện tại; mất nó giảm dự phòng dù chưa làm gián đoạn đường chính.",
    "source": "Cisco — Spanning Tree Protocol Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/stp/stp-configuration-guide/m-stp.html",
    "id": "E01Q36"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Routing",
    "difficulty": "Nhận biết",
    "question": "Trong RIP, hop count 16 biểu thị điều gì?",
    "options": [
      "Không thể tới",
      "Cần chuyển sang TCP",
      "Mạng trực tiếp",
      "Đường tốt nhất"
    ],
    "answer": 0,
    "explanation": "RIP giới hạn đường khả dụng đến 15 hop và dùng 16 như giá trị vô cực.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E01Q37"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "VLAN",
    "difficulty": "Vận dụng",
    "question": "Hai đầu trunk có native VLAN khác nhau. Nguy cơ trực tiếp là gì?",
    "options": [
      "DHCP tự sửa được mọi trường hợp",
      "Frame untagged bị gán vào VLAN khác nhau ở hai đầu",
      "Địa chỉ IP dài hơn",
      "TCP luôn đổi thành UDP"
    ],
    "answer": 1,
    "explanation": "Untagged frame không mang VLAN ID, nên hai đầu dựa vào cấu hình native khác nhau sẽ hiểu khác miền VLAN.",
    "source": "Cisco — VLAN Trunk Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vlan-trunks.html",
    "id": "E01Q38"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "DHCP",
    "difficulty": "Nhận biết",
    "question": "DHCP Offer chứa ý nghĩa gì?",
    "options": [
      "Switch công bố VLAN native",
      "Client xác nhận mọi lease",
      "Server đề nghị cấu hình địa chỉ cho client",
      "Router thông báo TTL hết"
    ],
    "answer": 2,
    "explanation": "Offer là đề nghị từ server; quá trình cấp phát thông thường tiếp tục bằng Request và ACK.",
    "source": "IETF RFC 2131 — Dynamic Host Configuration Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc2131.html",
    "id": "E01Q39"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Routing",
    "difficulty": "Thông hiểu",
    "question": "Ưu điểm chính của dynamic routing khi topology thay đổi là gì?",
    "options": [
      "Loại bỏ mọi loop tức thì",
      "Không cần tài nguyên thiết bị",
      "Không cần cấu hình ban đầu",
      "Có thể cập nhật đường đi theo giao thức"
    ],
    "answer": 3,
    "explanation": "Giao thức trao đổi thông tin và hội tụ lại đường đi; vẫn cần cấu hình và thời gian xử lý.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E01Q40"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Switch",
    "difficulty": "Thông hiểu",
    "question": "Store-and-forward khác cut-through chủ yếu ở bước nào?",
    "options": [
      "Nhận đủ frame và kiểm tra FCS trước khi chuyển",
      "Không cần MAC đích",
      "Không có buffer",
      "Luôn dùng IP routing"
    ],
    "answer": 0,
    "explanation": "Store-and-forward có cơ hội kiểm tra toàn frame; cut-through có thể bắt đầu chuyển trước khi nhận đủ frame.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E01Q41"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "ACL",
    "difficulty": "Vận dụng",
    "question": "ACL có “deny host 10.0.0.5” trước “permit any”. Gói nguồn 10.0.0.5 có kết quả gì?",
    "options": [
      "Được permit do dòng cuối",
      "Bị deny",
      "Chỉ bị đổi port",
      "Được chia đôi"
    ],
    "answer": 1,
    "explanation": "Dòng deny đầu tiên đã khớp nên xử lý dừng; permit any sau đó không ghi đè.",
    "source": "Cisco IOS — IP Access List Overview",
    "sourceUrl": "https://www.cisco.com/en/US/docs/ios-xml/ios/sec_data_acl/configuration/15-1mt/IP_Access_List_Overview.html",
    "id": "E01Q42"
  },
  {
    "chapter": "Chương 5",
    "topic": "Windows",
    "difficulty": "Nhận biết",
    "question": "ping thường kiểm tra kết nối bằng loại thông điệp nào?",
    "options": [
      "DHCP Offer",
      "FTP PASV",
      "ICMP Echo",
      "HTTP POST"
    ],
    "answer": 2,
    "explanation": "ping gửi Echo Request và chờ Echo Reply; kết quả phụ thuộc đường truyền và chính sách ICMP.",
    "source": "Microsoft Learn — Windows networking commands",
    "sourceUrl": "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands",
    "id": "E01Q43"
  },
  {
    "chapter": "Chương 5",
    "topic": "An toàn WLAN",
    "difficulty": "Thông hiểu",
    "question": "Lạm dụng CSMA/CA có thể ảnh hưởng WLAN bằng nguyên lý nào?",
    "options": [
      "Đổi mọi IPv4 thành IPv6",
      "Tự cấp IP công cộng",
      "Tự nén payload",
      "Chiếm hoặc gây tranh chấp thời gian truy nhập kênh"
    ],
    "answer": 3,
    "explanation": "WLAN chia sẻ airtime; hành vi làm kênh bận hoặc khai thác cơ chế chờ có thể giảm cơ hội truyền của người dùng hợp lệ.",
    "source": "NIST SP 800-153 — Guidelines for Securing WLANs",
    "sourceUrl": "https://csrc.nist.gov/pubs/sp/800/153/final",
    "id": "E01Q44"
  },
  {
    "chapter": "Chương 5",
    "topic": "GSM",
    "difficulty": "Nhận biết",
    "question": "BSC có trách nhiệm chính nào?",
    "options": [
      "Điều khiển các BTS và tài nguyên vô tuyến liên quan",
      "Cấp DHCP cho Internet",
      "Làm access point Wi-Fi",
      "Nén mọi cuộc gọi bằng RLE"
    ],
    "answer": 0,
    "explanation": "Base Station Controller quản lý nhiều BTS và các hoạt động tài nguyên radio trong phân hệ trạm gốc.",
    "source": "ETSI GSM 03.02 — Network Architecture",
    "sourceUrl": "https://www.etsi.org/deliver/etsi_gts/03/0302/05.01.00_60/gsmts_0302v050100p.pdf",
    "id": "E01Q45"
  },
  {
    "chapter": "Chương 5",
    "topic": "WLAN",
    "difficulty": "Vận dụng cao",
    "question": "Tăng công suất AP rất cao nhưng công suất client thấp. Vì sao vẫn có thể kết nối kém?",
    "options": [
      "TCP tự đổi sang simplex",
      "Client nghe AP nhưng AP khó nhận chiều gửi về",
      "Công suất AP tự tăng nguồn pin client",
      "DHCP không dùng radio"
    ],
    "answer": 1,
    "explanation": "Liên lạc cần cả hai chiều; vùng phát xa của AP không bảo đảm tín hiệu uplink yếu của client tới AP đủ tốt.",
    "source": "Cisco — WLAN Architecture: BSS, IBSS and ESS",
    "sourceUrl": "https://www.cisco.com/E-Learning/bulk/guest/celc/fwl/ch2/2_1_5/content.html",
    "id": "E01Q46"
  },
  {
    "chapter": "Chương 5",
    "topic": "Windows",
    "difficulty": "Vận dụng cao",
    "question": "Windows ping gateway được, ping một IP Internet được, nslookup tên miền bị timeout. Hướng xử lý ưu tiên?",
    "options": [
      "Tắt mọi firewall không kiểm tra",
      "Thay AP ngay vì radio chắc chắn hỏng",
      "Kiểm tra DNS server và khả năng tới dịch vụ DNS",
      "Đổi MAC của router ngẫu nhiên"
    ],
    "answer": 2,
    "explanation": "Kết nối IP tới ngoài đã được xác nhận trong thử nghiệm; lỗi tập trung ở truy vấn DNS hoặc đường/policy tới server DNS.",
    "source": "Microsoft Learn — Windows networking commands",
    "sourceUrl": "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands",
    "id": "E01Q47"
  },
  {
    "chapter": "Chương 5",
    "topic": "WLAN",
    "difficulty": "Nhận biết",
    "question": "SSID có vai trò chủ yếu nào?",
    "options": [
      "Mã hóa toàn bộ IP header",
      "Giảm số bit MAC",
      "Thay thế DHCP server",
      "Tên nhận diện mạng WLAN đối với người dùng"
    ],
    "answer": 3,
    "explanation": "SSID giúp nhận diện mạng dịch vụ, nhưng một tên SSID không tự chứng minh mạng đó đáng tin cậy.",
    "source": "Cisco — WLAN Architecture: BSS, IBSS and ESS",
    "sourceUrl": "https://www.cisco.com/E-Learning/bulk/guest/celc/fwl/ch2/2_1_5/content.html",
    "id": "E01Q48"
  },
  {
    "chapter": "Chương 5",
    "topic": "WLAN",
    "difficulty": "Thông hiểu",
    "question": "Distribution system trong ESS có nhất thiết là một dây cáp cụ thể không?",
    "options": [
      "Không, là hệ thống logic liên kết các BSS",
      "Có, chỉ cáp serial",
      "Có, chỉ cáp đồng trục",
      "Không, vì ESS không cần liên kết"
    ],
    "answer": 0,
    "explanation": "Hệ phân phối là khái niệm chức năng; triển khai có thể dựa trên hạ tầng có dây hoặc phương tiện phù hợp khác.",
    "source": "Cisco — WLAN Architecture: BSS, IBSS and ESS",
    "sourceUrl": "https://www.cisco.com/E-Learning/bulk/guest/celc/fwl/ch2/2_1_5/content.html",
    "id": "E01Q49"
  },
  {
    "chapter": "Chương 5",
    "topic": "An toàn WLAN",
    "difficulty": "Nhận biết",
    "question": "Passive eavesdropping trong WLAN mô tả hành vi nào?",
    "options": [
      "Tạo hàng loạt yêu cầu mới",
      "Quan sát, thu nhận lưu lượng mà không chủ động thay đổi nó",
      "Thay đổi gói đang truyền",
      "Ngắt điện AP"
    ],
    "answer": 1,
    "explanation": "Tấn công thụ động tập trung thu thập thông tin; phân biệt với hành vi chủ động can thiệp hoặc phát thêm lưu lượng.",
    "source": "NIST SP 800-153 — Guidelines for Securing WLANs",
    "sourceUrl": "https://csrc.nist.gov/pubs/sp/800/153/final",
    "id": "E01Q50"
  }
];
