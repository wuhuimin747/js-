/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var dp = [];
  // 边界
  dp[0] = nums[0];
  // 最值
  var max = nums[0]; 
  for(var i=1; i<nums.length; i++){
    dp[i] = Math.max(dp[i-1] + nums[i], nums[i]);
    if(dp[i] > max) max = dp[i];
  }
  return max;
};
// @lc code=end

