import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        setIsLoading(true)

        fetch(url)
            .then((data) => data.json())
            .then(setData)
            .catch((err) => {
                console.error(err)
                setIsError(!!err)
            })
            .finally(() => setIsLoading(false))

    }, [url])

    return { data, isLoading, isError }
}