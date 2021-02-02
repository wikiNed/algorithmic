//队列--先进先出
class Queue{
    constructor() {
        this.count = 0;
        this.lowCount = 0;
        this.items = {};
    }

    size(){
        return this.count - this.lowCount;
    }

    isEmpty(){
        return this.size() === 0;
    }

    enqueue(item){
        this.items[this.count] = item;
        this.count++;
    }

    dequeue(){
        if( this.isEmpty() ){
            return undefined
        }
        const result = this.items[this.lowCount];
        delete this.items[this.lowCount];
        this.lowCount++;
        return result;
    }

    peek(){
        if( this.isEmpty() ){
            return undefined
        }
        return this.items[this.lowCount];
    }

    clear(){
        this.count = 0;
        this.lowCount = 0;
        this.items = {};
    }

    toString(){
        if( this.isEmpty() ){
            return '';
        }
        let str = `${this.items[this.lowCount]}`;
        for (let i = this.lowCount+1; i < this.count ; i++ ){
            str = `${str},${this.items[i]}`;
        }
        return str;
    }
}
//test
// let arr1 = new Queue();
// arr1.enqueue(10);
// arr1.enqueue(20);
// arr1.enqueue(30);
// console.log(arr1);
// arr1.dequeue();
// console.log(arr1);
// console.log(arr1.peek());
// console.log(arr1.toString());
/**
 * queue先进先出 模拟击鼓传花
 * @param list （参与队列）
 * @param num (传递数量)
 */
function test(list,num) {
    let queue = new Queue();
    let loser = [];

    for(let i=0;i<list.length;i++){
        queue.enqueue(list[i]);
    }

    while(queue.size()>1){
        for(let i=0;i<num;i++){
            queue.enqueue(queue.dequeue());
        }
        console.log(`loser:${queue.dequeue()}`);
    }
    console.log(`winner:${queue.dequeue()}`);
}

let list = ['wk','xyn','22','zz','wc'];
test(list,6);













