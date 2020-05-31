/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  let res = []; // 结果容器
  generate(root, res);
  return res;
};

function generate(node, res){
  if(!node){
    return;
  }
  generate(node.left, res); // 递归左子树
  res.push(node.val) // 向容器中push当前节点val
  // 递归右子树
  generate(node.right, res);
}
// @lc code=end

function TreeNode(val) {
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

console.log(maxDepth(a));


