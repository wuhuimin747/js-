// 给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。

// 说明:

// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
// 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
// 示例:

// 输入:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// 输出: [1,2,2,3,5,6]

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// 思路是把nums2中的数据填充到nums1正确的位置，改变的是nums1原数组，当nums2没有可以填充的数据了处理就停止了
// 核心思路是利用merge sort的方式合并数组，对比两个数组尾部的数据，得到较大的一方填补到nums1的尾部
// 要注意的就是遍历指针的设定和遍历的终止条件
var merge = function(nums1, m, nums2, n) {
  // 1. 定义好nums1 2的遍历指针和填充nums1的位置指针
  let p1 = m - 1, p2 = n - 1, pcur = m + n -1;
  // 2. 开始循环,使用while的原因是：如果nums2的数据比较小，下一次遍历还得取相同的数，所以遍历次数不确定
  while(pcur >= 0){
    if(p1 === -1){
      nums1[pcur--] = nums2[p2--];
      continue;
    }
    if(p2 === -1){
      nums1[pcur--] = nums1[p1--];
      continue;
    }
    // 3. 如果数组2的当前数据比nums1的大或者相等，就把nums2的当前数据填充到pcur的位置,pcur--
    if(nums2[p2] >= nums1[p1]){
      nums1[pcur--] = nums2[p2--];
    }
    // 4. 如果nums2当前数据比nums1的小，就把nums1的当前数据填充到nums1的pcur位置,pcur--
    else{
      nums1[pcur--] = nums1[p1--];
    }
  }
  return nums1;
};

console.log(merge([0], 0, [1], 1));