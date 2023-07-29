// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // remove duplicates
    for (let i = 0; i < nums.length-1; i++) {
        if (nums[i] === nums[i+1]) {
            nums.splice(i+1,1)
            i--
        }
    }
    return nums.length
};