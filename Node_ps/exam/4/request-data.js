const axios = require("axios");

const getNumberData = async (number) => {
  const url = `https://lukaszuk.net/numbers.php?number=${number}`;
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

module.exports = getNumberData;
