var decompressRLElist = function(nums) {
    let result = []

    for(let i=0;i<nums.length;i+=2){
        let count = nums[i]
        let value = nums[i+1]
        for(let j=0;j<count;j++){
            result.push(value)
        }
    }
    return result
}
console.log(pair([1,2,3,4])) // 2,4,4,4
console.log(pair([1,1,2,3])) // 1,3,3