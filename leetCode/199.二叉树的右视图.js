/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
var rightSideView = function(root) {
  if(!root) return [];
  let q = []; // 层次遍历的队列
  let res = []; // 结果数组
  q.push({0: root}); // 根节点入队
  while(q.length > 0){
    let search = q[0]; // 取出带搜索的队首
    let node = Object.entries(search)[0][1]; // 队首节点
    let level = parseInt(Object.entries(search)[0][0]); // 队首层数
    // console.log(node, level);
    q.shift(); // 队首出队
    // 初始化或者更新这一层的最右节点val
    res[level] = node.val;
    // 左右孩子入队
    let obj_l = {}; obj_l[level + 1] = node.left;
    node.left && q.push(obj_l);
    let obj_r = {}; obj_r[level + 1] = node.right;
    node.right && q.push(obj_r);
  }
  return res;
};
// @lc code=end

