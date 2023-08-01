function findMedian(arr) {
    // Write your code here
    const sortedArr = arr.sort((a,b)=>a-b)
    const mid = Math.floor(sortedArr.length / 2)
    return sortedArr[mid]
}