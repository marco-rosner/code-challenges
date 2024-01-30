const sumArray = (arr) => arr.length === 0 ? 0 : arr[0] + sumArray(arr.slice(1))

console.log(sumArray([1,2,3,4,5]))