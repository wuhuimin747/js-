/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  var set = 1 << nums.length;
  var res = [];
  for(var i=0; i<set; i++){
    var item = [];
    for(var j=0; j<nums.length; j++){
      if(i & 1 << j){ // 判断数组中每个值要还是不要push
        item.push(nums[j]);
      }
    }
    res.push(item);
  }
  return res;
};



// @lc code=end

