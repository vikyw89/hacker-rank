/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    // base case
    if (!root) {
        return []
    }

    // recursive case
    const leftNodes = lowestCommonAncestor(root.left, p, q)
    const rightNodes = lowestCommonAncestor(root.right, p, q)

    // bubbling up !
    // if returned nodes are numbers
    if (!Array.isArray(leftNodes)) {
        return leftNodes
    }
    else if (!Array.isArray(rightNodes)) {
        return rightNodes
    }

    // if returned nodes are arrays
    const nodes = [...leftNodes, ...rightNodes, root].filter(c => {
        if (c.val === p.val || c.val === q.val) {
            return true
        }
    })

    // if LCA is found, return int instead of array
    let output = nodes
    if (nodes.length === 2) {
        output = root
    }

    return output
};