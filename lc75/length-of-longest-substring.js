// https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let longest = 0
    let hash = {}

    for (let right = 0, left = 0; right < s.length; right++) {
        const rightChar = s[right]
        // store char in hash
        if (!(rightChar in hash)) {
            // record the new longest string
            hash[rightChar] = 0
        }
        hash[rightChar]++

        if (hash[rightChar] === 1) {
            longest = Math.max(longest, Math.abs(left - (right + 1)))
        }
        else {
            // move left window until hash back to <= 1
            while (hash[rightChar] > 1) {
                let leftChar = s[left]
                hash[leftChar] -= 1
                left++
            }
        }
    }

    return longest
};