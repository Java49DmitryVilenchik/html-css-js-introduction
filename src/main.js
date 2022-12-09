import { Library } from "./data/library.js";
const inputElements = document.querySelectorAll(".form-class [name]");
const MIN_PAGE = 50;
const MAX_PAGE = 2000;
const MIN_YEAR = 1980;
const maxYear = getMaxYear();
const TIME_OUT_ERROR_MESSAGE = 2000;
const ERROR_CLASS = "error";
const ACTIVE = "active"
const library = new Library();

const dateErrorElement = document.getElementById("date_error");
const pageErrorElement = document.getElementById("page_error");
const pageFormErrorElement = document.getElementById("page_form_error");
const booksListElement = document.getElementById("books-all");
const bookAuthorListElement=document.getElementById("book-author");
const bookPageListElement = document.getElementById("book-pages");
const sectionsElement = document.querySelectorAll("section");
const buttonsMenuElement = document.querySelectorAll(".buttons-menu *");
/************************************************************************** */
//functions of Book Form
function onSubmit(event) {
    event.preventDefault();
    console.log("submitted");
    const book = Array.from(inputElements).reduce(
        (res, cur) => {
            res[cur.name] = cur.value;
            return res;
        }, {}
    )
    console.log(book)
    library.hireBook(book);
    
}
function onChange(event) {

    if (event.target.name == "page") {
        validatePage(event.target)
    } else if (event.target.name == "publishDate") {
        validatePublishDate(event.target);
    }
}
function validatePage(element) {
    const value = +element.value;
    if (value < MIN_PAGE || value > MAX_PAGE) {
        const message = value < MIN_PAGE ? `number pages must be ${MIN_PAGE} or greater`
            : `number pages must be ${MAX_PAGE} or less`;
        showErrorMessage(element, message, pageErrorElement);
    }

}
function validatePublishDate(element) {
    const value = +element.value.slice(0, 4);
    if (value < MIN_YEAR || value > maxYear) {
        const message = value < MIN_YEAR ? `year must be ${MIN_YEAR} or greater`:
             `year must be ${maxYear} or less`;
        showErrorMessage(element, message, dateErrorElement) ;    

    }

}
function showErrorMessage(element, message, errorElement) {
    element.classList.add(ERROR_CLASS);
    errorElement.innerHTML = message;
    setTimeout(() => {
        element.classList.remove(ERROR_CLASS);
        element.value = ''; 
        errorElement.innerHTML = '';
    }, TIME_OUT_ERROR_MESSAGE);
}

function getMaxYear() {
    return new Date().getFullYear();
}
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
    bookPageListElement.innerHTML = getBookItems(books); //getElementById("book-pages");
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

window.onChange=onChange;
window.showSection=showSection;
window.onChangePagesTo=onChangePagesTo;
window.onChangePagesFrom=onChangePagesFrom;
window.onSubmitPage=onSubmitPage;
window.onSubmitAuthor=onSubmitAuthor;
window.onChangeAuthor=onChangeAuthor;
window.onSubmit=onSubmit;