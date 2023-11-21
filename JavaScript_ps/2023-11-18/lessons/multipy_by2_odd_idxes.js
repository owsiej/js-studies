const array = [3, 54, 65, 6, 7, 2, 8, 3, 643, 86, 8, 9, 43, 5, 6, 23, 4];

function multiplyBy2OddIndexes(arr) {
  return arr.map((value, index) => {
    const result = index % 2 !== 0 ? (value = value * 2) : value;
    return result;
  });
}

console.log(multiplyBy2OddIndexes(array));
