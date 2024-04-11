// Stwórzmy aplikację która pobierając 2 parametry a i b z adresu url (http://localhost:4700/2/3) wykona mnożenie.
// Rezultat działania powinniśmy wysłać do klienta.

const express = require("express");
const app = express();

app.all("/:num1/:num2", (req, res) => {
  const { num1, num2 } = req.params;
  if (isNaN(num1) || isNaN(num2)) {
    res.statusCode = 400;
    res.send("co najmniej jeden z parametrów nie jest liczbą");
  }
  const result = Number(num1) * Number(num2);
  res.send(result.toString());
});

app.listen(4700, console.log("server started"));
