/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function(root) {
  let res = []; // 结果容器
  generate(root, res);
  return res;
};

function generate(node, res){
  if(!node){
    return;
  }
  res.push(node.val) // 向容器中push当前节点val
  generate(node.left, res); // 递归左子树
  // 递归右子树
  generate(node.right, res);
}
// @lc code=end

