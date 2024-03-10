/*
Rozszerzenie aplikacji z zadania 7 o wprowadzanie danych które chcemy zapisać w parametrach uruchamiania. 
Do wykorzystania zewnętrzny moduł yargs.
*/

const file = require("fs");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const args = yargs(hideBin(process.argv))
  .option("name", {
    describe: "First name",
    type: "string",
    demandOption: true,
  })
  .option("lastName", {
    describe: "Last name",
    type: "string",
    demandOption: true,
  })
  .help().argv;

const user = {
  name: args.name,
  lastName: args.lastName,
};

if (!args.name || !args.lastName) {
  throw new TypeError("Wrong type of arguments.");
}

const jsonStringObj = JSON.stringify(user);
file.writeFileSync("user.json", jsonStringObj, { encoding: "utf-8" });
