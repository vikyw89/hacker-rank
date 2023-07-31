// https://leetcode.com/problems/move-zeroes/solutions/3834376/splice/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zeroArr = []
    let arr = []
    for (let left = 0; left < nums.length; left++) {
        if (nums[left] === 0) {
            zeroArr.push(0)
        } else {
            arr.push(nums[left])
        }
    }
    nums.splice(0,nums.length,...arr,...zeroArr)
};