// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/567/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zeroArr = []
    for (let left = 0; left < nums.length; left++) {
        if (nums[left] === 0) {
            nums.splice(left,1)
            left--
            zeroArr.push(0)
        }
    }
    nums.push(...zeroArr)
    return nums
};