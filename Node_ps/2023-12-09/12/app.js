const startTime = Date.now();

function displayHelloWithDelay(currentTimer, frequency) {
  let startTimer = currentTimer;

  setTimeout(() => {
    console.log(`Hello World ${startTimer} / ${Date.now() - startTime}`);
    startTimer += frequency;
    displayHelloWithDelay(startTimer, frequency);
  }, startTimer);
}

displayHelloWithDelay(1000, 1000);
