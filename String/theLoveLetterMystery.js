/*
 * Complete the 'theLoveLetterMystery' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function theLoveLetterMystery(s) {
    // Write your code here
    let str_arr = s.split('')
    let middle = Math.round((str_arr.length/2))
    let diff = 0
    let ops = 0
    let char_pre = 0

    for(let i=str_arr.length;i>middle;i--) {
        char_pre = str_arr.length-i
        
        if(str_arr[char_pre].charCodeAt(0) < str_arr[i-1].charCodeAt(0)) {
            diff = str_arr[i-1].charCodeAt(0) - str_arr[char_pre].charCodeAt(0)
            
            str_arr[i-1] = String.fromCharCode(str_arr[char_pre].charCodeAt(0))

            ops = diff + ops
        } else if(str_arr[char_pre].charCodeAt(0) > str_arr[i-1].charCodeAt(0)) {
            diff = str_arr[char_pre].charCodeAt(0) - str_arr[i-1].charCodeAt(0)
            
            str_arr[char_pre] = String.fromCharCode(str_arr[i-1].charCodeAt(0))
            
            ops = diff + ops
        }
    }

    return ops
}

console.log(theLoveLetterMystery('abc')) // 2
console.log(theLoveLetterMystery('abcba')) // 0
console.log(theLoveLetterMystery('abcd')) // 4
console.log(theLoveLetterMystery('cba')) // 2
console.log(theLoveLetterMystery('adslkfjas')) // 36
console.log(theLoveLetterMystery('bafhaef')) // 13
console.log(theLoveLetterMystery('hffv')) // 14
console.log(theLoveLetterMystery('zycfjuvrhxf')) // 50
console.log(theLoveLetterMystery('fdjsqlgmcux')) // 58