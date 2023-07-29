// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/674/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    
    const smallArr = nums1.length < nums2.length ? nums1 : nums2
    const bigArr = nums2.length > nums1.length ? nums2 : nums1
    
    let output = []
    
    for (let smallEl of smallArr) {
        for (let bigEl of bigArr) {
            if (smallEl === bigEl) {
                output.push(smallEl)
                bigArr[bigArr.indexOf(bigEl)] = undefined
                break 
            }
        }

    }
    return output
};