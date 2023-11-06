/*
 * Complete the 'marsExploration' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function marsExploration(s) {
    // Write your code here
    let errCount = 0

    for(let i=0; i<s.length;i+=3) {
        if(s[i].toUpperCase() != 'S') errCount++
        if(s[i+1].toUpperCase() != 'O') errCount++
        if(s[i+2].toUpperCase() != 'S') errCount++
    }

    return errCount
}

console.log(marsExploration('SOSTOT'))
console.log(marsExploration('SOSSPSSQSSOR'))
console.log(marsExploration('SOSSOT'))
