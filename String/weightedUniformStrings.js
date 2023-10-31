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
    const weight = { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10, 'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18,
        's': 19, 't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26 }
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'

    let str = s.split('')
    let uniform = ''
    let weightResult = []
    let currentWeight = 0

    for(let i=0; i<str.length;i++) {
        if(uniform && uniform[0] === str[i]) {
            uniform = uniform + str[i]
            currentWeight += alphabet.indexOf(str[i]) + 1 // weight[`${str[i]}`]
            
        } else {
            currentWeight = alphabet.indexOf(str[i]) + 1 // weight[`${str[i]}`]
            uniform = str[i]
        }

        weightResult.push(currentWeight)
    }

    return queries.map((val) => weightResult.includes(val) ? 'Yes' : 'No')
}

console.log(weightedUniformStrings('abbcccdddd', [1,7,5,4,15]))