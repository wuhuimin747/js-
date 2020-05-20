/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  // 1. 打散链表，装进数组里
  var arr = [];
  lists.forEach(list => {
    while(list){
      arr.push(list);
      list = list.next;
    }
  })
  // 2. 数组排序
  arr.sort((a, b) => a.val - b.val);
  // 3. 节点next相连
  arr.forEach((node, index) => {
    if(index < arr.length - 1){
      node.next = arr[index + 1];
    }else{
      node.next = null;
    }
  })
  return arr[0] === undefined ? null : arr[0];
};
// @lc code=end

