function displayMessage(message, alertDuration, alertFrequency) {
  let currentTime = 0;

  const interval = setInterval(() => {
    console.log(message);
    currentTime += alertFrequency;
    if (currentTime >= alertDuration) {
      clearInterval(interval);
    }
  }, alertFrequency);
}

displayMessage("lolek", 5000, 500);
