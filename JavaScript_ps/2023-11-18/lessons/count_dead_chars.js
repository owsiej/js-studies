const characters = require("./characters.json");

function countDeadChars(arr) {
  return arr.reduce(
    (sum, character) => (character.status === "Dead" ? (sum += 1) : sum),
    0
  );
}

console.log(countDeadChars(characters));
