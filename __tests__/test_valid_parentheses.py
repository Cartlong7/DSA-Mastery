import unittest


class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        hashmap = {"]": "[", "}": "{", ")": "("}
        for c in s:
            bracket = c in hashmap
            if not bracket:
                stack.append(c)
                continue
            if stack[-1] == hashmap[c]:
                stack.pop()
                continue
            return False
        return len(stack) == 0


class TestSolution(unittest.TestCase):
    def setUp(self):
        self.solution = Solution()

    def test_valid_strings(self):
        self.assertTrue(self.solution.isValid("()"))
        self.assertTrue(self.solution.isValid("()[]{}"))
        self.assertTrue(self.solution.isValid("{[]}"))
        self.assertTrue(self.solution.isValid("{{[[(())]]}}"))

    def test_invalid_strings(self):
        self.assertFalse(self.solution.isValid("(]"))
        self.assertFalse(self.solution.isValid("([)]"))
        self.assertFalse(self.solution.isValid("()()(()))"))

    def test_empty_string(self):
        self.assertTrue(self.solution.isValid(""))


if __name__ == "__main__":
    unittest.main()
