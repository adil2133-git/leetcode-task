var reverseWords = function(s) {
    let arr = s.split(" ")
    let reverseWord = arr.map(element => element.split("").reverse().join(""))
    return reverseWord.join(" ");
};

console.log(reverseWords("Leet Code"))