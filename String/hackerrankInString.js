/*
 * Complete the 'hackerrankInString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function hackerrankInString(s) {
    // Write your code here
    const hacker = 'hackerrank'
    let index = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] == hacker[index]) {
            index++
            if (index == 10) return 'YES'
        }
    }

    return 'NO'
}

console.log(hackerrankInString('hereiamstackerrank'))
console.log(hackerrankInString('hackerworld'))
console.log(hackerrankInString('hhaacckkekraraannk'))