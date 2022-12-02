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
            
            modalWindow.style.display='block';
            event.target.value='';
            setTimeout(function(){modalWindow.style.display='none';}, 5000);
           
        }
    }
}
function onChangeDate(event) {
    if (event.target.name == "birthDate") {
        let year=(event.target.value).split("-");
        let current_year=new Date().getFullYear();

        if (year[0]<1950 || year[0]>current_year) {            
            
            modalWindow.style.display='block';
            event.target.value='';
            setTimeout(function(){modalWindow.style.display='none';}, 5000);
        }
    }
}
