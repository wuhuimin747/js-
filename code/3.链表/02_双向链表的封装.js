//双向列表类的定义
let LinkedList = require('./01_单向链表的封装');
class DoublyLinkedList extends LinkedList{
    //属性
    constructor(){
        super(); //head  length
        this.tail = null;//尾指针
    }
    //操作
    // append(data):向链表尾部添加元素
    append(data){
        //1.创建新节点
        let node = new Node(data);
        //2.判断链表里面有没有节点，如果没有，则添加为第一个节点，将头指针指向新节点，尾指针也指向新节点即可
        if(this.length == 0){
            this.head = node;
            this.tail = node;
        }
        /* 3.如果链表里有节点，由于尾结点的位置就是this.tail，
        将尾结点的位置赋值为新节点的pre，将新节点的位置赋值给尾结点的next,
        将新节点赋值给this.tail */
        else{
            node.pre = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        //4.长度加一
        this.length += 1;
        return this;
    }
    // insert(pos , data):向指定位置插入元素
    insert(pos , data){
        //1.下标越界判断
        if(pos < 0 || pos > this.length){
            return false;
        }
        //2.创建新的节点
        let node = new Node(data);
        //3.判断链表是否为空
        //3.1链表为空，则插入新节点是第一个节点，需要将头指针尾指针都只想新节点
        if(this.length == 0){
            this.head = node;
            this.tail = node;
        }
        //3.2链表不为空，则需要判断插入的位置，判断pos下标
        else{
            /*3.2.1如果是插入到第一个节点的位置，需要将头结点的位置赋值给新节点的next,
            把新节点的位置赋值给头结点的pre,重新给头指针赋值*/
            if(pos == 0){
                node.next = this.head;
                this.head.pre = node;
                this.head = node;
            }
            //3.2.2如果是追加到链表的尾部
            else if(pos == this.length){
                node.pre = this.tail;
                this.tail.next = node;
                this.tail = node;
            }
            /*3.2.3如果是插入到两个节点之间，则需要找到下标为pos的节点位置，
            然后处理4个指针，优先处理已经存在值的指针，
            首先将pos节点的pre赋值给新节点的pre,
            再将pos节点位置赋值给新节点的next,
            再将新节点的位置赋值给pos节点的pre的next
            最后将新节点的位置赋值给pos节点的pre*/
            else{
                let curnode = this.head;
                let i = 0;
                while (i < pos) {
                    curnode = curnode.next;
                    i++;
                }
                node.pre = curnode.pre;
                node.next = curnode;
                curnode.pre.next = node;
                curnode.pre = node;
            }
        }

        //链表长度加一
        this.length += 1;
    }
    // removeAt(pos):删除指定位置的元素,返回被删除元素的数据
    removeAt(pos){
        //1. 判断pos下标越界,如果越界就返回空对象,声明返回数据
        if(pos < 0 || pos > this.length - 1){
            return null;
        }
        let result = null;
        //2. 判断pos下标的值
        //2.1如果下标是0，删除第一个节点，将第一个节点的next赋值给头指针,将第二个节点的pre置空
        if(pos == 0){
            result = this.head.data;
            //2.1.1如果整个链表只有一个节点
            if(this.length == 0){
                this.head = null;
                this.tail =null;
            }
            //2.1.2如果整个链表有多个节点
            else{
                this.head = this.head.next;
                this.head.pre = null;
            }
        }
        //2.2如果下标是length-1,删除最后一个节点,将最后一个节点的pre赋值给为指针,把新的尾结点的next置空
        else if(pos == this.length - 1){
            result = this.tail.data;
            this.tail = this.tail.pre;
            this.tail.next = null;
        }
        //2.3删除两个节点中间的节点
        else{
            //2.3.1找到下标为pos的节点位置，根据pos < length /2 来选择遍历的方向
            let curnode = null;
            if(pos < this.length / 2){
                curnode = this.head;
                let i = 0;
                while (i < pos) {
                    curnode = curnode.next;
                    i++;
                }
            }else{
                curnode = this.tail;
                let i = this.length - 1;
                while (i > pos) {
                    curnode = curnode.pre;
                    i--;
                }
            }
            /* 2.3.2保存被删除节点的数据，
            将pos节点的next赋值给pos节点的pre的next，
            将pos节点的pre赋值给pos节点的next的pre */
            result = curnode.data;
            curnode.pre.next = curnode.next;
            curnode.next.pre = curnode.pre;
        }
        //3. 长度减一
        this.length -= 1;

        //4.返回被删除的数据
        return result;
    }
    // remove(data):删除指定元素,返回被删除元素的下标,继承单向链表
    // update(pos , data):修改指定位置的元素
    update(pos, data){
        //1. 判断pos下标越界,如果越界就返回空对象
        if(pos < 0 || pos > this.length - 1){
            return false;
        }
        //2.判断pos下标是更靠前，还是更靠后
        //2.1如果pos < length / 2 , 选择从头结点开始遍历，找到了下标为pos的节点位置
        let curnode = null;
        if(pos < this.length / 2){
            curnode = this.head;
            let i = 0;
            while(i < pos){
                curnode = curnode.next;
                i++;
            }
        }
        //2.2如果pos >= length / 2 , 选择从尾结点向前遍历，找到了下标为pos的节点位置
        else{
            curnode = this.tail;
            let i = this.length - 1;
            while(i > pos){
                curnode = curnode.pre;
                i--;
            }
        }
        //3.修改节点的数据
        curnode.data = data;
    }
    // get(pos):查询指定位置的元素
    get(pos){
        //1. 判断pos下标越界,如果越界就返回空对象
        if(pos < 0 || pos > this.length - 1){
            return null;
        }
        //2.判断pos下标是更靠前，还是更靠后
        //2.1如果pos < length / 2 , 选择从头结点开始遍历
        let curnode = null;
        if(pos < this.length / 2){
            //遍历链表，找到下标为pos的节点位置，找到了则立刻返回节点的数据
            curnode = this.head;
            let i = 0;
            while(i < pos){
                curnode = curnode.next;
                i++;
            }
        }
        //2.2如果pos >= length / 2 , 选择从尾结点向前遍历
        else{
            curnode = this.tail;
            let i = this.length - 1;
            while(i > pos){
                curnode = curnode.pre;
                i--;
            }
        }
       
        return curnode.data;
    }
    // indexOf(data):查询元素的位置，没有则返回-1,继承单向链表
    // size():返回链表内元素个数,继承单向链表
    // isEmpty():空栈返回false,有元素返回true,继承单向链表
    // toString():以字符串形式返回链表的元素,正向
    toString(){
        return this.forwardString();
    }
    // forwardString():正向遍历，以字符串形式返回链表的元素
    forwardString(){
        //1.从前往后遍历整个链表，经过每个节点的时候把data读出来，拼接成字符串
        let curnode = this.head;
        let result = '';
        while(curnode){
            result += curnode.data + ' ';
            curnode = curnode.next;
        }
        return result;
    }
    // backwardString():反向遍历，以字符串形式返回链表的元素
    backwardString(){
        //1.从后往前遍历整个链表，经过每个节点的时候把data读出来，拼接成字符串
        let curnode = this.tail;
        let result = '';
        while(curnode){
            result += curnode.data + ' ';
            curnode = curnode.pre;
        }
        return result;
    }
}

//节点类
class Node{
    constructor(data){
        this.pre = null;
        this.data = data;
        this.next = null;
    }
}

module.exports = DoublyLinkedList;

//使用
/* let d = new DoublyLinkedList();
d.append('aa').append('bb').append('cc');
// console.info(d.toString());
// console.info(d.forwardString());
// console.info(d.backwardString());
d.insert(0, 'oo');
d.insert(2, 'mm');
d.insert(5, 'pp');
d.update(5, 'ps');
console.info(d.toString());
// console.info(d.get(4));
// console.info(d.indexOf('mm'));
console.info(d.removeAt(0));
console.info(d.removeAt(3));
console.info(d.toString());
d.remove('bb');
console.info(d.toString()); */