// https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/solutions/3853689/beats-85-12-of-users-with-javascript/

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
var longestZigZag = function (root, length = 0, wasLeft) {
    // base case
    if (!root) {
        return length - 1
    }

    // recursive case
    let maxLength = length
    let leftLength = 0
    let rightLength = 0

    if (wasLeft === undefined) {
        rightLength = longestZigZag(root.right, 1, false)
        leftLength = longestZigZag(root.left, 1, true)
    }
    else if (wasLeft === true) {
        rightLength = longestZigZag(root.right, maxLength + 1, false)
        leftLength = longestZigZag(root.left, 1, true)
    }
    else if (wasLeft === false) {
        rightLength = longestZigZag(root.right, 1, false)
        leftLength = longestZigZag(root.left, maxLength + 1, true)
    }

    // bubbling case
    maxLength = Math.max(rightLength, leftLength)
    return maxLength
};