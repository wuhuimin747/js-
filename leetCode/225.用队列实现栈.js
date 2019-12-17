/* 使用队列实现栈的下列操作：
push(x) -- 元素 x 入栈
pop() -- 移除栈顶元素
top() -- 获取栈顶元素
empty() -- 返回栈是否为空
注意:
你只能使用队列的基本操作-- 也就是 push to back, peek/pop from front, size, 和 is empty 这些操作是合法的。
你所使用的语言也许不支持队列。 你可以使用 list 或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。
你可以假设所有操作都是有效的（例如, 对一个空的栈不会调用 pop 或者 top 操作）。 */

//队列类的定义
class Queue{
    //队列属性
    constructor(){
        this.items = [];
    }
    //队列操作
    //enqueue(ele):添加元素到队尾
    enqueue(ele){
        this.items.push(ele);
        return this;
    }
    //dequeue():删除队列前端的第一个元素，并返回该元素
    dequeue(){
        if(!this.isEmpty()){
            return this.items.shift();
        }
    }
    //front():仅返回队列前端的第一个元素
    front(){
        if(!this.isEmpty()){
            return this.items[0];
        }
    }
    //size():返回队列内元素个数
    size(){
        return this.items.length;
    }
    //isEmpty():空栈返回false,有元素返回true
    isEmpty(){
        return this.size() == 0;
    }
    //toString():以字符串形式返回队列的元素
    toString(){
        return this.items.join(' ');
    }   
}

/**
 * Initialize your data structure here.
 */
class MyStack {
    constructor(){
        this.q = new Queue();
    }

    push(x){
        this.q.enqueue(x);
    }

    pop(){
        if(!this.q.isEmpty()){
            let i=1;
            while(i < this.q.size()){
                this.q.enqueue(this.q.dequeue());
            }
            return this.q.dequeue();
        }else{
            return null;
        }
    }
    top(){
        if(!this.q.isEmpty()){
            let re = this.pop();
            this.push(re);
            return re;
        }else{
            return null;
        }    
    }

    empty(){
        return this.q.isEmpty();
    }
};