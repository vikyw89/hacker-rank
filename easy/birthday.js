// https://www.hackerrank.com/challenges/one-month-preparation-kit-the-birthday-bar/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one


/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s, d, m) {
    // sliding window
    let count = 0
    for (let left = 0; left + m <= s.length ; left++){
        // total in window
        const window = [...s.slice(left, left + m)]
        const sum = window.reduce((p,c)=>p+c,0)
        if (d === sum) {
            count++
        }
    }
    return count
}