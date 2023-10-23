/*

    Rozszerzenie aplikacji z zadania 8 tak, by nazwy plików z których pobieramy liczby były podawane w parametrach w czasie uruchamiania.

    Rozszerzenie aplikacji z zadania 10 tak, by jej uruchomienie z niewłaściwą liczbą parametrów skutkowało wyświetleniem stosownego komunikatu w konsoli.
*/
const file = require("fs");
const mathOperations = require("./math.js");

const args = process.argv;

if (args.length <= 3) {
  console.log("Zbyt mało argumentów");
} else if (args.length > 4) {
  console.log("Zbyt dużo argumentów");
} else {
  const a = Number(file.readFileSync(args[2]));
  const b = Number(file.readFileSync(args[3]));

  const addition = mathOperations.add(a, b);
  const substraction = mathOperations.sub(a, b);
  const multiplication = mathOperations.mul(a, b);
  const division = mathOperations.div(a, b);

  const result = `Dodawanie liczb ${a} i ${b} daje wynik ${addition}
Odejmowanie liczb ${a} i ${b} daje wynik ${substraction}
Mnożenie liczb ${a} i ${b} daje wynik ${multiplication}
Dzielenie liczb ${a} i ${b} daje wynik ${division}`;

  file.writeFileSync("wynik.txt", result);
}
