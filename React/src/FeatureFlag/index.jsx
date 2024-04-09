import { Grid, Typography } from "@mui/material"
import { FeatureFlagChildren } from "./FeatureFlagChildren"
import { FeatureFlagRender } from "./FeatureFlagRender"

const FLAGS = {
    flagA: 'flagA',
    flagB: 'flagB'
}

export const App = () => {
    const currentFlag = 'flagA'

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignContent="center"
            sx={{ minHeight: '100vh', width: '100vw' }}
        >
            <FeatureFlagChildren flag={FLAGS.flagA} currentFlag={currentFlag}>
                <Typography>{FLAGS.flagA}</Typography>
            </FeatureFlagChildren>
            <FeatureFlagChildren flag={FLAGS.flagB} currentFlag={currentFlag}>
                <Typography>{FLAGS.flagB}</Typography>
            </FeatureFlagChildren>


            <FeatureFlagRender
                currentFlag={currentFlag}
                componentA={<Typography>{FLAGS.flagA}</Typography>}
                flagA={FLAGS.flagA}
                componentB={<Typography>{FLAGS.flagB}</Typography>}
                flagB={FLAGS.flagB}
            />
        </Grid>
    )
}