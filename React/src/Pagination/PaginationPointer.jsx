import React, { useState } from "react"

export const PaginationPointer = ({ data }) => {
    const itensPerPage = 10
    const [items, setItems] = useState(data.slice(0, itensPerPage))

    const getPreviousIndex = () => data.indexOf(data[data.indexOf(items[0])])

    const previous = () => {
        setItems(
            data.slice(
                getPreviousIndex() - itensPerPage,
                getPreviousIndex() ,
            ))
    }

    const getNextIndex = () => data.indexOf(data[data.indexOf(items[items.length-1])])

    const next = () => {
        setItems(
            data.slice(
                (getNextIndex() + 1),
                (getNextIndex() + 1 + itensPerPage)
            ))
    }

    return (
        <>
            <ul>
                {items.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <button onClick={previous} disabled={getPreviousIndex() <= 0}>Previous Page</button>
            <button onClick={next} disabled={getNextIndex() >= data.length}>Next Page</button>
        </>
    )
}