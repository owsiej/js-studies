/*
1.	Create an IIFE that returns an object with fields: method setValue(), method showValue() and method reverseValue(). 
Calling showValue should log the value, or if there is no value - tell us about that. 
Calling setValue will set given number or string in closure, if the argument is other type - throw an error. 
Value can be type string or number. 
reverseValue(): If number do (*(-1)), if string reverse it.  
Closure pattern.
*/

const myObject = (() => {
  let value;
  return {
    setValue(input) {
      if (typeof input !== "number" && typeof input !== "string") {
        throw new TypeError("Given value is wrong type.");
      }
      value = input;
    },
    showValue() {
      value || value === 0
        ? console.log(value)
        : console.log("There is no value");
    },
    reverseValue() {
      if (typeof value === "string") {
        value = value.split("").reverse().join("");
      } else {
        value = -value;
      }
    },
  };
})();

myObject.setValue(5);
myObject.showValue();
myObject.reverseValue();
myObject.showValue();
myObject.setValue("hello");
myObject.showValue();
myObject.reverseValue();
myObject.showValue();

