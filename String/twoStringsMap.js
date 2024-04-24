/*
 * Complete the 'twoStrings' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

function twoStringsMap(s1, s2) {
    // Write your code here
    const s2Map = new Map(s2.split('').map(char => [char, char]))

    for (let i = 0; i < s1.length; i++) {
        if (s2Map.get(s1[i])) return 'YES'
    }

    return 'NO'
}

console.log(twoStringsMap('hello', 'world'))
console.log(twoStringsMap('hi', 'world'))