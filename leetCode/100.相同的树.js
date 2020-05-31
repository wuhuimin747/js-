/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  // 一颗树只要当前节点val相同，左子树相同，右子树也想同，那就相同
  if(!p && q || p && !q) return false;
  if(!p && !q) return true;
  let isLeftSame = isSameTree(p.left, q.left);
  let isRightSame = isSameTree(p.right, q.right);
  if(p.val === q.val && isLeftSame && isRightSame){
    return true;
  }
  return false;
};
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
