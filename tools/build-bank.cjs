/* Build-time only. The website itself needs no Node.js or server. */
const fs = require("node:fs"),
  path = require("node:path");
const root = path.resolve(__dirname, "..");
const levels = ["Nhận biết", "Thông hiểu", "Vận dụng", "Vận dụng cao"];
const refs = {
  network: [
    "Peter L. Dordal — An Introduction to Computer Networks",
    "https://intronetworks.cs.luc.edu/current/html/",
  ],
  dns: [
    "IETF RFC 1035 — Domain Names: Implementation and Specification",
    "https://www.rfc-editor.org/rfc/rfc1035.html",
  ],
  http: [
    "MDN — HTTP reference",
    "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference",
  ],
  ipv4: [
    "IETF RFC 791 — Internet Protocol",
    "https://www.rfc-editor.org/rfc/rfc791.html",
  ],
  ipv6: [
    "IETF RFC 8200 — IPv6 Specification",
    "https://www.rfc-editor.org/rfc/rfc8200.html",
  ],
  tcp: [
    "IETF RFC 9293 — Transmission Control Protocol",
    "https://www.rfc-editor.org/rfc/rfc9293.html",
  ],
  udp: [
    "IETF RFC 768 — User Datagram Protocol; RFC 8200 §8.1 for IPv6",
    "https://www.rfc-editor.org/rfc/rfc768",
  ],
  ftp: [
    "IETF RFC 959 — File Transfer Protocol",
    "https://www.rfc-editor.org/rfc/rfc959.html",
  ],
  compression: [
    "Carnegie Mellon University — Algorithms in the Real World: Compression",
    "https://www.cs.cmu.edu/afs/cs/project/pscico-guyb/realworld/www/slidesF15.html",
  ],
  rdt: [
    "Kurose & Ross — Transport Layer, public teaching materials (UMass)",
    "https://gaia.cs.umass.edu/kurose_ross/videos/3/",
  ],
  vlan: [
    "Cisco — VLAN Trunk Configuration Guide",
    "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vlan-trunks.html",
  ],
  nat: [
    "Cisco — Configuring NAT for IP Address Conservation",
    "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipaddr_nat/configuration/15-sy/nat-15-sy-book/iadnat-addr-consv.html",
  ],
  acl: [
    "Cisco IOS — IP Access List Overview",
    "https://www.cisco.com/en/US/docs/ios-xml/ios/sec_data_acl/configuration/15-1mt/IP_Access_List_Overview.html",
  ],
  dhcp: [
    "IETF RFC 2131 — Dynamic Host Configuration Protocol",
    "https://www.rfc-editor.org/rfc/rfc2131.html",
  ],
  vtp: [
    "Cisco — Configure VTP (version-specific behavior)",
    "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vtp.html",
  ],
  stp: [
    "Cisco — Spanning Tree Protocol Configuration Guide",
    "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/stp/stp-configuration-guide/m-stp.html",
  ],
  wlan: [
    "Cisco — WLAN Architecture: BSS, IBSS and ESS",
    "https://www.cisco.com/E-Learning/bulk/guest/celc/fwl/ch2/2_1_5/content.html",
  ],
  gsm: [
    "ETSI GSM 03.02 — Network Architecture",
    "https://www.etsi.org/deliver/etsi_gts/03/0302/05.01.00_60/gsmts_0302v050100p.pdf",
  ],
  security: [
    "NIST SP 800-153 — Guidelines for Securing WLANs",
    "https://csrc.nist.gov/pubs/sp/800/153/final",
  ],
  windows: [
    "Microsoft Learn — Windows networking commands",
    "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands",
  ],
  cli: [
    "Cisco IOS — Configuration Fundamentals",
    "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/fundamentals/configuration/xe-16/fundamentals-xe-16-book/cf-cli-basics.html",
  ],
};
const topicRefs = {
  DNS: "dns",
  HTTP: "http",
  IPv4: "ipv4",
  IPv6: "ipv6",
  TCP: "tcp",
  UDP: "udp",
  FTP: "ftp",
  "Nén dữ liệu": "compression",
  RDT: "rdt",
  "Go-Back-N": "rdt",
  "Selective Repeat": "rdt",
  VLAN: "vlan",
  DTP: "vlan",
  NAT: "nat",
  ACL: "acl",
  DHCP: "dhcp",
  VTP: "vtp",
  STP: "stp",
  WLAN: "wlan",
  GSM: "gsm",
  "An toàn WLAN": "security",
  Windows: "windows",
  "Cisco CLI": "cli",
};
const configs = [
  ["chapter1", "Chương 1", 6],
  ["chapter2", "Chương 2", 18],
  ["chapter34", "Chương 3–4", 18],
  ["chapter5", "Chương 5", 8],
];
let seed = 20261007;
function random() {
  seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
  return seed / 4294967296;
}
function shuffled(a) {
  a = a.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
const chapters = configs.map(([file, chapter, quota]) => {
  let topic = "";
  const questions = [];
  fs.readFileSync(path.join(__dirname, file + ".txt"), "utf8")
    .split(/\r?\n/)
    .forEach((line, index) => {
      if (!line.trim()) return;
      if (line.startsWith("@")) {
        topic = line.slice(1);
        return;
      }
      const fields = line.split("|");
      if (fields.length !== 7)
        throw Error(
          file + ":" + (index + 1) + " needs 7 fields, got " + fields.length,
        );
      const [difficulty, question, correct, ...rest] = fields;
      const explanation = rest.pop();
      const [source, sourceUrl] = refs[topicRefs[topic] || "network"];
      questions.push({
        chapter,
        topic,
        difficulty: levels[Number(difficulty) - 1],
        question,
        options: [correct, ...rest],
        answer: 0,
        explanation,
        source,
        sourceUrl,
      });
    });
  if (questions.length !== quota * 10)
    throw Error(file + " count: " + questions.length);
  return shuffled(questions);
});
const exams = Array.from({ length: 10 }, () => []);
chapters.forEach((qs) => qs.forEach((q, i) => exams[i % 10].push(q)));
const target = [15, 20, 10, 5],
  counts = exams.map((qs) =>
    levels.map((d) => qs.filter((q) => q.difficulty === d).length),
  );
const loss = (i) =>
  counts[i].reduce((sum, n, d) => sum + (n - target[d]) ** 2, 0);
let total = counts.reduce((s, _, i) => s + loss(i), 0);
// Swap inside a chapter to keep chapter quotas intact while balancing difficulty.
for (let step = 0; step < 500000 && total; step++) {
  const a = Math.floor(random() * 10),
    b = Math.floor(random() * 10);
  if (a === b) continue;
  const chapter = configs[Math.floor(random() * 4)][1];
  const ai = exams[a]
      .map((q, i) => (q.chapter === chapter ? i : -1))
      .filter((i) => i >= 0),
    bi = exams[b]
      .map((q, i) => (q.chapter === chapter ? i : -1))
      .filter((i) => i >= 0);
  const x = ai[Math.floor(random() * ai.length)],
    y = bi[Math.floor(random() * bi.length)];
  const d = levels.indexOf(exams[a][x].difficulty),
    e = levels.indexOf(exams[b][y].difficulty);
  if (d === e) continue;
  const before = loss(a) + loss(b);
  counts[a][d]--;
  counts[a][e]++;
  counts[b][e]--;
  counts[b][d]++;
  const delta = loss(a) + loss(b) - before,
    temp = Math.max(0.05, 2 * (1 - step / 100000));
  if (delta <= 0 || random() < Math.exp(-delta / temp)) {
    [exams[a][x], exams[b][y]] = [exams[b][y], exams[a][x]];
    total += delta;
  } else {
    counts[a][d]++;
    counts[a][e]--;
    counts[b][e]++;
    counts[b][d]--;
  }
}
if (total) throw Error("Difficulty allocation failed: " + total);
// Improve topic spread with swaps that preserve both chapter and difficulty.
function topicCost(qs) {
  const c = {};
  qs.forEach((q) => (c[q.topic] = (c[q.topic] || 0) + 1));
  return Object.values(c).reduce((s, n) => s + n * n, 0);
}
for (let step = 0; step < 50000; step++) {
  const a = Math.floor(random() * 10),
    b = Math.floor(random() * 10);
  if (a === b) continue;
  const x = Math.floor(random() * 50),
    q = exams[a][x];
  const choices = exams[b]
    .map((p, i) =>
      p.chapter === q.chapter && p.difficulty === q.difficulty ? i : -1,
    )
    .filter((i) => i >= 0);
  if (!choices.length) continue;
  const y = choices[Math.floor(random() * choices.length)],
    before = topicCost(exams[a]) + topicCost(exams[b]);
  [exams[a][x], exams[b][y]] = [exams[b][y], exams[a][x]];
  if (topicCost(exams[a]) + topicCost(exams[b]) > before)
    [exams[a][x], exams[b][y]] = [exams[b][y], exams[a][x]];
}
const report = [];
exams.forEach((qs, i) => {
  const id = String(i + 1).padStart(2, "0");
  qs = shuffled(qs).sort(
    (a, b) =>
      configs.findIndex((c) => c[1] === a.chapter) -
      configs.findIndex((c) => c[1] === b.chapter),
  );
  qs.forEach((q, j) => {
    q.id = "E" + id + "Q" + String(j + 1).padStart(2, "0");
    const correct = q.options[0],
      others = shuffled(q.options.slice(1));
    q.answer = j % 4;
    others.splice(q.answer, 0, correct);
    q.options = others;
  });
  fs.writeFileSync(
    path.join(root, "data", "exam" + id + ".js"),
    '/* Tự biên soạn; xem tools/chapter*.txt và README.md. */\nglobalThis.EXAMS ||= {};\nglobalThis.EXAMS["' +
      id +
      '"] = ' +
      JSON.stringify(qs, null, 2) +
      ";\n",
  );
  report.push({
    exam: id,
    total: qs.length,
    chapters: Object.fromEntries(
      configs.map((c) => [c[1], qs.filter((q) => q.chapter === c[1]).length]),
    ),
    difficulties: Object.fromEntries(
      levels.map((d) => [d, qs.filter((q) => q.difficulty === d).length]),
    ),
    answers: [0, 1, 2, 3].map((n) => qs.filter((q) => q.answer === n).length),
    topics: [...new Set(qs.map((q) => q.topic))].length,
  });
});
fs.writeFileSync(
  path.join(root, "tests", "bank-report.json"),
  JSON.stringify({ total: 500, exams: report }, null, 2),
);
console.log(
  "Built 10 exams × 50 questions. Each: chapters 6/18/18/8; difficulties 15/20/10/5; answers 13/13/12/12.",
);
