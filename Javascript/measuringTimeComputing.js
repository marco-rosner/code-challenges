// Using performance.now() and console.time()
//
// Output:
//
// YES
// Measuring Time Computing: 1.7548828125 ms
// Measuring Time Computing: 1.795ms
// Performance Total two arrays:  0.0038989782333374023
// Performance Total includes:  0.0028370022773742676
// Performance Total Set:  0.009216010570526123
// NO
//
function twoStrings(s1, s2) {
    // Solution 1
    const start1 = performance.now()
    for (let i = 0; i < s1.length; i++) {
        for (let ind = 0; ind < s2.length; ind++) {
            if (s1[i] === s2[ind]) return 'YES'
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

    // Solution using Set
    const startMap = performance.now()
    const s2Map = new Set([...s2])
    for (let i = 0; i < s1.length; i++) {
        if (s2Map.has(s1[i])) return 'YES'
    }
    const endMap = performance.now()

    console.log('Performance Total two arrays: ', end1 - start1)
    console.log('Performance Total includes: ', end2 - start2)
    console.log('Performance Total Set: ', endMap - startMap)

    return 'NO'
}

console.time('Measuring Time Computing') // disabling console.logs
console.log(twoStrings('hello', 'world'))
console.timeEnd('Measuring Time Computing') // disabling console.logs
console.log(twoStrings('hi', 'world')) // Measuring each solution using performance.now()