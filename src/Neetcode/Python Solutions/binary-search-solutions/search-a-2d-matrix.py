# 74. Search a 2D Matrix

# https://leetcode.com/problems/search-a-2d-matrix/

# You are given an m x n integer matrix matrix with the following two properties:

# Each row is sorted in non-decreasing order.
# The first integer of each row is greater than the last integer of the previous row.
# Given an integer target, return true if target is in matrix or false otherwise.
# You must write a solution in O(log(m * n)) time complexity.

# Example 1:
# 1  3  5  7
# 10 11 16 20
# 23 30 34 60
# Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
# Output: true

# Example 2:
# 1  3  5  7
# 10 11 16 20
# 23 30 34 60
# Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
# Output: false

from typing import List


# First binary search solution
class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        rows, cols = len(matrix), len(matrix[0])
        top, bottom = 0, rows - 1

        while top <= bottom:
            row = (top + bottom) // 2
            if target > matrix[row][-1]:
                top = row + 1
            elif target < matrix[row][0]:
                bottom = row - 1
            else:
                break
        if not top <= bottom:
            return False

        row = (top + bottom) // 2
        l, r = 0, cols - 1

        while l <= r:
            m = (l + r) // 2
            if target > matrix[row][m]:
                l = m + 1
            elif target < matrix[row][m]:
                r = m - 1
            else:
                return True
        return False


# Solution two
class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        rows, cols = len(matrix), len(matrix[0])
        left, right = 0, rows * cols - 1

        while left <= right:
            mid = (left + right) // 2
            midRow, midCol = divmod(mid, cols)

            if matrix[midRow][midCol] == target:
                return True
            elif matrix[midRow][midCol] < target:
                left = mid + 1
            else:
                right = mid - 1

        return False
