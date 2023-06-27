# 242. Valid Anagram

# https://leetcode.com/problems/valid-anagram/

# Given two strings s and t, return true if t is an anagram of s, and false otherwise.

# An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

# Example 1 : Input: s = "anagram", t = "nagaram"
# Output: true

# Example 2: Input: s = "rat", t = "car"
# Output: false


# NOTE: you can solve this in python quite easily with sorted() but this solution using a hashmap is:
# 1. more optimal in time complexity because most sorting algorithms are at best 0(n log n)
# 2. interviewers will most likely want to see a solution that doesn't rely on builtins


class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        countS, countT = {}, {}

        for i in range(len(s)):
            countS[s[i]] = 1 + countS.get(s[i], 0)
            countT[t[i]] = 1 + countT.get(t[i], 0)
        for c in countS:
            if countS[c] != countT.get(c, 0):
                return False
        return True
