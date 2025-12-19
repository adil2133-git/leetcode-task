const maxDistinct = function(s) {
    return new Set(s).size
}

console.log(maxDistinct('abab'))
console.log(maxDistinct('abcd'))
console.log(maxDistinct('abcddjjffvv'))