const express = require("express");
const app = express();
const users = require("./users");
const posts = require("./posts");

// app.use(express.json());

app.use("/users", users);
app.use("/posts", posts);
app.listen(4700, console.log("server started"));
