/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let path = []; // 用来搜索的栈
  let res_1 = [], res_2 = []; // 用来最终保存两人路径的数组
  let res = null; // 返回值
  let finish = {flag: false};// 默认没找到目标
  // 分别获得p q的路径
  generate(root, p, path, res_1, finish);
  path = []; // 栈请清空, finish重置
  finish.flag = false;
  generate(root, q, path, res_2, finish);
  // 遍历两个数组
  let len = Math.min(res_1.length, res_2.length);
  // console.log(res_1, res_2);
  for(let i=0; i<len; i++){
    if(res_1[i] === res_2[i]){
      res = res_1[i]; // 最后一次更新res就是最近公共祖先
    }
  }
  return res;
};

function generate(node, target, path, arr, finish){
  // 返回条件
  if(!node || finish.flag){
    return;
  }
  // 先进站
  path.push(node); 
  // 判断是不是目标节点,如果是的话路径就找对了
  if(node === target){
    arr.push(...path);  // 这里千万注意不要改引用，而是要在一片土地上持续耕耘
    finish.flag = true;
  }
  generate(node.left, target, path, arr, finish)
  generate(node.right, target, path, arr, finish)
  path.pop();
}
// @lc code=end

