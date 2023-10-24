const array = [4, 23, 6, 7, 3, 5, 7, 8, 5, 42, 4, 90, 8, 24,5,54,435,34,5,7,5678,48,67,89,9567,95234,5,65,5765687,8,645,6,8,7,7];

function mergeSort(arr) {
  if (arr.length <= 1) {
    return;
  }
  let middleIndex = Math.floor(arr.length / 2);

  let leftSidedArray = arr.slice(0, middleIndex);
  let rightSidedArray = arr.slice(middleIndex);
//   console.log(
//     `Lewa strona: ${leftSidedArray}, Prawa strona: ${rightSidedArray}`
//   );

  mergeSort(leftSidedArray);
  mergeSort(rightSidedArray);
//   console.log(
//     `PO Lewa strona: ${leftSidedArray}, Prawa strona: ${rightSidedArray}`
//   );
  let leftStep=0;
  let rightStep=0;
  let arrayStep=0;
  while (leftStep<leftSidedArray.length && rightStep<rightSidedArray.length) {
    if (leftSidedArray[leftStep]<rightSidedArray[rightStep]) {
        arr[arrayStep]=leftSidedArray[leftStep];
        leftStep++;
    } else {
        arr[arrayStep]=rightSidedArray[rightStep];
        rightStep++;
    }
    arrayStep++;
  }
  while (leftStep<leftSidedArray.length) {
    arr[arrayStep]=leftSidedArray[leftStep];
    leftStep++;
    arrayStep++;
  }
  while (rightStep<rightSidedArray.length) {
    arr[arrayStep]=rightSidedArray[rightStep];
    rightStep++;
    arrayStep++;
  }
}
mergeSort(array);
console.log(array);
