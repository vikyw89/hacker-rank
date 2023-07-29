// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    for (let left = 0; left < nums.length; left++) {
        for (let right = left + 1; right < nums.length; right++) {
            if (nums[left] === nums[right]) {
                return true
            }
        }
    }
    return false
};