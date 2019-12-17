// 给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 # 代表退格字符。
// 输入：S = "ab#c", T = "ad#c"
// 输出：true
// S 和 T 只含有小写字母以及字符 '#'。

//栈类的定义
class Stack{
    //栈的属性
    constructor(){
        this.items = [];
    }
    //栈的操作
    // push(ele):添加元素到栈顶
    push(ele){
        this.items.push(ele);
        return this; //形成链式调用
    }
    // pop():删除栈顶元素，并返回该元素
    pop(){
        if(!this.isEmpty()){
            return this.items.pop();
        }
    }
    // isEmpty():空栈返回false,有元素返回true
    isEmpty(){
        return this.items.length == 0;
    }
}

var correct = (S) => {
    //1.建立栈
    let s = new Stack();
    //2.遍历字符串
    for(let i in S){
        let c = S[i];
        //3.对于每一个字符，如果是#则不入栈且删除栈顶元素
        if(c == '#'){
            s.pop();
        }else{
            //4.如果是字母，入栈
            s.push(c);
        }
    }
    return s.items.join('');
}

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    return correct(S) == correct(T);
};

console.info(backspaceCompare("a#c", "b"));