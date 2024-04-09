const express = require("express");
const app = express();

const requestLogger = (req, res, next) => {
  const time = new Date().toISOString();
  console.log(`Request date time: ${time}`);
  next();
};
const responseLogger = (req, res, next) => {
  const time = new Date().toISOString();
  console.log(`Response date time: ${time}`);
  next();
};

app.use(requestLogger);

app.all("*", (req, res, next) => {
  res.send("hello ");
  next();
});

app.use(responseLogger);

app.listen(4700, console.log("server started"));
