var restoreString = function(s, indices){
    let str = ""

    for(let i=0;i<indices.length;i++){
        for(let j=0;j<s.length;j++){
            if(i === indices[j]){
                str += s[j]
            }
        }
    }
    return str
}
console.log(restoreString("codeleet",[4,5,6,7,0,2,1,3]))