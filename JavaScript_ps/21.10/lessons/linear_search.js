const array = [4,3,42,34,2,534,1,345,6,3,123,32]

function linearSearch(arr, target) {
    for (const item of arr) {
        if (item === target) {
            return item;
        }
    }
    return "Not found";
}

console.log(linearSearch(array, 100));
