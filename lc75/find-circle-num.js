// https://leetcode.com/problems/number-of-provinces/solutions/3860859/beats-98-51-of-users-with-javascript/

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
    class City {
        constructor(name, connections) {
            this.name = name,
                this.connections = connections ?? []
        }
    }

    let cities = []
    // fill array with city
    for (let i = 0; i < isConnected.length; i++) {
        cities.push(new City(i))
    }

    // generate graph from matrix
    for (let slow = 0; slow < isConnected.length; slow++) {
        for (let fast = 0; fast < isConnected.length; fast++) {
            if (slow === fast) continue

            if (isConnected[slow][fast] === 1) {
                cities[slow].connections.push(cities[fast])
            }
        }
    }

    // to log visited places
    let visited = {}
    // traverse the generated graph using bfs
    let queue = [...cities]
    let provinceCount = 0
    while (queue.length > 0) {
        const city = queue.shift()

        if (visited[city.name] === true) {
            continue
        }

        provinceCount++
        visited[city.name] = true
        // visit all city within the connections recursively
        let connectionsQueue = [...city.connections]

        while (connectionsQueue.length > 0) {
            const connectedCity = connectionsQueue.shift()

            if (visited[connectedCity.name] === true) {
                continue
            }

            visited[connectedCity.name] = true
            connectionsQueue.push(...connectedCity.connections)
        }
    }

    return provinceCount
}