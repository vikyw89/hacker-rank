// https://leetcode.com/problems/odd-even-linked-list/submissions/?envType=study-plan-v2&envId=leetcode-75

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
    if (!head) {
        return null
    }
    // create a queue of off pointer
    let isOddQueue = []
    let ptr = head.next
    let prevPtr = head
    //  to check if index is odd or even
    let isOdd = true

    while (ptr) {
        if (isOdd) {
            isOddQueue.push(ptr)
            prevPtr.next = ptr.next
            ptr = prevPtr
        }
        // after every turn
        prevPtr = ptr
        ptr = ptr.next
        isOdd = !isOdd
    }
    ptr = prevPtr
    // append isOddQueue
    while (isOddQueue.length > 0) {
        ptr.next = isOddQueue.shift()
        ptr = ptr.next
        ptr.next = null
    }
    return head
};