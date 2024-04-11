// Dodajmy do zwracanej informacji kod statusu 200 oraz informację o typie zwracanej zawartości

const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end();
  })
  .listen(4700, console.log("server started"));
