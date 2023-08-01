// https://www.hackerrank.com/challenges/one-month-preparation-kit-lonely-integer/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-month-week-one

/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
    // Write your code here
    let count = {}
    
    for (let i = 0; i < a.length; i++) {
        if (!(a[i] in count)) {
            count[a[i]] = 1
        } else {
            count[a[i]] += 1
        }
    }
    // find the lonely
    for (let element in count) {
        if (count[element] === 1) {
            return element
        }
    }
}