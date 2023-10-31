/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
    // Write your code here
    const max = Math.max(...candles)
    let numMax = 0

    for(let i=0;i<candles.length;i++){
        if(max == candles[i]) numMax++
    }

    return numMax
}

console.log(birthdayCakeCandles([3,2,1,3]))