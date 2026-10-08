/* Tự biên soạn; xem tools/chapter*.txt và README.md. */
globalThis.EXAMS ||= {};
globalThis.EXAMS["06"] = [
  {
    "chapter": "Chương 1",
    "topic": "OSI",
    "difficulty": "Thông hiểu",
    "question": "Lợi ích chính của phân tầng giao thức là gì?",
    "options": [
      "Tách trách nhiệm qua giao diện dịch vụ rõ ràng",
      "Loại bỏ toàn bộ lỗi truyền",
      "Không cần địa chỉ nữa",
      "Bảo đảm mọi mạng cùng tốc độ"
    ],
    "answer": 0,
    "explanation": "Các tầng tách chức năng, giúp thay đổi công nghệ một tầng mà giảm ảnh hưởng đến các tầng khác.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E06Q01"
  },
  {
    "chapter": "Chương 1",
    "topic": "Topology",
    "difficulty": "Vận dụng",
    "question": "Trong cây không dự phòng, đường nối nhánh phòng B lên tầng trên bị đứt. Kết luận hợp lý nhất?",
    "options": [
      "Địa chỉ MAC của mọi máy đổi",
      "Phòng B mất đường đến phần còn lại qua liên kết đó",
      "Mọi máy toàn mạng luôn mất điện",
      "Các nhánh khác tự biến thành vòng"
    ],
    "answer": 1,
    "explanation": "Đứt cạnh trong cây chia cây thành hai phần; liên lạc nội bộ nhánh còn tùy thiết bị và kết nối bên trong.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E06Q02"
  },
  {
    "chapter": "Chương 1",
    "topic": "OSI",
    "difficulty": "Nhận biết",
    "question": "Decapsulation ở bên nhận là quá trình nào?",
    "options": [
      "Thêm mọi header lần thứ hai",
      "Chuyển mọi IP thành MAC",
      "Gỡ thông tin điều khiển khi chuyển dữ liệu lên tầng trên",
      "Đổi TCP thành UDP"
    ],
    "answer": 2,
    "explanation": "Mỗi tầng nhận xử lý header tương ứng rồi chuyển phần dữ liệu lên tầng kế tiếp.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E06Q03"
  },
  {
    "chapter": "Chương 1",
    "topic": "Topology",
    "difficulty": "Thông hiểu",
    "question": "Phòng máy cần thêm máy mà ít ảnh hưởng nhánh hiện có; switch còn cổng. Chọn cấu trúc nào?",
    "options": [
      "Bus đồng trục một trục",
      "Hai máy điểm-điểm",
      "Ring đơn phải cắt vòng",
      "Star"
    ],
    "answer": 3,
    "explanation": "Star cho phép nối máy mới vào cổng còn trống mà không phải cắt các nhánh đang dùng.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E06Q04"
  },
  {
    "chapter": "Chương 1",
    "topic": "OSI",
    "difficulty": "Vận dụng",
    "question": "Dữ liệu ứng dụng 100 byte, TCP header 20 byte, IPv4 header 20 byte. IP Total Length bằng bao nhiêu?",
    "options": [
      "140 byte",
      "154 byte",
      "120 byte",
      "100 byte"
    ],
    "answer": 0,
    "explanation": "Total Length của IPv4 gồm IP header và payload TCP: 20 + 20 + 100 = 140 byte, không tính Ethernet.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E06Q05"
  },
  {
    "chapter": "Chương 1",
    "topic": "Repeater",
    "difficulty": "Thông hiểu",
    "question": "Muốn ngăn tín hiệu va chạm lan giữa hai đoạn Ethernet cổ điển, nên thay repeater bằng gì?",
    "options": [
      "Cáp dài hơn",
      "Bridge hoặc switch",
      "Bộ nối thụ động",
      "Một repeater nữa"
    ],
    "answer": 1,
    "explanation": "Bridge/switch phân chia collision domain; repeater chỉ mở rộng môi trường dùng chung.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E06Q06"
  },
  {
    "chapter": "Chương 2",
    "topic": "IPv6",
    "difficulty": "Nhận biết",
    "question": "Địa chỉ IPv6 dài bao nhiêu bit?",
    "options": [
      "32",
      "48",
      "128",
      "64"
    ],
    "answer": 2,
    "explanation": "IPv6 dùng địa chỉ 128 bit, còn IPv4 là 32 bit; MAC Ethernet thường là 48 bit.",
    "source": "IETF RFC 8200 — IPv6 Specification",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc8200.html",
    "id": "E06Q07"
  },
  {
    "chapter": "Chương 2",
    "topic": "HTTP",
    "difficulty": "Nhận biết",
    "question": "Method nào yêu cầu xóa liên kết của tài nguyên đích theo ngữ nghĩa HTTP?",
    "options": [
      "OPTIONS",
      "GET",
      "HEAD",
      "DELETE"
    ],
    "answer": 3,
    "explanation": "DELETE yêu cầu máy chủ loại bỏ liên kết của tài nguyên với URI; không bảo đảm xóa vật lý mọi dữ liệu lưu trữ.",
    "source": "MDN — HTTP reference",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference",
    "id": "E06Q08"
  },
  {
    "chapter": "Chương 2",
    "topic": "Mã hóa đường truyền",
    "difficulty": "Vận dụng cao",
    "question": "NRZ-I bắt đầu L, bit 1 đảo mức; quan sát mức từng bit H,L,L,H. Chuỗi bit là gì?",
    "options": [
      "1101",
      "0110",
      "1011",
      "1001"
    ],
    "answer": 0,
    "explanation": "So từng mức với mức trước: L→H đảo=1; H→L đảo=1; L→L giữ=0; L→H đảo=1.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E06Q09"
  },
  {
    "chapter": "Chương 2",
    "topic": "IPv4",
    "difficulty": "Nhận biết",
    "question": "TTL giúp hạn chế vấn đề nào?",
    "options": [
      "Mất mật khẩu Wi-Fi",
      "Packet tồn tại quá lâu khi bị vòng lặp định tuyến",
      "Hết cổng switch",
      "Trùng tên miền"
    ],
    "answer": 1,
    "explanation": "Router giảm TTL khi chuyển tiếp và loại packet khi hết hạn, ngăn nó chạy vòng vô hạn.",
    "source": "IETF RFC 791 — Internet Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc791.html",
    "id": "E06Q10"
  },
  {
    "chapter": "Chương 2",
    "topic": "Go-Back-N",
    "difficulty": "Nhận biết",
    "question": "Go-Back-N cho phép bên gửi làm gì trước khi có ACK?",
    "options": [
      "Gửi vô hạn không giới hạn",
      "Chỉ gửi một bit",
      "Gửi nhiều gói trong cửa sổ",
      "Chỉ gửi sau khi DNS trả lời"
    ],
    "answer": 2,
    "explanation": "GBN dùng pipelining và cửa sổ gửi để có nhiều gói đang chờ xác nhận cùng lúc.",
    "source": "Kurose & Ross — Transport Layer, public teaching materials (UMass)",
    "sourceUrl": "https://gaia.cs.umass.edu/kurose_ross/videos/3/",
    "id": "E06Q11"
  },
  {
    "chapter": "Chương 2",
    "topic": "IPv4",
    "difficulty": "Thông hiểu",
    "question": "Identification giúp bên nhận làm gì khi có phân mảnh IPv4?",
    "options": [
      "Chọn root bridge",
      "Xác thực mật khẩu",
      "Gán số port ứng dụng",
      "Ghép các fragment thuộc cùng datagram"
    ],
    "answer": 3,
    "explanation": "Identification kết hợp với thông tin nguồn, đích và giao thức hỗ trợ nhận diện tập fragment cần ráp lại.",
    "source": "IETF RFC 791 — Internet Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc791.html",
    "id": "E06Q12"
  },
  {
    "chapter": "Chương 2",
    "topic": "FTP",
    "difficulty": "Vận dụng cao",
    "question": "PASV trả cặp p1=195,p2=80. Cổng dữ liệu tính theo 256×p1+p2 là bao nhiêu?",
    "options": [
      "50000",
      "19580",
      "50080",
      "49920"
    ],
    "answer": 0,
    "explanation": "Cổng được mã hóa bằng hai byte: 195×256+80=50000; không phải nối hai số dưới dạng thập phân.",
    "source": "IETF RFC 959 — File Transfer Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc959.html",
    "id": "E06Q13"
  },
  {
    "chapter": "Chương 2",
    "topic": "TCP",
    "difficulty": "Vận dụng",
    "question": "Ứng dụng viết hai lần 100 byte lên TCP. Bên nhận có chắc đọc đúng hai lần 100 byte không?",
    "options": [
      "Không, vì TCP luôn đảo thứ tự byte",
      "Không, TCP cung cấp luồng byte không giữ ranh giới write",
      "Có, vì PSH là dấu phân cách bắt buộc",
      "Có, mỗi write luôn là một packet riêng"
    ],
    "answer": 1,
    "explanation": "TCP bảo đảm luồng byte có thứ tự nhưng ứng dụng phải tự đóng khung thông điệp nếu cần giữ ranh giới bản tin.",
    "source": "IETF RFC 9293 — Transmission Control Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc9293.html",
    "id": "E06Q14"
  },
  {
    "chapter": "Chương 2",
    "topic": "Selective Repeat",
    "difficulty": "Vận dụng",
    "question": "SR muốn W=5, hai cửa sổ bằng nhau. Cần ít nhất bao nhiêu bit sequence number?",
    "options": [
      "5",
      "2",
      "4",
      "3"
    ],
    "answer": 2,
    "explanation": "Cần không gian ít nhất 2×5=10 giá trị. 3 bit chỉ có 8, còn 4 bit có 16 giá trị.",
    "source": "Kurose & Ross — Transport Layer, public teaching materials (UMass)",
    "sourceUrl": "https://gaia.cs.umass.edu/kurose_ross/videos/3/",
    "id": "E06Q15"
  },
  {
    "chapter": "Chương 2",
    "topic": "Nén dữ liệu",
    "difficulty": "Nhận biết",
    "question": "RLE tận dụng mẫu dữ liệu nào?",
    "options": [
      "Mỗi ký tự đều khác",
      "Địa chỉ MAC giống nhau",
      "Số port tăng dần",
      "Các phần tử giống nhau liên tiếp"
    ],
    "answer": 3,
    "explanation": "Run Length Encoding biểu diễn một dãy lặp bằng giá trị và số lần lặp.",
    "source": "Carnegie Mellon University — Algorithms in the Real World: Compression",
    "sourceUrl": "https://www.cs.cmu.edu/afs/cs/project/pscico-guyb/realworld/www/slidesF15.html",
    "id": "E06Q16"
  },
  {
    "chapter": "Chương 2",
    "topic": "FTP",
    "difficulty": "Nhận biết",
    "question": "Trong FTP passive, bên nào chủ động mở kết nối dữ liệu?",
    "options": [
      "Client nối đến cổng server công bố",
      "Không có kết nối dữ liệu",
      "Router nối đến cả hai",
      "Server nối đến client"
    ],
    "answer": 0,
    "explanation": "Server mở cổng thụ động và báo cho client; client kết nối đến cổng đó để truyền dữ liệu.",
    "source": "IETF RFC 959 — File Transfer Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc959.html",
    "id": "E06Q17"
  },
  {
    "chapter": "Chương 2",
    "topic": "HTTP",
    "difficulty": "Thông hiểu",
    "question": "Trong HTTP/1.1, dòng trống giữa header và body làm gì?",
    "options": [
      "Đánh số thứ tự TCP",
      "Kết thúc phần header",
      "Bắt đầu Ethernet trailer",
      "Kết thúc DNS query"
    ],
    "answer": 1,
    "explanation": "Dòng trống đánh dấu ranh giới header; cách xác định độ dài body còn phụ thuộc quy tắc framing của thông điệp.",
    "source": "MDN — HTTP reference",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference",
    "id": "E06Q18"
  },
  {
    "chapter": "Chương 2",
    "topic": "RDT",
    "difficulty": "Thông hiểu",
    "question": "RDT dùng số thứ tự luân phiên 0/1. Sau khi gói 1 được xác nhận đúng, gói mới mang số nào?",
    "options": [
      "2",
      "255",
      "0",
      "1"
    ],
    "answer": 2,
    "explanation": "Alternating-bit protocol dùng hai giá trị số thứ tự và quay vòng sau mỗi gói đã xác nhận.",
    "source": "Kurose & Ross — Transport Layer, public teaching materials (UMass)",
    "sourceUrl": "https://gaia.cs.umass.edu/kurose_ross/videos/3/",
    "id": "E06Q19"
  },
  {
    "chapter": "Chương 2",
    "topic": "TCP",
    "difficulty": "Vận dụng",
    "question": "Cửa sổ nhận quảng bá bằng 0 báo điều gì?",
    "options": [
      "Mọi dữ liệu trước đó bị sai",
      "Kết nối chắc chắn bị reset",
      "Máy chủ không có địa chỉ IP",
      "Bên nhận tạm chưa có dung lượng nhận thêm"
    ],
    "answer": 3,
    "explanation": "Zero window báo bộ đệm nhận đang đầy; TCP có cơ chế thăm dò để biết khi cửa sổ mở lại.",
    "source": "IETF RFC 9293 — Transmission Control Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc9293.html",
    "id": "E06Q20"
  },
  {
    "chapter": "Chương 2",
    "topic": "RDT",
    "difficulty": "Thông hiểu",
    "question": "NAK thông báo điều gì?",
    "options": [
      "Bên nhận phát hiện gói không hợp lệ",
      "Bên gửi hết dữ liệu",
      "Mọi byte tương lai đã nhận",
      "Kết nối TCP đã thiết lập"
    ],
    "answer": 0,
    "explanation": "Negative acknowledgment phản hồi lỗi để bên gửi truyền lại; ACK thông báo nhận thành công.",
    "source": "Kurose & Ross — Transport Layer, public teaching materials (UMass)",
    "sourceUrl": "https://gaia.cs.umass.edu/kurose_ross/videos/3/",
    "id": "E06Q21"
  },
  {
    "chapter": "Chương 2",
    "topic": "TCP",
    "difficulty": "Vận dụng cao",
    "question": "Client SEQ ban đầu 90, server 400; bắt tay không dữ liệu, sau đó client gửi 10 byte. ACK của server cho dữ liệu đó là gì?",
    "options": [
      "100",
      "101",
      "411",
      "91"
    ],
    "answer": 1,
    "explanation": "SYN client dùng số 90, dữ liệu bắt đầu ở 91 và dài 10 byte; ACK = 91+10 = 101.",
    "source": "IETF RFC 9293 — Transmission Control Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc9293.html",
    "id": "E06Q22"
  },
  {
    "chapter": "Chương 2",
    "topic": "DNS",
    "difficulty": "Thông hiểu",
    "question": "Trong phản hồi referral, phần Authority thường chỉ ra điều gì?",
    "options": [
      "Port của mọi ứng dụng",
      "Mật khẩu quản trị DNS",
      "Name server có thẩm quyền cho vùng liên quan",
      "MAC của gateway"
    ],
    "answer": 2,
    "explanation": "Referral thường dùng NS record để chỉ máy chủ có thẩm quyền mà resolver có thể hỏi tiếp.",
    "source": "IETF RFC 1035 — Domain Names: Implementation and Specification",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc1035.html",
    "id": "E06Q23"
  },
  {
    "chapter": "Chương 2",
    "topic": "UDP",
    "difficulty": "Thông hiểu",
    "question": "Vì sao UDP thường phù hợp với ứng dụng thời gian thực tự xử lý mất gói?",
    "options": [
      "UDP luôn mã hóa dữ liệu",
      "UDP có cửa sổ nhận lớn hơn TCP",
      "UDP luôn bảo đảm không mất gói",
      "Không bắt buộc chờ truyền lại và khôi phục thứ tự ở UDP"
    ],
    "answer": 3,
    "explanation": "UDP có ít cơ chế tích hợp; ứng dụng có thể ưu tiên độ trễ và tự quyết định cách xử lý mất dữ liệu.",
    "source": "IETF RFC 768 — User Datagram Protocol; RFC 8200 §8.1 for IPv6",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc768",
    "id": "E06Q24"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "ACL",
    "difficulty": "Thông hiểu",
    "question": "Wildcard 0.0.0.255 cho phép bỏ qua phần nào khi so khớp IPv4?",
    "options": [
      "Octet cuối",
      "Ba octet đầu",
      "Octet đầu",
      "Toàn bộ địa chỉ"
    ],
    "answer": 0,
    "explanation": "Ba octet đầu có wildcard 0 nên phải khớp; octet cuối 255 nên mọi bit đều được bỏ qua.",
    "source": "Cisco IOS — IP Access List Overview",
    "sourceUrl": "https://www.cisco.com/en/US/docs/ios-xml/ios/sec_data_acl/configuration/15-1mt/IP_Access_List_Overview.html",
    "id": "E06Q25"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "STP",
    "difficulty": "Nhận biết",
    "question": "Root port trên switch không phải root là cổng nào?",
    "options": [
      "Mọi cổng trunk",
      "Cổng có đường tốt nhất về root theo STP",
      "Cổng nối máy chủ DNS",
      "Cổng có số hiệu lớn nhất luôn luôn"
    ],
    "answer": 1,
    "explanation": "STP chọn root port theo tổng cost và các tiêu chí phá hòa; không chỉ dựa vào tên hoặc số cổng.",
    "source": "Cisco — Spanning Tree Protocol Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/stp/stp-configuration-guide/m-stp.html",
    "id": "E06Q26"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "STP",
    "difficulty": "Thông hiểu",
    "question": "Broadcast storm do loop tầng 2 có thể gây hậu quả nào?",
    "options": [
      "Giảm mọi độ trễ",
      "Bảo vệ DNS tốt hơn",
      "Lưu lượng tăng mạnh và thiết bị quá tải",
      "Tự tăng băng thông hữu dụng"
    ],
    "answer": 2,
    "explanation": "Frame bị lặp và nhân bản chiếm băng thông và tài nguyên, làm suy giảm khả năng phục vụ của LAN.",
    "source": "Cisco — Spanning Tree Protocol Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/stp/stp-configuration-guide/m-stp.html",
    "id": "E06Q27"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Cisco CLI",
    "difficulty": "Nhận biết",
    "question": "Lệnh nào hiển thị cấu hình đang chạy trên Cisco IOS?",
    "options": [
      "enable",
      "show startup-config",
      "no shutdown",
      "show running-config"
    ],
    "answer": 3,
    "explanation": "Running-config là cấu hình đang có hiệu lực; startup-config là bản dùng khi khởi động.",
    "source": "Cisco IOS — Configuration Fundamentals",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/fundamentals/configuration/xe-16/fundamentals-xe-16-book/cf-cli-basics.html",
    "id": "E06Q28"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Router",
    "difficulty": "Thông hiểu",
    "question": "Router tách broadcast domain IPv4 thông thường như thế nào?",
    "options": [
      "Không tự chuyển tiếp broadcast tầng 2 giữa interface",
      "Dùng cùng MAC cho mọi host",
      "Đổi broadcast thành mọi unicast",
      "Nhân broadcast tới mọi interface"
    ],
    "answer": 0,
    "explanation": "Router chấm dứt miền tầng liên kết; các cơ chế relay là ngoại lệ có cấu hình chứ không flood Ethernet xuyên mạng.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E06Q29"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "DHCP",
    "difficulty": "Thông hiểu",
    "question": "Client và DHCP server ở khác subnet, router không chuyển broadcast mặc định. Cần cơ chế nào?",
    "options": [
      "MAC aging",
      "DHCP relay",
      "VTP pruning",
      "DTP desirable"
    ],
    "answer": 1,
    "explanation": "Relay chuyển thông điệp DHCP giữa mạng client và server, vượt ranh giới router có cấu hình.",
    "source": "IETF RFC 2131 — Dynamic Host Configuration Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc2131.html",
    "id": "E06Q30"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "DHCP",
    "difficulty": "Vận dụng cao",
    "question": "Client được lease và truy cập được bằng IP nhưng không truy cập bằng tên. Tham số DHCP nào đáng kiểm tra nhất?",
    "options": [
      "TCP source port",
      "VLAN revision",
      "DNS server",
      "STP priority"
    ],
    "answer": 2,
    "explanation": "Tên miền cần phân giải DNS. Khi IP vẫn hoạt động, DNS do DHCP cung cấp là một điểm kiểm tra có cơ sở.",
    "source": "IETF RFC 2131 — Dynamic Host Configuration Protocol",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc2131.html",
    "id": "E06Q31"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "DTP",
    "difficulty": "Thông hiểu",
    "question": "Dynamic desirable nối dynamic desirable với DTP tương thích tạo kết quả nào?",
    "options": [
      "Loopback",
      "Access bắt buộc",
      "Routed port",
      "Trunk"
    ],
    "answer": 3,
    "explanation": "Cả hai phía đều sẵn sàng chủ động tạo trunk nên đạt chế độ trunk theo thương lượng.",
    "source": "Cisco — VLAN Trunk Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vlan-trunks.html",
    "id": "E06Q32"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Switch",
    "difficulty": "Vận dụng",
    "question": "Switch có 8 cổng đang kết nối, mỗi cổng một đoạn Ethernet riêng. Theo cách đếm collision domain truyền thống có bao nhiêu?",
    "options": [
      "8",
      "16",
      "4",
      "1"
    ],
    "answer": 0,
    "explanation": "Switch tách miền va chạm theo cổng; trên liên kết full-duplex hiện đại thực tế không dùng cơ chế va chạm.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E06Q33"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "VLAN",
    "difficulty": "Vận dụng cao",
    "question": "Cổng access VLAN10 nhận frame untagged từ máy. Khi chuyển ra trunk mà native VLAN là 99, frame VLAN10 thường thế nào?",
    "options": [
      "Không tag vì mọi access frame đều untagged mãi",
      "Được gắn tag VID 10",
      "Đổi thành VLAN99",
      "Bị loại vì khác native"
    ],
    "answer": 1,
    "explanation": "Frame được xác định thuộc VLAN10 tại cổng access; trên trunk VLAN10 không phải native nên thông thường được gắn tag.",
    "source": "Cisco — VLAN Trunk Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vlan-trunks.html",
    "id": "E06Q34"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Cisco CLI",
    "difficulty": "Thông hiểu",
    "question": "show ip interface brief hữu ích nhất để xem gì?",
    "options": [
      "Toàn bộ DNS zone",
      "Danh sách mật khẩu Wi-Fi",
      "Tóm tắt IP và trạng thái interface",
      "Nội dung mọi TCP payload"
    ],
    "answer": 2,
    "explanation": "Lệnh hiển thị nhanh địa chỉ IP, trạng thái interface và line protocol để chẩn đoán cấu hình cơ bản.",
    "source": "Cisco IOS — Configuration Fundamentals",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/fundamentals/configuration/xe-16/fundamentals-xe-16-book/cf-cli-basics.html",
    "id": "E06Q35"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Routing",
    "difficulty": "Vận dụng",
    "question": "Lệnh Cisco nào đặt default static route qua 192.0.2.1?",
    "options": [
      "ip route 0.0.0.0 255.255.255.0 192.0.2.1",
      "default vlan 192.0.2.1",
      "ip address 192.0.2.1 0.0.0.0",
      "ip route 0.0.0.0 0.0.0.0 192.0.2.1"
    ],
    "answer": 3,
    "explanation": "ip route dùng mạng đích, subnet mask và next hop; cả mạng và mask bằng 0 tạo route /0.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E06Q36"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "Routing",
    "difficulty": "Vận dụng",
    "question": "OSPF có hai đường tới cùng đích, tổng cost 30 và 40. Không xét điều kiện khác, ưu tiên đường nào?",
    "options": [
      "Cost 30",
      "Đường có MAC nhỏ hơn",
      "Cost 40",
      "Đường nhiều hop hơn luôn luôn"
    ],
    "answer": 0,
    "explanation": "SPF tối thiểu hóa tổng cost; số hop không phải tiêu chí duy nhất như RIP.",
    "source": "Peter L. Dordal — An Introduction to Computer Networks",
    "sourceUrl": "https://intronetworks.cs.luc.edu/current/html/",
    "id": "E06Q37"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "VLAN",
    "difficulty": "Thông hiểu",
    "question": "Khoảng VLAN ID thông thường có thể dùng, loại trừ 0 và 4095, là gì?",
    "options": [
      "1–255",
      "1–4094",
      "1–65535",
      "0–4095"
    ],
    "answer": 1,
    "explanation": "VID 0 dành cho priority-tagged frame và 4095 được dành riêng; khả năng hỗ trợ cụ thể còn tùy thiết bị.",
    "source": "Cisco — VLAN Trunk Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vlan-trunks.html",
    "id": "E06Q38"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "VTP",
    "difficulty": "Nhận biết",
    "question": "Trong VTP v1/v2, client có đặc điểm nào?",
    "options": [
      "Không nhận quảng bá",
      "Chỉ hoạt động nếu không có trunk",
      "Nhận đồng bộ VLAN, không tạo/xóa VLAN cục bộ theo cách server",
      "Tự sửa mọi VLAN độc lập"
    ],
    "answer": 2,
    "explanation": "Client dựa vào thông tin VLAN của miền; không có quyền chỉnh cơ sở dữ liệu như server trong mô hình này.",
    "source": "Cisco — Configure VTP (version-specific behavior)",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vtp.html",
    "id": "E06Q39"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "DTP",
    "difficulty": "Nhận biết",
    "question": "Dynamic desirable thể hiện hành vi thương lượng nào?",
    "options": [
      "Định tuyến IP tự động",
      "Ép access và tắt thương lượng",
      "Chỉ chờ thụ động mọi lúc",
      "Chủ động cố gắng tạo trunk"
    ],
    "answer": 3,
    "explanation": "Desirable chủ động gửi thương lượng để đạt trunk khi phía đối diện có chế độ tương thích.",
    "source": "Cisco — VLAN Trunk Configuration Guide",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vlan-trunks.html",
    "id": "E06Q40"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "NAT",
    "difficulty": "Thông hiểu",
    "question": "Outside global là gì?",
    "options": [
      "Địa chỉ thực của host bên ngoài theo mạng ngoài",
      "VLAN native của trunk",
      "Địa chỉ nội bộ của chính router",
      "MAC của client"
    ],
    "answer": 0,
    "explanation": "Outside global là địa chỉ được gán cho host ngoài trong không gian địa chỉ bên ngoài.",
    "source": "Cisco — Configuring NAT for IP Address Conservation",
    "sourceUrl": "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipaddr_nat/configuration/15-sy/nat-15-sy-book/iadnat-addr-consv.html",
    "id": "E06Q41"
  },
  {
    "chapter": "Chương 3–4",
    "topic": "ACL",
    "difficulty": "Nhận biết",
    "question": "Standard IPv4 ACL thông thường lọc chủ yếu theo gì?",
    "options": [
      "HTTP method",
      "Địa chỉ IP nguồn",
      "Port TCP đích",
      "Địa chỉ MAC đích"
    ],
    "answer": 1,
    "explanation": "Standard ACL chỉ xét địa chỉ IPv4 nguồn trong phạm vi cơ bản, khác extended ACL có nhiều tiêu chí hơn.",
    "source": "Cisco IOS — IP Access List Overview",
    "sourceUrl": "https://www.cisco.com/en/US/docs/ios-xml/ios/sec_data_acl/configuration/15-1mt/IP_Access_List_Overview.html",
    "id": "E06Q42"
  },
  {
    "chapter": "Chương 5",
    "topic": "Windows",
    "difficulty": "Nhận biết",
    "question": "netsh wlan show drivers dùng để xem gì?",
    "options": [
      "VTP revision",
      "Mọi gói đang truyền",
      "Thông tin driver và khả năng WLAN được hỗ trợ",
      "Lịch sử HTTP"
    ],
    "answer": 2,
    "explanation": "Thông tin driver giúp kiểm tra khả năng adapter như loại radio và cơ chế bảo mật được hỗ trợ.",
    "source": "Microsoft Learn — Windows networking commands",
    "sourceUrl": "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands",
    "id": "E06Q43"
  },
  {
    "chapter": "Chương 5",
    "topic": "Windows",
    "difficulty": "Thông hiểu",
    "question": "ping 127.0.0.1 thành công chứng minh điều gì trực tiếp nhất?",
    "options": [
      "DNS phân giải đúng mọi tên",
      "Router Internet hoạt động",
      "AP nhận tín hiệu tốt",
      "Ngăn xếp IP cục bộ phản hồi loopback"
    ],
    "answer": 3,
    "explanation": "Loopback không đi qua cáp hay radio, nên không kiểm tra đường đến gateway hoặc Internet.",
    "source": "Microsoft Learn — Windows networking commands",
    "sourceUrl": "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands",
    "id": "E06Q44"
  },
  {
    "chapter": "Chương 5",
    "topic": "An toàn WLAN",
    "difficulty": "Nhận biết",
    "question": "MAC spoofing là gì?",
    "options": [
      "Giả mạo địa chỉ MAC được sử dụng",
      "Đổi subnet mask hợp lệ",
      "Tạo bản sao lưu cấu hình",
      "Gia hạn DHCP"
    ],
    "answer": 0,
    "explanation": "Giả mạo MAC khiến thiết bị có thể xuất hiện dưới định danh tầng liên kết khác, nên MAC không phải bằng chứng xác thực mạnh.",
    "source": "NIST SP 800-153 — Guidelines for Securing WLANs",
    "sourceUrl": "https://csrc.nist.gov/pubs/sp/800/153/final",
    "id": "E06Q45"
  },
  {
    "chapter": "Chương 5",
    "topic": "An toàn WLAN",
    "difficulty": "Vận dụng",
    "question": "Wi-Fi chậm bất thường có đủ để kết luận bị DoS không?",
    "options": [
      "Có, chậm luôn do tấn công",
      "Không, còn có thể do nhiễu, quá tải hoặc cấu hình",
      "Có, nếu SSID dài",
      "Không, DoS không ảnh hưởng hiệu năng"
    ],
    "answer": 1,
    "explanation": "Cần dữ kiện như mức sử dụng kênh, log và tài nguyên AP để phân biệt nguyên nhân tự nhiên với lạm dụng.",
    "source": "NIST SP 800-153 — Guidelines for Securing WLANs",
    "sourceUrl": "https://csrc.nist.gov/pubs/sp/800/153/final",
    "id": "E06Q46"
  },
  {
    "chapter": "Chương 5",
    "topic": "GSM",
    "difficulty": "Nhận biết",
    "question": "BTS thực hiện chức năng chủ yếu nào?",
    "options": [
      "Quản lý DNS Internet",
      "Định tuyến OSPF toàn cầu",
      "Liên lạc vô tuyến với mobile station",
      "Lưu mọi file ứng dụng"
    ],
    "answer": 2,
    "explanation": "Base Transceiver Station cung cấp phần thu phát vô tuyến phục vụ vùng cell của mạng GSM.",
    "source": "ETSI GSM 03.02 — Network Architecture",
    "sourceUrl": "https://www.etsi.org/deliver/etsi_gts/03/0302/05.01.00_60/gsmts_0302v050100p.pdf",
    "id": "E06Q47"
  },
  {
    "chapter": "Chương 5",
    "topic": "WLAN",
    "difficulty": "Thông hiểu",
    "question": "Hai AP trong cùng ESS thường được cấu hình thế nào để hỗ trợ dịch vụ nhất quán?",
    "options": [
      "Cùng địa chỉ MAC bắt buộc",
      "Khác SSID bắt buộc",
      "Không có hệ phân phối",
      "Cùng SSID và cấu hình bảo mật tương thích"
    ],
    "answer": 3,
    "explanation": "Cùng định danh dịch vụ và bảo mật phù hợp giúp client sử dụng dịch vụ qua nhiều BSS; BSSID của chúng vẫn khác.",
    "source": "Cisco — WLAN Architecture: BSS, IBSS and ESS",
    "sourceUrl": "https://www.cisco.com/E-Learning/bulk/guest/celc/fwl/ch2/2_1_5/content.html",
    "id": "E06Q48"
  },
  {
    "chapter": "Chương 5",
    "topic": "GSM",
    "difficulty": "Vận dụng",
    "question": "Thuê bao di chuyển sang vùng MSC/VLR khác. Dữ liệu quản lý nào cần được cập nhật theo thủ tục mạng?",
    "options": [
      "Thông tin vị trí và đăng ký phục vụ",
      "VLAN ID của mọi AP",
      "HTTP status của website",
      "MAC nguồn trên mọi switch Internet"
    ],
    "answer": 0,
    "explanation": "Quản lý vị trí giúp mạng biết vùng nào đang phục vụ thuê bao để định tuyến dịch vụ tới đúng nơi.",
    "source": "ETSI GSM 03.02 — Network Architecture",
    "sourceUrl": "https://www.etsi.org/deliver/etsi_gts/03/0302/05.01.00_60/gsmts_0302v050100p.pdf",
    "id": "E06Q49"
  },
  {
    "chapter": "Chương 5",
    "topic": "WLAN",
    "difficulty": "Thông hiểu",
    "question": "Vì sao Wi-Fi không đơn giản dùng phát hiện va chạm như Ethernet half-duplex cổ điển?",
    "options": [
      "Vì Wi-Fi không dùng bit",
      "Khó phát hiện va chạm trong lúc radio đang phát",
      "Vì MAC không tồn tại",
      "Vì mọi client nhìn thấy nhau hoàn hảo"
    ],
    "answer": 1,
    "explanation": "Máy phát radio khó đồng thời nhận tín hiệu yếu khác để phát hiện va chạm; còn có vấn đề hidden node.",
    "source": "Cisco — WLAN Architecture: BSS, IBSS and ESS",
    "sourceUrl": "https://www.cisco.com/E-Learning/bulk/guest/celc/fwl/ch2/2_1_5/content.html",
    "id": "E06Q50"
  }
];
