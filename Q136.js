var singleNumber = function(nums){
    let freq = {}

    for(let i=0;i<nums.length;i++){
        let num = nums[i]
        if(freq[num]){
            freq[num]++
        }else{
            freq[num] = 1
        }
    }

    for(let key in freq){
        if(freq[key] === 1){
            return Number(key)
        }
    }
}

console.log(singleNumber([2,2,1]))
console.log(singleNumber([4,1,2,1,2]))
console.log(singleNumber([1]))