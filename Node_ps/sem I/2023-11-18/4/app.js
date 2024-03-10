const lodash = require("lodash");

const numbers = [3, 5, -20, -1002, 234, 542, 6, 23, -3, 8];

const minValue = lodash.min(numbers);
const maxValue = lodash.max(numbers);
console.log(`Max: ${maxValue}`);
console.log(`Min: ${minValue}`);

