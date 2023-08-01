// https://www.hackerrank.com/challenges/one-month-preparation-kit-flipping-bits/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-month-week-one


/*
 * Complete the 'flippingBits' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 */

function flippingBits(n) {
    // Write your code here
    let input = +n
    console.log()
    let binary = input.toString(2)
    while (binary.length < 32) {
        binary = `${0}${binary}`
    }

    let binaryOutput = ""
    // flip bit
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === '1') {
            binaryOutput += '0'
        } else {
            binaryOutput += '1'
        }
    }

    return parseInt(binaryOutput,2)
}