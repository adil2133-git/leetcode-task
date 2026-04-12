var sortedSquares = function(nums) {
    let squares = []

    for(let i=0;i<nums.length;i++){
        squares.push(nums[i] * nums[i])
    }

    for(let i=0;i<squares.length;i++){
        for(let j=0;j<squares.length-1;j++){
            if(squares[j] > squares[j+1]){
                let temp = squares[j]
                squares[j] = squares[j+1]
                squares[j+1] = temp
            }
        }
    }

    return squares
};
console.log(sortedSquares([-4,-1,0,3,10]))