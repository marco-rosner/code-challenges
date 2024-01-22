/*
 * Complete the 'twoArrays' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY A
 *  3. INTEGER_ARRAY B
 */

function twoArrays(k, A, B) {
    // Write your code here
    A.sort((a, b) => a - b)
    B.sort((a, b) => a - b).reverse()

    for(let i=0; i<A.length;i++) {
        if(A[i] + B[i] < k) return 'NO'
    }
    
    return 'YES'
}

console.log(twoArrays(10, [2,1,3], [7,8,9]))
console.log(twoArrays(5, [1,2,2,1], [3,3,3,4]))