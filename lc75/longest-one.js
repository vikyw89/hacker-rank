// https://leetcode.com/problems/max-consecutive-ones-iii/solutions/3846316/beats-93-42-of-users-with-javascript/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let max = 0
    let left = 0
    let right = 0
    while (right < nums.length) {
        // move right window
        if (nums[right] === 0) {
            k--
        }
        right++

        // move left window only if k < 0
        while (k < 0) {
            if (nums[left] === 0) {
                k++
            }
            left++
        }

        // get max from distance between left and right index
        if (k === 0 || right === nums.length) {
            max = Math.max(max, Math.abs(left - right))
        }
    }
    return max
};