import { useEffect, useState } from "react"

export const useUsers = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [error, setError] = useState()

    useEffect(() => {
        setLoading(true)

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(result => result.json())
            .then((data) => {
                const ascSorted = data.sort((a, b) => a.name.localeCompare(b.name))
                setData(ascSorted)
            })
            .catch(setError)
            .finally(() => setLoading(false))
    }, [])

    return { loading, data, error }
}