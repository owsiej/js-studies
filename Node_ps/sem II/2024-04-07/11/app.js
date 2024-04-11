// Napiszmy aplikację która zwraca dane użytkownika pobrane z adresu https://jsonplaceholder.typicode.com/users/{userId}.
// UserId niech będzie pobierane z adresu naszego endpointu (np http//localhost:4700/users/:userId).
// W przypadku braku użytkownika lub problemów w komunikacji z serwerem rzućmy Error, który zostanie obsłużony w middleware.
// Middleware powinno zapisać do pliku czas wystąpienia błędu i zwrócić odpowiedź ze stosownym komunikatem.

const express = require("express");
const axios = require("axios");
const app = express();
const fs = require("fs");

const getRequestData = async (url) => {
  try {
    const response = await axios.get(url, {
      validateStatus: function (status) {
        return status === 200;
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const catchErrorLog = (req, res) => {
  const time = new Date().toISOString();
  const log = `Error date time: ${time}, error message: ${res.error.message}`;
  fs.writeFileSync("errorlogs.txt", log + "\n", {
    encoding: "utf-8",
    flag: "a",
  });
  res.send(res.error.message);
};

app.get("/users/:userId", async (req, res, next) => {
  const userId = req.params.userId;
  const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
  try {
    const userData = await getRequestData(url);
    res.send(userData);
  } catch (error) {
    res.error = error;
    next();
  }
});

app.use(catchErrorLog);

app.listen(4700, console.log("server started"));
