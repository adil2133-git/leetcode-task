var reverseNumber = function(x){
    let reversed = 0;
    let isNegative = x < 0

    x = Math.abs(x)

    while(x > 0){
        let digit = x % 10;
        if(reversed > Math.floor((2**31 - 1) / 10)) return 0;
        reversed = reversed * 10 + digit
        x = Math.floor(x/10)
    }
    return isNegative ? -reversed : reversed;
}
console.log(reverseNumber(-123))
console.log(reverseNumber(123))