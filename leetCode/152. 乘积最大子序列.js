// 给定一个整数数组 nums ，找出一个序列中乘积最大的连续子序列（该序列至少包含一个数）。

// 示例 1:

// 输入: [2,3,-2,4]
// 输出: 6
// 解释: 子数组 [2,3] 有最大乘积 6。
// 示例 2:

// 输入: [-2,0,-1]
// 输出: 0
// 解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    // 1.定义一个最大子序列的乘积multi,当前连续乘积multi,和负数元素的个数是否为奇数个，是奇数个为true，偶数个为false
    var max = nums[0];
    var multi = 1;
    var flag = false;
    for(var i = 0; i<nums.length; i++){
      if(nums[i] < 0){
        if(flag) {
          multi *= nums[i];
          max = Math.max(max, multi);
          flag = false;
        }else{
          flag = true;
          multi = 1;
          continue;
        }
      }else if(nums[i] > 0){
        multi *= nums[i];
        max = Math.max(max, multi);
      }else{
        multi *= nums[i];
        max = Math.max(max, multi);
        continue;
      }
    }
    return max;
};

console.log(maxProduct([-2,0,-1]));