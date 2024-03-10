const colors = require("colors");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const colorsPackageJsonPath = require.resolve("colors/package.json");
const colorsPackageVersion = require(colorsPackageJsonPath).version;

if (colorsPackageVersion !== "1.3.2") {
  throw new Error(
    `Wrong version of colors module. You are supposed to use 1.3.2, not ${colorsPackageVersion}`
  );
}

const args = yargs(hideBin(process.argv))
  .option("text", {
    describe: "string to color",
    type: "string",
    demandOption: true,
  })
  .strict()
  .help().argv;

if (args.text.trim().length === 0) {
  throw new Error(
    "You either provided an empty string or string with whitespace's only. I do not have anything to color ;("
  );
}
console.log("Provided text in rainbow colors: " + colors.rainbow(args.text));

//$ node app.js --text="sometexttocolor"
