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

module.exports = Queue;

//队列使用
/* let q = new Queue();
q.enqueue('qq').enqueue('ww').enqueue('ee').enqueue('rr');
q.dequeue();
console.info(q.toString());
console.info(q.front());
console.info(q.size());
console.info(q.isEmpty());
 */
