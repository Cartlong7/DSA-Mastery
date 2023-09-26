import unittest


class MinStack:
    def __init__(self):
        self.stack = []
        self.minStack = []

    def push(self, val: int) -> None:
        self.stack.append(val)
        val = min(val, self.minStack[-1] if self.minStack else val)
        self.minStack.append(val)

    def pop(self) -> None:
        self.stack.pop()
        self.minStack.pop()

    def top(self) -> int:
        return self.stack[-1]

    def getMin(self) -> int:
        return self.minStack[-1]


class TestMinStack(unittest.TestCase):
    def setUp(self):
        self.minStack = MinStack()

    def test_push_and_top(self):
        self.minStack.push(5)
        self.assertEqual(self.minStack.top(), 5)
        self.minStack.push(2)
        self.assertEqual(self.minStack.top(), 2)
        self.minStack.push(7)
        self.assertEqual(self.minStack.top(), 7)

    def test_pop(self):
        self.minStack.push(5)
        self.minStack.push(2)
        self.minStack.push(7)
        self.minStack.pop()
        self.assertEqual(self.minStack.top(), 2)
        self.minStack.pop()
        self.assertEqual(self.minStack.top(), 5)

    def test_getMin(self):
        self.minStack.push(5)
        self.assertEqual(self.minStack.getMin(), 5)
        self.minStack.push(2)
        self.assertEqual(self.minStack.getMin(), 2)
        self.minStack.push(7)
        self.assertEqual(self.minStack.getMin(), 2)
        self.minStack.push(1)
        self.assertEqual(self.minStack.getMin(), 1)
        self.minStack.pop()
        self.assertEqual(self.minStack.getMin(), 2)

    def test_empty_stack(self):
        with self.assertRaises(IndexError):
            self.minStack.top()
        with self.assertRaises(IndexError):
            self.minStack.pop()
        with self.assertRaises(IndexError):
            self.minStack.getMin()


if __name__ == "__main__":
    unittest.main()
