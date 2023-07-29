// https://www.hackerrank.com/challenges/one-month-preparation-kit-caesar-cipher-1/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-month-week-two

/*
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s, k) {
    // Write your code here
    // loop over s
    let output = ""
    const pattern = new RegExp(String.raw`[^a-zA-Z]`)
    
    for (let i = 0; i < s.length; i++) {
        if (pattern.test(s[i])) {
            output += s[i]
        } else {
            switch (true) {
                case s[i].toUpperCase() === s[i] :{
                    // TODO: uppercase rotate
                    const charCode = s[i].charCodeAt(0)
                    const rotatedCharCode = (charCode - 'A'.charCodeAt(0) + k) % 26 + 'A'.charCodeAt(0)
                    const encryptedChar = String.fromCharCode(rotatedCharCode)
                    output += encryptedChar
                    break
                }
                case s[i].toLowerCase() === s[i] :{
                    // TODO: lowercase rotate
                    const charCode = s[i].charCodeAt(0)
                    const rotatedCharCode = (charCode - 'a'.charCodeAt(0) + k) % 26 + 'a'.charCodeAt(0)
                    const encryptedChar = String.fromCharCode(rotatedCharCode)
                    output += encryptedChar
                    break
                }
            }
        }
    }
    return output
}