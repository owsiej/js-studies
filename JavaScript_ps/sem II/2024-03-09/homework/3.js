/*
3.	Write a code that takes in a string and returns a list of its digits. 
So for 2342 it should return [2,3,4,2], and for ’A243b’ it should return [2,4,3].
*/
const sample = "A243b";
const digits = [];
for (const char of sample) {
  if (Number(char)) {
    digits.push(parseInt(char));
  }
}
console.log(digits);
