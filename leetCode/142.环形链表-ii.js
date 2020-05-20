/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
var detectCycle = function(head) {
  // 1. 创建set
  var set = new Set();
  // 2. 遍历链表
  while(head){
    if(set.has(head)) {
      return head;
    }else {
      set.add(head);
    }
    head = head.next;
  }
  return null;
};
// @lc code=end

