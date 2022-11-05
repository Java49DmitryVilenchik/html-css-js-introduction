function CheckSymbolsArray (str) {
    let arr=Array.from(str);
    let res=true;
    function checkSymbols(element, array) {
        let symb=(element>='0' && element<='9') ? res=true : res=false;        
    }
    arr.forEach(checkSymbols);
    if (arr.length!=9) {res=false;}

    return res;
}

function ArrayConv (Arr) {
    let ArrConv=Arr.map(function(symbol, index) {        
        let s=+symbol;
    if (index%2!=0) {s=s*2;    
    if (s>9) {s-=9}}
    return s;
    });

    return ArrConv;
}

function CheckSum (Arr) {
    let sum=Arr.reduce(function(res, cur) {
        return res+cur;
      },0);

    return sum;  
}

function checkTeudatZehut(teudatStrNumber) {
    let check=true;
    if (CheckSymbolsArray(teudatStrNumber)==false) {check=false;}
    
    let Arr=ArrayConv(Array.from(teudatStrNumber));
    let sum=CheckSum(Arr);
    
    return check=(sum%10==0);
}
function generateRandomArray_1_9(leng) {
    let Ar=Array.from(Array(leng).keys());
    let Arr=Ar.map(function randomArray(symbol, index) {
        symbol=(Math.round(Math.random() * 9))+'';
        return symbol;
    });
    return Arr;
}

function generateRandomTeudZehut() {
    let Arr=generateRandomArray_1_9(8);
    let Arr1=ArrayConv(Arr);

    let s=CheckSum(Arr1);    
    Arr[8]=(s%10==0) ? 0 : 10-(s % 10);    
    return Arr.join('');    
}

console.log(checkTeudatZehut("232572453")); //true
console.log(checkTeudatZehut("123456782")); //true
console.log(checkTeudatZehut("qwNbHryh!")); //false
console.log(checkTeudatZehut("123456781")); //false
console.log(checkTeudatZehut("-23456781")); //false
console.log(checkTeudatZehut("6781")); //false
console.log(checkTeudatZehut("6781335423242442432")); //false

console.log(generateRandomTeudZehut());

console.log(checkTeudatZehut(generateRandomTeudZehut()));
console.log(checkTeudatZehut("814811410"));
