/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  let arr = []; // 放置前序遍历的节点
  generate(root, arr);
  // 遍历数组容器，将每个节点的left置空，right连接下一个节点
  for(let i=1; i<arr.length; i++){
    // 不想特殊处理数组越界就从i=1开始遍历
    arr[i-1].left = null;
    arr[i-1].right = arr[i];
  }
};

function generate(node, arr){
  if(!node) return;
  arr.push(node);
  generate(node.left, arr);
  generate(node.right, arr);
}
// @lc code=end

