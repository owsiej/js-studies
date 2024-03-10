import axios from "axios";

export const getCurrentCurrency = async () => {
  const url = "https://currency-rate-cache.vercel.app/rate?base=USD&symbol=PLN";
  const response = await axios.get(url);
  return response.data.rate;
};
