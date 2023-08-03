// https://leetcode.com/problems/delete-node-in-a-bst/submissions/?envType=study-plan-v2&envId=leetcode-75

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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
    // base case
    if (!root) {
        return null;
    }
    else if (root.val === key) {
        if (!root.left || !root.right) {
            return root.left || root.right
        }
        let leftSmallest = root.left;
        while (leftSmallest.right != null) {
            leftSmallest = leftSmallest.right;
        }
        leftSmallest.right = root.right;
        return root.left;
    }

    // recursive case
    if (root.val > key) {
        root.left = deleteNode(root.left, key);
    }
    else {
        root.right = deleteNode(root.right, key)
    };

    return root;
};