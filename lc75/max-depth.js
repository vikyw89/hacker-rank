// https://leetcode.com/problems/maximum-depth-of-binary-tree/submissions/?envType=study-plan-v2&envId=leetcode-75

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
 * @return {number}
 */
var maxDepth = function(root) {
    // base case
    if (!root) {
        return 0
    }

    // recursive case
    let leftDepth = maxDepth(root.left)
    let rightDepth = maxDepth(root.right)

    // bubbling up
    let depth = Math.max(leftDepth, rightDepth) + 1
    return depth
};