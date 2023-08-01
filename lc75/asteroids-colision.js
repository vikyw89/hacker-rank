// https://leetcode.com/problems/asteroid-collision/submissions/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (ast) {
    let leftArr = []

    for (let i = 0; i < ast.length; i++) {
        const right = ast[i]
        // if leftArr empty, fill it
        if (leftArr.length === 0) {
            leftArr.push(right)
            continue
        }

        // compare left to right
        let left = leftArr[leftArr.length - 1]
        if (left > 0) {
            if (right > 0) {
                leftArr.push(right)
                continue
            }
            while (right < 0) {
                // keep comparing and delete left until nothing to compare, then push right
                // if left is positive
                if (left > 0) {
                    // delete right
                    if (Math.abs(left) > Math.abs(right)) {
                        break
                    }
                    else if (Math.abs(left) < Math.abs(right)) {
                        leftArr.pop()
                        left = leftArr[leftArr.length - 1]
                        continue
                    } else {
                        leftArr.pop()
                        break
                    }
                } else {
                    leftArr.push(right)
                    break
                }
            }
        }
        else if (left < 0) {
            // push any right, since they are moving to different direction
            leftArr.push(right)
        }
    }
    return leftArr
};