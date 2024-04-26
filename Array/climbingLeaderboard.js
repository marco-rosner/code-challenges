/*
 * Complete the 'climbingLeaderboard' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */

function climbingLeaderboard(ranked, player) {
    // Not performantic
    // let iPlayer = 0, iRanked = 0
    // let pos = 1
    // const result = []

    // while (result.length <= player.length - 1) {
    //     if (iRanked != 0 && ranked[iRanked - 1] !== ranked[iRanked]) {
    //         pos++
    //     }

    //     if (player[iPlayer] >= ranked[iRanked]) {
    //         result.push(pos)
    //         iRanked = result[iPlayer - 1] <= result[iPlayer] ? iRanked : -1
    //         iPlayer++
    //         pos = 1
    //     }

    //     if (iRanked === ranked.length - 1) {
    //         result.push(pos + 1)
    //         iPlayer++
    //         iRanked = -1
    //         pos = 1
    //     }

    //     iRanked++
    // }

    // return result

    // Performatic
    const result = []
    const rankedDistinct = Array.from(new Set(ranked))

    for (let i = 0; i < player.length; i++) {
        while (
            rankedDistinct.length > 0 &&
            rankedDistinct[rankedDistinct.length - 1] <= player[i]
        ) {
            rankedDistinct.pop()
        }

        result.push(rankedDistinct.length + 1)
    }

    return result
}

console.log(climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102]))