// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let report = []
    let MAX_CANDIES = Math.max(...candies)

    for (let i = 0; i < candies.length; i++){
        // record candies count
        if (candies[i] + extraCandies >= MAX_CANDIES) {
            report.push(true)
        } else {
            report.push(false)
        }
    }
    return report
};