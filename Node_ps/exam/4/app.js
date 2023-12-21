const readDataAndParseJSON = require("./read-data.js");
const saveDataToFile = require("./save-data.js");
const getNumberData = require("./request-data.js");
const isValidFilename = require("./filename-validator.js");

const FILE_PATH = "./data.json";
const { number, filename } = readDataAndParseJSON(FILE_PATH);

if (!(number && filename)) {
  throw new Error(
    "Invalid parameters. Check property names of read object or format of data."
  );
}
if (!isValidFilename(filename)) {
  throw new Error("Invalid filename.");
}

(async () => {
  let numberData = await getNumberData(number);
  try {
    numberData = JSON.stringify(numberData);
  } catch (error) {
    throw new Error(`Error during converting data to JSON", ${error.message}`);
  }
  await saveDataToFile(filename, numberData);
})();
