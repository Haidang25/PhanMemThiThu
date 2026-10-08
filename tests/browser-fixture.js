/* UI test fixture; history remains isolated in memory. */
const scenario = new URLSearchParams(location.search).get("case") || "timeout";
const fixtureDB = {
  version: 1,
  active: QuizEngine.create(EXAMS["01"], "Kiểm thử " + scenario, "exam", "01"),
  history: [],
  mistakes: {},
};
if (scenario === "timeout") fixtureDB.active.deadline = Date.now() + 3000;
if (scenario === "perfect")
  fixtureDB.active.answers = fixtureDB.active.items.map(
    (_, i) => QuizEngine.question(fixtureDB.active, i).answer,
  );
QuizStorage = {
  KEY: "network-quiz.test-only",
  read: () => fixtureDB,
  write: () => fixtureDB,
  available: scenario !== "storage-blocked",
};
if (scenario === "storage-blocked")
  document.querySelector("#storage-warning").hidden = false;
location.hash = "#exam";
