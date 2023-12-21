/*
[2 punkty] Napisz aplikację która przyjmuje w parametrze uruchamiania ciąg znaków a następnie wyświetli go w kolorach tęczy. 
Wykorzystaj moduł colors (https://www.npmjs.com/package/colors) w wersji 1.3.2!. Pamiętaj o obsłudze błędów.
Sposób obsługi parametrów wejściowych jest dowolny (w kodzie rozwiązania należy dodać komentarz z przykładowym wywołaniem).
*/

const colors = require("colors");
const yargs = require("yargs");
const colorsPackageJsonPath = require.resolve("colors/package.json");
const colorsPackageVersion = require(colorsPackageJsonPath).version;

if (colorsPackageVersion!=="1.3.2") {
   throw new Error(`Wrong version of colors module. You are supposed to use 1.3.2, not ${colorsPackageVersion}`) 
}

const args = yargs(process.argv)
  .option("text", {
    describe: "string to color",
    type: "string",
    demandOption: true,
  })
  .help().argv;
if (args._.length !== 2) {
  console.log(
    "You supplied some unknown arguments, but I will ignore them and proceed further."
  );
}
if (args.text.trim().length === 0) {
  throw new Error(
    "You either provided an empty string or string with whitespace's only. I do not have anything to color ;("
  );
}
console.log("Provided text in rainbow colors: "+args.text.rainbow);


//$ node app.js --text="sometexttocolor"

