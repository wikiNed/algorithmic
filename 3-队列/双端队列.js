//双端队列 先进先出 后进后出
class Deque{
    constructor() {
        this.count = 0;
        this.lowCount = 0;
        this.items = {};
    }

    isEmpty(){
        return this.count === this.lowCount;
    }

    clear(){
        this.count = 0;
        this.lowCount = 0;
        this.items = {};
    }

    size(){
        if( this.isEmpty() ){
            return 0
        }
        return this.count-this.lowCount;
    }

    toString(){
        if( this.isEmpty() ){
            return undefined
        }
        let str = `${this.items[this.lowCount]}`;
        for( let i = this.lowCount+1;i<this.count;i++){
            str = `${str},${this.items[i]}`;
        }
        return str;
    }

    addBack(ele){
        this.items[this.count] = ele;
        this.count++;
    }

    removeFront(){
        if( this.isEmpty() ){
            return undefined
        }
        let result = this.items[this.lowCount];
        delete this.items[this.lowCount];
        this.lowCount++;
        return  result;
    }

    removeBack(){
        if( this.isEmpty() ){
            return undefined
        }
        let result = this.items[this.count-1];
        delete this.items[this.count-1];
        this.count--;
        return  result;
    }

    peekFront(){
        if( this.isEmpty() ){
            return undefined
        }
        return this.items[this.lowCount];
    }

    peekBack(){
        if( this.isEmpty() ){
            return undefined
        }
        return this.items[this.count-1];
    }

    addFront(ele){
        if( this.isEmpty() ){
            this.addBack(ele);
        }else if( this.lowCount > 0 ){
            this.items[this.lowCount -1 ] = ele;
            this.lowCount--;
        }else{
            for(let i = this.count -1;i>=0;i--){
                this.items[i+1] = this.items[i];
            }
            this.items[0] = ele;
            this.count++;
        }
    }
}
let arr1 = new Deque();
// arr1.addBack(2);
// arr1.addFront(3);
// console.log(arr1.toString());
// arr1.removeFront();
// console.log(arr1);
/**
 * 双端队列判断是否回文
 * @param str
 * @returns {boolean}
 */
function reCheck(str) {
    if( str === undefined || str===null || str.length === 0 ){
        return false
    }
    let deque = new Deque();
    let lowerCaseStr = str.toLowerCase().split(' ').join('');
    for(let i=0;i<lowerCaseStr.length;i++){
        deque.addBack(lowerCaseStr.charAt(i));
    }
    let equal = true;
    while (deque.size()>1 &&　equal){
        let firstChar = deque.removeFront();
        let lastChar = deque.removeBack();
        if( firstChar !== lastChar ){
            equal = false
        }
    }
    return equal;
}
console.log(reCheck('sHahsa'));















