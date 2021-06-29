//Merge two sorted linked lists and return it as a sorted list. 
//The list should be made by splicing together the nodes of the first two lists.
// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
 */

var mergeTwoLists = function(l1, l2) {
    if(l1 === null && l2 !== null) {return l2;}
    if(l1 !== null && l2 === null) {return l1;}
    if(l1 === null && l2 === null) {return false;}
    let head = new ListNode();
    let current = head
    while(l1 !== null && l2 !== null){
        if(l1.val < l2.val){
            current.next = l1;
            l1 = l1.next
        } else {
            current.next = l2
            l2 = l2.next
        }
        current = current.next 
        }
    while(l1){
        current.next = l1;
        l1 = l1.next;
        current = current.next
    }
    while(l2){
        current.next = l2;
        l2 = l2.next;
        current = current.next
    }
    return head.next;
};