// https://leetcode.com/problems/keys-and-rooms/solutions/3857443/beats-89-26-of-users-with-javascript/

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
    // create a queue for bfs traversing
    let queue = []

    // log all owned keys
    let ownedKeys = new Set([0])

    // start traversing from index 0
    queue.push(0)

    while (queue.length > 0) {
        const newKeys = rooms[queue.shift()]

        // add next destination to queue only if it has never been visited before
        const uniqueKeys = newKeys.filter(c => !ownedKeys.has(c))
        queue.push(...uniqueKeys)
        
        // log new keys
        while (uniqueKeys.length > 0) {
            ownedKeys.add(uniqueKeys.pop())
        }
    }

    // report
    if (ownedKeys.size === rooms.length) {
        return true
    } else {
        return false
    }
};