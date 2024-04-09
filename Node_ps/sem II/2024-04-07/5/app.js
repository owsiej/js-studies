const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const forbiddenWords = ["wino", "hazard", "cukierki"];

app.use(bodyParser.text());

app.all("*", (req, res) => {
  if (forbiddenWords.some((e) => req.body.includes(e))) {
    res.status(400);
    res.send();
  } else {
    res.send("hello ");
  }
});

app.listen(4700, console.log("server started"));
