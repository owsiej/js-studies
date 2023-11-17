/*
Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.

A reduced array is created by applying the following operation: 
val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), 
... until every element in the array has been processed. The final value of val is returned.

If the length of the array is 0, it should return init.

Please solve it without using the built-in Array.reduce method.
*/

function customReduce(arr, fn, init) {
  let result = init;
  for (let i = 0; i < arr.length; i++) {
    result = fn(result, arr[i]);
  }
  return result;
}

nums = [];
func = function sum(accum, curr) {
  return 0;
};
console.log(customReduce(nums, func, 25));
