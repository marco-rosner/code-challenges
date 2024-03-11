// Given a number string n and a number k.
// Repeat the string n, k times. and then calculate the super digit by adding up all the digits in the new string.
// If the sum is not a single digit then add up all the digits of that number too.
// Repeat the process until you get a single digit.

// EG: '9875', 4 ⇒ '9875987598759875' 9+8+7+5+9+8+7+5+9+8+7+5+9+8+7+5 = 116 1+1+6 = 8 Ans: 8

const calculateSingleDigit = (str, num) => {
    const muplitedString = str.repeat(num)
    let sum = 0
    let sumAux = 0
    let ind = 0

    for (let i = 0; i < muplitedString.length; i++) {
        sum = Number(muplitedString[i]) + sum
    }

    if (sum < 10) return sum

    while (sum > 10) {
        sumAux = sumAux + Number(String(sum)[ind])
        ind++
        if (String(sum).length === ind) {
            ind = 0
            sum = sumAux
            sumAux = 0
        }
    }

    return sum
}

// console.log(calculateSingleDigit('1', 4))
// console.log(calculateSingleDigit('9875', 4))
console.log(calculateSingleDigit('37', 3))