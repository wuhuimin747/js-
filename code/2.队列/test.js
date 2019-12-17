//测试类的依赖对暴露模块的影响：PriorityQueue定义时依赖Queue和QueueEle类
let PriorityQueue = require('./03_优先级队列的封装');

let pq = new PriorityQueue();

pq.enqueue('qq' , 50).enqueue('ww' , 30).enqueue('ee' , 10).enqueue('rr' , 80);
console.info(pq.toString());
console.info(pq.front());
console.info(pq.size());
console.info(pq.isEmpty());