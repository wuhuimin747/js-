/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  let res = [];
  let path = [];
  generate(res, path, root, sum);
  return res;
};

function generate(res, path, node, sum){
  // 递归结束条件:节点是空节点null,他的父节点其实是叶子结点
  if(!node){
    return;
  }
  // 先把当前节点入栈，路径值加
  path.push(node.val);
  let path_val = path.reduce((tmp, it) => tmp+=it);
  // 判断当前路径情况: 路径和符合，并且是叶子结点
  if(path_val === sum && !node.left && !node.right){
    res.push([...path]);// 拷贝一下数组再push不然就大家都一样了
  }
  // 处理左子树和右子树
  generate(res, path, node.left, sum);
  generate(res, path, node.right, sum);
  // 从栈中弹出当前节点
  path.pop();
}

// @lc code=end

