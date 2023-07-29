// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let overflow = 1
    for (let right = digits.length-1; right >= 0; right--) {
        digits[right] += overflow
        overflow = 0
        if (digits[right] >= 10) {
            overflow = digits[right] / 10
            digits[right] = digits[right] % 10
        }
        if (right === 0 && overflow !== 0) {
            digits.unshift(overflow)
            console.log(digits)
            return digits
        }
        if (overflow === 0) {
            return digits
        }
    }
};