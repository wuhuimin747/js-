// 给定一个二叉树，返回它的中序 遍历。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    //0.定义返回数组
    let arr = [];
    //1.调用封装函数
    inOrderTraverseNode(root);
    //2.封装遍历并打印的函数，node为当前节点
    function inOrderTraverseNode(node) {
        //1.如果该节点为空，就啥也不干，
        if(node){
            //2.查看该节点的左节点，如果不为空则递归调用本函数
            if(node.left){
                inOrderTraverseNode(node.left);
            }
            //3.如果节点不为空打印该节点
            arr.push(node.val);
            //4.看看该节点的右节点，如果不为空则递归调用本函数
            if(node.right){
                inOrderTraverseNode(node.right);
            }
        }
    }

    return arr;
};