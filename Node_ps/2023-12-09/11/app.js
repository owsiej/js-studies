function displayHello(frequency, duration) {
  let startTimer = 0;

  const interval = setInterval(() => {
    console.log(`Hello`);
    startTimer += frequency;
    if (startTimer >= duration) {
      console.log("Finish");
      clearInterval(interval);
    }
  }, frequency);
}

displayHello(1000, 5000);
