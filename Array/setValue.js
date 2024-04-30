const setValue = (index, value) => {
    const arr = [1, 2, 3, 4, 5]
    let auxNum

    for (let i = 0; i <= arr.length; i++) {
        if (i === arr.length) {
            arr.push(auxNum)
            break
        }

        if (i >= index) {
            if (auxNum === undefined) {
                [auxNum, arr[index]] = [arr[i], value]
            } else {
                [auxNum, arr[i]] = [arr[i], auxNum]
            }
        }
    }

    // arr.splice(index, 0, value)

    return arr
}

console.log(setValue(3, 10))
console.log(setValue(1, 10))