/* Original Vietnamese revision notes, organized to match the supplied syllabus. */
window.STUDY_CHAPTERS = [
  {
    id: "1",
    title: "Tổng quan mạng máy tính",
    subtitle: "Topology · Thiết bị · Mô hình OSI",
    goals: [
      "So sánh topology theo chi phí, khả năng mở rộng và chịu lỗi.",
      "Giải thích thiết bị mạng bằng tầng hoạt động và dữ liệu chúng xử lý.",
      "Mô tả đóng gói và sự thay đổi địa chỉ khi dữ liệu qua router.",
    ],
    topics: [
      {
        id: "topology",
        title: "Topology: trình bày theo cùng tiêu chí",
        html: '\n<p>Topology mô tả cách các nút và liên kết được tổ chức. Cần phân biệt <strong>topology vật lý</strong> (cách đi dây, kết nối) với <strong>topology logic</strong> (cách dữ liệu truyền). Khi so sánh, nêu cấu trúc → ưu điểm → nhược điểm → tình huống phù hợp.</p>\n<div class="study-table"><table><thead><tr><th>Kiểu</th><th>Điểm mạnh</th><th>Hạn chế và ứng dụng</th></tr></thead><tbody>\n<tr><td>Bus</td><td>Ít cáp trong mô hình bus cổ điển.</td><td>Đường trục chung dễ thành điểm lỗi; khó khoanh vùng sự cố. Chủ yếu dùng để hiểu Ethernet dùng cáp đồng trục trước đây.</td></tr>\n<tr><td>Star</td><td>Dễ thêm máy, cô lập lỗi cáp từng nhánh.</td><td>Phụ thuộc thiết bị trung tâm; nhiều cáp hơn bus. Phù hợp LAN dùng switch.</td></tr>\n<tr><td>Ring</td><td>Có thể tổ chức truy cập theo lượt, giảm tranh chấp.</td><td>Vòng đơn không bảo vệ dễ gián đoạn khi đứt; vòng kép/cơ chế phục hồi cải thiện chịu lỗi. Không phải mọi mạng vòng đều dùng token.</td></tr>\n<tr><td>Mesh</td><td>Nhiều đường thay thế, chịu lỗi tốt.</td><td>Chi phí cổng, cáp và quản lý cao. Full mesh cho n nút cần n(n−1)/2 liên kết hai chiều.</td></tr>\n<tr><td>Tree</td><td>Phân cấp, dễ mở rộng theo khu vực.</td><td>Lỗi nút hoặc đường nối cấp trên ảnh hưởng cả nhánh nếu thiếu dự phòng.</td></tr>\n<tr><td>Hybrid</td><td>Kết hợp topology phù hợp từng khu vực.</td><td>Thiết kế và vận hành phức tạp hơn; ví dụ nhiều mạng star nối qua backbone dự phòng.</td></tr>\n</tbody></table></div>\n<div class="study-example"><strong>Ví dụ:</strong> Full mesh 6 nút có 6×5/2 = 15 liên kết. Thêm nút thứ 7 cần thêm 6 liên kết, không phải chỉ 1. Với phòng máy, star thường kinh tế và dễ quản trị hơn full mesh.</div>',
        prompts: [
          {
            q: "Một phòng thực hành có 30 máy. Hãy chọn topology và phân tích ảnh hưởng khi đứt một dây hoặc hỏng switch trung tâm.",
            a: [
              "Đề xuất star dùng switch; mỗi máy có liên kết riêng nên dễ mở rộng và tìm lỗi.",
              "Đứt dây một máy thường chỉ làm máy đó mất kết nối; switch trung tâm hỏng có thể làm toàn bộ phòng mất kết nối.",
              "Đánh đổi: cần nhiều dây/cổng nhưng chi phí thấp hơn full mesh. Nêu dự phòng uplink hoặc thiết bị khi có yêu cầu sẵn sàng cao.",
            ],
          },
        ],
      },
      {
        id: "devices",
        title: "Repeater, hub, bridge, switch và router",
        html: '\n<div class="study-table"><table><thead><tr><th>Thiết bị</th><th>Tầng chính</th><th>Căn cứ xử lý</th></tr></thead><tbody>\n<tr><td>Repeater / hub</td><td>Physical</td><td>Tái tạo tín hiệu; hub là repeater nhiều cổng. Không học MAC, không định tuyến IP.</td></tr>\n<tr><td>Bridge / switch lớp 2</td><td>Data Link</td><td>Học MAC nguồn, chuyển frame theo MAC đích trong VLAN.</td></tr>\n<tr><td>Router / chức năng L3</td><td>Network</td><td>Dùng IP đích và bảng định tuyến để chọn next hop/interface.</td></tr>\n</tbody></table></div>\n<p><strong>Repeater số</strong> phục hồi dạng tín hiệu và thời điểm bit để mở rộng đoạn truyền trong giới hạn công nghệ. Nó không giống bộ khuếch đại chỉ làm lớn cả tín hiệu lẫn nhiễu; cũng không sửa mọi lỗi bit hoặc khắc phục giới hạn băng thông.</p>\n<p>Hub tạo môi trường chia sẻ, cùng collision domain. Switch tách các đoạn truy cập; liên kết Ethernet full-duplex không dùng CSMA/CD và không có va chạm theo nghĩa Ethernet bán song công. Mỗi VLAN là một broadcast domain; router ngăn broadcast lớp 2 đi xuyên sang mạng khác theo mặc định.</p>\n<div class="study-pitfall"><strong>Dễ nhầm:</strong> Switch nhiều cổng không tự làm mỗi cổng thành một broadcast domain. Muốn tách broadcast cần VLAN hoặc ranh giới lớp 3.</div>',
        prompts: [
          {
            q: "Tại sao thay hub bằng switch có thể cải thiện hiệu năng nhưng chưa chắc giảm phạm vi broadcast?",
            a: [
              "Hub lặp tín hiệu ra các cổng; các máy chia sẻ môi trường truyền.",
              "Switch học MAC để chuyển unicast có đích đã biết đến cổng phù hợp, cho phép nhiều liên kết full-duplex đồng thời.",
              "Broadcast vẫn được flood trong cùng VLAN. Muốn thu hẹp phạm vi cần phân VLAN và định tuyến giữa VLAN khi cần.",
            ],
          },
        ],
      },
      {
        id: "osi",
        title: "OSI và quá trình đóng gói",
        html: '\n<div class="study-table"><table><thead><tr><th>Tầng OSI</th><th>Vai trò cần giải thích</th></tr></thead><tbody>\n<tr><td>7. Application</td><td>Dịch vụ mạng cho ứng dụng: HTTP, DNS, FTP.</td></tr>\n<tr><td>6. Presentation</td><td>Biểu diễn dữ liệu, mã hóa ký tự, nén, mã hóa bảo mật theo mô hình.</td></tr>\n<tr><td>5. Session</td><td>Thiết lập, quản lý đối thoại và điểm đồng bộ phiên theo mô hình.</td></tr>\n<tr><td>4. Transport</td><td>Giao tiếp tiến trình–tiến trình, port; TCP/UDP.</td></tr>\n<tr><td>3. Network</td><td>Địa chỉ logic IP và chuyển tiếp giữa các mạng.</td></tr>\n<tr><td>2. Data Link</td><td>Frame, địa chỉ liên kết như MAC, kiểm tra lỗi như FCS.</td></tr>\n<tr><td>1. Physical</td><td>Truyền bit bằng tín hiệu trên môi trường.</td></tr>\n</tbody></table></div>\n<div class="study-flow" aria-label="Đóng gói dữ liệu">Data → TCP segment / UDP datagram → IP packet → Frame → Bit</div>\n<p>Bên gửi thêm thông tin điều khiển vào header; một số giao thức thêm trailer, như Ethernet FCS. Bên nhận xử lý theo chiều ngược lại, kiểm tra và tháo phần bao phù hợp. TCP/IP triển khai thực tế không bắt buộc tách riêng ba tầng trên như OSI.</p>\n<p><strong>Ba loại định danh:</strong> MAC phục vụ chặng liên kết; IP xác định địa chỉ lớp mạng; port phân biệt đầu cuối giao vận của tiến trình. Qua router, frame được tháo và tạo lại cho chặng mới. Nếu không có NAT, IP nguồn/đích thường giữ nguyên, nhưng TTL/Hop Limit giảm; MAC phụ thuộc liên kết từng chặng.</p>\n<div class="study-example"><strong>Ví dụ:</strong> Máy A gửi đến máy B khác subnet: IP đích là B; trên Ethernet chặng đầu, MAC đích là MAC gateway, không phải MAC của B.</div>',
        prompts: [
          {
            q: "Mô tả gói HTTP đi từ máy A qua router đến máy B khác mạng. Phân biệt IP đích với MAC đích.",
            a: [
              "Ứng dụng tạo thông điệp; giao vận thêm port; IP thêm địa chỉ nguồn/đích; Ethernet thêm MAC và FCS.",
              "A xác định B ngoài subnet nên gửi frame cho gateway. IP đích vẫn là B.",
              "Router xử lý gói IP, giảm TTL và chọn đường; tạo frame mới. B tháo đóng gói để giao dữ liệu cho ứng dụng.",
              "Giả định không NAT; nếu có NAT thì địa chỉ IP hoặc port có thể bị dịch.",
            ],
          },
        ],
      },
    ],
    refTopics: ["Topology", "Repeater", "OSI"],
  },
  {
    id: "2",
    title: "Giao thức và truyền dữ liệu",
    subtitle: "DNS/HTTP · IP · TCP/UDP · FTP · Nén · Mã hóa · RDT",
    goals: [
      "Đọc được các trường header và giải thích chức năng thay vì chỉ liệt kê tên.",
      "Tính được SEQ/ACK, phân mảnh IPv4 và cửa sổ GBN/SR.",
      "So sánh các cơ chế bằng mục tiêu, quy trình và đánh đổi.",
    ],
    topics: [
      {
        id: "dns",
        title: "DNS: từ tên miền đến bản ghi",
        html: '\n<p>DNS là hệ thống tên phân cấp, phân tán. Resolver tra cứu bản ghi; A ánh xạ sang IPv4, AAAA sang IPv6, CNAME chỉ tên bí danh, MX chỉ máy chủ thư, NS chỉ máy chủ tên miền. DNS không chỉ có chức năng đổi tên thành IP.</p>\n<p><strong>Luồng cơ bản:</strong> ứng dụng → resolver cục bộ → recursive resolver. Nếu chưa có cache phù hợp, resolver có thể lần theo root → TLD → authoritative server rồi lưu kết quả theo TTL.</p>\n<div class="study-table"><table><thead><tr><th>Thành phần</th><th>Ý nghĩa</th></tr></thead><tbody>\n<tr><td>Header</td><td>ID ghép phản hồi với truy vấn; flags mô tả truy vấn/phản hồi, đệ quy, lỗi; bốn bộ đếm số mục trong các phần.</td></tr>\n<tr><td>Question</td><td>Tên cần hỏi, kiểu và lớp bản ghi.</td></tr>\n<tr><td>Answer</td><td>Bản ghi trả lời truy vấn.</td></tr>\n<tr><td>Authority / Additional</td><td>Thông tin máy chủ có thẩm quyền / dữ liệu hỗ trợ như địa chỉ glue.</td></tr>\n</tbody></table></div>\n<p>DNS truyền thống dùng cổng 53 qua UDP hoặc TCP. Không kết luận “DNS chỉ dùng UDP”; TCP được dùng trong nhiều tình huống, gồm phản hồi bị cắt ngắn cần thử lại và chuyển vùng.</p>\n<div class="study-pitfall"><strong>Recursive:</strong> bên được hỏi thực hiện quá trình phân giải thay cho bên hỏi. <strong>Iterative:</strong> bên được hỏi trả lời có sẵn hoặc chỉ dẫn; bên hỏi tiếp tục liên hệ máy chủ khác.</div>',
        prompts: [
          {
            q: "So sánh truy vấn recursive và iterative. Cache DNS ảnh hưởng thế nào đến số lần truy vấn?",
            a: [
              "Phân biệt bên chịu trách nhiệm đi tìm câu trả lời cuối cùng.",
              "Mô tả resolver lần theo phân cấp khi cache trống, không khẳng định mọi truy vấn đều đi tới root.",
              "Cache còn TTL hợp lệ có thể giảm độ trễ và lưu lượng; bản ghi thay đổi chưa chắc xuất hiện ngay ở mọi resolver.",
            ],
          },
        ],
      },
      {
        id: "http",
        title: "HTTP: cấu trúc thông điệp và ý nghĩa mã trạng thái",
        html: '\n<p>Với <strong>HTTP/1.1</strong>, request gồm request line (method, target, version), header, dòng trống và body tùy thông điệp; response dùng status line (version, status code, reason phrase), rồi header và body nếu có. HTTP/2 và HTTP/3 dùng cách đóng khung khác, không áp dụng nguyên xi khuôn dòng văn bản này.</p>\n<div class="study-table"><table><thead><tr><th>Method</th><th>Mục đích</th></tr></thead><tbody>\n<tr><td>GET / HEAD</td><td>Lấy biểu diễn / lấy metadata tương ứng mà không trả nội dung body.</td></tr>\n<tr><td>POST</td><td>Gửi dữ liệu để tài nguyên xử lý; không mặc định idempotent.</td></tr>\n<tr><td>PUT / DELETE</td><td>Tạo hoặc thay thế trạng thái tại URI / yêu cầu xóa; ngữ nghĩa idempotent.</td></tr>\n</tbody></table></div>\n<p><strong>200</strong> thành công; <strong>301/302</strong> chuyển hướng lâu dài/tạm thời; <strong>400</strong> yêu cầu có vấn đề; <strong>401</strong> cần thông tin xác thực hợp lệ; <strong>403</strong> máy chủ từ chối; <strong>404</strong> không tìm thấy; <strong>500</strong> lỗi nội bộ; <strong>503</strong> dịch vụ tạm không sẵn sàng.</p>\n<div class="study-example">Idempotent nghĩa là lặp cùng yêu cầu có hiệu ứng dự định lên trạng thái máy chủ như một lần; không đảm bảo mã trả về mỗi lần giống nhau. DELETE lần đầu có thể thành công, lần sau trả 404.</div>',
        prompts: [
          {
            q: "Trình bày một HTTP request/response và phân biệt lỗi 401, 403, 404, 500.",
            a: [
              "Nêu rõ ví dụ đang dùng HTTP/1.1, xác định dòng đầu, header và body.",
              "401 liên quan xác thực; 403 là từ chối truy cập; 404 là không tìm thấy tài nguyên; 500 là sự cố phía máy chủ.",
              "Không kết luận mọi lỗi 4xx đều là sai mật khẩu hoặc mọi response đều có body.",
            ],
          },
        ],
      },
      {
        id: "ip",
        title: "IPv4 và IPv6: header, TTL và phân mảnh",
        html: '\n<div class="study-table"><table><thead><tr><th>IPv4</th><th>Chức năng</th></tr></thead><tbody>\n<tr><td>Version, IHL</td><td>Phiên bản; độ dài header theo đơn vị 4 byte (IHL=5 → 20 byte).</td></tr>\n<tr><td>DSCP / ECN</td><td>Phân loại xử lý lưu lượng / báo hiệu tắc nghẽn.</td></tr>\n<tr><td>Total Length</td><td>Tổng số byte của header và dữ liệu gói.</td></tr>\n<tr><td>Identification, Flags, Fragment Offset</td><td>Nhận diện và ghép mảnh; DF cấm phân mảnh, MF còn mảnh sau; offset theo đơn vị 8 byte.</td></tr>\n<tr><td>TTL, Protocol</td><td>Giới hạn tồn tại; giao thức lớp trên, ví dụ 6=TCP, 17=UDP.</td></tr>\n<tr><td>Header Checksum, Source / Destination</td><td>Kiểm tra lỗi header; địa chỉ nguồn/đích 32 bit.</td></tr>\n</tbody></table></div>\n<p>Router chuyển tiếp giảm TTL ít nhất 1; nếu về 0 thì loại gói. Vì TTL đổi nên checksum header IPv4 cần cập nhật. TTL không phải phép đo độ trễ chính xác.</p>\n<div class="study-example"><strong>Bài mẫu:</strong> IPv4 dài 4.000 byte, header 20 byte không có options, MTU 1.500, DF=0. Dữ liệu là 3.980 byte. Mảnh chưa cuối mang tối đa ⌊(1.500−20)/8⌋×8 = 1.480 byte. Ba mảnh có dữ liệu 1.480 / 1.480 / 1.020; Total Length 1.500 / 1.500 / 1.040; offset 0 / 185 / 370; MF 1 / 1 / 0. Tổng byte tăng vì mỗi mảnh có header riêng.</div>\n<p><strong>IPv6:</strong> header cơ sở 40 byte; địa chỉ 128 bit; các trường Version, Traffic Class, Flow Label, Payload Length, Next Header, Hop Limit, Source và Destination. Payload Length thông thường tính phần sau header cơ sở, gồm extension header. Next Header chỉ header kế tiếp, có thể là extension hoặc TCP/UDP.</p>\n<p>IPv6 không có checksum trong header cơ sở; router không phân mảnh gói IPv6. Khi cần, nguồn dùng Fragment extension header; router báo Packet Too Big để nguồn điều chỉnh kích thước. IPv6 không dùng broadcast.</p>',
        prompts: [
          {
            q: "Giải thích cách chia mảnh IPv4 và so sánh với IPv6.",
            a: [
              "Tách tổng độ dài thành header và dữ liệu; tìm lượng dữ liệu tối đa là bội của 8 cho mảnh chưa cuối.",
              "Tính offset bằng số byte dữ liệu gốc đứng trước mảnh chia 8; xác định MF và tổng chiều dài từng mảnh.",
              "Kiểm tra DF, MTU và options theo giả thiết; nơi đích ghép mảnh.",
              "IPv6 chỉ nguồn phân mảnh; header cơ sở cố định và không có checksum.",
            ],
          },
        ],
      },
      {
        id: "tcp",
        title: "TCP/UDP và cách tính SEQ–ACK",
        html: '\n<div class="study-table"><table><thead><tr><th>Tiêu chí</th><th>TCP</th><th>UDP</th></tr></thead><tbody>\n<tr><td>Dịch vụ</td><td>Luồng byte có thứ tự, tin cậy.</td><td>Datagram; không tự đảm bảo thứ tự/giao thành công.</td></tr>\n<tr><td>Kết nối</td><td>Có thiết lập, trạng thái kết nối.</td><td>Không bắt tay ở UDP.</td></tr>\n<tr><td>Header</td><td>Tối thiểu 20 byte.</td><td>8 byte: port nguồn/đích, length, checksum.</td></tr>\n<tr><td>Ứng dụng</td><td>Cần dữ liệu đầy đủ; ứng dụng tự phân ranh thông điệp.</td><td>Cần datagram; ứng dụng có thể bổ sung độ tin cậy.</td></tr>\n</tbody></table></div>\n<p>TCP header có port nguồn/đích; SEQ của byte đầu; ACK chỉ byte kế tiếp mong đợi; Window phục vụ kiểm soát luồng; checksum kiểm tra lỗi. SYN đồng bộ, ACK xác nhận, FIN kết thúc một chiều, RST reset, PSH yêu cầu chuyển dữ liệu sớm cho ứng dụng, URG báo urgent pointer có ý nghĩa.</p>\n<pre class="study-code">Ví dụ không mang dữ liệu trong bắt tay:\nA → B: SYN      SEQ=1000\nB → A: SYN,ACK  SEQ=5000  ACK=1001\nA → B: ACK      SEQ=1001  ACK=5001\nA → B: 200 byte SEQ=1001\nB → A: ACK=1201</pre>\n<p>SYN và FIN mỗi cờ chiếm một số thứ tự; ACK thuần không chiếm. Sau bắt tay thông thường hai bên vào ESTABLISHED. Đóng TCP thường có FIN/ACK cho mỗi chiều, có thể gộp segment; không luôn đúng bốn gói. Bên chủ động đóng thường qua TIME-WAIT.</p>\n<div class="study-pitfall">Window của bên nhận khác cửa sổ tắc nghẽn của bên gửi. Checksum phát hiện lỗi, không phải mã hóa bảo mật. UDP không có bắt tay nhưng không vì thế luôn nhanh hơn trong mọi ứng dụng.</div>',
        prompts: [
          {
            q: "Vẽ bắt tay TCP ba bước và tính ACK khi nhận 300 byte bắt đầu ở SEQ=2001.",
            a: [
              "Chọn ISN cho mỗi đầu; SYN nhận được được xác nhận bằng ISN+1.",
              "ACK=2301 nếu nhận liên tục đủ 300 byte và không có lỗ hổng trước đó.",
              "Giải thích ACK là byte tiếp theo chờ nhận, không phải số thứ tự gói hoặc byte cuối đã nhận.",
              "Nêu SYN/FIN chiếm 1, ACK thuần không chiếm; phân biệt thiết lập kết nối với truyền dữ liệu.",
            ],
          },
        ],
      },
      {
        id: "ftp",
        title: "FTP active và passive",
        html: '\n<p>FTP truyền thống dùng kết nối điều khiển tới TCP 21 của server và kết nối dữ liệu riêng cho danh sách thư mục/nội dung tệp. Phiên điều khiển có thể còn tồn tại khi một kết nối dữ liệu đã kết thúc.</p>\n<div class="study-table"><table><thead><tr><th>Tiêu chí</th><th>Active cổ điển</th><th>Passive</th></tr></thead><tbody>\n<tr><td>Thông báo đầu nhận</td><td>Client gửi địa chỉ/cổng qua PORT.</td><td>Server thông báo cổng qua PASV hoặc EPSV.</td></tr>\n<tr><td>Mở kết nối dữ liệu</td><td>Server chủ động nối tới client; thường dùng cổng nguồn 20.</td><td>Client nối tới cổng dữ liệu được server thông báo.</td></tr>\n<tr><td>Firewall/NAT</td><td>Kết nối từ server vào client dễ bị chặn.</td><td>Thuận lợi cho client sau NAT; server vẫn phải cấu hình dải cổng dữ liệu phù hợp.</td></tr>\n</tbody></table></div>\n<div class="study-pitfall">Không nói “FTP chỉ dùng cổng 20 và 21”. Passive dùng cổng dữ liệu khác. FTP thuần không bảo vệ nội dung/mật khẩu bằng mã hóa; FTPS và SFTP là các giải pháp khác nhau.</div>',
        prompts: [
          {
            q: "Vì sao client đăng nhập FTP được nhưng không tải tệp hoặc liệt kê thư mục được?",
            a: [
              "Đăng nhập chứng minh kết nối điều khiển hoạt động, chưa chứng minh kết nối dữ liệu thành công.",
              "Xác định active hay passive và bên chủ động mở kết nối dữ liệu.",
              "Kiểm tra NAT, firewall, địa chỉ thông báo và cổng dữ liệu; giải thích vì sao đổi mode hoặc sửa cấu hình phù hợp có thể giải quyết.",
            ],
          },
        ],
      },
      {
        id: "compression",
        title: "Nén dữ liệu: mục tiêu và đánh đổi",
        html: '\n<p><strong>Lossless</strong> khôi phục chính xác dữ liệu gốc; phù hợp văn bản, mã nguồn, dữ liệu cần toàn vẹn. <strong>Lossy</strong> bỏ bớt thông tin theo mô hình cảm nhận hoặc mục tiêu chất lượng; thường dùng cho ảnh, âm thanh và video. Loại dữ liệu không bắt buộc một kiểu nén: ảnh cũng có định dạng lossless.</p>\n<ul><li><strong>RLE:</strong> biểu diễn chuỗi ký hiệu lặp bằng ký hiệu và số lần; tốt khi có đoạn lặp dài, có thể làm dữ liệu lớn hơn nếu ít lặp.</li><li><strong>Huffman:</strong> mã tiền tố, ký hiệu thường gặp có mã ngắn hơn; cách xây dựng ghép hai trọng số nhỏ nhất lặp lại.</li><li><strong>Dictionary-based:</strong> thay chuỗi đã gặp bằng tham chiếu hoặc mã trong từ điển; phải tính cả chi phí mã/từ điển.</li></ul>\n<div class="study-example"><strong>Bài mẫu Huffman:</strong> A:0,5; B:0,25; C:0,125; D:0,125. Một mã hợp lệ là A=0, B=10, C=110, D=111. Độ dài trung bình = 0,5×1 + 0,25×2 + 0,125×3 + 0,125×3 = 1,75 bit/ký hiệu, so với mã cố định 2 bit. Đây là chi phí payload, chưa tính mô tả bảng mã.</div>',
        prompts: [
          {
            q: "Chọn phương pháp nén cho mã nguồn và ảnh xem trước; giải thích vì sao nén không phải lúc nào cũng làm tệp nhỏ hơn.",
            a: [
              "Mã nguồn cần lossless; ảnh xem trước có thể dùng lossy nếu chấp nhận giảm chất lượng.",
              "Phân tích mẫu dữ liệu: lặp dài phù hợp RLE, tần suất không đều phù hợp Huffman, chuỗi lặp phù hợp từ điển.",
              "Nêu overhead và dữ liệu đã nén/ít dư thừa; phân biệt tỷ lệ payload với kích thước tệp thực tế.",
            ],
          },
        ],
      },
      {
        id: "encoding",
        title: "Mã hóa đường truyền NRZ và Manchester",
        html: '\n<p>Mã hóa đường truyền ánh xạ bit sang tín hiệu vật lý; khác nén và khác mã hóa bảo mật. Muốn giải bài phải ghi rõ <strong>quy ước mức/chuyển mức</strong> và <strong>trạng thái ban đầu</strong>.</p>\n<div class="study-table"><table><thead><tr><th>Mã</th><th>Quy tắc mẫu</th><th>Đặc điểm</th></tr></thead><tbody>\n<tr><td>NRZ-L</td><td>1 = mức H, 0 = mức L.</td><td>Bit được nhận biết theo mức; chuỗi dài cùng bit thiếu chuyển mức để đồng bộ.</td></tr>\n<tr><td>NRZ-I</td><td>Bit 1 đảo mức ở đầu ô, bit 0 giữ mức.</td><td>Bit được nhận biết theo biến đổi; chuỗi dài bit không đảo vẫn khó đồng bộ.</td></tr>\n<tr><td>Manchester</td><td>Ví dụ quy ước IEEE 802.3: 1 = L→H, 0 = H→L giữa ô bit.</td><td>Luôn có chuyển mức giữa bit hỗ trợ đồng bộ; cần nhiều chuyển mức hơn NRZ.</td></tr>\n</tbody></table></div>\n<pre class="study-code">Bit:                 1   0   1   1   0\nNRZ-L:               H   L   H   H   L\nNRZ-I, trước bit = L: H   H   L   H   H\nManchester:          LH  HL  LH  LH  HL</pre>\n<div class="study-pitfall">Mỗi cặp LH/HL biểu diễn hai nửa của một ô bit. Chuyển mức ở ranh giới hai ô không thay thế chuyển mức giữa ô. Tài liệu có thể dùng ánh xạ Manchester đảo ngược; luôn theo quy ước của đề.</div>',
        prompts: [
          {
            q: "Mã hóa chuỗi 10110 theo ba quy ước trên và giải thích lợi ích đồng bộ của Manchester.",
            a: [
              "Chia rõ năm ô bit và ghi điều kiện khởi đầu cho NRZ-I.",
              "NRZ-L: H L H H L; NRZ-I từ L: H H L H H; Manchester: LH HL LH LH HL.",
              "Manchester cung cấp mốc chuyển giữa mỗi bit; trả giá bằng yêu cầu băng thông/chuyển mức cao hơn khi so cùng tốc độ bit trong mô hình cơ bản.",
            ],
          },
        ],
      },
      {
        id: "rdt",
        title: "RDT, Go-Back-N và Selective Repeat",
        html: '\n<p>RDT là chuỗi mô hình giảng dạy về truyền tin cậy, không phải một bộ phiên bản triển khai của TCP. RDT 1.0 giả định kênh tin cậy; 2.0 xử lý lỗi bit bằng checksum và ACK/NAK nhưng gặp vấn đề khi phản hồi lỗi; 2.1 thêm số thứ tự để loại bản sao; 2.2 dùng ACK thay NAK; 3.0 thêm timeout để xử lý mất gói/phản hồi.</p>\n<div class="study-table"><table><thead><tr><th>Mô hình chuẩn</th><th>Go-Back-N</th><th>Selective Repeat</th></tr></thead><tbody>\n<tr><td>Bên nhận</td><td>Chỉ chấp nhận gói kế tiếp đúng thứ tự.</td><td>Có thể đệm gói đến sai thứ tự trong cửa sổ.</td></tr>\n<tr><td>ACK</td><td>Cộng dồn.</td><td>Xác nhận riêng từng gói.</td></tr>\n<tr><td>Timeout</td><td>Phát lại từ gói chưa ACK lâu nhất và các gói sau đã gửi còn chờ ACK.</td><td>Phát lại gói hết hạn tương ứng.</td></tr>\n<tr><td>Đánh đổi</td><td>Đơn giản phía nhận; có thể gửi lại nhiều.</td><td>Tiết kiệm truyền lại; cần đệm và quản lý phức tạp.</td></tr>\n</tbody></table></div>\n<div class="study-example"><strong>Bài mẫu:</strong> gửi 1–4, gói 2 mất, 3 và 4 đã tới; giả định ACK cộng dồn đã xác nhận gói 1. GBN bỏ 3,4 và khi timeout gửi lại 2,3,4. SR lưu 3,4, ACK riêng và chỉ cần gửi lại 2 nếu không có mất mát thêm.</div>\n<p>Với số thứ tự k bit, không gian có 2<sup>k</sup> giá trị. Mô hình GBN chuẩn: cửa sổ gửi W ≤ 2<sup>k</sup>−1, cửa sổ nhận 1. SR với cửa sổ hai phía bằng nhau: W ≤ 2<sup>k−1</sup> để phân biệt gói cũ/mới khi số thứ tự quay vòng.</p>\n<div class="study-pitfall">ACK có thể mang số “gói cuối đã nhận đúng” hoặc “gói kế tiếp chờ nhận”. Hãy ghi quy ước trước khi tính; đừng chuyển nguyên quy ước ACK byte của TCP sang bài số thứ tự gói.</div>',
        prompts: [
          {
            q: "Với số thứ tự 3 bit, xác định cửa sổ tối đa GBN và SR. Giải thích vì sao SR không được dùng toàn bộ 8 số.",
            a: [
              "Không gian số thứ tự là 8. GBN chuẩn: tối đa 7; SR đối xứng: tối đa 4.",
              "SR giữ gói ngoài thứ tự; cửa sổ quá lớn có thể làm vùng số gói cũ chồng vùng nhận mới sau quay vòng.",
              "Nêu ví dụ mất ACK khiến bản sao gói cũ xuất hiện; nếu vùng chồng nhau, receiver có thể nhận nhầm nó là dữ liệu mới.",
            ],
          },
        ],
      },
    ],
    refTopics: [
      "DNS",
      "HTTP",
      "IPv4",
      "IPv6",
      "TCP",
      "UDP",
      "FTP",
      "Nén dữ liệu",
      "Mã hóa đường truyền",
      "RDT",
      "Go-Back-N",
      "Selective Repeat",
    ],
  },
  {
    id: "3",
    title: "Switching và mạng LAN",
    subtitle: "Switch · Cisco CLI · VLAN · VTP/DTP · STP",
    goals: [
      "Giải thích cách switch học MAC và xử lý từng loại frame.",
      "Đọc cấu hình VLAN/access/trunk và điều kiện hình thành trunk.",
      "Lập luận chọn root bridge, vai trò cổng và cách STP ngăn loop.",
    ],
    topics: [
      {
        id: "switch",
        title: "Switch học và chuyển tiếp frame như thế nào?",
        html: '\n<p>Switch lớp 2 có các cổng, bộ đệm, cơ chế chuyển tiếp và bảng MAC theo VLAN. Bảng ghi ánh xạ <strong>MAC → cổng → VLAN</strong>, thường có thời hạn aging cho bản ghi học động.</p>\n<ol><li>Nhận frame hợp lệ; xác định VLAN của frame.</li><li>Học hoặc cập nhật <strong>MAC nguồn</strong> trên cổng vào.</li><li>Tra <strong>MAC đích</strong>: nếu biết cổng khác thì forward đến cổng đó; nếu nằm ngay cổng vào thì filter, không gửi ngược lại.</li><li>Nếu là unknown unicast hoặc broadcast, flood trong các cổng phù hợp của VLAN, trừ cổng vào và cổng bị chặn. Multicast có thể được xử lý có chọn lọc nhờ cơ chế như snooping.</li></ol>\n<div class="study-example">Bảng MAC ban đầu trống. A ở cổng 1 gửi B: học A→1, flood. B ở cổng 2 trả lời: học B→2, unicast tới cổng 1. Lần tiếp theo A gửi B, switch đã biết cổng 2.</div>\n<div class="study-pitfall">Switch không học vị trí máy từ MAC đích. Flooding không đồng nghĩa gói IP được định tuyến sang mọi mạng. Bảng MAC khác bảng ARP và khác bảng định tuyến.</div>',
        prompts: [
          {
            q: "Mô tả bảng MAC và cổng ra trong hai lần A gửi B, giả sử lần đầu bảng rỗng và B có trả lời.",
            a: [
              "Lần đầu switch học MAC nguồn A và flood do chưa biết B.",
              "Khi B trả lời, học B ở cổng nhận và tra thấy A để unicast.",
              "Lần sau A gửi B, chỉ forward tới cổng của B nếu bản ghi còn hợp lệ.",
              "Xác định mọi thao tác trong cùng VLAN và không flood trở lại cổng vào.",
            ],
          },
        ],
      },
      {
        id: "cli",
        title: "Cisco CLI: chế độ và cấu hình cơ bản",
        html: '\n<div class="study-table"><table><thead><tr><th>Dấu nhắc mẫu</th><th>Chế độ / thao tác</th></tr></thead><tbody>\n<tr><td><code>Router&gt;</code></td><td>User EXEC; <code>enable</code> vào Privileged EXEC.</td></tr>\n<tr><td><code>Router#</code></td><td>Privileged EXEC; <code>configure terminal</code> vào cấu hình toàn cục.</td></tr>\n<tr><td><code>Router(config)#</code></td><td>Global configuration; chọn <code>interface</code> hoặc <code>line</code>.</td></tr>\n<tr><td><code>Router(config-if)#</code></td><td>Cấu hình cổng: IP, trạng thái quản trị…</td></tr>\n<tr><td><code>Router(config-line)#</code></td><td>Cấu hình dòng console/VTY.</td></tr>\n</tbody></table></div>\n<p><code>exit</code> rời một cấp/chế độ hiện tại; trong cấu hình, <code>end</code> trở về Privileged EXEC. <code>show running-config</code> xem cấu hình đang chạy; <code>show startup-config</code> xem cấu hình khởi động; <code>show ip interface brief</code> xem nhanh địa chỉ và trạng thái cổng.</p>\n<pre class="study-code">enable\nconfigure terminal\ninterface gigabitEthernet0/0\n ip address 192.168.10.1 255.255.255.0\n no shutdown\nend\ncopy running-config startup-config</pre>\n<p>Ví dụ trên áp dụng cổng lớp 3 trên router, tên cổng phụ thuộc thiết bị. Cổng switch lớp 2 không được gán IP theo cách này; địa chỉ quản trị thường gán trên SVI. <code>no shutdown</code> chỉ bỏ trạng thái tắt quản trị, không bảo đảm cáp, VLAN và đầu bên kia hoạt động.</p>',
        prompts: [
          {
            q: "Từ Router&gt;, cấu hình IP cho một cổng rồi lưu để giữ sau khi khởi động lại.",
            a: [
              "Dùng enable → configure terminal → interface đúng tên.",
              "Gán ip address với subnet mask, dùng no shutdown, end.",
              "Kiểm tra show ip interface brief và show running-config.",
              "Dùng copy running-config startup-config; giải thích cấu hình đang chạy khác cấu hình sẽ nạp lúc khởi động.",
            ],
          },
        ],
      },
      {
        id: "vlan",
        title: "VLAN, access và trunk",
        html: '\n<p>VLAN tạo các broadcast domain logic trên hạ tầng switch. Static VLAN thường gán membership theo cổng; dynamic membership có thể dựa vào chính sách/nhận dạng, ví dụ VMPS theo MAC trong hệ thống cũ. Hai máy khác VLAN muốn liên lạc IP cần chức năng định tuyến và chính sách cho phép.</p>\n<div class="study-table"><table><thead><tr><th>Access</th><th>Trunk 802.1Q</th></tr></thead><tbody>\n<tr><td>Thông thường một VLAN dữ liệu, frame tới máy đầu cuối không gắn thẻ.</td><td>Chở nhiều VLAN được cho phép trên một liên kết; thẻ xác định VLAN.</td></tr>\n<tr><td>Thường dùng nối máy trạm.</td><td>Thường dùng nối switch hoặc switch với router/hypervisor.</td></tr>\n</tbody></table></div>\n<p>Native VLAN trên trunk 802.1Q thường dùng cho frame không gắn thẻ theo cấu hình mặc định; có thiết bị/cấu hình gắn thẻ cả native VLAN. Hai đầu cần cấu hình nhất quán. Access có voice VLAN là ngoại lệ cần xét nếu đề nêu.</p>\n<pre class="study-code">vlan 10\n name STUDENT\ninterface fastEthernet0/1\n switchport mode access\n switchport access vlan 10\ninterface gigabitEthernet0/1\n switchport mode trunk\n switchport trunk allowed vlan 10,20</pre>\n<div class="study-pitfall">Có trunk chưa đủ để mọi VLAN thông: kiểm tra VLAN đã tồn tại, allowed list, native VLAN và STP. Cùng số VLAN ở hai nơi không bảo đảm có đường nối lớp 2 giữa chúng.</div>',
        prompts: [
          {
            q: "Hai máy VLAN 10 trên hai switch không liên lạc được. Trình bày trình tự kiểm tra.",
            a: [
              "Kiểm tra link và IP/subnet của máy, access port và VLAN membership.",
              "Xác nhận VLAN 10 tồn tại trên cả hai switch, uplink là trunk và cho VLAN 10 đi qua.",
              "Kiểm tra native VLAN nếu có lưu lượng không gắn thẻ, và trạng thái STP.",
              "Phân biệt lỗi lớp 2 này với nhu cầu định tuyến giữa hai VLAN khác nhau.",
            ],
          },
        ],
      },
      {
        id: "vtp-dtp",
        title: "VTP và DTP: hai nhiệm vụ khác nhau",
        html: '\n<p><strong>VTP</strong> phân phối thông tin VLAN trong domain; <strong>DTP</strong> thương lượng trạng thái trunk trên liên kết giữa thiết bị hỗ trợ. DTP không phải giao thức định tuyến và không đồng bộ cơ sở dữ liệu VLAN.</p>\n<p>Với mô hình <strong>VTP v1/v2</strong>: server có thể tạo/sửa/xóa VLAN và quảng bá; client nhận/cập nhật, không tự tạo VLAN theo cách đó; transparent quản lý VLAN cục bộ và không đồng bộ cơ sở dữ liệu theo quảng bá. Việc chuyển tiếp quảng bá ở transparent phụ thuộc phiên bản. Không áp nguyên quy tắc này cho VTP v3 có primary server.</p>\n<p>Revision cao hơn có thể thay cơ sở dữ liệu VLAN khi các điều kiện VTP tương thích. Trước khi ghép switch, phải kiểm tra domain, version, mode và revision để tránh đưa cơ sở dữ liệu không mong muốn vào hệ thống.</p>\n<div class="study-table"><table><thead><tr><th>Hai đầu DTP</th><th>Kết quả kỳ vọng</th></tr></thead><tbody>\n<tr><td>Dynamic auto + dynamic auto</td><td>Không tự tạo trunk.</td></tr>\n<tr><td>Dynamic desirable + dynamic auto</td><td>Có thể tạo trunk.</td></tr>\n<tr><td>Dynamic desirable + dynamic desirable</td><td>Có thể tạo trunk.</td></tr>\n<tr><td>Access + auto/desirable</td><td>Không tạo trunk.</td></tr>\n</tbody></table></div>\n<p>Bảng giả định hai thiết bị hỗ trợ DTP và tương thích. Khi cấu hình trunk tĩnh với thiết bị không hỗ trợ DTP, cấu hình hai đầu rõ ràng; <code>switchport nonegotiate</code> dùng để tắt thương lượng trên thiết bị hỗ trợ.</p>',
        prompts: [
          {
            q: "Giải thích vì sao VTP hoạt động không có nghĩa hai cổng dynamic auto sẽ tạo trunk.",
            a: [
              "VTP xử lý thông tin VLAN; DTP quyết định thương lượng trunk, là hai cơ chế khác nhau.",
              "Hai đầu auto đều thụ động nên không chủ động hình thành trunk.",
              "Dùng desirable ở phía phù hợp hoặc trunk tĩnh; kiểm tra hỗ trợ thiết bị, allowed VLAN và cấu hình hai đầu.",
              "Nêu rủi ro revision của VTP và giới hạn theo phiên bản.",
            ],
          },
        ],
      },
      {
        id: "stp",
        title: "STP: từ loop vật lý đến cây chuyển tiếp",
        html: '\n<p>Ethernet lớp 2 không có TTL cho frame. Vòng lặp có thể làm broadcast lan truyền liên tục, tạo bản sao frame và khiến bảng MAC thay đổi bất thường. STP dùng BPDU để chọn cây không vòng lặp, giữ một số đường dự phòng ở trạng thái không chuyển tiếp dữ liệu.</p>\n<ol><li><strong>Chọn root bridge:</strong> Bridge ID nhỏ nhất. So sánh priority (kèm extended system ID trong mô hình tương ứng), rồi MAC. Với cùng VLAN, xét priority trước MAC.</li><li><strong>Root port:</strong> trên mỗi switch không phải root, chọn đường có tổng cost tới root thấp nhất. Hòa thì xét thông tin BPDU: sender BID, sender port ID; có thể tới local port ID khi vẫn hòa.</li><li><strong>Designated port:</strong> trên mỗi segment, cổng quảng bá đường tốt nhất tới root.</li><li>Cổng dư không thuộc cây không forward dữ liệu. STP cổ điển dùng blocking; RSTP dùng trạng thái discarding và có vai trò alternate/backup.</li></ol>\n<div class="study-example">Cùng một VLAN: A priority 24.576, B priority 32.768 → A thắng dù MAC lớn hơn. Nếu priority bằng nhau, MAC nhỏ hơn thắng. Root bridge không có root port; các cổng hoạt động của root thường là designated trong topology thông thường.</div>\n<div class="study-pitfall">Không chọn root port chỉ vì cổng có số nhỏ nhất. Cũng không bỏ qua cost để chọn switch có MAC thấp nhất cho mọi vai trò.</div>',
        prompts: [
          {
            q: "Khi đề cho sơ đồ switch, cost và Bridge ID, hãy nêu thuật toán xác định các cổng bị chặn.",
            a: [
              "Tìm root bridge bằng BID nhỏ nhất.",
              "Tính tổng cost tới root cho các đường; chọn root port cho từng switch không phải root theo thứ tự phá hòa.",
              "Xét từng segment để chọn designated port.",
              "Đánh dấu cổng dư không forwarding; kiểm tra vẫn kết nối được mọi switch và không còn vòng chuyển tiếp.",
            ],
          },
        ],
      },
    ],
    refTopics: ["Switch", "Cisco CLI", "VLAN", "VTP", "STP", "DTP"],
  },
  {
    id: "4",
    title: "Routing và dịch vụ mạng",
    subtitle: "Router · Định tuyến · NAT/PAT · ACL · DHCP",
    goals: [
      "Đọc bảng định tuyến bằng longest-prefix match và giải thích next hop.",
      "Phân biệt NAT/PAT, các loại địa chỉ NAT và thứ tự xử lý ACL.",
      "Mô tả cấp phát DHCP và chẩn đoán lỗi theo từng bước.",
    ],
    topics: [
      {
        id: "routing",
        title: "Router và lựa chọn đường đi",
        html: '\n<p>Router kết nối các mạng lớp 3. Bảng định tuyến mô tả prefix đích, next hop hoặc interface ra cùng thông tin nguồn tuyến và metric. Khi gói đến, router tìm tuyến khớp <strong>dài nhất</strong> với IP đích (longest-prefix match). Nếu không có tuyến phù hợp, kể cả default route, gói bị loại.</p>\n<div class="study-table"><table><thead><tr><th>Kiểu tuyến</th><th>Cách có tuyến</th><th>Đánh đổi</th></tr></thead><tbody>\n<tr><td>Connected</td><td>Mạng gắn trực tiếp với interface lớp 3 hoạt động và được cấu hình.</td><td>Cơ sở cho khả năng tới next hop.</td></tr>\n<tr><td>Static</td><td>Người quản trị cấu hình.</td><td>Dễ kiểm soát; cập nhật thủ công khi topology thay đổi.</td></tr>\n<tr><td>Default</td><td>Prefix 0.0.0.0/0 cho IPv4; có thể học tĩnh hoặc động.</td><td>Dùng khi không có tuyến cụ thể hơn.</td></tr>\n<tr><td>Dynamic</td><td>Giao thức trao đổi thông tin, tự tính tuyến.</td><td>Thích ứng thay đổi; cần tài nguyên và thời gian hội tụ.</td></tr>\n</tbody></table></div>\n<p>RIP dùng metric hop count, tối đa 15 hop khả dụng, 16 là không tới được. OSPF là link-state, tính đường ngắn nhất theo cost. Administrative distance giúp lựa chọn nguồn tuyến cho cùng prefix trên thiết bị như Cisco; không được dùng nó để bỏ qua longest-prefix match.</p>\n<pre class="study-code">ip route 192.168.20.0 255.255.255.0 10.0.0.2\nip route 0.0.0.0 0.0.0.0 10.0.0.2</pre>\n<div class="study-example">Đích 192.168.20.70 khớp /24 và 192.168.20.64/26: chọn /26, không chọn default route. Hai chiều liên lạc đều cần đường đi phù hợp; có đường A→B chưa bảo đảm B→A.</div>',
        prompts: [
          {
            q: "So sánh static, default và dynamic routing. Giải thích lựa chọn tuyến khi /0, /24 và /26 cùng khớp.",
            a: [
              "Static/dynamic mô tả nguồn tạo tuyến; default mô tả độ cụ thể của prefix, không phải một loại đối lập hoàn toàn.",
              "Tuyến /26 cụ thể nhất nên được chọn nếu tồn tại và khớp đích.",
              "Giải thích metric chọn tuyến trong giao thức, AD lựa chọn nguồn tuyến cùng prefix trên Cisco.",
              "Kiểm tra next hop tới được, interface hoạt động và tuyến chiều về.",
            ],
          },
        ],
      },
      {
        id: "nat",
        title: "NAT/PAT và bốn loại địa chỉ",
        html: '\n<p><strong>Static NAT</strong> ánh xạ cố định một–một. <strong>Dynamic NAT</strong> cấp ánh xạ từ một pool. <strong>PAT/NAT overload</strong> phân biệt nhiều luồng bằng địa chỉ và port hoặc định danh phù hợp, cho phép nhiều máy chia sẻ địa chỉ dịch.</p>\n<div class="study-table"><table><thead><tr><th>Tên</th><th>Cách hiểu</th></tr></thead><tbody>\n<tr><td>Inside local</td><td>Địa chỉ máy bên trong như được dùng ở phía mạng trong.</td></tr>\n<tr><td>Inside global</td><td>Địa chỉ đại diện máy bên trong khi nhìn từ phía ngoài.</td></tr>\n<tr><td>Outside global</td><td>Địa chỉ máy bên ngoài trong mạng ngoài.</td></tr>\n<tr><td>Outside local</td><td>Địa chỉ đại diện máy bên ngoài khi nhìn từ phía trong.</td></tr>\n</tbody></table></div>\n<div class="study-example">Ví dụ PAT: 192.168.1.10:51000 → 203.0.113.5:40001 và 192.168.1.11:51000 → 203.0.113.5:40002. Bảng dịch phân biệt hai máy nhờ port sau dịch. Các địa chỉ 203.0.113.0/24 dùng minh họa tài liệu.</div>\n<p>Outside local và outside global có thể bằng nhau khi không dịch phía outside. Khi giải bài, vẽ ranh giới inside/outside và ghi địa chỉ trước/sau dịch cho cả hai chiều.</p>\n<div class="study-pitfall">NAT không thay thế firewall hay mã hóa. PAT không chỉ là “thêm một địa chỉ IP”; nó cần bảng trạng thái và định danh để đưa lưu lượng trở về đúng luồng.</div>',
        prompts: [
          {
            q: "Hai máy dùng cùng cổng nguồn truy cập Internet qua một IP công cộng. PAT phân biệt phản hồi ra sao?",
            a: [
              "Mô tả hai tuple trước dịch và hai mapping sau dịch có port khác nhau trong ví dụ.",
              "Dùng bảng dịch để ánh xạ phản hồi về đúng địa chỉ/cổng bên trong.",
              "Nêu giao thức và trạng thái ánh xạ liên quan; không coi một port toàn cục là dành vĩnh viễn cho một máy.",
              "Phân biệt địa chỉ inside local với inside global và chức năng bảo mật của firewall.",
            ],
          },
        ],
      },
      {
        id: "acl",
        title: "ACL: đọc từ trên xuống và dừng ở dòng đầu khớp",
        html: '\n<p>Trong ACL IPv4 Cisco thông thường, <strong>standard ACL</strong> chủ yếu lọc theo IP nguồn; <strong>extended ACL</strong> có thể xét giao thức, nguồn/đích và port khi phù hợp. Các ACE được xét theo thứ tự; kết quả của dòng đầu tiên khớp quyết định permit/deny. Cuối ACL có implicit deny.</p>\n<p><strong>Wildcard:</strong> bit 0 bắt buộc khớp; bit 1 bỏ qua. Với subnet mask liên tục, wildcard thường tính bằng 255.255.255.255 trừ subnet mask. Wildcard không bắt buộc luôn liên tục trong mọi trường hợp.</p>\n<pre class="study-code">access-list 10 permit 192.168.1.0 0.0.0.255</pre>\n<p>ACL standard trên cho phép nguồn 192.168.1.x theo điều kiện của dòng; không có nghĩa chỉ cho phép truy cập đích mạng đó. ACL chỉ có hiệu lực lọc khi được áp đúng interface và chiều hoặc được dùng bởi tính năng tương ứng.</p>\n<div class="study-example">“permit any” đứng trước “deny host 192.168.1.9” làm dòng deny không bao giờ chặn được nguồn đó. Đảo thứ tự thì host bị chặn trước khi xét permit any.</div>\n<div class="study-pitfall">Quy tắc đặt standard gần đích, extended gần nguồn là hướng dẫn thiết kế phổ biến; vẫn phải phân tích topology, các luồng cần cho phép và chiều in/out cụ thể.</div>',
        prompts: [
          {
            q: "Phân tích một ACL cho phép mạng 192.168.1.0/24 nhưng chặn riêng 192.168.1.9.",
            a: [
              "Đặt deny host 192.168.1.9 trước permit 192.168.1.0 0.0.0.255.",
              "Thử lần lượt với .9, .10 và một nguồn ngoài /24; lưu ý implicit deny.",
              "Chỉ ra ACL standard đang kiểm tra địa chỉ nguồn.",
              "Xác định interface và chiều áp dụng; nêu tác động đến các luồng khác trước khi kết luận.",
            ],
          },
        ],
      },
      {
        id: "dhcp",
        title: "DHCP: DORA và thông số máy trạm nhận được",
        html: '\n<div class="study-flow">Discover → Offer → Request → ACK</div>\n<p>Trong cấp phát lần đầu điển hình, client tìm server; server đề nghị cấu hình; client yêu cầu lựa chọn; server xác nhận lease. Client dùng UDP 68, server UDP 67. Các bước đầu thường cần broadcast do client chưa có cấu hình IP, nhưng không kết luận mọi gói DHCP đều broadcast.</p>\n<p>Thông tin cấp có thể gồm IP, subnet mask, default gateway, DNS và lease time. Pool là tập địa chỉ có thể cấp; exclusion/reservation giới hạn hoặc cố định việc cấp theo thiết kế. Lease không phải quyền dùng địa chỉ vô thời hạn.</p>\n<p>Router thường không chuyển broadcast lớp 2 qua subnet. DHCP relay chuyển tiếp thông điệp phù hợp để client ở subnet khác dùng được server. Khi gia hạn, client đã có IP nên quy trình và kiểu gửi có thể khác DORA ban đầu.</p>\n<div class="study-example">Máy nhận đúng IP/mask nhưng không đi mạng ngoài: kiểm tra gateway và routing. Truy cập bằng IP được nhưng bằng tên không được: kiểm tra DNS. Địa chỉ tự gán 169.254.x.x trên Windows thường gợi ý chưa nhận được cấu hình DHCP IPv4 phù hợp, nhưng cần kiểm tra thêm.</div>',
        prompts: [
          {
            q: "Giải thích DORA và chẩn đoán máy có IP nhưng không mở được website bằng tên miền.",
            a: [
              "Nêu vai trò client/server trong từng bước và lease time.",
              "Kiểm tra IP, mask, gateway, DNS được cấp; phân biệt DHCP cấp cấu hình với DNS phân giải tên.",
              "Kiểm tra tới gateway, tới IP đích nếu phù hợp, rồi nslookup để tách lỗi mạng và lỗi phân giải.",
              "Nếu khác subnet với DHCP server, xem relay và đường đi hai chiều.",
            ],
          },
        ],
      },
    ],
    refTopics: ["Router", "Routing", "NAT", "ACL", "DHCP"],
  },
  {
    id: "5",
    title: "WLAN, GSM và quản trị cơ bản",
    subtitle: "BSS/ESS/IBSS · Kiến trúc GSM · An toàn WLAN · Windows",
    goals: [
      "Phân biệt mô hình WLAN và vai trò các thành phần GSM.",
      "Giải thích nguy cơ WLAN ở mức nguyên lý và phòng chống.",
      "Chọn đúng lệnh Windows để khoanh vùng sự cố kết nối.",
    ],
    topics: [
      {
        id: "wlan",
        title: "WLAN: BSS, ESS và IBSS",
        html: '\n<div class="study-table"><table><thead><tr><th>Khái niệm</th><th>Nội dung trọng tâm</th></tr></thead><tbody>\n<tr><td>Infrastructure BSS</td><td>Một AP và các station liên kết với nó; AP kết nối với distribution system khi có.</td></tr>\n<tr><td>ESS</td><td>Nhiều infrastructure BSS được nối qua distribution system, tạo dịch vụ WLAN mở rộng.</td></tr>\n<tr><td>IBSS</td><td>Mô hình ad hoc cổ điển: station liên lạc trực tiếp, không có AP trung tâm.</td></tr>\n<tr><td>SSID / BSSID</td><td>SSID là tên mạng; BSSID xác định BSS, thường gắn với địa chỉ MAC của radio/AP trong infrastructure.</td></tr>\n</tbody></table></div>\n<p>Nhiều AP phát cùng SSID không tự bảo đảm roaming liền mạch: còn phụ thuộc mạng phân phối, xác thực, cấu hình và khả năng client. Phủ sóng tốt cũng không đồng nghĩa thông lượng cao nếu nhiều thiết bị tranh chấp cùng kênh.</p>\n<p><strong>CSMA/CA:</strong> station cảm nhận kênh và dùng backoff để giảm khả năng phát đồng thời; ACK hỗ trợ biết frame được nhận. RTS/CTS có thể hỗ trợ trường hợp hidden node. Cơ chế tránh va chạm không loại bỏ hoàn toàn va chạm và khác CSMA/CD của Ethernet bán song công.</p>',
        prompts: [
          {
            q: "Một tòa nhà có nhiều tầng cần Wi-Fi. Giải thích cách dùng BSS/ESS và các yếu tố ảnh hưởng roaming.",
            a: [
              "Mỗi vùng có AP/BSS; các BSS nối qua distribution system để mở rộng dịch vụ.",
              "SSID giúp nhận biết tên mạng; BSSID phân biệt từng BSS.",
              "Nêu tính nhất quán cấu hình/xác thực, vùng phủ chồng hợp lý và kế hoạch kênh.",
              "Không hứa hẹn roaming không gián đoạn chỉ vì cùng SSID; client và ứng dụng cũng ảnh hưởng.",
            ],
          },
        ],
      },
      {
        id: "gsm",
        title: "GSM: nhớ chức năng để mô tả hành trình cuộc gọi",
        html: '\n<div class="study-table"><table><thead><tr><th>Thành phần GSM cổ điển</th><th>Vai trò</th></tr></thead><tbody>\n<tr><td>Mobile Station (MS)</td><td>Thiết bị di động cùng SIM; đầu cuối của thuê bao.</td></tr>\n<tr><td>BTS</td><td>Trạm thu phát vô tuyến giao tiếp với MS trong vùng phủ.</td></tr>\n<tr><td>BSC</td><td>Điều khiển nhiều BTS, quản lý tài nguyên vô tuyến và hỗ trợ handover.</td></tr>\n<tr><td>MSC</td><td>Chuyển mạch dịch vụ thoại và quản lý di động ở cấp mạng.</td></tr>\n<tr><td>HLR</td><td>Cơ sở dữ liệu thuê bao thường trú, thông tin dịch vụ và tham chiếu vị trí phục vụ.</td></tr>\n<tr><td>VLR</td><td>Thông tin tạm về thuê bao đang ở vùng phục vụ liên quan.</td></tr>\n</tbody></table></div>\n<div class="study-flow">MS ↔ BTS ↔ BSC ↔ MSC ↔ Mạng khác<br>MSC ↔ VLR / HLR (thông tin thuê bao, vị trí)</div>\n<p><strong>Cell</strong> là vùng phục vụ vô tuyến; ranh giới thực tế phụ thuộc môi trường, không phải hình lục giác hoàn hảo. <strong>Handover</strong> chuyển kết nối đang phục vụ sang tài nguyên/cell khác để duy trì dịch vụ. Cấp điều khiển tham gia phụ thuộc việc đổi BTS, BSC hay MSC.</p>\n<div class="study-pitfall">HLR/VLR lưu thông tin thuê bao/vị trí phục vụ, không phải thiết bị phát sóng. Handover khi di chuyển khác việc bắt đầu cuộc gọi mới.</div>',
        prompts: [
          {
            q: "Mô tả vai trò BTS, BSC, MSC, HLR và VLR khi thuê bao di chuyển giữa các cell.",
            a: [
              "BTS xử lý giao tiếp vô tuyến; BSC điều khiển tài nguyên ở các BTS thuộc phạm vi của nó.",
              "MSC phụ trách chuyển mạch và quản lý di động ở cấp tương ứng.",
              "HLR giữ hồ sơ thường trú, VLR giữ thông tin phục vụ tạm thời trong vùng.",
              "Nêu handover duy trì kết nối; cấp mạng phối hợp phụ thuộc phạm vi di chuyển.",
            ],
          },
        ],
      },
      {
        id: "security",
        title: "An toàn WLAN: nhận biết, tác động, phòng chống",
        html: '\n<div class="study-table"><table><thead><tr><th>Nguy cơ</th><th>Nguyên lý / tác động</th><th>Hướng phòng chống</th></tr></thead><tbody>\n<tr><td>Nghe lén thụ động</td><td>Quan sát lưu lượng để lấy nội dung hoặc metadata mà không chủ động sửa luồng.</td><td>Mã hóa liên kết phù hợp, TLS, bảo vệ khóa.</td></tr>\n<tr><td>Tấn công chủ động / MITM</td><td>Chèn, sửa hoặc trung gian hóa liên lạc để đánh cắp/thay đổi dữ liệu.</td><td>Xác thực AP/server, kiểm tra chứng chỉ, dùng giao thức đầu cuối an toàn.</td></tr>\n<tr><td>MAC/AP/SSID spoofing</td><td>Giả định danh thiết bị hoặc mạng khiến người dùng/hệ thống tin nhầm.</td><td>Không coi tên SSID hoặc lọc MAC là bằng chứng xác thực; quản lý AP và cấu hình client.</td></tr>\n<tr><td>Lạm dụng truy cập môi trường / DoS</td><td>Chiếm thời gian kênh hoặc gây cạn tài nguyên làm giảm khả năng phục vụ.</td><td>Giám sát, phân đoạn, giới hạn tài nguyên phù hợp, phát hiện AP lạ và xử lý nhiễu.</td></tr>\n</tbody></table></div>\n<p>Dùng cơ chế bảo vệ WLAN được thiết bị hỗ trợ, cập nhật firmware, tách mạng khách và quản trị, dùng mật khẩu mạnh hoặc xác thực doanh nghiệp phù hợp. Mã hóa không ngăn được mọi kiểu gây nhiễu/DoS. Mục này chỉ phục vụ nhận biết và phòng chống.</p>',
        prompts: [
          {
            q: "Một AP lạ phát cùng tên Wi-Fi của trường. Phân tích nguy cơ và cách phòng chống.",
            a: [
              "Cùng SSID chưa chứng minh cùng chủ quản; đây có thể là giả mạo AP/SSID.",
              "Nêu khả năng đánh lừa người dùng và trung gian hóa lưu lượng; TLS đúng cách vẫn là lớp bảo vệ quan trọng.",
              "Xác minh cấu hình xác thực/chứng chỉ, tránh tự động nối mạng lạ; quản trị viên kiểm kê và phát hiện AP không được phép.",
              "Không khuyến nghị chỉ ẩn SSID hoặc chỉ lọc MAC như biện pháp bảo vệ đầy đủ.",
            ],
          },
        ],
      },
      {
        id: "windows",
        title: "Windows: chọn lệnh theo triệu chứng",
        html: '\n<div class="study-table"><table><thead><tr><th>Lệnh</th><th>Thông tin / mục đích</th></tr></thead><tbody>\n<tr><td><code>ipconfig</code></td><td>Xem cấu hình IP cơ bản.</td></tr>\n<tr><td><code>ipconfig /all</code></td><td>Xem thêm DHCP, DNS, địa chỉ vật lý và lease.</td></tr>\n<tr><td><code>netsh wlan show interfaces</code></td><td>Trạng thái Wi-Fi, SSID, tín hiệu và thông số kết nối.</td></tr>\n<tr><td><code>netsh wlan show profiles</code></td><td>Liệt kê hồ sơ Wi-Fi đã lưu.</td></tr>\n<tr><td><code>netsh wlan show drivers</code></td><td>Thông tin driver và khả năng Wi-Fi mà driver báo cáo.</td></tr>\n<tr><td><code>ping</code></td><td>Kiểm tra phản hồi ICMP và thời gian khứ hồi.</td></tr>\n<tr><td><code>tracert</code></td><td>Quan sát các hop trả lời trên đường đi.</td></tr>\n<tr><td><code>nslookup</code></td><td>Kiểm tra phân giải DNS và máy chủ được hỏi.</td></tr>\n<tr><td><code>arp -a</code></td><td>Xem cache ánh xạ IPv4–địa chỉ liên kết trên mạng cục bộ.</td></tr>\n</tbody></table></div>\n<p><strong>Trình tự chẩn đoán:</strong> kết nối Wi-Fi → cấu hình IP → gateway → đường ra mạng đích → DNS → dịch vụ ứng dụng. Mỗi phép thử chỉ cung cấp một phần bằng chứng; ICMP có thể bị chặn, nên ping/tracert thất bại chưa đủ kết luận máy đích tắt hoặc toàn bộ Internet mất.</p>\n<div class="study-example">Wi-Fi báo connected nhưng mở web lỗi: xem interfaces và ipconfig /all; kiểm tra gateway; thử DNS bằng nslookup. Nếu DNS trả lời đúng mà web vẫn lỗi, tiếp tục kiểm tra dịch vụ, proxy hoặc chứng chỉ thay vì kết luận DNS hỏng.</div>',
        prompts: [
          {
            q: "Lập quy trình dùng lệnh Windows để phân biệt lỗi Wi-Fi, DHCP, routing và DNS.",
            a: [
              "show interfaces kiểm tra liên kết Wi-Fi; ipconfig /all kiểm tra IP/mask/gateway/DNS và DHCP.",
              "Dùng ping tới gateway hoặc đích phù hợp; tracert bổ sung thông tin đường đi, kèm giới hạn ICMP.",
              "nslookup kiểm tra tên miền và DNS server.",
              "Ghi kết quả từng bước, khoanh vùng rồi mới đề xuất sửa; không dùng một lệnh duy nhất để kết luận mọi lỗi.",
            ],
          },
        ],
      },
    ],
    refTopics: ["WLAN", "GSM", "An toàn WLAN", "Windows"],
  },
];
