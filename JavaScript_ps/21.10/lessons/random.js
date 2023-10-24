function getRandomNumberInRange (min, max) {
    return Math.random()*(max-min)+min;
}

console.log(getRandomNumberInRange(2,5));