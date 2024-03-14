/*
 * Complete the 'decentNumber' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function decentNumber(n) {
    // Write your code here
    // const divPer3 = n % 3 === 0
    // const divPer5 = n % 5 === 0
    // let num3s = 0
    // let num5s = 0

    // if (!divPer3 && !divPer5) {
    //     for (let i = 3; i < n; i = i + 3) {
    //         if (i % 3 === 0 && (n - i) % 5 === 0 && i + (n - i) === n) {
    //             num5s = i
    //             num3s = n - i
    //         }
    //     }

    //     if (!num5s && !num3s) {
    //         console.log('-1')
    //     } else {
    //         console.log('5'.repeat(num5s) + '3'.repeat(num3s))
    //     }
    // }

    // if (divPer3) {
    //     console.log('5'.repeat(n))
    // } else if (divPer5) console.log('3'.repeat(n))

    for (let i = n; i >= 0; i--) {
        if (i % 3 === 0 && (n - i) % 5 === 0) {
            return console.log('5'.repeat(i) + '3'.repeat(n - i))
        }
    }

    return console.log('-1')
}

decentNumber(1)
decentNumber(3)
decentNumber(5)
decentNumber(11)
decentNumber(15)