class MySet{
    constructor() {
        this.items={};
    }

    has(ele){
        //m1
        // return element in this.items;
        //m2
        return Object.prototype.hasOwnProperty.call(this.items,ele);
    }

    add(ele){
        if( !this.has(ele) ){
            this.items[ele] = ele;
            return true
        }
        return false
    }

    delete(ele){
        if( this.has(ele) ){
            delete this.items[ele];
            return true
        }
        return false
    }

    clear(){
        this.items = {}
    }

    size(){
        return Object.keys(this.items).length;
    }

    values(){
        return Object.values(this.items);
    }
    //取并集
    union(otherSet){
        const unSet = new Set();
        this.values().forEach(item=>{unSet.add(item)});
        otherSet.values().forEach(item=>{unSet.add(item)});
        return unSet;
    }
    //取交集
    intersection(otherSet){
        //m1
        // const interSet = new Set();
        // console.time('2');
        // this.values().forEach(item=>{
        //     if( otherSet.has(item) ){
        //         interSet.add(item);
        //     }
        // });
        // console.timeEnd('2');
        // return interSet

        //m2 比对长度来减小迭代次数
        const interSet = new Set();
        let [shortSet,longSet] = this.size() >= otherSet.size() ? [otherSet,this] : [this,otherSet];
        console.time('1');
        shortSet.values().forEach(item=>{
            if( longSet.has(item) ){
                interSet.add(item);
            }
        });
        console.timeEnd('1');
        return interSet;
    }

    //取差集
    diff(otherSet){
        let diffSet = new Set();
        let [shortSet,longSet] = this.size() >= otherSet.size() ? [otherSet,this] : [this,otherSet];
        shortSet.values().forEach(item=>{
            if( !otherSet.has(item) ){
                diffSet.add(item)
            }
        });
        return diffSet;
    }

    //是否为子集
    isSub(otherSet){
        if( this.size()<= otherSet.size() ){
            let isSub = true;
            this.values().every(item=>{
                if( !otherSet.has(item) ){
                    isSub = false;
                    return false
                }
                return true;
            });
            return isSub;
        }
        return false
    }

}
let set1 = new MySet();
set1.add(1);
set1.add(3);
// console.log(set1.values());

let set2 = new MySet();
set2.add(3);
set2.add(4);
set2.add(5);
// console.log(set1.union(set2));
// console.log(set1.intersection(set2));
/**
 * js Set类
 */
let set3 = new Set();
set3.add(1);
set3.add(3);
let set4 = new Set();
set4.add(3);
set4.add(6);
set4.add(9);

console.log(new Set([...set3,...set4]));
console.log(new Set([...set3].filter(item=>{return set4.has(item)})));
console.log(new Set([...set3].filter(item=>{return !set4.has(item)})));














