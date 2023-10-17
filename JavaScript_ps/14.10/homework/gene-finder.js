/*
2.	Gene finder - file: brca1.json - augment gene finder by:
a.	Displaying number of all genes
b.	Displaying length of longest and shortest gene
*/

let dna = require("./brca1.json");

const START_GEN = "atg"
const END_GEN = "taa"

let startGenIndex = dna.indexOf(START_GEN)
let genCount = 0;
let longestGen = 0;
let shortestGen;
/*
Program działa w ten sposób, że najpierw dla pierwszej wartości indexu START_GEN sprawdza wszystkie wartości indexu END_GEN i weryfikuje każdego kolejnego kandydata na gena
i kiedy index END_GEN zwróci -1, zostaje ustalony nowy index START_END i dalej powtarza wszystkie kroki.
*/


do {
    let endGenIndex = startGenIndex

    while (true) {
        endGenIndex = dna.indexOf(END_GEN, endGenIndex+3)
        if (endGenIndex===-1) {
            break;
        }
        let genPrototype = dna.slice(startGenIndex, endGenIndex+3)
        if (genPrototype.length%3===0) {
            genCount++;
            if (genPrototype.length>longestGen) {
                longestGen=genPrototype.length;
            } else if (genPrototype.length<shortestGen || !shortestGen) {
                shortestGen=genPrototype.length;
            }
        }

    }
    startGenIndex = dna.indexOf(START_GEN, startGenIndex+3)

} while (startGenIndex!=-1)

console.log("Number of genes: "+genCount);
console.log("Longest gene: "+longestGen);
console.log("Shortest gene: "+shortestGen);
