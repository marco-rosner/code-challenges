import { useEffect, useState } from "react"

export const useImages = (page) => {
    const [data, setData] = useState([])
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)

        fetch(
            `https://picsum.photos/v2/list?page=${page}&limit=100`
        )
        .then(response => response.json())
        .then(setData)
        .catch(setError)
        .finally(() => setLoading(false));

    }, [page])
    console.log('loading ', loading)
    return { loading, data, error }
}