const characters = require("./characters.json");
const episodes = require("./episodes.json");

const lookingDate = new Date("2020-04-30");

function getCharsFromEpisodesBeforeDate(chars, epis, date) {
  const characterIds = Array.from(
    new Set(
      epis
        .filter((episode) => new Date(episode.created) < date)
        .reduce((characters, episode) => {
          const charIds = episode.characters.reduce((ids, url) => {
            ids.push(url.split("/").pop());
            return ids;
          }, []);
          characters.push(charIds);
          return characters;
        }, [])
        .flat()
    )
  );
  return characterIds.map((id) =>
    chars.find((lookingChar) => lookingChar.id == id)
  );
}

getCharsFromEpisodesBeforeDate(characters, episodes, lookingDate)
  .slice(0, 10)
  .forEach((element) => {
    console.log(element);
  });


