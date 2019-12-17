// 给定两个没有重复元素的数组 nums1 和 nums2 ，其中nums1 是 nums2 的子集。找到 nums1 中每个元素在 nums2 中的下一个比其大的值。
// nums1 中数字 x 的下一个更大元素是指 x 在 nums2 中对应位置的右边的第一个比 x 大的元素。如果不存在，对应位置输出-1。

// 输入: nums1 = [4,1,2], nums2 = [1,3,4,2].
// 输出: [-1,3,-1]

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    //1.遍历数组1
    let res = [];
    nums1.forEach( item => {
        //2.找到每个元素在数组2的位置索引index
        let index = nums2.indexOf(item);
        //3.从数组2的index+1位置开始向后查找第一个比该元素大的值
        let flag = false; //找得到更大元素
        for(let i = index + 1 ; i < nums2.length ; i++){
            //4.如果找得到结束数组2的遍历，向结果力添加值
            if(nums2[i] > item){
                res.push(nums2[i]);
                flag = true;
                break;
            }
        }
        //5.找不到则添加-1
        if(!flag){
            res.push(-1);
        }
    } );
    return res;
};

var nums1 = [4,1,2], nums2 = [1,3,4,2];
console.info(nextGreaterElement(nums1, nums2));