const fs = require("fs");

function readDataAndParseJSON(path) {
  try {
    const readData = fs.readFileSync(path, { encoding: "utf-8" });
    const fileData = JSON.parse(readData);
    return fileData;
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new SyntaxError(`Error during parsing data to JSON, ${error}`);
    }
    throw new Error(`Error during reading file data., ${error}`);
  }
}

module.exports = readDataAndParseJSON;
