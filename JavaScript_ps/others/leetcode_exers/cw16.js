/*
Given an array arr and a function fn, return a sorted array sortedArr. 
You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. 
sortedArray must be sorted in ascending order by fn output.

You may assume that fn will never duplicate numbers for a given array.
*/

function sortBy(arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
}

const array = [[3, 4], [5, 2], [10, 1]];
func = (x) => x[1];

console.table(sortBy(array, func));
