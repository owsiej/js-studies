const name = require("os");
const file = require("fs");

const userName = name.hostname();
console.log(userName);
file.writeFileSync("user_name.txt", userName);