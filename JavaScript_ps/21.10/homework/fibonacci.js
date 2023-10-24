// let array=[0,1];

// for (let i=0; i<=6;i++) {
//     array.push(array[array.length-1]+array[array.length-2]);
// }
// console.log(array);

function getFibboNumbers(n) {
  if (n == 1) {
    return [0, 1];
  }
  if (n == 0) {
    return [0];
  }
  let array = getFibboNumbers(n - 1);
  array.push(array[array.length - 1] + array[array.length - 2]);
  return array;
}

console.log(getFibboNumbers(8));
