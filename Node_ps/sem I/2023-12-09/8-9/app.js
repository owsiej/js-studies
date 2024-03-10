const yargs = require("yargs");
const user = require("./user.js");
const weather = require("./weather.js");
const fs = require("fs");
const args = yargs.argv;

const inputId = args.id;

const saveDataToObj = (user, weather, callback) => {
  const data = JSON.stringify({
    user: user,
    temp: weather,
  });

  callback(data);
};

user.getUser(inputId, (user) => {
  console.log(user.name);
  console.log("lat", user.address.geo.lat);
  console.log("lng", user.address.geo.lng);
  weather.getWeather(user.address.geo.lat, user.address.geo.lng, (weather) => {
    console.log(weather.main.temp);
    saveDataToObj(user.name, weather.main.temp, (dataObj) => {
      console.log(dataObj);
      fs.writeFile("user.json", dataObj, (error)=> {
        if (error) {
            console.log("saving data to file failed.")
        }
      });
    });
  });
});
