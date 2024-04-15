const supressRepetitiveLetter = (string) => {
    const inputString = string.split('')
    let resultString = ''

    for (let i = 0; i < inputString.length; i++) {
        const letter = inputString[i]
        const arrStr = resultString.split('')
        const length = arrStr.length
        const lastChar = arrStr[length - 1]
        const last2Char = arrStr[length - 2]


        if (length < 2 || letter === '_') {
            resultString = `${resultString}${letter}`
            console.log(resultString)
            continue
        }

        if (letter === lastChar && letter === last2Char) {
            resultString = `${arrStr.slice(0, length - 2).toString().replaceAll(',', '')}_`
            console.log(resultString)
            continue
        }

        resultString = `${resultString}${letter}`
        console.log(resultString)
    }
}

supressRepetitiveLetter('aaaaaa')
supressRepetitiveLetter('aaabcccbbbd')