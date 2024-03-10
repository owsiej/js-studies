async function stopTask(delay) {
  console.log("start");
  await wait(delay);
  console.log("stopped");

}

function wait(delay) {
  const pause = new Promise((resolve, reject) => {
    setTimeout(resolve, delay);
  });
  return pause;
}

stopTask(1000);
