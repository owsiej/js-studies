const getRequestData = require("../request-data");
const User = require("./userClass");

const getUserData = async (url, followers) => {
  try {
    const user = await getRequestData(url);

    return new User(
      user.name,
      user.public_repos,
      user.repos_url,
      user.location,
      followers ? user.followers : false
    );
  } catch (error) {
    throw new Error(`Error during getting user data. ${error}`);
  }
};
module.exports = getUserData;
