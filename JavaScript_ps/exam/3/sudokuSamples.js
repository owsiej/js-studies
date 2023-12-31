const testSudoku1 = [
  [
    [7, "X", 4],
    [8, 2, "X"],
    ["X", "X", 9],
  ],
  [
    [8, "X", "X"],
    [5, "X", "X"],
    [4, 3, "X"],
  ],
  [
    [3, "X", 1],
    ["X", 4, "X"],
    [5, "X", "X"],
  ],
  [
    [3, 1, "X"],
    ["X", 8, "X"],
    [9, "X", 7],
  ],
  [
    ["X", "X", "X"],
    ["X", "X", "X"],
    ["X", "X", "X"],
  ],
  [
    [8, "X", 7],
    ["X", 1, "X"],
    ["X", 3, 2],
  ],
  [
    ["X", "X", 6],
    ["X", 7, "X"],
    [5, "X", 8],
  ],
  [
    ["X", 1, 5],
    ["X", "X", 9],
    ["X", "X", 2],
  ],
  [
    [4, "X", "X"],
    ["X", 6, 5],
    [1, "X", 3],
  ],
];
const testSudoku2 = [
  [
    ["X", "X", "X"],
    [1, "X", "X"],
    [8, "X", "X"],
  ],
  [
    [5, 6, "X"],
    [3, "X", "X"],
    ["X", "X", "X"],
  ],
  [
    [9, 1, 3],
    [6, "X", "X"],
    [2, 5, 4],
  ],
  [
    ["X", 2, 1],
    [9, "X", "X"],
    ["X", 4, 7],
  ],
  [
    [6, "X", "X"],
    ["X", "X", 4],
    ["X", 1, 9],
  ],
  [
    ["X", "X", "X"],
    ["X", 6, "X"],
    [5, 3, "X"],
  ],
  [
    ["X", "X", 8],
    ["X", 6, 2],
    [4, "X", 3],
  ],
  [
    [9, "X", 6],
    ["X", 7, "X"],
    ["X", "X", 1],
  ],
  [
    [3, "X", 5],
    ["X", 9, "X"],
    [7, 2, "X"],
  ],
];
const middleSudoku = [
  [
    ["X", 1, "X"],
    ["X", 8, 7],
    [2, "X", "X"],
  ],
  [
    ["X", 2, "X"],
    ["X", 1, "X"],
    [3, "X", "X"],
  ],
  [
    ["X", "X", 6],
    ["X", "X", 4],
    ["X", 7, "X"],
  ],
  [
    ["X", 4, 5],
    ["X", "X", "X"],
    [8, "X", 1],
  ],
  [
    ["X", 7, 8],
    ["X", "X", "X"],
    [6, "X", "X"],
  ],
  [
    ["X", 6, "X"],
    ["X", "X", "X"],
    ["X", "X", 7],
  ],
  [
    [4, "X", "X"],
    [1, 6, "X"],
    [5, "X", "X"],
  ],
  [
    ["X", 3, 1],
    ["X", "X", 5],
    ["X", "X", 7],
  ],
  [
    ["X", "X", 8],
    ["X", 4, "X"],
    ["X", "X", 1],
  ],
];

const testSudoku3 = [
  [
    [7, "X", "X"],
    ["X", "X", "X"],
    ["X", 8, "X"],
  ],
  [
    ["X", "X", "X"],
    ["X", 2, 8],
    [9, 6, "X"],
  ],
  [
    ["X", "X", 6],
    [3, 9, "X"],
    ["X", "X", "X"],
  ],
  [
    [8, "X", "X"],
    ["X", 9, "X"],
    [5, 3, "X"],
  ],
  [
    [5, "X", "X"],
    ["X", "X", 2],
    ["X", "X", "X"],
  ],
  [
    [7, 6, "X"],
    ["X", "X", "X"],
    [4, "X", 9],
  ],
  [
    ["X", 7, 4],
    ["X", 5, 8],
    ["X", 1, 6],
  ],
  [
    ["X", "X", 3],
    [4, 9, "X"],
    [2, 5, 7],
  ],
  [
    ["X", "X", "X"],
    [1, 7, 3],
    [9, "X", 8],
  ],
];

const testSudoku4 = [
  [
    ["X", 8, 2],
    ["X", "X", 1],
    [6, "X", 3],
  ],
  [
    ["X", "X", "X"],
    [4, "X", 6],
    ["X", 1, 8],
  ],
  [
    [1, "X", 6],
    [8, "X", 2],
    [7, "X", "X"],
  ],
  [
    [9, 4, "X"],
    ["X", "X", 6],
    ["X", "X", "X"],
  ],
  [
    [8, "X", 7],
    [5, "X", 1],
    ["X", 4, "X"],
  ],
  [
    [6, "X", "X"],
    ["X", "X", "X"],
    [2, 5, 7],
  ],
  [
    ["X", 1, "X"],
    [3, 6, "X"],
    ["X", "X", 9],
  ],
  [
    [9, "X", "X"],
    ["X", 8, "X"],
    [3, "X", 4],
  ],
  [
    ["X", 7, "X"],
    [4, 2, "X"],
    [5, "X", "X"],
  ],
];

const hardSudoku = [
  [
    ["X", "X", "X"],
    [6, "X", "X"],
    ["X", "X", 7],
  ],
  [
    ["X", "X", "X"],
    ["X", "X", 9],
    ["X", "X", 5],
  ],
  [
    ["X", "X", "X"],
    [1, "X", "X"],
    ["X", "X", 2],
  ],
  [
    ["X", "X", 8],
    ["X", "X", 6],
    ["X", "X", "X"],
  ],
  [
    ["X", "X", 2],
    ["X", 9, "X"],
    [3, 4, "X"],
  ],
  [
    ["X", "X", 9],
    ["X", 3, "X"],
    ["X", "X", "X"],
  ],
  [
    [1, "X", "X"],
    [5, "X", "X"],
    [4, "X", "X"],
  ],
  [
    [5, "X", 4],
    ["X", "X", 6],
    ["X", "X", "X"],
  ],
  [
    ["X", 2, "X"],
    ["X", "X", 7],
    ["X", "X", 3],
  ],
];

module.exports = {
  testSudoku1,
  testSudoku2,
  testSudoku3,
  testSudoku4,
  middleSudoku,
  hardSudoku,
};
