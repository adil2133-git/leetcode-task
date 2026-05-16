var majorityElement = function(nums){
    let freq = {}

    for(let i=0;i<nums.length;i++){
        let num = nums[i]

        if(freq[num]){
            freq[num]++
        }else{
            freq[num] = 1
        }
    }

    let result = 0
    let maxCount = 0
    for(let key in freq){
        if(freq[key] > maxCount){
            maxCount = freq[key]
            result = key
        }
    }
    return Number(result)
}
console.log(majorityElement([1,2,1,2,2,2,1]))
console.log(majorityElement([2,2,1,1,1,2,2]))
console.log(majorityElement([3,2,3]))
