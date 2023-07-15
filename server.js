const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  console.log("req.url", req.url, req.method);

  const url = req.url;
  const method = req.method;

  if (method === "GET") {
    if (url === "/home") {
      // const html = fs.readFileSync("./index.html", { encoding: "utf-8" });
      // res.writeHead(200, { "Content-Type": "text/html" });
      res.write("oksdfsdfsfd");
      return res.end();
    } else if (url === "/style.css") {
      const css = fs.readFileSync("./style.css", { encoding: "utf-8" });
      res.writeHead(200, { "Content-Type": "text/css" });
      res.write(css);
      return res.end();
    } else if (url === "/script.js") {
      const script = fs.readFileSync("./script.css", { encoding: "utf-8" });
      res.writeHead(200, { "Content-Type": "text/css" });
      res.write(script);
      return res.end();
    }
  }

  res.end();
});
server.listen(8080, () => console.log("ser run 8080 ......."));
