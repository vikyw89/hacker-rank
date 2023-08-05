// https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/submissions/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
const minReorder = function (n, connections) {
    // generate nodes
    let nodes = {}
    for (let i = 0; i < n; i++) {
        nodes[i] = new Node(i)
    }

    // generate connections
    for (let i = 0; i < connections.length; i++) {
        const [name, out] = connections[i]
        nodes[name].out.push(nodes[out])
        nodes[out].into.push(nodes[name])
    }

    let totalReverseCount = 0
    let visited = new Map()

    // bfs from the root
    totalReverseCount += bfs(nodes[0], new Node(-1), visited)

    return totalReverseCount
};

function bfs(root, find, visited) {
    let queue = [root]
    let reverseCount = 0

    while (queue.length > 0) {
        const node = queue.shift()

        if (visited.has(node)) continue
        visited.set(node)

        if (node.name === find.name) {
            break
        }

        let next = []
        for (let i = 0; i < node.out.length; i++) {
            if (!visited.has(node.out[i])) {
                next.push(node.out[i])
                reverseCount++
            }
        }

        for (let i = 0; i < node.into.length; i++) {
            if (!visited.has(node.into[i])) {
                next.push(node.into[i])
            }
        }

        queue.push(...next)
    }

    return reverseCount
}

class Node {
    constructor(name, out, into) {
        this.name = name,
            this.out = out ?? [],
            this.into = into ?? []
    }
}


const result = minReorder(6, [[0, 1], [1, 3], [2, 3], [4, 0], [4, 5]])
console.log(result)
module.exports = minReorder