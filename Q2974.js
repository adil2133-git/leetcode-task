var numberGame = function (nums) {
    let result = nums

    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result.length - 1; j++) {
            if (result[j] > result[j + 1]) {
                let temp = result[j]
                result[j] = result[j + 1]
                result[j + 1] = temp
            }
        }
    }

    for (let k = 0; k < result.length-1; k += 2) {
            let temp = result[k]
            result[k] = result[k + 1]
            result[k + 1] = temp
    }
    return result
}
console.log(numberGame([5, 4, 2, 3]))