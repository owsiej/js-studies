const characters = require("./characters.json");
const episodes = require("./episodes.json");
const locations = require("./locations.json");

function getCharsLocationsByEpisodes(chars, epis, locs, startEpi, endEpi) {
  const charIds = Array.from(
    new Set(
      epis
        .filter((epi) => epi.id >= startEpi && epi.id <= endEpi)
        .map((epi) => epi.characters)
        .flat()
        .map((url) => url.split("/").pop())
    )
  );
  const locIds = Array.from(
    new Set(
      charIds
        .map((id) => chars.find((char) => char.id == id))
        .map((char) => char.origin.url.split("/").pop())
        .filter((locId) => locId)
    )
  );
  return locIds.map((id) => locs.find((loc) => loc.id == id));
}

getCharsLocationsByEpisodes(characters, episodes, locations, 5, 25)
  .splice(0, 10)
  .forEach((el) => console.log(el));
