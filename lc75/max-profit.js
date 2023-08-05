// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxProfit = 0

    for (let left = 0, right = 1; right < prices.length; right++) {
        const leftPrice = prices[left]
        const rightPrice = prices[right]

        // check for profit
        const profit = rightPrice - leftPrice
        if (profit > maxProfit) {
            maxProfit = profit
        }
        if (leftPrice > rightPrice) {
            left = right
        }
    }

    return maxProfit
};