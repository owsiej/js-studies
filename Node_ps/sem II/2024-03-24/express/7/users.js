const express = require("express");
const router = express.Router();

let users = [
  {
    id: 1,
    firstName: "Jan",
    lastName: "Kowalski",
    email: "test@test.de",
  },
];

router.post("/add", (req, res) => {
  if (!req.query.name || !req.query.username || !req.query.email) {
    res.status(400);
    res.send("brakuje parametrów");
  }
  const { name, username, email } = req.query;
  const maxId = Math.max(...users.map((u) => u.id));
  users.push({
    id: maxId + 1,
    firstName: name,
    lastName: username,
    email: email,
  });
  res.status(201);

  res.send("dodano użytkownika");
});

router.get("/", (req, res) => {
  res.send(users);
});

router.get("/:userId", (req, res) => {
  if (isNaN(req.params.userId)) {
    res.status(404);
    res.send("podane id nie jest numerem");
  }
  const user = users.find((u) => u.id === Number(req.params.userId));
  if (!user) {
    res.status(404);
    res.send("szukany użytkownik nie istnieje");
  }
  res.send(user);
});

router.delete("/:userId", (req, res) => {
  if (isNaN(req.params.userId)) {
    res.status(404);
    res.send("podane id nie jest numerem");
  }
  const user = users.find((u) => u.id === Number(req.params.userId));
  if (!user) {
    res.status(404);
    res.send("szukany użytkownik nie istnieje");
  }
  users = users.filter((u) => u.id !== Number(req.params.userId));
  res.status(200);
  res.send("usunięto użytkownika");
});

module.exports = router;
