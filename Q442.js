var findDuplicates = function (nums) {
    let arr = []
    let dup = []

    for (let i = 0; i < nums.length; i++) {
        if(arr.includes(nums[i])){
            dup.push(nums[i])
        }else{
            arr.push(nums[i])
        }
    }

    return dup
};
console.log(findDuplicates([1]))
console.log(findDuplicates([1,1,2]))
console.log(findDuplicates([1,2,3,4,2,1,5,6]))