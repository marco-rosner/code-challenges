const bubbleSort = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        // - i -> the first part is ordered
        // -1 -> the last one will be already ordered
        for (let ind = 0; ind < (arr.length - i - 1); ind++) {
            if (arr[ind] > arr[ind + 1]) {
                // swap numbers
                [arr[ind], arr[ind + 1]] = [arr[ind + 1], arr[ind]]
            }
        }
    }

    return arr
}

console.log(bubbleSort([234, 43, 55, 63, 5, 6, 235, 547])) // [5, 6, 43, 55, 63, 234, 235, 547]