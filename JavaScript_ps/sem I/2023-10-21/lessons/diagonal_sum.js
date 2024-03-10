// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// let matrix = [
//   [1, 1, 1, 1],
//   [1, 1, 1, 1],
//   [1, 1, 1, 1],
//   [1, 1, 1, 1],
// ];

let matrix = [[5]];

function sumMatrixDiagonal(mat) {
  let sum = 0;
  for (let i = 0; i < mat.length; i++) {
    if (i === mat.length - 1 - i) {
      sum += mat[i][i];
    } else {
      sum += mat[i][i];
      sum += mat[i][mat.length - 1 - i];
    }
  }
  return sum;
}
console.log(sumMatrixDiagonal(matrix));
