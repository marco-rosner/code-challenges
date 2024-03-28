/*
 * Complete the 'beautifulPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY A
 *  2. INTEGER_ARRAY B
 */

function beautifulPairs(A, B) {
    // Write your code here
    let counter = 0;

    for (let i = 0; i < A.length; i++) {
        const INDEX = B.indexOf(A[i]);

        if (INDEX !== -1) {
            counter++;
            B.splice(INDEX, 1);
        }
    }

    return B.length ? counter + 1 : counter - 1;
}

console.log(beautifulPairs([3, 5, 7, 11, 5, 8], [5, 7, 11, 10, 5, 8]))