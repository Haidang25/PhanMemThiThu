/* Learning pages contain authored local HTML; no external content is injected. */
(function () {
  "use strict";
  const esc = (value) =>
    String(value ?? "").replace(
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
  function render(main) {
    const chapters = window.STUDY_CHAPTERS;
    const requested = location.hash.split("/")[1] || "1";
    const chapter = chapters.find((c) => c.id === requested) || chapters[0];
    const pos = chapters.indexOf(chapter);
    const refs = new Map();
    QuizEngine.bank()
      .filter((q) => chapter.refTopics.includes(q.topic))
      .forEach((q) => refs.set(q.sourceUrl, q.source));
    main.innerHTML = [
      '<div class="page-top"><div><span class="eyebrow">SỔ TAY ÔN TỰ LUẬN</span><h1>Hiểu bản chất. Trình bày mạch lạc.</h1><p>Kiến thức trọng tâm theo đề cương, kèm ví dụ và dàn ý để tự kiểm tra.</p></div></div>',
      '<nav class="study-chapters" aria-label="Chọn chương ôn tự luận">',
      ...chapters.map(
        (c) =>
          '<a href="#study/' +
          c.id +
          '" ' +
          (c.id === chapter.id ? 'aria-current="page"' : "") +
          "><span>CHƯƠNG " +
          c.id +
          "</span><strong>" +
          esc(c.title) +
          "</strong></a>",
      ),
      '</nav><div class="study-layout"><aside class="study-sidebar"><div class="panel"><span class="panel-label">TRONG CHƯƠNG NÀY</span><ol>',
      ...chapter.topics.map(
        (t, i) =>
          '<li><button type="button" data-study-jump="' +
          esc(t.id) +
          '"><span>' +
          String(i + 1).padStart(2, "0") +
          "</span>" +
          esc(t.title) +
          "</button></li>",
      ),
      '</ol></div><div class="study-method"><strong>Cách ôn tự luận</strong><p>Đọc trọng tâm → gấp phần kiến thức → tự viết câu trả lời → mở dàn ý đối chiếu.</p><p>Khung trả lời: khái niệm → cơ chế → ví dụ → giới hạn hoặc đánh đổi.</p></div></aside>',
      '<div class="study-content"><section class="study-hero"><span class="eyebrow">CHƯƠNG ' +
        chapter.id +
        " / 05</span><h2>" +
        esc(chapter.title) +
        "</h2><p>" +
        esc(chapter.subtitle) +
        "</p><ul>",
      ...chapter.goals.map((g) => "<li>" + esc(g) + "</li>"),
      '</ul><div class="study-hero-meta"><span>' +
        chapter.topics.length +
        " chủ đề · " +
        chapter.topics.reduce((s, t) => s + t.prompts.length, 0) +
        ' câu tự luận</span><button class="btn secondary" type="button" data-study-toggle aria-expanded="false">Mở tất cả dàn ý</button></div></section>',
      ...chapter.topics.map(
        (t, i) =>
          '<section class="study-section panel" id="study-' +
          esc(t.id) +
          '"><div class="study-section-heading"><span class="number-tile">' +
          String(i + 1).padStart(2, "0") +
          '</span><h2 tabindex="-1">' +
          esc(t.title) +
          '</h2></div><div class="study-prose">' +
          t.html +
          '</div><div class="study-essay"><span class="eyebrow">TỰ KIỂM TRA</span>' +
          t.prompts
            .map(
              (p, j) =>
                "<h3>" +
                esc(p.q) +
                '</h3><p class="muted">Hãy tự trả lời trước khi xem gợi ý.</p><details class="study-answer"><summary>Xem dàn ý trả lời</summary><ol>' +
                p.a.map((a) => "<li>" + esc(a) + "</li>").join("") +
                "</ol></details>",
            )
            .join("") +
          "</div></section>",
      ),
      '<section class="panel study-references"><h2>Tài liệu đối chiếu</h2><p>Nội dung tự biên soạn để ôn theo đề cương; dàn ý là gợi ý học tập, không phải đáp án chấm thi chính thức. Chương 3–4 được tách thành Switching và Routing để tiện học.</p><ul>',
      ...[...refs].map(
        ([url, name]) =>
          '<li><a href="' +
          esc(url) +
          '" target="_blank" rel="noopener noreferrer">' +
          esc(name) +
          "</a></li>",
      ),
      '</ul></section><div class="study-pagination">',
      pos > 0
        ? '<a class="btn secondary" href="#study/' +
          chapters[pos - 1].id +
          '">← Chương ' +
          chapters[pos - 1].id +
          "</a>"
        : '<a class="btn secondary" href="#home">Về trang chủ</a>',
      pos < chapters.length - 1
        ? '<a class="btn" href="#study/' +
          chapters[pos + 1].id +
          '">Chương ' +
          chapters[pos + 1].id +
          " →</a>"
        : '<a class="btn" href="#practice">Luyện trắc nghiệm →</a>',
      "</div></div></div>",
    ].join("");
    main.querySelectorAll("[data-study-jump]").forEach((button) => {
      button.addEventListener("click", () => {
        const section = document.getElementById(
          "study-" + button.dataset.studyJump,
        );
        section.scrollIntoView({ block: "start", behavior: "auto" });
        section.querySelector("h2").focus({ preventScroll: true });
      });
    });
    const toggle = main.querySelector("[data-study-toggle]");
    const answers = [...main.querySelectorAll(".study-answer")];
    const update = () => {
      const allOpen = answers.every((d) => d.open);
      toggle.textContent = allOpen ? "Ẩn tất cả dàn ý" : "Mở tất cả dàn ý";
      toggle.setAttribute("aria-expanded", String(allOpen));
    };
    toggle.addEventListener("click", () => {
      const open = !answers.every((d) => d.open);
      answers.forEach((d) => (d.open = open));
      update();
    });
    answers.forEach((d) => d.addEventListener("toggle", update));
  }
  window.QuizStudy = { render };
})();
