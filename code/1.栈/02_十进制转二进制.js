//引入Stack类
let Stack = require('./01_栈的封装');

//十进制转二进制
let dec2bin = decnum => {
    //1. 定义一个栈来接收取余的结果
    let s = new Stack();

    //2. 循环操作
    while(decnum > 0){
        //2.1 数字对2取余，把余数压入栈中
        s.push(decnum % 2);
        //2.2 数字对2整除，结果的向下取整作为下次计算对象
        decnum = Math.floor(decnum / 2);
    }

    //3. 从栈中取出0和1，拼接成最终结果
    let result = '';
    while (!s.isEmpty()) {
        result += s.pop();
    }
    return result;
}

console.info(dec2bin(100));
console.info(dec2bin(1000));

