/*You are given an array of positive integers arr. Perform some operations (possibly none) 
on arr so that it satisfies these conditions:

    The value of the first element in arr must be 1.
    The absolute difference between any 2 adjacent elements must be less than or equal to 1. In other words, 
    abs(arr[i] - arr[i - 1]) <= 1 for each i where 1 <= i < arr.length (0-indexed). abs(x) is the absolute value of x.

There are 2 types of operations that you can perform any number of times:

    Decrease the value of any element of arr to a smaller positive integer.
    Rearrange the elements of arr to be in any order.

Return the maximum possible value of an element in arr after performing the operations to satisfy the conditions.
*/
const array = [712704514,545918790,115890310,835846393,175769706,559353362,901891104,422254447];

function maximumElementAfterDecrementingAndRearranging(arr) {
  arr.sort((a, b) => a - b);
  console.log(arr);
  let finalArr = [];
  finalArr.push(1);
  for (i = 1; i < arr.length; i++) {
    while (Math.abs(arr[i]) - Math.abs(finalArr[i - 1]) > 1) {
      arr[i]--;
    }
    finalArr.push(arr[i]);
  }
  console.log(finalArr);
  return finalArr.reduce((a, b) => (a > b ? a : b));
}

console.log(maximumElementAfterDecrementingAndRearranging(array));
