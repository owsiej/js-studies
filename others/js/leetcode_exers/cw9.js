/*
Write a function createCounter. It should accept an initial integer init. 
It should return an object with three functions.

The three functions are:

    increment() increases the current value by 1 and then returns it.
    decrement() reduces the current value by 1 and then returns it.
    reset() sets the current value to init and then returns it.

*/

function createCounter(init) {
  let currentVal = init;
  return {
    increment() {
      return ++currentVal;
    },
    decrement() {
      return --currentVal;
    },
    reset() {
      currentVal = init;
      return currentVal;
    },
  };
}

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.reset());
