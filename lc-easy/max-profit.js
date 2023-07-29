// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // find the diff if next day price is higher
    let diff = 0
    for  (let i = 0; i < prices.length-1; i++) {
        if (prices[i] < prices[i+1]) {
            diff += Math.abs(prices[i+1] - prices[i])
        }
    }
    return diff
};