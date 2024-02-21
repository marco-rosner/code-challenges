import React, { useEffect, useState } from "react"
import { useImages } from "./useImages"


export const App = () => {
    const [page, setPage] = useState(1)
    const [images, setImages] = useState([])
    const { data, loading, error } = useImages(page)

    const handleScroll = () => {
        if (
            window.innerHeight + (document.documentElement.scrollTop + 1000) <
            document.documentElement.offsetHeight ||
            loading
        )
            return;

        setPage(page + 1)
    }

    useEffect(() => {
        setImages([...images, ...data])
    }, [data])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [loading])

    return (
        <>
            <h1>Image Gallery</h1>
            {images.map(image => (<img key={image.id} src={`https://picsum.photos/id/${image.id}/300/300`} alt={image.url} />))}
            {loading && <>Loading...</>}
            {error && <>${error}</>}
        </>
    )
}