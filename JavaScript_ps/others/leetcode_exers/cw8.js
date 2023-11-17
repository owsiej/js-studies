/*
Write a generator function that returns a generator object which yields the fibonacci sequence.

The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.

The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.
*/

function* fibGenerator() {
  let n = 0;
  let m = 1;


  while (true) {
    yield n;
    const sum = m + n;
    n=m;
    m = sum;
  }
}

const gen = fibGenerator();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
