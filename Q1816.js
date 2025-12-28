var truncate = function(s,k) {
    let arr = s.split(" ")

    let result = arr.slice(0,k)
    return result.join(" ")
}

console.log(truncate("Hello how are you Contestant",4))
console.log(truncate("What is the solution to this problem",4))