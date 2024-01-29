/*
 * Complete the 'maximumToys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY prices
 *  2. INTEGER k
 */

function maximumToys(prices, k) {
    // Write your code here
    let sum = 0;
    let toys = 0;
    
    prices.sort((a, b) => a - b)

    for (let i = 0; i < prices.length; i++) {
        sum = prices[i] + sum

        if (sum >= k) break

        toys = toys + 1
    }

    return toys
}

console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50))
console.log(maximumToys([1, 2, 3, 4], 7))