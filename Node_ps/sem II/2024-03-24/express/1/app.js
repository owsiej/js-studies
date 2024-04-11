// Stwórzmy pierwszą aplikację serwerową z użyciem frameworka Express.
// Gdy żądanie zawiera parametr name, powitajmy naszego użytkownika po imieniu zwracając Hello {wartość_parametru_name}. (http://localhost:4700?name=Jan).

const express = require("express");
const app = express();

// app.all("*", (req, res) => {
//   if (req.query.name) {
//     res.send(`Hello ${req.query.name}`);
//   } else {
//     res.send("hello world");
//   }

// });

//  inny link (http://localhost:4700/name/Jan)
app.all("/name/:name", (req, res) => {
  if (req.params.name) {
    res.send(`Hello ${req.params.name}`);
  } else {
    res.send("Hello world");
  }
});

app.listen(4700, console.log("server started"));
