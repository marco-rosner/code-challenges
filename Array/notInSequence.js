function notInSequence(A) {
    // Implement your solution here
    A.sort((a, b) => a - b)

    if (A[0] < 0) return 1

    for (let i = 0; i < A.length; i++) {
        if (A[i] !== A[i + 1]) {
            if (A[i] !== A[i + 1] - 1 || i === A.length) return A[i] + 1
        }
    }
}

console.log(notInSequence([1, 1, 2, 3, 4, 6])) // 5
console.log(notInSequence([1, 2, 3])) // 4
console.log(notInSequence([-11, -3])) // 1
