const express = require("express");
const app = express();

const getRequestInformations = (req, res, next) => {
  console.log(
    "HTTP method: " +
      req.method +
      ", URL: " +
      req.url +
      ",Query string: " +
      req.query
  );
  next();
};

app.use(getRequestInformations);

app.all("*", (req, res) => {
  res.send("hello");
});

app.listen(4700, console.log("server started"));
