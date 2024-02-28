import { useEffect, useState } from "react"

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return windowSize
}

export const App = () => {
    const { width, height } = useWindowSize()

    return (
        <>
            <span>Window width: {width}</span>
            <span>Window height: {height}</span>
        </>
    )

}