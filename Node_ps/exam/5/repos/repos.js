const getRequestData = require("../request-data");
const Repos = require("./repoClass");

const getReposData = async (url) => {
  try {
    const repos = await getRequestData(url);
    return new Repos(repos);
  } catch (error) {
    throw new Error(`Error during getting repos data. ${error}`);
  }
};
module.exports = getReposData;
