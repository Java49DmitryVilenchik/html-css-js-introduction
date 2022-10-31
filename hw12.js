
function fromStrToNum (str,base) {
    let res=0;
    for (let i=0; i<str.length;i++) {
        let s=str[i].charCodeAt(0);
        if (s>=48 && s<=57) { code=s-48;}
        if (s>=65 && s<=90) { code=s-55;}
        if (s>=97 && s<=122) { code=s-87;}
        
        res=res*base+code;  
    }
    return res;

}

function fromNumToStr (num,base) {
    num=Math.abs(num);
    res="";
    do {
        let digit=num%base;

        if (digit>=10) {digit=String.fromCharCode(digit+55);}
        
        res=digit+res;
        num=Math.trunc(num/base);
    } while(num!=0);
    return res;
}

console.log(fromStrToNum("JAVA",36));
console.log(fromStrToNum("1010",2));
console.log(fromStrToNum("ReAcT",36));
console.log(fromStrToNum("10110011011011",2));
console.log(fromStrToNum("ff",16));

console.log(fromNumToStr(10,2));
console.log(fromNumToStr(900550,36));
console.log(fromNumToStr(46016237,36));
console.log(fromNumToStr(11483,2));
console.log(fromNumToStr(255,16));
