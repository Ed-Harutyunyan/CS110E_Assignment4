const matutil = require('./utils.js');

const matrix1 = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9]
]

const matrix2 = [
   [1, 2, 4],
   [4, 5, 6],
   [7, 8, 9]
]

 console.log(matutil.matricesProduct(matrix1, matrix2))

 console.log(matutil.pointWiseSum(matrix1, matrix2));

 console.log(matutil.sumOfEachRow(matrix1));
 