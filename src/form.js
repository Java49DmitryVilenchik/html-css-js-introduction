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
            event.target.value=''
           do {event.target.value= prompt("You must input coorect salary: more 999 and less 40000!!!!", '1000');}
           while (event.target.value<1000 || event.target.value>40000);
        }
    }
}