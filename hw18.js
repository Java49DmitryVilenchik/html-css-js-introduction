
function isAn(str1,str2) {
    let res=true;
    if (str1.length!=str2.length) {res=false;}
    else {

    let ar1=Array.from(str1.toLowerCase());
    let ar2=Array.from(str2.toLowerCase());

    

    let A1={};
    

    
        ar1.forEach(element => {
            if (A1[element]) {A1[element]++}
            else {A1[element]=1}          

        });
        ar2.forEach(element => {
            if (A1[element] && A1[element]>0) {A1[element]--;}
            else {res=false;}

        });
        
    } 
    
    return res;
}
console.log(isAn("yelllw","welloy"));
console.log(isAn("yellow","wellly"));
console.log(isAn("yellw","welloy"));

console.log(isAn("yellow","welloy"));
console.log(isAn("YelLow","wEllOy"));

