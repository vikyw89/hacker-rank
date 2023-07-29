
/*
 * Complete the 'palindromeIndex' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function palindromeIndex(s) {
    // Write your code here
    // helper
    const isPalindrome = (arg) => {
        for (let left = 0, right = arg.length-1; left < right; left++, right--) {
            if (arg[left] !== arg[right]) {
                return [left,right]
            }
        }
        return "palindrome"
    }
    
    const check = isPalindrome(s)
    if (check === "palindrome") {
        return -1
    }
    
    for (let index of check) {
        let modifiedString = [...s]
        modifiedString.splice(index,1)
        modifiedString = modifiedString.join("")
        console.log({modifiedString})
        if (isPalindrome(modifiedString) === "palindrome") {
            return index
        }
    }
    return -1
}