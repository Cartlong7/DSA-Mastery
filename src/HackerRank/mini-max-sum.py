# miniMaxSum (easy)

# https://www.hackerrank.com/challenges/three-month-preparation-kit-mini-max-sum/problem

# Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

# Example:

# Input:
# arr = [1,3,5,7,9]

# Output:
# The minimum sum is 1 + 3 + 5 + 7 = 16 and the maximum sum is 3 + 5 + 7 + 9 = 24.
# 16 24


def miniMaxSum(arr):
    maxSum = float("-inf")
    minSum = float("inf")
    total = sum(arr)

    for i in range(len(arr)):
        minSum = min(minSum, (total - arr[i]))
        maxSum = max(maxSum, (total - arr[i]))

    print(minSum, maxSum)
