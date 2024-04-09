const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

const fileMiddleware = (req, res, next) => {
  const file = req.url;
  const absolutePath = path.join(__dirname, file);
  console.log(absolutePath);
  if (fs.existsSync(absolutePath)) {
    res.sendFile(absolutePath);
    console.log("znaleziono");
  } else {
    console.log("nie znaleziono");

    next();
  }
};

app.use(fileMiddleware);

app.all("*", (req, res) => {
  res.send("hello ");
});

app.listen(4700, console.log("server started"));
