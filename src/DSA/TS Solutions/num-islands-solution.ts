/* 
200. Number of Islands

https://leetcode.com/problems/number-of-islands/

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1: 
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Example 2: 
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
*/
/**
 * This first solution is if the grid contains numbers
 * @param {number[][]} grid
 * @return {number}
 */

const numIslands = (grid: number[][]): number => {
  let count = 0;
  const row = grid.length;
  const col = grid[0].length;

  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      if (grid[r][c]) {
        exploreIsland(r, c, grid, row, col);
        count++;
      }
    }
  }
  return count;
};

const exploreIsland = (r: number, c: number, grid: number[][], row: number, col: number) => {
  const rowInBound = r >= 0 && r < row;
  const colInBound = c >= 0 && c < col;
  if (!rowInBound || !colInBound || !grid[r][c]) return;

  grid[r][c] = 0;
  exploreIsland(r, c - 1, grid, row, col);
  exploreIsland(r, c + 1, grid, row, col);
  exploreIsland(r - 1, c, grid, row, col);
  exploreIsland(r + 1, c, grid, row, col);
};


/**
 * if num islands has characters of type string:
 * @param {character[][]} grid
 * @return {number}
 */

const numIslands2 = (grid: string[][]) => {
  let count = 0;

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === '1') {
        exploreIsland2(r, c, grid);
        count++;
      }
    }
  }
  return count;
};

const exploreIsland2 = (r: number, c: number, grid: string[][]) => {
  if (r < 0 || c < 0 || r >= grid.length || c >= grid[r].length || grid[r][c] === '0') return;

  grid[r][c] = '0';
  exploreIsland2(r, c - 1, grid);
  exploreIsland2(r, c + 1, grid);
  exploreIsland2(r - 1, c, grid);
  exploreIsland2(r + 1, c, grid);
};