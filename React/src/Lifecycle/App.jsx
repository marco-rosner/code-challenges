import { useEffect, useState } from "react"

const Counter = ({ setCount, count }) => {
    useEffect(() => {
        const interval = setInterval(() => setCount(prev => prev + 1), 2000)

        return () => {
            console.log("componentWillUnmount")
            clearInterval(interval)
        }
    }, [])

    return (
        <>{count}</>
    )
}


export const App = () => {
    const [count, setCount] = useState(0)

    useEffect(() => console.log("componentDidMount"), []) // with empty dependency array

    useEffect(() => console.log("componentDidUpdate")) // without dependency array

    return (
        <>
            {count < 5 ? <Counter setCount={setCount} count={count} /> : 'BOOOM!!!'}
        </>
    )
}