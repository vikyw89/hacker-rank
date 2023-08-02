// https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/solutions/3852136/beats-95-23-of-users-with-javascript/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    let arr = []
    let ptr = head
    while (ptr) {
        arr.push(ptr.val)
        ptr = ptr.next
    }

    let max = -Infinity
    for (let left = 0,right = arr.length-1; left < right; left++, right--){
        const twinSum = arr[left] + arr[right]
        if (twinSum > max) {
            max = twinSum
        }        
    }
    return max
};