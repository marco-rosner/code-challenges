/*
 * Complete the 'twoStrings' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

function twoStrings(s1, s2) {
    // Write your code here
    // for(let i=0; i<s1.length; i++) {
    //     for(let ind=0; ind<s2.length; ind++) {
    //         if(s1[i].charCodeAt(0) === s2[ind].charCodeAt(0)) return 'YES'
    //     }
    // }
    let length = s1.length
    for(let i=0; i<length; i++) {
        if(s2.includes(s1[i])) return 'YES'
    }

    return 'NO'
}

console.log(twoStrings('hello', 'world'))
console.log(twoStrings('hi', 'world'))