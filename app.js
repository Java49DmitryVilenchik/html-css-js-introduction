let ar=[];
ar[10000]=100;
ar[1]=[1,2,3];
console.log("length of array", ar.length);
ar[0]='hello';
console.log("10000-th element = ", ar[10000]);
console.log("0 element = ", ar[0]);
console.log("1 element= ",ar[1]);
let str="Hello";
let arStr=Array.from(str); //H, e, l, l, o -array
console.log(arStr);
// not good
//for (let i=0; i<arStr.length;i++) {
//    console.log("element at index ", i, arStr[i]);
//}
// not good
function printLn(element, index, array) {
    console.log("element at index ", index, element);
}
arStr.forEach(printLn);
let arCodeAscii=arStr.map(function(symbol, index) {
    return index % 2==0 ? symbol.charCodeAt() : symbol;
})
console.log(arStr, arCodeAscii);

let sumAscii = arStr.reduce(function(res, cur) {
    return res+cur.charCodeAt();
},0);
console.log("sum of ascii ", sumAscii);
console.log(arStr.reduce(function(res, cur) {
return res + cur;
}, ""));

function checkTZ(STRtzNumber) {
    //
    //control sum for even index digit value, for odd index digt*2
    //control sum should be divided on 10 with no reminder
    // exmple 123456782 => 1+4+3+8+5 (6*2=12 1+2=3)+3+7+7+2 =40 -ok 
    // 123456783 => false 1+4+3+8+5+3+7+7+3 =41
}
function generateRandomTeudZehut() {
    //
    //returns string of 9 symbols matching checkTeudatZehut
    //make 8 random digits from 0 to 9
    //9-th symbol should be with accord of mathin
    //to get random : Math.round(Math.random() * 9)

}