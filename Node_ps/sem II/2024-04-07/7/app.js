const express = require("express");
const app = express();

app.use(express.static("./static-files"));

app.all("*", (req, res) => {
  res.status(400);
  res.send("file not found");
});

app.listen(4700, console.log("server started"));
