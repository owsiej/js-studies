const { intersection, remove } = require("./utility-functions.js");

class SudokuSquare {
  #availableNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  constructor(row, column, numbers) {
    this.row = row;
    this.column = column;
    this.numbers = numbers;
    this.possibleNumbers = this.#getPossibleNumbers();
  }
  static isCellUnsolved(cell) {
    return Array.isArray(cell);
  }
  getRow(idx) {
    return this.numbers[idx];
  }
  getColumn(idx) {
    return this.numbers.map((val) => val[idx]);
  }
  isSquareSolved() {
    return !this.numbers.flat().some((val) => typeof val !== "number");
  }
  amountOfUnsolvedCellsInRow(idx) {
    return this.getRow(idx).reduce((acc, val) => {
      SudokuSquare.isCellUnsolved(val) ? acc++ : null;
      return acc;
    }, 0);
  }

  solveCell(x, y, value) {
    this.numbers[x][y] = value;
  }
  getCell(x, y) {
    return this.numbers[x][y];
  }

  updatePossibleNumbersInSquare() {
    this.possibleNumbers = this.#getPossibleNumbers();
  }

  updatePossibleNumbersInUnsolvedCells(direction, values) {
    if (direction === "byRow") {
      for (let i = 0; i <= 2; i++) {
        if (this.getRow(i).some((val) => typeof val !== "number")) {
          const valuesIntersection = intersection(
            values[i].possibleNumbers,
            this.possibleNumbers
          );
          this.#mapRow(i, valuesIntersection);
        }
      }
    } else if (direction === "byColumn") {
      for (let i = 0; i <= 2; i++) {
        if (this.getColumn(i).some((val) => typeof val !== "number")) {
          const valuesIntersection = intersection(
            values[i].possibleNumbers,
            this.possibleNumbers
          );
          this.#mapColumn(i, valuesIntersection);
        }
      }
    }
  }
  findUniqueNumbersInAllUnsolvedCells() {
    const numberCounts = {};
    const lists = this.numbers
      .flat()
      .filter((el) => SudokuSquare.isCellUnsolved(el));
    for (const list of lists) {
      for (const number of list) {
        if (!numberCounts.hasOwnProperty(number)) {
          numberCounts[number] = 1;
        } else {
          numberCounts[number]++;
        }
      }
    }
    const result = [];
    for (const number in numberCounts) {
      if (numberCounts[number] === 1) {
        result.push(parseInt(number));
      }
    }
    return result;
  }
  #mapRow(number, value) {
    this.numbers[number] = this.numbers[number].map((numb) => {
      if (typeof numb === "string") {
        return value;
      } else if (SudokuSquare.isCellUnsolved(numb)) {
        return intersection(numb, value);
      }
      return numb;
    });
  }

  #mapColumn(number, value) {
    for (let i = 0; i <= 2; i++) {
      if (SudokuSquare.isCellUnsolved(this.numbers[i][number])) {
        this.numbers[i][number] = intersection(this.numbers[i][number], value);
      }
    }
  }

  #getPossibleNumbers() {
    const numbers = this.numbers.flat();
    return this.#availableNumbers.filter((numb) => !numbers.includes(numb));
  }
}

class SudokuSegment {
  availableNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  constructor(position, index, threeSquares) {
    this.position = position;
    this.index = index;
    this.threeSquares = threeSquares;
    this.numbers = [];
    this.possibleNumbers = [];
  }

  getPossibleNumbers() {
    const numbers = this.numbers.flat();
    return this.availableNumbers.filter((numb) => !numbers.includes(numb));
  }
  updatePossibleNumbers(value) {
    this.possibleNumbers = remove(this.possibleNumbers, value);
  }
}

class Row extends SudokuSegment {
  constructor(position, index, threeSquares) {
    super(position, index, threeSquares);
    this.numbers = this.#createRowNumbers();
    this.possibleNumbers = this.getPossibleNumbers();
  }
  #createRowNumbers() {
    return this.threeSquares.map((square) => square.getRow(this.index));
  }
}

class Column extends SudokuSegment {
  constructor(position, index, threeSquares) {
    super(position, index, threeSquares);
    this.numbers = this.#createColumnNumbers();
    this.possibleNumbers = this.getPossibleNumbers();
  }
  #createColumnNumbers() {
    return this.threeSquares.map((square) => square.getColumn(this.index));
  }
}

module.exports = {
  SudokuSquare,
  Row,
  Column,
};
