// https://leetcode.com/problems/unique-number-of-occurrences/submissions/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    let hash = {}

    for (let i = 0; i < arr.length; i++) {
        const currentValue = arr[i]

        if (!(currentValue in hash)) {
            hash[currentValue] = 0
        }
        hash[currentValue]++
    }

    // if hash similar value, return false else true
    // create another hash to record occurence
    let occurenceHash = {}

    for (let item in hash) {
        const hashValue = hash[item]

        if (!(hashValue in occurenceHash)) {
            occurenceHash[hashValue] = true
        } else {
            return false
        }
    }
    return true
};