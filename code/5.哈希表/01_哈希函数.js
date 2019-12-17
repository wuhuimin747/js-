//哈希函数的实现

/**
 * 
 * @param {*string} str  表示需要被存储的字符串数据
 * @param {*number} size 表示哈希表数组的大小
 */
let hashFunc = (str , size) => {
    //1.霍纳法则，将字符串转化成大数字hashCode
    let hashCode = 0;
    //1.1遍历这个字符串，将每个字符转化成utf-8（unicode）字符集中对应的数字
    for(c in str){
        //1.2使用霍纳法则计算幂的乘法加和 ， 选取开发中常用的指数37作为幂的底数
        hashCode = hashCode * 37 + str.charCodeAt(c); //根据字符在字符串中的下标获取Unicode编码
    }
    //2.哈希化，将大数字hashCode转化成数组下标值index
    return hashCode % size;
}



//使用
/* console.info(hashFunc('abc' , 10));
console.info(hashFunc('cba' , 10));
console.info(hashFunc('你真好' , 10)) */