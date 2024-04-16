import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export const Home = () => (
    <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: '100vh' }}
    >
        <Link to="/protectedPage" style={{ margin: 30 }}>
            <Button>Locked</Button>
        </Link>
    </Grid>
)