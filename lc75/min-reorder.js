/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
    // initial setup
    // generate cities if there's none yet
    class City {
        constructor(name, connections) {
            this.name = name,
                this.connections = connections ?? []
        }
    }

    // generate empty city
    let cities = new Array(n)

    for (let i = 0; i < n; i++) {
        cities[i] = new City(i)
    }

    // generate connections of each city
    for (let i = 0; i < connections.length; i++) {
        const [city, connectedTo] = connections[i]
        cities[city].connections.push(cities[connectedTo])
    }

    // BFS
    let edgeReverseCount = 0
    let visited = {}
    let next = []
    next.push(cities[0])

    while (next.length > 0) {
        const city = next.shift()

        if (city.name in visited) continue
        visited[city.name] = true

        // add next destination
        const fromCity = city.connections
        let toCity = []
        for (let i = 0; i < cities.length; i++) {
            let temp = cities[i].connections.some(c => c.name in visited)
            if (temp) {
                toCity.push(cities[i])
            }
        }
        edgeReverseCount += fromCity.filter(c => !(c.name in visited)).length
        next.push(...fromCity, ...toCity)
    }

    return edgeReverseCount
};

const result = minReorder(6, [[0, 1], [1, 3], [2, 3], [4, 0], [4, 5]])
console.log(result)
module.exports = minReorder