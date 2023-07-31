// https://leetcode.com/problems/max-number-of-k-sum-pairs/submissions/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
    let hash = {}
    let count = 0
    for (let left = 0; left < nums.length; left++) {
        if (!(nums[left] in hash)) {
            hash[nums[left]] = 0
        }
        hash[nums[left]]++
    }

    for (let num in hash) {
        const remainder = +k - +num
        while (+remainder === +num && hash[remainder] > 1) {
            hash[remainder] -= 2
            count++
        }

        while (hash[remainder] && +remainder !== +num && hash[remainder] > 0 && hash[num] > 0) {
            hash[remainder]--
            hash[num]--
            count++
        }


    }
    return count
};