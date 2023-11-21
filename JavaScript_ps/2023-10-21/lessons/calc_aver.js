const array = [4,43,4,3,43,3,75,6,45,62,5,7,89,78,6,54]

function calculateAverage(arr) {
    let sum = 0;
    for (const numb of arr) {
        sum+=numb;
    }
    return (sum/arr.length).toFixed(2);
}

console.log(calculateAverage(array));