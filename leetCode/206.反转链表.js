/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // 新链表头
    var newHead = null;
    while(head){
      // 1. 备份当前节点的next
      var tmp = head.next;
      // 2. 修改当前节点的next指向新链表的头部
      head.next = newHead;
      // 3. head和newHead后移
      newHead = head;
      head = tmp;
    }
    return newHead;
};
// @lc code=end

