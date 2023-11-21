const films = require("./sw-films.json");
const planets = require("./sw-planets.json");
const people = require("./sw-people.json");
const starships = require("./sw-starships.json");

// count sum of all starships cost from episodes 4-6
console.log(
  "Sum of all starships cost from episodes 4 - 6 is: " +
    sumAllStarshipsCostFromEpisodes(4, 6)
);
// function sumAllStarshipsCostFromEpisodes(startEp, endEp) {
//   let sum = 0;
//   // TODO
//   const starShipsUrls = Array.from(
//     new Set(
//       films
//         .filter(
//           (epi) =>
//             epi.url
//               .split("/")
//               .filter((a) => a)
//               .pop() >= startEp &&
//             epi.url
//               .split("/")
//               .filter((a) => a)
//               .pop() <= endEp
//         )
//         .map((epi) => epi.starships)
//         .flat()
//     )
//   );
//   starships
//     .filter((ship) => starShipsUrls.includes(ship.url))
//     .forEach((ship) => {
//       Number(ship.cost_in_credits)
//         ? (sum += Number(ship.cost_in_credits))
//         : null;
//     });

//   return sum;
// }

function sumAllStarshipsCostFromEpisodes(startEp, endEp) {
  const listOfEpis = Array.from(
    { length: endEp - startEp + 1 },
    (v, i) => i + startEp
  );
  let sum = 0;
  // TODO
  starships
    .filter((ship) => {
      const epiNumbers = ship.films.map((film) =>
        film
          .split("/")
          .filter((a) => a)
          .pop()
      );
      return epiNumbers.some((el) => listOfEpis.includes(Number(el)));
    })
    .forEach((ship) => {
      Number(ship.cost_in_credits)
        ? (sum += Number(ship.cost_in_credits))
        : null;
    });

  return sum;
}

// find the fastest starship you can afford having 8500000 credits

console.log(
  "Fastest ship I can get for up to 8500000 is: " +
    getFastestShipFor(8500000).name
);

function getFastestShipFor(money) {
  let ship;
  ship = starships
    .filter((ship) => ship.cost_in_credits <= money)
    .sort((a, b) => b.max_atmosphering_speed - a.max_atmosphering_speed)[0];
  return ship;
}

// find planet name with the lowest difference between the rotation period and orbital period

console.log(
  "Planet name with the lowest difference between the rotation period and orbital period is: " +
    getPlanetNameWithLowestDifference("rotation_period", "orbital_period")
);

function getPlanetNameWithLowestDifference(key1, key2) {
  let planetName;
  // TODO
  planetName = planets
    .filter((planet) => planet.name !== "unknown")
    .map((planet) => ({
      name: planet.name,
      diff: Math.abs(planet[key1] - planet[key2]),
    }))
    .sort((a, b) => a.diff - b.diff)[0].name;
  return planetName;
}

// map all starships with crew <= 4 that were created between 10 dec 2014 and 15 dec 2014

console.log(
  "Ships with max crew of 4 created between 10.12.2014 - 12.12.2014 number is: " +
    getCrewShipFrom(4, new Date(2014, 11, 10), new Date(2014, 11, 12)).length
);

function getCrewShipFrom(maxCrew, dateStart, dateEnd) {
  let ship;
  // TODO
  dateEnd.setHours(24);
  ship = starships.filter(
    (ship) =>
      ship.crew <= maxCrew &&
      new Date(ship.created.split("T")[0]) >= dateStart &&
      new Date(ship.created.split("T")[0]) < dateEnd
  );
  return ship;
}

// create an array of people’s names from episodes 1 and 5 sorted by the diameter of origin planet low to high

console.log(
  "People from ep 1 - 5 sorted by origin planet diameter low to high: " +
    getPeopleSortedByOriginPlanetDiameter(1, 5)
);

// function getPeopleSortedByOriginPlanetDiameter(startEp, endEp) {
//   peopleFromEpis = Array.from(
//     new Set(
//       films
//         .filter(
//           (epi) =>
//             epi.url
//               .split("/")
//               .filter((a) => a)
//               .pop() >= startEp &&
//             epi.url
//               .split("/")
//               .filter((a) => a)
//               .pop() <= endEp
//         )

//         .map((epi) => epi.characters)
//         .flat()
//     )
//   )
//     .map((charUrl) => {
//       const char = people.find((person) => person.url === charUrl);
//       return {
//         name: char.name,
//         originOfPlanet: planets.find((planet) => planet.url === char.homeworld),
//       };
//     })
//     .filter((char) => !isNaN(char.originOfPlanet.diameter))
//     .sort((a, b) => a.originOfPlanet.diameter - b.originOfPlanet.diameter)
//     .map((char) => char.name);

//   return peopleFromEpis;
// }

function getPeopleSortedByOriginPlanetDiameter(startEp, endEp) {
  const listOfEpis = Array.from(
    { length: endEp - startEp + 1 },
    (v, i) => i + startEp
  );
  return people
    .filter((person) => {
      const epiNumbers = person.films.map((film) =>
        film
          .split("/")
          .filter((a) => a)
          .pop()
      );
      return epiNumbers.some((el) => listOfEpis.includes(Number(el)));
    })
    .map((char) => ({
      name: char.name,
      originOfPlanet: planets.find((planet) => planet.url === char.homeworld),
    }))
    .filter((char) => !isNaN(char.originOfPlanet.diameter))
    .sort((a, b) => a.originOfPlanet.diameter - b.originOfPlanet.diameter)
    .map((char) => char.name);
}

