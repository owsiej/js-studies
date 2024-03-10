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
file.writeFile("user.json", jsonStringObj, { encoding: "utf-8" }, (error) => {
  if (error) {
    console.log("failed");
  } else {
    console.log("saved");
  }
});
