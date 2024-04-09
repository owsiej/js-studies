const express = require("express");
const app = express();

const users = [
  {
    login: "jan",
    password: "alamakota",
    name: "Jan",
  },
  {
    login: "adam",
    password: "cukierki",
    name: "Adam",
  },
];

const authorizationMiddleware = (req, res, next) => {
  const header = req.headers.authorization;
  const [login, password] = header.split(":");

  const user = users.find((u) => u.login === login && u.password === password);

  if (user) {
    req.loggedUser = user.name;
    next();
  } else {
    res.status(401);
    res.send("user does not exist");
  }
};

app.use(authorizationMiddleware);

app.all("*", (req, res) => {
  res.send("hello " + req.loggedUser);
});

app.listen(4700, console.log("server started"));
