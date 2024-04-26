function hurdleRace(k, height) {
    // Write your code here
    const max = Math.max(...height)

    if (k >= max) return 0

    return max - k
}

console.log(hurdleRace(4, [1, 6, 3, 5, 2]))