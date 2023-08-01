// https://leetcode.com/problems/determine-if-two-strings-are-close/submissions/1009223436/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
    // if length is different, return false
    if (word1.length !== word2.length) {
        return false
    }

    // create a hash to count occurences of each letter

    let word1Hash = {}
    let word2Hash = {}

    for (let i = 0; i < word1.length; i++) {
        const word1Letter = word1[i]
        const word2Letter = word2[i]

        if (!(word1Letter in word1Hash)) {
            word1Hash[word1Letter] = 0
        }
        word1Hash[word1Letter]++

        if (!(word2Letter in word2Hash)) {
            word2Hash[word2Letter] = 0
        }
        word2Hash[word2Letter]++
    }

    // check if they have the same characters
    for (let word1Char in word1Hash) {
        if (!(word1Char in word2Hash)) {
            return false
        }
    }

    for (let word2Char in word2Hash) {
        if (!(word2Char in word2Hash)) {
            return false
        }
    }

    // log the occurences # into array
    let word1Arr = []
    let word2Arr = []

    for (let key in word1Hash) {
        const value = word1Hash[key]
        word1Arr.push(value)
    }

    for (let key in word2Hash) {
        const value = word2Hash[key]
        word2Arr.push(value)
    }

    // sort the array and compare
    const sortedWord1Arr = word1Arr.sort((a, b) => a < b ? -1 : 1)
    const sortedWord2Arr = word2Arr.sort((a, b) => a < b ? -1 : 1)

    // same, return true, else false
    if (JSON.stringify(sortedWord1Arr) === JSON.stringify(sortedWord2Arr)) {
        return true
    }
    else {
        return false
    }
};