// https://leetcode.com/problems/is-subsequence/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    // loop over
    if (s === t) {
        return true
    }
    let sArr = s.split("")

    for (let i = 0; i < t.length; i++) {
        const char = t[i]
        const sub = sArr[0]

        if (char === sub) {
            sArr.shift()
        }

        // base case
        if (sArr.length === 0) {
            return true
        }
    }
    return false
};