var findWordsContaining = function(words, x) {
    let result = [];
    let len = words.length;
    for(i=0;i<len;i++){
        let arr = words[i].split("");
        if(arr.includes(x)){
            result.push(i)
        }
    }

    return result;
};
console.log(findWordsContaining(["leet","code"],"e"))