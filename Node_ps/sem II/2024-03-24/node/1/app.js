// Stwórzmy pierwszą aplikację serwerową wykorzystując wbudowany moduł HTTP, który wyśle do naszego klienta przywitanie.
// Sprawdźmy działanie poprzez uruchomienie przeglądarki i wysłanie żądania do naszego serwera (port 4700)

const http = require("http");

http
  .createServer((req, res) => {
    res.write("Hello World!");
    res.end();
  })
  .listen(4700, console.log("server started"));
