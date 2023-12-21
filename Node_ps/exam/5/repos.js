const getRequestData = require("./request-data");

const getReposNames = async (url) => {
  try {
    const repos = await getRequestData(url);
    return repos.reduce((acc, repo) => {
      acc.push(repo.name);
      return acc;
    }, []);
  } catch (error) {
    throw new Error(`Error during getting repos data. ${error}`);
  }
};
module.exports = getReposNames;
