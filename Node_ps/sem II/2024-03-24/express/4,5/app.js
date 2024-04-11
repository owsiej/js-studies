// Stwórzmy aplikację której zadaniem będzie operacja na tablicy zawierającej użytkowników

// 'końcówka' /add niech służy do dodawania użytkownika i przyjmuje parametry ?name=Jan&username=janko&email=jan@nowak.abc
// dodajmy ścieżkę zwracającą wszystkich użytkowników
// dodajmy końcówkę która wyświetla dane pojedynczego użytkownika na podstawie parametru id wysłanego przez klienta
// rozszerzmy aplikację o kasowanie użytkownika

const express = require("express");
const app = express();

let users = [
  {
    id: 1,
    firstName: "Jan",
    lastName: "Kowalski",
    email: "test@test.de",
  },
];

let posts = [
  {
    id: 1,
    title: "costampisze",
    body: "tralalalala",
  },
];

app.post("/adduser", (req, res) => {
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

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/users/:userId", (req, res) => {
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

app.delete("/users/:userId", (req, res) => {
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

app.post("/addpost", (req, res) => {
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

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.get("/posts/:postId", (req, res) => {
  if (isNaN(req.params.postId)) {
    res.status(404);
    res.send("podane id nie jest numerem");
  }
  const post = posts.find((p) => p.id === Number(req.params.postId));
  if (!post) {
    res.status(404);
    res.send("szukany post nie istnieje");
  }
  res.send(post);
});

app.delete("/posts/:postId", (req, res) => {
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

app.listen(4700, console.log("server started"));
