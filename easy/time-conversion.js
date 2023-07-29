// https://www.hackerrank.com/challenges/one-month-preparation-kit-time-conversion/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-month-week-one

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    // split into hours, minutes, and second
    const AMPM = s.slice(-2)
    const [hours, minutes, seconds] = s.slice(0,-2).split(":")

    // convert 12AM into 00
    // convert 12PM into 12
    let formatedHours = hours
    if (AMPM === 'AM' && hours === '12') {
        formatedHours = '00'
    }
    if (AMPM === 'PM' && hours !== '12') {
        formatedHours = (+formatedHours + 12).toString()
    }
    const formated = `${formatedHours}:${minutes}:${seconds}`
    return formated
}