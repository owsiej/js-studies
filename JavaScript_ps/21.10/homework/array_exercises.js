let array = [1,6,23,8,4,8,3,7]

// b.	Create a function that takes in an array of numbers and returns sum of all elements

function sumNumbersInArray (arr) {
    return arr.reduce((a, b) => (a+b));

}
// console.log(sumNumbersInArray(array));

// c.	Create a function that takes in an array of numbers and returns sum of first and last element

function sumFirstAndLastArrayElements(arr) {
    return arr[0]+arr[arr.length -1];
}

// console.log(sumFirstAndLastArrayElements(array));

// d.	Create a function that takes in an array and returns its copy in reverse order (DON’T use .reverse() method!)

function reverseArray(arr) {
    const reversedArray=[];
    for (const item of arr) {
        reversedArray.unshift(item);
    
    }
    return reversedArray;
}
// console.log(reverseArray(array));

// e.	Create a function that takes two parameters - array of numbers, and number of attempts. Choose random numbers from the array based on the number of attempts and return the lowest among them.

function getRandomLowestNumber(arr, n) {
    const randomPicks=[];
    for (let i =0; i<n; i++) {
        let randomIndex = Math.floor(Math.random()*(arr.length));
        randomPicks.push(arr[randomIndex])
    }
    return randomPicks.reduce((a,b) => a>b ? b : a);
}

// console.log(getRandomLowestNumber(array,5));

// f.	Create a function that takes in an array and returns it in random order

function randomizeArrayOrder (arr) {
    for (let i =0; i<arr.length; i++) {
        let randomIndex = Math.floor(Math.random()*(arr.length));
        let temp = arr[i];
        arr[i]=arr[randomIndex];
        arr[randomIndex]= temp;
    }
    return arr;
}

// console.log(randomizeArrayOrder(array));

// g.	Calculate the sum of the odd items [1,6,23,8,4,98,3,7,3,98,4,98]

const secondArray = [1,6,23,8,4,98,3,7,3,98,4,98]

function sumOddNumbers (arr) {
    return arr.reduce((a,b) => b%2!=0 ? a+b : a, 0);
}

// console.log(sumOddNumbers(secondArray));

// h.	With  a given start value of 0. Iterate the array and add even items and subtract odd ones. [1,6,23,8,4,98,3,7,3,98,4,98]

function addEvenSubOdd (arr) {
    return arr.reduce((a,b) => b%2===0 ? a+b : a-b, 0);
}

console.log(addEvenSubOdd(secondArray))