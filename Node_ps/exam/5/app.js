const yargs = require("yargs");
const getUserData = require("./user/user");
const getWeatherData = require("./weather/weather");
const getReposData = require("./repos/repos");

const args = yargs(process.argv)
  .option("login", {
    describe: "User login to GitHub page.",
    type: "string",
    demandOption: true,
  })
  .option("followers", {
    describe: "Flag to tell if you want to display user followers",
    type: "string",
    choices: ["true", "false"],
  })
  .help().argv;

const userLogin = args.login;
const shouldDisplayFollowers = args.followers
  ? JSON.parse(args.followers)
  : args.followers;
const loginValidatePattern =
  /^[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,38}$/;
if (!loginValidatePattern.test(userLogin)) {
  throw new Error(
    "Invalid login. Login can only consist of 1-39 alphanumeric characters including dashes, \
    but dashes at the beginning or end of login are not allowed."
  );
}

const userUrl = `https://api.github.com/users/${userLogin}`;
let weatherUrl =
  "https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&q=";

(async () => {
  try {
    const userData = await getUserData(userUrl, shouldDisplayFollowers);
    console.log(`${userData}`);

    if (userData.reposUrl) {
      const reposData = await getReposData(userData.reposUrl);
      console.log(`${reposData}`);
    } else {
      console.error(
        "User do not have specified url to repos so I can not display their names."
      );
    }
    if (userData.location) {
      weatherUrl = weatherUrl.concat(userData.location);
      const weatherData = await getWeatherData(weatherUrl);
      console.log(`${weatherData}`);
    } else {
      console.error(
        "User do not have specified location so I can not check weather."
      );
    }
  } catch (error) {
    console.log(error);
  }
})();

// $ node app.js --login octocat --followers true
