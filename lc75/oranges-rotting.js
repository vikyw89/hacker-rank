class RottenOrange {
    constructor({ row, col, minutes }) {
        this.coordinate = { row, col },
            this.minutes = minutes ?? 0
    }
}

function nextCoordinate({ row, col }) {
    return [
        {
            'row': row - 1,
            'col': col
        },
        {
            'row': row,
            'col': col + 1
        },
        {
            'row': row + 1,
            'col': col
        },
        {
            'row': row,
            'col': col - 1
        }
    ]
}


/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let totalOrangeCount = 0
    let rottenOrangeCount = 0
    let initialCoordinate = []

    // do a tally of oranges
    for (let slow = 0; slow < grid.length; slow++) {
        for (let fast = 0; fast < grid[0].length; fast++) {
            if (grid[slow][fast] === 1) {
                totalOrangeCount++
            }
            else if (grid[slow][fast] === 2) {
                totalOrangeCount++
                rottenOrangeCount++
                initialCoordinate.push(new RottenOrange({ row: slow, col: fast, minutes: 0 }))
            }
        }
    }

    if (totalOrangeCount === 0) return 0
    if (rottenOrangeCount === 0) return -1
    let queue = [...initialCoordinate]
    let visited = {}
    visited[`${queue[0].coordinate.row},${queue[0].coordinate.col}`] = 0

    while (queue.length > 0) {
        const rotten = queue.shift()
        const { row, col } = rotten.coordinate
        // check if it's within the borderRadius: 
        if (!grid?.[row]?.[col]) continue

        // check if there's no orange
        if (grid[row][col] === 0) continue

        // check if it's a fresh orange
        if (grid[row][col] === 1) {
            // increase rotten orange count
            rottenOrangeCount++

        }
        // check if all oranges are rotten
        if (totalOrangeCount === rottenOrangeCount) {
            // if all rotten, return the minutes
            return rotten.minutes
        }

        // get next queue, increase the minute
        const nextMovesArr = nextCoordinate({ row: row, col: col })

        // check if next moves already in visited
        for (let move of nextMovesArr) {
            const key = `${move.row},${move.col}`
            if (key in visited) continue
            visited[key] = rotten.minutes + 1
            queue.push(new RottenOrange({ row: move.row, col: move.col, minutes: rotten.minutes + 1 }))
        }
    }

    // if no more queue left
    return -1
};