// 给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。
// 在 S 上反复执行重复项删除操作，直到无法继续删除。
// 在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。
// 输入："abbaca"
// 输出："ca"
// 1 <= S.length <= 20000

/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    //0.如果就一个元素，直接返回该字符
    if(S.length == 0) return ;
    //1.把字符放进数组
    let arr = S.split('');
    //2.定义两个索引pre cur表示前一个元素和当前元素的索引
    let [pre , cur] = [0, 1];
    //3.循环遍历数组，使用while循环，因为数组长度在变
    while(cur < arr.length){
        //4.如果pre元素不等于cur元素，pre=cur cur++
        if(arr[cur] != arr[pre]){
            pre = cur;
            cur += 1;
        }else{
            //5.如果相等，删除两个相邻元素，cur=pre pre=pre-1
            arr.splice(pre, 2);
            cur = pre;
            pre -= 1;
        }
    }
    //6.数组重新拼成字符串
    return arr.join('');
};

console.info(removeDuplicates('abbaca'));