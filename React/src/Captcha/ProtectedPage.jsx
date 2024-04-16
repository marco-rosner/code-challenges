import { Grid } from "@mui/material"
import { useState } from "react"
import { Captcha } from "./Captcha"

export const ProtectedPage = () => {
    const [unlocked, setUnlocked] = useState(false)

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: '100vh' }}
        >
            {unlocked ? (
                <>You passed</>
            ) : (
                <Captcha setUnlocked={setUnlocked} />
            )}
        </Grid>
    )
}