var findMaxK = function(nums) {
    let num = -1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0 && nums.includes(-nums[i])) {
            num = Math.max(num, nums[i]);
        }
    }

    return num;
};
console.log(findMaxK([-1,2,-3,3]))
console.log(findMaxK([-1,10,6,7,-7,1]))