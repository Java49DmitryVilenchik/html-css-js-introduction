function sumDigits(number) {
    if (number<0) {number=-number};
    if (number%1!=0) {
        
        do {          
          number=number*10;
        } while (number%1!=0)
        
    }
    let sum=0;
    do {
        let i=number % 10;
        sum+=i;
        number=Math.trunc(number/10);
    }while(number!=0);
    return sum;
}


console.log(sumDigits(624));
console.log(sumDigits(-123));
console.log(sumDigits(0));
console.log(sumDigits(-12.3467));
console.log(sumDigits(12.3467));
console.log(sumDigits(-0.23573));

