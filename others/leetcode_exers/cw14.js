/*
Write a function argumentsLength that returns the count of arguments passed to it. 
*/

function argumentsLength(...args) {
  return args.length;
}

console.log(argumentsLength(1, 23, 5));
