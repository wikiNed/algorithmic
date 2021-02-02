import {LinkList} from '../4-链表/链表'
/**
 * 字典以【键、值】保存
 * 数组以【值、值】保存
 */
function defaultToString(item) {
    if( item === null ){
        return 'NUll';
    }else if( item === undefined ){
        return 'UNDEFINED';
    }else if( typeof item === 'string' || item instanceof String){
        return `${item}`
    }
    return item.toString();
}

/**
 * map
 */
const map1 = new Map();
map1.set('wk','handsome');
map1.set('xyn','beautiful');
// console.log(map1.has('wk'));
// console.log(map1.keys());
// console.log(map1.values());
// console.log(map1.entries());
//键值对
class ValuePair{
    constructor(key,value) {
        this[key] = value;
    }
}

class HashTableChaining{
    constructor(toStr = defaultToString()) {
        this.toStr = toStr;
        this.table = {};
    }

    loseloseHashCode(key){
        if( typeof key === 'number'){
            return key
        }
        const tableKey = this.toStr(key);
        let hash = 0;
        for (let i = 0, length = tableKey.length; i < length; i++) {
            hash += tableKey.charCodeAt(i);
        }
        return  hash%37;
    }

    hashCode(key){
        return this.loseloseHashCode(key);
    }

    put(key,value){
        if( key !== null &&　value !== null ){
            const pos = this.hashCode(key);
            if( this.table[pos] == null ){
                this.table[pos] = new LinkList();
            }
            this.table[pos].push(new ValuePair(key,value));
        }
    }

    remove(key){
        const pos = this.hashCode(key);
        const linkList = this.table[pos];
        if( linkList !== null && !linkList.isEmpty() ){
            let current = linkList.getHead();
            while ( current !== null){
                if( current.element === key ){
                    linkList.remove(current.element);
                    if( linkList.isEmpty() ){
                        delete this.table[pos];
                    }
                    return true;
                }
                current = current.next;
            }
            return false;
        }
    }
}
let table = new HashTableChaining();
table.put('wukun','18');
table.put('xinyinuo','18');
table.put('wsdsad','18');
console.log(table);










