//单向链表类的定义
class LinkedList{
    //属性
    constructor(){
        this.head = null; //链表的头指针，指向第一个节点，表示第一个节点的位置
        this.length = 0; //链表的长度
    }
    //操作
    // append(data):向链表尾部添加元素
    append(data){
        //1.创建新节点
        let node = new Node(data);
        //2.如果链表里没有节点，就将头指针指向新节点，作为新节点的位置
        if(this.length == 0){
            this.head = node;
        }
        //3.如果链表里已经有节点了,就找到最后一个节点，将next指向新节点
        else{
            let curnode = this.head; //当前节点的位置，用来遍历链表
            while(curnode.next){
                curnode = curnode.next;
            }
            curnode.next = node;
        }
        //4.链表的长度加一
        this.length += 1;
        return this;
    }
    // insert(pos , data):向指定位置插入元素
    insert(pos , data){
        //1.判断pos想要插入的下标是否合法，认为下标在0~length是合法的,创建节点
        if(pos < 0 || pos > this.length){
            return false;
        }
        let node = new Node(data);
        /*2.如果pos下标是0，表示在第一个节点的位置插入新节点，
        需要将原来的第一个节点的位置作为新节点的next，头指针指向新节点 */
        if(pos == 0){
            node.next = this.head;
            this.head = node;
        }
        /*3.如果pos下标不是0，表示在两个节点中间插入新节点,
        需要找到下标为pos的节点位置作为新节点的next，
        下标为pos节点的前一个节点的位置的next指向新节点 */
        else{
            //遍历链表找到pos下标的节点和他的前一个节点
            let curnode = this.head;
            let previous = null;
            let i = 0;
            while(i < pos){//这个条件的临界值是结合0 1 2实际画图推算出来的
                previous = curnode;
                curnode = curnode.next;
                i++;
            }
            node.next = curnode;
            previous.next = node;
        }
        /*4.如果pos下标为length，表示在链表的尾部追加元素，
        事实证明情况3的实现涵盖情况4所以不用单独处理了,
        按照链表目前只有下标为0 1 2的三个节点来算，pos等于3,
        while循环里面最后一次执行时i为2就是说执行了3次，
        此时curnode表示的是下标为2的next,即null,previous即下标为2的节点，
        接下来的操作正好满足要求 */
        //5.链表的长度加一
        this.length += 1;
        return this;
    }
    // removeAt(pos):删除指定位置的元素,返回被删除元素的数据
    removeAt(pos){
        //1. 判断pos下标越界,如果越界就返回空对象
        if(pos < 0 || pos > this.length - 1){
            return null;
        }
        //2. 遍历链表，如果pos是0则将head头指针指向第一个节点的下一个节点（做个空节点判断）
        //如果pos不是0则先找到下标为pos的节点和他的前一个节点，将pos节点的next赋值给前一个节点的next
        let curnode = this.head;
        if(pos == 0){
            if(curnode){
                let data = curnode.data;
                this.head = curnode.next;
                this.length -= 1;
                return data;
            }else{
                return null;
            }
        }else{
            let previous = null;
            let i = 0;
            while (i < pos) {
                previous = curnode;
                curnode = curnode.next;
                i++;
            }
            previous.next = curnode.next;
            this.length -= 1;
            return curnode.data;
        }
    }
    // remove(data):删除指定元素,返回被删除元素的下标
    remove(data){
        //1. 根据数据找到节点下标，
        let pos = this.indexOf(data);
        //2. 再根据下标删除节点
        this.removeAt(pos);
        //3.长度减一
        this.length -= 1;
        //4. 返回下标
        return pos;
    }
    // update(pos,data):修改指定位置的元素
    update(pos, data){
        //1. 判断pos下标越界,如果越界就返回空对象
        if(pos < 0 || pos > this.length - 1){
            return false;
        }
        //2.遍历链表，找到下标为pos的节点位置，找到了则修改节点的数据
        let curnode = this.head;
        let i = 0;
        while(i < pos){
            curnode = curnode.next;
            i++;
        }
        curnode.data = data;
    }
    // get(pos):查询指定位置的元素,返回该元素
    get(pos){
        //1. 判断pos下标越界,如果越界就返回空对象
        if(pos < 0 || pos > this.length - 1){
            return null;
        }
        //2.遍历链表，找到下标为pos的节点位置，找到了则立刻返回节点的数据
        let curnode = this.head;
        let i = 0;
        while(i < pos){
            curnode = curnode.next;
            i++;
        }
        return curnode.data;
    }
    // indexOf(data):查询元素的位置，没有则返回-1
    indexOf(data){
        /* 1. 遍历链表，定义下标变量i,检查每个节点的数据是否等于data，
        如果相等则返回节点下标i,如果不等则当前节点后移，i加一 */
        let curnode = this.head;
        let i = 0;
        while(curnode){
            if(curnode.data == data){
                return i;
            }else{
                curnode = curnode.next;
                i++;
            }
        }
        //2. 遍历了全表都没找到数据相同的节点，就返回-1
        return -1;
    }
    // size():返回链表内元素个数
    size(){
        return this.length;
    }
    // isEmpty():空栈返回false,有元素返回true
    isEmpty(){
        return this.length == 0;
    }
    // toString():以字符串形式返回链表的元素
    toString(){
        //1.遍历整个链表，经过每个节点的时候把data读出来，拼接成字符串
        let curnode = this.head;
        let result = '';
        while(curnode){
            result += curnode.data + ' ';
            curnode = curnode.next;
        }
        return result;
    }
}


//节点类
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

module.exports = LinkedList;

//使用
/* let l = new LinkedList();
l.append('zhihao').append('qingyi').append('jianyu');
console.info(l.toString());
l.insert(0 , 'huimin');
console.info(l.toString());
l.insert(2 , 'miaojing');
console.info(l.toString());
l.insert(5 , 'wanshen');
console.info(l.toString());
// console.info(l.get(4));
// console.info(l.indexOf('huimin'));
// console.info(l.indexOf('wanshen'));
// l.update(0, 'huimin2');
// l.update(5, 'wanshen2');
// l.update(2 , 'miaojing2');
// console.info(l.toString());
console.info(l.removeAt(0));
console.info(l.removeAt(90));
console.info(l.remove('zhihao'));
console.info(l.toString()); */