/* 
49. Group Anagrams

https://leetcode.com/problems/group-anagrams/

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1: Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2: Input: strs = [""]
Output: [[""]]

Example 3: Input: strs = ["a"]
Output: [["a"]]
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const groupAnagrams = (strs: string[]): string[][] => {
  const cache: {[key: string]: string[]} = {};
  for (const str of strs) {
    const letters = str.split('').sort().join('');
    if (cache[letters]) {
      cache[letters].push(str);
    } else {
      cache[letters] = [str];
    }
  }
  return Object.values(cache);
};