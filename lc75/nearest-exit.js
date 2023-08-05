// https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/submissions/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function (maze, entrance) {
    class Move {
        constructor({ row, col, steps }) {
            this.coordinate = { row: row, col: col },
                this.steps = steps ?? 0
        }
    }
    const startingPosition = new Move({ row: entrance[0], col: entrance[1] })
    let visited = {}
    let queue = [startingPosition]
    visited[`${startingPosition.coordinate.row},${startingPosition.coordinate.col}`] = 0

    while (queue.length > 0) {
        const floor = queue.shift()
        const { coordinate: { row, col }, steps } = floor

        // if it's a wall or undefined
        if (maze?.[row]?.[col] === '+' || !maze?.[row]?.[col]) continue

        // base case if we found exit
        if (steps !== 0 && (row === 0 || row === maze.length - 1 || col === 0 || col === maze[0].length - 1)) {
            return steps
        }

        // else, we generate next moves
        const nextMoveUp = new Move({ row: row - 1, col, steps: steps + 1 })
        const nextMoveRight = new Move({ row, col: col + 1, steps: steps + 1 })
        const nextMoveDown = new Move({ row: row + 1, col, steps: steps + 1 })
        const nextMoveLeft = new Move({ row, col: col - 1, steps: steps + 1 })

        // store the moves into queue
        const next = [nextMoveUp, nextMoveRight, nextMoveDown, nextMoveLeft]
        for (let item of next) {
            const key = `${item.coordinate.row},${item.coordinate.col}`
            if (key in visited) continue
            visited[key] = item.steps
            queue.push(item)
        }
    }

    return -1
};