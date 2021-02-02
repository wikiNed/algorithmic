//面向对象编程
interface BookType {
    title: string;
    page: number;
}

class Book implements BookType {
    title = undefined;
    page = undefined;

    constructor(title, page) {
        this.title = title;
        this.page = page;
    }

    printPage() {
        console.log(this.page)
    }
}

let book1 = new Book('day1', 1);
// book1.printPage();
book1.page = 2;
// book1.printPage();

//函数的继承
class ITBook extends Book {
    price: number;

    constructor(title, page, price) {
        super(title, page);
        this.price = price;
    }

    printPrice() {
        console.log(this.price);
    }
}

let itBook = new ITBook('OOD', 200, 100);
// itBook.printPage();
// itBook.printPrice();

//属性存取器使用
class Person {
    _name: string;

    constructor(name) {
        //非真正的私有属性
        this._name = name;
    }

    get name() {
        return this._name
    }

    set name(val) {
        this._name = val;
    }
}

let p1 = new Person('wk');
console.log(p1.name);
p1.name = 'xyn';
console.log(p1.name);
p1._name = 'wlx';
console.log(p1.name);











