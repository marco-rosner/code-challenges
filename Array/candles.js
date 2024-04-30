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

    const start = performance.now()
    for (let i = 0; i < candles.length; i++) {
        if (max == candles[i]) numMax++
    }
    const end = performance.now()

    console.log('for >', numMax, end - start)

    return numMax
}

const birthdayCakeCandlesReduce = (candles) => {
    const max = Math.max(...candles)
    let numMax

    const start1 = performance.now()
    numMax = candles.reduce((acc, cur) => max == cur ? acc + 1 : acc, 0)
    const end1 = performance.now()

    console.log('reduce >', numMax, end1 - start1)
    return numMax
}

console.log(birthdayCakeCandles([3, 2, 1, 3]))
console.log(birthdayCakeCandlesReduce([3, 2, 1, 3]))