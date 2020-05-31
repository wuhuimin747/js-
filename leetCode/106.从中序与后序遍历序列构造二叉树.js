/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  // 这道题目的关键在于发现一个规律：后序遍历=左子树先序 + 右子树先序+ 根节点
  // 中序遍历=左子树中序+ 根节点 + 右子树中序
  // 问题可以分解为:找到根节点，找到左子树根节点，找到右子树根节点
  // left right连接3个节点，并返回根节点
  if(postorder.length === 0 || inorder.length === 0) return null;
  
  let root = new TreeNode(postorder[postorder.length-1]);

  // 找到左子树的前序和中序数组，然后递归调用得到左子树根节点
  let rootIdx = inorder.indexOf(root.val);
  let leftin = inorder.slice(0, rootIdx);
  let leftpost = postorder.slice(0, leftin.length);
  let left = buildTree(leftin, leftpost);

  // 右子树
  let rightin = inorder.slice(rootIdx+1);
  let rightpost = postorder.slice(leftin.length, -1);
  let right = buildTree(rightin, rightpost);

  root.left = left;
  root.right = right;
  return root;
};
// @lc code=end

