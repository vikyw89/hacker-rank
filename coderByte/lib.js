import _ from "lodash"

/**
 * Sorts the given data.
 *
 * @param {Array|Object} data - The data to be sorted.
 * @return {Array|Object} - The sorted data.
 * @throws {Error} - If the data type is invalid.
 */
const sort = (data) => {
    if (_.isArray(data)) {
        return data.sort((a, b) => {
            if (typeof a === "string" && typeof b === "string") {
                return a.toLowerCase() < b.toLowerCase() ? -1 : 1
            } else {
                return a < b ? -1 : 1
            }
        })
    }
    else if (_.isObject(data)) {
        return Object.fromEntries(Object.entries(data).sort((a, b) => {
            return a[0].toLowerCase() < b[0].toLowerCase() ? -1 : 1
        }))
    }
    else {
        throw new Error("Invalid data type")
    }
}


/**
 * Removes duplicate values from an array or returns the original object if it is not an array.
 *
 * @param {Array|Object} data - The input data to remove duplicates from.
 * @throws {Error} Invalid data type
 * @return {Array|Object} The input data without duplicate values.
 */
const removeDuplicate = (data) => {
    if (_.isArray(data)) {
        return [...new Set(data)]
    }
    // object can't have duplicate key
    else if (_.isObject(data)) {
        return data
    }
    else {
        throw new Error("Invalid data type")
    }
}


/**
 * Removes empty elements from an array or object.
 *
 * @param {Array|Object} data - The array or object to remove empty elements from.
 * @return {Array|Object} - The data with empty elements removed.
 * @throws {Error} - If the data type is invalid.
 */
const removeEmpty = (data) => {
    if (_.isArray(data)) {
        return data.filter(item => _.isEmpty(item) === false)
    }
    else if (_.isObject(data)) {
        return Object.fromEntries(Object.entries(data).filter(item => _.isEmpty(item[1]) === false))
    }
    else {
        throw new Error("Invalid data type")
    }
}

/**
 * Removes the "age" property from the given data object if it exists.
 *
 * @param {Object} data - The object from which to remove the "age" property.
 * @return {Object} - The updated data object with the "age" property removed if it existed.
 */
const removeAge = (data) => {
    if (_.isObject(data)) {
        if ("age" in data) {
            delete data.age
        }
    }
    return data
}

/**
 * Recursively traverses a data structure and applies a series of functions to each element.
 *
 * @param {any} data - The data structure to traverse.
 * @param {function[]} FnArr - An array of functions to apply to each element.
 * @return {any} - The modified data structure after applying the functions.
 */
const traverseDeep = (data, FnArr) => {
    // base case
    // return if it's not itterable
    if (_.isArray(data) === false && _.isObject(data) === false) {
        return data
    }

    // recursive case
    let output = data
    for (let fn of FnArr) {
        // console.log("🚀 ~ file: sortAndManipulate.js:40 ~ traverseDeep ~ fn:", fn)
        // console.log("🚀 ~ file: sortAndManipulate.js:39 ~ traverseDeep ~ output:", output)
        output = fn(output)
        // console.log("🚀 ~ file: sortAndManipulate.js:42 ~ traverseDeep ~ output:", output)
    }
    for (let key in output) {
        output[key] = traverseDeep(data[key], FnArr)
    }

    // bubbling up
    return output
}



/**
 * Generates a refined version of the provided data by performing the following operations:
 * 1. Sorts the data in a case-insensitive manner.
 * 2. Removes any duplicate elements from the array. In the case of objects, duplicates are considered to have the same keys and values in the same order.
 * 3. Removes any "age" keys from the objects.
 * 4. Removes any object properties with values set to empty string, undefined, or null.
 *
 * @param {any} data - The data to be sorted and manipulated.
 * @return {any} The refined data after performing the specified operations.
 */
export const sortAndManipulate = (data) => {
    // following the instruction
    // 1. sort (case insensitive)
    // 2. remove duplicate (remove duplicates from array, object considered duplicates if they have same keys and values in the same order)
    // 3. remove age (remove all age keys)
    // 4. remove empty (remove all object properties with values set to empty string, undefined, or null)
    const refinedData = traverseDeep(data, [sort, removeDuplicate, removeAge, removeEmpty])
    return refinedData
}