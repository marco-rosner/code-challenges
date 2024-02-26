import { Grid, TextField, Button, Box } from "@mui/material"
import { useState } from "react"

export const AddTask = ({ onAdd }) => {
    const [title, setTitle] = useState('')

    const onClick = () => {
        onAdd(title)
        setTitle('')
    }

    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignContent="center"
        >
            <TextField
                label="new task"
                name="task"
                sx={{ margin: '10px' }}
                onChange={(e) => setTitle(e.target.value)}
                value={title} />
            <Button
                variant="outlined"
                sx={{ margin: '10px' }}
                type="submit"
                onClick={onClick}>
                Add
            </Button>
        </Grid>
    )

}