import { useEffect } from "react"

export const useDelay = (delayTime) => {
    const [done, setDone] = useState(false)

    useEffect(() => {
        const delay = setTimeout(() => {
            setDone(true)
        }, delayTime)

        return () => clearTimeout(delay)
    }, [delayTime])

    return done
}

export const App = () => {
    const isDone = useDelay(2000)

    return (
        <>
            {isDone ? (
                <>Hello</>
            ) : (
                <>Loading...</>
            )}
        </>
    )
}