const http = require('http');
const fs = require("fs")

console.log("I'm server 3000")

const server=http.createServer(function (req, res) {
  console.log("req.url", req.url, req.method)

const url= req.url;
const method=req.method;

if(method==="GET"){
    if(url === "/home"){
        const html= fs.readFileSync("./index.html", "utf-8")
        res.writeHead(200, {"conten-type": "text/html"})
        res.write(html);
        res.end();
        return
    }else if (url==="/style.css"){
        const css= fs.readFileSync("./style.css", "utf-8")
        res.writeHead(200, {"conten-type": "text/css"})
        res.write(css);
        res.end();
        return
    }else if (url==="/script.js"){
        const js= fs.readFileSync("./script.js", "utf-8")
        res.writeHead(200, {"conten-type": "text/js"})
        res.write(js);
        res.end();
        return
    }
}
res.end();
})

server.listen(3000, ()=>{
    console.log("sever runing at 3000....")
})