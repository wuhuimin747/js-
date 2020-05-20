/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  // 初始化dp
  var dp = [];
  for(var i=1; i<=amount; i++){
    dp[i] = -1;
  }
  // 设置边界
  dp[0] = 0;
  // 循环金额，计算金额为i的时候最小张数
  for(var i = 0; i<= amount; i++){
    for(var j=0; j<coins.length; j++){ // 循环coins[j]找金额14的最小张数
      if(i - coins[j] >= 0 && dp[i - coins[j]] !== -1){
        var newPlan = dp[i - coins[j]] +  1;
        if(dp[i] == -1 || newPlan < dp[i]){ // 第一次计算dp[i]的时候或者新的coins方案更小的时候更新dp[i]
          dp[i] = newPlan;
        }
      }
    }
  }
  return dp[amount];
};
// @lc code=end

