var averageValue = function(nums) {
    let sum = 0;
    let count = 0;

    for(let i=0;i<nums.length;i++){
        if(nums[i]%3===0 && nums[i]%2===0){
            sum += nums[i]
            count++
        }
    }
    if(count === 0) return 0
    return sum/count
}

console.log(averageValue([1,3,6,10,12,15]))
console.log(averageValue([1,2,4,7,10]))