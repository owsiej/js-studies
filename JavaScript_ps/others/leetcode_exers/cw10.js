/*
Given a function fn, return a new function that is identical 
to the original function except that it ensures fn is called at most once.

    The first time the returned function is called, it should return the same result as fn.
    Every subsequent time it is called, it should return undefined.

*/

function once(fn) {
  let hasBeenCalled = false;

  return function (...args) {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      return fn(...args);
    }
  };
}

let func = (a, b, c) => a + b + c;
let onceFn = once(func);
console.log(onceFn(1, 2, 3));
console.log(onceFn(2, 3, 6));
