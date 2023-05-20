/* 
14. Longest Common Prefix

https://leetcode.com/problems/longest-common-prefix/

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1: 
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2: 
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */

const longestCommonPrefix = (strs: Array<string>): string => {
    if (strs.length === 0) return '';
    let prefix = strs[0];
    for (const s of strs) {
        for (let i = prefix.length - 1; i>= 0; i--) {
            if (prefix[i] !== s[i]) prefix = prefix.slice(0, i);
        }
    }
    return prefix;
};