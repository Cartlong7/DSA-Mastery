/*
125. Valid Palindrome

https://leetcode.com/problems/valid-palindrome/

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1 : 
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2: Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3: Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
*/

/**
 * @param {string} s
 * @return {boolean}
 */

/* 
Time Complexity: O(n)
Space Complexity: O(n)
*/

const isPalindrome = (s: string): boolean => {
  const newStr = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  return (newStr.split('').reverse().join('') === newStr);
};

// THIS IS THE TWO POINTER SOLUTION

/* 
Time Complexity: O(n)
Space Complexity: O(n)
*/

// const isPalindrome = (s: string): boolean => {
//     const array = s.toLowerCase().replace(/[^A-Za-z0-9]/g, '')
//         .replace(/\s/g, '')
//         .split('');

//     for (let i = 0; i < array.length; i++) {
//         const first = array[i];
//         const second = array[array.length - 1 - i];

//         if (first !== second) {
//             return false;
//         }
//     }
//     return true;
// }