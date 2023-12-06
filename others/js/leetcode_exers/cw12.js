/*
Write a function createHelloWorld. It should return a new function that always returns "Hello World". 

*/

function createHelloWorld() {
  return function (...args) {
    return "Hello World";
  };
}

const f = createHelloWorld();

console.log(f());
console.log(f(1,2,34,5));
console.log(f([]));
console.log(f("lolek", "bolek"));
