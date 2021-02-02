//构造函数写法
function Book(title, page) {
    this.title = title;
    this.page = page;
}

Book.prototype.printTitle = function () {
    console.log(this.title)
};

//类写法
class Book1 {
    constructor(title, page) {
        this.title = title;
        this.page = page;
    }

    printTitle() {
        console.log(this.title);
    }
}
















