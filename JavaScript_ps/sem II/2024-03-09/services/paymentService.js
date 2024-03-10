import { PAYMENT_STATUS } from "../consts/payment_consts.js";
import { calculateSettleAmount } from "../services/calculate_payment_service.js";

export async function createPayment(paymentData) {
  paymentData.id = "123";
  paymentData.settled_amount = await calculateSettleAmount(
    paymentData.request_amount
  );
  paymentData.creation_date = new Date();

  paymentData.status = PAYMENT_STATUS.PENDING;
  return paymentData;
}
