/* 设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。
push(x) -- 将元素 x 推入栈中。
pop() -- 删除栈顶的元素。
top() -- 获取栈顶元素。
getMin() -- 检索栈中的最小元素。 */

/**
 * initialize your data structure here.
 */
class MinStack{
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
    // top():仅返回栈顶元素
    top(){
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
    
    getMin(){
        let min = this.items[0];
        this.items.forEach(ele => {
            if(ele < min){
                min = ele;
            }
        });
        return min;
    }
}


let s = new MinStack();
s.push(-2).push(0).push(-3);
console.info(s.getMin());
s.pop()
console.info(s.items);
console.info(s.top())
console.info(s.getMin());
