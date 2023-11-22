const utils = require("./utils.js");

const someArray = ['ala', 3, 'ma', 'kota', 2, 'ala', 5, 3];

const funcResult = utils.uniq(someArray);

console.log(funcResult);