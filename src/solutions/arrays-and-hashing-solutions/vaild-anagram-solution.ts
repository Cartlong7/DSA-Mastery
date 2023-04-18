/*
242. Valid Anagram

https://leetcode.com/problems/valid-anagram/

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1 : Input: s = "anagram", t = "nagaram"
Output: true

Example 2: Input: s = "rat", t = "car"
Output: false
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isAnagram = function(s: string, t: string): boolean {
    const str1 = s.split('').sort();
    const str2 = t.split('').sort();
    if (str1.length !== str2.length) return false;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) return false;
    }
    return true;
};