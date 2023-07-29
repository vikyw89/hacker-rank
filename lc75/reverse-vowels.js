// https://leetcode.com/problems/reverse-vowels-of-a-string/submissions/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    // create array of char for easier manipulation
    let input = s.split("")

    let pattern = new RegExp(String.raw`[aiueo]`, 'i')

    let left = 0
    let right = input.length - 1

    let hashIsVowel = {}
    while (left < right) {
        if (!(left in hashIsVowel)) {
            hashIsVowel[left] = pattern.test(input[left])
        }
        if (!(right in hashIsVowel)) {
            hashIsVowel[right] = pattern.test(input[right])
        }

        if (hashIsVowel[left] && hashIsVowel[right]) {
            let temp = input[left]
            input[left] = input[right]
            input[right] = temp
            left++
            right--
        }
        
        if (hashIsVowel[right] === false) {
            right--
        }

        if (hashIsVowel[left] === false) {
            left++
        }
    }

    return input.join("")
};