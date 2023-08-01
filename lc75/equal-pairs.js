// https://leetcode.com/problems/equal-row-and-column-pairs/submissions/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
    // store row arrays as hash key
    // store col arrays as hash key
    // compare

    let rowHash = {}
    let colHash = {}

    for (let slow = 0; slow < grid.length; slow++) {
        const stringifiedRowsArr = JSON.stringify(grid[slow])
        if (!(stringifiedRowsArr in rowHash)) {
            rowHash[stringifiedRowsArr] = 0
        }
        rowHash[stringifiedRowsArr]++
        let colArr = []
        for (let fast = 0; fast < grid.length; fast++) {
            colArr.push(grid[fast][slow])
        }
        const stringifiedColsArr = JSON.stringify(colArr)
        if (!(stringifiedColsArr in colHash)) {
            colHash[stringifiedColsArr] = 0
        }
        colHash[stringifiedColsArr]++
    }

    // sum all
    let count = 0

    for (let item in rowHash) {
        if (item in colHash) {
            const rowItemCount = rowHash[item]
            const colItemCount = colHash[item]

            // find pairs
            const pairs =  rowItemCount * colItemCount
            count += pairs
        }
    }

    return count
};