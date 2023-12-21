/*
[2 punkty] Napisz program który wypisze szczegóły pliku z własnym kodem źródłowym.
Wypisywane informacje:
    czas utworzenia
    czas modyfikacji
    rozmiar
Program powinien działać poprawnie także po zmianie nazwy i lokalizacji pliku - bez zmiany kodu źródłowego!
Przykłady wywołania
    > node app.js //wyświetla szczegóły pliku app.js
po zmianie nazwy app.js na app2.js
    > node app2.js //wyświetla szczegóły pliku app2.js
Podpowiedź: jest to możliwe przy użyciu wbudowanych modułów Node.js.
*/

const fs = require("fs");

const FILE_PATH = __filename;

try {
  const fileStats = fs.statSync(FILE_PATH);
  console.log(`Creation date time: ${fileStats.birthtime}`);
  console.log(`Last modified date time: ${fileStats.mtime}`);
  console.log(`File size in bytes: ${fileStats.size}`);
} catch (error) {
  console.log("Error during reading file stats. ", error);
}
