// https://leetcode.com/problems/find-pivot-index/solutions/3846825/beats-90-04-of-users-with-javascript/

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let leftTotal = null
    let rightTotal = null

    for (let pivot = 0; pivot < nums.length; pivot++) {
        if (leftTotal === null & rightTotal === null) {
            rightTotal = nums.slice(pivot + 1).reduce((p, c) => p + c, 0)
            leftTotal = nums.slice(0, pivot).reduce((p, c) => p + c, 0)
        } else {
            leftTotal += nums[pivot - 1]
            rightTotal -= nums[pivot]
        }
        if (leftTotal === rightTotal) {
            return pivot
        }
    }
    return -1
};