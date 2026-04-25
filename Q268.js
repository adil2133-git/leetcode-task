var missingNumber = function(nums){
    // let missing;

    // for(let i=0;i<nums.length + 1;i++){
    //     if(!nums.includes(i)){
    //         missing = i
    //     }
    // }
    // return missing

    let n = nums.length
    let expected = n*(n+1)/2
    let actual = 0

    for(let i=0;i<n;i++){
        actual += nums[i]
    }
    return expected - actual
}




console.log(missingNumber([3,0,1]))
console.log(missingNumber([0,1]))
console.log(missingNumber([9,6,4,2,3,5,7,0,1]))