// Rozbudujmy aplikację z zadania 9 o zapisywanie logów do pliku - nowe logi powinny dopisywać się na końcu pliku.

const express = require("express");
const app = express();
const fs = require("fs");

const requestLogger = (req, res, next) => {
  const time = new Date().toISOString();
  const log = `Request date time: ${time}`;
  console.log(log);
  fs.writeFileSync("logs.txt", log + "\n", {
    encoding: "utf-8",
    flag: "a",
  });

  next();
};
const responseLogger = (req, res, next) => {
  const time = new Date().toISOString();
  const log = `Response date time: ${time}`;
  console.log(log);
  fs.writeFileSync("logs.txt", log + "\n", {
    encoding: "utf-8",
    flag: "a",
  });
};

app.use(requestLogger);

app.all("*", (req, res, next) => {
  res.send("hello ");
  next();
});

app.use(responseLogger);

app.listen(4700, console.log("server started"));
