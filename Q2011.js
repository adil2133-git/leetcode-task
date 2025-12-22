var finalValueAfterOperations = function(operations){
    let X = 0;

    for(let i = 1;i<=operations.length;i++){
        if(operations[i] == "++X" || operations[i] == "X++"){
            X += 1
        }else{
            X -= 1
        }
    }
    return X;
}

console.log(finalValueAfterOperations(['--X','--X','X--','++X','X++']))