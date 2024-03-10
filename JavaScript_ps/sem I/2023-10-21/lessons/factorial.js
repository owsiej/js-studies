const numb = 4;

function getFactorial(step) {
  if (step == 1 || step == 0) {
    return 1;
  }
  let result = step * getFactorial(step - 1);
  return result;
}

console.log(getFactorial(numb));
