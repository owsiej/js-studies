"use strict";
/**
 * ADDITIONALLY
 * how can we make item type checking more TypeScript style - hence typos safe
 * (what is a typo? typing 'backgroung' instead of 'background')
 */
var Types;
(function (Types) {
    Types["FRUIT"] = "fruit";
    Types["VEGETABLE"] = "vegetable";
})(Types || (Types = {}));
var items = [];
items.push({
    name: 'Apple',
    taste: 'sweet',
    type: 'fruit'
});
items.push({
    name: 'Lemon',
    taste: 'sour',
    type: 'fruit'
});
items.push({
    name: 'Potato',
    type: 'vegetable'
});
items.push({
    name: 'Car'
});
function printFruitsAndVeggies(fruitsAndVeggies) {
    for (var _i = 0, fruitsAndVeggies_1 = fruitsAndVeggies; _i < fruitsAndVeggies_1.length; _i++) {
        var item = fruitsAndVeggies_1[_i];
        if (item.type === Types.FRUIT) {
            console.log("We have a fruit: " + item.taste + " " + item.name);
        }
        else if (item.type === Types.VEGETABLE) {
            console.log('We have a vegetable: ' + item.name);
        }
        else {
            console.log('--- Error ---');
            console.log('We have an item of unknown type: ' + item.name);
            console.log('--- End of error ---');
        }
    }
}
printFruitsAndVeggies(items);
//# sourceMappingURL=task_4.js.map