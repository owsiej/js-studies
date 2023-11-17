/*
Given an array arr and a chunk size size, return a chunked array. 
A chunked array contains the original elements in arr, but consists of subarrays each of length size. 
The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

Please solve it without using lodash's _.chunk function.
*/

function chunkArrays(arr, size) {
  const chunkedArray = [];
  const steps = arr.length % size === 0 ? arr.length - 1 : arr.length;
  for (let i = 0; i <= Math.floor(steps / size); i++) {
    let nestedArr = arr.splice(0, size);
    chunkedArray.push(nestedArr);
  }
  return chunkedArray;
}

const array = [1, 2, 3, 4, 5];
const size = 3;

console.table(chunkArrays(array, size));
