import { Grid } from "@mui/material"
import { useState } from "react"
import { Image } from "./Image"
import { Slide } from "./Slide"
import { useImages } from "./usePhotos"

export const AutomaticSlide = () => {
    const { data: images, loading } = useImages()
    const [src, setSrc] = useState('')

    if (loading) return <span>Loading...</span>

    return (
        <Grid
            container
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh' }}
        >
            <Image src={src} />
            <Slide images={images.slice(0, 5)} setSrc={setSrc} />
        </Grid>
    )
}