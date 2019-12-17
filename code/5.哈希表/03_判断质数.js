//判断参数是否为一个质数
//质数：在大于1的自然数中,除了1和自身不能被别的数整除的整数
let isPrime = num => {
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

//使用
console.info(isPrime(0));
console.info(isPrime(1));
console.info(isPrime(2));
console.info(isPrime(25));
console.info(isPrime(25));