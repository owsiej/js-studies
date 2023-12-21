const getRequestData = require("./request-data");

const getUserData = async (url, followers) => {
  const userData = {};
  try {
    const user = await getRequestData(url);
    userData.name = user.name;
    if (followers) {
      userData.followers = user.followers;
    }
    userData.numberOfRepos = user.public_repos;
    userData.reposUrl = user.repos_url;

    userData.location = user.location;
  } catch (error) {
    throw new Error(`Error during getting user data. ${error}`);
  }
  return userData;
};
module.exports = getUserData;
