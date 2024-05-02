/*
 * Complete the 'chocolateFeast' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER c
 *  3. INTEGER m
 */

function chocolateFeast(n, c, m) {
    // Write your code here
    let packagesBought = Math.floor(n / c)
    let wrappers = packagesBought

    while (wrappers >= m) {
        packagesBought += Math.floor(wrappers / m)
        wrappers = (Math.floor(wrappers / m)) + (wrappers % m)
    }

    return packagesBought
}

console.log(chocolateFeast(10, 2, 5)) // 6
console.log(chocolateFeast(12, 4, 4)) // 3
console.log(chocolateFeast(6, 2, 2)) // 5
console.log(chocolateFeast(7, 3, 2)) // 3
console.log(chocolateFeast(16809, 123, 11668)) // 136