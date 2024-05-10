import { Grid } from "@mui/material"
import { useState } from "react"
import { Image } from "./Image"
import { Slide } from "./Slide"
import { useImages } from "./usePhotos"

export const AutomaticSlide = () => {
    const { data: images, loading } = useImages()
    const [src, setSrc] = useState('')

    return (
        <Grid
            container
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh' }}
        >
            {loading ? (
                <span>Loading...</span>
            ) : (
                <>
                    <Image src={src} />
                    <Slide images={images.slice(0, 5)} setSrc={setSrc} />
                </>
            )}

        </Grid>
    )
}