/**
 * @param {string} versiona The first version number to compare.
 * @param {string} versionb The second version number to compare.
 * @return {number} The comparison result: -1 if versiona < versionb, 0 if they are equivalent, and 1 if versiona > versionb.
 */
function compareVersions(versiona, versionb) {
    // Write your code here
    let i = 0
    let numberA, numberB
    const aWithOutDots = versiona.split('.')
    const bWithOutDots = versionb.split('.')
    const lenA = aWithOutDots.length - 1
    const lenB = bWithOutDots.length - 1

    while (true) {
        if (i <= lenA) {
            numberA = aWithOutDots[i]
        } else {
            numberA = 0
        }

        if (i <= lenB) {
            numberB = bWithOutDots[i]
        } else {
            numberB = 0
        }

        if (numberA === 0 && numberB === 0) return 0
        if (numberA < numberB) return -1
        if (numberA > numberB) return 1

        i++
    }
}

console.log(compareVersions('4', '4.0')) // 0
console.log(compareVersions('3', '7')) // -1
console.log(compareVersions('5.3.1', '5.2.1')) // 1
console.log(compareVersions('5.3.1', '5.3.1.2')) // -1