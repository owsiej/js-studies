// remove value from arr
function remove(arr, value) {
  return arr.filter((item) => item !== value);
}

// return elements common for both arrs
function intersection(arr1, arr2) {
  return arr2.filter((item) => arr1.includes(item));
}

module.exports = {
  remove,
  intersection,
};

