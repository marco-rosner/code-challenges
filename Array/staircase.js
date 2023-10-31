/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    // Write your code here
    let space = ''
    let step = ''
    for(let i=0; i<n;i++){
        for(let ind=0;ind<n;ind++) {
            ind+i >= n-1 ? step = "#" + step : space = " " + space
        }
        console.log(space + step)
        space = ''
        step = ''
    }

    // for (let i = 1; i <= n; i++) {
    //     let space = ' '.repeat((n - i));
    //     let step = '#'.repeat((i));
    //     console.log(space + step);
    //   }
}

staircase(6)