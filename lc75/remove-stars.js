// https://leetcode.com/problems/removing-stars-from-a-string/solutions/

/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
    // store the result in a stack
    let stack = []
    for (let i = 0; i < s.length; i++) {
        const char = s[i]

        if (char !== "*") {
            stack.push(char)
        } else {
            stack.pop()
        }
    }
    return stack.join("")
};