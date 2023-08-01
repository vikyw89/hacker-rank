// https://www.hackerrank.com/challenges/one-month-preparation-kit-sock-merchant/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-two


/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
    // Write your code here
    // loop and find sock using 2nd pointer
    
    let pairsCount = 0
    for (let left = 0; left < n; left++) {
        for (let right = left+1; right < n; right++) {
            if (ar[left] === ar[right] && ar[left] !== null) {
                pairsCount++
                ar[left] = null
                ar[right] = null
            }
        }
    }
    return pairsCount
}