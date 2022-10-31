let strNum1="123";
let strNum2="9";
console.log(strNum1-strNum2); /* 123-9=114 1<9 */
console.log(strNum1+strNum2); /*1239 */
console.log(strNum1>strNum2); //false 
// conversion from string to number
let num1= +strNum1;
let num2= +strNum2;
console.log(num1-num2); 
console.log(num1+num2); 
console.log(num1>num2);
let strNumStr='123ab';
let numStr= +strNumStr;
console.log(numStr); // NaN
let num= parseInt(strNumStr);
console.log(num); // 123
/*if (numStr==NaN) {
    console.log("numStr is NaN");  //it's wrong
}*/
if (isNaN(numStr)) {
    console.log("numStr is NaN");
}
let num10=123;
let strNum10=""+num10;
num10.toString();
let strNum16=num10.toString(16);
console.log(strNum10, strNum16);

//conversion from Morse code to number
// "." -> 0
// "-" -> 1
function fromMorseToNumber(morseCode) {
    let result=0;
    for (let i=0; i<morseCode.length; i++) {
        let code = morseCode[i]=='.' ? 0: 1;
        result = result * 2 + code;
    }
    return result;
}
console.log(fromMorseToNumber("-.-."));
function fromNumberToMorse(number) {
    number=Math.abs(number);
    res="";
    do {
        let digit=number % 2;
        let sym=digit==0 ? '.': '-';
        res=sym+res;
        number=Math.trunc(number/2);
    }while(number !=0);
    return res;
}
console.log(fromNumberToMorse(10));

function fromNumberToString(number, base) {
    // base system ischisle
    //getting code from symbol
    // '0'
    // console.log('0'.charCodeAt(0)); //code ASCI 0 = 48
    console.log('0'.charCodeAt(0));
    // getting symbol from code
    console.log(String.fromCharCode(99));
} 
function fromStringToNumber(string, base) {
    
}