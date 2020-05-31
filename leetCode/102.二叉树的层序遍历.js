/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function(root) {
  if(!root) return [];
  let q = []; // 队列
  let res = []; // 结果容器
  q.push({0: root}) // 根元素入队
  while(q.length > 0){
    let search = q[0]; // 取出待搜索节点
    q.shift(); // 队首节点出队
    let node = Object.entries(search)[0][1];// 得到节点和层数
    let level = parseInt(Object.entries(search)[0][0]);// 得到节点和层数
    // 向目标容器中添加节点val
    if(!res[level]){
      res[level] = []; // 初始化这一层的容器
    }
    res[level].push(node.val);
    // 搜索节点的左右孩子，入队
    let obj_l = {}; obj_l[level+1] = node.left;
    let obj_r = {}; obj_r[level+1] = node.right;
    node.left && q.push(obj_l);
    node.right && q.push(obj_r);
  }
  return res;
};
// @lc code=end

