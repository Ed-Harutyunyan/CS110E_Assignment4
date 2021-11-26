module.exports = {
   matricesProduct: function (mat1 , mat2) {
      if (mat1.length != mat2.length) {
          console.log('Matrices cannot be multiplied')
          return
      }
  
      let result = []
  
      for (let row = 0; row < mat1.length; row++) {
          result[row] = [];
          for (let row2 = 0; row2 < mat2[0].length; row2++) {
              let addition = 0
              for (let col = 0; col < mat1[0].length; col++)
                  addition += mat1[row][col] * mat2[col][row2]
              result[row][row2] = addition
          }
      }
         return result 
   },

    pointWiseSum: function  (mat1, mat2) {
      let result = []
      for (let row = 0; row < mat1.length; row++) {
          result[row] = [];
          for (let row2 = 0; row2 < mat2[0].length; row2++) {
              result[row][row2] = mat1[row][row2] + mat2[row][row2]
           }
      }
      
      return result
  },

  sumOfEachRow: function (mat) {

      function sumOfArr (mat) {
          let sum = 0
          for (let i = 0; i < mat.length; i++)
          sum += mat[i]
          return sum
        }
        
    sumOfArr(mat)
   let sumArr = []
   for (const i of mat)
       sumArr.push(sumOfArr(i))
   return sumArr
 },
} 