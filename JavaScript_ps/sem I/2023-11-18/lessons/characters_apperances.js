const characters = require("./characters.json");

function getCharsWithAppearances(arr) {
  return arr
    .map((character) => ({
      name: character.name,
      numberOFEpisodesPlayedIn: character.episode.length,
    }))
    .sort(
      (va1, va2) => va2.numberOFEpisodesPlayedIn - va1.numberOFEpisodesPlayedIn
    );
}
getCharsWithAppearances(characters).forEach((element) => {
  console.log(element);
});
