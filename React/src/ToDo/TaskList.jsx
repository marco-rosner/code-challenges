import { Grid } from "@mui/material"
import { Task } from "./Task"

export const TaskList = ({ tasks, onChange, onDelete }) => {
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignContent="center"
            xs={{ width: '80vw' }}>
            {tasks.map(task => (
                <Task key={task.id} task={task} onChange={onChange} onDelete={onDelete} />
            ))}
        </Grid>
    )
}