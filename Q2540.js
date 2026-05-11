// var getCommon = function(nums1, nums2){

//     for(let i=0;i<nums1.length;i++){
//         for(let j=0;j<nums2.length;j++){
//             if(nums1[i] === nums2[j]){
//                 return nums1[i]
//             }
//         }
//     }

//     return -1 
// }

var getCommon = function(nums1, nums2) {
    let i=0
    let j=0

    while(i<nums1.length && j<nums2.length){
        if(nums1[i] === nums2[j]){
            return nums1[i]
        }

        if(nums1[i] < nums2[j]){
            i++
        }else{
            j++
        }
    }
    return -1
};

console.log(getCommon([1,2,3],[2,4]))
console.log(getCommon([1,2,3,6],[2,3,4,5]))