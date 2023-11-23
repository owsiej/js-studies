const math = require("./math.js");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const args = yargs(hideBin(process.argv))
  .option("a", {
    describe: "first number",
    type: "number",
    demandOption: true,
  })
  .option("b", {
    describe: "second number",
    type: "number",
    demandOption: true,
  })
  .option("operator", {
    describe: "math operation to execute, for / you must type //",
    choices: ["*", "-", "/", "+"],
    demandOption: true,
  })
  .help().argv;

if (isNaN(args.b) || isNaN(args.a)) {
  throw new TypeError("Wrong type of arguments.");
}

console.log(`Wynik: ${math[args.operator](args.a, args.b).toFixed(2)}`);
