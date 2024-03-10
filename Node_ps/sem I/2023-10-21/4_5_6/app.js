/*
4. Kalkulator wykonujący cztery podstawowe działania (dodawanie, odejmowanie, dzielenie oraz mnożenie). Aplikacja powinna składać się z 2 plików (główna aplikacja app.js oraz math.js zawierający odpowiednie funkcje).


5. Rozbudowanie kalkulatora o stałą matematyczną PI (3,14) i wypisanie jej wartości na konsoli w naszej głównej aplikacji.

6. Zapisanie do pliku wyniku działania z zadania 5. Wykorzystując moduł Core'owy File System (https://nodejs.org/dist/latest-v18.x/docs/api/fs.html , szukana funkcja ma przyrostek Sync).
*/
const file = require("fs");
const mathOperations = require("./math.js");
const a =10;
const b =5;

const addition= mathOperations.PI;

console.log(mathOperations.add(a,b));
console.log(mathOperations.sub(a,b));
console.log(mathOperations.mul(a,b));
console.log(mathOperations.div(a,b));
console.log(mathOperations.PI);

file.writeFileSync("result.txt", addition.toString());