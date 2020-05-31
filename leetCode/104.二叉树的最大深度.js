/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function(root) {
  // 用深度遍历来做，一棵树的最大深度=max(左子树深度， 右子树深度) + 1
  if(!root) return 0;
  if(!root.left && !root.right) return 1;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};


// @lc code=end

/* var maxDepth = function(root) {
  // 使用层次遍历来做
  if(!root) return 0;
  let q = []; // 队列
  q.push({1: root}); // 根节点入队，第一层
  let max = 0;
  while(q.length > 0){
    let search = q[0]; // 取出队首
    q.shift();// 出队
    let depth = parseInt(Object.keys(search)[0]);
    let node = Object.values(search)[0];
    max = depth > max ? depth : max; // 更新max深度
    console.log(node.val , depth);
    // 左右孩子入队
    if(node.left){
      var obj = {};
      obj[depth+1] = node.left;
      q.push(obj);
    }
    if(node.right){
      var obj = {};
      obj[depth+1] = node.right;
      q.push(obj);
    }
  }
  return max;
};
 */

/* function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let a = new TreeNode(1);
let b = new TreeNode(2);
let c = new TreeNode(3);
let d = new TreeNode(4);
let e = new TreeNode(5);

a.left = b;
a.right = c;
b.left = d;
b.right = e;

console.log(maxDepth(a)); */

/* 1
 2   3
4  5 */