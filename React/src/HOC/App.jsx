import { Button, Grid } from "@mui/material"
import { useState } from "react"
import Counter from "./Counter"

export const App = () => {
    const [count, setCount] = useState(0)

    const onClick = () => {
        setCount(count + 1)
    }

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: '100vh' }}
        >
            <Counter count={count} />
            <Button onClick={onClick}>Increase</Button>
        </Grid>
    )
}