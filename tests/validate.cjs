const fs = require("node:fs"),
  path = require("node:path"),
  vm = require("node:vm"),
  assert = require("node:assert/strict");
const root = path.resolve(__dirname, ".."),
  ctx = vm.createContext({ console });
const files = fs
  .readdirSync(path.join(root, "data"))
  .filter((f) => /^exam\d\d\.js$/.test(f))
  .sort();
assert.equal(files.length, 10);
for (const f of files)
  vm.runInContext(fs.readFileSync(path.join(root, "data", f), "utf8"), ctx);
const exams = ctx.EXAMS,
  all = Object.values(exams).flat(),
  ids = new Set(),
  texts = new Set();
const normalize = (s) =>
  s.normalize("NFC").toLocaleLowerCase("vi").replace(/\s+/g, " ").trim();
assert.equal(all.length, 500);
for (const [id, qs] of Object.entries(exams)) {
  assert.equal(qs.length, 50, id);
  assert.deepEqual(
    ["Chương 1", "Chương 2", "Chương 3–4", "Chương 5"].map(
      (c) => qs.filter((q) => q.chapter === c).length,
    ),
    [6, 18, 18, 8],
  );
  assert.deepEqual(
    ["Nhận biết", "Thông hiểu", "Vận dụng", "Vận dụng cao"].map(
      (d) => qs.filter((q) => q.difficulty === d).length,
    ),
    [15, 20, 10, 5],
  );
  assert.deepEqual(
    [0, 1, 2, 3].map((i) => qs.filter((q) => q.answer === i).length),
    [13, 13, 12, 12],
  );
  for (const q of qs) {
    for (const key of [
      "id",
      "question",
      "explanation",
      "chapter",
      "topic",
      "difficulty",
      "source",
      "sourceUrl",
    ])
      assert.ok(
        typeof q[key] === "string" && q[key].trim(),
        q.id + " missing " + key,
      );
    assert.equal(q.options.length, 4, q.id);
    assert.equal(
      new Set(q.options.map(normalize)).size,
      4,
      q.id + " duplicate options",
    );
    assert.ok(
      q.options.every((s) => typeof s === "string" && s.trim()),
      q.id,
    );
    assert.ok(
      Number.isInteger(q.answer) && q.answer >= 0 && q.answer < 4,
      q.id,
    );
    assert.ok(q.explanation.length >= 65, q.id + " insufficient explanation");
    assert.ok(/^https:\/\//.test(q.sourceUrl), q.id);
    assert.ok(!ids.has(q.id), "Duplicate ID " + q.id);
    ids.add(q.id);
    const text = normalize(q.question);
    assert.ok(!texts.has(text), "Duplicate question " + q.id);
    texts.add(text);
  }
}
// Character trigrams flag suspiciously similar stems for editorial review.
function grams(s) {
  s = normalize(s).replace(/\d+/g, "#");
  const set = new Set();
  for (let i = 0; i < s.length - 2; i++) set.add(s.slice(i, i + 3));
  return set;
}
const sets = all.map((q) => grams(q.question)),
  similar = [];
for (let i = 0; i < all.length; i++)
  for (let j = i + 1; j < all.length; j++) {
    const a = sets[i],
      b = sets[j];
    let intersection = 0;
    for (const g of a) if (b.has(g)) intersection++;
    const similarity = intersection / (a.size + b.size - intersection);
    if (similarity >= 0.55)
      similar.push({
        similarity: Number(similarity.toFixed(3)),
        ids: [all[i].id, all[j].id],
        questions: [all[i].question, all[j].question],
      });
  }
similar.sort((a, b) => b.similarity - a.similarity);
fs.writeFileSync(
  path.join(__dirname, "similarity-report.json"),
  JSON.stringify(similar, null, 2),
);
vm.runInContext(fs.readFileSync(path.join(root, "js/engine.js"), "utf8"), ctx);
const E = ctx.QuizEngine;
let checks = 0;
const check = (name, fn) => {
  fn();
  checks++;
  console.log("PASS " + name);
};
const empty = () => ({ version: 1, active: null, history: [], mistakes: {} });
check(
  "500 questions, unique IDs/stems, schema, chapter/difficulty/answer quotas",
  () => {},
);
check(
  "Shuffling keeps the correct answer and balanced positions in 250 attempts",
  () => {
    for (let k = 0; k < 250; k++) {
      const s = E.create(exams["01"], "Test");
      const dist = [0, 0, 0, 0];
      s.items.forEach((item, i) => {
        const q = E.question(s, i),
          original = all.find((q) => q.id === item.id);
        assert.equal(q.options[q.answer], original.options[original.answer]);
        dist[q.answer]++;
      });
      assert.ok(Math.max(...dist) - Math.min(...dist) <= 1);
    }
  },
);
check("41 correct / 7 wrong / 2 unanswered scores 8.2", () => {
  const s = E.create(exams["01"], "Test");
  s.items.forEach((_, i) => {
    s.answers[i] =
      i < 41
        ? E.question(s, i).answer
        : i < 48
          ? (E.question(s, i).answer + 1) % 4
          : null;
  });
  const r = E.score(s);
  assert.equal(r.points, 8.2);
  assert.equal(r.correct, 41);
  assert.equal(r.wrong, 7);
  assert.equal(r.unanswered, 2);
  assert.equal(
    Object.values(r.chapters).reduce((n, c) => n + c.correct, 0),
    41,
  );
});
check("Blank attempt and perfect attempt", () => {
  const s = E.create(exams["02"], "Test");
  assert.equal(E.score(s).points, 0);
  s.answers = s.items.map((_, i) => E.question(s, i).answer);
  assert.equal(E.score(s).points, 10);
  assert.equal(E.score(s).rating, "Xuất sắc");
});
check("Rating boundaries", () => {
  for (const [n, rating] of [
    [0, "Chưa đạt"],
    [24, "Chưa đạt"],
    [25, "Trung bình"],
    [32, "Trung bình"],
    [33, "Khá"],
    [39, "Khá"],
    [40, "Tốt"],
    [44, "Tốt"],
    [45, "Xuất sắc"],
    [50, "Xuất sắc"],
  ]) {
    const s = E.create(exams["01"], "Test");
    s.answers = s.items.map((_, i) => (i < n ? E.question(s, i).answer : null));
    assert.equal(E.score(s).rating, rating);
  }
});
check("Deadline survives serialization; overdue time is capped", () => {
  const s = E.create(exams["01"], "Test", "exam", "01", 1000),
    restored = JSON.parse(JSON.stringify(s));
  assert.equal(E.remaining(restored, 1000), 3000);
  assert.equal(E.remaining(restored, 61000), 2940);
  assert.equal(E.remaining(restored, 3001001), 0);
  const db = empty();
  db.active = restored;
  const result = E.submit(db, 9000000, true);
  assert.equal(result.elapsed, 3000);
  assert.equal(db.active, null);
  assert.equal(db.history.length, 1);
  assert.equal(E.submit(db, 9000000), null);
});
check("Untimed practice and rounding", () => {
  const s = E.create(
    exams["01"].slice(0, 3),
    "Practice",
    "practice",
    null,
    1000,
  );
  assert.equal(E.remaining(s, 999999999), null);
  s.answers[0] = E.question(s, 0).answer;
  assert.equal(E.score(s).points, 3.33);
});
check("Wrong-answer list, correct streak, and streak reset", () => {
  const db = empty(),
    q = exams["01"][0];
  function attempt(type) {
    db.active = E.create([q], "Practice", "practice");
    const a = E.question(db.active, 0).answer;
    db.active.answers[0] =
      type === "correct" ? a : type === "wrong" ? (a + 1) % 4 : null;
    E.submit(db);
  }
  attempt("wrong");
  assert.equal(db.mistakes[q.id].streak, 0);
  attempt("correct");
  assert.equal(db.mistakes[q.id].streak, 1);
  attempt("unanswered");
  assert.equal(db.mistakes[q.id].streak, 0);
  attempt("correct");
  attempt("correct");
  assert.ok(!db.mistakes[q.id]);
});
check("Retry starts clean and shuffled answers remain correct", () => {
  const s = E.create(exams["01"], "Test");
  s.answers[0] = 0;
  s.flags[0] = true;
  s.current = 5;
  const retry = E.create(
    s.items.map((item) => all.find((q) => q.id === item.id)),
    "Test",
  );
  assert.ok(retry.answers.every((a) => a === null));
  assert.ok(retry.flags.every((f) => !f));
  retry.items.forEach((item, i) => {
    const q = E.question(retry, i),
      original = all.find((q) => q.id === item.id);
    assert.equal(q.options[q.answer], original.options[original.answer]);
  });
});
check("Storage write, recovery and blocked-storage fallback", () => {
  let raw = null;
  const context = vm.createContext({
    localStorage: { getItem: () => raw, setItem: (_, v) => (raw = v) },
  });
  vm.runInContext(
    fs.readFileSync(path.join(root, "js/storage.js"), "utf8"),
    context,
  );
  const s = context.QuizStorage;
  const db = s.read();
  db.active = E.create(exams["01"], "Test");
  db.active.answers[3] = 2;
  db.active.flags[3] = true;
  s.write(db);
  assert.equal(s.read().active.answers[3], 2);
  assert.equal(s.read().active.flags[3], true);
  context.localStorage.setItem = () => {
    throw Error("Quota");
  };
  s.write(db);
  assert.equal(s.available, false);
  assert.equal(s.read().active.answers[3], 2);
});
const assets = fs
  .readFileSync(path.join(root, "index.html"), "utf8")
  .matchAll(/(?:src|href)="([^"#]+)"/g);
for (const m of assets) {
  if (!m[1].includes(":"))
    assert.ok(fs.existsSync(path.join(root, m[1])), m[1]);
}
const report = {
  passed: true,
  checks,
  total: all.length,
  similarityPairsToReview: similar.length,
  generatedAt: new Date().toISOString(),
};
fs.writeFileSync(
  path.join(__dirname, "test-results.json"),
  JSON.stringify(report, null, 2),
);
console.log(JSON.stringify(report));
