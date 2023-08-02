// https://leetcode.com/problems/count-good-nodes-in-binary-tree/solutions/3852478/beats-98-09-of-users-with-javascript/

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
var goodNodes = function (root, max = -Infinity) {
    // base case
    if (!root) {
        return 0
    }
    else if (!root.left && !root.right) {
        if (max <= root.val) {
            return 1
        } else {
            return 0
        }
    }

    // recursive case
    // record self max val
    if (max < root.val) {
        max = root.val
    }
    const selfGoodNodes = root.val >= max ? 1 : 0
    const leftGoodNodes = goodNodes(root.left, max)
    const rightGoodNodes = goodNodes(root.right, max)


    // bubbling up
    // check if self is good nodes
    const goodNodesCount = leftGoodNodes + rightGoodNodes + selfGoodNodes
    return goodNodesCount
};