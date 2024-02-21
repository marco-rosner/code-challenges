import React, { useEffect, useState } from "react"
import { Alert, Grid, Slide, Snackbar, Typography } from "@mui/material"
import { useImages } from "./useImages"
import { Images } from "./Images"


export const App = () => {
    const [page, setPage] = useState(1)
    const [images, setImages] = useState([])
    const { data, loading, error } = useImages(page)

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop !==
            document.documentElement.offsetHeight ||
            loading
        )
            return

        setPage(page + 1)
    }

    useEffect(() => {
        setImages([...images, ...data])
    }, [data])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [loading])

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: '100vh' }}
        >
            <Typography variant="h2" fontFamily="fantasy">Image Gallery</Typography>
            <Images images={images} />
            {error && <>${error}</>}
            <Snackbar
                open={loading}
                autoHideDuration={3000}
                onClose={() => setTimeout(() => loading, 3000)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                TransitionComponent={Slide}
                sx={{ bgcolor: 'Background.paper' }}
            >
                <Alert severity="info">Loading...</Alert>
            </Snackbar>
        </Grid>
    )
}