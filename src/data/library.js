export function Library() {
    this.books = [];
}
Library.prototype.hireBook = function(book) {
    book.page = +book.page;
    this.books.push(book);
}
Library.prototype.getAllBooks = function(){
    return this.books;
}
Library.prototype.getBooksByPage = function(pageFrom, pageTo) {
    return this.books.filter(e => e.page >= pageFrom && e.page < pageTo )
}
Library.prototype.getAuthorBooks = function(a) {
    return this.books.filter(e => e.author==a)
}