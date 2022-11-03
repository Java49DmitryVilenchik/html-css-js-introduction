//function SumEvenNumber(element, array) {
//    let SumEven=0;
//    if (element%2==0) {SumEven=SumEven+element.charCodeAt();}
//}
//arStr.forEach(printLn);
//let arCodeAscii=arStr.map(function(symbol, index) {
//    return index % 2==0 ? symbol.charCodeAt() : symbol;
//})
//console.log(arStr, arCodeAscii);

function StrToArray(strTZ) {
    return Array.from(strTZ);
}
let ArrTZ=StrToArray("123456782");
console.log(ArrTZ);

//function printLn(element, index, array) {  //---//
//    console.log("element at index ", index, element); //---//
//} //---//
//ArrTZ.forEach(printLn); // --- //
let arCodeAscii=ArrTZ.map(function(symbol, index) {
    let s=symbol.charCodeAt(0)-48;
    if (index%2!=0) {s=s*2;
    if (s/10>=1) {let s1=s%10; let s2=Math.trunc(s/10); s=s1+s2}}
    return s;
})
//console.log(ArrTZ, arCodeAscii);
console.log(arCodeAscii);

let sumAscii = arCodeAscii.reduce(function(res, cur) {
    return res+cur;
},0);

console.log("Control sum is ", sumAscii);
let check=(sumAscii % 10==0) ? true : false;
console.log("Check is ",check);

//console.log(ArrTZ.reduce(function(res, cur) {
//return res + cur;
//}, ""));

//function checkTZ(STRtzNumber) {
    //
    //control sum for even index digit value, for odd index digt*2
    //control sum should be divided on 10 with no reminder
    // exmple 123456782 => 1+4+3+8+5 (6*2=12 1+2=3)+3+7+7+2 =40 -ok 
    // 123456783 => false 1+4+3+8+5+3+7+7+3 =41
    
//}
