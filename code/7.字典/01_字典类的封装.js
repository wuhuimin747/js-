// 字典类的封装
class Dictionary{
    // 字典属性
    constructor(){
        this.items = {};
    }
    // 字典操作方法
    // set(key, value)在字典中添加键值对
    set(key, value) {
        this.items[key] = value;
    }

    // has(key)判断字典中是否有某个key
    has(key) {
        return this.items.hasOwnProperty(key);
    }

    // remove(key)从字典中移除元素
    remove(key) {
        // 1.判断字典中是否有这个key
        if (!this.has(key)) return false;

        // 2.从字典中删除key
        delete this.items[key];
        return true;
    }

    // get(key)根据key去获取value
    get(key) {
        return this.has(key) ? this.items[key] : undefined;
    }

    // keys()获取所有的keys
    keys() {
        return Object.keys(this.items);
    }

    // value() 获取所有的value
    value() {
        return Object.values(this.items);
    }

    // size() 返回字典的条目数
    size() {
        return this.keys().length;
    }

    // clear()清空字典
    clear() {
        this.items = {};
    }
}

module.exports = Dictionary;

/* // 创建字典对象
var dict = new Dictionary()

// 在字典中添加元素
dict.set("age", 18)
dict.set("name", "Coderwhy")
dict.set("height", 1.88)
dict.set("address", "广州市")

// 获取字典的信息
alert(dict.keys()) // age,name,height,address
alert(dict.values()) // 18,Coderwhy,1.88,广州市
alert(dict.size()) // 4
alert(dict.get("name")) // Coderwhy

// 字典的删除方法
dict.remove("height")
alert(dict.keys())// age,name,address

// 清空字典
dict.clear() */