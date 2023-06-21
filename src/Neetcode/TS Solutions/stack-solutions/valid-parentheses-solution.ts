/* 
20. Valid Parentheses

https://leetcode.com/problems/valid-parentheses/

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example 1: 
Input: s = "()"
Output: true

Example 2: 
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false
*/

/**
 * @param {string} s
 * @return {boolean}
 */

const validParens = (s: Array<string>) => {
  const stack = [];
  const map: {[key: string]: string} = {']': '[', '}': '{', ')': '('};

  for (const c of s) {
    const isBracket = (c in map);
    if (!isBracket) {
      stack.push(c);
      continue;
    } 
    if (stack[stack.length - 1] === map[c]) {
      stack.pop();
      continue;
    }
    return false;
  }
  return (stack.length === 0);
};