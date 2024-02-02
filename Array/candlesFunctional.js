/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
    // Write your code here
    return candles.reduce((acc, c) => Math.max(...candles) == c ? acc+1 : acc, 0)
}

console.log(birthdayCakeCandles([3,2,1,3])) // 2