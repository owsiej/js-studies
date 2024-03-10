const fs = require("fs").promises;

const saveDataToFile = async (name, data) => {
  try {
    await fs.writeFile(name, data);
    console.log("File saved successfully.");
  } catch (error) {
    throw new Error(`Error during saving data to file., ${error}`);
  }
};

module.exports = saveDataToFile;
