import { useEffect } from "react"

export const useFetch = (url) => {
    const abortController = new AbortController()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)

    useEffect(() => {
        setLoading(true)

        const fetchFunction = async (url) => await fetch(url, { signal: abortController.signal })
            .then((data) => data.json())
            .then(setData)
            .catch((err) => {
                if (err.name === 'AbortError') {
                    console.error('Aborted due Race Condition')
                } else {
                    console.error(err)
                }

                setError(err)
            })
            .finally(() => setLoading(false))

        fetchFunction(url)

        return () => abortController.abort()
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