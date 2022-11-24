function createRandomEmployees(nEmployees, idDigits, 
    minSalary, maxSalary) {

        let Employees=["Vasya","Ivan","Boris","Michel","Sara","Nataly"]
        let salary=Math.floor(Math.random()*(maxSalary-minSalary))+minSalary;
        let ArrId=generateArrayRandomId(nEmployees, idDigits);
        


        let res=[];
        ArrId.forEach(function(e){
            res.push(createEmployee(Employees[Math.floor(Math.random()*6)]+e, randomDate('02/13/2001', '01/01/1970') , 
            Math.floor(Math.random()*(maxSalary-minSalary))+minSalary));   
        })
        
        return res;
}

function generateArrayRandomId(empl, digit) {
    let arr = []
    let rundomnumber;
    let min=Math.pow(10, digit-1)
    let max=0;
    let ind=digit;
    while (ind>0) {
        ind--;
        max=max+(9*Math.pow(10, ind));
    }

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

function randomDate(date1, date2){
    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }
    var date1 = date1 || '01-01-1970'
    var date2 = date2 || new Date().toLocaleDateString()
    date1 = new Date(date1).getTime()
    date2 = new Date(date2).getTime()
    if( date1>date2){
        return new Date(getRandomArbitrary(date2,date1)).toLocaleDateString()   
    } else{
        return new Date(getRandomArbitrary(date1, date2)).toLocaleDateString()  

    }
}

console.log(createRandomEmployees(5,4,5000,15000));
