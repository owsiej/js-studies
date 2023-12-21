const axios = require("axios");

const getRequestData = async (url) => {
  try {
    const response = await axios.get(url, {
      validateStatus: function (status) {
        return status === 200;
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(`Error during retrieving data from server., ${error.message}`);
  }
};

module.exports = getRequestData;
