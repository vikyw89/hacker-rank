// https://www.hackerrank.com/test/3fmlgi1ase7/questions/bae9p3effgk


/*
 * Complete the 'anagram' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function anagram(s) {
    // Write your code here
    // if length is odd return -1
    if (s.length % 2 === 1) {
        return -1
    }
    
    // divide into 2 substring
    const mid = s.length / 2
    let left = s.slice(0,mid)
    const right = s.slice(mid)
    
    let count = 0
    // eliminate char on the left, if nothing, increases count
    for (let i = 0; i < right.length; i++) {
        const beforeLength = left.length
        left = left.replace(right[i],"")
        const afterLength = left.length
        if (beforeLength === afterLength) {
            count++
        }
    }
    return count
}