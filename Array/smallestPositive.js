// given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].


function smallestPositive(A) {
    // Implement your solution here
    A.sort((a, b) => a - b)

    if (A[0] <= 0) return 1

    for (let i = 0; i <= 1100000; i++) {
        if (i === A.length) return A[i - 1] + 1

        if (A[i] != A[i + 1] && A[i] + 1 !== A[i + 1]) {
            return A[i] + 1
        }
    }
}

console.log(smallestPositive([1, 3, 6, 4, 1, 2])) // 5
console.log(smallestPositive([1, 2, 3])) // 4
console.log(smallestPositive([-1, -3])) // 1
