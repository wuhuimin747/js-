/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if(!root) return [];
  let q = [];
  let res = [];
  q.push({0: root});
  while(q.length > 0){
    let search = q[0];
    let node = Object.values(search)[0];
    let level = parseInt(Object.keys(search)[0]);
    q.shift();
    if(!res[level]){
      res[level] = [];
    }
    res[level].push(node.val);
    if(node.left){
      var obj = {}; obj[level+1] = node.left;
      q.push(obj);
    }
    if(node.right){
      var obj = {}; obj[level+1] = node.right;
      q.push(obj);
    }
  }
  // 数组翻转
  res[0].reverse();
  for(let i=1; i<res.length; i+=2){
    res[i].reverse();
  }
  return res;
};
// @lc code=end

// 思路：先简单的利用层次遍历把层次数组拿到
// 然后发现所谓的z型遍历无非就是0 1 3 5..位置的数组倒叙一下
// 可以设置一个步长step2 从下标1开始每隔2做一次倒叙
// + - + -
// 0 1 2 3



/* function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let a = new TreeNode(3);
let b = new TreeNode(9);
let c = new TreeNode(20);
let d = new TreeNode(15);
let e = new TreeNode(7);

a.left = b;
a.right = c;
c.left = d;
c.right = e;

console.log(zigzagLevelOrder(a)); */
