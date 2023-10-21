/*
Rozszerzenie zadania 2 tak by plik user.js zwracał imię oraz nazwisko jako oddzielne zmienne. W app.js wyświetlmy przywitanie osoby.
*/

const name = require("./user.js");

console.log("Hello " + name.userName +" "+name.userLastName+" !");