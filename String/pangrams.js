/*
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s) {
    // Write your code here
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const str = s.toLowerCase()

    for(let i=0;i<str.length;i++){
        alphabet = alphabet.filter((val) => val != str[i])

        if(alphabet.length == 0) return 'pangram'
    }

    return 'not pangram'
}

console.log(pangrams('We promptly judged antique ivory buckles for the next prize'))
console.log(pangrams('We promptly judged antique ivory buckles for the prize'))
