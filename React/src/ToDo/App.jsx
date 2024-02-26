import React, { useReducer } from 'react'
import { Grid } from '@mui/material'
import { AddTask } from './AddTask'
import { initialValue } from './initialValue'
import { reducer } from './reducer'
import { TaskList } from './TaskList'

export const App = () => {
    const [tasks, dispatch] = useReducer(reducer, initialValue)

    const onAdd = (title) => dispatch({
        type: 'added',
        payload: { id: tasks.length, title, done: false }
    })

    const onChange = (task) => dispatch({
        type: 'changed',
        payload: task
    })

    const onDelete = (id) => dispatch({
        type: 'deleted',
        payload: { id }
    })

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignContent="center"
            sx={{ minHeight: '100vh', width: '100vw' }}
        >
            <AddTask onAdd={onAdd} />
            <TaskList tasks={tasks} onChange={onChange} onDelete={onDelete} />
        </Grid>
    )
}