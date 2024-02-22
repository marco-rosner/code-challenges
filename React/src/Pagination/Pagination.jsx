import React, { useEffect, useState } from "react"

export const Pagination = ({ data }) => {
    const [items, setItems] = useState([])
    const [page, setPage] = useState(1)
    const itensPerPage = 10

    useEffect(() =>
        setItems(
            data.slice(
                (itensPerPage * page) - itensPerPage,
                (itensPerPage * page))
        ),
    [page])

    return (
        <>
            <ul>
                {items.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <button onClick={() => setPage(page - 1)} disabled={page <= 1}>Previous Page</button>
            <button onClick={() => setPage(page + 1)} disabled={(itensPerPage * page) >= data.length}>Next Page</button>
        </>
    )
}