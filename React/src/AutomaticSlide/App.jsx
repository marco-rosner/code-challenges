import { Grid } from "@mui/material"
import { AutomaticSlide } from "./AutomaticSlide"

export const App = () => {
    return (
        <Grid
            container
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            xs={{ minHeight: "100vh" }}>
            <AutomaticSlide />
        </Grid>
    )
}