var validAnagram = function(s,t){
    let freq = {}

    for(let i=0;i<s.length;i++){
        let char = s[i]

        if(freq[char]){
            freq[char]++
        }else{
            freq[char] = 1
        }
    }

    for(let j=0;j<t.length;j++){
        let char = t[j]

        if(!freq[char]){
            return false
        }else{
            freq[char]--
        }
    }
    return true
}
console.log(validAnagram("anagram","nagaram"))
console.log(validAnagram("car","bus"))
console.log(validAnagram("everything","little"))