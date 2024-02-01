import React, { useState } from "react"

export const PaginationPointer = ({ data }) => {
    const itensPerPage = 10
    const [items, setItems] = useState(data.slice(0, itensPerPage))

    const getIndex = (data, move) => {
        return move === 'next'
            ? data.indexOf(data[data.indexOf(items[items.length-1])])
            : data.indexOf(data[data.indexOf(items[0])])
    }

    const previous = () => {
        setItems(
            data.slice(
                getIndex(data, 'previous') - itensPerPage,
                getIndex(data, 'previous') ,
            ))
    }

    const next = () => {
        setItems(
            data.slice(
                getIndex(data, 'next') + 1,
                (getIndex(data, 'next') + 1 + itensPerPage)
            ))
    }

    return (
        <>
            <ul>
                {items.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <button onClick={previous} disabled={getIndex(data, 'previous') <= 0}>Previous Page</button>
            <button onClick={next} disabled={getIndex(data, 'next') >= data.length}>Next Page</button>
        </>
    )
}