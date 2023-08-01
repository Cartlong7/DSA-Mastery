/* 
28. Find the Index of the First Occurrence in a String

https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string

Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1: 
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

Example 2: 
Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
*/
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

const strStr = function(haystack: string, needle: string): number {
  if (!needle) return 0;
  let j = 0;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] != needle[j]) {
      i = i - j;
      j = 0;
    } else {
      if (j == needle.length - 1) return i - j;
      j++;
    }
  }
  return -1;
};