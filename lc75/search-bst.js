// https://leetcode.com/problems/search-in-a-binary-search-tree/solutions/3856119/beats-97-18-of-users-with-javascript/

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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    let queue = [root]

    while (queue.length > 0) {
        const node = queue.shift()

        // if no node, no need to traverse
        if (!node) continue

        // traverse queue
        queue.push(node.left)
        queue.push(node.right)

        // compare value
        if (node.val === val) {
            return node
        }
    }
    // if found none, return null
    return null
};