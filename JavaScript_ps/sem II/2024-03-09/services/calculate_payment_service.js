import { getCurrentCurrency } from "../services/request_service.js";

export async function calculateSettleAmount(DEFAULT_AMOUNT) {
  const currencyRate = await getCurrentCurrency();
  const amountInPLN = DEFAULT_AMOUNT * currencyRate;
  const fee = amountInPLN * 0.05;
  return amountInPLN + fee;
}
