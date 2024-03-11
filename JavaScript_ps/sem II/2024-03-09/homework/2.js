/*
2.	Write a class that prints the list of the first n Fibonacci numbers. The first two Fibonacci numbers are 1 and 1.
The n+1 Fibonacci number can be computed by adding the n and the n-1 Fibonacci number. 
The first few are therefore 1, 1, 1+1=2, 1+2=3, 2+3=5, 3+5=8.
*/

class Fibonnaci {
  constructor(n) {
    this.fibboNumbs = this.#getNFibboNumbs(n);
  }
  #getNFibboNumbs(n) {
    let a = 1;
    let b = 1;
    let c;
    const numbs = [a, b];
    if (n === 1) {
      return a;
    } else if (n === 2) {
      return numbs;
    } else if (n === 0 || !n) {
      throw "cant pass 0 or nth";
    }
    for (let i = 0; i < n - 2; i++) {
      c = a + b;
      a = b;
      b = c;
      numbs.push(c);
    }
    return numbs;
  }
}

const sample = new Fibonnaci(5);
console.log(sample.fibboNumbs);
