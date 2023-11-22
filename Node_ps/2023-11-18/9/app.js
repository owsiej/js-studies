const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const fs = require("fs");
const path = require("path");

const args = yargs(hideBin(process.argv))
  .option("directory", {
    describe: "Path to folder",
    type: "string",
    demandOption: true,
  })
  .option("size", {
    describe: "Used to display files of size bigger then input.",
    type: "number",
  })
  .help().argv;

if (args.hasOwnProperty("size") && isNaN(args.size)) {
  throw new TypeError("Wrong input type for argument size.");
}

function displayFilesByGivenSizeOrAverageSize(pathToFiles, size) {
  const listOfFiles = fs.readdirSync(pathToFiles);
  const mappedFileList = listOfFiles.map((file) => {
    const fileStats = fs.statSync(path.join(pathToFiles, file), {
      throwIfNoEntry: false,
    });
    return {
      name: file,
      size: fileStats ? fileStats.size : 0,
    };
  });

  const target =
    size === undefined
      ? Object.entries(mappedFileList).reduce(
          (a, b) => a + Number(b[1].size),
          0
        ) / mappedFileList.length
      : size;
  const result = mappedFileList
    .filter((file) => file.size > target)
    .sort((a, b) => b.size - a.size);

  console.log("Wynik działania aplikacji:");

  if (size === undefined) {
    console.log(`mean file size: ${target.toFixed(2)}`);
  }
  console.table(result);
}
displayFilesByGivenSizeOrAverageSize(args.directory, args.size);
