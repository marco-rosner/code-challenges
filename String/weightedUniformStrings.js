/*
 * Complete the 'weightedUniformStrings' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER_ARRAY queries
 */

function weightedUniformStrings(s, queries) {
    // Write your code here
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'

    let str = s.split('')
    let uniform = ''
    // let weightResult = []
    const weightMap = new Map()
    let currentWeight = 0

    for (let i = 0; i < str.length; i++) {
        if (uniform && uniform[0] === str[i]) {
            uniform = uniform + str[i]
            currentWeight += alphabet.indexOf(str[i]) + 1 // weight[`${str[i]}`]
        } else {
            currentWeight = alphabet.indexOf(str[i]) + 1 // weight[`${str[i]}`]
            uniform = str[i]
        }

        // weightResult.push(currentWeight)
        weightMap.set(currentWeight, currentWeight)
    }

    // return queries.map((val) => weightResult.includes(val) ? 'Yes' : 'No')
    return queries.map((val) => weightMap.get(val) ? 'Yes' : 'No')
}

console.log(weightedUniformStrings('abbcccdddd', [1, 7, 5, 4, 15]))