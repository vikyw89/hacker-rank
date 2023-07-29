// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/546/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let hash = {}

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]

        if (hash[diff] !== undefined) return [i, hash[diff]]

        hash[nums[i]] = i
    }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let hash = {}
    
    for (let left = 0; left < nums.length -1; left++) {
        if (!(nums[left] in hash)) {
            hash[nums[left]] = left
        }
        let toFind = target - nums[left + 1]
        
        if (toFind in hash) {
            return [hash[toFind], left+1]
        }
    }
};