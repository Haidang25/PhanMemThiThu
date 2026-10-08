(function (root) {
  "use strict";
  const KEY = "network-quiz.v1";
  let memory = null,
    available = true;
  const blank = () => ({ version: 1, active: null, history: [], mistakes: {} });
  function warn() {
    available = false;
    if (root.document)
      root.document.getElementById("storage-warning").hidden = false;
  }
  function read() {
    if (!available) return memory || blank();
    try {
      const raw = root.localStorage.getItem(KEY);
      const value = raw ? JSON.parse(raw) : blank();
      if (
        value.version !== 1 ||
        !Array.isArray(value.history) ||
        !value.mistakes ||
        typeof value.mistakes !== "object"
      )
        throw Error("Invalid storage");
      memory = value;
      return value;
    } catch (_) {
      warn();
      return memory || blank();
    }
  }
  function write(value) {
    memory = value;
    try {
      root.localStorage.setItem(KEY, JSON.stringify(value));
    } catch (_) {
      warn();
    }
    return value;
  }
  root.QuizStorage = {
    read,
    write,
    KEY,
    get available() {
      return available;
    },
  };
})(globalThis);
