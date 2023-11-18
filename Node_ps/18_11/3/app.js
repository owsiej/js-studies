/*
odpalamy npm init
dostajemy plik package.json
instalujemy pozadanych pakunek np, npm install lodash
*/

const lodash = require("lodash");

const someArray = ['ala', 3, 'ma', 'kota', 2, 'ala', 5, 3];
const uniqElements = lodash.uniq(someArray);
console.log(uniqElements);


const tabA = ['ala', 'ma', 'kota'];
const tabB = ['ala', 'ma', 'psa'];

const differenceInArrays = lodash.difference(tabA, tabB);
console.log(differenceInArrays)

