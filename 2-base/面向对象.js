var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Book = /** @class */ (function () {
    function Book(title, page) {
        this.title = undefined;
        this.page = undefined;
        this.title = title;
        this.page = page;
    }
    Book.prototype.printPage = function () {
        console.log(this.page);
    };
    return Book;
}());
var book1 = new Book('day1', 1);
// book1.printPage();
book1.page = 2;
// book1.printPage();
//函数的继承
var ITBook = /** @class */ (function (_super) {
    __extends(ITBook, _super);
    function ITBook(title, page, price) {
        var _this = _super.call(this, title, page) || this;
        _this.price = price;
        return _this;
    }
    ITBook.prototype.printPrice = function () {
        console.log(this.price);
    };
    return ITBook;
}(Book));
var itBook = new ITBook('OOD', 200, 100);
// itBook.printPage();
// itBook.printPrice();
//属性存取器使用
var Person = /** @class */ (function () {
    function Person(name) {
        //非真正的私有属性
        this._name = name;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (val) {
            this._name = val;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var p1 = new Person('wk');
console.log(p1.name);
p1.name = 'xyn';
console.log(p1.name);
p1._name = 'wlx';
console.log(p1.name);
