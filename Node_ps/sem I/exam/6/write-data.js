const fs = require("fs").promises;

const addDataToFile = async (filename, data) => {
  try {
    return await fs.writeFile(filename, data, { encoding: "utf-8" });
  } catch (error) {
    throw new Error(`Error during writing data to file. ${error.message}`);
  }
};

module.exports = addDataToFile;
