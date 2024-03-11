/*
1.	Write a function that rotates a list by k elements. For example, [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]. 
Try solving this without creating a copy of the list.
*/
const sample = [1, 2, 3, 4, 5, 6, 7];

function rotateList(arr, k) {
  if (k / arr.length === 1) {
    return arr;
  } else if (arr.length % k !== 0 && k / arr.length >= 0.5) {
    return "too big step for this array";
  }
  const numberOfSteps = Math.floor(arr.length / k) - 1;
  let currentArrElStartIdx = 0;
  for (let i = 0; i < numberOfSteps; i++) {
    for (let j = currentArrElStartIdx; j < currentArrElStartIdx + k; j++) {
      const temp = arr[j];
      arr[j] = arr[j + k];
      arr[j + k] = temp;
    }
    currentArrElStartIdx += k;
  }

  return arr;
}

console.log(rotateList(sample, 2));
