//图类的封装（无向图）
let Dictionary = require('../7.字典/01_字典类的封装');
let Queue = require('../2.队列/01_队列的封装');
class Graph{
    //属性
    constructor(){
        this.vertexes = []; //数组放顶点
        this.edges = new Dictionary(); //字典放边
    }

    //操作
    // addVertex(v)：添加顶点
    addVertex(v){
        //1.添加顶点
        this.vertexes.push(v);
        //2.给顶点创建自己对应边的数组,就是在字典里面建一个k-v对，v相邻顶点的列表创建一个空数组
        this.edges.set(v, []);
    }

    // addEdge(v1, v2)：添加边
    addEdge(v1, v2){
        //1.在字典里面找到key为v1的顶点，给她的数组push进去一个v2
        this.edges.get(v1).push(v2);
        //2.由于是无向图，所以还要反过来对v2操作一遍
        this.edges.get(v2).push(v1);
    }

    // toString()：使用邻接表的表达方式打印图的结构
    toString(){
        //1.遍历顶点数组，对于每一个顶点，去edges字典里面去找到他的边，然后打印出来
        let result = '';
        this.vertexes.forEach(v => {
            result += (v + ' -> ');
            this.edges.get(v).forEach(s => {
                result += (s + ' ');
            });
            result += '\n';
        });
        return result;
    }

    // bfs()：广度优先遍历
    bfs(fisrstv){
        //1.创建队列,将第一个节点入队，并且初始化所有顶点的颜色,并且把颜色变为灰色
        let q = new Queue();
        q.enqueue(fisrstv);
        let colors = this.initColor();
        colors[q] = 'grey';
        //2.当队列不为空的时候执行循环
        while(!q.isEmpty()){
            //2.1.将队列的队首元素出队
            let o = q.dequeue();
            //2.2.查找该节点的所有相邻节点，如果颜色为白色则入队，并且把颜色变为灰色，表示访问过了，下次不要在压进队列里面了
            this.edges.get(o).forEach(s => {
                if(colors[s] == 'white'){
                    colors[s] = 'grey';
                    q.enqueue(s);
                }
            });
            //2.2.打印队首节点，并标记为黑色，表示探测完毕
            console.info(o);
            colors[o] = 'black';
        }
    }

    // dfs()：深度优先遍历,使用递归函数实现，用栈太难了搞哭了，不搞了
    dfs(fisrstv){
        //1.创建一个访问顶点的函数
        let dfsvisit = (v, colors) => {
            //1.1.颜色变成灰色并打印
            colors[v] = 'grey';
            console.info(v);
            //1.2.找到相邻顶点list，遍历这个list，访问每个顶点，如果颜色是白色则访问这个顶点
            let list = this.edges.get(v);
            list.forEach(s => {
                if(colors[s] == 'white'){
                    dfsvisit(s, colors);
                }
            });
        }
        //2.初始化颜色，并调用函数
        let colors = this.initColor();
        dfsvisit(fisrstv, colors);
    }

    //初始化顶点的颜色为白色，其中数组color的下标和顶点一一对应
    initColor(){
        let colors = [];
        this.vertexes.forEach(v => {
            colors[v] = 'white';
        });
        return colors;
    }
}

module.exports = Graph;


let g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');
g.addVertex('G');
g.addVertex('H');
g.addVertex('I');

g.addEdge('A' , 'B');
g.addEdge('A' , 'C');
g.addEdge('A' , 'D');
g.addEdge('B' , 'E');
g.addEdge('B' , 'F');
g.addEdge('E' , 'I');
g.addEdge('C' , 'G');
g.addEdge('D' , 'G');
g.addEdge('D' , 'H');

console.info(g.toString());
//console.info(g.initColor());
//g.bfs(g.vertexes[0]);
g.dfs(g.vertexes[0]);