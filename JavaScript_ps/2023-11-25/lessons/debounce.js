// function debounce(func, delay) {
//   let timeoutFunc;

//   return function (...args) {
//     clearTimeout(timeoutFunc);

//     timeoutFunc = setTimeout(() => {
//       func(...args);
//     }, delay);
//   };
// }

// debounce(() => console.log("hello"), 3000);

function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

function handleInput(value) {
  console.log("Input value:", value);
}

const debounceInput = debounce(handleInput, 1000);

// Elements
const input = document.querySelector("#text");

// Listeners
input.addEventListener("input", function (event) {
  debounceInput(event.target.value);
});