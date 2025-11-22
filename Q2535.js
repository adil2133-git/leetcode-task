var differenceOfSum = function(nums) {
    let elementSum = 0;
    let digitSum = 0;

    for(i=0;i<nums.length;i++){
        elementSum += nums[i]
    let digits = nums[i].toString()
    for(j=0;j<digits.length;j++){
        digitSum += Number(digits[j])
    }
    }

    return elementSum - digitSum
};

console.log(differenceOfSum([1,2,21,3]))