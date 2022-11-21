
function isAn(str1,str2) {
    let ar1=Array.from(str1);
    let ar2=Array.from(str2);

    let res=true;

    let A1={};
    

    if (ar1.length!=ar2.length) {res=false;}
    else {
        ar1.forEach(element => {
            if (A1[element]) {A1[element]++}
            else {A1[element]=1}          

        });
        ar2.forEach(element => {
            if (A1[element]) {A1[element]--;}
            else {res=false;}                
        });
        
    } 
    
    return res;
}
console.log(isAn("yelllw","welloy"));
console.log(isAn("yellow","wellly"));
console.log(isAn("yellw","welloy"));

console.log(isAn("yellow","welloy"));
