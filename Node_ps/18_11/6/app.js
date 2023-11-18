const yargs = require("yargs");
const math = require("./math.js");

const firstNumber = Number(yargs.argv.a);
const secondNumber = Number(yargs.argv.b);
const operator = yargs.argv.operator;

console.log(`Wynik: ${math[operator](firstNumber, secondNumber)}`);