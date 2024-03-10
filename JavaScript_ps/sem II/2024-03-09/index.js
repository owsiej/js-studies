import { createPayment } from "../2024-03-09/services/paymentService.js";
import * as RepositoryService from "../2024-03-09/services/repository.js";
import { PAYMENT_STATUS } from "../2024-03-09/consts/payment_consts.js";

const baseObj = {
  user_id: "user-1",
  request_amount: 100,
  currency: "USD",
};

async function processPayment(paymentData) {
  const payment = await createPayment(paymentData);
  RepositoryService.savePayment(payment);
  return payment;
}

function processPaymentSuccess(paymentConfirmationDto) {
  const payment = RepositoryService.getPaymentById(paymentConfirmationDto);
  payment.status = PAYMENT_STATUS.SUCCESS;
  payment.payment_date = new Date();
  return payment;
}

(async () => {
  try {
    const payment = await processPayment(baseObj);
    const transaction = processPaymentSuccess(payment.id);

    console.log(transaction);
  } catch (error) {
    console.log(error);
  }
})();
