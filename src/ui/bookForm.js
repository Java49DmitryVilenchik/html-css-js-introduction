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
    
} 