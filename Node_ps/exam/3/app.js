const fs = require("fs");

const FILE_PATH = __filename;

fs.stat(FILE_PATH, (error, stats) => {
  if (error) {
    throw new Error(`Error during reading file stats. ${error}`);
  }
  console.log(`Creation date time: ${stats.birthtime}`);
  console.log(`Last modified date time: ${stats.mtime}`);
  console.log(`File size in bytes: ${stats.size}`);
});
