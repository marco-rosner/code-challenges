import { useEffect } from "react"

export const useFetch = (url) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)

    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then((data) => data.json())
            .then(setData)
            .catch((err) => {
                console.error(err)

                setError(err)
            })
            .finally(() => setLoading(false))
    }, [url])

    return { data, loading, error }
}

export const App = () => {
    const { data, loading, error } = useFetch("...")

    return (
        <>
            {loading ?
                (<>Loading...</>) :
                error ?
                    (<>Error: {error}</>) :
                    (
                        <ul>
                            {data.map(item => (
                                <li key={item.id}>{item.name}</li>
                            ))}
                        </ul>
                    )}
        </>
    )
}