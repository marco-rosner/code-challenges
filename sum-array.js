function simpleArraySum(ar) {
    // Write your code here
    // let sum = 0
    
    // for(let i=0; i < ar.length; i++) {
    //     sum = sum + ar[i];
    // }
    
    // return sum

    return ar.reduce((acc, val) => acc + val); 
}

console.log(simpleArraySum([1,2,3]))