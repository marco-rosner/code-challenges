/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
    // Write your code here
    const s = new Set()

    for(let i=0;i<a.length;i++){
        if(s.has(a[i])) {
            s.delete(a[i])
        } else {
            s.add(a[i])
        }
    }

    return s.values().next().value
}

console.log(lonelyinteger([1,1,2,2,4,3,3]))
console.log(lonelyinteger([1]))
console.log(lonelyinteger([1,1,2]))
console.log(lonelyinteger([0,0,1,2,1]))