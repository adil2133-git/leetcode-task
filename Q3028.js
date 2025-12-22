var antBoundary = function(nums){
    let position = 0;
    let count = 0;

    for(let i=0;i<nums.length;i++){
        position += nums[i]
        if(position === 0){
            count++
        }
    }
    return count
}

console.log(antBoundary([2,5,-7,2,3,-5,1]))