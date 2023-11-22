const numberPI = Math.PI;

module.exports = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  },
  PI: numberPI,
};
