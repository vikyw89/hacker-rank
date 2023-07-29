// https://www.hackerrank.com/challenges/one-month-preparation-kit-pangrams/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-month-week-one

/*
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s) {
    // Write your code here
    // make input lowercase
    const lowercase = s.toLowerCase()
    // create an array of alphabet
    let alphabetArr = []
    for (let i = 'a'.charCodeAt(0); i < 26 + 'a'.charCodeAt(0); i++) {
        const alphabet = String.fromCharCode(i)
        alphabetArr.push(alphabet)
    }
    
    // remove alphabetArr while looping lowercasedInput
    for (let i = 0; i < lowercase.length; i++) {
        alphabetArr = alphabetArr.filter(c=> c !== lowercase[i])
    }

    return alphabetArr.length === 0 ? 'pangram' : 'not pangram'
}