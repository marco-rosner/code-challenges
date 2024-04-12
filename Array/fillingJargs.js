/*
 * Complete the 'solve' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY operations
 */

function solve(n, operations) {
    // Write your code here
    let total = 0

    for (let i = 0; i <= operations.length - 1; i++) {
        let start = operations[i][0] - 1
        let end = operations[i][1] - 1

        total += (end - start + 1) * operations[i][2]
    }

    return Math.floor(total / n)
}

console.log(solve(5, [[1, 2, 100], [2, 5, 100], [3, 4, 100]]))
