var sumZero = function (n) {
    let arr = []

    if (n % 2 !== 0) {
        arr.push(0)
    }

    for (let i = 1; arr.length < n; i++) {
        arr.push(i)
        arr.push(-i)
    }
    return arr
};

console.log(sumZero(5))
console.log(sumZero(6))