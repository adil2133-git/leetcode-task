var isThree = function(n) {
    let count = 0
    for(let i=1;i<=n;i++){
        if(n % i === 0){
            count++
        }
    }
     return count === 3
};
console.log(isThree(4))
console.log(isThree(2))
console.log(isThree(9))
console.log(isThree(12))