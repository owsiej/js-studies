let dna = require("./dna.json");

let startGen = dna.indexOf("atg");
let endGen = startGen;

let foundGen;

while (!foundGen) {
    endGen = dna.indexOf("taa", endGen+3);

    let possibleGen = dna.slice(startGen, endGen+3);

    if (possibleGen.length%3===0) {
        foundGen=possibleGen;
    }
    if (endGen===-1) {
        foundGen="No gene";
    }

}
console.log(foundGen);


