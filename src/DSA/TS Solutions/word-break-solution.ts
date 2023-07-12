/* 
139. Word Break

https://leetcode.com/problems/word-break/

Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.
Note that the same word in the dictionary may be reused multiple times in the segmentation.

Example 1:
Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".

Example 2:
Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.

Example 3:
Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false
*/
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

const wordBreak = function(s: string, wordDict: string[]) {
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true;
  const maxLength = Math.max(...wordDict.map(word => word.length));

  for (let i = 1; i <= s.length; i++) {
    for (let j = i - 1; j >= Math.max(i - maxLength - 1, 0); j--) {
      if (dp[j] && wordDict.includes(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
};