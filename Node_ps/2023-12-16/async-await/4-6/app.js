const axios = require("axios");
const yargs = require("yargs");

const userId = yargs.argv.id;

if (typeof userId !== "number" || userId < 0 || userId % 2 !== 0) {
  console.log("paramtetr musi być liczbą dodatnią całkowitą");
  process.exit(1);
}

const getUser = async (id) => {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const user = await axios.get(url);
  return user.data;
};

const getWeather = async (lat, lng) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;
  const response = await axios.get(url);
  return response.data;
};

(async () => {
  try {
    const user = await getUser(userId);
    console.log(user.name);
    const lat = user.address.geo.lat;
    const lng = user.address.geo.lng;
    const weather = await getWeather(lat, lng);
    console.log(weather.weather[0].description);
  } catch (error) {
    console.log(error);
  }
})();
