// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let count = {}
    for (let left = 0; left < nums.length; left++) {
        if (!(nums[left] in count)) {
            count[nums[left]] = 0
        } 
        count[nums[left]]++
    }
    for (let data in count) {
        if (count[data] === 1) {
            return data
        }
    }
};