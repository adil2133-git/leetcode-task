// Return an array of indices representing the words that contain the character x.

// Input: words = ["leet","code"], x = "e"
// Output: [0,1]


var findWordsContaining = function(words, x) {
    let result = [];
    let len = words.length;
    for(let i=0;i<len;i++){
        let arr = words[i].split("");
        if(arr.includes(x)){ 
            result.push(i)
        }
    }

    return result;
};
console.log(findWordsContaining(["leet","code","this","there"],"e"));