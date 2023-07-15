const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  console.log("req.url", req.url, req.method);

  if (req.url === "/home" && req.method == "GET") {
    const html = fs.readFileSync("./index.html", { encoding: "utf-8" });
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(html);
    return res.end();
  }

  res.end();
});
server.listen(8080, () => console.log("ser run 8080 ......."));
