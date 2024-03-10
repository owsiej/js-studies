const characters = require("./characters.json");

function charsLivingOnEarth(arr) {
  return arr
    .filter((character) => character.location.name.includes("Earth"))
    .sort((char1, char2) => char1.name.localeCompare(char2.name));
}

charsLivingOnEarth(characters).forEach(element => {
    console.log(element)
});