import { CardMedia, Grid } from "@mui/material";

export const Images = ({ images }) => (
    <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: '80vh' }}
    >
        {images.map(image => (
            <CardMedia key={image.id} sx={{ margin: "10px" }}>
                <img src={`https://picsum.photos/id/${image.id}/300/300`} alt={image.url} />
            </CardMedia>))}
    </Grid>
)