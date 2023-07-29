

/*
 * Complete the 'twoArrays' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY A
 *  3. INTEGER_ARRAY B
 */

function twoArrays(k, A, B) {
    // Write your code here
    // sort both Array
    // if (A.length !== B.length) {
    //     return 'NO'
    // }
    
    const sortedA = A.sort((a,b)=> a < b ? -1 : 1)
    const sortedB = B.sort((a,b)=> a > b ? -1 : 1)
    
    for(let i = 0; i < sortedB.length ; i++) {
        if (sortedA[i] + sortedB[i] < k) {
            return 'NO'
        }
    }
    return 'YES'
}