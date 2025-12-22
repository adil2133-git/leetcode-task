var conatinsDuplicate = function(nums){
    const duplicate = {}
    for(let num of nums){
        if(duplicate[num]){
            return true
        }
        duplicate[num] = 1;
    }
    return false
}
console.log(conatinsDuplicate([1,2,4,5,1]))
console.log(conatinsDuplicate([1,2,4,5]))
