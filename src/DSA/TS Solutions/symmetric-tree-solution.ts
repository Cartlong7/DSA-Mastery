/* 
101. Symmetric Tree

https://leetcode.com/problems/symmetric-tree/

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

Example 1: 
      1
     / \
   2     2
  /\     /\
 3  4   4  3
Input: root = [1,2,2,3,4,4,3]
Output: true

Example 2: 
      1
     / \
   2     2
   \      \
    3      3

Input: p = [1,2], q = [1,null,2]
Output: false

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */

const isSymmetric = (root: TreeNode) => {
  const dfs = (left: TreeNode | null, right: TreeNode | null): boolean => {
    if (!left && !right) return true;
    if (!left || !right) return false;
    return (left.val === right.val && dfs(left.left, right.right) && dfs(left.right, right.left));
  };
  return dfs(root.left, root.right);
};