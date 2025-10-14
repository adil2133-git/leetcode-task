var isPalindrome = function(x) {
    let str = x.toString();
    let reversed = str.split("").reverse().join("");
    return str === reversed;
};
console.log(isPalindrome(121))
console.log(isPalindrome(123))
console.log(isPalindrome(1331))