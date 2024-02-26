import { Box, Button, Checkbox, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

export const Task = ({ task, onChange, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false)

    return (
        <Grid
            key={task.id}
            container
            direction="row"
            justifyContent="left"
            alignItems="center"
            sx={{ width: isEditing ? '30vw' : '20vw' }}
        >
            <Checkbox checked={task.done} onChange={(e) =>
                onChange({ ...task, done: e.target.checked })}
            />
            {isEditing ? (
                <TextField value={task.title} sx={{ margin: "10px" }} onChange={(e) =>
                    onChange({ ...task, title: e.target.value })}
                />
            ) : (
                <Typography variant='body1' sx={{ margin: "10px" }}>{task.title}</Typography>
            )}
            <Button variant="outlined" sx={{ margin: "10px" }} onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? "Save" : "Edit"}
            </Button>
            <Button variant="outlined" sx={{ margin: "10px" }} onClick={() => onDelete(task.id)}>Delete</Button>
        </Grid>
    )
}