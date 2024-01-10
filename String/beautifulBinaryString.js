/*
 * Complete the 'beautifulBinaryString' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING b as parameter.
 */

function beautifulBinaryString(b) {
    // Write your code here
    let moves = 0
    let length = b.length

    if(length < 3) return 0

    for(let i=0;i<length;i++) {
        if(b[i] === '0' && b[i+1] === '1' && b[i+2] === '0') {
            moves++
            i = i+2
        }
    }

    return moves
}

console.log(beautifulBinaryString('01100'))
console.log(beautifulBinaryString('0100101010'))