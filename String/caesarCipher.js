/*
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s, k) {
    // Write your code here
    const a_limit = 97
    const z_limit = 122
    const A_limit = 65
    const Z_limit = 90
    const result = s.split('')
    const rotate = k%26

    for(let i=0; i<s.length; i++) {
        let code = s[i].charCodeAt(0)
        let codeRotated = 0

        if(code >= a_limit && code <= z_limit) {
            if((z_limit - rotate) < code) {
                let rotateMore = code - (z_limit - rotate)
                codeRotated = z_limit - (26 - rotateMore)
            } else {
                codeRotated = code + rotate
            }

            result[i] = String.fromCharCode(codeRotated)
        } else if(code >= A_limit && code <= Z_limit) {
            if((Z_limit - rotate) < code) {
                let rotateMore = code - (Z_limit - rotate)
                codeRotated = Z_limit - (26 - rotateMore)
            } else {
                codeRotated = code + rotate
            }

            result[i] = String.fromCharCode(codeRotated)
        } else {
            result[i] = s[i]
        }
    }

    return result.join('')
}

console.log(caesarCipher("There's-a-starman-waiting-in-the-sky", 3))
// console.log(caesarCipher("y", 3))
console.log(caesarCipher("Ciphering.", 26))