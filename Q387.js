function indexChar(str){
    for(let i=0;i<str.length;i++){
        let isUnique = true
        for(let j=0;j<str.length;j++){
            if(i !== j && str[i] === str[j]){
                isUnique = false
                break
            }
        }
        if(isUnique){
            return i
        }
    }
    return -1
}
console.log(indexChar("leetcode"))
console.log(indexChar("loveleetcode"))
console.log(indexChar("aabb"))