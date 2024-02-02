function sort(arr) {
    // the correct way is using doSorted function but it only available in NodeJS 20.
    // Currenctly, I am using Node 18 =/
    
    return [...arr].sort((a, b) => a - b)
}

console.log(sort([200, 1, 4, 5, 3, 3.2, 1000, 8])) // [1, 3, 3.2, 4, 5, 8, 200, 1000]