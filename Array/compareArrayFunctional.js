// The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

// If a[i] > b[i], then Alice is awarded 1 point.
// If a[i] < b[i], then Bob is awarded 1 point.
// If a[i] = b[i], then neither person receives a point.
// Comparison points is the total points a person earned.

/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {
    const result = a.reduce((acc, cur, i) => {
        if(a[i]>b[i]) acc[0]+=1
        if(b[i]>a[i]) acc[1]+=1

        return acc
    }, [0,0])

    console.log(result)
}

const bob = [5, 6, 7]
const alice = [3, 6, 10]

compareTriplets(bob, alice)