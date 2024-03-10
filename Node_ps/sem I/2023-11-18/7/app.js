/*
Stworzenie aplikacji która pozwoli na zapisanie całego obiektu do pliku. 
Z wykorzystaniem funkcji pozwalającej na przekonwertowanie obiektu na postać tekstową (JSON.stringify).
*/
const file = require("fs");

const user = {
  name: "Jan",
  lastName: "Nowak",
};

const jsonStringObj = JSON.stringify(user);

file.writeFileSync("user.json", jsonStringObj, { encoding: "utf-8" });
