const axios = require("axios");

const getUser = (id) => {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  return axios.get(url).then((response) => response.data);
};

const getWeather = (lat, lng) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;
  return axios.get(url).then((response) => response.data);
};

getUser(1)
  .then((user) => {
    console.log(user.name);
    const lat = user.address.geo.lat;
    const lng = user.address.geo.lng;
    return getWeather(lat, lng);
  })
  .then((weather) => {
    console.log(weather.weather[0].description);
  })
  .catch((error) => {
    console.log(error);
  });
