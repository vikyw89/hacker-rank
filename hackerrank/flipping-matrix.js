// https://www.hackerrank.com/test/flgjjnhfm7i/questions/di1dm3kpigj

/*
 * Complete the 'flippingMatrix' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY matrix as parameter.
 */

function flippingMatrix(matrix) {
    // Write your code here
    // store max here
    let max = []
    
    for (let rowTop = 0, rowBot = matrix.length-1; rowTop < rowBot; rowTop++, rowBot--) {
        for (let colLeft = 0, colRight= matrix.length-1; colLeft < colRight; colLeft++, colRight--) {
            // get the highest out of 4
            let temp = []
            temp.push(matrix[rowTop][colLeft])
            temp.push(matrix[rowTop][colRight])
            temp.push(matrix[rowBot][colLeft])
            temp.push(matrix[rowBot][colRight])
            temp.sort((a,b)=>b-a)
            max.push(temp[0])
        }
    }
    
    //sum
    const highest = max.reduce((p,c)=>p+c,0)
    return highest
}