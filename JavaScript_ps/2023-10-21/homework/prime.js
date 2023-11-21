function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.floor(number / 2); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(97));

function getNPrimeNumbers(n) {
  let count = 0;
  let currentNumber = 0;
  let primeNumbers = [];
  while (count != n) {
    isPrime(currentNumber) ? primeNumbers.push(currentNumber) && count++ : null;
    currentNumber++;
  }
  return primeNumbers;
}
console.log(getNPrimeNumbers(15));
