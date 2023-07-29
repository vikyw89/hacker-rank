// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/770/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const mid = matrix.length / 2
    for (let slow=0; slow < mid; slow++){
        for (let fast=slow; fast < matrix.length-1-slow; fast++){
            let hash = {}
            // top left to top right -
            hash['top'] = matrix[slow][fast]
            // top right to right bot -
            hash['right'] = matrix[fast][matrix.length-1-slow]
            // bot right to bot left 
            hash['bot'] = matrix[matrix.length-1-slow][matrix.length-1-fast]
            // bot left to top left
            hash['left'] = matrix[matrix.length-1-fast][slow]
            // rotate
            // top left to top right
            matrix[slow][fast] = hash['left']
            // top right to right bot
            matrix[fast][matrix.length-1-slow] = hash['top']
            // bot right to bot left
            matrix[matrix.length-1-slow][matrix.length-1-fast] = hash['right']
            // bot left to left top
            matrix[matrix.length-1-fast][slow] = hash['bot']
        }
    }
};