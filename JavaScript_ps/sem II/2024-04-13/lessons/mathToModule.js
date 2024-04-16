const mathModule = function () {
  let lastOperation;
  let lastResult;
  let lastB;

  function withCache(operation) {
    return function (a, b) {
      const result = operation(a, b);
      lastOperation = withCache(operation);
      lastResult = result;
      lastB = b;
      return result;
    };
  }

  //   function cacheLastOperation(operation, result, b) {
  //     lastOperation = operation;
  //     lastResult = result;
  //     lastB = b;
  //   }

  const add = withCache((a, b) => a + b);
};

function sub(a, b) {
  return a - b;
}
function div(a, b) {
  return a / b;
}
function mul(a, b) {
  return a * b;
}

console.log(mul(5, 5));
