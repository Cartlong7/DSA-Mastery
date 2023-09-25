import unittest
from typing import List


class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []
        for char in tokens:
            if char == "+":
                stack.append(stack.pop() + stack.pop())
            elif char == "-":
                a, b = stack.pop(), stack.pop()
                stack.append(b - a)
            elif char == "*":
                stack.append(stack.pop() * stack.pop())
            elif char == "/":
                a, b = stack.pop(), stack.pop()
                stack.append(int(b / a))
            else:
                stack.append(int(char))
        return stack[0]


class TestSolution(unittest.TestCase):
    def setUp(self):
        self.solution = Solution()

    def test_evalRPN(self):
        # Test case 1
        tokens1 = ["2", "1", "+", "3", "*"]
        self.assertEqual(self.solution.evalRPN(tokens1), 9)

        # Test case 2
        tokens2 = ["4", "13", "5", "/", "+"]
        self.assertEqual(self.solution.evalRPN(tokens2), 6)

        # Test case 3
        tokens3 = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
        self.assertEqual(self.solution.evalRPN(tokens3), 22)


if __name__ == "__main__":
    unittest.main()
