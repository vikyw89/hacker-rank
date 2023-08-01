// https://www.hackerrank.com/challenges/one-month-preparation-kit-mini-max-sum/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-month-week-one

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    // sort arr
    const sortedArr = arr.sort()
    
    let max = 0
    let min = 0
    
    for (let i = 0; i < sortedArr.length; i++) {
        if (i !== 0) {
            max += sortedArr[i]
        }
        if (i !== sortedArr.length - 1) {
            min += sortedArr[i]
        }
    }
    console.log(`${min} ${max}`)
}