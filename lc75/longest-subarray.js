// https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/submissions/?envType=study-plan-v2&envId=leetcode-75


/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    let deleteCount = 1
    let max = 0
    let left = 0
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            deleteCount--
        }

        while (deleteCount < 0) {
            if (nums[left] === 0) {
                deleteCount++
            }
            left++
        }

        const diff = Math.abs(left - right)
        max = Math.max(diff, max)
    }
    return max
};