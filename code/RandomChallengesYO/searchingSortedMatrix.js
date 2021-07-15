/*
You're given a two-dimensional array of distinct integers and a target integer. Each row in the matrix is sorted, and each colunm is also sorted; the matrix doesn't necessarily have the same height and width.

Write a function that returns an array of the row and column indices of the target integer if it's contained in the matrix, otherwise return [-1, -1]

Optimal solution is O(n+m)time O(1)space
*/

let matrix = [
    [1, 4, 7, 12, 15, 1000],
    [2, 5, 19, 31, 32, 1001],
    [3, 8, 24, 33, 35, 1002],
    [40, 41, 42, 44, 45, 1003],
    [99, 100, 103, 106, 128, 1004]
  ]
  
  let target = 44
  
  // Expected output [3,3]
  // if currVal >target
  // // don't need to go down
  
  // if currval < target
  // // we don't need to look left
  
  function getTarget(matrix, target){
    let row = 0
    let col = matrix[row].length - 1
  
    while(row < matrix.length && col >= 0){
      console.log(row, col)
      if(matrix[row][col] > target){
        col --
      }else if( matrix[row][col] < target){
        row ++
      }else {
        return [row, col]
      }
    }
    return [-1,-1]
  }
  
  // console.log(getTarget(matrix, target))

  module.exports = getTarget;