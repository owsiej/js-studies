const express = require("express");
const app = express();

app.use(express.static("./"));

// http://localhost:4700/image.jpg
// http://localhost:4700/music.txt
// http://localhost:4700/comment.txt
app.get("/:filename", (req, res) => {
  res.send(req.params.filename);
});

app.listen(4700, console.log("start server"));
