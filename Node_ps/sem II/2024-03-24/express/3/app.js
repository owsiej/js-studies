// Rozszerzmy naszą aplikację z zadania 2 o dodatkowe działania matematyczne takie jak dodawanie, dzielenie i odejmowanie. Podzielmy zadania na odpowiednie ścieżki.

const express = require("express");
const app = express();

app.all("mnozenie/:num1/:num2", (req, res) => {
  const { num1, num2 } = req.params;
  if (isNaN(num1) || isNaN(num2)) {
    res.statusCode = 400;
    res.send("co najmniej jeden z parametrów nie jest liczbą");
  }
  const result = Number(num1) * Number(num2);
  res.send(result.toString());
});
app.all("dodawanie/:num1/:num2", (req, res) => {
  const { num1, num2 } = req.params;
  if (isNaN(num1) || isNaN(num2)) {
    res.statusCode = 400;
    res.send("co najmniej jeden z parametrów nie jest liczbą");
  }
  const result = Number(num1) + Number(num2);
  res.send(result.toString());
});
app.all("odejmowanie/:num1/:num2", (req, res) => {
  const { num1, num2 } = req.params;
  if (isNaN(num1) || isNaN(num2)) {
    res.statusCode = 400;
    res.send("co najmniej jeden z parametrów nie jest liczbą");
  }
  const result = Number(num1) - Number(num2);
  res.send(result.toString());
});
app.all("dzielenie/:num1/:num2", (req, res) => {
  const { num1, num2 } = req.params;
  if (isNaN(num1) || isNaN(num2)) {
    res.statusCode = 400;
    res.send("co najmniej jeden z parametrów nie jest liczbą");
  }
  const result = Number(num1) / Number(num2);
  res.send(result.toString());
});

app.listen(4700, console.log("server started"));

// DODAC POZOSTAŁE DZIAŁANIA
