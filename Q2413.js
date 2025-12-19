var smallestEvenMultiple = function(n) {
    for(let i=1;i<=150;i++){
        if(i%n===0 && i%2===0){
            return i;
        }
    }
}

console.log(smallestEvenMultiple(77))