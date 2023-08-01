// https://www.hackerrank.com/challenges/one-month-preparation-kit-plus-minus/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-month-week-one


/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    const report = {
        '+': 0,
        '-': 0,
        '0':0
    }
    // loop over array
    for (let i = 0; i < arr.length; i++) {
        switch (true) {
            case arr[i] > 0: {
                report['+']++
                break
            }
            case arr[i] === 0: {
                report['0']++
                break
            }
            case arr[i] < 0: {
                report['-']++
                break
            }
        }
    }
    
    let total = 0
    for (let key in report) {
        total += report[key]
    }
    console.log((report['+'] / total).toFixed(6))
    console.log((report['-'] / total).toFixed(6))
    console.log((report['0'] / total).toFixed(6))
}