// https://leetcode.com/problems/find-the-difference-of-two-arrays/submissions/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    // hash everything
    let nums1Hash = {}
    let nums2Hash = {}

    for (let i = 0; i < nums1.length; i++) {
        nums1Hash[nums1[i]] = true
    }

    for (let i = 0; i < nums2.length; i++) {
        nums2Hash[nums2[i]] = true
    }

    let distinctNum1Arr = []
    let distinctNum2Arr = []

    for (let item in nums1Hash) {
        if (!(item in nums2Hash)) {
            distinctNum1Arr.push(item)
        }
    }

    for (let item in nums2Hash) {
        if (!(item in nums1Hash)) {
            distinctNum2Arr.push(item)
        }
    }

    return [distinctNum1Arr, distinctNum2Arr]
};