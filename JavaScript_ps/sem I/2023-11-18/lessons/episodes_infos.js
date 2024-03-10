const episodes = require("./episodes.json");

function groupEpisodes(arr) {
  return arr.reduce((groupedEpisodes, episodeInfo) => {
    const { name, episode } = episodeInfo;
    const [seasonName, episodeNumber] = episode.split("E");
    const episodeToAdd = { name, episodeNumber };
    Object.keys(groupedEpisodes).includes(seasonName)
      ? groupedEpisodes[seasonName].push(episodeToAdd)
      : (groupedEpisodes[seasonName] = []);
    return groupedEpisodes;
  }, {});
}

const episodesBySeason = groupEpisodes(episodes);
for (const season in episodesBySeason) {
  console.log(season);
  episodesBySeason[season].forEach((element) => {
    console.log(element);
  });
}

