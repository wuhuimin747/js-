// 你现在是棒球比赛记录员。
// 给定一个字符串列表，每个字符串可以是以下四种类型之一：
// 1.整数（一轮的得分）：直接表示您在本轮中获得的积分数。
// 2. "+"（一轮的得分）：表示本轮获得的得分是前两轮有效 回合得分的总和。
// 3. "D"（一轮的得分）：表示本轮获得的得分是前一轮有效 回合得分的两倍。
// 4. "C"（一个操作，这不是一个回合的分数）：表示您获得的最后一个有效 回合的分数是无效的，应该被移除。

// 每一轮的操作都是永久性的，可能会对前一轮和后一轮产生影响。
// 你需要返回你在所有回合中得分的总和。

// 输入: ["5","-2","4","C","D","9","+","+"]
// 输出: 27

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
    // peek():仅返回栈顶元素
    peek(){
        if(!this.isEmpty()){
            return this.items[this.size() - 1];
        }
    }
    // size():返回栈内元素个数
    size(){
        return this.items.length;
    }
    // isEmpty():空栈返回false,有元素返回true
    isEmpty(){
        return this.size() == 0;
    }
}

/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    //1.建一个栈
    let s = new Stack();
    //2.遍历操作数组
    ops.forEach( item => {
        //4.如果元素是C，不入栈，且删除栈顶元素
        if(item == 'C'){
            if(!s.isEmpty()){
                s.pop();
            }
        }else if(item == 'D'){
            //5.如果是D，获取栈顶元素的值，乘以2之后入栈
            s.push(parseInt(s.peek()) * 2);
        }else if(item == '+'){
            //6.如果是+，此时如果不是空栈,出栈栈顶元素，保存值为A，此时如果是空栈B=0，如果不是，获取栈顶元素的值为B，
            //将A入栈，将A+B入栈。
            if(!s.isEmpty()){
                let A = parseInt(s.pop());
                let B = 0;
                if(!s.isEmpty()){
                    B = parseInt(s.peek());
                }
                s.push(A);
                s.push(A + B);
            }    
        }else{
            //3.如果每个元素是整数，入栈
            s.push(parseInt(item));
        }
    } );
    //7.遍历栈将数据全加和
    let total = 0;
    s.items.forEach(item => total += item);
    return total;
};


console.info(calPoints(["5","-2","4","C","D","9","+","+"]));