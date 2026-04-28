var checkPerfectNubmer = function(num){
    let sum = 0

    for(let i=1;i<num;i++){
        if(num % i === 0){
            sum += i
        }
    }
    return sum === num
}
console.log(checkPerfectNubmer(28))
console.log(checkPerfectNubmer(10))
console.log(checkPerfectNubmer(7))
console.log(checkPerfectNubmer(2016))