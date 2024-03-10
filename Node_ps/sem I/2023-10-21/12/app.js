/*
Aplikacja złożona jest z jednego pliku: app.js. Podczas uruchamiania możemy przekazać jej dodatkowy parametr który jest ścieżką do istniejącego na dysku folderu. Zadaniem aplikacji jest wyświetlanie w konsoli nazw wszystkich plików i folderów znajdujących się bezpośrednio we wskazanym folderze. Uruchomienie z niewłaściwą liczbą parametrów powinno skutkować wyświetleniem komunikatu w konsoli. Należy wykorzystać moduł Core'owy File system (https://nodejs.org/dist/latest-v18.x/docs/api/fs.html , potrzebna funkcja przyrostek Sync)
*/

const file = require("fs");

const arg = process.argv;

if (arg.length <= 2) {
  console.log("zbyt mało argumentów");
} else if (arg.length > 3) {
  console.log("zbyt dużo argumentów");
} else {
  const path = arg[2];
  const folders = file.readdirSync(path);
  console.log(`Pliki w folderze ${path}`);
  for (const file of folders) {
    console.log(file);
  }
}
