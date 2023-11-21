const array = [4,1,3,2,12,3,29,4,6,34,16,28];

function multiplyBy2FilterUnder40SortDesc(arr) {
  return arr
    .map((value) => value * 2)
    .filter((value) => value < 40)
    .sort((a, b) => b - a);
}

console.log(multiplyBy2FilterUnder40SortDesc(array));
