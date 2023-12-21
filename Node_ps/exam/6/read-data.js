const fs = require("fs").promises;

const readFile = async (path) => {
  let fileData;
  try {
    fileData = await fs.readFile(path, { encoding: "utf-8" });
    fileData = JSON.parse(fileData);
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new SyntaxError(`Error during parsing data to JSON, ${error}`);
    }
    throw new Error(`Error during reading the file. ${error.message}`);
  }
  if (!Array.isArray(fileData)) {
    throw new TypeError(
      "Read object is not type of array, so content of file was deleted."
    );
  }
  return fileData;
};

module.exports = readFile;
