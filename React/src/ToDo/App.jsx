import React, { useReducer } from 'react'
import { AddTask } from './AddTask'
import { initialValue } from './initialValue'
import { reducer } from './reducer'
import { Task } from './Task'

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
        <>
            <AddTask onAdd={onAdd} />
            {tasks.map(task => (
                <div key={task.id}>
                    <Task task={task} onChange={onChange} onDelete={onDelete} />
                </div>
            ))}
        </>
    )
}