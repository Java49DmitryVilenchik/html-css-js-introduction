
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
            if (A1[element]) {A1[element]--; if (A1[element]<0) {res=false;}}
            else {res=false;}

        });
        
    } 
    
    return res;
}

function isAn2(str1,str2) {
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

        let index=0;
        while (index<ar2.length && res==true) {
            if (A1[ar2[index]]==undefined) {res=false;}
            else {A1[ar2[index]]--; index++;}
        }        
    }     
    return res;
}


console.log(isAn("yelllw","welloy"));
console.log(isAn("yellow","wellly"));
console.log(isAn("yellw","welloy"));
console.log(isAn("sun","sub"));

console.log(isAn("yellow","welloy"));
console.log(isAn("YelLow","wEllOy"));

console.log(isAn2("yellow","welloy"));
console.log(isAn2("yellw","welloy"));
console.log(isAn2("sun","sub"));