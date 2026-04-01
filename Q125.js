var isPalindrome = function(s) {
    let string = s.toLowerCase().replace(/[^a-z0-9]/g,'');

    let reversed = string.split("").reverse().join("")

    return string === reversed
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))
console.log(isPalindrome(" "))  