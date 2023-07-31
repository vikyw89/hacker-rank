// https://leetcode.com/problems/maximum-average-subarray-i/submissions/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let maxTotal = -Infinity
    let max = null

    for (let left = 0; left + k - 1 < nums.length; left++) {
        if (max === null) {
            max = nums.slice(left, k).reduce((p, c) => p + c, 0)
        } else {
            max += nums[left + k - 1]
            max -= nums[left - 1]
        }
        maxTotal = Math.max(maxTotal, max)
    }

    const maxAverage = maxTotal / k
    return maxAverage
};