// https://leetcode.com/problems/removing-stars-from-a-string/submissions/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
    // store the result in a new array to make it efficient

    let newArr = []
    // loop from right to left to make it efficient
    let deleteCount = 0
    for (let right = s.length - 1; right >= 0; right--) {
        const char = s[right]

        if (char === "*") {
            deleteCount++
        }
        else if (deleteCount === 0) {
            newArr.push(char)
        }
        else if (deleteCount > 0) {
            deleteCount--
        }
    }
    const result = newArr.reverse().join("")
    return result
};