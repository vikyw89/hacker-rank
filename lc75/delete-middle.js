// https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/?envType=study-plan-v2&envId=leetcode-75

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
var deleteMiddle = function (head) {
    let slowPtr = head
    let fastPtr = head
    if (!slowPtr.next){
        return null
    }

    while (fastPtr?.next) {
        fastPtr = fastPtr.next.next
        if (!fastPtr?.next) {
            slowPtr.next = slowPtr.next.next
            break
        }
        slowPtr = slowPtr.next
    }
    return head
};