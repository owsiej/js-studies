const moment = require("moment");

console.log(moment("2020-February", "YYYY-MMMM").daysInMonth());

console.log(
  Array.from(
    {
      length: moment("2020-February", "YYYY-MMMM").daysInMonth(),
    },
    (val, idx) => idx + 1
  )
);
