const request = require("request");
const yargs = require("yargs");
const path = require("path");

const args = yargs.argv;

const inputId = args.id;

function getWeather(user) {
  const lat = user.address.geo.lat;
  const lng = user.address.geo.lng;
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;
  request(weatherUrl, (error, response, body) => {
    if (error) {
      console.log("network error");
    } else if (response.statusCode !== 200) {
      console.log("some problem retrieving weather data");
    } else {
      const weather = JSON.parse(body);
      console.log(weather.weather[0].main);
    }
  });
}

function getUser(id, callback) {
  request(
    `https://jsonplaceholder.typicode.com/users/${inputId}`,
    (error, response, body) => {
      if (error) {
        console.log("some error, ", error);
      } else if (response.statusCode == 200) {
        const user = JSON.parse(body);
        console.log(user.name);
        console.log(user.address.geo.lat);
        console.log(user.address.geo.lng);
        callback(user);
      } else {
        console.error("user not found");
      }
    }
  );
}
getUser(inputId, getWeather);
