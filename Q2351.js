var repeatedCharacter = function(s) {
    let arr = s.split("")
    let freq = {}
    for(let i=0;i<arr.length;i++){
        const char = arr[i]
        
        if(freq[char]){
            return char
        }else{
            freq[char] = 1
        }
    }
};

console.log(repeatedCharacter("abcbac"))
console.log(repeatedCharacter("cbadeabc"))