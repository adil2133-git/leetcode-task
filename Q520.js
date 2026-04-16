var detectCapital = function(word){
    let caps = word.toUpperCase()
    let small = word.toLowerCase()
    let first = ""

    for(let i=0;i<word.length;i++){
        if(i === 0){
            first += word[0].toUpperCase()
        }else{
            first += word[i].toLowerCase()
        }
    }


    if(caps === word || small === word || first === word){
        return true
    }else{
        return false
    }
}
console.log(detectCapital("FlaG"))
console.log(detectCapital("USA"))
console.log(detectCapital("leetcode"))
console.log(detectCapital("Google"))