// == RUNNING SAMPLE TEST CASES ==

// == INPUT ==
// ["4","0:1","2:2","1:2","3:1"]

// == OUTPUT ==
// 4

// << CORRECT >>

// == INPUT ==
// ["4","1:1","2:2","1:2","0:1"]

// == OUTPUT ==
// impossible

// << CORRECT >>

// == 8 TEST CASES HIDDEN ==

// ["4","3:1","2:2","1:2","0:1"] // 0

function GasStation(strArr) {
    const resIndex = []
    let gas = 0
    let needGas = 0
    let ind = 1

    for (let i = 1; i < strArr.length; i++) {
        gas = Number(strArr[i].split("")[0])
        needGas = Number(strArr[i].split("")[2])
        ind = i + 1
        // console.log('starting i and ind', i, ind)
        while (ind <= strArr.length && gas >= 0) {
            if (ind === i) {
                // console.log('adding ', i)
                resIndex.push(i)
                break
            }

            if (ind === strArr.length) {
                // console.log('return')
                ind = 1
            }

            if (gas < needGas) {
                // console.log('break')
                break
            }

            gas = gas - needGas

            // console.log('new gas >>', gas)

            // console.log('i >>', i)
            // console.log('ind >', ind)
            // console.log('strArr >', strArr)
            gas += Number(strArr[ind].split("")[0])
            needGas = Number(strArr[ind].split("")[2])

            // console.log('gas >>', gas)
            // console.log('needGas >>', needGas)

            ind++
        }
        // console.log('next ', resIndex)
        gas = 0
        needGas = 0
        ind = 1
    }
    // code goes here  
    return resIndex.length > 0 ? resIndex[0] : 'impossible';
}

// keep this function call here 
console.log(GasStation(["4", "0:1", "2:2", "1:2", "3:1"]));
console.log(GasStation(["4", "1:1", "2:2", "1:2", "0:1"]));