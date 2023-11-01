/*
 * Complete the 'separateNumbers' function below.
 *
 * The function accepts STRING s as parameter.
 */

function buildString(initNumber, l) {
    let res = '';
    
    for (let i = BigInt(initNumber); res.length < l; res += i++);

    return res;
}

function separateNumbers(s) {
    if (s.length < 2) {
        console.log('NO');
        return;
    }

    for (let i = 0; i < s.length / 2; i++) {
        const initNumber = s.slice(0, i + 1);

        if (buildString(initNumber, s.length) === s) {
            console.log('YES ' + initNumber);
            return;
        }
    }

    console.log('NO');
}

separateNumbers('1234') // Yes
separateNumbers('91011') // Yes
separateNumbers('99100') // Yes
separateNumbers('101103') // No
separateNumbers('010203') // NO
separateNumbers('13') // No
separateNumbers('9899100') // Yes
separateNumbers('888990') // Yes
separateNumbers('444445') // Yes
separateNumbers('58589967442418995858996744241900') // Yes