import { Grid } from "@mui/material";
import { Images } from "./Images";

export const Captcha = ({ setUnlocked }) => (
    <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: '100vh' }}
    >
        <Images answer={Math.floor(Math.random() * 5 - 1)} setUnlocked={setUnlocked} />
    </Grid>
)