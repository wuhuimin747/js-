/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  var map = new Map(); // 设置好map
  // 1. 第一次遍历原链表，给map赋值，创建新节点
  var ptr = head; // 原链表的迭代指针
  var arr = []; // 存放新节点的数组
  var no = 0; // 编号
  while(ptr){
    map.set(ptr, no);
    arr.push(new Node(ptr.val));
    ptr = ptr.next;
    no++;
  }
  console.log(arr)
  // 2. 第二次遍历原链表，把数组中的节点next和random设置好
  ptr = head;
  var i = 0; // 数组编号儿
  arr.push(null); // 为了下面的i+1数组不越界
  while(ptr){
    arr[i].next = arr[i+1]; // 设置next
    arr[i].random = arr[map.get(ptr.random)]; // 设置random
    ptr = ptr.next;
    i++;
  }
  return arr[0];
};
// @lc code=end

