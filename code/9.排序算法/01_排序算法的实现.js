//排序算法的实现
class ArrayList{
    //1.属性
    constructor(){
        this.items = [];
    }
    //2.操作
    //push 添加
    push(val){
        this.items.push(val);
        return this;
    }
    //toString 转成字符转返回
    toString(){
        return this.items.join(' ');
    }
    //bubbleSort:冒泡排序
    bubbleSort(){
        let arr = this.items;
        //1.实现外层循环:遍历x次，i定义的是每次内部比较一趟比较到的最大下标。i=length-1 i--
        let i = arr.length - 1;
        while(i > 0){
            //2.实现内层循环：将最大的一个元素放到最后,内循环遍历的元素最大的下标是i
            //2.1比较相邻的两个元素的大小，大的那个放在右边
            for(let j = 0 ; j <= i ; j++){
                if(arr[j] > arr[j+1]){
                    //swap交换两个数据,参数是数组的两个下标
                    this.swap(j, j+1);
                }
            }
            i--;
        }
    }    
    //selectionSort 选择排序
    selectionSort(){
        //1.外层循环用来定义遍历从哪个下标开始
        let arr = this.items;
        let i = 0;
        while(i < arr.length - 1){
            //2.内层循环做本趟遍历，选择出最小值，和首个未排序元素交换
            let minindex = i ; //2.1默认最小值的下标为首个未排序元素i
            for(let j = i ; j < arr.length ; j++){
                if(arr[j] < arr[minindex]){
                    minindex = j;
                }
            }
            //2.2将本趟的最小值和首元素交换
            this.swap(minindex , i);
            //1.1 i递增
            i++;
        }
    }
    //insertionSort 插入排序
    insertionSort(){
        let arr = this.items;
        //1.外层循环确定局部有序列表右边第一个无序元素的下标,默认第一个局部有序列表就是第一个元素，所以无序元素下标是1
        for(let i = 1 ; i < arr.length ; i++){
            //2.内层循环，比较无序元素和局部列表的大小并插入到正确的位置
            //2.1保存一下无序元素的值
            let tmp = arr[i];
            //2.2循环比较局部列表和无需元素的大小
            let localindex = i-1;
            while(arr[localindex] > tmp && localindex >0){
                arr[i] = arr[localindex]; //向右挪一位置，不用担心i值没有，已经有tmp备份了
                localindex -= 1;
            }
            arr[localindex + 1] = tmp; //插入对的位置
        }
    }
    //希尔排序
    shellSort(){
        //1.建立数组的新指针
        let arr = this.items;
        //2.设置初始的间隔值gap
        let gap = Math.floor(arr.length / 2);
        //3.外循环不断的减小gap值，间隔分组的值，直到gap变成1
        while(gap >= 1){
            //4.对于分好组的数据进行插入排序的操作
            //4.1.外层循环确定局部有序列表右边第一个无序元素的下标,所以无序元素下标是gap
            for(let i = gap ; i < arr.length ; i += gap){
                //4.2内层循环，比较无序元素和局部列表的大小并插入到正确的位置
                //4.3保存一下无序元素的值
                let tmp = arr[i];
                //4.4循环比较局部列表和无序元素的大小
                let localindex = i - gap;
                while(arr[localindex] > tmp && localindex >0){
                    arr[i] = arr[localindex]; //向右挪一位置，不用担心i值没有，已经有tmp备份了
                    localindex -= gap;
                }
                arr[localindex + gap] = tmp; //插入对的位置
            }
            //5.gap按序列变小
            gap = Math.floor(gap / 2);
        }
    }
    //快速排序
    quickSort(){
        //3.调用递归函数
        this.quick(0, this.items.length - 1);
    }
    //快排内部调用：1.选择枢纽,left表示数组的头,right表示数组的尾
    pivot(left , right){
        //1.1.取出中间位置
        let center = Math.floor((left + right) / 2);
        //1.2.将头中尾三个元素排好顺序
        let arr = this.items;
        if(arr[left] > arr[center]){
            this.swap(left , center);
        }
        if(arr[center] > arr[right]){
            this.swap(center , right);
        }
        if(arr[left] > arr[center]){
            this.swap(left , center);
        }
        //1.3.将中位数换到right-1的位置
        this.swap(center , right - 1);
        //1.4.返回枢纽的值
        return arr[right - 1];
    }
    //快排内部调用：2.定义递归函数
    quick(left, right){
        //2.1定义递归的结束条件
        if(left >= right) return;
        //2.2获取枢纽
        let pivot = this.pivot(left, right);
        //2.3定义本次排序的左右指针变量
        let i = left, j = right - 1,arr = this.items;
        //2.4开始交换
        while(true){
            while(arr[++i] < pivot){}
            while(arr[--j] > pivot){}
            if(i < j){
                this.swap(i ,j);
            }else {
                break;
            }
        }
        //2.5将枢纽放在正确位置上
        this.swap(i , right - 1);
        //2.6分而治之
        this.quick(left, i - 1);
        this.quick(i + 1, right);
    }
    //swap交换两个数据，参数是数组的两个下标，直接传值的话是传的数值的拷贝而不是对象的引用，改变不了数组元素的值
    swap(i, j){
        let arr = this.items;
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
}

//使用
let l = new ArrayList();
l.push(2).push(32).push(5).push(88).push(7).push(12).push(33);
//l.bubblesort();
//l.selectionsort();
//l.insertionSort();
//l.shellSort();
l.quickSort();
console.info(l.toString());