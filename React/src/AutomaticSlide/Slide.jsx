import { Grid } from "@mui/material"
import { useEffect, useState } from "react"

export const Slide = ({ images, setSrc }) => {
    const length = images.length - 1
    const [indexActive, setIndexActive] = useState(0)

    const onBack = () => {
        setIndexActive(prev => {
            if (prev === 0) return prev = length
            return prev -= 1
        })
    }

    const onNext = () => {
        setIndexActive(prev => {
            if (prev === length) return prev = 0
            return prev += 1
        })
    }

    useEffect(() => setSrc(images[indexActive]?.url), [indexActive])

    useEffect(() => {
        const interval = setInterval(() => {
            setIndexActive(prev => prev === length ? 0 : prev += 1)
            setSrc(() => images[indexActive].url)
        }, 2000)

        return () => clearInterval(interval)
    }, [])

    const onClickImage = (index, url) => {
        setIndexActive(() => index)
        setSrc(() => url)
    }

    return (
        <Grid
            container
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            sx={{ marginTop: '10px' }}
        >
            <button onClick={onBack} style={{ marginRight: '5px' }}>Back</button>
            {images.map((image, i) => (
                <img key={image.id} alt={image.title} style={{ width: '50px', height: '50px' }} onClick={() => onClickImage(i, image.url)} src={image.url} />
            ))}
            <button onClick={onNext} style={{ marginLeft: '5px' }}>Next</button>
        </Grid>
    )
}