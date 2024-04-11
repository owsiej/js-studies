const express = require("express");
const router = express.Router();

let posts = [
  {
    id: 1,
    title: "costampisze",
    body: "tralalalala",
  },
];

router.post("/add", (req, res) => {
  if (!req.query.title || !req.query.body) {
    res.status(400);
    res.send("brakuje parametrów");
  }
  const { title, body } = req.query;
  const maxId = Math.max(...posts.map((u) => u.id));
  posts.push({
    id: maxId + 1,
    title: title,
    body: body,
  });
  res.status(201);

  res.send("dodano posta");
});

router.get("/", (req, res) => {
  res.send(posts);
});

router.get("/:postId", (req, res) => {
  if (isNaN(req.params.postId)) {
    res.status(404);
    res.send("podane id nie jest numerem");
  }
  const post = posts.find((p) => p.id === Number(req.params.postId));
  if (!post) {
    res.status(404);
    res.send("szukany post nie istnieje");
  }
  res.format({
    "text/plain": function () {
      res.send(`Title: ${post.title}, body ${post.body}`);
    },
    "text/html": function () {
      res.send(
        `<html><body><p>Title: ${post.title} Body: ${post.body}</p></body></html>`
      );
    },
    "application/json": function () {
      res.send(post);
    },
  });
  res.send(post);
});

router.delete("/:postId", (req, res) => {
  if (isNaN(req.params.postId)) {
    res.status(404);
    res.send("podane id nie jest numerem");
  }
  const post = posts.find((p) => p.id === Number(req.params.postId));
  if (!post) {
    res.status(404);
    res.send("szukany post nie istnieje");
  }
  posts = posts.filter((p) => p.id !== Number(req.params.postId));
  res.status(200);
  res.send("usunięto posta");
});

module.exports = router;
