/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinusFunctional(arr) {
    // Write your code here
    const result = arr.reduce((acc, cur) =>
        cur > 0 ? { ...acc, pos: acc.pos + 1, } :
            cur < 0 ? { ...acc, neg: acc.neg + 1 } :
                { ...acc, neutro: acc.neutro + 1 }
        , { pos: 0, neg: 0, neutro: 0 }
    )

    console.log((result.pos / arr.length).toFixed(6))
    console.log((result.neg / arr.length).toFixed(6))
    console.log((result.neutro / arr.length).toFixed(6))
}

plusMinusFunctional([1, 1, 0, -1, -1]) // 0.4 0.4 0.2
plusMinusFunctional([-4, 3, -9, 0, 4, 1]) // 0.5 0.333 0.166