/*
 * Complete the 'alternatingCharacters' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function alternatingCharacters(s) {
    // Write your code here
    let char = s[0]
    let deletions = 0

    for(let i=0;i<s.length;i++) {
        char === s[i+1] ? deletions++ : char = s[i+1]
    }

    return deletions
}

console.log(alternatingCharacters('AAAA'))
console.log(alternatingCharacters('BBBBB'))
console.log(alternatingCharacters('ABABABAB'))
console.log(alternatingCharacters('BABABA'))
console.log(alternatingCharacters('AAABBB'))