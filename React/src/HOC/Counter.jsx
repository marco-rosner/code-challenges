import { Typography } from "@mui/material"
import { withErrorBoundary } from "./withErrorBoundary"
import { withLogger } from "./withLogger"

const Counter = ({ count }) => {
    if (count === 3) {
        // try {
        throw new Error('Crashed!')
        // } catch (error) {
        //     console.log(error)
        // }
    }

    return (
        <>
            <Typography>Count: {count}</Typography>
        </>
    )
}

export { Counter }

export default withErrorBoundary(withLogger(Counter))