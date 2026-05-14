var findThePrefixCommonArray = function (A, B) {
    let C = []

    for (let i = 0; i < A.length; i++) {
        let count = 0

        for (let j = 0; j <= i; j++) {

            for (let k = 0; k <= i; k++) {
                if (A[j] === B[k]) {
                    count++
                    break;
                }
            }


        }
        C.push(count)
    }
    return C
};
console.log(findThePrefixCommonArray([1, 3, 2, 4], [3, 1, 2, 4]))

// Input: A = [1,3,2,4], B = [3,1,2,4]
// Output: [0,2,3,4]
// Explanation: At i = 0: no number is common, so C[0] = 0.
// At i = 1: 1 and 3 are common in A and B, so C[1] = 2.
// At i = 2: 1, 2, and 3 are common in A and B, so C[2] = 3.
// At i = 3: 1, 2, 3, and 4 are common in A and B, so C[3] = 4.