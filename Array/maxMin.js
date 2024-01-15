/*
 * Complete the 'maxMin' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY arr
 */

function maxMin(k, arr) {
    // Write your code here
    arr.sort((a, b) => a - b)

    // const temp = []

    // for (let i = 0; i < k; i++) {
    //     temp[i] = arr[i]
    // }

    // return Math.max(...temp) - Math.min(...temp)

    let min = Number.POSITIVE_INFINITY

    for(let i=0;i<arr.length-(k-1);i++){
        min = Math.min(min, arr[i+k-1] - arr[i])
    }

    return min
}

console.log(maxMin(4, [1, 2, 3, 4, 10, 20, 30, 40, 100, 200]))
console.log(maxMin(3, [10, 100, 300, 200, 1000, 20, 30]))
console.log(maxMin(8, [6327,
    571,
    6599,
    479,
    7897,
    9322,
    4518,
    571,
    6677,
    7432,
    815,
    6920,
    4329,
    4104,
    7775,
    5708,
    7991,
    5802,
    8619,
    6053,
    7539,
    7454,
    9000,
    3267,
    6343,
    7165,
    4095,
    439,
    5621,
    4095,
    153,
    1948,
    1018,
    6752,
    8779,
    5267,
    2426,
    9649,
    2190,
    9103,
    7081,
    3006,
    2376,
    7762,
    3462,
    151,
    3471,
    1453,
    2305,
    8442]))