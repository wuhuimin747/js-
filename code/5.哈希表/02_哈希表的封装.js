//哈希表类的封装

class HashTable{
    //属性
    constructor(){
        this.storage = []; //哈希表内的数组
        this.count = 0; //已经存储的元素个数
        this.limit = 7; //数组的长度
    }

    //操作
    //put(key , value):添加/修改，如果检查key发现没有就是添加，如果有就是覆盖修改
    put(key , value){
        //1.通过哈希函数算出key转化后得到的下标值index
        let index = this.hashFunc(key , this.limit);
        //2.根据下标值获取storage数组对应位置的数组桶bucket,如果没有就创建一个桶
        let bucket = this.storage[index];
        if(!bucket){
            bucket = []
            this.storage[index] = bucket;
        }
        //3.遍历这个桶，查看有没有相同的key值，如果有就是修改操作,结束操作
        for(let i =0 ; i < bucket.length ; i++){
            let tuple = bucket[i]; //元素存储在tuple里 tuple[0]放key  tuple[1]放value
            if(tuple[0] == key){
                tuple[1] = value;
                return;
            }
        }
        //4.桶里没有key就是添加操作，没有key上面的循环会自己遍历完桶里最后一个
        bucket.push([key , value]);
        //5.元素个数count加一
        this.count += 1;
        //6.判断是否需要扩容
        if(this.count > this.limit * 0.75){
            let newLimit = this.newPrime(this.limit * 2);
            this.resize(newLimit);
        }
    }

    //get(key):获取元素的值，根据key关键词获取全部信息
    get(key){
        //1.根据key算出下标值index
        let index = this.hashFunc(key , this.limit);
        //2.获取下标值的数组桶bucket
        let bucket = this.storage[index];
        //3.如果桶是null直接返回null
        if(!bucket) return null;
        //4.如果桶不是null，遍历这个桶线性查找key相等的tuple的value并返回
        for(let i =0 ; i < bucket.length ; i++){
            let tuple = bucket[i]; 
            if(tuple[0] == key) return tuple[1];
        }
        //4.遍历完了桶都没找到，说明没有，返回null
        return null;
    }

    //remove(key):根据关键词key来删除数据,返回被删除的数据
    remove(key){
        //1.根据key算出下标值index
        let index = this.hashFunc(key , this.limit);
        //2.获取下标值的数组桶bucket
        let bucket = this.storage[index];
        //3.如果桶是null直接返回null
        if(!bucket) return null;
        //4.如果桶不是null，遍历这个桶线性查找key相等的tuple然后删除桶里的tuple，存储量建议，返回value
        for(let i =0 ; i < bucket.length ; i++){
            let tuple = bucket[i];
            if(tuple[0] == key){
                bucket.splice(i, 1);
                this.count -= 1;
                //5.判断是否需要缩容
                if(this.count < this.limit * 0.25){
                    let newLimit = this.newPrime(parseInt(this.limit / 2));
                    this.resize(newLimit);
                }
            }
            return tuple[1];
        }
        //6.遍历完了桶都没找到，说明没有，返回null
        return null;
    }

    //isEmpty():判断哈希表是否为空
    isEmpty(){
        return this.count == 0;
    }

    //size():判断哈希表中存储的元素个数
    size(){
        return this.count;
    }

    //resize(newLimit):哈希表的扩容/缩容
    resize(newLimit){
        //1.建立一个引用指向原来的哈希数组，做一个保存
        let tmp = this.storage;
        //2.重置哈希数组的属性为新值
        this.storage = [];
        this.count = 0;
        this.limit = newLimit;
        //3.遍历原数组，取出所有的桶，将桶里的数据put到新的哈希数组中
        tmp.forEach(bucket => {
            //3.1如果桶不是空的才去取里边的数据
            if(bucket){
                bucket.forEach(tuple => {
                    this.put(tuple[0] , tuple[1]);
                });
            }
        });
    }

    //isPrime(num):判断参数是否为一个质数
    isPrime(num){
        //1.求参数的平方根的整数
        let sqrt = parseInt(Math.sqrt(num));
        //2.遍历2~平方根查看是否存在能整除参数的因子，存在则返回false，不存在则返回true
        for(let i = 2 ; i <= sqrt ; i++){
            if(num % i == 0){
                return false;
            }
        }
        return true;
    }

    //newPrime(num):返回一个最接近参数的质数
    newPrime(num){
        while(!this.isPrime(num)){
            num += 1;
        }
        return num;
    }

    /**
     * 哈希函数
     * @param {*string} str  表示需要被存储的字符串数据
     * @param {*number} size 表示哈希表数组的大小
     */
    hashFunc(str , size){
        //1.霍纳法则，将字符串转化成大数字hashCode
        let hashCode = 0;
        //1.1遍历这个字符串，将每个字符转化成utf-8（unicode）字符集中对应的数字
        for(let c in str){
            //1.2使用霍纳法则计算幂的乘法加和 ， 选取开发中常用的指数37作为幂的底数
            hashCode = hashCode * 37 + str.charCodeAt(c); //根据字符在字符串中的下标获取Unicode编码
        }
        //2.哈希化，将大数字hashCode转化成数组下标值index
        return hashCode % size;
    }
}


module.exports = HashTable;

//使用
let h = new HashTable();
// h.put('huimin' , 18);
// h.put('minghui' , 'xixixi');
// console.info(h.get('huimin'));
// console.info(h.get('minghui'));
// console.info(h.remove('minghui'));
// h.put('huimin' , {'lastname' : 'wu' , 'firstname' : 'huimin' , 'age' : 18 , 'salary' : 5000});
// console.info(h.get('huimin'));

// h.put('huimin1' , 18);
// h.put('huimin2' , 18);
// h.put('huimin3' , 18);
// h.put('huimin4' , 18);
// h.put('huimin5' , 18);
// h.put('huimin6' , 18);
// h.put('huimin7' , 18);
// console.info(h.limit);
// h.remove('huimin4');
// h.remove('huimin5');
// h.remove('huimin6');
// h.remove('huimin7');
// console.info(h.limit);
//console.info(parseInt(8.5));