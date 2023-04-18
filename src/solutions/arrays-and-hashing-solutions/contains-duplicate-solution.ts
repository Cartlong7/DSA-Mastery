/* 
217. Contains Duplicate

https://leetcode.com/problems/contains-duplicate/

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1: Input: nums = [1,2,3,1]
Output: true 

Example 1: Input: nums = [1,2,3,4]
Output: false 

Example 3: Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true */

/**
 * @param {number[]} nums
 * @return {boolean}
 */

const containsDuplicate = (nums : number[]): boolean => {
    const cache:{[key: number]: number} = {};
    for (let i = 0; i < nums.length; i++) {
        let el: number = nums[i];
        if (cache.hasOwnProperty(el)) {
            return true;
        } else {
            cache[el] = el;
        }
    };
    return false;
};