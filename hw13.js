function checkTeudatZehut(teudatStrNumber) {
    let teudaArrNumber=Array.from(teudatStrNumber);

    function checkSymbols(element, array) {
        let symb=(element>='0' && element<='9') ? true : false;
        if (symb==false) {return false;}
    }
    teudaArrNumber.forEach(checkSymbols);
    if (teudaArrNumber.length!=9) {return false;}

    let teudaArrNumber1=teudaArrNumber.map(function(symbol, index) {
        let s=symbol.charCodeAt(0)-48;
    if (index%2!=0) {s=s*2;
    if (s/10>=1) {let s1=s%10; let s2=Math.trunc(s/10); s=s1+s2}}
    return s;
    });

    let sum=teudaArrNumber1.reduce(function(res, cur) {
        return res+cur;
    },0);

    let check=(sum % 10==0) ? true : false;
    return check;
}
console.log(checkTeudatZehut("123456782")); //true
console.log(checkTeudatZehut("123456781")); //false
console.log(checkTeudatZehut("-23456781")); //false
console.log(checkTeudatZehut("6781")); //false
console.log(checkTeudatZehut("6781335423242442432")); //false
