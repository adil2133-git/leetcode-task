var checkIfPangram = function(sentence) {
    let freq = {}
    let count = 0

    for(let i=0;i<sentence.length;i++){
        let letter = sentence[i]
        if(freq[letter]){
            freq[letter]++
        }else{
            freq[letter] = 1
            count++
        }
    }
    return count === 26
};
console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"))
console.log(checkIfPangram("leetcode"))