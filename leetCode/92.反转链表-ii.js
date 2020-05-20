/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  // 1.保存返回链表表头,计算逆序长度
  var res = head;
  var len = n - m + 1;
  // 2. 找到逆序头，保存前驱
  var pre_head = null;
  while(head && m-1 > 0){
    pre_head = head;
    head = head.next;
    m--;
  }
  // 3.保存序列头，同样会是逆序之后的尾
  var tail = head;
  // 4. 开始逆序
  var newHead = null;
  while(head && len > 0){
    var tmp = head.next;
    head.next = newHead;
    newHead = head;
    head = tmp;
    len--;
  }
  // 5. 合并逆序后的链表和前驱后继
  if(pre_head) {
    pre_head.next = newHead;
  }else{
    res = newHead;
  }
  tail.next = head;
  return res;
};
// @lc code=end

