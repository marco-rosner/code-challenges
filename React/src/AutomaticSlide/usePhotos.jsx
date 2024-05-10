import { useEffect, useState } from "react"

export const useImages = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true)

        fetch("https://jsonplaceholder.typicode.com/photos")
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((err) => setError(err))
            .finally(() => setLoading(false))
    }, [])

    return { data, loading, error }
}