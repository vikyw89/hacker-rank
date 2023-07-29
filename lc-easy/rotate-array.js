// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    const modK = k % (nums.length)
    if (modK === 0) {
        return
    }
    let temp = nums.slice(-modK)
    nums.splice(nums.length - modK)
    nums.unshift(...temp)
};