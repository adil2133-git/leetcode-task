var commonFactors = function(a,b) {
    count = 0;
    for(i=1; i<= Math.min(a,b); i++){
        if(a%i===0 && b%i===0){
            count++
        }
    }
    return count
}

console.log(commonFactors(12,6))