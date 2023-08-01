// https://www.hackerrank.com/challenges/one-month-preparation-kit-diagonal-difference/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-month-week-one

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    let sumDiagonal1 = 0
    let sumDiagonal2 = 0
    // Write your code here
    for (let rowTop = 0, rowBot = arr.length -1; rowTop < arr.length; rowTop++, rowBot--){
        sumDiagonal1 += arr[rowTop][rowTop]
        sumDiagonal2 += arr[rowBot][rowTop]
    }
    const diff = Math.abs(sumDiagonal1 - sumDiagonal2)
    return diff
}