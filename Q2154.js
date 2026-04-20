var findFinalValue = function (nums, original) {
    let result = original

    for (let j = 0; j < nums.length; j++) {
        for (let i = 0; i < nums.length; i++) {
            if (result === nums[i]) {
                result = result * 2
            }
        }
    }
    return result
}
console.log(findFinalValue([5, 3, 6, 1, 12], 3))
console.log(findFinalValue([2, 7, 9], 4))
console.log(findFinalValue([8,19,4,2,15,3], 2))