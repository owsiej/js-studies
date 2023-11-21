const array = [12,23,54,123,22,90,53,80];

function sumEvenSubOdd(arr) {
  return arr.reduce((v1, v2) => (v2 % 2 === 0 ? v1 + v2 : v1 - v2), 0);
}
console.log(sumEvenSubOdd(array));
