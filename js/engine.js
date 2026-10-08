(function (root) {
  "use strict";
  const EXAM_TIME = 50; // Phút; chỉ áp dụng với bài thi mới.
  const shuffle = (items) => {
    const a = items.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  const bank = () => Object.values(root.EXAMS || {}).flat();
  const map = new Map(bank().map((q) => [q.id, q]));
  function create(
    questions,
    title,
    mode = "exam",
    examId = null,
    now = Date.now(),
  ) {
    if (!questions.length) throw Error("Không có câu hỏi phù hợp.");
    const targets = shuffle(questions.map((_, i) => i % 4));
    const items = questions.map((q, i) => {
      const order = shuffle([0, 1, 2, 3].filter((n) => n !== q.answer));
      order.splice(targets[i], 0, q.answer);
      return { id: q.id, order };
    });
    return {
      id: now + "-" + Math.random().toString(36).slice(2, 9),
      title,
      mode,
      examId,
      items,
      answers: Array(items.length).fill(null),
      flags: Array(items.length).fill(false),
      current: 0,
      startedAt: now,
      deadline: mode === "exam" ? now + EXAM_TIME * 60000 : null,
      submittedAt: null,
    };
  }
  function question(s, i) {
    const item = s.items[i],
      q = map.get(item.id);
    if (!q) throw Error("Không tìm thấy câu hỏi " + item.id);
    return {
      ...q,
      options: item.order.map((n) => q.options[n]),
      answer: item.order.indexOf(q.answer),
    };
  }
  function status(s, i) {
    return s.answers[i] === null
      ? "unanswered"
      : s.answers[i] === question(s, i).answer
        ? "correct"
        : "wrong";
  }
  function score(s) {
    let correct = 0,
      wrong = 0,
      unanswered = 0;
    const chapters = {};
    s.items.forEach((_, i) => {
      const q = question(s, i),
        st = status(s, i);
      chapters[q.chapter] ||= { total: 0, correct: 0 };
      chapters[q.chapter].total++;
      if (st === "correct") {
        correct++;
        chapters[q.chapter].correct++;
      } else if (st === "wrong") wrong++;
      else unanswered++;
    });
    const points = Math.round((correct / s.items.length) * 1000) / 100;
    const rating =
      points < 5
        ? "Chưa đạt"
        : points < 6.5
          ? "Trung bình"
          : points < 8
            ? "Khá"
            : points < 9
              ? "Tốt"
              : "Xuất sắc";
    return { correct, wrong, unanswered, points, rating, chapters };
  }
  function submit(db, now = Date.now(), automatic = false) {
    if (!db.active) return null;
    const s = db.active;
    const existing = db.history.find((h) => h.id === s.id);
    if (existing) {
      db.active = null;
      return existing;
    }
    s.submittedAt = s.deadline ? Math.min(now, s.deadline) : now;
    s.elapsed = Math.max(0, Math.floor((s.submittedAt - s.startedAt) / 1000));
    s.automatic = automatic;
    s.items.forEach((item, i) => {
      const st = status(s, i);
      if (st === "wrong") db.mistakes[item.id] = { streak: 0 };
      else if (st === "correct" && db.mistakes[item.id]) {
        db.mistakes[item.id].streak++;
        if (db.mistakes[item.id].streak >= 2) delete db.mistakes[item.id];
      } else if (st === "unanswered" && db.mistakes[item.id])
        db.mistakes[item.id].streak = 0;
    });
    db.history.unshift(s);
    db.history = db.history.slice(0, 200);
    db.active = null;
    return s;
  }
  const remaining = (s, now = Date.now()) =>
    s.deadline === null
      ? null
      : Math.max(0, Math.ceil((s.deadline - now) / 1000));
  root.QuizEngine = {
    EXAM_TIME,
    shuffle,
    bank,
    create,
    question,
    status,
    score,
    submit,
    remaining,
  };
})(globalThis);
