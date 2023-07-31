// https://leetcode.com/problems/container-with-most-water/submissions/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    // pick 2 numbers, then calculate the score / water
    // to calculate we need Math.min(height1. height2), and Math.abs(index1 - index2)
    // find max of each entry

    // start from theoretical biggest container
    // highest wall vs furthest distance

    // everytime the window compress we compare the biggest possible area
    let maxArea = -Infinity

    let left = 0
    let right = height.length - 1

    while (left < right) {
        const leftH = height[left]
        const rightH = height[right]

        const w = Math.abs(left - right)
        const h = Math.min(leftH, rightH)
        const area = w * h

        if (area > maxArea) {
            maxArea = area
        }

        if (leftH <= rightH) {
            left++
        } else {
            right--
        }
    }
    return maxArea
};