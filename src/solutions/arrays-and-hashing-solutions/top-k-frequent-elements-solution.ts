/* 
347. Top K Frequent Elements

https://leetcode.com/problems/top-k-frequent-elements/

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1: Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2: nums = [1], k = 1
Output: [1]
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

const topKFrequent = (nums: number[], k: number): number[] => {
    const frequency: {[key: string]: number} = {};
    const output = [];

    for (let i = 0; i < nums.length; i++) {
        if (frequency.hasOwnProperty(nums[i])) frequency[nums[i]] += 1;
        else frequency[nums[i]] = 1;
    }
    // type is inferred here, however whether it is best practice to explicitly write the type as number[][], I'm not sure at the moment
    const result = Object.keys(frequency).map(key => [Number(key), frequency[key]]);
    const sortedResult = result.sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < k; i++) {
      output.push(sortedResult[i][0]);
    }
    return output;
};