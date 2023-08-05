/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
    class Graph {
        constructor(connections) {
            this.connections = connections ?? []
        }
    }

    let hash = {}
    // generate graph from equations
    for (let i = 0; i < equations.length; i++) {
        const [firstVar, secondVar] = equations[i]
        const value = values[i]

        if (!(firstVar in hash)) {
            hash[firstVar] = new Graph()
        }
        if (!(secondVar in hash)) {
            hash[secondVar] = new Graph()
        }
        hash[firstVar].connections.push({
            weight: +value,
            node: hash[secondVar]
        })
        hash[secondVar].connections.push({
            weight: 1 / +value,
            node: hash[firstVar]
        })
    }

    console.log("🚀 ~ file: calc-equation.js:15 ~ calcEquation ~ hash:", hash)
    // solve queries
    let output = []

    // for (let i = 0; i < queries.length; i++) {
    //     const query = queries[i]

    // }
};

console.log(calcEquation([["a", "b"], ["b", "c"]], [2.0, 3.0], [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]]))