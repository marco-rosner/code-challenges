import React, { useEffect, useState } from "react"
import { Alert, Grid, Slide, Snackbar, Typography } from "@mui/material"
import { useImages } from "./useImages"
import { Images } from "./Images"

export const App = () => {
    const [page, setPage] = useState(1)
    const [images, setImages] = useState([])
    const { data, loading, error } = useImages(page)

    useEffect(() => {
        setImages((images) => [...images, ...data])
    }, [data])

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "1000px",
            threshold: 0.0
        }

        const observer = new IntersectionObserver(
            () => setPage((page) => page + 1),
            options
        )
        observer.observe(document.querySelector(`#footer`))
    }, [])

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
            <hr id="footer" />
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

// AddEventListener using scroll event and dealing with height manually
//
// const handleScroll = () => {
//     if (
//         window.innerHeight + document.documentElement.scrollTop !==
//         document.documentElement.offsetHeight ||
//         loading
//     )
//         return
//     setPage((page) => page + 1)
// }

// useEffect(() => {
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
// }, [loading])