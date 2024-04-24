// Using performance.now() and console.time()
//
// Output:
//
// twoStrings - using Map: 1.739990234375 ms
// twoStrings - using Map: 1.761ms
// Performance Total 1:  0.0056190043687820435
// Performance Total 2:  0.0024610012769699097
// Performance Total Map:  0.01657100021839142
//
function twoStrings(s1, s2) {
    // Solution 1
    const start1 = performance.now()
    for (let i = 0; i < s1.length; i++) {
        for (let ind = 0; ind < s2.length; ind++) {
            if (s1[i].charCodeAt(0) === s2[ind].charCodeAt(0)) return 'YES'
        }
    }
    const end1 = performance.now()

    // Solution 2
    const start2 = performance.now()
    let length = s1.length
    for (let i = 0; i < length; i++) {
        if (s2.includes(s1[i])) return 'YES'
    }
    const end2 = performance.now()

    // Solution using HashMap
    const startMap = performance.now()
    const s2Map = new Map(s2.split('').map(char => [char, char]))

    for (let i = 0; i < s1.length; i++) {
        if (s2Map.get(s1[i])) return 'YES'
    }
    const endMap = performance.now()

    console.log('Performance Total 1: ', end1 - start1)
    console.log('Performance Total 2: ', end2 - start2)
    console.log('Performance Total Map: ', endMap - startMap)

    return 'NO'
}

console.time('twoStrings - using Map') // disabling console.logs
console.log(twoStrings('hello', 'world'))
console.timeEnd('twoStrings - using Map') // disabling console.logs
console.log(twoStrings('hi', 'world')) // Measuring each solution using performance.now()