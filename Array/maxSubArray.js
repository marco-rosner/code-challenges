/*
 * Complete the 'maxSubarray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function maxSubarray(arr) {
    // Write your code here
    const arrOriginal = [...arr]
    arr.sort((a, b) => b - a)
    const min = Math.min(...arrOriginal)
    const result = [min, min]
    let sumSequence = 0
    let sumSubArray = 0

    for (let i = 0; i < arrOriginal.length; i++) {
        sumSubArray = Math.max(arrOriginal[i], sumSubArray + arrOriginal[i])
        result[0] = Math.max(result[0], sumSubArray)

        sumSequence += arr[i]
        if (result[1] < sumSequence) result[1] = sumSequence
    }

    return result
}

console.log(maxSubarray([1, 2, 3, 4]))
console.log(maxSubarray([2, -1, 2, 3, 4, -5]))
console.log(maxSubarray([-2, -3, -1, -4, -6]))