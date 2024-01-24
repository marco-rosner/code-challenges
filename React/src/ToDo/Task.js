import React, { useState } from 'react'

export const Task = ({ task, onChange, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false)
    let content

    content = isEditing ? (
        <>
            <input value={task.title} onChange={(e) => 
                onChange({ ...task, title: e.target.value })}
            />
            <button onClick={() => setIsEditing(false)}>
                Save
            </button>
        </>
    ) : (
        <>
            {task.title}
            <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
    )

    return (
        <>
            <input type="checkbox" checked={task.done} onChange={(e) => 
                onChange({ ...task, done: e.target.checked })}
            />
            {content}
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </>
    )
}