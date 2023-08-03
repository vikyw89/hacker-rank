// https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/submissions/?envType=study-plan-v2&envId=leetcode-75

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
var maxLevelSum = function (root) {
    class NodeStats {
        constructor(depth, node) {
            this.depth = depth,
                this.node = node
        }
    }

    let queue = [new NodeStats(1, root)]
    let hash = {}

    while (queue.length > 0) {
        const { depth, node } = queue.shift()

        if (!node) continue

        // traverse next
        queue.push(new NodeStats(depth + 1, node.left))
        queue.push(new NodeStats(depth + 1, node.right))

        const { val } = node
        // store value and add into hash
        if (!(depth in hash)) {
            hash[depth] = val
        } 
        else {
            hash[depth] += val
        }
    }

    // find level with the max sum
    // or hash key with the max value
    let maxLevel = 0
    let maxSum = -Infinity

    for (let index in hash) {
        const sum = hash[index]

        if (maxSum < sum) {
            maxLevel = index
            maxSum = sum
        }
    }

    return maxLevel
};