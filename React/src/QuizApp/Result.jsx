const CORRECT = "Correct!"

export const Result = ({ score, questionTotal }) => {
    return (
        <div>Quiz Complete! You scored {score.reduce((acc, cur) => cur === CORRECT ? acc + 1 : acc, 0)} out of {questionTotal}!</div>
    )
}