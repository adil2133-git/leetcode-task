var differenceOfSums = function(n, m) {
    let nondivisible = 0
    let divisible = 0
    for(let i=1;i<=n;i++){
        if(i%m===0){
            divisible += i
        }else{
            nondivisible += i
        }
    }
    return nondivisible - divisible
};

console.log(differenceOfSums(10,3))