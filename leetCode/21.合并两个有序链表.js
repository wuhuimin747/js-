/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  // 1. 建立空节点
  var newHead = new ListNode(), ptr = newHead;
  // 2. 判断两个链表的头结点数据大小
  while(l1 && l2){
    if(l1.val < l2.val){
      ptr.next = l1;
      l1 = l1.next;
    }else {
      ptr.next = l2;
      l2 = l2.next;
    }
    ptr = ptr.next;
  }
  // 3. 判断其中一条链表还有剩余的情况
  if(l1){
    ptr.next = l1;
  }else if(l2){
    ptr.next = l2;
  }

  return newHead.next;
};
// @lc code=end

