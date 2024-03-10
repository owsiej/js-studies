/*
1.	Create a function that returns a Promise that has a 50% chance of resolving, and 50% chance of rejecting, 
on resolve it should return “Now I work” and on reject “Now I don’t’.
*/
function randomPromise() {
  const fiftyFifty = Number(Math.random().toFixed());
  return new Promise((resolve, reject) => {
    if (fiftyFifty) {
      resolve("Now I Work");
    } else {
      reject("Now I don't.");
    }
  });
}
randomPromise()
  .then((value) => console.log(value))
  .catch((e) => console.log(e));

