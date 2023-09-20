# 22. Generate Parentheses

# https://leetcode.com/problems/generate-parentheses/description/

# Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.


# Example 1:
# Input: n = 3
# Output: ["((()))","(()())","(())()","()(())","()()()"]

# Example 2:
# Input: n = 1
# Output: ["()"]

# Constraints:
# 1 <= n <= 8

from typing import List


class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        stack = []
        result = []

        def backtrack(openCount, closedCount):
            if openCount == closedCount == n:
                result.append("".join(stack))
                return
            if openCount < n:
                stack.append("(")
                backtrack(openCount + 1, closedCount)
                stack.pop()
            if closedCount < openCount:
                stack.append(")")
                backtrack(openCount, closedCount + 1)
                stack.pop()

        backtrack(0, 0)
        return result
