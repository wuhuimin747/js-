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
    // toString():以字符串形式返回栈的元素
    toString(){
        return this.items.join(' ');
    }    
}

/* //栈的使用
let s = new Stack();
s.push(10).push(20).push(30).push(40);
s.pop();
console.info(s.toString());
console.info(s.peek());
console.info(s.size());
console.info(s.isEmpty());
 */

module.exports = Stack;




