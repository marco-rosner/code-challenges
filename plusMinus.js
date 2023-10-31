/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let pos = 0, neutro = 0, neg = 0;

    for(let i = 0; i<arr.length;i++) {
        if(arr[i]>0) pos++
        if(arr[i]<0) neg++
        if(arr[i]==0) neutro++
    }
    
    console.log((pos/arr.length).toFixed(6))
    console.log((neg/arr.length).toFixed(6))
    console.log((neutro/arr.length).toFixed(6))
}

plusMinus([1,1,0,-1,-1])
plusMinus([-4,3,-9,0,4,1])