// https://leetcode.com/problems/evaluate-division/solutions/3865956/beats-85-59-of-users-with-javascript/

class Graph {
    constructor(name, out) {
        this.name = name ?? ""
        this.out = out ?? []
    }
}

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
    let hash = {}
    // generate graph from equations
    for (let i = 0; i < equations.length; i++) {
        const [firstVar, secondVar] = equations[i]
        hash[firstVar] = new Graph(firstVar)
        hash[secondVar] = new Graph(secondVar)
    }
    // fill graph connections
    for (let i = 0; i < equations.length; i++) {
        const [firstVar, secondVar] = equations[i]
        const value = values[i]
        hash[firstVar].out.push({
            weight: +value,
            node: hash[secondVar]
        })
        hash[secondVar].out.push({
            weight: 1 / +value,
            node: hash[firstVar]
        })
    }
    // solve queries
    let output = []

    for (let i = 0; i < queries.length; i++) {
        const [queryA, queryB] = queries[i]
        // traverse to the connection to find the 2nd letter

        const value = dfs(hash[queryA] ?? new Graph(-1), hash[queryB] ?? new Graph(-2))
        output.push(value ?? -1)
    }
    return output
};

function dfs(root, toFind, visited = {}, weight = null) {
    // base case
    if (root.name in visited) {
        return null
    }

    visited[root.name] = true
    if (root.name === toFind.name) {
        return weight ?? 1
    }

    // recursive case
    const outArr = root.out
    let result = null

    for (let i = 0; i < outArr.length; i++) {
        const newRoot = outArr[i].node
        const newWeight = outArr[i].weight * (weight ?? 1)
        const returnedWeight =  dfs(newRoot, toFind, visited, newWeight)
        if (!result) {
            result = returnedWeight
        }
    }

    // bubbling up
    return result
}

console.log(calcEquation([["a", "b"], ["b", "c"]], [2.0, 3.0], [["a","c"]]))