import { Button, Grid } from "@mui/material";
import React, { ReactNode, useState } from "react";

export const App = (): ReactNode => {
    const [toggle, setToggle] = useState<boolean>(false)

    const onClick = (): void => {
        setToggle(!toggle)
    }

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: '100vh' }}
        >
            <Button onClick={onClick}>
                {toggle ? "ON" : 'OFF'}
            </Button>
        </Grid>
    )
}