const getRequestData = require("./request-data");

const getWeatherData = async (url) => {
  try {
    const weatherData = {};
    const weather = await getRequestData(url);
    weatherData.main = weather.main;
    weatherData.description = weather.weather[0].description;
    return weatherData;
  } catch (error) {
    throw new Error(`Error during getting weather data. ${error}`);
  }
};
module.exports = getWeatherData;
