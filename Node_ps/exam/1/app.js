/*
[2 punkty] Napisz jak najprostszy kod który spowoduje błąd stack overflow,
czyli zwróci komunikat błędu:
Uncaught RangeError: Maximum call stack size exceeded
*/

(function forceStackOverflowError() {
  return forceStackOverflowError();
})();
