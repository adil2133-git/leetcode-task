var countEven = function(num){
    let result = 0
    for(let i=1;i<=num;i++){
        let sum = 0
        let value = i
        while(value>0){
            let digit = value % 10
            sum += digit
            value = Math.floor(value / 10)
        }
        if(sum % 2===0){
            result++
        }
    }
    return result
}
console.log(countEven(24))
console.log(countEven(4))
console.log(countEven(30))