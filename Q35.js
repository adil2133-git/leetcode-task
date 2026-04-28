var searchInsert = function(nums, target){
    
    for(let i=0;i<nums.length;i++){
        if(nums[i] === target){
            return i
        }else if(nums[i] > target){
            return i
        }else if(nums[i] < target && i === nums.length - 1){
            return i + 1
        }
    }
}

console.log(searchInsert([1,3,5,6],5))
console.log(searchInsert([1,3,5,6],2))
console.log(searchInsert([1,3,5,6],7))