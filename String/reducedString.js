const reducedString = (str) => {
    // const charMap = new Map()

    // for (let char of str.split('')) {
    //     charMap.has(char) ? charMap.set(char, charMap.get(char) + 1) : charMap.set(char, 1)
    // }

    // return ([...charMap.entries()]
    //     .sort((a, b) => b[1] - a[1])
    //     .map(s => s[0])).join('')

    const result = {}
    const str_arr = str.split('')

    for (let i = 0; i < str_arr.length; i++) {
        result[str_arr[i]] ? result[str_arr[i]] = result[str_arr[i]] + 1 : result[str_arr[i]] = 1
    }

    return Object.entries(result).sort((a, b) => b[1] - a[1]).map(s => s[0]).join('')
}

console.log(reducedString('hello world'))