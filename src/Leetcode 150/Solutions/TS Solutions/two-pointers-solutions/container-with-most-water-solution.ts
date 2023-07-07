/*
11. Container With Most Water 

https://leetcode.com/problems/container-with-most-water/

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Example 1 : 
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2: Input: height = [1,1]
Output: 1
*/

/**
 * @param {number[]} height
 * @return {number}
 */

// Brute Force: O(n^2)

// const maxArea = function(height) {
//     let result = 0;
//     for (let i = 0; i < height.length; i++) {
//         for (let j = i + 1; j < height.length; j++) {
//             let newResult = Math.min(height[j], height[i]) * (j - i);
//             if (newResult > result) result = newResult;
//         }
//     }
//     return result;
// };

// Two pointer solution

const maxArea = function(height: number[]): number {
  let result = 0;
  let lp = 0;
  let rp: number = height.length - 1;

  for (let i = 0; i < height.length; i++) {
    if (height[lp] < height[rp]) {
      const newResult: number = height[lp] * (rp - lp);
      result = Math.max(result, newResult);
      lp++;
    } else {
      const newResult = height[rp] * (rp - lp);
      result = Math.max(result, newResult);
      rp--;   
    }
  }
  return result;
};