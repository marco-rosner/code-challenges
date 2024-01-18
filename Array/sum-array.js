function simpleArraySum(ar) {
    // Write your code here
    // let sum = 0
    
    // for(let i=0; i < ar.length; i++) {
    //     sum = sum + ar[i];
    // }
    
    // return sum // O(n)

    const length = ar.length
    return length*(length+1)/2 // O(1)

    // return ar.reduce((acc, val) => acc + val);  // O(n)
}

console.log(simpleArraySum([1,2,3]))