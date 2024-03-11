// Return an array that contains all the duplicated numbers

const duplicatedNumbers = (arr) => {
    // const result = new Set()

    // for (let i = 0; i < arr.length; i++) {
    //     for (let ind = i + 1; ind < arr.length; ind++) {
    //         if (arr[i] === arr[ind]) result.add(arr[i])
    //     }
    // }

    // return Array.from(result)

    const obj = {}

    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = obj[arr[i]] ? obj[arr[i]] + 1 : 1
    }

    const array = []
    for (const key in obj) {
        if (obj[key] >= 2) array.push(key)
    }

    return array

}

console.log(duplicatedNumbers([1, 0, 100, 10, 5, -1, 100, 5, 0, 200, 7, 3445, 26, 26, 26, 100, 0, 2, -1, -1, -1, 2, 11]))