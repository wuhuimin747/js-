/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if(n < 3) return n;
  var dp_n_1 = 2;
  var dp_n_2 = 1;
  for(var i =3; i<=n; i++){
    dp_n = dp_n_1 + dp_n_2;
    dp_n_2 = dp_n_1;
    dp_n_1 = dp_n;
  }
  return dp_n;
};
// @lc code=end

