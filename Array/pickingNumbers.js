/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
    // Write your code here
    a.sort((a, b) => a - b)

    let subArr = []
    let countArr = []

    for (let i = 0; i <= a.length; i++) {
        for (let j = i; j <= a.length; j++) {
            if ((Math.abs(a[j]) - Math.abs(a[i])) <= 1) {
                subArr.push(a[j])
                countArr[i] = subArr.length
            }
        }

        subArr = []
    }

    return Math.max(...countArr)
}

console.log(pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5]))
console.log(pickingNumbers([4, 6, 5, 3, 3, 1]))
console.log(pickingNumbers([1, 2, 2, 3, 1, 2]))