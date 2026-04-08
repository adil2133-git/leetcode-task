var sumOfTheDigitsOfHarshadNumber = function(x) {
    let num = x
    let digitSum = 0
    while(num>0){
        let digit = num % 10
        digitSum += digit
        num = Math.floor(num / 10)
    }

    for(let i=1;i<=x;i++){
        if(x % i === 0 && i === digitSum){
            return digitSum
        }
    }
    return -1
};
console.log(sumOfTheDigitsOfHarshadNumber(18))
console.log(sumOfTheDigitsOfHarshadNumber(23))
console.log(sumOfTheDigitsOfHarshadNumber(21))
console.log(sumOfTheDigitsOfHarshadNumber(12))
console.log(sumOfTheDigitsOfHarshadNumber(111))