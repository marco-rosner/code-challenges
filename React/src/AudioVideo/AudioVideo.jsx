import { Box, Button, Grid } from "@mui/material"

export const Video = () => {
    return (
        <video
            id="video"
            controls
            loop
            preload="auto"
            width={320}
            height={320}
        >
            <source src="rabbit320.mp4" type="video/mp4" />
            <track kind="subtitles" src="subtitles_es.vtt" srclang="es" label="Spanish" />
            <p>No supported</p>
        </video>
    )
}

export const Audio = () => {
    return (
        <audio
            id="audio"
            controls
        >
            <source src="rabbit320.mp4" type="video/mp4" />
            <p>No supported</p>
        </audio>
    )
}

export const App = () => {

    const onPlay = () => {
        const audio = document.getElementById("audio")
        const video = document.getElementById("video")

        audio.play()
        video.play()
    }

    const onStop = () => {
        const audio = document.getElementById("audio")
        const video = document.getElementById("video")

        audio.pause()
        video.pause()
    }


    return (
        <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            alignContent="center"
            alignItems="center"
            sx={{ minHeight: '100vh' }}
        >
            <Video />
            <Audio />
            <Box>
                <Button onClick={onPlay}>Play</Button>
                <Button onClick={onStop}>Stop</Button>
            </Box>
        </Grid>
    )
}