/*
 * Complete the 'minimumNumber' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING password
 */

function minimumNumberMap(n, password) {
    // Return the minimum number of characters to make the password strong
    const numbers = new Map("0123456789".split('').map(num => [num, num]))
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const lower_case = new Map(alphabet.split('').map(char => [char, char]))
    const upper_case = new Map(alphabet.toUpperCase().split('').map(char => [char, char]))
    const special_characters = new Map("!@#$%^&*()-+".split('').map(special => [special, special]))
    let isValid = [false, false, false, false]

    for (let i = 0; i < password.length; i++) {
        !isValid[0] && (isValid[0] = numbers.has(password[i])) // O(1)
        !isValid[1] && (isValid[1] = lower_case.has(password[i])) // O(1)
        !isValid[2] && (isValid[2] = upper_case.has(password[i])) // O(1)
        !isValid[3] && (isValid[3] = special_characters.has(password[i])) // O(1)
    }

    let missingChar = 0
    for (let ind = 0; ind < isValid.length; ind++) {
        isValid[ind] === false && missingChar++
    }

    return Math.max(missingChar, 6 - n)
}

console.log(minimumNumberMap(3, 'Ab1')) // 3
console.log(minimumNumberMap(11, '#HackerRank')) // 1
console.log(minimumNumberMap(2, '#)')) // 4
console.log(minimumNumberMap(1, '#')) // 5