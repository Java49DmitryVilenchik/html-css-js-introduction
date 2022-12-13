import { showErrorMessage } from "./errorMessage.js";
export class bookForm {

    #formElement;
    #inputElements;
    #dateInputElement;
    #pageInputElement;
    #dateErrorElement;
    #pageErrorElement;
    #minPage;
    #maxPage;
    #minYear;
    #maxYear;
    constructor(params) {
        this.#formElement=document.getElementById(params.idForm);
        this.#inputElements=document.querySelectorAll(`#${params.idForm}[name]`);
        this.#dateInputElement=document.getElementById(params.idDateInput);
        this.#pageInputElement=document.getElementById(params.idPageInput);
        this.#dateErrorElement=document.getElementById(params.idDateError);
        this.#pageErrorElement=document.getElementById(params.idPageError);
        this.#minPage=params.minPage;
        this.#maxPage=params.maxPage;
        this.#minYear=params.minYear;
        this.#maxYear=getMaxYear();
        this.onChange();
    }
    addSubmitHandler(processBookFan) {
        this.#formElement.addEventListener("submit", (event) =>{        
        event.preventDefault();
        console.log("!!! submitted !!!");
        const book = Array.from(this.#inputElements).reduce(
            (res, cur) => {
                res[cur.name] = cur.value;
                return res;
            }, {}
        )
        
        console.log(book);
        processBookFan(book);
    })  
    }

    onChange() {
        this.#dateInputElement.addEventListener("change", (event) =>{
            this.validatePublishDate(event.target);
        })
        this.#pageInputElement.addEventListener("change", (event) =>{
            this.validatePage(event.target);
        })
    }

    validatePage(element) {
        const value = +element.value;
        if (value < this.#minPage || value > this.#maxPage) {
            const message = value < this.#minPage ? `number pages must be ${this.#minPage} or greater`
                : `number pages must be ${this.#maxPage} or less`;
            showErrorMessage(element, message, this.#pageErrorElement);
        }
    
    }
    validatePublishDate(element) {
        const value = +element.value.slice(0, 4);
        if (value < this.#minYear || value > this.#maxYear) {
            const message = value < this.#minYear ? `year must be ${this.#minYear} or greater`:
                 `year must be ${this.#maxYear} or less`;
            showErrorMessage(element, message, this.#dateErrorElement);    
    
        }
    
    }
}
function getMaxYear() {
    return new Date().getFullYear();
} 