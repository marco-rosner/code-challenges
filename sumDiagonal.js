/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    let sumD1 = 0, sumD2 = 0;
    
    for(let i=0; i<arr.length; i++) {
        for(let ind=0;ind<arr.length; ind++) {
            if(i==ind)  sumD1 = arr[i][ind] + sumD1;
        }
        sumD2 = arr[i][arr.length-1-i] + sumD2;
    }

    return Math.abs(sumD1-sumD2);
}

console.log(diagonalDifference([[1,2,3], [4,5,6], [7,8,9]])) // 15 - 15 = 0