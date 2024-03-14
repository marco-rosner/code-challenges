const partition = (arr, low, high) => {
    let pivot = arr[high]
    let smallIndex = low - 1;

    for (let ind = low; ind <= high - 1; ind++) {
        if (arr[ind] < pivot) {
            smallIndex++
            [arr[smallIndex], arr[ind]] = [arr[ind], arr[smallIndex]]
        }
    }

    [arr[smallIndex + 1], arr[high]] = [pivot, arr[smallIndex + 1]]

    return smallIndex + 1
}

// Time: O(n log(n)) Space: O(n)
const quickSort = (arr, low, high) => {
    if (low >= high) return

    let pi = partition(arr, low, high)

    quickSort(arr, low, pi - 1)
    quickSort(arr, pi + 1, high)

    return arr
}

const arr = [10, 80, 30, 90, 40]

console.log(quickSort(arr, 0, arr.length - 1))