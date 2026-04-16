let arrayStringsAreEqual = function(word1, word2){
    let str1 = ""
    let str2 = ""

    for(let i=0;i<word1.length;i++){
        str1 += word1[i]
    }

    for(let i=0;i<word2.length;i++){
        str2 += word2[i]
    }

    return str1 === str2
}
console.log(arrayStringsAreEqual(["a","bc"],["ab","c"]))
console.log(arrayStringsAreEqual(["a","cb"],["ab","c"]))