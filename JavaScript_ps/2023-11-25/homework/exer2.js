/*
2.	Using https://rickandmortyapi.com/api fetch all characters from episode 7.
a.	documentation can be found here: https://rickandmortyapi.com/documentation/#rest

*/

const API_URL = "https://rickandmortyapi.com/api";

async function getCharactersFromEpisode(episodeNumber) {
  const data = await fetch(API_URL)
    .then((response) => response.json())
    .then((urls) => {
      const epiUrl = `${urls.episodes}/${episodeNumber}`;
      return fetch(epiUrl)
        .then((response) => response.json())
        .then((epi) => epi.characters);
    });
  return Promise.all(
    data.map((charUrl) => fetch(charUrl).then((resp) => resp.json()))
  );
}
getCharactersFromEpisode(7).then((characters) =>
  characters.forEach((character) => console.log(character.name))
);
