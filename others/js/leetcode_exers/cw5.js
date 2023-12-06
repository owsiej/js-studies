/*
Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

    arr[i] - number from the arr
    i - index of arr[i]

filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) 
evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in Array.filter method.
*/

function customFilter(arr, fn) {
  let filteredArray = [];
  for (i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArray.push(arr[i]);
    }
    return filteredArray;
  }
}

array = [1, 2, 3];
func = function firstIndex(n, i) {
  return i === 0;
};

console.log(customFilter(array, func));
