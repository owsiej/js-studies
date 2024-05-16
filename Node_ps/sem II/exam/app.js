require("dotenv").config();
const express = require("express");
const datetimeRoute = require("./routes/datetime.js");
const advertisementRoute = require("./routes/advertisements.js");
const app = express();

app.use("/heartbeat", datetimeRoute);
app.use("/advertisement", advertisementRoute);
app.all("*", (req, res) => {
  res.status(404);
  res.sendFile(__dirname + "/static/404.jpg");
});
app.listen(process.env.SERVER_PORT, console.log("server started"));
