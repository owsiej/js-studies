const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const fs = require("fs");
const path = require("path");

const forbiddenWords = ["wino", "hazard", "cukierki"];

app.use(bodyParser.text());

app.get("/data", (req, res) => {
  const dataPath = path.join(__dirname, "data.txt");
  if (fs.existsSync(dataPath)) {
    res.sendFile(dataPath);
  } else {
    res.status(204);
    res.send("file does not exists");
  }
});

app.get("/forbiddenwords", (req, res) => {
  res.send(forbiddenWords);
});

app.all("*", (req, res) => {
  if (forbiddenWords.some((e) => req.body.includes(e))) {
    res.status(400);
    res.send("used forbidden word");
  } else {
    const body = req.body;
    fs.writeFileSync("data.txt", body + "\n", {
      encoding: "utf-8",
      flag: "a",
    });
    res.send("requested body saved to file");
  }
});

app.listen(4700, console.log("server started"));
