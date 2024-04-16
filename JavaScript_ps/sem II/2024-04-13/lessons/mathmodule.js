const mathModule = (function () {
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

  function add(a, b) {
    return a + b;
  }

  function sub(a, b) {
    return a - b;
  }
  function div(a, b) {
    return a / b;
  }
  function mul(a, b) {
    return a * b;
  }

  return {
    add: withCache(add),
    sub: withCache(sub),
    div: withCache(div),
    mul: withCache(mul),
    repeat() {
      return lastOperation(lastResult, lastB);
    },
  };
})();

console.log(mul(5, 5));
