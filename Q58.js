var lengthOfLastWord = function(str){
    let arr = str.trim().split(" ")
    let lastWord = arr[arr.length-1]
    let result = lastWord.length
    return result
}

console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("   fly me   to   the moon  "))
console.log(lengthOfLastWord("luffy is still joyboy"))

