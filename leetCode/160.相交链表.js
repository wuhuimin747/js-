/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */



function getIntersectionNode(headA, headB) {
  // 求两个人的长度
  var len1 = getLen(headA);
  var len2 = getLen(headB);
  // 1. 如果A长就对齐A,如果B长就对齐B   12345   1345
  if(len1 > len2){
    headA = align(headA, len1 - len2);
  }else if(len1 < len2){
    headB = align(headB, len2 - len1);
  }
  // console.log(headA, headB);
  // 2. 同时遍历找相同
  while(headA && headB){
    if(headA == headB) {
      return headA;
    }
    headA = headA.next;
    headB = headB.next;
  } 
  return null;
}

function getLen(head){
  var len = 0;
  while(head){
    len++;
    head = head.next;
  }
  return len;
}

function align(head, len){
  while(head && len > 0){
    head = head.next;
    len--;
  }
  return head;
}

// @lc code=end

