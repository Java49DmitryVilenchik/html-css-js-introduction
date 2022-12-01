const inputElements=document.querySelectorAll(".form-class [name]");


function onSubmit(event) {
    event.preventDefault();
    console.log("submitted");
    const employee=Array.from(inputElements).reduce((res, cur) =>
    { res[cur.name]=cur.value;
      return res;  
    }, {})
    console.log(employee);
}
function onChange(event) {
    if (event.target.name == "salary") {
        if (+event.target.value<1000 || +event.target.value>40000) {
            event.target.value='';

           do {event.target.value= prompt("You must input coorect salary: more 999 and less 40000!!!!", '1000');}
           while (event.target.value<1000 || event.target.value>40000);
        }
    }
}
function onSelectDate(event) {
    if (event.target.name == "birthDate") {
        let year=(event.target.value).split("-");

        if (year[0]<1950 || year[0]>2022) {            
            event.target.value='';


        }
    }
}
function Message(text, value1, value2, value_def, res) {
    if (res<value1 || res>value2) {
        res=confirm(text,value_def);
        setTimeout(res=value_def, 2000);
    }
}