function sumDigits(number) {
    if (number<0) {number=-number};
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
