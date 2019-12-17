//二叉搜索树类的封装

class BinarySearchTree{
    //属性
    constructor(key){
        this.root = null;
    }
    //操作
    // insert(key ,val):向树中插入一个节点，包含键值key和内容value
    insert(key ,val){
        //1.创建新节点
        let newNode = new Node(key , val);
        //2.判断根节点有没有值，如果没有，新节点作为根节点
        if(!this.root){
            this.root = newNode;
        }else{
            insertNode(this.root , newNode);
        }
        //3.如果有值，则比较当前节点和新节点key的大小
        //4.如果新节点比当前节点小
        //4.1 查看当前节点的左孩子，如果左孩子没得，将新节点插入作为当前节点的左孩子
        //4.2 如果有左孩子，将左孩子作为新的当前节点，和新节点作比较，看看谁大，
        //这时就进入了循环递归，调用递归函数，传入新的值即可，递归开始之处是3.
        //5.如果新节点比当前节点大
        //5.1 查看当前节点的右孩子，如果右孩子没得，将新节点插入作为当前节点的右孩子
        //4.2 如果有右孩子，将右孩子作为新的当前节点，和新节点作比较，看看谁大，
        //这时就进入了循环递归，调用递归函数传入新的值
        //6.于是可将3~5步骤封装为一个函数共2步骤调用,函数的参数分别是当前节点和新节点
        function insertNode(node , newNode){
            if(newNode.key < node.key){
                if(!node.left){
                    node.left = newNode;
                }else{
                    insertNode(node.left , newNode);
                }
            }else{
                if(!node.right){
                    node.right = newNode;
                }else{
                    insertNode(node.right , newNode);
                }
            }
        }
    }
    // remove(key):删除一个键值节点
    remove(key){
        //1.先查找到这个节点,保存他的父节点，保存他是否为左节点的一个小flag
        //1.1将当前节点设置为根节点
        let node = this.root;
        let parent = null;
        let isLeftChild = true;
        while(node){
            //1.2如果key大于当前节点则将当前节点的右节点赋值给当前节点
            if(key > node.key){
                parent = node;
                node = node.right;
                isLeftChild = false;
            }
            //1.3如果key小于当前节点则将当前节点的左节点赋值给当前节点
            else if(key < node.key){
                parent = node;
                node = node.left;
                isLeftChild = true;
            }
            //1.4如果key等于当前节点，就结束循环
            else{
                break;
            }
        }
        //1.5各种找都没找到节点，就说明没有这个节点
        if(!node){
            return; 
        }
        //2.在判断这个节点什么性质，度为0，将父节点的left/right直接指向null即可
        else if(!node.left && !node.right){
            //2.1这个度为0的节点是根节点
            if(node == this.root){
                this.root = null;
            }
            //2.2这个节点是其父节点的左节点
            else if(isLeftChild){
                parent.left = null;
            }
            //2.3这个节点是其父节点的右节点
            else{
                parent.right = null;
            }
        }
        //3.度为1
        else if(!node.left){//有右子节点
            //3.1这个度为1的节点是根节点，将右子节点设为新的根节点
            if(node == this.root){
                this.root = node.right;
            }
            //3.2不是根节点，将右子节点赋值给父节点
            else if(isLeftChild){
                parent.left = node.right;
            }else{
                parent.right = node.right;
            }
        }else if(!node.right){//有左子节点
            //3.3这个度为1的节点是根节点，将左子节点设为新的根节点
            if(node == this.root){
                this.root = node.left;
            }
            //3.4不是根节点，将左子节点赋值给父节点
            else if(isLeftChild){
                parent.left = node.left;
            }else{
                parent.right = node.left;
            }
        }
        //4.度为2
        else{
            //4.1查找到当前节点的后继节点
            let successor = getSuccessor(node);
            //4.2判断当前节点是不是根节点，如果是将后继节点赋值给根节点
            if(node == this.root){
                this.root = successor;
            }
            //4.3当前节点是父节点的左节点
            else if(isLeftChild){
                parent.left = successor;
            }
            //4.4当前节点是父节点的右节点
            else{
                parent.right = successor;
            }
            //4.5将当前节点的左子树赋值给新节点的left
            successor.left = node.left;
        }

        //获取后继节点，并处理后继节点不是删除节点的右节点的情况
        function getSuccessor(node){
            //1.定义后继节点，遍历时的当前节点，后继节点的父节点
            let successor = node;
            let successorParent = node;
            let curNode = node.right;
            //2.遍历右子树，找到后继节点
            while(curNode){
                successorParent = successor;
                successor = curNode;
                curNode = curNode.left;
            }
            //3.如果后继节点是被删节点的右节点还好说，如果不是，
            if(successor != node.right){
                //3.1后继节点的右节点赋值给后继节点的父节点的左节点，
                successorParent.left = successor.right;
                //3.2被删节点的right赋值给后继节点的right
                successor.right = node.right;
            }
            return successor;
        } 
    }
    // update(key, val):修改指定键值的内容
    update(key, val){
        //1.获取根节点作为当前节点
        let node = this.root
        //2.循环遍历节点，直到当前节点为空，判断当前节点和key谁大，
        while(node){
            //2.1如果key大于当前节点则将当前节点的右节点赋值给当前节点
            if(key > node.key){
                node = node.right;
            }
            //2.2如果key小于当前节点则将当前节点的左节点赋值给当前节点
            else if(key < node.key){
                node = node.left;
            }
            //2.3如果key等于当前节点，就返回节点的val
            else{
                node.val = val;
                return;
            }
 
        }
        return;
    }
    // search(key):查找树中的一个键值，存在则返回内容，不存在返回null
    search(key){//尝试使用循环的方式解决问题，代替递归
        //1.获取根节点作为当前节点
        let node = this.root
        //2.循环遍历节点，直到当前节点为空，判断当前节点和key谁大，
        while(node){
            //2.1如果key大于当前节点则将当前节点的右节点赋值给当前节点
            if(key > node.key){
                node = node.right;
            }
            //2.2如果key小于当前节点则将当前节点的左节点赋值给当前节点
            else if(key < node.key){
                node = node.left;
            }
            //2.3如果key等于当前节点，就返回节点的val
            else{
                return node.val;
            }
        }
        //3.没找到返回null
        return null;
    }
    // max():返回树中的最大键值
    max(){
        //1.先找到根节点
        let r = this.root;
        //2.循环遍历根节点的右节点，找到最后一个右节点
        if(r){
            while(r.right){
                r = r.right;
            }
            //3.返回最后一个右节点的key值
            return r.key;
        }
        return null;
    }
    // min():返回树中的最小键值
    min(){
        //1.先找到根节点
        let r = this.root;
        //2.循环遍历根节点的左节点，找到最后一个左节点
        if(r){
            while(r.left){
                r = r.left;
            }
            //3.返回最后一个左节点的key值
            return r.key;
        }
        return null;
    }
    // preOrderTraverse():前序遍历所有节点并打印
    preOrderTraverse(){
        //1.调用封装函数
        preOrderTraverseNode(this.root);
        //2.封装遍历并打印的函数，node为当前节点
        function preOrderTraverseNode(node) {
            //1.如果该节点为空，就啥也不干，如果节点不为空打印该节点
            if(node){
                console.info(node.key + ' ');
                //2.查看该节点的左节点，如果不为空则递归调用本函数
                if(node.left){
                    preOrderTraverseNode(node.left);
                }
                //3.看看该节点的右节点，如果不为空则递归调用本函数
                if(node.right){
                    preOrderTraverseNode(node.right);
                }
            }
        }
    }
    // inOrderTraverse():中序遍历所有节点并打印
    inOrderTraverse(){
        //1.调用封装函数
        inOrderTraverseNode(this.root);
        //2.封装遍历并打印的函数，node为当前节点
        function inOrderTraverseNode(node) {
            //1.如果该节点为空，就啥也不干，
            if(node){
                //2.查看该节点的左节点，如果不为空则递归调用本函数
                if(node.left){
                    inOrderTraverseNode(node.left);
                }
                //3.如果节点不为空打印该节点
                console.info(node.key + ' ');
                //4.看看该节点的右节点，如果不为空则递归调用本函数
                if(node.right){
                    inOrderTraverseNode(node.right);
                }
            }
        }
    }
    // postOrderTraverse():后序遍历所有节点并打印
    postOrderTraverse(){
        //1.调用封装函数
        postOrderTraverseNode(this.root);
        //2.封装遍历并打印的函数，node为当前节点
        function postOrderTraverseNode(node) {
            //1.如果该节点为空，就啥也不干，
            if(node){
                //2.查看该节点的左节点，如果不为空则递归调用本函数
                if(node.left){
                    postOrderTraverseNode(node.left);
                }
                //3.看看该节点的右节点，如果不为空则递归调用本函数
                if(node.right){
                    postOrderTraverseNode(node.right);
                }
                //4.如果节点不为空打印该节点
                console.info(node.key + ' ');
            }
        }
    }
}

class Node{
    constructor(key, val){
        this.key = key;
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

module.exports = BinarySearchTree;

//使用
let bst = new BinarySearchTree();
bst.insert(11, '11');
bst.insert(7, '7');
bst.insert(15, '15');
bst.insert(5, {'name' : 'huhau'});
bst.insert(9 , '9');
bst.insert(13 , '13');
bst.insert(20, '20');
bst.insert(3, '3');
bst.insert(8, '8');
bst.insert(10, '10');
bst.insert(12, '12');
bst.insert(14, '14');
bst.insert(18, '18');
bst.insert(19, '19');
bst.insert(25, '25');

// bst.preOrderTraverse();
// console.info('-----------');
// bst.inOrderTraverse();
// console.info('-----------');
// bst.postOrderTraverse();

// console.info(bst.max());
// console.info(bst.min());

// console.info(bst.search(13));
// console.info(bst.search(99));

// bst.update(13 , '133');
// console.info(bst.search(13));



//bst.remove(3);
//bst.remove(5);
//bst.remove(9);
//bst.remove(15);
//bst.remove(11);
//bst.preOrderTraverse();