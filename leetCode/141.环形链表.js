/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */
var hasCycle = function(head) {
     // 1. 创建set
  var set = new Set();
  // 2. 遍历链表
  while(head){
    if(set.has(head)) {
      return true;
    }else {
      set.add(head);
    }
    head = head.next;
  }
  return false; 
};
// @lc code=end

