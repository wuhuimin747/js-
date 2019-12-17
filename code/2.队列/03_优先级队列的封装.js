let Queue = require('./01_队列的封装');

//优先级队列类的定义
class PriorityQueue extends Queue{
    //优先级队列属性
    constructor(){
        super();
    }
    //优先级队列操作
    //enqueue(val , priority):添加元素到优先级正确位置
    enqueue(val , priority){
        let ele = new QueueEle(val , priority);
        if(this.isEmpty()){
            this.items.push(ele);
            return this;
        }else{
            /* 新入队的元素，要和现有队列的元素逐一比较优先级，
            如果优先级高于某个元素则排在那个元素的前面，
            如果比所有元素优先级都低就排在队尾 */
            for(let i = 0 ; i < this.size() ; i++){
                if(priority < this.items[i].priority){
                    this.items.splice(i , 0 , ele);
                    return this;
                }
            }
            this.items.push(ele);
            return this;
        }
    }
    //toString():以字符串形式返回队列的元素
    toString(){
        let tmp = this.items.map((ele , i) => {
            return ele.val + '-' + ele.priority;
        });
        return tmp.join(' ');
    }   
}

//定义一个内部类:队列的元素，包含元素的值和优先级。定义的方式是一个构造函数（原先ES5定义类的方式）
class QueueEle{
    constructor(val , priority){
        this.val = val;
        this.priority = priority;
    }
}
module.exports = PriorityQueue;

//优先级队列使用
/* let q = new PriorityQueue();
q.enqueue('qq' , 50).enqueue('ww' , 30).enqueue('ee' , 10).enqueue('rr' , 80);
console.info(q.toString());
console.info(q.front());
console.info(q.size());
console.info(q.isEmpty());
 */
