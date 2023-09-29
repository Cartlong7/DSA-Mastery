// 54. Spiral Matrix

// https://leetcode.com/problems/spiral-matrix/

// Given an m x n matrix, return all elements of the matrix in spiral order.

// Example 1:
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

// Example 2:
// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = (matrix: number[][]): number[] => {
  const result = [];
  let startRow = 0,
    startCol = 0;
  let endRow = matrix.length - 1,
    endCol = matrix[0].length - 1;

  while (startCol <= endCol && startRow <= endRow) {
    // Building out top row
    for (let i = startCol; i <= endCol; i++) {
      result.push(matrix[startRow][i]);
    }
    startRow += 1;
    // Building out right column
    for (let i = startRow; i <= endRow; i++) {
      result.push(matrix[i][endCol]);
    }
    endCol -= 1;
    // Break out of loop if pointers cross
    if (startCol <= endCol && startRow <= endRow) {
      // Building out bottom row
      for (let i = endCol; i >= startCol; i--) {
        result.push(matrix[endRow][i]);
      }
      endRow -= 1;
      // Building out left column
      for (let i = endRow; i >= startRow; i--) {
        result.push(matrix[i][startCol]);
      }
      startCol += 1;
    }
  }
  return result;
};
