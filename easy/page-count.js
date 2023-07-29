// https://www.hackerrank.com/challenges/one-month-preparation-kit-drawing-book/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-two


/*
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n, p) {
    // Write your code here
    
    // page 0 is 1
    // page 2 is 2,3
    if (p === 1) {
        return 0
    }
    // make p and n even number
    let evenP = p
    let evenN = n
    
    if (p % 2 !== 0) {
        evenP = p - 1
    }
    if (n % 2 !== 0) {
        evenN = n - 1
    }
    
    const flipFromFront = evenP / 2
    const flipFromBack = Math.abs(evenP - evenN) / 2
    
    const leastFlip = flipFromFront > flipFromBack ? flipFromBack : flipFromFront
    return leastFlip
}