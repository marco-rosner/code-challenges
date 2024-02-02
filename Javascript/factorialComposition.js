const range = (a, b) => a > b ? [1] : [a, ...range(a+1, b)]

const multiply = arr => arr.reduce((p, a) => p * a)

const factorial = n => multiply(range(1, n))

console.log(factorial(1)) // 1
console.log(factorial(0)) // 1
console.log(factorial(5)) // 120
console.log(factorial(6)) // 720
