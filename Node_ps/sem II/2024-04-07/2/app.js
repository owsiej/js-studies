const express = require("express");
const app = express();

const authorizationMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (token === "alamakota") {
    next();
  } else {
    res.status(401);
    res.send("not authorized");
  }
};

app.use(authorizationMiddleware);

app.all("*", (req, res) => {
  res.send("hello");
});

app.listen(4700, console.log("server started"));
