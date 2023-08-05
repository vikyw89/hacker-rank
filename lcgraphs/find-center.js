// https://leetcode.com/problems/find-center-of-star-graph/solutions/3862610/beats-98-11-of-users-with-javascript/

/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    // store number of the first array
    // eliminate one number
    // return center
    let probableCenter = [...edges[0]]

    for (let i = 0; i < edges.length; i++){
        // base case
        if (probableCenter.length === 1) {
            break
        }

        // loop case
        probableCenter = probableCenter.filter(c=> c === edges[i][0] || c === edges[i][1])
    }
    return probableCenter[0]
};