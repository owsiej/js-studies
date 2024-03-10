function createBallArray() {
  const ballArray = Array.from({ length: 8 }, (val, idx) => ({
    weight: 1,
    position: idx + 1,
  }));
  const randomIndex = Math.floor(Math.random() * ballArray.length);
  ballArray[randomIndex].weight = 2;
  return ballArray;
}

function sum(arr) {
  return arr.reduce((sum, el) => sum + el.weight, 0);
}

function findHeaviestBallPosition(arr) {
  const firstGroupOfThreeBalls = arr.splice(0, 3);
  const secondGroupOfThreeBalls = arr.splice(0, 3);

  if (sum(firstGroupOfThreeBalls) === sum(secondGroupOfThreeBalls)) {
    return arr[0].weight > arr[1].weight ? arr[0].position : arr[1].position;
  }
  const groupWithHeaviestBall =
    sum(firstGroupOfThreeBalls) > sum(secondGroupOfThreeBalls)
      ? firstGroupOfThreeBalls
      : secondGroupOfThreeBalls;
  return groupWithHeaviestBall[0].weight === groupWithHeaviestBall[1].weight
    ? groupWithHeaviestBall[2].position
    : groupWithHeaviestBall[0].weight > groupWithHeaviestBall[1].weight
    ? groupWithHeaviestBall[0].position
    : groupWithHeaviestBall[1].position;
}
const ballArr = createBallArray();
console.table(ballArr);
console.log(findHeaviestBallPosition(ballArr));
