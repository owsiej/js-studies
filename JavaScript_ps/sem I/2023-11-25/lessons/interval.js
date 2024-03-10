function getStopWatch() {
  let counter = 0;
  let interval;
  function start() {
    interval = setInterval(() => console.log(++counter), 1000);
  }
  function stop() {
    if (interval) {
      clearInterval(interval);
      console.log("Stopped.");
      counter = 0;
    }
  }
  return {
    start,
    stop,
  };
}

const s = getStopWatch();
s.start();
setTimeout(() => s.stop(), 5500);
