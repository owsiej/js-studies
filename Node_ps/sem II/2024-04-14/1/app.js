// Stwórzmy aplikację która będzie wyświetlała wartość zmiennych środowiskowych, pobranych z pliku .env. W tym celu użyjemy modułu npm dotenv

require("dotenv").config();

console.log(process.env.PORT);
