// https://leetcode.com/problems/product-of-array-except-self/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // loop to the right and keep * of each into a hash and store it
    let hashL = {}
    
    for (let i = 0; i < nums.length; i++) {
        let left = nums[i-1] ?? 1
        // store in hashL
        let leftMinus = hashL[i-1] ?? 1
        hashL[i] = left * leftMinus
    }

    let hashR = {}
    // loop from right to left
    for (let i = nums.length-1; i >= 0; i--) {
        let right = nums[i+1] ?? 1
        // store in hashR
        let rightPlus = hashR[i+1] ?? 1
        hashR[i] = right * rightPlus
    }

    // mutate nums
    for (let i = 0; i < nums.length; i++) {
        nums[i] = hashL[i] * hashR[i]
    }

    return nums
};