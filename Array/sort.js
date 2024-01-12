function sort(arr) {
    return arr.sort((a, b) => a - b)
}

console.log(sort([200, 1, 4, 5, 3, 3.2, 1000, 8])) // [1, 3, 3.2, 4, 5, 8, 200, 1000]