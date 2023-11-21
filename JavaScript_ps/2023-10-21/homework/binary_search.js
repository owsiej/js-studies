let array = [
  1, 2, 3, 4, 5, 6, 12, 16, 26, 29, 35, 45, 56, 78, 84, 91, 94, 98, 100,
];
array.sort((a, b) => a - b);

function binarySearch(arr, target) {
  if (arr.length < 1) {
    return false;
  }
  let middleIndex = Math.floor(arr.length / 2);
  if (target === arr[middleIndex]) {
    return true;
  } else if (target > arr[middleIndex]) {
    arr.splice(0, arr.slice(0, middleIndex + 1).length);
  } else if (target < arr[middleIndex]) {
    arr.splice(middleIndex);
  }
  return binarySearch(arr, target);
}

console.log(binarySearch(array, 17));
