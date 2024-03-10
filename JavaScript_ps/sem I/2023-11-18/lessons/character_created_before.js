const characters = require("./characters.json");

const lookingDate = new Date("2018-04-15");

function getCharactersBeforeDate(arr, date) {
  return arr.filter((character) => new Date(character.created) < date);
}

console.log(getCharactersBeforeDate(characters, lookingDate));
