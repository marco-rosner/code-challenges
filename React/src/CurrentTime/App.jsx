import { Grid, Typography } from "@mui/material"
import { useEffect, useState } from "react"

export const App = () => {
    const [currentTime, setCurrentTime] = useState()

    useEffect(() => {
        const interval = setInterval(() => {
            const today = new Date()

            setCurrentTime((prev) => `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`)
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{
                minHeight: '100vh'
            }}
        >
            <Typography variant="h3">Current Time</Typography>
            <Typography>{currentTime}</Typography>
        </Grid>
    )
}