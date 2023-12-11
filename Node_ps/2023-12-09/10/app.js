const startTime = Date.now();

setTimeout(
  () => {
    console.log(`after ${Date.now() - startTime} milliseconds`);
    setTimeout(() => {
      console.log(`after ${Date.now() - startTime} milliseconds`);
    }, 4000);
  },
  4000
);

// function displayHello(frequency, duration) {
//   let startTimer = 0;

//   const interval = setInterval(() => {
//     console.log(`Hello after ${(Date.now() - startTime)/1000} seconds`);
//     startTimer += frequency;
//     if (startTimer >= duration) {
//       clearInterval(interval);
//     }
//   }, frequency);
// }

// displayHello(4000, 8000);
