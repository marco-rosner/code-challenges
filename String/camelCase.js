/*
 * Complete the 'camelcase' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */
function camelcase(s) {
    // Write your code here
    let word = 1

    for(let i=0; i<s.length; i++) s[i] === s[i].toUpperCase() && word++

    return word
}

console.log(camelcase('saveChangesInTheEditor'))