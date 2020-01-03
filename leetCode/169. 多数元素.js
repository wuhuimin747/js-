// 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

// 示例 1:

// 输入: [3,2,3] >1
// 输出: 3
// 示例 2:

// 输入: [2,2,1,1,1,2,2] >3
// 输出: 2

//投票算法的原理是通过不断消除不同元素直到没有不同元素，剩下的元素就是我们要找的元素。
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    //使用投票算法
    let majority = nums[0]; //初始化众数
    let count = 1; //初始化票数
    for(let i = 1; i<nums.length ; i++){
        if(count == 0){
            majority = nums[i]; //票仓归零，众数换人
        }
        if(nums[i] === majority){
            count++; //投票+1
        }else{
            count--; //投票-1
        }
    }
    return majority;
};

console.log(majorityElement([2,2,1,1,1,2,2]));



// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var majorityElement = function(nums) {
//     //2.开辟一个对象记录每种不同的数字出现的次数{ 1: 4 , 2 : 3 }
//     var obj = {};
//     nums.forEach(item => {
//         if(obj[item]){
//             obj[item]++;
//         }else{
//             obj[item] = 1;
//         }
//     })
//     //3.找到对象中value最大的键值对的key
//     var time = 0, num;
//     for(var en in obj){
//         if(obj[en] > time){
//             time = obj[en];
//             num = en;
//         }
//     }
//     return num;
// };

// console.log(majorityElement([2,2,1,1,1,2,2]));