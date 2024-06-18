import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const abortController = AbortController()
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        setIsLoading(true)

        const fetchFunciton = async (url) => await fetch(url, { signal: abortController })
            .then((data) => data.json())
            .then(setData)
            .catch((err) => {
                if (err.name === 'AbortError') {
                    console.error('Aborted due Race Condition')
                } else {
                    console.error(err)
                }

                setIsError(!!err)
            })
            .finally(() => setIsLoading(false))

        fetchFunciton(url)

        return () => abortController.abort()
    }, [url])

    return { data, isLoading, isError }
}