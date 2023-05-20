/* 
67. Add Binary

https://leetcode.com/problems/add-binary/

Given two binary strings a and b, return their sum as a binary string.

Example 1: 
Input: a = "11", b = "1"
Output: "100"

Example 2: 
Input: a = "1010", b = "1011"
Output: "10101"
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

const addBinary = (a: string, b: string) => {
    const aBinary = `0b${a}`;
    const bBinary = `0b${b}`;
    const sum = BigInt(aBinary) + BigInt(bBinary);
    return sum.toString(2);
};