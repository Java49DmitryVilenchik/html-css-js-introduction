import { Library } from "./data/library.js";
import { bookForm, bookForm } from "./ui/bookForm.js";
import { showErrorMessage } from "./ui/errorMessage.js";


const MIN_PAGE = 50;
const MAX_PAGE = 2000;
const MIN_YEAR = 1980;

const ACTIVE = "active"
const library = new Library();

const bookForm=new bookForm({idForm: "book_form", idDateInput: "date_input", idPageInput: "page_input", 
    idDateError: "date_error", idPageError: "page_error", minPage: MIN_PAGE, maxPage: MAX_PAGE, minYear: MIN_YEAR});

bookForm.addSubmitHandler((book) => library.hireBook(book));

//const dateErrorElement = document.getElementById("date_error");
//const pageErrorElement = document.getElementById("page_error");
const pageFormErrorElement = document.getElementById("page_form_error");
const booksListElement = document.getElementById("books-all");
const bookAuthorListElement=document.getElementById("book-author");
const bookPageListElement = document.getElementById("book-pages");
const sectionsElement = document.querySelectorAll("section");
const buttonsMenuElement = document.querySelectorAll(".buttons-menu *");
/************************************************************************** */
//functions of Book Form


/************************************************************* */
//functions of Library

/********************************************************************************** */


let author='';
function onSubmitAuthor(event) {
    event.preventDefault();
    
    const books=library.getAuthorBooks(author);   
    bookAuthorListElement.innerHTML=getBookItems(books);
    console.log(books);
}
function onChangeAuthor(event) {
    const value=event.target.value;
    if (value!='') {author=value;}
    
}

let pageFrom = 50;
let pageTo = 2000;
function onSubmitPage(event) {
    event.preventDefault();
    const books = library.getBooksByPage(pageFrom, pageTo);
    bookPageListElement.innerHTML = getBookItems(books); 
    console.log(books);//--
}
function onChangePagesFrom(event) {
    const value = +event.target.value;
    if (pageTo && value >= pageTo) {
        showErrorMessage(event.target, "Page number 'From' must be less than Page number 'To'",
        pageFormErrorElement);
    } else {
        pageFrom = value;
    }
}
function onChangePagesTo(event) {
    const value = +event.target.value;
    if (pageFrom && value < pageFrom) {
        showErrorMessage(event.target, "Page number 'To' must be greater than Page number 'From'",
        pageFormErrorElement);
    }
    pageTo = value;
}
function showSection(index) {
    buttonsMenuElement.forEach(e => e.classList.remove(ACTIVE)); 
    sectionsElement.forEach(e => e.hidden = true); 
    buttonsMenuElement[index].classList.add(ACTIVE);
    sectionsElement[index].hidden = false;
    if (index == 1) {
        const books = library.getAllBooks();
        booksListElement.innerHTML = getBookItems(books);
    }
}
function getBookItems(books) {
    return books.map (e => 
        `<li class="books-item">
              <div class="books-item-container">
                 <p class="books-item-paragraph">Title: ${e.book_title} </p>
                 <p class="books-item-paragraph">Author: ${e.author} </p>
                 <p class="books-item-paragraph">Genre: ${e.genre}</p>
                 <p class="books-item-paragraph">Publishdate: ${e.publishDate}</p>
                 <p class="books-item-paragraph">Page: ${e.page}</p>
              </div>
          </li>`).join('');
}


window.showSection=showSection;
window.onChangePagesTo=onChangePagesTo;
window.onChangePagesFrom=onChangePagesFrom;
window.onSubmitPage=onSubmitPage;
window.onSubmitAuthor=onSubmitAuthor;
window.onChangeAuthor=onChangeAuthor;
