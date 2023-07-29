// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/879/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {   
    let temp
    for (let left=0, right=s.length-1; left< right; left++, right--) {
        temp = s[left]
        s[left] = s[right]
        s[right] = temp
    }
};