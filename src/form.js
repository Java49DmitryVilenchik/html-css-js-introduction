const inputElements = document.querySelectorAll(".form-class [name]");
const MIN_SALARY = 1000;
const MAX_SALARY = 40000;
const MIN_YEAR = 1950;
const maxYear = getMaxYear();
const TIME_OUT_ERROR_MESSAGE = 5000;
const ERROR_CLASS = "error";
const company = new Company();

const dateErrorElement = document.getElementById("date_error");
const salaryErrorElement = document.getElementById("salary_error");
const generalsButtons = document.querySelector(".generals-buttons");
const formClass= document.querySelector(".form-class");

const ulElement=document.querySelector(".list-employees");
const sectionElements = document.querySelectorAll(".list");

const elementName=document.querySelector(".element-name");
const elementSalary=document.querySelector(".element-salary");
const elementAge=document.querySelector(".element-age");

//ulElement.innerHTML = getEmployes();
//function getEmployes() {
//    let allEmp=company.employees;
//    const RES=allEmp.map(element =>
//        elementName.innerHTML=element.employee_name
//        );
//        return RES.join('');
//}
//function show(index) {
//    sectionElements.forEach(section => section.hidden = true);
//    sectionElements[index].hidden = false;
//}
function showAllEmployes(event) {    
    event.preventDefault();
    console.log(company.getAllEmployees()); 

    elementName.innerHTML=company.getAllEmployees()[0].employee_name;
    //sectionElements.forEach(section => section.hidden = true);
    //sectionElements.hidden = false;    
}

function closeFormAddEmployee(event) {
    formClass.style.display='none';
    event.target='';
    generalsButtons.style.display='block';
}

function addEmployee(event) {
    formClass.style.display='block';
    event.target='';
    generalsButtons.style.display='none';
}

function onSubmit(event) {
    event.preventDefault();
    console.log("submitted");
    const employee = Array.from(inputElements).reduce(
        (res, cur) => {
            res[cur.name] = cur.value;
            return res;
        }, {}
    )
    console.log(employee)
    company.hireEmployee(employee);
    console.log(company);

    return company;
    
}
function onChange(event) {

    if (event.target.name == "salary") {
        validateSalary(event.target)
    } else if (event.target.name == "birthDate") {
        validateBirthdate(event.target);
    }
}
function validateSalary(element) {
    const value = +element.value;
    if (value < MIN_SALARY || value > MAX_SALARY) {
        const message = value < MIN_SALARY ? `salary must be ${MIN_SALARY} or greater`
            : `salary must be ${MAX_SALARY} or less`;
        showErrorMessage(element, message, salaryErrorElement);
    }

}
function validateBirthdate(element) {
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
function Company() {
    this.employees = [];
}
Company.prototype.hireEmployee = function(employee) {
    this.employees.push(employee);
}
Company.prototype.getAllEmployees = function(){
    return this.employees;
}
Company.prototype.getEmployeesBySalary = function(salaryFrom, salaryTo) {
    //TODO
}
