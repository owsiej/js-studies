let array = [5, 7, 8,2,5,44,3,5,46,7,8,9,23,4,51,78,9,23,97,65,56];

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let currentMinValueIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      arr[j] < arr[currentMinValueIndex] ?  currentMinValueIndex = j : null;
    }
    let temp = arr[i];
    arr[i]=arr[currentMinValueIndex];
    arr[currentMinValueIndex]=temp;
  }
  return arr;
}

console.log(selectionSort(array));
