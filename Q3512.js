var minOperations = function (nums, k) {
    let sum = 0

    for(let num of nums){
        sum += num
    }

    return sum % k
    
};
console.log(minOperations([3, 9, 7], 5))