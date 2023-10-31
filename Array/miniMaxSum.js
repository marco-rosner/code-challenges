/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(str) {
    // Write your code here
    const arr = str.split(' ').map(Number);
    
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    
    let minArr = new Array(...arr)
    let maxArr = new Array(...arr)

    minArr.splice(minArr.indexOf(max), 1);
    maxArr.splice(maxArr.indexOf(min), 1);

    const sumMin = minArr.reduce((val, acc) => val+acc);
    const sumMax = maxArr.reduce((val, acc) => val+acc);
    
    console.log(`${sumMin} ${sumMax}`)
}

// console.log(miniMaxSum([1,3,5,7,9]))
console.log(miniMaxSum("1 2 3 4 5"))