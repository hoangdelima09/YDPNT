// In dữ liệu website (bài viết, nhóm, ngân hàng câu hỏi) ra JSON cho tools/build_kb.py
const vm = require("vm"), fs = require("fs"), path = require("path");
const root = path.join(__dirname, "..", "assets", "js");
const g = { console }; g.window = g; vm.createContext(g);
for (const f of ["data.js", "quiz.js"]) vm.runInContext(fs.readFileSync(path.join(root, f), "utf8"), g);
process.stdout.write(JSON.stringify({ articles: g.SITE.articles.map(({ id, title, summary, body, group, sources }) => ({ id, title, summary, body, group, sources })), quiz: g.QUIZ }));
