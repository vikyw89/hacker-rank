/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {

    const foundTriplet = (triplets, index, numsArr, memo={}) => {
        const key = JSON.stringify(triplets)
        if (key in memo) return memo[key]
        
        // base case
        if (triplets.length === 3) {
            return true
        }
        if (index === numsArr.length) {
            return false
        }
        const lastTripletsNumber = triplets[triplets.length - 1] ?? -Infinity
        // recursive case
        for (let i = index; i < numsArr.length; i++) {
            if (lastTripletsNumber < numsArr[i]) {
                const newTriplets = [...triplets, numsArr[i]]
                const findTriplet = foundTriplet(newTriplets, i+1, numsArr, memo)
                if (findTriplet) {
                    return true
                }
            }
        }
        memo[key] = false
        return false
    }
    return foundTriplet([],0,nums)
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    // loop over
    let left = Infinity
    let mid = Infinity
    
    for (let i = 0; i < nums.length; i++) {

        const current = nums[i]

        if (current <= left) {
            left = current
        } else if (current <= mid) {
            mid = current
        } else {
            return true
        }
    }
    return false
};