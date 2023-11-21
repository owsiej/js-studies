const array = [12, 23, 54, 123, 22, 90, 53, 80];

function filterOddNumbers(arr) {
  return arr.filter((value) => value % 2 !== 0);
}

console.log(filterOddNumbers(array));
