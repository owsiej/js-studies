const logTime = (function () {
  const timestamp = Date.now();

  return function logTimePassed() {
    console.log(Date.now() - timestamp);
  };
})();
logTime();
