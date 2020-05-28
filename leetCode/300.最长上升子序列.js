/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长上升子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  if(nums.length === 0) return 0;
  // 初始化dp数组,顺便把边界值dp[0] = 1设置了
  var dp = [];
  for(var i=0; i<nums.length; i++){
    dp[i] = 1;
  }
  // 遍历nums计算dp[i]以nums[i]为结尾的上升子序列最大值
  var max = 1; //上升子序列最大值
  for(var i = 1; i<nums.length; i++){
    for(var j=0; j<i; j++){ //在dp[0] - dp[i-1]中寻找可以拼接的序列
      if(nums[i] > nums[j] && dp[j] + 1 > dp[i]){
        dp[i] = dp[j] + 1;
      }
    }
    if(dp[i] > max) max = dp[i];
  }
  return max;
};
// @lc code=end

