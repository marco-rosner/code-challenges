import React, { useState, useEffect } from 'react';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
const PER_PAGE = 10
const INITIAL_PAGE = 0

export default function Table() {
    const abortController = new AbortController()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(INITIAL_PAGE)
    const [lastPage, setLastPage] = useState(0)

    const fetchUsers = async (page) => {
        setLoading(true)
        await fetch(`${USERS_URL}?page=${page}`, { signal: abortController.signal })
            .then((data) => data.json())
            .then((data) => {
                setLastPage(Math.round(data.count / PER_PAGE))
                setUsers(data)
            })
            .catch((err) => {
                if (err.name === "AbortError") {
                    console.error('Abort Error Due Race Condition')
                } else {
                    console.error(err)
                }

                setError(!!err)
            }).finally(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        fetchUsers(page)

        return () => abortController.abort()
    }, [page])

    if (error) return <>Something went wrong</>

    if (loading) return <>Loading...</>

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <section className="pagination">
                <button className="first-page-btn" disabled={loading || page === INITIAL_PAGE} onClick={() => setPage(INITIAL_PAGE)}>first</button>
                <button className="previous-page-btn" disabled={loading || page === INITIAL_PAGE} onClick={() => setPage(page - 1)}>previous</button>
                <button className="next-page-btn" disabled={loading || page === lastPage} onClick={() => setPage(page + 1)}>next</button>
                <button className="last-page-btn" disabled={loading || page === lastPage} onClick={() => setPage(lastPage)}>last</button>
            </section>
        </div>
    );
};