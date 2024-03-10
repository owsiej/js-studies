const getRequestData = require("../request-data");
const Weather = require("./weatherClass");
const getWeatherData = async (url) => {
  try {
    const weather = await getRequestData(url);

    return new Weather(
      weather.main,
      weather.weather[0].description,
      weather.name
    );
  } catch (error) {
    throw new Error(`Error during getting weather data. ${error}`);
  }
};
module.exports = getWeatherData;
