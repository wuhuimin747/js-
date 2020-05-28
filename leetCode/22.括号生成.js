/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  var res = [];
  generate('', n, n, res);
  return res;
};
function generate(item, left, right, res) {
  if(left===0 && right===0){
    res.push(item);
    return;
  }
  if(left > 0){
    generate(item + '(', left-1, right, res)
  }
  if(right > left){
    generate(item + ')', left, right-1, res)
  }
}
// @lc code=end

