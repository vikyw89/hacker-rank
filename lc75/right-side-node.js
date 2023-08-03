// https://leetcode.com/problems/binary-tree-right-side-view/submissions/?envType=study-plan-v2&envId=leetcode-75

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
 * @return {number[]}
 */
var rightSideView = function (root) {
    let queue = []
    let hash = {}
    let valuesArr = []
    // add root to queue, store the level too

    class NodeStats {
        constructor(depth, node) {
            this.depth = depth,
                this.node = node
        }
    }
    queue.push(new NodeStats(0, root))

    while (queue.length > 0) {
        const { node, depth } = queue.shift()
        if (!node) continue

        // add left and right nodes into queue
        queue.push(new NodeStats(depth + 1, node.right))
        queue.push(new NodeStats(depth + 1, node.left))

        // if depth is not in hash, store depth in valuesArr
        if (!(depth in hash)) {
            valuesArr.push(node.val)
        }
        // store nodes value
        // hash key would be the depth
        if (node?.val !== undefined) {
            hash[depth] = node.val
        }
    }
    return valuesArr
};