import { useEffect, useState } from "react"

export const App = () => {
    const [data, setData] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const fetchFn = async () => await fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then((res) => setData(res.message))
        .catch(err => console.error(err))
    // .finally(() => setIsLoading(false))

    const handleFetchFlow = () => {
        setIsLoading(true)
        setData('')

        fetchFn()
    }

    useEffect(() => {
        handleFetchFlow()
    }, [])

    const onClick = () => {
        handleFetchFlow()
    }

    return (
        <>
            <button onClick={onClick}>{isLoading ? "Loading..." : "Fetch!"}</button>
            <br />
            <br />
            <img style={{ maxWidth: '500px' }} onLoad={() => setIsLoading(false)} src={data} />
        </>
    )
}