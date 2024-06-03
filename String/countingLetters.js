const countingLetters = (s) => {
    const lowercase = s.toLowerCase()
    const report = {}

    for (let i = 0; i < lowercase.length; i++) {
        if (lowercase[i] == ' ') continue

        if (report[lowercase[i]]) {
            report[lowercase[i]] = report[lowercase[i]] + 1
        } else {
            report[lowercase[i]] = 1
        }
    }

    return report
}

console.log(countingLetters('aba'))
console.log(countingLetters('aBa'))
console.log(countingLetters('aabbaccddd'))
console.log(countingLetters(''))
console.log(countingLetters('a b a'))