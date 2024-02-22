import { useEffect, useState } from "react"

export const useUsers = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [error, setError] = useState()

    useEffect(() => {
        setLoading(true)

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(result => result.json())
            .then(setData)
            .catch(setError)
            .finally(() => setLoading(false))
    }, [])

    return { loading, data, error }
}