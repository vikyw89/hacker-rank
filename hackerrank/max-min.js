https://www.hackerrank.com/challenges/one-month-preparation-kit-angry-children/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-month-week-two


/*
 * Complete the 'maxMin' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY arr
 */

function maxMin(k, arr) {
    // Write your code here
    let minUnfairness = Infinity
    
    const sortedArr = arr.sort((a,b)=>a < b ? -1 : 1)
    
    for (let i = 0; i+k <= arr.length; i++) {
        const unfairness = sortedArr[i+k-1] - sortedArr[i] 
        if (unfairness < minUnfairness) {
            minUnfairness = unfairness 
        }
    }
    return minUnfairness
}