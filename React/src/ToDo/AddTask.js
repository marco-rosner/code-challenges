import { useState } from "react"

export const AddTask = ({ onAdd }) => {
    const [title, setTitle] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        
        setTitle('')
        onAdd(title)
    }

    return (
        <form onSubmit={onSubmit}>
            <input name="task" onChange={(e) => setTitle(e.target.value)} value={title} />
            <button type="submit">Add</button>
        </form>
    )

}