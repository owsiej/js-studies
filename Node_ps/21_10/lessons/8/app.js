/*
Rozszerzenie zadania 4. Aplikacja powinna wczytać jedną liczbę z pliku a.txt, drugą liczbę z pliku b.txt. Na tych liczbach należy wykonać operacja dodawania, odejmowania, mnożenia i dzielenia a wyniki wszystkich działań zapisać w pliku wynik.txt, każdy wynik w osobnej linii. Należy wykorzystać moduł Core'owy File system (https://nodejs.org/dist/latest-v18.x/docs/api/fs.html , szukana funkcja ma przyrostek Sync)
*/
const file = require("fs");
const mathOperations = require("./math.js");
const a =Number(file.readFileSync("./a.txt",));
const b =Number(file.readFileSync("./b.txt",));;

const addition = mathOperations.add(a,b);
const substraction = mathOperations.sub(a,b);
const multiplication = mathOperations.mul(a,b);
const division = mathOperations.div(a,b);

const result = `Dodawanie liczb ${a} i ${b} daje wynik ${addition}
Odejmowanie liczb ${a} i ${b} daje wynik ${substraction}
Mnożenie liczb ${a} i ${b} daje wynik ${multiplication}
Dzielenie liczb ${a} i ${b} daje wynik ${division}`;

file.writeFileSync("wynik.txt", result);