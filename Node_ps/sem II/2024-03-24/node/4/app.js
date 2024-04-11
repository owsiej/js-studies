// Zmodyfikujmy naszą aplikację tak, by dla żądań pod adresem http://localhost:4700/users zwracała komunikat Hello from Users path
// a dla żądań pod adresem http://localhost:4700/comments zwracała komunikat Hello from Comments path

const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/plain" });

    if (req.url === "/users") {
      res.write("Hello from Users path");
    } else if (req.url === "/comments") {
      res.write("Hello from Comments path");
    } else {
      res.write("Hello from different path");
    }

    res.end();
  })
  .listen(4700, console.log("server started"));
