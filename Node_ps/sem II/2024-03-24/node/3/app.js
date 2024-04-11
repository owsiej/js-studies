// Zmodyfikujmy naszą aplikację tak, by zwracała różny komunikat i status odpowiedzi w zależności od użytej metody http

const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/plain" });
    if (req.method === "GET") {
      res.write("Hello World from GET method.");
    } else if (req.method === "POST") {
      res.write("Hello World from POST method.");
    } else if (req.method === "DELETE") {
      res.write("Hello World from DELETE method.");
    } else {
      res.write("Hello World from different method.");
    }
    res.end();
  })
  .listen(4700, console.log("server started"));
