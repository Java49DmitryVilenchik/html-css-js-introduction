function createRandomEmployees(nEmployees, idDigits, 
    minSalary, maxSalary, minBirthYear, maxBirthYear) {

        let Employees=["Vasya","Ivan","Boris","Michel","Sara","Nataly"]
        let salary=Math.floor(Math.random()*(maxSalary-minSalary))+minSalary;
        let ArrId=generateArrayRandomId(nEmployees, idDigits);

        let res=[];
        ArrId.forEach(function(e){
            res.push(createEmployee(Employees[Math.floor(Math.random()*6)]+e, randomDate(minBirthYear, maxBirthYear) , 
            Math.floor(Math.random()*(maxSalary-minSalary))+minSalary));   
        })
        
        return res;
}

function generateArrayRandomId(empl, digit) {
    let arr = []
    let rundomnumber;
    let min=Math.pow(10, digit-1);    
    let max=Math.pow(10, digit);    

    while (arr.length <= empl-1) {

    rundomnumber = Math.floor(Math.random()*(max-min))+min; 
    if (arr.indexOf(rundomnumber) == -1) {         

        arr.push(rundomnumber);         

    }
 }    
    return arr;
}

function createEmployee(name, birthYear, salary) {
    return {name, birthYear, salary};
}

//function randomDate(date1, date2){
//    function getRandomArbitrary(min, max) {
//      return Math.random() * (max - min) + min;
//    }
//    var date1 = date1 || '01-01-1970'
//    var date2 = date2 || new Date().toLocaleDateString()
//    date1 = new Date(date1).getTime()
//    date2 = new Date(date2).getTime()
//    if( date1>date2){
//        return new Date(getRandomArbitrary(date2,date1)).toLocaleDateString()   
//    } else{
//        return new Date(getRandomArbitrary(date1, date2)).toLocaleDateString()  

//    }
//}
function randomDate(max, min) {
    return Math.floor(Math.random()*(max-min))+min; 
}
function getAverageAge (Employee) {
    let avg = Employee.reduce((r,i) => r +  i.birthYear, 0) / (Employee.length || 1);
    return  Math.round((new Date()).getFullYear()-avg);
}

function getEmployeesBySalary(Employee, salaryFrom, salaryTo) {
    
    let EmployeesBySalary=Employee.filter(function(em) {
        return ((em.salary>salaryFrom) && (em.salary<salaryTo));        
    });
    return EmployeesBySalary.sort((a, b) => a.salary > b.salary ? 1 : -1);
    
}

function increaseSalary(Employee, borderSalary, percent) {  //forEach!!!!
    let smallSalary=Employee.filter(function(element) {
        return (element.salary<borderSalary);
    });    
    return smallSalary.map((element) => (element.salary*percent)/100+element.salary)
}

let Obj=createRandomEmployees(8,4,5000,25000,2004,1955);
console.log(Obj);
console.log("Average age is:",getAverageAge(Obj));
console.log(getEmployeesBySalary(Obj,9000,14000));
console.log(increaseSalary(Obj,9000,10));