//栈--后进先出
class Stack {
    constructor() {
        this.count = 0;
        this.items = {};
    }

    push(ele) {
        this.items[this.count] = ele;
        this.count++;
    }

    size() {
        return this.count;
    }

    isEmpty() {
        return this.count === 0;
    }

    pop() {
        if (this.isEmpty()) {
            return undefined
        }
        this.count--;
        let result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }

    peek() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.count - 1];
    }

    clear() {
        this.count = 0;
        this.items = {};
    }

    toString(){
        if( this.isEmpty() ){
            return ''
        }
        let str = `${this.items[0]}`;
        for (let i = 1; i < this.count; i++) {
            str = `${str},${this.items[i]}`;
        }
        return str;
    }
}

//test
let arr1 = new Stack();
arr1.push(10);
arr1.push(20);
arr1.push(30);
console.log(arr1);
arr1.pop();
console.log(arr1);
console.log(arr1.peek());
console.log(arr1.toString());

//进制转化
function baseConvert(decNumber, base) {
    const remStack = new Stack();
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let number = decNumber;
    let rem;
    let baseStr = '';

    if( base < 2 || base > 36){
        return false
    }
    while (number > 0){
        rem = Math.floor(number%base);
        remStack.push(rem);
        number = Math.floor(number/base);
    }
    while( !remStack.isEmpty() ){
        baseStr += digits[remStack.pop()];
    }
    return baseStr;
}
// console.log(baseConvert(13545, 10));
// console.log(baseConvert(13545, 25));














