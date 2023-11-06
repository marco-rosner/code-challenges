/*
 * Complete the 'gemstones' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING_ARRAY arr as parameter.
 */

function gemstones(arr) {
    // Write your code here
    let lessChar = arr.sort((a,b) => a.length - b.length) 
    lessChar = Array.from(new Set(lessChar[0]))
    let count = 0
    
    for (let i = 0; i < lessChar.length; i++){
        if(arr.every(str => str.includes(lessChar[i]))) count++
    }

    return count
}

console.log(gemstones(['abcdde', 'baccd', 'eeabg']))