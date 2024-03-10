/*
2.	Gene finder - file: brca1.json - augment gene finder by:
a.	Displaying number of all genes
b.	Displaying length of longest and shortest gene
*/

let dna = require("./brca1.json");

const START_CODON = "atg";
const END_CODON = "taa";

let startGenIndex = dna.indexOf(START_CODON);
let endGenIndex = startGenIndex;
let genCount = 0;
let longestGen = 0;
let shortestGen;


while (startGenIndex != -1) {
  endGenIndex = dna.indexOf(END_CODON, endGenIndex + 3);
  if (endGenIndex === -1) {
    startGenIndex = dna.indexOf(START_CODON, startGenIndex + 3);
    endGenIndex = startGenIndex;
    continue;
  }
  let genPrototype = dna.slice(startGenIndex, endGenIndex + 3);
  if (genPrototype.length % 3 === 0) {
    genCount++;

    if (genPrototype.length > longestGen) {
      longestGen = genPrototype.length;
    } else if (genPrototype.length < shortestGen || !shortestGen) {
      shortestGen = genPrototype.length;
    }

    dna = dna.slice(endGenIndex + 3);
    startGenIndex = dna.indexOf(START_CODON);
    endGenIndex = startGenIndex;
  }
}

console.log("Number of genes: " + genCount);
console.log("Length of longest gene: " + longestGen);
console.log("Length of shortest gene: " + shortestGen);
