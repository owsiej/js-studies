/*
5.	Given an array of objects, for each object call operation() function in the context of the next object. 
If the object is last, go back to the beginning of the array:


*/
const sample = [
  {
    x: 1,
    y: "object one value",
    operation: () => "object one prafix" + this.x + this.y,
  },
  {
    x: 2,
    y: "object two value",
    operation: () => "object two prefix" + this.x + this.y,
  },
  {
    x: 3,
    y: "object three value",
    operation: () => "object three prefix" + this.x + this.y,
  },
];
