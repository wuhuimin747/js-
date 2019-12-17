//集合类的定义
class Set{
    //属性
    constructor(){
        this.items = {};//使用js原生Object对象实现
    }
    //操作
    //add(ele):添加元素，添加成功返回true，失败返回false
    add(ele){
        //1.判断集合中是否存在相同的元素
        if(this.has(ele)){
            return false;
        }
        //2.如果不存在再添加
        this.items[ele] = ele;
        return true;
    }
    //remove(ele):删除指定值的元素，删除成功返回true，失败返回false
    remove(ele){
        //1.判断集合中是否存在相同的元素
        if(!this.has(ele)){
            return false;
        }
        //2.如果存在再删除
        delete this.items[ele];
        return true;
    }
    //has(ele):集合中包含指定值的元素返回true，不包含返回false
    has(ele){
        return this.items.hasOwnProperty(ele);
    }
    //clear():清空集合
    clear(){
        this.items = {};
    }
    //size():返回集合的元素个数
    size(){
        return Object.keys(this.items).length;
    }
    //values():返回集合所有元素值的数组
    values(){
        return Object.keys(this.items);
    }

    //union(set):并集，返回原集合与另一个集合的并集的新集合
    union(set){
        //1.创建一个新集合
        let union = new Set();
        //2.将原集合的数据添加到新集合中
        for(let s in this.items){
            union.add(s);
        }
        //3.将另一个集合的数据添加到新集合中,由于add操作本身就有去重的的效果，所以直接添加即可
        for(let s in set.items){
            union.add(s);
        }
        //4.返回这个新集合
        return union;
    }

    //intersection(set):交集,返回两个集合的交集元素形成的新集合
    intersection(set){
        //1.创建一个新集合
        let intersection = new Set();
        //2.将原集合转成一个数组来遍历
        this.values().forEach(val => {
            //3.对于每一个原集合的元素，判断传入的集合是否包含这个元素，如果包含则添加到新集合中
            if(set.has(val)){
                intersection.add(val);
            }
        });
        //4.返回新集合
        return intersection;
    }

    //difference(set):差集,返回原集合有，传入集合没有的部分的新集合
    difference(set){
        //1.创建一个新集合
        let difference = new Set();
        //2.创建原集合的数组形式，遍历数组
        this.values().forEach(val => {
            //3.对于原集合中的每一个元素，如果传入集合不包含包含该元素则添加到新集合中
            if(!set.has(val)){
                difference.add(val);
            }
        });
        //4.返回新集合
        return difference;
    }

    //subset(set):子集,返回原集合是否是传入集合的子集，是返回true，否返回false
    subset(set){
         //1.创建一个新集合
         let subset = new Set();
         //2.创建元集合的数组形式，使用every遍历原集合，如果每一个元素都被传入集合包含，则最终结果是true
         return this.values().every(val => {
             if(set.has(val)) return true;
         });
    }
}

module.exports = Set;

//使用
/* let s = new Set();
s.add('r');
s.add('g');
s.add(5);
console.info(s.values());
s.remove('g');
s.remove('g');
console.info(s.values());
console.info(s.size());
s.clear();
console.info(s.size()); */

/* let s1 = new Set();
s1.add('r');
s1.add('g');
s1.add(5);
let s2 = new Set();
s2.add('r');
s2.add('h');
s2.add(7);
let s3 = new Set();
s3.add('r');
s3.add('g');
s3.add('e');
s3.add(7);
s3.add(5);
console.info(s1.union(s2).values());
console.info(s1.intersection(s2).values());
console.info(s1.difference(s2).values());
console.info(s1.subset(s2));
console.info(s1.subset(s3)); */