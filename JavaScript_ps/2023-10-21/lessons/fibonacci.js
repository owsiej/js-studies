const numb = 8;

function getFibboNumb(n) {
  if (n == 1) {
    return 1;
  }
  if (n == 0) {
    return 0;
  }
  return getFibboNumb(n - 2) + getFibboNumb(n - 1);
}

console.log(getFibboNumb(numb));
