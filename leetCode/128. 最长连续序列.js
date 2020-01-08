// 给定一个未排序的整数数组，找出最长连续序列的长度。

// 要求算法的时间复杂度为 O(n)。

// 示例:

// 输入: [100, 4, 200, 1, 3, 2]
// 输出: 4
// 解释: 最长连续序列是 [1, 2, 3, 4]。它的长度为 4。

// 动态规划
// 先去重，得到一个Set，初始化最大count值max
// 遍历set,查找当前元素的相邻元素，记录当前连续count，比较和替换最大count数max
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    // 1.数组去重
    let set = new Set(nums);
    // 2.初始化最大count数
    let max = 0;
    // 3.遍历set，[3,5,7,4,8,2] 2345   78
    set.forEach(item => {
      // 找到set连续增长序列中的最小值
      if(!set.has(item - 1)){
        // 循环检查item + 1是否存在
        let item_plus = item + 1;
        let count = 1;
        while(set.has(item_plus)){
          item_plus++;
          count++;
        }
        if(count > max){
          max = count;
        }
      }
    })
    return max;
};

console.log(longestConsecutive([3,5,7,4,8,2]));