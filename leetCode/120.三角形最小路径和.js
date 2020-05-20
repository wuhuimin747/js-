/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  // 初始化dp
  var row = triangle.length; // 行数
  var col = triangle[row-1].length; // 最后一行的列数
  var dp = [];
  for(var i = 0; i<row; i++){
    dp.push([]);
    for(var j=0; j<triangle[i].length; j++){
      dp[i].push(0);
    }
  }
  // 初始化最后一行的状态
  for(var i = 0; i<col; i++){
    dp[row-1][i] = triangle[row-1][i];
  }
  // 从倒数第二行开始计算状态
  for(var i = row-2 ; i>=0 ; i--){
    for(var j=0; j<dp[i].length ;j++){
      dp[i][j] = Math.min(dp[i+1][j], dp[i+1][j+1]) + triangle[i][j];
    }
  }
  return dp[0][0];
};
// @lc code=end

