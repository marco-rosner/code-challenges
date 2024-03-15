// Time O(log N) Space: O(1)
const binarySearch = (arr, seekElement) => {
    let start = 0
    let end = arr.length - 1

    while (end >= start) {
        pointer = start + Math.floor((end - start) / 2)

        if (arr[pointer] === seekElement) return arr[pointer]

        if (arr[pointer] > seekElement) end = pointer - 1

        if (arr[pointer] < seekElement) start = pointer + 1
    }

    return -1 // Not found
}

console.log(binarySearch([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610], 0))