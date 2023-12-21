/*

[10 punktów] Stwórz aplikację która pobierze z GitHuba informacje o użytkowniku i jego repozytoriach. Dodatkowo sprawdź aktualną pogodę w lokalizacji użytkownika.

X w parametrach uruchomienia jest podawany login użytkownika oraz opcjonalnie informacja czy wyświetlać liczbę śledzących użytkownika, 
    sposób obsługi parametrów wejściowych jest dowolny (w kodzie rozwiązania należy dodać komentarz z przykładowym wywołaniem).
X wyświetl nazwę użytkownika (name)
X wyświetl liczbę śledzących użytkownika (followers) - tylko jeżeli użyto odpowiedniego parametru przy uruchomieniu aplikacji
X wyświetl liczbę repozytoriów
X wyświetl nazwy repozytoriów (name)
X wyświetl opis pogody (weather.main, weather.description) w lokalizacji użytkownika (location - zwraca GitHub w danych użytkownika)
X żądania do API wysyłaj asynchronicznie
X pamiętaj o obsłudze błędów
X podziel rozwiązanie na moduły

Lista endpointów API:

    dane użytkownika: https://api.github.com/users/{userName}
        np https://api.github.com/users/octocat
    repozytoria użytkownika: https://api.github.com/users/{username}/repos
        np https://api.github.com/users/octocat/repos
    pogoda: https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&q={name}
        np https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&q=Białystok

*/

const yargs = require("yargs");
const getUserData = require("./user");
const getWeatherData = require("./weather");
const getReposNames = require("./repos");

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
    console.log(`User name: ${userData.name}`);
    if (shouldDisplayFollowers) {
      console.log(`User followers: ${userData.followers}`);
    }
    console.log(`Number of user repositories: ${userData.numberOfRepos}`);
    if (userData.reposUrl) {
      const reposNames = await getReposNames(userData.reposUrl);
      console.log("User repos names:");
      reposNames.forEach((repo) => {
        console.log(" * ", repo);
      });
    } else {
      console.error(
        "User do not have specified url to repos so I can not display their names."
      );
    }
    if (userData.location) {
      weatherUrl = weatherUrl.concat(userData.location);
      const weatherData = await getWeatherData(weatherUrl);

      console.log(`Weather in ${userData.location}`);
      Object.entries(weatherData.main).forEach((stat) => {
        console.log(` * ${stat[0]} - ${stat[1]}`);
      });
      console.log(`Weather description: ${weatherData.description}`);
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

// const user = await getRequestData(userUrl);
// console.log(`User name: ${user.name}`);
// if (shouldDisplayFollowers) {
//   console.log(`User followers: ${user.followers}`);
// }
// console.log(`Number of user repositories: ${user.public_repos}`);
// const repoUrl = user.repos_url;
// if (user.repos_url) {
//   const userRepos = await getRequestData(repoUrl);
//   console.log("User repos names:");
//   userRepos.forEach((repo) => {
//     console.log(" * ", repo.name);
//   });
// }
// if (!userData.location) {
//   throw new Error(
//     "User do not have specified location so I can not check weather."
//   );
// }

// weatherUrl = weatherUrl.concat(user.location);
// const weather = await getRequestData(weatherUrl);
// if (weather.main) {
//   console.log(`Weather in ${userLocation}`);
//   Object.entries(weather.main).forEach((stat) => {
//     console.log(` * ${stat[0]} - ${stat[1]}`);
//   });
// }
// console.log(`Weather description: ${weather.weather[0].description}`);
// } catch (error) {
// console.log(error);
// }
