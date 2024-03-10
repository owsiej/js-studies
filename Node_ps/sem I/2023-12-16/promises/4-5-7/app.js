const request = require("request");
const fs = require("fs");
const getUser = (id) => {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      if (error) {
        reject("błąd komunikacji z serwerem", error);
      } else if (response.statusCode !== 200) {
        console.log(response.status);
        reject("błąd pobierania użytkownika", error);
      } else {
        const user = JSON.parse(body);
        resolve(user);
      }
    });
  });
};

const getWeather = (lat, lng) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;
  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      if (error) {
        reject("błąd kominukacji z serwerem pogody: ", error);
      } else if (response.statusCode !== 200) {
        reject("błąd pobierania pogody");
      } else {
        const weather = JSON.parse(body);
        resolve(weather);
      }
    });
  });
};

const saveFile = (filename, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, JSON.stringify(data), (error) => {
      if (error) {
        reject(error);
      }
      resolve("file saved");
    });
  });
};

getUser(1)
  .then((user) => {
    console.log("nazwa użytkownika: " + user.name);
    const lat = user.address.geo.lat;
    const lng = user.address.geo.lng;
    return getWeather(lat, lng);
  })
  .then((weather) => {
    return saveFile("weather.json", weather);
  })

  .catch((error) => {
    console.log(error);
  });
