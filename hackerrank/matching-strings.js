// https://www.hackerrank.com/challenges/one-month-preparation-kit-sparse-arrays/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-month-week-one

/*
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY strings
 *  2. STRING_ARRAY queries
 */

function matchingStrings(strings, queries) {
    // Write your code here
    console.log({strings, queries})
    let report = []
    
    for (let queryIndex = 0; queryIndex < queries.length; queryIndex++) {
        report.push(0)
        for (let i = 0; i < strings.length; i++) {
            if (queries[queryIndex] === strings[i]) {
                report[queryIndex]++
            }
        }
    }
    return report
}