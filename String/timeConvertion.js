/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    const amPm = s[8]+s[9]
    const time = s.split('')

    if(amPm === 'AM') {
        if(parseInt(time[0] + time[1]) == 12) return [0,0, ...time.slice(2,8)].join('') // 12AM
        
        return time.slice(0,8).join('') // AM
    }

    if(parseInt(time[0] + time[1]) == 12) return time.slice(0,8).join('') // 12PM

    const hour = String(parseInt(time[0]+time[1])+12)
    
    return [hour[0],hour[1], ...time.slice(2,8)].join('') // PM
}

console.log(timeConversion('07:05:45AM'))
console.log(timeConversion('12:05:45AM'))
console.log(timeConversion('12:05:45PM'))
console.log(timeConversion('07:05:45PM'))