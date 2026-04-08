var subtractProductAndSum = function(num){
    let sum = 0
    let product = 1;

    while(num > 0){
        let digit = num  % 10
        num = Math.floor(num / 10) 
        sum += digit
        product *= digit
    }
    
    
    let result = product - sum;

    return result
}
console.log(subtractProductAndSum(234))