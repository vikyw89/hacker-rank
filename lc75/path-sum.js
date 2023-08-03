// https://leetcode.com/problems/path-sum-iii/submissions/?envType=study-plan-v2&envId=leetcode-75

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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum, path = []) {
    // base case
    if (!root) {
        return 0
    }

    // check for targetSum
    const newPath = [...path, root.val]
    let ways = 0
    let sum = 0
    for (let i = newPath.length - 1; i >= 0; i--) {
        const value = newPath[i]
        sum += value
        if (sum === targetSum) {
            ways++
        }
    }
    
    // recursive case
    const leftWays = pathSum(root.left, targetSum, newPath)
    const rightWays = pathSum(root.right, targetSum, newPath)

    // bubbling up
    const totalWays = leftWays + rightWays + ways
    return totalWays
};