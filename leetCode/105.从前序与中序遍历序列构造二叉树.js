/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  // 这道题目的关键在于发现一个规律：前序遍历=根节点 + 左子树先序 + 右子树先序
  // 中序遍历=左子树中序+ 根节点 + 右子树中序
  // 问题可以分解为:找到根节点，找到左子树根节点，找到右子树根节点
  // left right连接3个节点，并返回根节点
  if(preorder.length === 0 || inorder.length === 0) return null;
  
  let root = new TreeNode(preorder[0]);

  // 找到左子树的前序和中序数组，然后递归调用得到左子树根节点
  let rootIdx = inorder.indexOf(preorder[0]);
  let leftin = inorder.slice(0, rootIdx);
  let leftpre = preorder.slice(1, 1 + leftin.length);
  let left = buildTree(leftpre, leftin);

  // 右子树
  let rightin = inorder.slice(rootIdx+1);
  let rightpre = preorder.slice(1 + leftin.length);
  let right = buildTree(rightpre, rightin);

  root.left = left;
  root.right = right;
  return root;
};
// @lc code=end


function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

console.log(buildTree([3,9,20,15,7], [9,3,15,20,7]));