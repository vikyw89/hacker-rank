/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let outputArr = []
    let count = 1
    for (let i = 0; i < chars.length; i++) {
        const char = chars[i]
        const nextChar = chars[i + 1]
        // if next char is the same, add count
        if (char === nextChar) {
            count++
        } else {
            // store the char and count
            outputArr.push(char)
            if (count !== 1) {
                outputArr.push(...`${count}`)
            } 
            // reset count
            count = 1
        }
    }
    chars.splice(0,2000, ...outputArr)
    return chars.length
};