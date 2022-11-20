function an(string1,string2) {
    let ar1=Array.from(string1);
    let ar2=Array.from(string2);

    let A1={};
    let A2={};

    if (ar1.length==ar2.length) {
        return true;
    }
    else {return false;}

}

function preobr(ar1,ar2) {
    let A1={};
    let A2={};
    
    ar1.forEach(element => {
        if (A1[element]) {A1[element]++}
        else {A1[element]=1}        
    });

    ar1.forEach(element => {
        if (A2[element]) {A2[element]++}
        else {A2[element]=1}        
    });

    A1a=Object.entries(A1);
    A2a=Object.entries(A2);
    
    //console.log(A1a[1][1]-A2a[1][1]);
    let res=A1a.reduce(function(e){
        //e=e[1]-A2a[1];
        
        return e[1]-A2a.e[1];
    })
    return res;
}

console.log(preobr(Array.from("yellow"),Array.from("welloy")));

