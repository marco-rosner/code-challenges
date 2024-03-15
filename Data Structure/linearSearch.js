const linearSearch = (arr, seekElement) => {
    const result = []

    arr.map((item, index) => item === seekElement && result.push(index))

    return result
}

console.log(linearSearch([1, 2, 3, 4, 2], 2))