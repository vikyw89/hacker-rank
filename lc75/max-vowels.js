// https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/submissions/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    let max = 0
    let count = null
    let hash = {
        'a': true,
        'i': true,
        'u': true,
        'e': true,
        'o': true
    }
    // sliding window
    const pattern = new RegExp(
        String.raw`[aiueo]`
    )

    for (let left = 0, right = left + k - 1; right < s.length; left++, right++) {
        // hash
        if (count === null) {
            count = [...s.slice(left, k)].filter(c => c in hash).length
        } else {
            const leftMinusChar = s[left - 1]
            const rightChar = s[right]
            if (leftMinusChar in hash) {
                count--
            }
            if (rightChar in hash) {
                count++
            }
        }

        // tally count
        max = Math.max(max, count)
        if (max === k) {
            break
        }
    }
    return max
};