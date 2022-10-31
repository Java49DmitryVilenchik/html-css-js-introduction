function fromNumberToString (number, base) {
    number=Math.abs(number);
    res="";
    do {
        let digit=number%base;
        res=digit+res;
        number=Math.trunc(number/base);
    }while(number!=0);
    return res;
}
function fromNumberToHex (number, base) {
    number=Math.abs(number);
    res="";
    do {
        let digit=number%base;
        if (digit==10) digit="A";
        if (digit==11) digit="B";
        if (digit==12) digit="C";
        if (digit==13) digit="D";
        if (digit==14) digit="E";
        if (digit==15) digit="F";
        res=digit+res;
        number=Math.trunc(number/base);
    } while(number!=0);
    return res;
}
function fromStringToNumber(str,base) {
    let res=0;
    for (let i=0; i<str.length;i++) {
        let code = str[i]=="0" ? 0: 1;
        res=res*base+code;
    }
    return res;
}
function fromStringHexToNumber(str,base) {
    let res=0;
    for (let i=0; i<str.length;i++) {
        if (str[i]=="0") code=0;
        if (str[i]=="1") code=1;
        if (str[i]=="2") code=2;
        if (str[i]=="3") code=3;
        if (str[i]=="4") code=4;
        if (str[i]=="5") code=5;
        if (str[i]=="6") code=6;
        if (str[i]=="7") code=7;
        if (str[i]=="8") code=8;
        if (str[i]=="9") code=9;
        if (str[i]=="A") code=10;
        if (str[i]=="B") code=11;
        if (str[i]=="C") code=12;
        if (str[i]=="D") code=13;
        if (str[i]=="E") code=14;
        if (str[i]=="F") code=15;
        if (str[i]=="G") code=16;
        if (str[i]=="H") code=17;
        if (str[i]=="I") code=18;
        if (str[i]=="J") code=19;
        if (str[i]=="K") code=20;
        if (str[i]=="L") code=21;
        if (str[i]=="M") code=22;
        if (str[i]=="N") code=23;
        if (str[i]=="O") code=24;
        if (str[i]=="P") code=25;
        if (str[i]=="Q") code=26;
        if (str[i]=="R") code=27;
        if (str[i]=="S") code=28;
        if (str[i]=="T") code=29;
        if (str[i]=="U") code=30;
        if (str[i]=="V") code=31;
        if (str[i]=="W") code=32;
        if (str[i]=="X") code=33;
        if (str[i]=="Y") code=34;
        if (str[i]=="Z") code=35;

        res=res*base+code;
    }
    return res;
}

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

//console.log(fromNumberToString(10,2));
//console.log(fromNumberToHex(255,16));
// console.log(fromStringToNumber("1010",2));

console.log(fromStrToNum("JAVA",36));
console.log(fromStrToNum("1010",2));
console.log(fromStrToNum("ReAcT",36));
console.log(fromNumToStr(10,2));
console.log(fromNumToStr(900550,36));
console.log(fromNumToStr(46016237,36));
// console.log('1'.charCodeAt(0)); //--49
// console.log(String.fromCharCode(77)); //--M
