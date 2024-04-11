// -	Write a code that multiplies two matrices together. Dimension validation is required.

const sampleMatrix1 = [[4], [5], [6]];
const sampleMatrix2 = [[1, 2, 3]];

class Matrix {
  constructor(array) {
    const testLength = array[0].length;
    array.forEach((el) => {
      if (el.length !== testLength) {
        throw new Error("invalid matrix dimensions");
      }
    });
    this.array = array;
  }

  getColumn(colIndex) {
    return this.array.map((el) => el[colIndex]);
  }

  getRow(rowIndex) {
    return this.array[rowIndex];
  }
  numberOfColumns() {
    return this.array[0].length;
  }

  numberOfRows() {
    return this.array.length;
  }

  #multiplyRowWithColumn(row, col) {
    return row.reduce((acc, el, idx) => acc + el * col[idx], 0);
  }

  multiplyMatrices(matrix) {
    if (!matrix instanceof Matrix) {
      throw new Error("matrix is not instance of Matrix class");
    }
    if (this.numberOfColumns() !== matrix.numberOfRows()) {
      throw new Error(
        "number of cols of first matrix is different to number of rows in second matrix"
      );
    }
    let result = [];
    for (let i = 0; i < this.numberOfRows(); i++) {
      result.push([]);
      for (let j = 0; j < matrix.numberOfColumns(); j++) {
        result[i][j] = this.#multiplyRowWithColumn(
          this.getRow(i),
          matrix.getColumn(j)
        );
      }
    }
    return result;
  }
}

const matrix1 = new Matrix(sampleMatrix1);
const matrix2 = new Matrix(sampleMatrix2);
console.table(matrix1.multiplyMatrices(matrix2));
