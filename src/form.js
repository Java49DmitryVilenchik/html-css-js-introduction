const inputElements=document.querySelectorAll(".form-class [name]");
const modalWindow=document.getElementById("myModal");

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
        let current_year=new Date().getFullYear();

        if (year[0]<1950 || year[0]>current_year) {            
            
            modalWindow.style.display='block';
            event.target.value=''
            setTimeout(function(){modalWindow.style.display='none';}, 5000);
        }
    }
}
