/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let merged = ""
    let index = 0
    while (true) {
        if (word1[index]) {
            merged += word1[index]
        }
        if (word2[index]) {
            merged += word2[index]
        }
        if ((!word1[index])&& (!word2[index])) {
            break
        }
        index++
    }
    return merged
};