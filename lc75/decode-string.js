// https://leetcode.com/problems/decode-string/submissions/?submissionId=1009519350

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    const pattern = new RegExp(
        String.raw`(?<numbers>[0-9]+)` +
        String.raw`\[` +
        String.raw`(?<chars>[^0-9[\]]+)` +
        String.raw`\]`
    )
    const match = s.match(pattern)

    // base case
    if (match === null) {
        return s
    }

    // recursive case
    const numbers = match.groups.numbers
    const chars = match.groups.chars

    let replacementStrings = ""
    for (let i = 0; i < numbers; i++) {
        replacementStrings += chars
    }
    const replaced = s.replace(match[0], replacementStrings)

    const result = decodeString(replaced)
    return result
};

console.time('decode')
decodeString('asd32[d32[dwda32[dwda32[dwda32[dwda]]]]wda]')
console.timeEnd('decode')