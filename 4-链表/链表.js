//对比节点是否相同
function defaultEquals(a,b) {
    return a===b;
}
//节点
class Node {
    constructor(element) {
        this.element = element;
        this.next = undefined;
    }
}
/**
 * 链表结构
 * 1.node.next指向下一个node
 * 排列是无需重新迭代生成
 */
export class LinkList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }

    isEmpty(){
        return this.count ===0;
    }

    getHead(){
        return this.head;
    }

    size(){
        return this.count;
    }

    toString(){
        if( this.isEmpty() ){
            return undefined
        }
        let current = this.head;
        let str = `${current.element}`;
        for(let i=1;i<this.count;i++){
            current = current.next;
            str =`${str},${current.element}`;
        }
        return str;
    }

    getElementAt(pos){
        if( pos >=0 &&　pos <= this.count ){
            let node = this.head;
            for(let i=0 ; i < pos && node !== null;i++ ){
                node = node.next;
            }
            return node;
        }else{
            return undefined
        }
    }

    push(element){
        const node = new Node(element);
        let current;
        if( this.isEmpty() ){
            this.head = node;
        }else{
            current = this.head;
            while (current.next != null){
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
    }

    indexOf(element){
        if( this.isEmpty() ){
            return -1
        }else{
            let current = this.head;
            for(let i=0;i< this.count && current !==null;i++){
                if( this.equalsFn(current.item,element) ){
                    return i
                }else{
                    current = current.next;
                }
            }
            return -1
        }
    }

    remove(element){
        if( this.isEmpty() ){
            return undefined
        }else{
            let current = this.head;
            let pre;
            for(let i=0;i++;i< this.count){
                if( this.equalsFn(current.item,element) ){
                    if( i === 0 ){
                        this.head = current.next;
                    }else{
                        pre.next = current.next;
                    }
                    this.count--;
                }else{
                    pre = current;
                    current = current.next;
                }
            }
            return undefined
        }
    }

    removeAt(pos){
        if( pos >= 0 && pos < this.count ){
            let current = this.head;
            if( pos === 0 ){
                this.head = current.next;
            }else{
                //method1
                // let pre;
                // for( let i= 0; i<pos; i++){
                //     pre = current;
                //     current = current.next;
                // }
                // pre.next = current.next;
                let pre = this.getElementAt(pos-1);
                let current = pre.next;
                per.next = current.next;
            }
            this.count--;
            return current.item;
        }else{
            return  undefined
        }
    }

    insert(element,pos){
        if( pos >= 0 && pos <= this.count ){
            const node = new Node(element);
            let current = this.head;
            if( pos === 0 ){
                this.head = node;
                node.next = current;
            }else{
                //method1
                // let pre;
                // for( let i= 0; i<pos; i++){
                //     pre = current;
                //     current = current.next;
                // }
                // pre.next = node.next;
                // node.next = current;
                let pre = this.getElementAt(pos-1);
                node.next = pre.next;
                pre.next = node.next;
            }
            this.count++;
            return true;
        }else{
            return false
        }
    }
}

/**
 * 双向链表
 */
//双向节点
class DbNode extends Node{
    constructor(ele,next,pre) {
        super(ele,next);
        this.pre = pre;
    }
}

class DbLinkList extends LinkList{
    constructor(equalsFn = defaultEquals,count,head) {
        super(equalsFn,count,head);
        this.tail = undefined;
    }

    insert(ele,pos){
        if( pos >=0 && pos <= this.count ){
            const node = new DbNode(ele);
            let current = this.head;
            if( pos === 0  ){
                if( this.head == null ){
                    this.head = node;
                    this.tail = node;
                }else {
                    this.head = node;
                    node.next = current.next;
                    current.pre = node;
                }
            }else if(pos === this.count){
                current = this.tail;
                current.next = node;
                node.pre = current;
                this.tail = node;
            }else{
                let pre = this.getElementAt(pos-1);
                current = pre.next;
                pre.next = node;
                node.next = current;
                node.pre = pre;
                current.pre = node;
            }
            this.count++;
            return true
        }
        return false
    }
}



















