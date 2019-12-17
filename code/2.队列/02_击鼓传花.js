/*游戏规则：
几个朋友围成一圈挨个数数，数到某个数字的人自动淘汰，
下一个人在继续从头数数，继续淘汰
最后剩下的一个人获胜
*/

let Queue = require('./01_队列的封装.js');

//入参是参与游戏的人名数组nameList，数到要淘汰的数组num
let passGame = (nameList , num) => {
    //1. 把人名放到队列中 
    let q = new Queue();
    nameList.forEach(ele => {
        q.enqueue(ele);
    });
    //2. 循环操作
    /* 2.2 外部循环规律：重复2.1的操作，不知道循环几次，采用while语句，
    结束循环的条件是队列的人数只剩一个人了  */
    while(q.size() > 1){
    /* 2.1 内部循环规律:循环num-1次，做的事情是：
    队列出队，后端再进队，模拟没数到数字num的人的情况
    循环结束后，在将队首出队，模拟数到num的人淘汰 */
        for(let i = 1 ; i < num ; i++){
            q.enqueue(q.dequeue());
        }
        q.dequeue();
    }
    //3. 将队列里剩下的一个人的名字返回
    return q.front();
}

//使用击鼓传花方法
console.info(passGame(['lily' , 'lucy' , 'tom' , 'lilei' , 'joy'] , 3));