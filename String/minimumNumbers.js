/*
 * Complete the 'minimumNumber' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING password
 */

function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    const numbers = "0123456789"
    const lower_case = "abcdefghijklmnopqrstuvwxyz"
    const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const special_characters = "!@#$%^&*()-+"
    let isValid = [false, false, false, false]

    for (let i = 0; i < password.length; i++) {
        !isValid[0] && (isValid[0] = numbers.includes(password[i]))
        !isValid[1] && (isValid[1] = lower_case.includes(password[i]))
        !isValid[2] && (isValid[2] = upper_case.includes(password[i]))
        !isValid[3] && (isValid[3] = special_characters.includes(password[i]))
    }

    let missingChar = 0
    for (let ind = 0; ind < isValid.length; ind++) {
        isValid[ind] === false && missingChar++
    }

    return Math.max(missingChar, 6 - n)
}

console.log(minimumNumber(3, 'Ab1')) // 3
console.log(minimumNumber(11, '#HackerRank')) // 1
console.log(minimumNumber(2, '#)')) // 4
console.log(minimumNumber(1, '#')) // 5