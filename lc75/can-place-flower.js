// https://leetcode.com/problems/can-place-flowers/submissions/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    // slide through as a window and plant the flowers
    let flowerSeedCount = n

    for (let lSpace = -1, flowerI = 0, rSpace = 1; flowerI < flowerbed.length; lSpace++, flowerI++, rSpace++) {
        if ((flowerbed[lSpace] === 0 || !flowerbed[lSpace]) && flowerbed[flowerI] === 0 && (!flowerbed[rSpace] || flowerbed[rSpace] === 0)) {
            // plant the flower
            flowerbed[flowerI] = 1
            //  reduce the seedCount
            flowerSeedCount--
        }
        // early exit
        if (flowerSeedCount <= 0) {
            return true
        }
    }

    return false
};