var findGcd = function(arr){
    let largest = arr[0]
    let smallest = arr[0]

    for(let i=1;i<arr.length;i++){
        if(largest < arr[i]){
            largest = arr[i]
        }else if(smallest > arr[i]){
            smallest = arr[i]
        }
    }
    
    for(let i=smallest;i>0;i--){
        if(smallest % i===0 && largest % i===0){
            return i
        }
    }
}
console.log(findGcd([4,3,7,3,2,7,9,10,6]))
console.log(findGcd([3,3]))
console.log(findGcd([7,5,6,8,3]))