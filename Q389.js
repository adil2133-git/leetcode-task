var findTheDifference = function(s, t) {
    let s1 = s.split("")
    let t1 = t.split("")

    for(let i=0;i<t1.length;i++){
        if(s1[i] !== t1[i]){
            return t1[i]
        }
    }
};
console.log(findTheDifference("abcd", "abcde"))
console.log(findTheDifference("", "y"))