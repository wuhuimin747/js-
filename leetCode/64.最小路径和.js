/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  // 初始化第一行第一列
  var dp = [];
  var row = grid.length;
  var col = grid[0].length;
  // 确认边界值
  dp[0] = [];
  dp[0][0] = grid[0][0];
  // 初始化第一行
  for(var j=1; j<col; j++){
    dp[0][j] = dp[0][j-1] + grid[0][j];
  }
  // 初始化第一列，同时计算dp[i][j]的值
  for(var i=1; i<row; i++){
    dp[i] = [];
    dp[i][0] = dp[i-1][0] + grid[i][0];
    for(var j=1; j<col; j++){
      dp[i][j] = Math.min(dp[i][j-1], dp[i-1][j]) + grid[i][j];
    }
  }
  return dp[row-1][col-1];
};
// @lc code=end

