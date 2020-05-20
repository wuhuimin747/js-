/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  // 1. 建立less和more空节点
  var less = new ListNode(), less_head = less;
  var more = new ListNode(), more_head = more;
  // 2. 遍历原链表 
  while(head) {
    if(head.val < x){
      less_head.next = head;
      less_head = less_head.next;
    }else{
      more_head.next = head;
      more_head = more_head.next;
    }
    head = head.next;
  }
  // 3. 连接两个链表
  less_head.next = more.next;
  more_head.next = null; // 把more链表的尾置空
  return less.next;
};
// @lc code=end

