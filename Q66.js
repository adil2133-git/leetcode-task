var plusone = function (digits) {

    let arr = [...digits]

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === 9) {
            arr[i] = 0
        } else {
            arr[i] = arr[i] + 1
            return arr
        }
    }
    arr.unshift(1);
    return arr;
}

console.log(plusone([1, 2, 3]))
console.log(plusone([4, 3, 2, 1]))
console.log(plusone([9]))
console.log(plusone([9,9,9]))