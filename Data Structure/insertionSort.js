const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let value = arr[i]
        let prev = i - 1

        while (value < arr[prev] && prev >= 0) {
            arr[prev + 1] = arr[prev]
            prev = prev - 1
        }

        arr[prev + 1] = value
    }

    return arr
}

const arr = [12, 11, 13, 5, 6];

console.log(insertionSort(arr))