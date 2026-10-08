/* Classic scripts and hash routes also work over file:// without a server. */
(function () {
  "use strict";
  const E = QuizEngine,
    S = QuizStorage,
    main = document.querySelector("main"),
    dialog = document.querySelector("dialog");
  let db = S.read(),
    reviewIndex = 0,
    filter = "all",
    reviewId = null,
    pending = null;
  const esc = (s) =>
    String(s ?? "").replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[c],
    );
  const pad = (n) => String(n).padStart(2, "0");
  const time = (n) => pad(Math.floor(n / 60)) + ":" + pad(n % 60);
  const save = () => S.write(db);
  const go = (hash) => {
    if (location.hash === hash) render();
    else location.hash = hash;
  };
  const title = (label, heading, sub, action = "") =>
    '<div class="page-top"><div><span class="eyebrow">' +
    label +
    "</span><h1>" +
    esc(heading) +
    "</h1><p>" +
    esc(sub) +
    "</p></div>" +
    action +
    "</div>";
  const btn = (text, action, cls = "") =>
    '<button class="btn ' +
    cls +
    '" data-action="' +
    action +
    '">' +
    text +
    "</button>";
  const progress = (done, total) =>
    '<div class="progress" role="progressbar" aria-label="Tiến độ" aria-valuenow="' +
    done +
    '" aria-valuemin="0" aria-valuemax="' +
    total +
    '"><span style="width:' +
    (done / total) * 100 +
    '%"></span></div>';
  const empty = (heading, text, link = "#home", label = "Về trang chủ") =>
    '<div class="panel empty"><h2>' +
    heading +
    "</h2><p>" +
    text +
    '</p><a class="btn" href="' +
    link +
    '">' +
    label +
    "</a></div>";
  const groupTopics = {
    OSI: ["OSI"],
    Topology: ["Topology"],
    Repeater: ["Repeater"],
    "TCP/UDP": ["TCP", "UDP"],
    "IPv4/IPv6": ["IPv4", "IPv6"],
    "DNS/HTTP": ["DNS", "HTTP"],
    FTP: ["FTP"],
    "Nén dữ liệu": ["Nén dữ liệu"],
    "Mã hóa đường truyền": ["Mã hóa đường truyền"],
    RDT: ["RDT"],
    "GBN/SR": ["Go-Back-N", "Selective Repeat"],
    Switch: ["Switch"],
    Router: ["Router", "Routing"],
    "Cisco CLI": ["Cisco CLI"],
    VLAN: ["VLAN"],
    NAT: ["NAT"],
    ACL: ["ACL"],
    DHCP: ["DHCP"],
    "VTP/STP/DTP": ["VTP", "STP", "DTP"],
    WLAN: ["WLAN"],
    "An toàn WLAN": ["An toàn WLAN"],
    Windows: ["Windows"],
    GSM: ["GSM"],
  };
  function home() {
    const exams = Object.entries(EXAMS).sort(
      (a, b) => Number(a[0]) - Number(b[0]),
    );
    const completed = new Set(
      db.history.filter((h) => h.mode === "exam").map((h) => h.examId),
    ).size;
    main.innerHTML =
      title(
        "SẴN SÀNG CHO KỲ THI",
        "Mỗi lần luyện, thêm tự tin.",
        "Chọn một đề thi và kiểm tra kiến thức Mạng máy tính của bạn.",
        '<span class="date-note">Tự học theo nhịp của bạn</span>',
      ) +
      (db.active
        ? '<div class="resume"><div><strong>Bạn có bài đang làm: ' +
          esc(db.active.title) +
          "</strong><p>Đã trả lời " +
          db.active.answers.filter((a) => a !== null).length +
          "/" +
          db.active.items.length +
          " câu · " +
          (db.active.deadline
            ? "Thời gian vẫn đang tính"
            : "Không giới hạn thời gian") +
          '</p></div><a class="btn" href="#exam">Tiếp tục làm bài</a></div>'
        : "") +
      '<div class="home-layout"><section><div class="welcome"><div><span class="eyebrow">BỘ ĐỀ TỔNG HỢP</span><h2>Ôn tập trọn vẹn 5 chương</h2><p>Từ mô hình OSI đến mạng không dây. Mỗi câu hỏi đều có đáp án và giải thích để bạn hiểu sâu hơn.</p><div class="stat-strip"><div><strong>' +
      exams.length +
      "</strong><span>Đề thi</span></div><div><strong>" +
      E.bank().length +
      "</strong><span>Câu hỏi</span></div><div><strong>" +
      E.EXAM_TIME +
      '′</strong><span>Mỗi đề</span></div></div></div><div class="welcome-mark" aria-hidden="true">01–05</div></div><div class="section-head"><h2>Chọn đề thi thử</h2><p>50 câu / đề · Thang điểm 10</p></div><div class="exam-grid">' +
      exams
        .map(([id, qs]) => {
          const history = db.history.filter(
            (h) => h.examId === id && h.mode === "exam",
          );
          const best = history.length
            ? Math.max(...history.map((h) => E.score(h).points))
            : null;
          return (
            '<article class="exam-card"><div class="card-top"><div class="exam-number"><span class="number-tile">' +
            id +
            "</span><h3>Đề " +
            id +
            '</h3></div><span class="tag ' +
            (history.length ? "done" : "") +
            '">' +
            (history.length ? "Cao nhất: " + best + "/10" : "Chưa làm") +
            '</span></div><div class="exam-meta"><span>◷ ' +
            E.EXAM_TIME +
            " phút</span><span>▤ " +
            qs.length +
            " câu hỏi</span></div>" +
            btn(
              "Bắt đầu làm bài",
              "start:" + id,
              history.length ? "secondary" : "soft",
            ) +
            "</article>"
          );
        })
        .join("") +
      '</div></section><aside class="side-stack"><div class="panel"><div class="panel-label">NỘI DUNG MỖI ĐỀ</div>' +
      [
        ["01", "Tổng quan mạng", "Topology, OSI, thiết bị · 6 câu"],
        ["02", "Giao thức & truyền dữ liệu", "TCP/IP, RDT, mã hóa · 18 câu"],
        ["03–04", "Switching & Routing", "VLAN, NAT, ACL, STP · 18 câu"],
        ["05", "Mạng không dây", "WLAN, GSM, quản trị · 8 câu"],
      ]
        .map(
          (x) =>
            '<div class="topic-line"><span class="topic-icon">' +
            x[0] +
            "</span><div><strong>" +
            x[1] +
            "</strong><small>" +
            x[2] +
            "</small></div></div>",
        )
        .join("") +
      '<div class="note">Đáp án và lời giải xuất hiện sau khi nộp bài.</div></div><div class="panel study-home-card"><div class="panel-label">KIẾN THỨC TRỌNG TÂM</div><h3>Ôn tự luận theo chương</h3><p>5 chương, 24 chủ đề, ví dụ và dàn ý trả lời để nắm chắc bản chất.</p><a class="btn full" href="#study">Mở sổ tay ôn tập →</a></div><div class="panel"><div class="panel-label">LUYỆN TẬP CÓ TRỌNG TÂM</div><h3>Củng cố phần còn yếu</h3><p>Chọn chủ đề, số câu và luyện tập không áp lực thời gian.</p><a class="btn secondary full" href="#practice">Luyện theo chủ đề</a></div><div class="panel"><div class="panel-label">HÀNH TRÌNH CỦA BẠN</div><div class="streak-num">' +
      completed +
      ' <small class="muted">/ 10 đề</small></div><p>đã hoàn thành</p><div class="note" style="margin-top:18px">' +
      Object.keys(db.mistakes).length +
      ' câu sai cần ôn lại</div><a href="#history" class="btn secondary full">Xem lịch sử</a></div></aside></div>';
  }
  function ask(heading, text, confirm, callback) {
    pending = callback;
    document.querySelector("#modal-title").textContent = heading;
    document.querySelector("#modal-text").textContent = text;
    document.querySelector("#modal-confirm").textContent = confirm;
    dialog.returnValue = "";
    dialog.showModal();
  }
  dialog.addEventListener("close", () => {
    const cb = pending;
    pending = null;
    if (dialog.returnValue === "confirm" && cb) cb();
  });
  function start(qs, name, mode = "exam", id = null) {
    const run = () => {
      db.active = E.create(qs, name, mode, id);
      save();
      go("#exam");
    };
    if (db.active)
      ask(
        "Bắt đầu bài mới?",
        "Tiến độ bài đang làm sẽ được thay bằng bài mới. Lịch sử đã nộp vẫn được giữ.",
        "Bắt đầu bài mới",
        run,
      );
    else run();
  }
  function finish(auto = false) {
    if (!db.active) return;
    const result = E.submit(db, Date.now(), auto);
    save();
    if (dialog.open) {
      pending = null;
      dialog.close();
    }
    go("#result/" + result.id);
  }
  function nav(s, indices, review = false) {
    return (
      '<div class="navigator" aria-label="Danh sách câu hỏi">' +
      indices
        .map((i) => {
          const st = E.status(s, i);
          const state = review
            ? st === "correct"
              ? "right"
              : st === "wrong"
                ? "wrong"
                : ""
            : s.answers[i] !== null
              ? "answered"
              : "";
          return (
            '<button class="nav-q ' +
            state +
            " " +
            ((review ? reviewIndex : s.current) === i ? "current " : "") +
            (s.flags[i] ? "marked" : "") +
            '" data-action="' +
            (review ? "reviewgoto:" : "goto:") +
            i +
            '" aria-label="Câu ' +
            (i + 1) +
            ", " +
            (review
              ? { correct: "đúng", wrong: "sai", unanswered: "chưa trả lời" }[
                  st
                ]
              : s.answers[i] !== null
                ? "đã trả lời"
                : "chưa trả lời") +
            (s.flags[i] ? ", đã đánh dấu" : "") +
            '" ' +
            ((review ? reviewIndex : s.current) === i
              ? 'aria-current="step"'
              : "") +
            ">" +
            (i + 1) +
            "</button>"
          );
        })
        .join("") +
      "</div>"
    );
  }
  function questionHTML(s, i, review = false) {
    const q = E.question(s, i),
      st = E.status(s, i);
    return (
      '<div class="question-meta"><div class="chips"><span class="tag">' +
      esc(q.chapter) +
      '</span><span class="tag">' +
      esc(q.topic) +
      '</span><span class="tag">' +
      esc(q.difficulty) +
      "</span></div>" +
      (review
        ? ""
        : '<button class="flag ' +
          (s.flags[i] ? "flagged" : "") +
          '" data-action="flag" aria-pressed="' +
          s.flags[i] +
          '">⚑ ' +
          (s.flags[i] ? "Đã đánh dấu" : "Đánh dấu câu này") +
          "</button>") +
      '</div><span class="eyebrow">CÂU ' +
      (i + 1) +
      " / " +
      s.items.length +
      '</span><h2 class="question-title" id="question-title" tabindex="-1">' +
      esc(q.question) +
      "</h2>" +
      (review
        ? '<p class="review-status ' +
          (st === "correct" ? "green" : st === "wrong" ? "red" : "muted") +
          '">' +
          {
            correct: "✓ Chính xác",
            wrong: "✕ Chưa chính xác",
            unanswered: "— Bạn chưa trả lời câu này",
          }[st] +
          "</p>"
        : "") +
      '<fieldset class="answer-list"><legend class="sr-only">Chọn một đáp án</legend>' +
      q.options
        .map((o, j) => {
          const selected = s.answers[i] === j;
          const cls = review
            ? j === q.answer
              ? "correct"
              : selected
                ? "incorrect"
                : ""
            : selected
              ? "selected"
              : "";
          return (
            "<" +
            (review ? "div" : "label") +
            ' class="answer ' +
            cls +
            '">' +
            (review
              ? ""
              : '<input type="radio" name="answer" value="' +
                j +
                '" ' +
                (selected ? "checked" : "") +
                ">") +
            '<span class="letter">' +
            String.fromCharCode(65 + j) +
            "</span><span>" +
            esc(o) +
            "</span>" +
            (review && j === q.answer
              ? '<span class="answer-status">✓ Đáp án đúng' +
                (selected ? " · Bạn chọn" : "") +
                "</span>"
              : review && selected
                ? '<span class="answer-status">✕ Bạn chọn</span>'
                : "") +
            "</" +
            (review ? "div" : "label") +
            ">"
          );
        })
        .join("") +
      "</fieldset>" +
      (review
        ? '<div class="explanation"><span class="eyebrow">GIẢI THÍCH</span><p>' +
          esc(q.explanation) +
          '</p><small>Tham khảo: <a href="' +
          esc(q.sourceUrl) +
          '" target="_blank" rel="noopener noreferrer">' +
          esc(q.source) +
          "</a></small></div>"
        : "")
    );
  }
  function exam() {
    const s = db.active;
    if (!s) {
      main.innerHTML = empty("Chưa có bài đang làm", "Chọn một đề để bắt đầu.");
      return;
    }
    const answered = s.answers.filter((a) => a !== null).length;
    main.innerHTML =
      title(
        s.mode === "exam" ? "BÀI THI THỬ" : "LUYỆN TẬP",
        s.title,
        s.mode === "exam"
          ? "Chọn một đáp án cho mỗi câu. Bạn có thể đánh dấu để xem lại."
          : "Không giới hạn thời gian. Nộp bài để xem đáp án và lời giải.",
        '<a class="btn secondary" href="#home">Về trang chủ</a>',
      ) +
      '<div class="exam-layout"><section class="panel question-panel">' +
      questionHTML(s, s.current) +
      '<div class="question-bottom"><button class="btn secondary" data-action="prev" ' +
      (s.current === 0 ? "disabled" : "") +
      '>← Câu trước</button><button class="btn secondary" data-action="clear" ' +
      (s.answers[s.current] === null ? "disabled" : "") +
      '>Bỏ chọn</button><button class="btn" data-action="next" ' +
      (s.current === s.items.length - 1 ? "disabled" : "") +
      '>Câu tiếp →</button></div></section><aside class="exam-sidebar"><div class="timer-panel"><div><small>' +
      (s.deadline ? "Thời gian còn lại" : "Thời gian luyện tập") +
      '</small><strong id="timer">' +
      time(
        s.deadline
          ? E.remaining(s)
          : Math.floor((Date.now() - s.startedAt) / 1000),
      ) +
      '</strong></div><span class="timer-icon" aria-hidden="true">◷</span></div><div class="panel"><div class="progress-label"><strong>Tiến độ làm bài</strong><span>' +
      answered +
      "/" +
      s.items.length +
      "</span></div>" +
      progress(answered, s.items.length) +
      nav(
        s,
        s.items.map((_, i) => i),
      ) +
      '<div class="legend"><span><i></i>Chưa làm</span><span><i class="blue"></i>Đã trả lời</span><span><i class="orange"></i>Đánh dấu</span></div>' +
      btn("Nộp bài", "submit", "full") +
      '<div class="save-note">' +
      (S.available
        ? "Tiến độ được tự động lưu"
        : "Đang lưu tạm trong tab này") +
      "</div></div></aside></div>";
  }
  function getAttempt() {
    return db.history.find((h) => h.id === location.hash.split("/")[1]);
  }
  function result() {
    const s = getAttempt();
    if (!s) {
      main.innerHTML = empty(
        "Không tìm thấy kết quả",
        "Bài thi này chưa được nộp hoặc không còn trong lịch sử.",
        "#history",
        "Xem lịch sử",
      );
      return;
    }
    const r = E.score(s);
    const weakest = Object.entries(r.chapters).sort(
      (a, b) => a[1].correct / a[1].total - b[1].correct / b[1].total,
    )[0];
    main.innerHTML =
      title(
        "KẾT QUẢ BÀI LÀM",
        s.title,
        s.automatic
          ? "Đã tự động nộp bài khi hết thời gian."
          : "Một bước tiến trên hành trình nắm vững kiến thức.",
        '<a class="btn secondary" href="#home">Về trang chủ</a>',
      ) +
      '<div class="result-layout"><section class="score-panel"><span class="eyebrow">ĐIỂM CỦA BẠN</span><div class="score-circle" style="--score:' +
      r.points * 10 +
      '%"><div><strong>' +
      r.points +
      "</strong><small>trên 10 điểm</small></div></div><h2>" +
      r.rating +
      "</h2><p>" +
      r.correct +
      " / " +
      s.items.length +
      ' câu đúng</p><p style="margin-top:20px">Thời gian làm bài: ' +
      Math.floor(s.elapsed / 60) +
      " phút " +
      (s.elapsed % 60) +
      ' giây</p></section><section><div class="result-stats">' +
      [
        ["green", r.correct, "Câu đúng"],
        ["red", r.wrong, "Câu sai"],
        ["muted", r.unanswered, "Chưa trả lời"],
      ]
        .map(
          (x) =>
            '<div class="result-stat"><strong class="' +
            x[0] +
            '">' +
            x[1] +
            "</strong><span>" +
            x[2] +
            "</span></div>",
        )
        .join("") +
      '</div><div class="panel"><h2>Kiến thức theo chương</h2>' +
      Object.entries(r.chapters)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(
          ([name, v]) =>
            '<div class="chapter-result"><div class="progress-label"><strong>' +
            esc(name) +
            "</strong><span>" +
            v.correct +
            "/" +
            v.total +
            " đúng</span></div>" +
            progress(v.correct, v.total) +
            "</div>",
        )
        .join("") +
      '<div class="feedback">' +
      (r.correct === s.items.length
        ? "Bạn đã trả lời đúng toàn bộ câu hỏi. Hãy thử một đề khác để tiếp tục củng cố kiến thức."
        : "Nên ôn thêm " +
          esc(weakest[0]) +
          ". Đọc lời giải cả những câu chưa trả lời để lấp đầy phần kiến thức còn thiếu.") +
      '</div></div></section></div><div class="actions" style="margin-top:26px"><a class="btn" href="#review/' +
      s.id +
      '">Xem lại bài</a><a class="btn secondary" href="#review/' +
      s.id +
      '/wrong">Chỉ xem câu sai</a>' +
      btn("Làm lại đề", "retry:" + s.id, "secondary") +
      '</div><p class="note" style="margin-top:25px">Thang đánh giá: dưới 5 — Chưa đạt · 5–dưới 6,5 — Trung bình · 6,5–dưới 8 — Khá · 8–dưới 9 — Tốt · 9–10 — Xuất sắc.</p>';
  }
  function review() {
    const s = getAttempt();
    if (!s) {
      main.innerHTML = empty(
        "Không tìm thấy bài làm",
        "Hãy chọn một bài trong lịch sử.",
        "#history",
        "Xem lịch sử",
      );
      return;
    }
    if (reviewId !== s.id) {
      reviewId = s.id;
      reviewIndex = 0;
      filter = "all";
    }
    if (location.hash.split("/")[2] === "wrong") filter = "wrong";
    const filters = {
      all: "Tất cả",
      correct: "Câu đúng",
      wrong: "Câu sai",
      unanswered: "Chưa trả lời",
      flagged: "Đã đánh dấu",
    };
    const indices = s.items
      .map((_, i) => i)
      .filter(
        (i) =>
          filter === "all" ||
          (filter === "flagged" ? s.flags[i] : E.status(s, i) === filter),
      );
    if (!indices.includes(reviewIndex)) reviewIndex = indices[0] ?? 0;
    const pos = indices.indexOf(reviewIndex);
    main.innerHTML =
      title(
        "XEM LẠI BÀI LÀM",
        s.title,
        "Hiểu vì sao đúng, nhận ra điều cần ôn thêm.",
        '<a class="btn secondary" href="#result/' + s.id + '">Về kết quả</a>',
      ) +
      '<div class="filter-bar">' +
      Object.entries(filters)
        .map(
          ([key, name]) =>
            '<button class="filter-btn ' +
            (filter === key ? "active" : "") +
            '" aria-pressed="' +
            (filter === key) +
            '" data-action="filter:' +
            key +
            '">' +
            name +
            " (" +
            s.items.filter(
              (_, i) =>
                key === "all" ||
                (key === "flagged" ? s.flags[i] : E.status(s, i) === key),
            ).length +
            ")</button>",
        )
        .join("") +
      "</div>" +
      (indices.length
        ? '<div class="exam-layout"><section class="panel question-panel">' +
          questionHTML(s, reviewIndex, true) +
          '<div class="question-bottom"><button class="btn secondary" data-action="reviewgoto:' +
          indices[pos - 1] +
          '" ' +
          (pos === 0 ? "disabled" : "") +
          '>← Câu trước</button><span class="muted">' +
          (pos + 1) +
          " / " +
          indices.length +
          '</span><button class="btn" data-action="reviewgoto:' +
          indices[pos + 1] +
          '" ' +
          (pos === indices.length - 1 ? "disabled" : "") +
          '>Câu tiếp →</button></div></section><aside class="panel"><h3>Câu hỏi trong bộ lọc</h3>' +
          nav(s, indices, true) +
          '<div class="legend"><span class="green">✓ Đúng</span><span class="red">✕ Sai</span><span>□ Chưa trả lời</span></div></aside></div>'
        : empty(
            "Không có câu trong bộ lọc này",
            "Chọn “Tất cả” để xem toàn bộ bài làm.",
            "#result/" + s.id,
            "Về kết quả",
          ));
  }
  function practice() {
    main.innerHTML =
      title(
        "LUYỆN TẬP CHỦ ĐỘNG",
        "Tập trung vào điều bạn cần.",
        "Chọn một hoặc nhiều chủ đề. Câu hỏi được lấy ngẫu nhiên, không trùng trong một lượt.",
      ) +
      '<div class="practice-layout"><section class="panel"><h2>Chọn chủ đề ôn tập</h2><div class="topic-grid">' +
      Object.entries(groupTopics)
        .map(
          ([g, topics]) =>
            '<label class="topic-choice"><input type="checkbox" name="topic" value="' +
            esc(g) +
            '"><span>' +
            esc(g) +
            "<small>" +
            E.bank().filter((q) => topics.includes(q.topic)).length +
            "</small></span></label>",
        )
        .join("") +
      '</div><div class="field"><label for="count">Số câu muốn luyện</label><select id="count">' +
      [10, 20, 30, 50].map((n) => "<option>" + n + "</option>").join("") +
      '</select></div><p id="practice-count" role="status">Chưa chọn chủ đề.</p>' +
      btn("Bắt đầu luyện tập", "practice-start") +
      '</section><aside><div class="panel"><div class="panel-label">ÔN LẠI CÂU SAI</div><div class="streak-num">' +
      Object.keys(db.mistakes).length +
      ' <small>câu</small></div><p>Những câu từng trả lời sai được lưu ở đây. Trả lời đúng 2 lần liên tiếp để đưa câu ra khỏi danh sách.</p><button class="btn secondary full" data-action="mistakes" ' +
      (Object.keys(db.mistakes).length ? "" : "disabled") +
      '>Luyện câu sai</button></div><div class="panel" style="margin-top:20px"><h3>Học theo cách của bạn</h3><p>Không giới hạn thời gian. Bạn có thể rời trang rồi quay lại. Đáp án và lời giải hiện khi nộp bài.</p><p>Nếu số câu đã chọn vượt ngân hàng của chủ đề, bài luyện sẽ dùng toàn bộ câu hiện có.</p></div></aside></div>';
  }
  function selectedPool() {
    const groups = [
      ...document.querySelectorAll('input[name="topic"]:checked'),
    ].map((el) => el.value);
    const topics = groups.flatMap((g) => groupTopics[g]);
    return E.bank().filter((q) => topics.includes(q.topic));
  }
  function history() {
    main.innerHTML =
      title(
        "THEO DÕI TIẾN BỘ",
        "Lịch sử làm bài",
        "Lưu tối đa 200 lượt gần nhất trên trình duyệt này.",
      ) +
      (db.history.length
        ? '<div class="table-wrap"><table><thead><tr><th>Bài làm</th><th>Điểm</th><th>Đúng / Tổng</th><th>Sai</th><th>Ngày làm</th><th>Kết quả</th></tr></thead><tbody>' +
          db.history
            .map((s) => {
              const r = E.score(s);
              return (
                "<tr><td><strong>" +
                esc(s.title) +
                '</strong><br><small class="muted">' +
                (s.mode === "exam" ? "Thi thử" : "Luyện tập") +
                "</small></td><td><strong>" +
                r.points +
                "/10</strong></td><td>" +
                r.correct +
                "/" +
                s.items.length +
                "</td><td>" +
                r.wrong +
                "</td><td>" +
                new Date(s.submittedAt).toLocaleString("vi-VN") +
                '</td><td><a href="#result/' +
                s.id +
                '">Xem kết quả</a></td></tr>'
              );
            })
            .join("") +
          "</tbody></table></div>"
        : empty(
            "Chưa có bài đã nộp",
            "Hoàn thành đề đầu tiên để bắt đầu theo dõi tiến bộ.",
          ));
  }
  function study() {
    QuizStudy.render(main);
  }
  function sources() {
    const sources = new Map();
    E.bank().forEach((q) => sources.set(q.sourceUrl, q.source));
    main.innerHTML =
      title(
        "TÀI LIỆU HỌC TẬP",
        "Nguồn tham khảo",
        "Câu hỏi được tự biên soạn bằng tiếng Việt từ các kiến thức và tài liệu bên dưới.",
      ) +
      '<div class="sources">' +
      [...sources]
        .map(
          ([url, name]) =>
            '<article><h3><a href="' +
            esc(url) +
            '" target="_blank" rel="noopener noreferrer">' +
            esc(name) +
            "</a></h3><p>" +
            esc(url) +
            "</p></article>",
        )
        .join("") +
      "</div>";
  }
  function tick() {
    if (!db.active) return;
    const left = E.remaining(db.active);
    if (left === 0) {
      finish(true);
      return;
    }
    const el = document.querySelector("#timer");
    if (el) {
      el.textContent = time(
        left ?? Math.floor((Date.now() - db.active.startedAt) / 1000),
      );
      el.parentElement.parentElement.classList.toggle(
        "urgent",
        left !== null && left <= 300,
      );
    }
  }
  function render() {
    if (db.active && E.remaining(db.active) === 0) {
      finish(true);
      return;
    }
    const page = location.hash.slice(1).split("/")[0] || "home";
    document
      .querySelectorAll("[data-nav]")
      .forEach((a) => a.classList.toggle("active", a.dataset.nav === page));
    (
      ({ home, exam, result, review, practice, history, sources, study })[
        page
      ] || home
    )();
    tick();
  }
  main.addEventListener("change", (event) => {
    const t = event.target;
    if (t.name === "answer" && db.active) {
      if (E.remaining(db.active) === 0) {
        finish(true);
        return;
      }
      const val = Number(t.value);
      db.active.answers[db.active.current] = val;
      save();
      exam();
      document
        .querySelector('input[name="answer"][value="' + val + '"]')
        .focus({ preventScroll: true });
    } else if (t.name === "topic" || t.id === "count") {
      const n = selectedPool().length;
      document.querySelector("#practice-count").textContent = n
        ? "Có " +
          n +
          " câu phù hợp · Bài luyện gồm " +
          Math.min(n, Number(document.querySelector("#count").value)) +
          " câu."
        : "Chưa chọn chủ đề.";
    }
  });
  main.addEventListener("click", (event) => {
    const control = event.target.closest("[data-action]");
    if (!control || control.disabled) return;
    const [action, arg] = control.dataset.action.split(":");
    if (db.active && E.remaining(db.active) === 0) {
      finish(true);
      return;
    }
    const s = db.active;
    if (action === "start") start(EXAMS[arg], "Đề thi số " + arg, "exam", arg);
    else if (action === "prev" || action === "next" || action === "goto") {
      if (!s) return;
      s.current =
        action === "goto"
          ? Number(arg)
          : s.current + (action === "next" ? 1 : -1);
      save();
      exam();
      document.querySelector("#question-title").focus({ preventScroll: true });
      document
        .querySelector("#question-title")
        .scrollIntoView({ block: "nearest" });
    } else if (action === "flag") {
      if (!s) return;
      s.flags[s.current] = !s.flags[s.current];
      save();
      exam();
      document
        .querySelector('[data-action="flag"]')
        .focus({ preventScroll: true });
    } else if (action === "clear") {
      if (!s) return;
      s.answers[s.current] = null;
      save();
      exam();
    } else if (action === "submit") {
      const n = s.answers.filter((a) => a === null).length;
      ask(
        "Nộp bài làm?",
        n
          ? "Bạn còn " + n + " câu chưa trả lời. Bạn có chắc chắn muốn nộp bài?"
          : "Bạn đã trả lời tất cả câu hỏi. Nộp bài để xem kết quả và lời giải.",
        "Nộp bài",
        () => finish(),
      );
    } else if (action === "retry") {
      const old = db.history.find((h) => h.id === arg);
      if (old)
        start(
          old.items.map((item) => E.bank().find((q) => q.id === item.id)),
          old.title,
          old.mode,
          old.examId,
        );
    } else if (action === "filter") {
      filter = arg;
      location.hash = "#review/" + getAttempt().id;
      review();
    } else if (action === "reviewgoto") {
      reviewIndex = Number(arg);
      review();
      document.querySelector("#question-title").focus({ preventScroll: true });
      document
        .querySelector("#question-title")
        .scrollIntoView({ block: "nearest" });
    } else if (action === "practice-start") {
      const pool = selectedPool();
      if (!pool.length) {
        document.querySelector("#practice-count").textContent =
          "Hãy chọn ít nhất một chủ đề để bắt đầu.";
        return;
      }
      start(
        E.shuffle(pool).slice(
          0,
          Number(document.querySelector("#count").value),
        ),
        "Luyện tập theo chủ đề",
        "practice",
      );
    } else if (action === "mistakes") {
      const pool = E.bank().filter((q) => db.mistakes[q.id]);
      if (pool.length) start(E.shuffle(pool), "Ôn lại câu sai", "mistakes");
    }
  });
  window.addEventListener("hashchange", () => {
    render();
    main.focus({ preventScroll: true });
    window.scrollTo(0, 0);
  });
  window.addEventListener("storage", (e) => {
    if (e.key === S.KEY) {
      db = S.read();
      render();
    }
  });
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      db = S.read();
      render();
    }
  });
  window.addEventListener("pageshow", () => {
    db = S.read();
    render();
  });
  document.querySelector(".skip").addEventListener("click", (event) => {
    event.preventDefault();
    main.focus();
    main.scrollIntoView();
  });
  setInterval(tick, 1000);
  render();
})();
