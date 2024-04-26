/*
 * Complete the 'isFibo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts LONG_INTEGER n as parameter.
 */

function isFibo(n) {
    // Write your code here
    if (n === 0 || n === 1) return 'IsFibo'
    if (n < 0) return 'IsNotFibo'

    let fibo = [0, 1]
    let currentNum = 0
    let i = 1

    while (true) {
        currentNum = fibo[i - 1] + fibo[i]

        if (currentNum === n) return 'IsFibo'

        if (currentNum > n) return 'IsNotFibo'

        fibo.push(currentNum)
        i++
    }
}

console.log(isFibo(5))
console.log(isFibo(7))
console.log(isFibo(8))