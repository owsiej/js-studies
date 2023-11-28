function getTimeout(delay) {
  let timeout;
  function logMessage() {
    timeout = setTimeout(() => console.log("Some message."), delay);
  }
  function cancelMessage() {
    if (timeout) {
      clearInterval(timeout);
      console.log("Message log cancelled.");
    }
  }
  return {
    logMessage,
    cancelMessage,
  };
}

const tm = getTimeout(2000);

tm.logMessage();
tm.cancelMessage();
