// https://leetcode.com/problems/find-the-highest-altitude/submissions/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let lastAltitude = 0
    let highest = 0
    for (let left = 0; left < gain.length; left++) {
        const newAltitude = lastAltitude + gain[left]
        lastAltitude = newAltitude
        highest = Math.max(highest, lastAltitude)
    }

    return highest
};