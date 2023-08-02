https://leetcode.com/problems/leaf-similar-trees/solutions/3852298/beats-99-54-of-users-with-javascript/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
    // dfs preorder

    const findLeaves = (root) => {
        // base case
        if (!root) {
            return []
        }
        else if (!root.left && !root.right) {
            return [root.val]
        }

        // recursive case
        const leftArr = findLeaves(root.left)
        const rightArr = findLeaves(root.right)

        // bubbling up
        // only get array value when it's the leaf nodes
        let mergedLeaves = [...leftArr, ...rightArr]

        return mergedLeaves
    }

    const root1Leaves = findLeaves(root1)
    const root2Leaves = findLeaves(root2)

    return JSON.stringify(root1Leaves) === JSON.stringify(root2Leaves)
};