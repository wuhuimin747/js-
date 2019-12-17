/* 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
有效字符串需满足：
1.左括号必须用相同类型的右括号闭合。
2.左括号必须以正确的顺序闭合。
注意：空字符串可被认为是有效字符串。 */
let match = {
    '}' : '{',
    ']' : '[',
    ')' : '(',
}

//栈类的定义
class Stack{
    //栈的属性
    constructor(){
        this.items = [];
    }
    //栈的操作
    // push(ele):添加元素到栈顶
    push(ele){
        this.items.push(ele);
        return this; //形成链式调用
    }
    // pop():删除栈顶元素，并返回该元素
    pop(){
        if(!this.isEmpty()){
            return this.items.pop();
        }
    }
    // peek():仅返回栈顶元素
    peek(){
        if(!this.isEmpty()){
            return this.items[this.size() - 1];
        }
    }
    // size():返回栈内元素个数
    size(){
        return this.items.length;
    }
    // isEmpty():空栈返回false,有元素返回true
    isEmpty(){
        return this.size() == 0;
    }
    // toString():以字符串形式返回栈的元素
    toString(){
        return this.items.join(' ');
    }    
}

/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = s => {
    //1.创建一个栈
    let st = new Stack();
    //2.遍历字符串的每一个字符，跳过空格
    for(let i = 0 ; i < s.length ; i++){
        if(s[i] == ' ') continue;
        //2.1如果此时栈是空栈，则直接入栈，
        if(st.isEmpty()){
            st.push(s[i]);
        }else{
            //如果不空，则查看栈顶元素是否和该字符匹配，
            //2.2如果匹配则该字符不入栈，且删除栈顶元素
            if(match[s[i]] == st.peek()){
                st.pop();
            }else{
                //2.3如果匹配不成功则字符入栈
                st.push(s[i]);
            }
        }
    }
    //3.遍历完了字符串之后，查看栈是否为空，如果为空则是有效括号
    return st.isEmpty();
};
//console.info(isValid('()  ]]{}'));