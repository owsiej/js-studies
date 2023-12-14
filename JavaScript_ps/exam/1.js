/*
EXAM Scale riddle. 
With 8 balls, ex.  [1,2,1,1,1,1,1,1] get position of the “heavy” ball. 
Indexes are to be chosen at random. 
Use weights comparison only two times. 
*/
// function createBallArray() {
//   const ballArray = Array(8).fill(1);
//   const randomIndex = Math.floor(Math.random() * ballArray.length);
//   ballArray[randomIndex] = 2;
//   return ballArray;
// }
// function sum(arr) {
//   return arr.reduce((sum, el) => sum + el, 0);
// }

// function findHeviestBall(arr) {
//   firstGroupOf3Balls = arr.splice(0, 3);
//   secondGroupOf3Balls = arr.splice(0, 3);

//   if (sum(firstGroupOf3Balls) === sum(secondGroupOf3Balls)) {
//     return arr[0] > arr[1] ? 7 : 8;
//   } else if (sum(firstGroupOf3Balls) > sum(secondGroupOf3Balls)) {
//     return firstGroupOf3Balls[0] === firstGroupOf3Balls[1]
//       ? 3
//       : firstGroupOf3Balls[0] > firstGroupOf3Balls[1]
//       ? 1
//       : 2;
//   }
//   return secondGroupOf3Balls[0] === secondGroupOf3Balls[1]
//     ? 6
//     : secondGroupOf3Balls[0] > secondGroupOf3Balls[1]
//     ? 4
//     : 5;
// }

// const ballArr = createBallArray();
// console.log(ballArr);
// console.log(findHeviestBall(ballArr));

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

function findHeviestBallPosition(arr) {
  const firstGroupOf3Balls = arr.splice(0, 3);
  const secondGroupOf3Balls = arr.splice(0, 3);

  if (sum(firstGroupOf3Balls) === sum(secondGroupOf3Balls)) {
    return arr[0].weight > arr[1].weight ? arr[0].position : arr[1].position;
  }
  const groupWithHaviestBall =
    sum(firstGroupOf3Balls) > sum(secondGroupOf3Balls)
      ? firstGroupOf3Balls
      : secondGroupOf3Balls;
  return groupWithHaviestBall[0].weight === groupWithHaviestBall[1].weight
    ? groupWithHaviestBall[2].position
    : groupWithHaviestBall[0].weight > groupWithHaviestBall[1].weight
    ? groupWithHaviestBall[0].position
    : groupWithHaviestBall[1].position;
}
const ballArr = createBallArray();
console.table(ballArr);
console.log(findHeviestBallPosition(ballArr));
