const payments = [];

export function savePayment(payment) {
  payments.push(payment);
}

export function getPayments() {
  return payments;
}

export function getPaymentById(paymentId) {
  return payments.find((payment) => payment.id == paymentId);
}
