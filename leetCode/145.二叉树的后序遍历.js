/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function(root) {
  let res = [];
  generate(root, res);
  return res;
};
function generate(node, res){
  if(!node) return;
  generate(node.left, res);
  generate(node.right, res);
  res.push(node.val);
}
// @lc code=end

