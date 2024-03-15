// Time: O(Sqrt(n)) Space: O(1)
const jumpSearch = (arr, seekElement) => {
    let step = Math.sqrt(arr.length)
    let startWindow = 0
    let endWindow = 0

    // jumping through windows
    for (endWindow = startWindow; arr[endWindow] <= seekElement; endWindow += step) {
        if (arr[startWindow] <= seekElement && seekElement < arr[endWindow]) break

        startWindow = endWindow
    }

    // linear search
    for (let i = startWindow; i < endWindow; i++) {
        if (arr[i] === seekElement) return arr[i]
    }

    return -1 // Not found
}

console.log(jumpSearch([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610], 55))